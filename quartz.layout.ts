import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode"
import { SimpleSlug } from "./quartz/util/path"


const homepageTitle = "D1s4rr4y's Notebook!"
const modifiedListTitle = "All-files-chronologically-modified"
const mapTitle = "Map"
const tagsToRemove = ["graph-exclude", "explorer-exclude", "backlinks-exclude"]

const graphConfig = {
  localGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"]
  },
  globalGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"]
  }
} 

const tagListConfig = {
  excludeTags: tagsToRemove
} 

const explorerConfig = {
  filterFn: (node: FileNode) => node.name !== "tags" && !(node.file?.frontmatter?.tags?.includes("explorer-exclude") === true)
} 

const backlinksConfig = {
  excludeTags: tagsToRemove
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  left: [Component.Navbar()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/d1s4rr4y/DM-Year-2"
    }
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
  ],
  left: [
    Component.Navbar(),
  ],
  right: []
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.TableOfContents()],
  left: [Component.Navbar()],
  right: [], 
}
