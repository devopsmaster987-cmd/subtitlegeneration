import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "ml",
  slug: "malayalam",
  nativeName: "മലയാളം",
  path: "/subtitle-generator/malayalam",
  h1: "Malayalam subtitle generator",
  title: "Malayalam subtitle generator — private, browser-based Whisper",
  metaDescription:
    "Use the Malayalam subtitle generator to transcribe മലയാളം audio locally, review chillu letters, conjuncts, names and numerals, then export SRT, VTT or TXT.",
  primaryKeyword: "malayalam subtitle generator",
  capsule:
    "Use this Malayalam subtitle generator to transcribe മലയാളം audio locally in your browser, then review the Malayalam script, chillu letters, names and numerals before exporting SRT, VTT or TXT. No upload or account is required. No reviewed Malayalam sample has been recorded, so no tested accuracy is claimed and this page is excluded from search.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Malayalam sample has been recorded for VoiceToTextFree. This page is therefore excluded from search with noindex, and no tested accuracy is claimed. The browser-based tool still works: select Malayalam, transcribe locally and review every cue before export.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "ml" },
    { label: "Native name", value: "മലയാളം" },
    { label: "Script", value: "Malayalam (Unicode U+0D00–U+0D7F)" },
    { label: "Script type", value: "Abugida with chillu letters" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia" },
    { label: "Output", value: "SRT, VTT and TXT" }
  ],
  sections: [
    {
      heading: "What the Malayalam subtitle generator does",
      paragraphs: [
        "VoiceToTextFree runs a multilingual Whisper model in the browser on your device. Malayalam is present in the model's language tokenizer, so you can select ml and transcribe Malayalam audio without sending the recording to a transcription service. The first run may download model files; after that, the audio and the draft transcript remain on the machine.",
        "This is a working tool, not a measured accuracy report. No reviewed Malayalam sample has been recorded for VoiceToTextFree, so the page carries noindex and makes no accuracy promise. Select Malayalam, generate a draft, then compare it with the audio and correct the script, spelling, names, numbers and cue breaks before exporting SRT, VTT or TXT."
      ]
    },
    {
      heading: "Malayalam script, chillu letters and punctuation",
      paragraphs: [
        "Malayalam uses its own left-to-right script, an abugida in which consonants carry an inherent vowel. Vowel signs attach to a consonant, conjuncts join consonants, and the anusvara is a separate mark. Chillu letters such as ൺ, ൻ, ർ, ൽ, ൾ and ൿ are atomic final consonants without an inherent vowel. They are not a consonant plus a visible vowel sign, so keep each one attached to its word.",
        "Malayalam has no uppercase or lowercase. Modern publishing generally uses the Western full stop, comma, question mark and quotation marks. Traditional and reformed spellings coexist, so two publications may represent the same word with different conjunct forms. Choose one house style, check it against a dictionary or the speaker, and do not split a base letter, vowel sign or chillu from the rest of its cluster."
      ]
    },
    {
      heading: "Long compounds and Malayalam agglutination",
      paragraphs: [
        "Malayalam is agglutinative: case, number, person, tense and negation can be marked by suffixes attached to a root. Compound verbs and long nominal compounds are normal, and a single written word can carry several grammatical elements. As in പഠിച്ചുകൊണ്ടിരിക്കുന്നു, roughly 'is studying', the word is one unit and should remain on one line.",
        "Sandhi and compound formation can change the shape of a final consonant, which makes a word-boundary error easy to miss. Formal written Malayalam and everyday speech also differ in verb endings and vocabulary, so a transcript may read more literary than the audio. Compare the form with the recording, then reflow at a clause boundary if the word is too wide for the cue."
      ]
    },
    {
      heading: "Names, numbers and English borrowings in Malayalam",
      paragraphs: [
        "Malayalam personal names may use initials, a family name, or a house name whose position varies by community. Latin transliteration is not fixed, so the same name can appear in several spellings. Whisper normally returns Malayalam script for Malayalam speech, but a name or an English term may come back in Latin letters. The tool does not promise a romanized transcript.",
        "Modern Malayalam text uses Western digits 0-9 for most numbers, while the historical Malayalam numerals ൦ to ൯ are uncommon outside specialised material. Spoken numbers may be written as words or digits. Prices in rupees, dates, phone numbers and figures using lakh and crore need a consistent style; keep a number and its unit in one run so the player cannot reorder them."
      ]
    },
    {
      heading: "Code-switching between Malayalam and English",
      paragraphs: [
        "Malayalam speech frequently mixes English words and phrases, especially in technology, education, business and urban conversation. The informal blend is often called Manglish, and romanized Malayalam is common in messages but is not a standard subtitle script. The model may keep an English term in Latin letters inside a Malayalam cue, which can match the audio yet look inconsistent elsewhere.",
        "Choose a rule before editing: keep established English terms in Latin script, or write them in Malayalam script, and apply it throughout. Do not promise romanized output. Do not use Whisper's translate task to create Malayalam subtitles, because that task outputs English; transcribe in Malayalam and translate separately when a second-language track is needed."
      ]
    },
    {
      heading: "Dialects and accents Malayalam ASR may miss",
      paragraphs: [
        "Malayalam is spoken across Malabar in the north, the central Kochi region and Travancore in the south, and regional speech differs in vocabulary, intonation and some endings. Mappila Malayalam and other community varieties add further differences, including loanwords from Arabic. Formal and colloquial registers also diverge, so a fluent-looking sentence may not fit the speaker.",
        "No reviewed Malayalam sample has been recorded for this page, so there is no measured accuracy figure to quote. Select Malayalam explicitly rather than relying on auto-detect when the recording contains closely related Dravidian speech. Slow down difficult passages, check dialect words with a speaker, and treat the first transcript as a draft."
      ]
    },
    {
      heading: "Line length and cue timing for Malayalam",
      paragraphs: [
        "A Malayalam cluster can contain a base consonant, a vowel sign, a conjunct and an anusvara, and a chillu letter may sit at the end of a word. Keep the cluster intact and never break a line between a chillu and the rest of the word. Two lines per cue is the usual maximum. The 42-character Latin convention is only a starting point because Malayalam glyph widths differ, so measure the rendered line in the target player.",
        "The common 15-20 characters-per-second figure comes from English-language guidance and is a rough ceiling, not a Malayalam rule. Break at a clause or sentence boundary, keep a name with its title, and avoid splitting a long agglutinated verb to satisfy a character count. Shorten the text or extend the cue instead of crowding the frame."
      ]
    },
    {
      heading: "Review workflow and privacy for Malayalam subtitles",
      paragraphs: [
        "Transcribe a short section first and compare it with the audio before running a long recording. Check names, numbers, negation, tense and every suffix that changes meaning. Correct the Malayalam script in the editor, adjust cue boundaries, and export UTF-8 SRT, VTT or TXT. Open the result in the player that will show the video and confirm that the font renders chillu letters, conjuncts and vowel signs correctly.",
        "The model runs locally, so the recording is not uploaded to a transcription service, although the first load may fetch model files over the network. Keep sensitive recordings on your own device and review the transcript before sharing it. The page remains out of search until a reviewed sample is recorded; the local tool is available in the meantime."
      ]
    }
  ],
  faqs: [
    {
      question: "Is there a Malayalam subtitle generator that works locally?",
      answer:
        "Yes. VoiceToTextFree runs the multilingual Whisper model in the browser. Select Malayalam (ml), transcribe the file and review the draft before export. Model files may download on the first run, but the recording is not sent to a transcription server."
    },
    {
      question: "Does it write Malayalam script or romanized Malayalam?",
      answer:
        "Whisper normally returns Malayalam script for Malayalam speech. It does not guarantee romanized output, and English words may remain in Latin letters. Review the cue and apply one spelling convention rather than assuming the model will transliterate."
    },
    {
      question: "Why are English words mixed into my Malayalam transcript?",
      answer:
        "Malayalam speech often code-switches into English, and the model may preserve an English term in Latin script inside a Malayalam cue. That can reflect the audio. Decide whether established English terms stay in Latin letters or are written in Malayalam script, then stay consistent."
    },
    {
      question: "How do I keep Malayalam chillu letters and conjuncts intact in subtitles?",
      answer:
        "Treat a chillu letter as part of its word and never split it across lines. Keep the base consonant, vowel sign and conjunct together, reflow at a clause boundary, and check the rendered cue in the target player and font."
    },
    {
      question: "Can I export Malayalam subtitles as SRT or VTT?",
      answer:
        "Yes. After transcription and review, download SRT, VTT or TXT. The exporter writes UTF-8; open the file in the target player and check chillu letters, conjuncts and numerals before publishing."
    },
    {
      question: "Why is this Malayalam page noindex?",
      answer:
        "No reviewed Malayalam sample has been recorded for VoiceToTextFree, so the site has no honest accuracy result to publish. The page is excluded from search until that review exists. The browser-based tool still works, and this page explains the workflow."
    }
  ],
  workedExample: {
    title: "Illustrative Malayalam cues with an English translation",
    intro:
      "This sample is illustrative only, not a benchmark. It shows a short Malayalam exchange in native script. The English lines are translation notes for review and would not be included in the delivered subtitle file.",
    srt: `1
00:00:01,000 --> 00:00:04,500
നാളെ രാവിലെ ഒമ്പതു മണിക്ക് കാണാം.
(We will meet tomorrow at nine in the morning.)

2
00:00:04,800 --> 00:00:08,200
റിപ്പോർട്ട് മൂന്നാം നിലയിലേക്ക് കൊണ്ടുവരിക.
(Please bring the report to the third floor.)`,
    note: "The parenthetical English is a translation note, not a second subtitle line. Cue 2 contains a chillu letter in റിപ്പോർട്ട് and a compound verb at the end, so check both during review. The pair is illustrative and has not been scored for accuracy."
  },
  sources: [
    {
      label: "Unicode CLDR — language and script data",
      url: "https://cldr.unicode.org/"
    },
    {
      label: "Unicode script chart — Malayalam (U+0D00–U+0D7F)",
      url: "https://www.unicode.org/charts/PDF/U0D00.pdf"
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
    { keyword: "malayalam subtitle generator", role: "primary" },
    { keyword: "malayalam captions", role: "synonym" },
    { keyword: "malayalam audio to text", role: "synonym" },
    { keyword: "malayalam transcript", role: "synonym" }
  ]
};
