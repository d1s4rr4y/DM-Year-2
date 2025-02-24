import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ray's Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "d1s4rr4y.github.io/DM-Year-2",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    navbar: {
      pages: [
        { title: "Home", slug: "/"},
        { title: "First Year", slug: "/First-Year"},
        { title: "Second Year", slug: "/Second-Year"},
      ],
    },
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Serif",
        body: "Noto Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5ede5",
          lightgray: "#72B8C5",
          gray: "#72B8C5",
          darkgray: "#1e2634",
          dark: "#B25A89",
          secondary: "#72B8C5",
          tertiary: "#5B9CA8",
          highlight: "rgba(91, 156, 168, 0.15)",
        },
        darkMode: {
          light: "#2E3440",
          lightgray: "#72B8C5",
          gray: "#72B8C5",
          darkgray: "#ECEFF4",
          dark: "#B25A89",
          secondary: "#72B8C5",
          tertiary: "#5B9CA8",
          highlight: "rgba(91, 156, 168, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true, parseArrows: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks(),

      // CUSTOM PLUGINS
      Plugin.TableOfContents(),
      Plugin.AfterArticle(),
      Plugin.ColorVariables(),
      Plugin.TagAcronyms(),
      Plugin.HTMLFormattingImprovement(),
      Plugin.ConvertEmphasis(),

    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
