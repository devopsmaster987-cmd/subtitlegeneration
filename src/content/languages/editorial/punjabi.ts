import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "pa",
  slug: "punjabi",
  nativeName: "ਪੰਜਾਬੀ",
  path: "/subtitle-generator/punjabi",
  h1: "Punjabi subtitle generator",
  title: "Punjabi subtitle generator — private, browser-based",
  metaDescription:
    "Generate ਪੰਜਾਬੀ subtitles in the browser with Whisper. The Punjabi subtitle generator returns Gurmukhi text, lets you repair cues and exports SRT or VTT.",
  primaryKeyword: "punjabi subtitle generator",
  capsule:
    "The Punjabi subtitle generator runs Whisper locally and returns ਪੰਜਾਬੀ speech in Gurmukhi script. You edit the timed cues, check names, numbers and line breaks, then export SRT, VTT or TXT. No audio is uploaded for transcription. No reviewed sample is recorded yet, so the page is excluded from search and the text needs a fluent review.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Punjabi sample is recorded for this page, so it is kept out of search results. The Punjabi subtitle generator still works in the browser and exports editable files, but no tested-accuracy claim is made and a fluent Gurmukhi reader should review the output.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "pa" },
    { label: "Native name", value: "ਪੰਜਾਬੀ" },
    { label: "Script", value: "Gurmukhi" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia, mainly Punjab" },
    { label: "Output", value: "SRT, VTT and TXT" },
    { label: "Review status", value: "No reviewed sample recorded" }
  ],
  sections: [
    {
      heading: "What the Punjabi subtitle generator produces",
      paragraphs: [
        "The Punjabi subtitle generator runs a Whisper model in the browser and returns timed Gurmukhi cues for Punjabi speech. You select the file, choose Punjabi or rely on detection, then edit the text and timing before downloading. There is no server-side transcription step and no account requirement.",
        "For long recordings, fix the language rather than relying on automatic detection. Punjabi shares vocabulary and sounds with Hindi and Urdu in some registers, and a short clip with music or English can confuse the detector. A fixed choice makes the transcript easier to compare across takes and episodes."
      ]
    },
    {
      heading: "Gurmukhi script and its marks",
      paragraphs: [
        "Punjabi is written in Gurmukhi, which has no upper and lower case. The script uses several marks that change pronunciation, including the adak bindi, the tippi, the pairin bindi and the nukta. Those marks are small, so a missing one can turn a correct word into a different word that still looks plausible at caption size.",
        "Read the cues closely for Gurmukhi conjuncts and nasal marks rather than judging only the overall shape. The export is UTF-8 text; keep it in that encoding and avoid legacy converters. Whisper normally outputs Gurmukhi for Punjabi speech, and this page does not promise romanized output or Shahmukhi transliteration."
      ]
    },
    {
      heading: "Punctuation and sentence endings",
      paragraphs: [
        "Punjabi print sometimes uses a danda, while broadcast and digital subtitles often use the Western full stop, question mark and exclamation mark. The choice is a house style, not a grammatical rule. Pick one and keep the whole file consistent so viewers do not see two conventions in adjacent cues.",
        "Keep punctuation attached to the phrase it closes. A cue that starts with a comma or a closing quote looks like an editing mistake. If a speaker pauses mid-sentence, it is better to end the first cue cleanly and begin the next with a word than to strand punctuation on an empty-looking line."
      ]
    },
    {
      heading: "Line length and cue timing",
      paragraphs: [
        "Gurmukhi words can be long, and a two-line cue fills quickly when the text includes names or English terms. Use about 42 characters per line as a starting point, then shorten it for mobile playback. Two balanced lines are easier to scan than one very long line followed by a short fragment.",
        "Read the cue aloud at the speed it appears. If the line cannot be spoken in the time available, either split it or simplify wording that repeats information visible on screen. Do not break a word or a conjunct just to fit: a clean phrase break is always better than a split inside a single Gurmukhi unit."
      ]
    },
    {
      heading: "Compound words and joined expressions",
      paragraphs: [
        "Punjabi uses compound verbs and joined expressions in which a helper word carries tense or aspect. Splitting such a pair across two cues can make the sentence feel unfinished, even when each line is readable on its own. Keep the pair together when the timing allows, and break before the pair rather than between its parts.",
        "Borrowed words from Persian, Arabic and English add variation in spelling. A speaker may use a form that a dictionary lists differently, and a spell checker is not a reliable referee. Choose the form that matches the speaker or the organisation, then apply it consistently."
      ]
    },
    {
      heading: "English code-switching in Punjabi",
      paragraphs: [
        "Punjabi conversations frequently switch into English for education, technology, sport and business terms. The model may return those words in Latin script, in Gurmukhi, or in a mix of both within one cue. This is expected behaviour for code-switched audio, not a sign that the transcript is unusable.",
        "Decide on a glossary for recurring English terms before editing. Some teams keep English in Latin script because viewers recognise the brand or product, while others write it in Gurmukhi for visual consistency. Avoid promising that the generator will romanize Punjabi; it returns inferred script, and mixed cues need human decisions."
      ]
    },
    {
      heading: "Names, numbers and dates in Punjabi",
      paragraphs: [
        "Names and places are a frequent source of error because Punjabi spelling can vary between families, regions and publications. Check a person's preferred spelling, a company's official name and a town's common form. Then use the same spelling throughout the file rather than accepting several variants from the model.",
        "Gurmukhi digits ੦੧੨੩੪੫੬੭੮੯ and Western digits both appear in Punjabi media. Pick the convention that fits the audience and use it for dates, prices, phone numbers and scores. Keep a number together on one line, and check that a percentage or a range has not lost its symbol or dash during editing."
      ]
    },
    {
      heading: "Dialects, accents and the limits of the model",
      paragraphs: [
        "Majhi is often treated as the standard, while Malwai, Doabi, Pwadhi and other varieties differ in pronunciation and local vocabulary. Punjabi in Pakistan is normally written in Shahmukhi, but the Whisper language code used here is associated with Gurmukhi output for Punjabi. Do not expect the tool to choose Shahmukhi automatically.",
        "Strong accents, fast speech, overlapping voices and telephone audio reduce reliability. No accuracy figure is claimed here because no reviewed Punjabi sample has been recorded. A fluent reviewer should check regional words, respectful forms of address and any cue where the text is grammatical but does not match the speaker's meaning."
      ]
    },
    {
      heading: "Review workflow and privacy",
      paragraphs: [
        "Review in layers: first correct Gurmukhi spelling and the small nasal marks, then fix punctuation and names, then adjust timing and line breaks with the video playing. A final pass for numbers and English terms catches problems that are easy to miss while reading for meaning.",
        "Transcription happens on your device, so the audio is not sent to a VoiceToTextFree server. Browser extensions, shared computers and the folder where you save exports are still your responsibility. Keep the UTF-8 SRT as the master, test it in the target player, and remember that platforms may restyle or strip cue settings."
      ]
    }
  ],
  faqs: [
    {
      question: "Does the Punjabi subtitle generator work offline?",
      answer:
        "The model runs locally in the browser after it has loaded, so the transcription step does not send audio to VoiceToTextFree. A first visit may still need to download model files. Check your browser and network policy if you need a fully offline workflow."
    },
    {
      question: "Does it write Punjabi in Gurmukhi or Shahmukhi?",
      answer:
        "It normally returns Gurmukhi, the script used in the language configuration for this page. This page does not promise Shahmukhi or romanized output. If you need Shahmukhi, plan a separate conversion and review process with a reader of that script."
    },
    {
      question: "Can I export Punjabi subtitles as SRT or VTT?",
      answer:
        "Yes. You can edit the cues and download SRT, VTT or TXT. The file is written as UTF-8, but you should open it in the player you will use to confirm that Gurmukhi marks and punctuation render correctly."
    },
    {
      question: "Why are Gurmukhi nasal marks missing from some words?",
      answer:
        "Small marks such as the adak bindi and tippi are easy for a model to omit and easy for a reviewer to overlook. Read the cue for meaning and compare similar words in the same file. Correct the marks manually and check them again after any copy or export step."
    },
    {
      question: "How do I handle English words in Punjabi subtitles?",
      answer:
        "Set a rule for recurring terms and keep it stable. Some cues may arrive with Latin script and others with Gurmukhi, so a reviewer should normalise them. If the audience expects the English brand name, Latin script may be clearer than a phonetic Gurmukhi spelling."
    },
    {
      question: "Is Punjabi transcription accuracy tested here?",
      answer:
        "No reviewed Punjabi sample is recorded, so the page is excluded from search and no tested-accuracy claim is made. The tool is available for producing drafts, but the output should be treated as unverified until a fluent Gurmukhi reader checks it."
    }
  ],
  sources: [
    {
      label: "Unicode — Gurmukhi code chart",
      url: "https://www.unicode.org/charts/PDF/U0A00.pdf"
    },
    {
      label: "Unicode CLDR — locale data",
      url: "https://cldr.unicode.org/"
    },
    {
      label: "W3C — WebVTT specification",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "OpenAI Whisper repository",
      url: "https://github.com/openai/whisper"
    }
  ],
  relatedGuides: [
    "rtl-and-non-latin-subtitles",
    "subtitle-best-practices",
    "how-to-sync-subtitles"
  ],
  workedExample: {
    title: "Illustrative Punjabi cues with English meanings",
    intro:
      "A short workplace reminder in Gurmukhi. The English meanings below the sample are for review and are not part of the delivered subtitle file.",
    srt: `1
00:00:01,000 --> 00:00:04,000
ਅੱਜ ਸਵੇਰੇ ਨੌਂ ਵਜੇ ਮੀਟਿੰਗ ਹੈ।

2
00:00:04,200 --> 00:00:07,800
ਕਿਰਪਾ ਕਰਕੇ ਰਿਪੋਰਟ ਚੌਥੀ ਮੰਜ਼ਿਲ 'ਤੇ ਲਿਆਓ।

3
00:00:08,000 --> 00:00:11,500
ਅਸੀਂ ਕਮਰਾ ਨੰਬਰ ੪੦੨ ਵਿੱਚ ਮਿਲਾਂਗੇ।`,
    note: "Meanings: there is a meeting at nine this morning; please bring the report to the fourth floor; we will meet in room number 402. Check the adak bindi in ਅੱਜ and the Gurmukhi digits in the last cue, then confirm the apostrophe in 'ਤੇ survives the export."
  },
  keywords: [
    { keyword: "punjabi subtitle generator", role: "primary" },
    { keyword: "Punjabi captions", role: "synonym" },
    { keyword: "Punjabi audio to text", role: "synonym" },
    { keyword: "Does the Punjabi subtitle generator work offline?", role: "faq" },
    { keyword: "Does it write Punjabi in Gurmukhi or Shahmukhi?", role: "faq" },
    { keyword: "Can I export Punjabi subtitles as SRT or VTT?", role: "faq" },
    { keyword: "Why are Gurmukhi nasal marks missing from some words?", role: "faq" },
    { keyword: "How do I handle English words in Punjabi subtitles?", role: "faq" },
    { keyword: "Is Punjabi transcription accuracy tested here?", role: "faq" }
  ]
};
