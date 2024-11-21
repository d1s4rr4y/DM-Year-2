// import remarkGfm from "remark-gfm"
// import smartypants from "remark-smartypants"
// import { QuartzTransformerPlugin } from "../types"
// import rehypeSlug from "rehype-slug"
// import rehypeAutolinkHeadings from "rehype-autolink-headings"

// export interface Options {
//   enableSmartyPants: boolean
//   linkHeadings: boolean
// }

// const defaultOptions: Options = {
//   enableSmartyPants: true,
//   linkHeadings: true,
// }

// export const GitHubFlavoredMarkdown: QuartzTransformerPlugin<Partial<Options> | undefined> = (
//   userOpts,
// ) => {
//   const opts = { ...defaultOptions, ...userOpts }
//   return {
//     name: "GitHubFlavoredMarkdown",
//     markdownPlugins() {
//       return opts.enableSmartyPants ? [remarkGfm, smartypants] : [remarkGfm]
//     },
//     htmlPlugins() {
//       if (opts.linkHeadings) {
//         return [
//           rehypeSlug,
//           [
//             rehypeAutolinkHeadings,
//             {
//               behavior: "append",
//               properties: {
//                 role: "anchor",
//                 ariaHidden: true,
//                 tabIndex: -1,
//                 "data-no-popover": true,
//               },
//               content: {
//                 type: "element",
//                 tagName: "svg",
//                 properties: {
//                   width: 18,
//                   height: 18,
//                   viewBox: "0 0 24 24",
//                   fill: "none",
//                   stroke: "currentColor",
//                   "stroke-width": "2",
//                   "stroke-linecap": "round",
//                   "stroke-linejoin": "round",
//                 },
//                 children: [
//                   {
//                     type: "element",
//                     tagName: "path",
//                     properties: {
//                       d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
//                     },
//                     children: [],
//                   },
//                   {
//                     type: "element",
//                     tagName: "path",
//                     properties: {
//                       d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
//                     },
//                     children: [],
//                   },
//                 ],
//               },
//             },
//           ],
//         ]
//       } else {
//         return []
//       }
//     },
//   }
// }

import type { Plugin as UnifiedPlugin, PluggableList } from "unified"

import GithubSlugger from "github-slugger"
import { Root, Element } from "hast"
import { Text } from "hast"
import { headingRank } from "hast-util-heading-rank"
import { toString } from "hast-util-to-string"
import { h } from "hastscript"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import smartypants from "remark-smartypants"
import { visit } from "unist-util-visit"

import { QuartzTransformerPlugin } from "../types"

export interface Options {
  enableSmartyPants: boolean
  linkHeadings: boolean
}

const defaultOptions: Options = {
  enableSmartyPants: true,
  linkHeadings: true,
}

export const GitHubFlavoredMarkdown: QuartzTransformerPlugin<Partial<Options> | undefined> = (
  userOpts,
) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "GitHubFlavoredMarkdown",
    markdownPlugins() {
      return opts.enableSmartyPants ? [remarkGfm, smartypants] : [remarkGfm]
    },
    htmlPlugins() {
      const plugins: PluggableList = [] // explicitly type the plugins array

      /* The existing footnote back arrows will by default wrap onto the next line all alone. That looks weird.
      We fix this by adding a span that contains the last four characters of preceding footnote text.
      */
      plugins.push(() => {
        return (tree: Root) => {
          visit(tree, "element", (node) => {
            if (
              node.tagName === "li" &&
              node.properties?.id?.toString().startsWith("user-content-fn")
            ) {
              // Find the existing back arrow - it's a child of the last paragraph element
              const lastParagraph = node.children.find(
                (child) => child.type === "element" && child.tagName === "p",
              )
              if (lastParagraph && "children" in lastParagraph) {
                const lastChild = lastParagraph.children.at(-1)
                if (
                  lastChild?.type === "element" &&
                  lastChild.tagName === "a" &&
                  lastChild.properties?.className?.toString().includes("data-footnote-backref")
                ) {
                  maybeSpliceAndAppendBackArrow(node, lastChild)
                }
              }
            }
          })
        }
      })

      if (opts.linkHeadings) {
        plugins.push(slugFunction, [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              "data-no-popover": "true",
              ariaHidden: true,
              tabIndex: -1,
            },
          },
        ] as unknown as [UnifiedPlugin, Options])
      }

      return plugins
    },
  }
}

const slugger = new GithubSlugger()

export function preprocessSlug(headerText: string): string {
  const charsToConvert = ["'", "’", "/", "&", "—", "‘"]

  let protoSlug = headerText
  for (const char of charsToConvert) {
    protoSlug = protoSlug.replaceAll(new RegExp(char, "g"), "-")
  }

  // Remove consecutive hyphens
  protoSlug = protoSlug.replaceAll(/-+/g, "-")

  return protoSlug
}

export function slugify(headerText: string): string {
  const protoSlug = preprocessSlug(headerText)
  const slug = slugger.slug(protoSlug)
  return slug.replaceAll(/-+/g, "-")
}

export function resetSlugger() {
  slugger.reset()
}

/**
 * Add `id`s to headings.
 *
 * @returns
 *   Transform.
 */
export function slugFunction() {
  return function (tree: Root) {
    slugger.reset()

    visit(tree, "element", function (node: Element) {
      if (headingRank(node) && !node.properties.id) {
        node.properties.id = slugify(toString(node))
      }
    })

    rehypeSlug()(tree)
  }
}

export function removeBackArrow(node: Element): void {
  node.children = node.children.filter((child) => {
    if (
      child.type === "element" &&
      child.tagName === "a" &&
      child.properties?.className?.toString().includes("data-footnote-backref")
    ) {
      return false
    }
    return true
  })
}

/**
 * Add a back arrow to the footnote. Modifies the footnote node in place, appending the back arrow to the footnote.
 *
 * @returns
 *   The back arrow element.
 */
export function maybeSpliceAndAppendBackArrow(node: Element, backArrow: Element): void {
  const lastParagraph = node.children[node.children.length - 1] as Element
  if (lastParagraph.tagName !== "p") return

  removeBackArrow(lastParagraph)

  // Handle empty paragraph case
  if (lastParagraph.children.length === 0) {
    lastParagraph.children = [backArrow]
    return
  }

  // Get the last text node without modifying the original array
  const children2 = [...lastParagraph.children]
  const lastTextNode = children2.reverse().find((child) => child.type === "text") as Text

  // Handle whitespace-only case
  if (!lastTextNode || lastTextNode.value.trim() === "") {
    lastParagraph.children = [lastTextNode, backArrow].filter(Boolean)
    return
  }

  const text = lastTextNode.value
  const textIndex = Math.max(0, text.length - 4) // ensures splitIndex is never negative

  // Update the original text node if there's text before the split
  if (textIndex > 0) {
    lastTextNode.value = text.slice(0, textIndex)
  } else {
    // Remove the original text node if we're wrapping all text
    lastParagraph.children = []
  }

  // Add the nowrap span with remaining text and back arrow
  lastParagraph.children.push(
    h("span", { style: "white-space: nowrap;" }, [
      { type: "text", value: text.slice(textIndex) },
      backArrow,
    ]),
  )
}