import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "te",
  slug: "telugu",
  nativeName: "తెలుగు",
  path: "/subtitle-generator/telugu",
  h1: "Telugu subtitle generator",
  title: "Telugu subtitle generator — private, browser-based Whisper",
  metaDescription:
    "Use the Telugu subtitle generator to transcribe తెలుగు audio locally in your browser, review vowel signs, conjuncts, names and numerals, then export SRT, VTT or TXT.",
  primaryKeyword: "telugu subtitle generator",
  capsule:
    "Use this Telugu subtitle generator to transcribe తెలుగు audio locally in your browser, then check the Telugu script, vowel signs, names and numerals before exporting SRT, VTT or TXT. No upload or account is needed. No reviewed Telugu sample has been recorded, so no tested accuracy is claimed and the page is excluded from search.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Telugu sample has been recorded for VoiceToTextFree. This page is therefore excluded from search with noindex, and no tested accuracy is claimed. The browser-based tool still works: select Telugu, transcribe locally and check every cue before export.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "te" },
    { label: "Native name", value: "తెలుగు" },
    { label: "Script", value: "Telugu (Unicode U+0C00–U+0C7F)" },
    { label: "Script type", value: "Abugida with conjunct consonants" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia" },
    { label: "Output", value: "SRT, VTT and TXT" }
  ],
  sections: [
    {
      heading: "What the Telugu subtitle generator does",
      paragraphs: [
        "VoiceToTextFree runs a multilingual Whisper model in the browser on your device. Telugu is present in the model's language tokenizer, so you can select te and transcribe Telugu audio without uploading the recording to a transcription service. The first run may download model files; after that, the audio and the draft transcript stay on the machine.",
        "This page is a working tool, not a measured accuracy report. No reviewed Telugu sample has been recorded for VoiceToTextFree, so the page is noindex and makes no accuracy claim. Select Telugu, generate a draft, then compare it with the audio and correct the script, spelling, names, numbers and cue breaks before exporting SRT, VTT or TXT."
      ]
    },
    {
      heading: "Telugu script, vowel signs and punctuation",
      paragraphs: [
        "Telugu uses its own left-to-right script, an abugida in which a consonant carries an inherent vowel. Vowel signs, called gunintam, attach to a consonant to change that vowel, while conjunct consonants, called vattu, use subscript forms to join consonants. The anusvara and visarga are separate marks. There is no uppercase or lowercase, so names and sentence openings are not capitalised.",
        "Modern Telugu publishing generally uses the Western full stop, comma, question mark and quotation marks. A displayed Telugu akshara can contain a base consonant, a vowel sign and a subscript consonant, so never split it across a line or cue. Common conjuncts such as క్ష, త్ర and శ్ర are good font tests: if they break into separate pieces, the player or font is not shaping the script correctly."
      ]
    },
    {
      heading: "Long compounds and Telugu agglutination",
      paragraphs: [
        "Telugu is strongly agglutinative. Case, number, person, tense, mood and politeness can all be marked by suffixes attached to a root, so a single verb may be long. చదువుతున్నాను means 'I am reading' and is written as one unit. Splitting such a word between two subtitle lines makes it harder to read and can suggest a word boundary that is not there.",
        "Compounds and sandhi changes add to the length. Formal written Telugu and everyday speech also differ: a speaker may say చేస్తున్నా where a formal transcript has చేస్తున్నాను. Treat the difference as a register choice, not an error, and compare it with the audio. If a word will not fit, reflow the sentence at a clause boundary instead of inserting a space inside the word."
      ]
    },
    {
      heading: "Names, numbers and English borrowings in Telugu",
      paragraphs: [
        "Telugu names may place a family name first or last depending on region, community and personal preference, and Latin transliteration is not fixed. Check important names with the speaker or an existing caption rather than accepting the first spelling the model produces. Whisper normally returns Telugu script for Telugu speech, but an English word or a name may appear in Latin letters; the tool does not promise romanized output.",
        "Modern Telugu text uses Western digits 0-9 for most numbers, while the historical Telugu numerals ౦ to ౯ are rarely used outside specialised material. Spoken numbers may be written as words or digits. Prices in rupees, dates, phone numbers and large figures using lakh and crore need a consistent style, and a number should stay in one run so it does not reorder in the player."
      ]
    },
    {
      heading: "Code-switching between Telugu and English",
      paragraphs: [
        "Urban Telugu speech often mixes English words and phrases, especially in technology, education, business and media. The informal blend is sometimes called Tenglish. The model may keep an English term in Latin letters inside a Telugu cue, which can be faithful to the audio but inconsistent if the same term is written in Telugu script elsewhere in the file.",
        "Set a rule before you edit: keep established English terms in Latin script, or write them in Telugu script, then apply the rule throughout. Do not promise a romanized transcript, and do not use Whisper's translate task to create Telugu subtitles, because that task outputs English. Transcribe in Telugu and translate separately if a second-language version is required."
      ]
    },
    {
      heading: "Dialects and accents Telugu ASR may miss",
      paragraphs: [
        "Telugu is spoken across Telangana, coastal Andhra and Rayalaseema, and regional speech differs in vocabulary, intonation and some endings. Formal and colloquial registers also diverge, and a transcript that reads smoothly in one variety may use a word the speaker would not choose. Rapid delivery, overlapping speakers and background music make the draft less reliable.",
        "No reviewed Telugu sample has been recorded for this page, so there is no measured accuracy figure to quote. Treat the first transcript as a draft: slow down difficult passages, listen for the actual ending, and check dialect vocabulary with a speaker or a trusted reference. Correct the text rather than assuming the model's version is standard."
      ]
    },
    {
      heading: "Line length and cue timing for Telugu",
      paragraphs: [
        "A Telugu akshara can combine a consonant, a vowel sign and one or more subscript consonants. Keep the whole cluster together and never break inside it. Two lines per cue is the usual maximum. The 42-character Latin convention does not map directly to Telugu because glyph widths and cluster counts differ, so measure the rendered line in the target player rather than counting code points.",
        "The common 15-20 characters-per-second figure comes from English-language subtitling guidance and is only a rough ceiling here. Break at a clause or sentence boundary, keep a name with its title, and avoid splitting a long agglutinated verb to satisfy a character count. If a cue is too fast, shorten the text or extend the time rather than crowding the frame."
      ]
    },
    {
      heading: "Review workflow and privacy for Telugu subtitles",
      paragraphs: [
        "Transcribe a short section first and compare it with the audio before processing a long recording. Check names, numbers, negation, tense and any suffix that changes the meaning. Correct the Telugu script in the editor, adjust cue boundaries, and export UTF-8 SRT, VTT or TXT. Open the result in the player that will show the video and confirm that the font shapes every vowel sign and conjunct.",
        "The model runs locally, so the recording is not uploaded to a transcription service, although the first load may fetch model files over the network. Keep sensitive recordings on your own device and review the transcript before sharing it. The page remains out of search until a reviewed sample is recorded; the local tool is available in the meantime."
      ]
    }
  ],
  faqs: [
    {
      question: "Is there a Telugu subtitle generator that runs in the browser?",
      answer:
        "Yes. VoiceToTextFree runs the multilingual Whisper model locally in the browser. Select Telugu (te), transcribe the file and review the draft before export. Model files may download on the first run, but the audio is not sent to a transcription server."
    },
    {
      question: "Does it output Telugu script or romanized Telugu?",
      answer:
        "Whisper normally returns Telugu script for Telugu speech. It does not guarantee romanized or transliterated output, and English words may remain in Latin letters. Decide on one spelling convention and apply it during review."
    },
    {
      question: "Why does my Telugu transcript contain English words?",
      answer:
        "Telugu speech commonly code-switches into English, and the model may keep an English term in Latin script inside a Telugu cue. That can reflect the audio. Choose whether established English terms stay in Latin letters or are written in Telugu script, then stay consistent."
    },
    {
      question: "How do I break long Telugu words across subtitle lines?",
      answer:
        "Do not break inside a Telugu word. Keep the base consonant, vowel sign and any subscript consonant together. Reflow the sentence at a clause boundary, shorten a neighbouring phrase, or give the cue more time instead of splitting the word."
    },
    {
      question: "Can I export Telugu subtitles as SRT or VTT?",
      answer:
        "Yes. After transcription and review, download SRT, VTT or TXT. The exporter writes UTF-8; open the file in the target player and check the vowel signs, conjuncts and numerals before publishing."
    },
    {
      question: "Why is this Telugu page noindex?",
      answer:
        "No reviewed Telugu sample has been recorded for VoiceToTextFree, so the site has no honest accuracy result to publish. The page is excluded from search until that review exists. The browser-based tool still works, and this page explains the workflow."
    }
  ],
  workedExample: {
    title: "Illustrative Telugu cues with an English translation",
    intro:
      "This sample is illustrative only, not a benchmark. It shows a short Telugu exchange in native script. The English lines are translation notes for review and would not be included in the delivered subtitle file.",
    srt: `1
00:00:01,000 --> 00:00:04,500
రేపు ఉదయం తొమ్మిది గంటలకు కలుద్దాం.
(We will meet tomorrow at nine in the morning.)

2
00:00:04,800 --> 00:00:08,200
నివేదికను మూడవ అంతస్తుకు తీసుకురండి.
(Please bring the report to the third floor.)`,
    note: "The parenthetical English is a translation note, not a second subtitle line. Cue 2 ends in a verb with a polite imperative suffix, a good place to check that no suffix was dropped. The pair is illustrative and has not been scored for accuracy."
  },
  sources: [
    {
      label: "Unicode CLDR — language and script data",
      url: "https://cldr.unicode.org/"
    },
    {
      label: "Unicode script chart — Telugu (U+0C00–U+0C7F)",
      url: "https://www.unicode.org/charts/PDF/U0C00.pdf"
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
    "subtitle-best-practices",
    "subtitles-for-accessibility"
  ],
  keywords: [
    { keyword: "telugu subtitle generator", role: "primary" },
    { keyword: "telugu captions", role: "synonym" },
    { keyword: "telugu audio to text", role: "synonym" },
    { keyword: "telugu transcript", role: "synonym" }
  ]
};
