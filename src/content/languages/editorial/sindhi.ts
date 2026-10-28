import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "sd",
  slug: "sindhi",
  nativeName: "سنڌي",
  path: "/subtitle-generator/sindhi",
  h1: "Sindhi subtitle generator",
  title: "Sindhi subtitle generator — private, browser-based",
  metaDescription:
    "Use the Sindhi subtitle generator to transcribe سنڌي audio locally in your browser, review the right-to-left cues and export UTF-8 SRT, VTT or TXT.",
  primaryKeyword: "sindhi subtitle generator",
  capsule:
    "The Sindhi subtitle generator transcribes سنڌي speech with Whisper running inside your browser, so the audio does not need an upload. It returns Perso-Arabic script in right-to-left order for you to review, correct and export as UTF-8 SRT, VTT or TXT.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Sindhi sample is recorded in the verification log yet, so this page is excluded from search and no tested-accuracy claim is made. The Sindhi subtitle generator still works: select Sindhi, run a local transcription, review the Perso-Arabic cues and export SRT or VTT.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "sd" },
    { label: "Native name", value: "سنڌي" },
    { label: "Script", value: "Perso-Arabic (Arabic script with additional letters)" },
    { label: "Direction", value: "Right to left" },
    { label: "Region", value: "Sindh, Pakistan, and Sindhi communities in India and the diaspora" },
    { label: "Output", value: "SRT, VTT and TXT in UTF-8" },
    { label: "Reviewed sample", value: "None recorded on this page" }
  ],
  sections: [
    {
      heading: "How the Sindhi subtitle generator handles audio",
      paragraphs: [
        "The Sindhi subtitle generator follows the same local Whisper workflow as the rest of VoiceToTextFree, with Sindhi selected in the language picker. The model works on audio inside the browser tab and returns a transcript in Perso-Arabic script. Choosing Sindhi explicitly is safer than auto-detect when a clip opens with music, an English title card or a speaker who switches languages in the first few seconds.",
        "Sindhi recordings often contain Urdu and English loanwords, especially in technical, medical and urban conversation. The first transcription pass gives you timing and a working text. It does not replace a Sindhi speaker's review of spelling, names, dialect forms or punctuation."
      ]
    },
    {
      heading: "Sindhi script and right-to-left layout",
      paragraphs: [
        "Sindhi is written in a modified Perso-Arabic script and reads from right to left. The alphabet includes letters that are not part of the basic Arabic set, such as ڪ، ڳ، ڱ، ڻ، ٽ، ٺ، ڀ، ڦ، ڄ، ڃ and ڇ. A font that covers Arabic but not these added letters may show fallback glyphs, so check the rendered cue rather than only the transcript text.",
        "The subtitle file stores characters in logical reading order, and the player applies the Unicode bidirectional algorithm to place them from right to left. Do not reverse the text by hand. In an editor, set the language attribute to sd and use a right-to-left writing direction so the cursor, punctuation and selection behave predictably.",
        "Sindhi is usually set in a Naskh-style screen font rather than the sloping Nastaliq style common for Urdu. Diacritics and stacked marks still need vertical room. If a cue looks crowded, raise the line height or shorten the cue before you change the font size."
      ]
    },
    {
      heading: "Punctuation and numerals in Sindhi captions",
      paragraphs: [
        "Sindhi text commonly uses the Arabic comma ، and the Arabic question mark ؟, while the full stop may appear as the Arabic full stop ۔ or as a Western period depending on the writer and platform. Neither SRT nor WebVTT defines a Sindhi punctuation standard, so consistency matters more than which convention you choose. Pick one style for the file and apply it throughout.",
        "Numerals vary by setting. Western digits are common in everyday Pakistani digital text, while Arabic-Indic digits may appear in formal, religious or older material. Phone numbers, dates, scores and room numbers are the cues most likely to expose a mismatch. Keep each number in one run and test it in the player, because bidi reordering can make a number appear at the wrong end of a line.",
        "When a cue mixes Sindhi with an English brand name or a Latin acronym, neutral punctuation can attach to the wrong side. Put the punctuation at the logical end of the Sindhi sentence and avoid placing a bare dash or bracket between the two directions. If the player supports Unicode isolates, use them sparingly and confirm the result on the target device."
      ]
    },
    {
      heading: "Sindhi dialects and accent variation",
      paragraphs: [
        "Sindhi has several regional varieties, including Vicholi in central Sindh, Lari in the south, Lasi in Lasbela, Thari in the desert region and Kachhi in the east. Vicholi is the usual basis for formal writing and broadcasting, but a recording may reflect a local accent, vocabulary or pronunciation that differs from the written standard.",
        "Do not silently rewrite dialect words into a different variety just because the model suggests a more common spelling. If the video is an interview or a community recording, keep the speaker's forms and ask a reviewer who knows that variety. If the video is a formal lesson, normalising toward the standard may be appropriate, but that is an editorial decision rather than a transcription default.",
        "Indian Sindhi communities may also use Devanagari for Sindhi, and some speakers mix Sindhi with Hindi or Gujarati. This page describes the Perso-Arabic output path. It does not promise a Devanagari conversion or a romanized transcript."
      ]
    },
    {
      heading: "Names, places and code-switching with Urdu and English",
      paragraphs: [
        "Sindhi names often have Arabic, Persian or local origins, and the same person may be spelled in more than one way across sources. Build a short name list before you review a long recording: personal names, place names, organisations and recurring technical terms. Apply the same spelling in every cue and in the title or description that surrounds the video.",
        "Because Sindhi shares the Arabic script with Urdu, a transcript can contain Urdu-style spellings for shared words. Compare doubtful spellings with a Sindhi dictionary or a reviewer instead of accepting the first model output. The same caution applies to English acronyms, which may be written in Latin letters, spelled out in Sindhi, or left as a hybrid.",
        "Code-switching is normal in urban Sindhi. A speaker may begin a sentence in Sindhi and finish it with an English phrase. Keep the English phrase in Latin script when that is how it was spoken, and do not force a Sindhi transliteration. The result should read like the speech, not like a language exercise."
      ]
    },
    {
      heading: "Line length and timing for Sindhi subtitles",
      paragraphs: [
        "Sindhi captions benefit from short cues. Two lines are usually easier to follow than three, and a line should break at a word boundary rather than inside a joined word. A practical starting point is about forty characters per line, but treat that as a starting point: font size, screen size and the amount of diacritic detail all affect how much text fits comfortably.",
        "Reading speed matters more than character count alone. If a cue contains a long name, a number and a parenthetical phrase, split it across cues even when the total character count looks acceptable. Keep the subtitle on screen long enough to read without lingering after the sound has moved on. The player preview, not the transcript list, is the place to judge this.",
        "Sindhi's connected script can make dense lines look heavier than Latin text at the same size. Leave margin inside the safe area and avoid placing text too close to the bottom edge. If the video will be burned in, check a frame with a descender and a diacritic, because that is where clipping appears first."
      ]
    },
    {
      heading: "Review workflow before exporting Sindhi captions",
      paragraphs: [
        "Review in passes rather than trying to fix everything at once. First listen for missing or merged cues. Then compare the transcript with the audio for names, numbers and dialect words. Finally read the file as a viewer would, watching for punctuation that sits on the wrong side and lines that break awkwardly."
      ],
      steps: [
        "Listen to the whole clip once with the transcript visible and mark places where speech is missing or merged.",
        "Check proper nouns, place names, dates and numbers against a written source or a native reviewer.",
        "Normalise punctuation and numerals so the file uses one convention throughout.",
        "Preview the cues at normal speed, then at phone size, and shorten any line that feels crowded.",
        "Export UTF-8 SRT or VTT and open the file in the player that will actually show the video."
      ]
    },
    {
      heading: "Privacy and export for Sindhi work",
      paragraphs: [
        "Whisper runs in the browser, so the audio stays in the tab during transcription and does not need to be sent to an inference server. Model files are downloaded to the browser, and the site can be used without an account. Privacy still depends on the device and the browser profile: shared computers, extensions and sync settings can expose local files, so handle sensitive recordings accordingly.",
        "Export SRT for compatibility with older editors and players, or VTT when you need formal cue settings. Both are plain text and should be saved as UTF-8 so the Perso-Arabic characters survive. Open the exported file in a text editor and confirm that the Sindhi letters are present before you upload it to a platform or hand it to an editor."
      ]
    }
  ],
  faqs: [
    {
      question: "Does the Sindhi subtitle generator support right-to-left text?",
      answer:
        "Yes. Sindhi is displayed right to left, and the editor uses a right-to-left writing direction for the cue text. The file itself stores characters in logical order, so do not reverse the text by hand. Test the exported cue in the player because rendering and font fallback can differ."
    },
    {
      question: "What script does the Sindhi subtitle generator output?",
      answer:
        "The Sindhi output is Perso-Arabic script, including letters that are specific to Sindhi. The page does not promise a romanized or Devanagari transcript. If you need another script, that is a separate conversion step that should be reviewed by a Sindhi speaker."
    },
    {
      question: "Can I edit Sindhi names and numbers before exporting?",
      answer:
        "Yes. The transcript is editable before export. Correct personal names, place names, dates, phone numbers and scores, then check how each number renders in the player. Keep the wording consistent across cues and save the file as UTF-8."
    },
    {
      question: "Which Sindhi dialect should I choose for subtitles?",
      answer:
        "There is no setting for a dialect. The model transcribes what it hears, and formal writing often follows Vicholi conventions. For interviews and community recordings, keep the speaker's forms and use a reviewer who knows the variety rather than normalising every line."
    },
    {
      question: "Does the Sindhi subtitle generator produce romanized Sindhi?",
      answer:
        "No. Romanized output is not promised. The normal result is Sindhi script, and Latin letters may appear only where the speaker used an English word or an acronym. Review mixed lines carefully because they are the most likely to produce punctuation or direction errors."
    },
    {
      question: "Can I export Sindhi subtitles as SRT and VTT?",
      answer:
        "Yes. After transcription and review, export SRT, VTT or TXT. SRT is the safer exchange format for older players and editors, while VTT supports formal cue settings. Check the exported file in the target player and keep the original as your master copy."
    }
  ],
  workedExample: {
    title: "A Sindhi cue with its English meaning",
    intro:
      "Two illustrative cues in Sindhi script. The English lines are for review only and would be removed from the delivered subtitle file. The timestamps are examples, not a timing standard.",
    srt: `1
00:00:01,000 --> 00:00:04,000
اڄ اسان جو اجلاس صبح جو نو وڳي شروع ٿيندو.
(Today our meeting will start at nine in the morning.)

2
00:00:04,200 --> 00:00:07,800
مهرباني ڪري رپورٽ ۽ قلم کڻي اچو.
(Please bring the report and a pen.)`,
    note: "The parenthetical English is a translation note for this page and should not be included in the exported captions. The second cue contains a request and a list; check that the Sindhi comma and the final full stop stay with the Sindhi sentence when the cue is rendered in a right-to-left player."
  },
  sources: [
    {
      label: "Unicode CLDR — Sindhi (sd) locale data",
      url: "https://www.unicode.org/cldr/charts/latest/summary/sd.html"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "OpenAI Whisper repository",
      url: "https://github.com/openai/whisper"
    },
    {
      label: "Unicode — Arabic script chart",
      url: "https://www.unicode.org/charts/PDF/U0600.pdf"
    }
  ],
  relatedGuides: [
    "rtl-and-non-latin-subtitles",
    "how-to-improve-whisper-accuracy",
    "subtitle-line-length",
    "is-browser-transcription-private"
  ],
  keywords: [
    { keyword: "sindhi subtitle generator", role: "primary" },
    { keyword: "Sindhi captions", role: "synonym" },
    { keyword: "Sindhi audio to text", role: "synonym" },
    { keyword: "Does the Sindhi subtitle generator support right-to-left text?", role: "faq" },
    { keyword: "What script does the Sindhi subtitle generator output?", role: "faq" },
    { keyword: "Does the Sindhi subtitle generator produce romanized Sindhi?", role: "faq" }
  ]
};
