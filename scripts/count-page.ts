import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import {
  allPageText,
  countKeyword,
  firstFortyWords,
  pageBodyText,
  pageWordCount,
  wordCount
} from "../src/lib/content-utils";
import type { BasePageContent, LanguagePageContent } from "../src/content/types";

async function main() {
  const target = process.argv[2];
  if (!target) {
    console.error("Usage: npx tsx scripts/count-page.ts <content-file>");
    process.exit(1);
  }

  const module = await import(pathToFileURL(resolve(target)).href);
  const page: BasePageContent | undefined =
    module.guide ??
    module.tool ??
    module.languagePage ??
    module.default ??
    (Object.values(module).find(
      (value) => value && typeof value === "object" && "kind" in (value as Record<string, unknown>)
    ) as BasePageContent | undefined);

  if (!page) {
    console.error("No exported page found (expected guide, tool, languagePage or default).");
    process.exit(1);
  }

  const body = pageBodyText(page);
  const first = firstFortyWords(page);
  const primary = page.primaryKeyword.toLocaleLowerCase();
  const all = allPageText(page);
  const problems: string[] = [];
  const normalizeQuestion = (value: string) =>
    value
      .toLocaleLowerCase()
      .replace(/[?.!:]+$/g, "")
      .trim();

  if (!page.h1.toLocaleLowerCase().includes(primary))
    problems.push("primary keyword missing from H1");
  if (!page.title.toLocaleLowerCase().includes(primary))
    problems.push("primary keyword missing from title");
  if (!page.metaDescription.toLocaleLowerCase().includes(primary))
    problems.push("primary keyword missing from meta description");
  if (!page.capsule.toLocaleLowerCase().includes(primary))
    problems.push("primary keyword missing from capsule");
  if (!first.toLocaleLowerCase().includes(primary))
    problems.push("primary keyword missing from first 40 words");
  const mandatedPaths = new Set([
    "/srt-editor",
    "/subtitle-timing-editor",
    "/merge-split-srt",
    "/guides/how-to-create-and-edit-an-srt-file",
    "/guides/rtl-and-non-latin-subtitles",
    "/guides/word-aligned-and-styled-captions"
  ]);
  if (
    page.path !== "/" &&
    !mandatedPaths.has(page.path) &&
    !page.path.toLocaleLowerCase().includes(primary.replace(/\s+/g, "-"))
  ) {
    // Language pages are checked separately by the verify script.
    if (!(page as LanguagePageContent).code)
      problems.push("primary keyword not reflected in slug/path");
  }
  if (wordCount(page.capsule) < 40 || wordCount(page.capsule) > 60) {
    problems.push(`capsule is ${wordCount(page.capsule)} words (expected 40-60)`);
  }
  if (page.faqs.length < 6) problems.push(`only ${page.faqs.length} visible FAQs (expected 6)`);

  const headings = page.sections.map((section) => section.heading.toLocaleLowerCase()).join(" | ");
  for (const entry of page.keywords) {
    if (entry.role === "secondary" && !headings.includes(entry.keyword.toLocaleLowerCase())) {
      problems.push(`secondary keyword not used as a heading: "${entry.keyword}"`);
    }
    if (entry.role === "faq") {
      const found = page.faqs.some(
        (faq) => normalizeQuestion(faq.question) === normalizeQuestion(entry.keyword)
      );
      if (!found) problems.push(`FAQ keyword is not a visible question: "${entry.keyword}"`);
    }
  }
  const primaryCount = countKeyword(all, page.primaryKeyword);

  console.log(`File: ${target}`);
  console.log(`Body words: ${pageWordCount(page)} (${body.length} chars)`);
  console.log(`Capsule words: ${wordCount(page.capsule)}`);
  console.log(
    `Sections: ${page.sections.length}, FAQs: ${page.faqs.length}, Sources: ${page.sources.length}`
  );
  console.log(`Primary keyword mentions in all text: ${primaryCount}`);
  if (problems.length) {
    console.log("\nProblems:");
    for (const problem of problems) console.log(` - ${problem}`);
  } else {
    console.log("\nNo structural problems found.");
  }
}

void main();
