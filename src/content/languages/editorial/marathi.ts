import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "mr",
  slug: "marathi",
  nativeName: "मराठी",
  path: "/subtitle-generator/marathi",
  h1: "Marathi subtitle generator",
  title: "Marathi subtitle generator — private, browser-based",
  metaDescription:
    "Use the Marathi subtitle generator to transcribe Marathi audio in Devanagari, review the cues, and export SRT, VTT or TXT locally without an upload.",
  primaryKeyword: "marathi subtitle generator",
  capsule:
    "The Marathi subtitle generator runs Whisper inside your browser, so मराठी audio is transcribed locally and stays on your device. Choose Marathi, review the Devanagari cues for names, numbers and punctuation, then export SRT, VTT or TXT. No reviewed sample is recorded yet, so treat the text as unverified until a speaker checks it.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Marathi sample is recorded for this page, so it is excluded from search until that testing is done. The Marathi subtitle generator still works in the browser: you can transcribe, edit and export SRT or VTT, but treat the text as unverified rather than tested.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "mr" },
    { label: "Native name", value: "मराठी" },
    { label: "Script", value: "Devanagari" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia, mainly Maharashtra" },
    { label: "Output", value: "SRT, VTT and TXT" },
    { label: "Review status", value: "No reviewed sample recorded" }
  ],
  sections: [
    {
      heading: "What the Marathi subtitle generator does",
      paragraphs: [
        "The Marathi subtitle generator sends your audio through a Whisper model that runs in the browser tab. The file is not uploaded to a transcription service, and no account is needed. Marathi speech is returned as Devanagari text with timestamps, and the editor lets you repair words, split cues and move boundaries before you export.",
        "Choose Marathi in the language picker when the recording is clearly Marathi. Auto-detect is convenient for short clips, but it can drift when the audio starts with music, English or another language. A fixed choice is easier to audit when you need the same result across a series of episodes."
      ]
    },
    {
      heading: "Devanagari script and Marathi characters",
      paragraphs: [
        "Marathi uses Devanagari, the same broad script family as Hindi, but the two languages are not interchangeable. Marathi relies on letters such as ळ and on its own spelling conventions, and a model trained mostly on Hindi can produce plausible-looking words that are wrong in Marathi. Read every cue as Marathi rather than accepting a familiar shape.",
        "The exported file is plain UTF-8 text. Keep it that way: an older editor may re-encode the glyphs or convert a danda into a different character. Whisper normally returns native Devanagari for Marathi speech, and this page does not promise romanized output. If you need Latin transliteration, that is a separate review or conversion step."
      ]
    },
    {
      heading: "Punctuation and sentence endings",
      paragraphs: [
        "Formal Marathi uses the danda । at the end of a sentence and sometimes a double danda ॥ for a stronger break. News, subtitles and web writing also use the Western full stop, question mark and exclamation mark. Pick the convention that matches the rest of the video and keep it consistent across cues.",
        "Do not let a word processor replace straight quotes with smart quotes after export. Keep punctuation at the logical end of the sentence, and do not move a danda to the start of the next cue just to make the line look balanced. A cue that begins with punctuation reads badly even when the timing is correct."
      ]
    },
    {
      heading: "Line length and timing for Marathi cues",
      paragraphs: [
        "Marathi words are often longer than their English translations, so a direct character budget can produce crowded lines. A practical target is about 42 characters per line and no more than two lines per cue. If a sentence needs three lines, split it at a natural clause boundary and give each cue enough time to be read.",
        "Check reading speed as well as length. A cue that is technically short can still be too fast if it appears for under a second. Leave the previous cue on screen long enough to finish the phrase, and avoid placing a line break in the middle of a conjunct or a case ending. The subtitle should follow the spoken rhythm, not the width of the screen."
      ]
    },
    {
      heading: "Compound words and word breaks",
      paragraphs: [
        "Marathi builds long nominal compounds and attaches postpositions and case markers to the word. A line break in the wrong place can separate a stem from the element that gives it grammatical meaning, which makes the cue harder to parse. Break between phrases first, and only split a compound when the alternative is an unreadable line.",
        "The same caution applies to sandhi-like joins and to words borrowed from Sanskrit. A spell checker may accept both the joined and separated form, so decide which style the project uses and apply it throughout. Consistency matters more than forcing a single rule onto every speaker."
      ]
    },
    {
      heading: "English code-switching in Marathi media",
      paragraphs: [
        "Urban Marathi speech mixes English nouns, product names and technical terms into Marathi sentences. Whisper may write those words in Latin script, in Devanagari, or in a hybrid form, and the choice can change from cue to cue. Review the result rather than assuming that every English word will be transliterated the same way.",
        "For subtitles, keep a short glossary of recurring terms and decide whether each one should appear in Latin or Devanagari. Do not promise romanized output for mixed speech: the model returns what it infers, and a bilingual reviewer is still the reliable check. Consistent code-switching is easier for viewers than a random mixture."
      ]
    },
    {
      heading: "Names, numbers and dates in Marathi",
      paragraphs: [
        "Personal names, place names and organisation names are the most common source of errors. Marathi names may have several accepted spellings, and a model can choose a Hindi-looking form. Check the spelling used by the speaker or the organisation, then apply it consistently across the file.",
        "Marathi can use Devanagari digits ०१२३४५६७८९ or Western digits. Choose one convention for the video, especially for phone numbers, room numbers, dates and prices. Keep a number in a single run and avoid inserting a line break inside it, because a split number is difficult to read and easy to mistranscribe."
      ]
    },
    {
      heading: "Dialects, accents and model limits",
      paragraphs: [
        "Standard Marathi is associated with Pune and Mumbai formal usage, while Varhadi, Khandeshi, Kolhapuri and coastal varieties differ in vocabulary and pronunciation. A model may normalise dialect speech toward standard Marathi or mishear local words entirely. Those differences are a review issue, not proof that the recording is unclear.",
        "Audio quality, overlapping speakers, music and distance from the microphone all affect the result. No accuracy figure is claimed for this page because no reviewed Marathi sample is recorded. Treat the transcript as a first draft, and ask a fluent speaker to check idioms, honorifics and regional vocabulary before publishing."
      ]
    },
    {
      heading: "Review workflow and privacy",
      paragraphs: [
        "A practical review has two passes. First read the transcript without the video and fix obvious word errors, punctuation and names. Then play the video at normal speed and adjust cue boundaries, line breaks and reading time. Finish with a spot check of numbers, English terms and the longest cue.",
        "Because transcription runs locally, the audio does not leave the browser for a VoiceToTextFree server. That does not remove every privacy consideration: extensions, shared devices and downloaded files still matter. Export UTF-8 SRT or VTT, store the master file safely, and remember that a platform may restyle or re-encode captions after upload."
      ]
    }
  ],
  faqs: [
    {
      question: "Does the Marathi subtitle generator upload my video?",
      answer:
        "No. Transcription runs in the browser with a local Whisper model. The audio is processed on your device, and the exported SRT, VTT or TXT file is created locally. Check your browser extensions and device sharing settings if the material is sensitive."
    },
    {
      question: "What script does the Marathi output use?",
      answer:
        "The output is normally Devanagari, the script used for Marathi. This page does not promise romanized output, and mixed English words may appear in Latin script or in Devanagari depending on what the model infers. Review mixed cues with a fluent speaker."
    },
    {
      question: "Can I export Marathi subtitles as SRT or VTT?",
      answer:
        "Yes. After transcription and editing you can download SRT, VTT or plain text. The files are written as UTF-8, but you should still open the export in your target player to confirm that the Devanagari glyphs and punctuation survive."
    },
    {
      question: "Why are Marathi words split across lines?",
      answer:
        "Automatic cues follow timing and character limits, not Marathi grammar. Long compounds and attached case markers may end up on the wrong side of a line break. Move the break to a phrase boundary and avoid splitting a conjunct or a number."
    },
    {
      question: "Does it understand English words mixed into Marathi?",
      answer:
        "It can transcribe some code-switched speech, but the result is not guaranteed and the script choice may vary. Keep a glossary for recurring English terms, review each occurrence, and decide whether the project uses Latin or Devanagari for those words."
    },
    {
      question: "Has the Marathi output been accuracy tested?",
      answer:
        "No reviewed Marathi sample is recorded, so this page is excluded from search and no tested-accuracy claim is made. The tool still works and you can produce subtitles, but the text should be treated as unverified until a fluent reviewer checks it."
    }
  ],
  sources: [
    {
      label: "Unicode — Devanagari code chart",
      url: "https://www.unicode.org/charts/PDF/U0900.pdf"
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
    "how-to-improve-whisper-accuracy"
  ],
  workedExample: {
    title: "Illustrative Marathi cues with English meanings",
    intro:
      "A short office clip transcribed in Devanagari. The English lines in the note are for review only and would not be delivered in the subtitle file.",
    srt: `1
00:00:01,000 --> 00:00:04,000
आज सकाळी नऊ वाजता बैठक आहे.

2
00:00:04,200 --> 00:00:07,800
कृपया अहवाल चौथ्या मजल्यावर आणा.

3
00:00:08,000 --> 00:00:11,500
खोली क्रमांक ४०२ वर भेटूया.`,
    note: "Meanings: there is a meeting at nine this morning; please bring the report to the fourth floor; let us meet in room 402. The third cue uses a Devanagari numeral and should be checked against the project's number style."
  },
  keywords: [
    { keyword: "marathi subtitle generator", role: "primary" },
    { keyword: "Marathi captions", role: "synonym" },
    { keyword: "Marathi audio to text", role: "synonym" },
    { keyword: "Does the Marathi subtitle generator upload my video?", role: "faq" },
    { keyword: "What script does the Marathi output use?", role: "faq" },
    { keyword: "Can I export Marathi subtitles as SRT or VTT?", role: "faq" },
    { keyword: "Why are Marathi words split across lines?", role: "faq" },
    { keyword: "Does it understand English words mixed into Marathi?", role: "faq" },
    { keyword: "Has the Marathi output been accuracy tested?", role: "faq" }
  ]
};
