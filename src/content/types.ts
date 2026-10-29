export type KeywordRole =
  | "primary"
  | "secondary"
  | "faq"
  | "synonym"
  | "topic"
  | "parked"
  | "excluded";

export interface KeywordUse {
  keyword: string;
  role: KeywordRole;
  headingLevel?: 2 | 3;
  note?: string;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface TableBlock {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface Section {
  heading: string;
  level?: 2 | 3;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  table?: TableBlock;
  code?: { language: string; content: string; caption?: string };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export interface WorkedExample {
  title: string;
  intro: string;
  srt?: string;
  note?: string;
}

export interface BasePageContent {
  /** URL path without a trailing slash, for example /guides/srt-vs-vtt */
  path: string;
  h1: string;
  title: string;
  metaDescription: string;
  primaryKeyword: string;
  /** 40-60 word self-contained answer shown directly under the H1. */
  capsule: string;
  published: string;
  updated: string;
  author: string;
  keyFacts: KeyFact[];
  sections: Section[];
  faqs: FaqItem[];
  sources: SourceLink[];
  relatedGuides: string[];
  workedExample?: WorkedExample;
  keywords: KeywordUse[];
  noindex?: boolean;
}

export interface GuideContent extends BasePageContent {
  kind: "guide";
  readingMinutes: number;
}

export type ToolPreset =
  | "main"
  | "video-to-srt"
  | "audio-to-srt"
  | "srt-editor"
  | "subtitle-timing-editor"
  | "merge-split-srt"
  | "convert-srt-to-vtt"
  | "subtitle-reading-speed-checker"
  | "subtitle-validator";

export interface ToolPageContent extends BasePageContent {
  kind: "tool";
  preset: ToolPreset;
}

export interface LanguagePageContent extends BasePageContent {
  kind: "language";
  code: string;
  slug: string;
  nativeName: string;
  accuracyNote: string;
  noindex: boolean;
}

export type AnyPageContent = GuideContent | ToolPageContent | LanguagePageContent;
