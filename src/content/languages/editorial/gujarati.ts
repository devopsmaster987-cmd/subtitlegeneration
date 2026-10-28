import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "gu",
  slug: "gujarati",
  nativeName: "ગુજરાતી",
  path: "/subtitle-generator/gujarati",
  h1: "Gujarati subtitle generator",
  title: "Gujarati subtitle generator — private, browser-based",
  metaDescription:
    "The Gujarati subtitle generator transcribes ગુજરાતી audio to Gujarati script locally. Edit the cues, check names and numbers, then export SRT, VTT or TXT.",
  primaryKeyword: "gujarati subtitle generator",
  capsule:
    "The Gujarati subtitle generator transcribes ગુજરાતી speech locally with Whisper, so the recording stays on your device. It returns Gujarati script rather than a romanized version. Review vowel signs, names, digits and line breaks, then export SRT, VTT or TXT. No reviewed sample is recorded yet, so the text remains unverified.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Gujarati sample is recorded for this page, so search engines are asked not to index it. The Gujarati subtitle generator is still available and produces editable captions, but no tested-accuracy claim is made and a fluent reviewer should check the text.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "gu" },
    { label: "Native name", value: "ગુજરાતી" },
    { label: "Script", value: "Gujarati" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia, mainly Gujarat" },
    { label: "Output", value: "SRT, VTT and TXT" },
    { label: "Review status", value: "No reviewed sample recorded" }
  ],
  sections: [
    {
      heading: "How the Gujarati subtitle generator works",
      paragraphs: [
        "The Gujarati subtitle generator runs a Whisper model inside the page, using your own device rather than a remote transcription queue. You choose the file, select Gujarati or let the model detect the language, and receive timed cues in Gujarati script. The editor then lets you correct the text before any download.",
        "A manual language choice is usually safer for a full programme. Gujarati and Hindi share a similar sound inventory and vocabulary in some domains, so automatic detection can waver on short or noisy clips. Once the language is fixed, the rest of the work is a normal subtitle review rather than a language gamble."
      ]
    },
    {
      heading: "Gujarati script and vowel signs",
      paragraphs: [
        "Gujarati writing runs left to right and lacks the continuous top line seen in Devanagari, which changes the visual rhythm of a caption. Vowel signs attach above, below, before or after a consonant, and a missing or misplaced matra can change the word. Check clusters and vowel marks in the player, not only in the editor.",
        "The file is UTF-8 plain text, and that is the right format for Gujarati. Do not run the export through a legacy converter or a spreadsheet that may replace the script. Whisper generally returns Gujarati characters for Gujarati speech; this page does not promise a romanized transcript, so plan a separate transliteration step if one is needed."
      ]
    },
    {
      heading: "Punctuation and sentence boundaries",
      paragraphs: [
        "Gujarati publication styles use a danda or a Western full stop depending on the publisher and the era of the text. Broadcast subtitles often favour the familiar full stop, question mark and exclamation mark. Choose the style used by the organisation, then apply it without mixing conventions inside one file.",
        "Cue boundaries should follow meaning rather than punctuation alone. A question may be split across two cues because the speaker pauses, and that is acceptable if each cue reads as a complete phrase. Avoid starting a cue with a comma, a closing bracket or a danda; move the punctuation back into the cue where the clause began."
      ]
    },
    {
      heading: "Line length and reading speed",
      paragraphs: [
        "Gujarati compounds and long verb forms can make a line wider than an English draft of the same sentence. Aim for roughly 42 characters per line and two lines per cue, then lower the limit if the font is large or the video is watched on a phone. A shorter line with a clean phrase break reads better than a packed line.",
        "Reading speed matters more than a fixed character count. Watch the cue at normal playback and ask whether you can finish it before it disappears. If not, split the sentence, shorten redundant words, or extend the cue into silence. Never solve a timing problem by shrinking the font to an unreadable size."
      ]
    },
    {
      heading: "Compound words and joined forms",
      paragraphs: [
        "Gujarati forms many words by joining stems, suffixes and postpositions. A line break between the parts can look like a spelling error or change how the phrase is read. Prefer a break at a space between grammatical words, and keep a joined form intact unless the line becomes impossible to fit.",
        "Borrowed Sanskrit and Persian vocabulary adds another layer, because more than one spelling may be in circulation. Pick the form used by the speaker's organisation and keep it stable. A reviewer who knows the subject will catch joined forms that a general spell checker accepts but the audience does not."
      ]
    },
    {
      heading: "English code-switching in Gujarati speech",
      paragraphs: [
        "Business, education and technology conversations in Gujarati often switch into English for a phrase or a single term. The model may output the English word in Latin letters, in Gujarati letters, or in a form that mixes both. That variation is normal, but it needs a decision before the file is published.",
        "Build a small glossary for recurring terms, brand names and job titles. Decide whether each stays in Latin script or is written in Gujarati, then apply the rule across the episode. Do not assume the generator will romanize Gujarati text; it returns what it recognises, and code-switched audio remains a review task."
      ]
    },
    {
      heading: "Names, numbers and dates",
      paragraphs: [
        "Names are harder than ordinary vocabulary because the same person or place may be written in several ways. A company may have an official Gujarati spelling, while a family name may be transliterated differently in English. Check the source, then keep one spelling for the whole file.",
        "Gujarati digits ૦૧૨૩૪૫૬૭૮૯ and Western digits can both appear. For dates, prices, telephone numbers and room numbers, choose the convention the audience expects and use it consistently. Keep a number in one run, and avoid a line break in the middle of a digit sequence."
      ]
    },
    {
      heading: "Dialects, accents and accuracy limits",
      paragraphs: [
        "Standard Gujarati is shaped by education and media, but Kathiyawadi, Surati, Charotari and other regional varieties differ in pronunciation and vocabulary. A speaker with a strong regional accent may be transcribed into a more standard form, or a local word may be replaced by a nearby word that sounds similar. Listen for meaning, not just plausibility.",
        "Background noise, crosstalk and phone audio make the task harder. This page has no recorded Gujarati accuracy test, so no percentage or benchmark is offered. A fluent reviewer should check idioms, honorifics, community-specific terms and any passage where the transcript reads smoothly but does not match the speaker."
      ]
    },
    {
      heading: "Review workflow and local privacy",
      paragraphs: [
        "Start with a silent read-through and correct obvious script, spelling and punctuation errors. Then play the clip at normal speed and fix timing, line breaks and reading speed. Keep a final pass for names, numbers, English terms and the longest compound in the file. This order catches different problems instead of repeating one check.",
        "Local processing means the audio is handled by the browser rather than uploaded to VoiceToTextFree. Your device, browser profile, extensions and downloaded files are still part of the privacy picture. Save the UTF-8 master, test the file in the target player, and remember that a video platform may restyle captions after upload."
      ]
    }
  ],
  faqs: [
    {
      question: "Does the Gujarati subtitle generator send my audio to a server?",
      answer:
        "No. The transcription model runs in the browser, so the audio is processed on your device. Exports are created locally. If the recording is confidential, also check browser extensions, shared profiles and where you save the downloaded subtitle file."
    },
    {
      question: "Does it output Gujarati script or romanized Gujarati?",
      answer:
        "It normally outputs Gujarati script. This page does not promise romanized output, and English words mixed into the speech may appear in Latin or Gujarati characters. A separate transliteration step is needed if you want Latin letters throughout."
    },
    {
      question: "Can I edit and export Gujarati subtitles as SRT?",
      answer:
        "Yes. The editor lets you correct words, retime cues and change line breaks, and you can download SRT, VTT or TXT. Open the exported file in the player you will actually use, because font fallback and cue rendering can differ from the editor."
    },
    {
      question: "Why do Gujarati vowel signs look broken in my player?",
      answer:
        "The player may be using a font with incomplete Gujarati coverage or shaping. Check the same file in another browser and on the presentation device. If the problem appears only after burning in, the video renderer's font stack is the likely cause."
    },
    {
      question: "How should I handle English words in Gujarati subtitles?",
      answer:
        "Decide on a rule for recurring terms, brands and titles, then apply it consistently. The model may choose Latin or Gujarati script on its own, so a reviewer should normalise those cues. Mixed script is acceptable when the audience expects it, but random variation is not."
    },
    {
      question: "Is the Gujarati transcription accuracy verified?",
      answer:
        "No reviewed Gujarati sample is recorded, so the page is excluded from search and no tested-accuracy claim is made. The tool works and can produce a useful draft, but a fluent reviewer should verify the text before it is published."
    }
  ],
  sources: [
    {
      label: "Unicode — Gujarati code chart",
      url: "https://www.unicode.org/charts/PDF/U0A80.pdf"
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
    "subtitle-line-length",
    "rtl-and-non-latin-subtitles",
    "how-to-create-and-edit-an-srt-file"
  ],
  workedExample: {
    title: "Sample Gujarati cues with English meanings",
    intro:
      "A short meeting reminder in Gujarati script. The translations in the note are for review, not for display in the delivered subtitles.",
    srt: `1
00:00:01,000 --> 00:00:04,000
આજે સવારે નવ વાગ્યે બેઠક છે.

2
00:00:04,200 --> 00:00:07,800
કૃપા કરીને અહેવાલ ચોથા માળે લાવો.

3
00:00:08,000 --> 00:00:11,500
આપણે રૂમ નંબર ૪૦૨માં મળીશું.`,
    note: "Meanings: there is a meeting at nine this morning; please bring the report to the fourth floor; we will meet in room number 402. The final cue uses Gujarati digits, so check it against the project's chosen number style."
  },
  keywords: [
    { keyword: "gujarati subtitle generator", role: "primary" },
    { keyword: "Gujarati captions", role: "synonym" },
    { keyword: "Gujarati audio to text", role: "synonym" },
    { keyword: "Does the Gujarati subtitle generator send my audio to a server?", role: "faq" },
    { keyword: "Does it output Gujarati script or romanized Gujarati?", role: "faq" },
    { keyword: "Can I edit and export Gujarati subtitles as SRT?", role: "faq" },
    { keyword: "Why do Gujarati vowel signs look broken in my player?", role: "faq" },
    { keyword: "How should I handle English words in Gujarati subtitles?", role: "faq" },
    { keyword: "Is the Gujarati transcription accuracy verified?", role: "faq" }
  ]
};
