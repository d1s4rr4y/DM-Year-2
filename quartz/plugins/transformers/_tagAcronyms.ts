import { Node, Parent, Text, Element } from "hast"
import { Plugin } from "unified"
import { visit } from "unist-util-visit"

import { QuartzTransformerPlugin } from "../types"
import { hasAncestor, hasClass, ElementMaybeWithParent } from "./_formattingImprovementHTML"
import { replaceRegex } from "./_utils"

export function isRomanNumeral(str: string): boolean {
  // Allow trailing punctuation marks
  const romanNumeralRegex =
    /(?<= |^)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})(?<=[A-Z]{3})(?=[\s.,!?;:]|$)/
  return romanNumeralRegex.test(str)
}

// Regex for acronyms and abbreviations
export const allowAcronyms = ["IF", "CCC", "IL", "TL;DR", "LLM", "MP4"]

// Escaped and joined allowAcronyms as an intermediate variable
const escapedAllowAcronyms = allowAcronyms
  .map((acronym) => acronym.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
  .join("|")

export const smallCapsSeparators = `-'’`
const smallCapsChars = `A-Z\\u00C0-\\u00DC`
const beforeWordBoundary = `(?<![${smallCapsChars}\\w])`
const afterWordBoundary = `(?![${smallCapsChars}\\w])`
// Lookbehind and lookahead required to allow accented uppercase characters to count as "word boundaries"; \b only matches against \w
export const REGEX_ACRONYM = new RegExp(
  `${beforeWordBoundary}(?<acronym>${escapedAllowAcronyms}|[${smallCapsChars}]{3,}(?:[${smallCapsSeparators}]?[${smallCapsChars}\\d]+)*)(?<suffix>[sx]?)${afterWordBoundary}`,
)

export const REGEX_ABBREVIATION = new RegExp(
  `(?<number>\\d+(\\.\\d+)?|\\.\\d+)(?<abbreviation>[A-Za-z]{2,}|[KkMmBbTGgWw])\\b`,
)

// Lookahead to see that there are at least 3 contiguous uppercase characters in the phrase
export const validSmallCapsPhrase = `(?=[${smallCapsChars}\\-'’\\s]*[${smallCapsChars}]{3,})`
export const allCapsContinuation = `(?:[${smallCapsSeparators}\\d\\s]+[${smallCapsChars}]+)`
// Restricting to at least 2 words to avoid interfering with REGEX_ACRONYM
export const REGEX_ALL_CAPS_PHRASE = new RegExp(
  `${beforeWordBoundary}${validSmallCapsPhrase}(?<phrase>[${smallCapsChars}]+${allCapsContinuation}+)${afterWordBoundary}`,
)

const combinedRegex = new RegExp(
  `${REGEX_ALL_CAPS_PHRASE.source}|${REGEX_ACRONYM.source}|${REGEX_ABBREVIATION.source}`,
  "g",
)

// Whitelist the allowAcronyms to override the roman numeral check
const ignoreAcronym = (node: Text, _index: number, parent: Parent): boolean => {
  if (allowAcronyms.includes(node.value)) {
    return false
  }

  // Check for no-formatting classes on any ancestor
  // TODO: test no-formatting
  if (
    hasAncestor(parent as ElementMaybeWithParent, (ancestor: Element): boolean => {
      return hasClass(ancestor, "no-smallcaps") || hasClass(ancestor, "no-formatting")
    })
  ) {
    return true
  }

  if (isRomanNumeral(node.value)) {
    return true
  }

  return (("tagName" in parent && (parent.tagName === "abbr" || parent.tagName === "code")) ||
    hasClass(parent as ElementMaybeWithParent, "elvish")) as boolean
}

export function replaceSCInNode(node: Text, index: number, parent: Parent): void {
  replaceRegex(
    node,
    index,
    parent,
    combinedRegex,
    (match: RegExpMatchArray) => {
      // Lower-case outputs because we're using small-caps
      const allCapsPhraseMatch = REGEX_ALL_CAPS_PHRASE.exec(match[0])
      if (allCapsPhraseMatch && allCapsPhraseMatch.groups) {
        const { phrase } = allCapsPhraseMatch.groups
        return { before: "", replacedMatch: phrase.toLowerCase(), after: "" }
      }

      const acronymMatch = REGEX_ACRONYM.exec(match[0])
      if (acronymMatch && acronymMatch.groups) {
        const { acronym, suffix } = acronymMatch.groups
        return { before: "", replacedMatch: acronym.toLowerCase(), after: suffix || "" }
      }

      const abbreviationMatch = REGEX_ABBREVIATION.exec(match[0])
      if (abbreviationMatch && abbreviationMatch.groups) {
        const { number, abbreviation } = abbreviationMatch.groups
        return { before: "", replacedMatch: number + abbreviation.toLowerCase(), after: "" }
      }

      throw new Error(
        `Regular expression logic is broken; one of the regexes should match for ${match}`,
      )
    },
    ignoreAcronym,
    "abbr.small-caps",
  )
}

export const rehypeTagAcronyms: Plugin = () => {
  return (tree: Node) => {
    visit(tree, "text", replaceSCInNode)
  }
}

// The main Quartz plugin export
export const TagAcronyms: QuartzTransformerPlugin = () => {
  return {
    name: "TagAcronyms",
    htmlPlugins() {
      return [rehypeTagAcronyms]
    },
  }
}