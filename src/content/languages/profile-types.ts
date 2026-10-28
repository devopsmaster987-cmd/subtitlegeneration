import type { FaqItem } from "../types";

/** Enriched, language-specific data used to build Tier 2 pages. */
export interface LanguageProfile {
  code: string;
  summary: string;
  scriptNote: string;
  pitfalls: string[];
  tips: string[];
  lineLengthNote: string;
  useCases: string;
  accuracyNote: string;
  example: {
    native: string;
    translation: string;
    srt: string;
  };
  faqs: FaqItem[];
  sources?: { label: string; url: string }[];
}
