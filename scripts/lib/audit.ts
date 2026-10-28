import type { BasePageContent, LanguagePageContent } from "../../src/content/types";
import type { Language } from "../../src/config/languages";
import { languages } from "../../src/config/languages";
import { homeContent } from "../../src/content/home";
import { guides } from "../../src/content/guides";
import { toolPages } from "../../src/content/tools";
import { languagePages } from "../../src/content/languages";
import {
  allPageText,
  countKeyword,
  findDuplicateSentences,
  firstFortyWords,
  hasYear,
  pageBodyText,
  pageWordCount,
  wordCount
} from "../../src/lib/content-utils";
import { keywordOwnership, keywords } from "../../src/data/keywords";

export interface AuditedPage {
  page: BasePageContent;
  language?: Language;
  minimum: number;
  label: string;
}

const mandatedPaths = new Set([
  "/srt-editor",
  "/subtitle-timing-editor",
  "/merge-split-srt",
  "/guides/how-to-create-and-edit-an-srt-file",
  "/guides/rtl-and-non-latin-subtitles",
  "/guides/word-aligned-and-styled-captions",
  "/guides/import-srt-into-video-editors"
]);

export function auditedPages(): AuditedPage[] {
  const result: AuditedPage[] = [
    { page: homeContent, minimum: 1000, label: "home" },
    ...guides.map((page) => ({ page, minimum: 1200, label: "guide" })),
    ...toolPages.map((page) => ({ page, minimum: 700, label: "tool" }))
  ];

  for (const { language, content } of languagePages) {
    const editorial = content.sections.length > 1;
    if (!editorial) continue;
    result.push({
      page: content,
      language,
      minimum: language.tier === 1 ? 700 : 350,
      label: `language tier ${language.tier}`
    });
  }
  return result;
}

export function contentProblems(): string[] {
  const problems: string[] = [];
  const seenPaths = new Set<string>();
  const seenPrimaries = new Set<string>();

  for (const { page, minimum, label } of auditedPages()) {
    const prefix = `${page.path} [${label}]`;
    if (seenPaths.has(page.path)) problems.push(`${prefix}: duplicate path`);
    seenPaths.add(page.path);
    if (seenPrimaries.has(page.primaryKeyword.toLocaleLowerCase()))
      problems.push(`${prefix}: duplicate primary keyword "${page.primaryKeyword}"`);
    seenPrimaries.add(page.primaryKeyword.toLocaleLowerCase());

    const primary = page.primaryKeyword.toLocaleLowerCase();
    if (!page.h1.toLocaleLowerCase().includes(primary))
      problems.push(`${prefix}: primary missing from H1`);
    if (!page.title.toLocaleLowerCase().includes(primary))
      problems.push(`${prefix}: primary missing from title`);
    if (!page.metaDescription.toLocaleLowerCase().includes(primary))
      problems.push(`${prefix}: primary missing from meta description`);
    if (!page.capsule.toLocaleLowerCase().includes(primary))
      problems.push(`${prefix}: primary missing from capsule`);
    if (!firstFortyWords(page).toLocaleLowerCase().includes(primary))
      problems.push(`${prefix}: primary missing from first 40 words`);
    if (
      page.path !== "/" &&
      !mandatedPaths.has(page.path) &&
      !(page as LanguagePageContent).code &&
      !page.path.toLocaleLowerCase().includes(primary.replace(/\s+/g, "-"))
    ) {
      problems.push(`${prefix}: primary not reflected in slug`);
    }

    const words = pageWordCount(page);
    if (words < minimum) problems.push(`${prefix}: ${words} body words, minimum ${minimum}`);
    const capsuleWords = wordCount(page.capsule);
    if (capsuleWords < 40 || capsuleWords > 60)
      problems.push(`${prefix}: capsule ${capsuleWords} words, expected 40-60`);
    if (page.faqs.length < 6) problems.push(`${prefix}: only ${page.faqs.length} FAQs`);
    if (page.keyFacts.length < 5)
      problems.push(`${prefix}: only ${page.keyFacts.length} key facts`);
    if (page.sources.length < 2) problems.push(`${prefix}: only ${page.sources.length} sources`);
    if (page.sections.length < 6) problems.push(`${prefix}: only ${page.sections.length} sections`);
    if (!page.workedExample) problems.push(`${prefix}: missing worked example`);
    if (!page.author.trim()) problems.push(`${prefix}: missing author`);
    if (!page.published || !page.updated) problems.push(`${prefix}: missing dates`);
    if (page.keywords.filter((entry) => entry.role === "primary").length !== 1)
      problems.push(`${prefix}: expected exactly one primary keyword entry`);

    const bodyText = pageBodyText(page);
    for (const entry of page.keywords) {
      const mentions = countKeyword(bodyText, entry.keyword);
      if (mentions > 4)
        problems.push(`${prefix}: "${entry.keyword}" appears ${mentions} times in body (max 4)`);
    }

    const headingText = page.sections
      .map((section) => section.heading.toLocaleLowerCase())
      .join(" | ");
    for (const entry of page.keywords) {
      if (hasYear(entry.keyword))
        problems.push(`${prefix}: keyword contains a year: "${entry.keyword}"`);
      if (entry.role === "secondary" && !headingText.includes(entry.keyword.toLocaleLowerCase()))
        problems.push(`${prefix}: secondary keyword missing from a heading: "${entry.keyword}"`);
      if (entry.role === "faq") {
        const normalize = (value: string) =>
          value
            .toLocaleLowerCase()
            .replace(/[?.!:]+$/g, "")
            .trim();
        if (!page.faqs.some((faq) => normalize(faq.question) === normalize(entry.keyword)))
          problems.push(`${prefix}: FAQ keyword is not a visible question: "${entry.keyword}"`);
      }
    }

    const text = allPageText(page);
    for (const marker of ["lorem ipsum", "todo", "tbd", "fixme", "{{", "}}"]) {
      if (text.toLocaleLowerCase().includes(marker))
        problems.push(`${prefix}: placeholder text "${marker}"`);
    }
  }

  return [...problems, ...similarityProblems()];
}

export function similarityProblems(): string[] {
  return [
    ...findDuplicateSentences(guides),
    ...findDuplicateSentences(toolPages),
    ...findDuplicateSentences(
      languagePages
        .filter(({ content }) => content.sections.length > 1)
        .map(({ content }) => content)
    )
  ];
}

export function keywordProblems(): string[] {
  const problems: string[] = [];
  for (const [keyword, paths] of keywordOwnership) {
    if (paths.length > 1) problems.push(`"${keyword}" is owned by ${paths.join(", ")}`);
  }
  for (const entry of keywords) {
    const unowned = entry.role === "parked" || entry.role === "topic" || entry.role === "excluded";
    if (unowned && entry.page !== null)
      problems.push(`"${entry.keyword}": ${entry.role} entries must not own a page`);
    if (!unowned && !entry.page) problems.push(`"${entry.keyword}": ${entry.role} has no page`);
    if (entry.competition === "n/a" && !unowned)
      problems.push(`"${entry.keyword}": owned keyword cannot have n/a competition`);
    if (entry.competition !== "n/a" && unowned)
      problems.push(`"${entry.keyword}": unowned keyword must have n/a competition`);
    if (![1, 2, 3].includes(entry.wave))
      problems.push(`"${entry.keyword}": invalid wave ${entry.wave}`);
    if (hasYear(entry.keyword)) problems.push(`"${entry.keyword}": keyword contains a year`);
  }
  return problems;
}

export function wordcountProblems(): string[] {
  return auditedPages()
    .filter(({ page, minimum }) => pageWordCount(page) < minimum)
    .map(({ page, minimum }) => `${page.path}: under ${minimum} body words`);
}

export function aeoProblems(): string[] {
  return auditedPages().flatMap(({ page }) => {
    const problems: string[] = [];
    const prefix = page.path;
    if (page.faqs.length < 6) problems.push(`${prefix}: fewer than 6 FAQs`);
    if (!page.keyFacts.length) problems.push(`${prefix}: no key facts`);
    if (!page.sources.length) problems.push(`${prefix}: no sources`);
    if (!page.workedExample) problems.push(`${prefix}: no worked example`);
    if (!page.updated) problems.push(`${prefix}: no updated date`);
    if (page.title.length > 70) problems.push(`${prefix}: title is ${page.title.length} chars`);
    if (page.metaDescription.length < 120 || page.metaDescription.length > 165)
      problems.push(`${prefix}: meta description is ${page.metaDescription.length} chars`);
    return problems;
  });
}

export function canonicalRoutes(): Set<string> {
  const routes = new Set<string>([
    "/",
    "/about",
    "/contact",
    "/cookie-policy",
    "/corrections",
    "/disclaimer",
    "/guides",
    "/html-sitemap",
    "/languages",
    "/privacy-policy",
    "/terms",
    "/studio",
    "/video-to-srt"
  ]);
  for (const page of guides) routes.add(page.path);
  for (const page of toolPages) routes.add(page.path);
  for (const language of languages) routes.add(`/subtitle-generator/${language.slug}`);
  return routes;
}

export { languages };
