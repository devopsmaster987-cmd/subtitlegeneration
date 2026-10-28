import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "ne",
  slug: "nepali",
  nativeName: "नेपाली",
  path: "/subtitle-generator/nepali",
  h1: "Nepali subtitle generator",
  title: "Nepali subtitle generator — private, browser-based",
  metaDescription:
    "The Nepali subtitle generator turns नेपाली audio into timed Devanagari cues in your browser. Review names and numbers, then export SRT, VTT or TXT.",
  primaryKeyword: "nepali subtitle generator",
  capsule:
    "The Nepali subtitle generator uses Whisper on your device to transcribe नेपाली speech into Devanagari cues. You review timing, spelling, names and numbers, then export SRT, VTT or TXT. No audio is uploaded for transcription. No reviewed sample is recorded yet, so the page is excluded from search and the output needs a fluent check.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Nepali sample is recorded for this page, so it is excluded from search until that review exists. The Nepali subtitle generator still works and exports subtitles, but no tested-accuracy claim is made; treat the transcript as a draft for a fluent speaker to verify.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "ne" },
    { label: "Native name", value: "नेपाली" },
    { label: "Script", value: "Devanagari" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia, mainly Nepal" },
    { label: "Output", value: "SRT, VTT and TXT" },
    { label: "Review status", value: "No reviewed sample recorded" }
  ],
  sections: [
    {
      heading: "Using the Nepali subtitle generator",
      paragraphs: [
        "The Nepali subtitle generator keeps the transcription step inside the browser. Select a video or audio file, choose Nepali, and the local model returns Devanagari cues with timestamps. The editor is where the practical work happens: correcting words, splitting long cues and checking that the timing follows the speaker.",
        "Choose the language explicitly for interviews and scripted programmes. Automatic detection is useful for a quick test, but a clip that opens with music, English or another South Asian language can be misclassified. A fixed setting also makes repeated exports easier to compare during review."
      ]
    },
    {
      heading: "Devanagari and Nepali spelling",
      paragraphs: [
        "Nepali uses Devanagari, but its spelling and vocabulary are not the same as Hindi. Words shared with Hindi may carry a different ending, and Nepali has its own honorific and verb forms. A transcript that looks like Hindi can still be wrong for a Nepali audience, so review meaning rather than only character shapes.",
        "The file should remain UTF-8 text. Do not pass it through a tool that rewrites the script or normalises characters without your knowledge. Whisper usually returns Devanagari for Nepali speech, and this page does not promise romanized output; transliteration, if needed, is a separate editorial step."
      ]
    },
    {
      heading: "Punctuation and cue endings",
      paragraphs: [
        "Nepali writing commonly uses the danda । to end a sentence, with Western punctuation also present in digital and broadcast work. Follow the style of the publisher or the series. The important thing is consistency: a file that mixes dandas and full stops at random looks unfinished.",
        "Place punctuation where the clause actually ends. If a sentence runs across two cues, the first cue can end without a full stop, but it should not end with a stray comma that belongs to the next clause. Avoid leading punctuation and check that question marks survive the export unchanged."
      ]
    },
    {
      heading: "Line length and subtitle timing",
      paragraphs: [
        "Nepali verb forms and honorifics can lengthen a sentence, so a word-for-word match to an English template is a poor guide to line length. Start with about 42 characters per line and a maximum of two lines. Shorten the wording only where the visual context already carries the information.",
        "Timing and length should be reviewed together. A cue that is short in characters can still be unreadable if it flashes for half a second, and a longer cue can work if it stays on screen through a pause. Split at natural breaths, keep a number on one line, and test the result at phone size."
      ]
    },
    {
      heading: "Compound words and attached endings",
      paragraphs: [
        "Nepali joins stems, suffixes and postpositions, and it uses compound verbs in ordinary conversation. A line break inside a joined form can separate a root from the ending that marks tense or respect. Break between phrases, and keep the verb unit together when possible.",
        "Sanskrit-derived vocabulary may have more than one accepted spelling, and local usage can differ from a dictionary. Choose the form that matches the speaker or the commissioning organisation, then keep it stable. A spell checker can catch obvious typos but will not resolve a regional preference."
      ]
    },
    {
      heading: "English code-switching in Nepali",
      paragraphs: [
        "Nepali media and workplace speech often include English terms for technology, education, health and business. The model may write those terms in Latin letters, in Devanagari, or inconsistently within the same recording. That is a normal code-switching problem rather than a single correct answer.",
        "Keep a glossary for repeated terms and apply it during review. Decide whether an English brand or job title looks better in Latin script or in Devanagari. The generator does not promise romanized Nepali, and it may not normalise mixed script on its own, so a bilingual reviewer should make the final call."
      ]
    },
    {
      heading: "Names, numbers and dates",
      paragraphs: [
        "Nepali names, caste and clan names, and place names can have several accepted spellings. Official documents, the speaker's own preference and common media usage may disagree. Check the source you trust, then apply that spelling consistently instead of letting the model vary it from cue to cue.",
        "Nepali digits ०१२३४५६७८९ and Western digits both appear in everyday material. Choose one convention for dates, prices, telephone numbers and room numbers. Keep a digit sequence in a single run, and check that a dash in a date range or a decimal point has not been lost during editing."
      ]
    },
    {
      heading: "Dialects, accents and model limits",
      paragraphs: [
        "Nepali varies across eastern, central, western and far-western regions, and speech in Darjeeling, Sikkim, Bhutan and other diaspora communities has its own habits. A strong accent, fast delivery or local idiom can be normalised toward a standard form or misheard as a similar-sounding word. Meaning is the test, not fluency.",
        "Recording conditions matter as much as dialect. Background music, street noise and overlapping speakers reduce the model's confidence. This page has no reviewed Nepali sample and claims no accuracy rate. A fluent reviewer should check honorifics, regional vocabulary and any sentence that reads well but changes the speaker's point."
      ]
    },
    {
      heading: "Review process and privacy",
      paragraphs: [
        "Work in passes. Correct the Devanagari and punctuation first, then names, numbers and English terms, then timing and line breaks while watching the video. A last listen at normal speed catches cues that are accurate on paper but arrive too late or disappear too quickly.",
        "Because the model runs locally, the audio is not sent to a VoiceToTextFree server. That is a useful privacy property, not a guarantee about every part of your setup: browser extensions, shared devices and download locations still matter. Keep the UTF-8 master, test it in the intended player, and check the uploaded result if the video goes to a platform."
      ]
    }
  ],
  faqs: [
    {
      question: "Is the Nepali subtitle generator private?",
      answer:
        "Transcription runs in the browser with a local model, so the audio is not uploaded to VoiceToTextFree for processing. Your browser profile, extensions and the place where you save exports are still part of your privacy setup and should be checked for sensitive material."
    },
    {
      question: "Does it produce Devanagari or romanized Nepali?",
      answer:
        "It normally produces Devanagari. This page does not promise romanized output, and English terms in code-switched speech may appear in Latin script. If you need romanized Nepali, treat that as a separate conversion and review task."
    },
    {
      question: "Can I download Nepali subtitles as SRT or VTT?",
      answer:
        "Yes. After editing you can export SRT, VTT or TXT. The files are UTF-8, but you should play the export in your target app to confirm that Devanagari conjuncts, dandas and numbers display as expected."
    },
    {
      question: "Why does the transcript use Hindi-like words?",
      answer:
        "Nepali and Hindi share Devanagari and some vocabulary, so a model can drift toward a Hindi-looking form. The text may still be understandable but wrong for Nepali usage. Review verb endings, honorifics and local vocabulary with a fluent speaker."
    },
    {
      question: "How should I handle English terms in Nepali subtitles?",
      answer:
        "Use a short glossary and a consistent script choice for recurring terms. The model may switch between Latin and Devanagari, so normalise those cues during review. Match the expectation of the audience rather than applying one rule blindly to every term."
    },
    {
      question: "Has the Nepali transcription been accuracy tested?",
      answer:
        "No reviewed Nepali sample is recorded, so the page is excluded from search and no tested-accuracy result is claimed. The tool still produces subtitles, but a fluent reviewer should verify the text before publication."
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
    "how-to-improve-whisper-accuracy",
    "subtitle-best-practices"
  ],
  workedExample: {
    title: "Sample Nepali cues with English meanings",
    intro:
      "A short office announcement in Devanagari. The English meanings in the note are only for review and would be removed from the delivered file.",
    srt: `1
00:00:01,000 --> 00:00:04,000
आज बिहान नौ बजे बैठक छ।

2
00:00:04,200 --> 00:00:07,800
कृपया प्रतिवेदन चौथो तलामा ल्याउनुहोस्।

3
00:00:08,000 --> 00:00:11,500
हामी कोठा नम्बर ४०२ मा भेटौंला।`,
    note: "Meanings: there is a meeting at nine this morning; please bring the report to the fourth floor; we will meet in room number 402. The honorific form in the second cue and the Devanagari digits in the third are the parts most worth checking with a fluent reader."
  },
  keywords: [
    { keyword: "nepali subtitle generator", role: "primary" },
    { keyword: "Nepali captions", role: "synonym" },
    { keyword: "Nepali audio to text", role: "synonym" },
    { keyword: "Is the Nepali subtitle generator private?", role: "faq" },
    { keyword: "Does it produce Devanagari or romanized Nepali?", role: "faq" },
    { keyword: "Can I download Nepali subtitles as SRT or VTT?", role: "faq" },
    { keyword: "Why does the transcript use Hindi-like words?", role: "faq" },
    { keyword: "How should I handle English terms in Nepali subtitles?", role: "faq" },
    { keyword: "Has the Nepali transcription been accuracy tested?", role: "faq" }
  ]
};
