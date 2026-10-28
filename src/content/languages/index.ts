import type { Language } from "@/config/languages";
import { languages } from "@/config/languages";
import type { LanguagePageContent } from "../types";
import type { LanguageProfile } from "./profile-types";

/**
 * Editorial files and enriched profiles are registered here. Tier 1 files live
 * in ./editorial and Tier 2 profiles in ./profiles. Pages without either remain
 * tool-only and noindex.
 */
import { editorialByCode } from "./editorial";
import { profileByCode } from "./profiles";

function generateTierTwo(language: Language, profile: LanguageProfile): LanguagePageContent {
  const title = `${language.name} subtitle generator`;
  const pitfalls = profile.pitfalls.join(" ");
  return {
    kind: "language",
    code: language.code,
    slug: language.slug,
    nativeName: language.nativeName,
    path: `/subtitle-generator/${language.slug}`,
    h1: `${language.name} subtitle generator`,
    title: `${language.name} subtitle generator — private, browser-based`,
    metaDescription: `Use this ${language.name} subtitle generator to transcribe ${language.nativeName} audio locally in your browser, review the cues, then export SRT, VTT or TXT.`,
    primaryKeyword: title,
    capsule: `Use this ${language.name} subtitle generator to transcribe ${language.nativeName} audio locally in your browser, review the ${language.script} cues and wording, then export SRT, VTT or TXT. The draft needs a fluent human review, and no account, upload or paid API is required.`,
    published: "2026-02-01",
    updated: "2026-10-28",
    author: "Abdul Samad",
    accuracyNote: profile.accuracyNote,
    noindex: !language.accuracyTested,
    keyFacts: [
      { label: "Language code", value: language.code },
      { label: "Native name", value: language.nativeName },
      { label: "Script", value: language.script },
      { label: "Direction", value: language.rtl ? "Right to left" : "Left to right" },
      { label: "Region", value: language.region },
      { label: "Output", value: "SRT, VTT and TXT" }
    ],
    sections: [
      {
        heading: `What ${language.name} transcription looks like`,
        paragraphs: [profile.summary]
      },
      {
        heading: `Script and punctuation in ${language.name}`,
        paragraphs: [profile.scriptNote]
      },
      {
        heading: `Common ${language.name} transcription pitfalls`,
        paragraphs: [pitfalls]
      },
      {
        heading: `Tips for cleaner ${language.name} subtitles`,
        bullets: profile.tips
      },
      {
        heading: `Line length and timing for ${language.name}`,
        paragraphs: [profile.lineLengthNote]
      },
      {
        heading: `Who this ${language.name} workflow helps`,
        paragraphs: [profile.useCases]
      }
    ],
    faqs: profile.faqs,
    sources: profile.sources ?? [
      { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" },
      { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
      {
        label: "Hugging Face — onnx-community/whisper-small",
        url: "https://huggingface.co/onnx-community/whisper-small"
      }
    ],
    relatedGuides: [
      "how-to-improve-whisper-accuracy",
      "rtl-and-non-latin-subtitles",
      "subtitle-best-practices"
    ],
    workedExample: {
      title: `A ${language.name} cue with its English meaning`,
      intro:
        "A short line transcribed as native script. Whisper generally returns the language's normal script, not a romanized version.",
      srt: profile.example.srt,
      note: `Meaning: ${profile.example.translation}. Native text: ${profile.example.native}`
    },
    keywords: [
      { keyword: title, role: "primary" },
      { keyword: `${language.name} captions`, role: "synonym" },
      { keyword: `${language.name} audio to text`, role: "synonym" },
      ...profile.faqs.map((faq) => ({
        keyword: faq.question.toLocaleLowerCase(),
        role: "faq" as const
      }))
    ]
  };
}

function generateToolOnly(language: Language): LanguagePageContent {
  const title = `${language.name} subtitle generator`;
  return {
    kind: "language",
    code: language.code,
    slug: language.slug,
    nativeName: language.nativeName,
    path: `/subtitle-generator/${language.slug}`,
    h1: `${language.name} subtitle generator`,
    title: `${language.name} subtitle generator — browser-based Whisper`,
    metaDescription: `Use this ${language.name} subtitle generator to transcribe ${language.nativeName} locally in your browser and export SRT, VTT or TXT. No upload and no account.`,
    primaryKeyword: title,
    capsule: `This ${language.name} subtitle generator uses the multilingual Whisper tokenizer and runs locally in your browser. Select ${language.name} (${language.nativeName}) in the picker, transcribe, then review the ${language.script} script before exporting SRT or VTT.`,
    published: "2026-02-01",
    updated: "2026-10-28",
    author: "Abdul Samad",
    accuracyNote:
      "This is a tool-only page. We have not published an editorial accuracy note or a recorded sample test for this language, so the page is excluded from search until that work is done.",
    noindex: !language.accuracyTested,
    keyFacts: [
      { label: "Language code", value: language.code },
      { label: "Native name", value: language.nativeName },
      { label: "Script", value: language.script },
      { label: "Direction", value: language.rtl ? "Right to left" : "Left to right" },
      { label: "Region", value: language.region }
    ],
    sections: [
      {
        heading: `How to use ${language.name} in the generator`,
        paragraphs: [
          `Choose ${language.name} in the language picker, or leave auto-detect on for clear single-language audio. The model returns ${language.script} text; the editor lets you fix names, numbers and punctuation before export.`,
          language.rtl
            ? "The editor and preview switch to right-to-left layout for this language. Check that the exported file is UTF-8 so the script survives in your player."
            : "The editor stays left-to-right. Check that the exported file is UTF-8 so diacritics and non-Latin characters survive in your player."
        ]
      }
    ],
    faqs: [
      {
        question: `Does VoiceToTextFree support ${language.name}?`,
        answer: `${language.name} (${language.nativeName}) is present in the multilingual Whisper tokenizer used by this site, so it can be selected in the language picker. Accuracy varies and has not been independently tested on this page.`
      },
      {
        question: `What script does the ${language.name} output use?`,
        answer: `Whisper normally outputs ${language.script} for ${language.name}. It does not promise romanized output for mixed or code-switched speech.`
      },
      {
        question: `Can I export ${language.name} subtitles as SRT?`,
        answer: `Yes. After transcribing, edit the cues and download SRT, VTT or TXT. Files are written as UTF-8; check them in your target player before publishing.`
      }
    ],
    sources: [
      {
        label: "Whisper tokenizer language map",
        url: "https://huggingface.co/onnx-community/whisper-tiny/resolve/main/tokenizer.json"
      },
      { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
    ],
    relatedGuides: ["how-to-improve-whisper-accuracy", "rtl-and-non-latin-subtitles"],
    keywords: [
      { keyword: title, role: "primary" },
      { keyword: `${language.name} captions`, role: "synonym" }
    ]
  };
}

export function languageContent(language: Language): LanguagePageContent {
  const editorial = editorialByCode.get(language.code);
  if (editorial) {
    return { ...editorial, noindex: !language.accuracyTested || editorial.noindex === true };
  }
  const profile = profileByCode.get(language.code);
  if (profile) return generateTierTwo(language, profile);
  return generateToolOnly(language);
}

export const languagePages = languages.map((language) => ({
  language,
  content: languageContent(language)
}));

export const languagePageBySlug = new Map(
  languagePages.map(({ language, content }) => [language.slug, { language, content }])
);
