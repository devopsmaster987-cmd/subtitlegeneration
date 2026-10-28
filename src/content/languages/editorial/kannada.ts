import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "kn",
  slug: "kannada",
  nativeName: "ಕನ್ನಡ",
  path: "/subtitle-generator/kannada",
  h1: "Kannada subtitle generator",
  title: "Kannada subtitle generator — private, browser-based Whisper",
  metaDescription:
    "Use the Kannada subtitle generator to transcribe ಕನ್ನಡ audio locally in your browser, review ottakshara clusters, names and numerals, then export SRT, VTT or TXT.",
  primaryKeyword: "kannada subtitle generator",
  capsule:
    "Use this Kannada subtitle generator to transcribe ಕನ್ನಡ audio locally in your browser, then review the Kannada script, ottakshara clusters, names and numerals before exporting SRT, VTT or TXT. No upload or account is needed. No reviewed Kannada sample has been recorded, so no tested accuracy is claimed and this page is excluded from search.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Kannada sample has been recorded for VoiceToTextFree. This page is therefore excluded from search with noindex, and no tested accuracy is claimed. The browser-based tool still works: select Kannada, transcribe locally and review every cue before export.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "kn" },
    { label: "Native name", value: "ಕನ್ನಡ" },
    { label: "Script", value: "Kannada (Unicode U+0C80–U+0CFF)" },
    { label: "Script type", value: "Abugida with ottakshara conjuncts" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia" },
    { label: "Output", value: "SRT, VTT and TXT" }
  ],
  sections: [
    {
      heading: "What the Kannada subtitle generator does",
      paragraphs: [
        "VoiceToTextFree runs a multilingual Whisper model in the browser on your device. Kannada is present in the model's language tokenizer, so you can select kn and transcribe Kannada audio without uploading the recording to a transcription service. The first run may download model files; after that, the audio and the draft transcript stay on the machine.",
        "This page is a working tool, not a measured accuracy report. No reviewed Kannada sample has been recorded for VoiceToTextFree, so the page carries noindex and makes no accuracy promise. Select Kannada, generate a draft, then compare it with the audio and correct the script, spelling, names, numbers and cue breaks before exporting SRT, VTT or TXT."
      ]
    },
    {
      heading: "Kannada script, ottakshara and punctuation",
      paragraphs: [
        "Kannada uses its own left-to-right script, an abugida in which consonants carry an inherent vowel. Vowel signs attach to a consonant, and consonant clusters called ottakshara stack or combine letters. There is no uppercase or lowercase, so names and sentence openings are not capitalised. The script is encoded in Unicode from U+0C80 to U+0CFF.",
        "Modern Kannada publishing generally uses the Western full stop, comma, question mark and quotation marks. A displayed Kannada akshara can contain a base consonant, a vowel sign and an ottakshara stack, so never split it across a line or cue. The word ಕನ್ನಡ and the cluster ಕ್ಷ are useful font tests: if the letters separate or the stack collapses, the player or font is not shaping the script correctly."
      ]
    },
    {
      heading: "Long compounds and Kannada agglutination",
      paragraphs: [
        "Kannada is agglutinative: case, number, person, tense, mood and politeness can be marked by suffixes attached to a root. A single verb may carry several endings, as in ಮಾಡುತ್ತಿದ್ದೇನೆ, 'I am doing'. The written word is one unit, so splitting it between two lines makes it harder to read and can suggest a boundary that is not there.",
        "Compound words and sandhi changes add to the length. Formal written Kannada and everyday speech also differ: a speaker may say ಮಾಡ್ತಿದ್ದೀನಿ where a formal transcript has ಮಾಡುತ್ತಿದ್ದೇನೆ. Treat that as a register difference, not an error, and compare it with the audio. If a word will not fit, reflow the sentence at a clause boundary rather than inserting a space inside the word."
      ]
    },
    {
      heading: "Names, numbers and English borrowings in Kannada",
      paragraphs: [
        "Kannada personal names may use initials, a family name or a village name, and their order varies by region and family. Latin transliteration is not fixed, so the same name can appear in several spellings. Whisper normally returns Kannada script for Kannada speech, but a name or an English term may come back in Latin letters. The tool does not promise a romanized transcript.",
        "Modern Kannada text uses Western digits 0-9 for most numbers, while the historical Kannada numerals ೦ to ೯ are uncommon outside specialised material. Spoken numbers may be written as words or digits. Prices in rupees, dates, phone numbers and figures using lakh and crore need a consistent style; keep a number and its unit in one run so the player cannot reorder them."
      ]
    },
    {
      heading: "Code-switching between Kannada and English",
      paragraphs: [
        "Kannada speech often mixes English words and phrases, especially in technology, education, business and urban conversation. The informal blend is sometimes called Kanglish, and romanized Kannada is common in messages but is not a standard subtitle script. The model may keep an English term in Latin letters inside a Kannada cue, which can be faithful to the audio but inconsistent elsewhere in the file.",
        "Choose a rule before editing: keep established English terms in Latin script, or write them in Kannada script, and apply it throughout. Do not promise romanized output. Do not use Whisper's translate task to create Kannada subtitles, because that task outputs English; transcribe in Kannada and translate separately if a second-language version is required."
      ]
    },
    {
      heading: "Dialects and accents Kannada ASR may miss",
      paragraphs: [
        "Kannada is spoken across Karnataka, and the speech of Mysuru, Dharwad, coastal Mangaluru and the northern districts differs in vocabulary, intonation and some endings. Formal and colloquial registers also diverge, so a transcript that reads smoothly in one variety may use a word the speaker would not choose. Rapid delivery, overlapping speakers and background music add further risk.",
        "No reviewed Kannada sample has been recorded for this page, so there is no measured accuracy figure to quote. Select Kannada explicitly rather than relying on auto-detect when the recording contains closely related Dravidian speech. Slow down difficult passages, check dialect words with a speaker, and treat the first transcript as a draft."
      ]
    },
    {
      heading: "Line length and cue timing for Kannada",
      paragraphs: [
        "A Kannada cluster can contain a base consonant, a vowel sign and an ottakshara stack, and a line break inside the stack can leave detached marks or an unreadable fragment. Keep the whole cluster together. Two lines per cue is the usual maximum. The 42-character Latin convention is only a starting point because Kannada glyph widths differ, so measure the rendered line in the target player.",
        "The common 15-20 characters-per-second figure comes from English-language guidance and is a rough ceiling, not a Kannada rule. Break at a clause or sentence boundary, keep a name with its title, and avoid splitting a long agglutinated verb to satisfy a character count. Shorten the text or extend the cue instead of crowding the frame."
      ]
    },
    {
      heading: "Review workflow and privacy for Kannada subtitles",
      paragraphs: [
        "Transcribe a short section first and compare it with the audio before running a long recording. Check names, numbers, negation, tense and every suffix that changes meaning. Correct the Kannada script in the editor, adjust cue boundaries, and export UTF-8 SRT, VTT or TXT. Open the result in the player that will show the video and confirm that the font renders vowel signs and ottakshara stacks correctly.",
        "The model runs locally, so the recording is not uploaded to a transcription service, although the first load may fetch model files over the network. Keep sensitive recordings on your own device and review the transcript before sharing it. The page remains out of search until a reviewed sample is recorded; the local tool is available in the meantime."
      ]
    }
  ],
  faqs: [
    {
      question: "Is there a Kannada subtitle generator that runs in the browser?",
      answer:
        "Yes. VoiceToTextFree runs the multilingual Whisper model locally in the browser. Select Kannada (kn), transcribe the file and review the draft before export. Model files may download on the first run, but the recording is not sent to a transcription server."
    },
    {
      question: "Does it output Kannada script or romanized Kannada?",
      answer:
        "Whisper normally returns Kannada script for Kannada speech. It does not guarantee romanized or transliterated output, and English words may remain in Latin letters. Review the cue and apply one spelling convention rather than assuming the model will transliterate."
    },
    {
      question: "Why does my Kannada transcript include English words?",
      answer:
        "Kannada speech often code-switches into English, and the model may keep an English term in Latin script inside a Kannada cue. That can reflect the audio. Decide whether established English terms stay in Latin letters or are written in Kannada script, then stay consistent."
    },
    {
      question: "How should I handle Kannada ottakshara in subtitle lines?",
      answer:
        "Keep an ottakshara stack intact and do not break it across lines or cues. Reflow at a clause boundary, shorten an adjacent phrase, or give the cue more time. Check the stack in the target player, because a font without proper shaping can display it incorrectly."
    },
    {
      question: "Can I export Kannada subtitles as SRT or VTT?",
      answer:
        "Yes. After transcription and review, download SRT, VTT or TXT. The exporter writes UTF-8; open the file in the target player and check vowel signs, ottakshara stacks and numerals before publishing."
    },
    {
      question: "Why is this Kannada page noindex?",
      answer:
        "No reviewed Kannada sample has been recorded for VoiceToTextFree, so the site has no honest accuracy result to publish. The page is excluded from search until that review exists. The browser-based tool still works, and this page explains the workflow."
    }
  ],
  workedExample: {
    title: "Illustrative Kannada cues with an English translation",
    intro:
      "This sample is illustrative only, not a benchmark. It shows a short Kannada exchange in native script. The English lines are translation notes for review and would not be included in the delivered subtitle file.",
    srt: `1
00:00:01,000 --> 00:00:04,500
ನಾಳೆ ಬೆಳಿಗ್ಗೆ ಒಂಬತ್ತು ಗಂಟೆಗೆ ಭೇಟಿಯಾಗೋಣ.
(We will meet tomorrow at nine in the morning.)

2
00:00:04,800 --> 00:00:08,200
ವರದಿಯನ್ನು ಮೂರನೇ ಮಹಡಿಗೆ ತನ್ನಿ.
(Please bring the report to the third floor.)`,
    note: "The parenthetical English is a translation note, not a second subtitle line. Cue 2 contains an ottakshara in ವರದಿಯನ್ನು and a polite imperative at the end, so check both during review. The pair is illustrative and has not been scored for accuracy."
  },
  sources: [
    {
      label: "Unicode CLDR — language and script data",
      url: "https://cldr.unicode.org/"
    },
    {
      label: "Unicode script chart — Kannada (U+0C80–U+0CFF)",
      url: "https://www.unicode.org/charts/PDF/U0C80.pdf"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "OpenAI Whisper — repository and language notes",
      url: "https://github.com/openai/whisper"
    }
  ],
  relatedGuides: [
    "how-to-improve-whisper-accuracy",
    "subtitle-line-length",
    "subtitle-best-practices"
  ],
  keywords: [
    { keyword: "kannada subtitle generator", role: "primary" },
    { keyword: "kannada captions", role: "synonym" },
    { keyword: "kannada audio to text", role: "synonym" },
    { keyword: "kannada transcript", role: "synonym" }
  ]
};
