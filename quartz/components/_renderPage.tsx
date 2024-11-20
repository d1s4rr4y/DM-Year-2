import { Root, Element, ElementContent } from "hast"
import { render } from "preact-render-to-string"
import React from "react" 
import { visit } from "unist-util-visit"

import { GlobalConfiguration } from "../cfg"
import { i18n } from "../i18n"
import { QuartzPluginData } from "../plugins/vfile"
import { clone, FullSlug, RelativeURL, joinSegments, normalizeHastElement } from "../util/path"
import { JSResourceToScriptElement, StaticResources } from "../util/resources"
import BodyConstructor from "./Body"
import HeaderConstructor from "./Header"
import { QuartzComponent, QuartzComponentProps } from "./types"

interface RenderComponents {
    head: QuartzComponent
    header: QuartzComponent[]
    beforeBody: QuartzComponent[]
    pageBody: QuartzComponent
    left: QuartzComponent[]
    right: QuartzComponent[]
    footer: QuartzComponent
} 

const headerRegex = new RegExp(/[1-6]/)

export function pageResources(
    baseDir: FullSlug | RelativeURL,
    staticResources: StaticResources,
  ): StaticResources {
    const contentIndexPath = joinSegments(baseDir, "static/contentIndex.json")
    const contentIndexScript = `const fetchData = fetch("${contentIndexPath}").then(data => data.json())`
  
    return {
      css: [joinSegments("/", "index.css"), ...staticResources.css],
      js: [
        {
          src: joinSegments(baseDir, "prescript.js"),
          loadTime: "beforeDOMReady",
          contentType: "external",
        },
        {
          loadTime: "beforeDOMReady",
          contentType: "inline",
          spaPreserve: true,
          script: contentIndexScript,
        },
        ...staticResources.js,
        {
          src: joinSegments(baseDir, "postscript.js"),
          loadTime: "afterDOMReady",
          moduleType: "module",
          contentType: "external",
        },
      ],
    }
}

export function renderPage(
    cfg: GlobalConfiguration,
    slug: FullSlug,
    componentData: QuartzComponentProps,
    components: RenderComponents, 
    pageResources: StaticResources,
): string { 
    // make a deep copy of the tree so we don't remove the transclusion references
  // for the file cached in contentMap in build.ts
  const root = clone(componentData.tree) as Root

  // process transcludes in componentData
  visit(root, "element", (node) => {
    if (node.tagName === "span") {
      const classNames = (node.properties?.className ?? []) as string[]
      if (classNames.includes("transclude")) {
        const transcludeTarget = node.properties["dataUrl"] as FullSlug

        const page = componentData.allFiles.find((f) => f.slug === transcludeTarget)
        if (!page) {
          return
        }

        const inner = node.children[0] as Element
        let blockRef = node.properties.dataBlock as string | undefined
        if (blockRef?.startsWith("#^")) {
          // Transclude block
          blockRef = blockRef.slice("#^".length)
          const blockNode = page.blocks?.[blockRef]
          if (blockNode) {
            node.children = [normalizeHastElement(blockNode, slug, transcludeTarget)]
          }
        } else if (blockRef?.startsWith("#") && page.htmlAst) {
          // header transclude
          blockRef = blockRef.slice(1)
          let startIdx = undefined
          let startDepth = undefined
          let endIdx = undefined
          for (const [i, el] of page.htmlAst.children.entries()) {
            // skip non-headers
            if (!(el.type === "element" && el.tagName.match(headerRegex))) continue
            const depth = Number(el.tagName.substring(1))

            // lookin for our blockref
            if (startIdx === undefined || startDepth === undefined) {
              // skip until we find the blockref that matches
              if (el.properties?.id === blockRef) {
                startIdx = i
                startDepth = depth
              }
            } else if (depth <= startDepth) {
              // looking for new header that is same level or higher
              endIdx = i
              break
            }
          }

          if (startIdx === undefined) {
            return
          }

          node.children = [
            ...(page.htmlAst.children.slice(startIdx, endIdx) as ElementContent[]).map((child) =>
              normalizeHastElement(child as Element, slug, transcludeTarget),
            ),
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal", "transclude-src"] },
              children: [],
            },
          ]
        } else if (page.htmlAst) {
          // page transclude
          node.children = [
            {
              type: "element",
              tagName: "h1",
              properties: {},
              children: [
                {
                  type: "text",
                  value:
                    page.frontmatter?.title ??
                    i18n(cfg.locale).components.transcludes.transcludeOf({
                      targetSlug: page.slug!,
                    }),
                },
              ],
            },
            ...(page.htmlAst.children as ElementContent[]).map((child) =>
              normalizeHastElement(child as Element, slug, transcludeTarget),
            ),
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal", "transclude-src"] },
              children: [],
            },
          ]
        }
      }
    }
  })

  // set componentData.tree to the edited html that has transclusions rendered
  componentData.tree = root

  const {
    head: Head,
    header,
    beforeBody,
    pageBody: Content,
    left,
    right,
    footer: Footer,
  } = components
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  const LeftComponent = (
    <div id="left-sidebar" className="left sidebar">
      {left.map((BodyComponent) => (
        <BodyComponent {...componentData} key={BodyComponent.name} />
      ))}
    </div>
  )

  const RightComponent = (
    <div id="right-sidebar" className="right sidebar">
      {right.map((BodyComponent) => (
        <BodyComponent {...componentData} key={BodyComponent.name} />
      ))}
    </div>
  )

  const lang = componentData.fileData.frontmatter?.lang ?? cfg.locale?.split("-")[0] ?? "en"
  const doc = (
    <html lang={lang}>
      <Head {...componentData} />
      <body data-slug={slug}>
        <div id="quartz-root" className="page">
          <Body {...componentData}>
            {LeftComponent}
            <div className="center">
              <div className="page-header">
                <Header {...componentData}>
                  {header.map((HeaderComponent) => (
                    <HeaderComponent {...componentData} key={HeaderComponent.name} />
                  ))}
                </Header>
                <div className="popover-hint">
                  {beforeBody.map((BodyComponent) => (
                    <BodyComponent {...componentData} key={BodyComponent.name} />
                  ))}
                </div>
              </div>
              <Content {...componentData} />
            </div>
            {RightComponent}
          </Body>
          <Footer {...componentData} />
        </div>
      </body>
      {pageResources.js
        .filter((resource) => resource.loadTime === "afterDOMReady")
        .map((res) => JSResourceToScriptElement(res))}
    </html>
  )

  return "<!DOCTYPE html>\n" + render(doc)
}
