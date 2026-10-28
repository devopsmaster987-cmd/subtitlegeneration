import type { BasePageContent, KeywordRole } from "@/content/types";
import { homeContent } from "@/content/home";
import { guides } from "@/content/guides";
import { toolPages } from "@/content/tools";
import { languagePages } from "@/content/languages";

export type KeywordCompetition = "head" | "low" | "medium" | "n/a";
export type KeywordWave = 1 | 2 | 3;

export interface KeywordEntry {
  keyword: string;
  role: KeywordRole;
  /** Route owned by this keyword, or null for parked, topic and excluded terms. */
  page: string | null;
  /** Internal estimate only. Never rendered or presented as a difficulty claim. */
  competition: KeywordCompetition;
  /** Shipping order: 1 for launch pages, then the language waves. */
  wave: KeywordWave;
  headingLevel?: 2 | 3;
  note?: string;
}

const headPages = new Set([
  "/",
  "/video-to-text",
  "/video-to-srt",
  "/audio-to-srt",
  "/speech-to-text",
  "/caption-generator",
  "/transcript-generator"
]);

function competitionFor(page: BasePageContent): KeywordCompetition {
  if (headPages.has(page.path)) return "head";
  if (page.path.startsWith("/guides/")) return "medium";
  return "low";
}

function contentEntries(page: BasePageContent, wave: KeywordWave): KeywordEntry[] {
  return page.keywords.map((entry) => ({
    ...entry,
    page: page.path,
    competition: competitionFor(page),
    wave
  }));
}

const ownedEntries: KeywordEntry[] = [
  ...contentEntries(homeContent, 1),
  ...guides.flatMap((guide) => contentEntries(guide, 1)),
  ...toolPages.flatMap((tool) => contentEntries(tool, 1)),
  ...languagePages.flatMap(({ language, content }) => contentEntries(content, language.wave))
];

/** Terms we deliberately do not support yet. Do not describe them as features. */
export const parkedKeywords = [
  "subtitle translator",
  "speaker diarization",
  "auto dubbing",
  "subtitle editor for mac",
  "youtube video downloader",
  "subtitle burn in app",
  "roman urdu subtitle generator",
  "roman urdu captions",
  "hinglish subtitles",
  "tanglish subtitles",
  "whisper api pricing",
  "audio to srt free download"
] as const;

/** Broad terms with no dedicated page. Cover only inside useful sections. */
export const topicKeywords = [
  "subtitles and seo",
  "do captions help youtube seo",
  "watch video without sound",
  "silent viewing captions",
  "subtitles for podcasts",
  "webinars and lectures"
] as const;

/** Never used on the site, including metadata and hidden text. */
export const excludedKeywords = [
  "best subtitle generator",
  "best free subtitle generator",
  "top subtitle generator",
  "#1 subtitle generator",
  "subtitle generator alternatives",
  "youtube video downloader",
  "youtube subtitle downloader",
  "subtitile generator",
  "subttitle generator",
  "subtitle generater"
] as const;

const unownedEntries: KeywordEntry[] = [
  ...parkedKeywords.map((keyword) => ({
    keyword,
    role: "parked" as const,
    page: null,
    competition: "n/a" as const,
    wave: 3 as const,
    note: "Not a supported feature; do not build or advertise it."
  })),
  ...topicKeywords.map((keyword) => ({
    keyword,
    role: "topic" as const,
    page: null,
    competition: "n/a" as const,
    wave: 3 as const,
    note: "Broad term; cover only as a useful section, never as a thin page."
  })),
  ...excludedKeywords.map((keyword) => ({
    keyword,
    role: "excluded" as const,
    page: null,
    competition: "n/a" as const,
    wave: 3 as const,
    note: "Never use this term on the site."
  }))
];

/** Complete internal keyword map. Aliases are intentionally not duplicated across pages. */
export const keywords: readonly KeywordEntry[] = [...ownedEntries, ...unownedEntries];

const ownership = new Map<string, string[]>();
for (const entry of ownedEntries) {
  if (!entry.page) continue;
  const key = entry.keyword.toLocaleLowerCase().trim();
  const pages = ownership.get(key) ?? [];
  if (!pages.includes(entry.page)) pages.push(entry.page);
  ownership.set(key, pages);
}

/** Primary, secondary, FAQ and synonym ownership. Parked, topic and excluded terms have no page. */
export const keywordOwnership: ReadonlyMap<string, readonly string[]> = ownership;
