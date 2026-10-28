import type { AnyPageContent, BasePageContent, Section } from "@/content/types";

export function stripMarkup(text: string): string {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function wordCount(text: string): number {
  return stripMarkup(text)
    .split(/\s+/)
    .filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
}

export function sectionText(section: Section, includeTables = false): string {
  const parts: string[] = [section.heading];
  if (section.paragraphs) parts.push(...section.paragraphs);
  if (section.bullets) parts.push(...section.bullets);
  if (section.steps) parts.push(...section.steps);
  if (includeTables && section.table) {
    parts.push(section.table.caption);
    parts.push(...section.table.headers);
    for (const row of section.table.rows) parts.push(...row);
  }
  return parts.join(" ");
}

/** Body text used by the word-count gate; excludes FAQs, tables and code samples. */
export function pageBodyText(page: BasePageContent): string {
  return page.sections.map((section) => sectionText(section, false)).join(" ");
}

export function pageWordCount(page: BasePageContent): number {
  return wordCount(pageBodyText(page));
}

export function firstFortyWords(page: BasePageContent): string {
  const text = [page.h1, page.capsule, ...(page.sections[0]?.paragraphs ?? [])].join(" ");
  return stripMarkup(text).split(/\s+/).slice(0, 40).join(" ");
}

export function sentenceSplit(text: string): string[] {
  return stripMarkup(text)
    .split(/(?<=[.!?۔؟])\s+(?=[\p{Lu}\p{L}])/u)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.split(/\s+/).length >= 3);
}

function shingles(sentences: string[], size = 5): Set<string> {
  const words = sentences
    .join(" ")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
  const set = new Set<string>();
  for (let i = 0; i <= words.length - size; i += 1) {
    set.add(words.slice(i, i + size).join(" "));
  }
  return set;
}

/**
 * Fraction of 5-word shingles in `a` that also appear in `b`. This catches
 * templated or copied pages without punishing shared names and headings.
 */
export function shingleSimilarity(a: string, b: string): number {
  const left = shingles(sentenceSplit(a));
  const right = shingles(sentenceSplit(b));
  if (left.size === 0 || right.size === 0) return 0;
  let shared = 0;
  for (const shingle of left) if (right.has(shingle)) shared += 1;
  return shared / left.size;
}

export function sharedSentenceRatio(a: string, b: string): number {
  const left = new Set(sentenceSplit(a).map((sentence) => sentence.toLocaleLowerCase()));
  const right = new Set(sentenceSplit(b).map((sentence) => sentence.toLocaleLowerCase()));
  if (left.size === 0) return 0;
  let shared = 0;
  for (const sentence of left) if (right.has(sentence)) shared += 1;
  return shared / left.size;
}

export function findDuplicateSentences(pages: BasePageContent[]): string[] {
  const problems: string[] = [];
  for (let i = 0; i < pages.length; i += 1) {
    for (let j = i + 1; j < pages.length; j += 1) {
      const a = pages[i];
      const b = pages[j];
      if (!a || !b) continue;
      const ratio = sharedSentenceRatio(pageBodyText(a), pageBodyText(b));
      if (ratio > 0.3) {
        problems.push(
          `${a.path} shares ${(ratio * 100).toFixed(1)}% of its sentences with ${b.path} (limit 30%).`
        );
      }
    }
  }
  return problems;
}

export function countKeyword(text: string, keyword: string): number {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = text.match(new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}([^\\p{L}\\p{N}]|$)`, "giu"));
  return matches?.length ?? 0;
}

export function allPageText(page: BasePageContent, includeFaqs = true): string {
  const parts: string[] = [
    page.h1,
    page.title,
    page.metaDescription,
    page.capsule,
    ...page.sections.map((section) => sectionText(section, true)),
    ...(page.keyFacts ?? []).map((fact) => `${fact.label} ${fact.value}`)
  ];
  if (includeFaqs) for (const faq of page.faqs) parts.push(faq.question, faq.answer);
  if (page.workedExample)
    parts.push(page.workedExample.title, page.workedExample.intro, page.workedExample.note ?? "");
  if (page.workedExample?.srt) parts.push(page.workedExample.srt);
  return parts.join(" ");
}

export function pageMinimumWords(page: AnyPageContent): number {
  if (page.kind === "guide") return 1200;
  if (page.kind === "language") return page.noindex ? 0 : 700;
  if (page.path === "/") return 1000;
  return 700;
}

export function hasYear(value: string): boolean {
  return /\b(19|20)\d{2}\b/.test(value);
}

export function slugSafe(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
