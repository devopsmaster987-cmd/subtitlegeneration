import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "si",
  slug: "sinhala",
  nativeName: "සිංහල",
  path: "/subtitle-generator/sinhala",
  h1: "Sinhala subtitle generator",
  title: "Sinhala subtitle generator — private, browser-based",
  metaDescription:
    "Use the Sinhala subtitle generator to transcribe සිංහල audio locally in your browser, review the left-to-right cues and export UTF-8 SRT, VTT or TXT.",
  primaryKeyword: "sinhala subtitle generator",
  capsule:
    "The Sinhala subtitle generator transcribes සිංහල speech with Whisper running inside your browser, so the recording does not need an upload. It returns Sinhala script in left-to-right order for you to review, correct and export as UTF-8 SRT, VTT or TXT.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Sinhala sample is recorded in the verification log yet, so this page is excluded from search and no tested-accuracy claim is made. The Sinhala subtitle generator still works: select Sinhala, run a local transcription, review the Sinhala-script cues and export SRT or VTT.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "si" },
    { label: "Native name", value: "සිංහල" },
    { label: "Script", value: "Sinhala" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "Sri Lanka and the Sinhala diaspora" },
    { label: "Output", value: "SRT, VTT and TXT in UTF-8" },
    { label: "Reviewed sample", value: "None recorded on this page" }
  ],
  sections: [
    {
      heading: "How the Sinhala subtitle generator handles a recording",
      paragraphs: [
        "The Sinhala subtitle generator uses Whisper in the browser, with Sinhala selected in the language picker. The audio is processed in the tab and the transcript returns in Sinhala script. Auto-detect can work for a clean, single-language clip, but choosing Sinhala is more reliable when a video opens with music, English narration or a title card.",
        "Many Sinhala recordings mix English words, names and technical terms into everyday speech. The first pass gives you a timed draft. A Sinhala speaker still needs to check spelling, word boundaries, names and the places where the speaker changed language."
      ]
    },
    {
      heading: "Sinhala script, shaping and left-to-right layout",
      paragraphs: [
        "Sinhala is written in the Sinhala script, an abugida in which consonants carry an inherent vowel and vowel signs, called pili, attach to the consonant. Some combinations form ligatures or change shape, and prenasalised consonants have their own forms. A font with incomplete coverage can show dotted circles or separated vowel signs even when the underlying text is correct.",
        "Unlike Sindhi or Pashto, Sinhala reads from left to right. The editor and the exported cues keep the normal left-to-right flow, so the main risks are font coverage and line breaking rather than base direction. Set the language attribute to si so the browser chooses a suitable font and assistive technology can identify the text.",
        "Sinhala has a relatively large glyph repertoire and tall vowel signs. Allow enough line height and avoid crowding two lines against the bottom of the frame. Test a cue that contains a prenasalised consonant, a vowel sign above the base and a closing punctuation mark, because those features expose clipping and shaping problems quickly."
      ]
    },
    {
      heading: "Punctuation and numerals in Sinhala subtitles",
      paragraphs: [
        "Modern Sinhala text generally uses Western punctuation: the full stop, comma, question mark and exclamation mark. The traditional kunddaliya ෴ is mainly historical or decorative and is not needed in ordinary subtitles. Use the punctuation that matches the register of the video and keep it consistent across cues.",
        "Contemporary Sinhala uses Western digits 0123456789 in everyday digital text. Historical Sinhala numerals exist, but they are not the normal choice for a modern video caption. Dates, phone numbers, prices and scores should therefore be written in the same digit style as the rest of the project, and each number should stay in one run.",
        "Because Sinhala is left to right, numbers do not reorder in the way they can in Arabic-script subtitles. The common problem is different: a line may become too dense when a long number, an English brand name and a Sinhala sentence share the same cue. Split the cue or move the detail into a second line rather than shrinking the font."
      ]
    },
    {
      heading: "Sinhala dialects and spoken variation",
      paragraphs: [
        "Sinhala has regional and social variation, including low-country, up-country and Sabaragamuwa speech, and a noticeable difference between formal written Sinhala and colloquial spoken Sinhala. A transcription of spontaneous speech will often be closer to the colloquial form than to the formal prose found in a textbook.",
        "Do not automatically convert every colloquial form into formal written Sinhala. The subtitle should match the speaker's register. An interview, a comedy clip and a news bulletin can legitimately use different levels of formality, and a reviewer should decide how much normalisation is appropriate.",
        "Spoken Sinhala also includes borrowed words from English, Tamil and Portuguese. Some are fully integrated, while others are code-switched on the spot. Listen for the speaker's actual choice rather than replacing a borrowed word with a formal Sinhala synonym that changes the tone."
      ]
    },
    {
      heading: "Names, honorifics and code-switching with English",
      paragraphs: [
        "Sinhala personal names often include several components, and the order used in speech may differ from the order in an official document. Titles, kinship terms and honorifics can be important to the meaning of a line. Check a person's preferred spelling and the form of address used in the video before you apply a name list across the whole file.",
        "English code-switching is very common in urban and professional Sinhala. A speaker may use an English noun inside a Sinhala sentence or switch to a full English clause. Keep the English in Latin script when that is what was said, and do not force a Sinhala transliteration. This page does not promise romanized Sinhala, sometimes called Singlish, as an output mode.",
        "Place names and organisation names may have an official Sinhala form and a familiar English form. Choose one convention for the project and apply it consistently to the captions, the video title and any description. Mixing conventions within a single cue makes the subtitle look careless even when every individual spelling is defensible."
      ]
    },
    {
      heading: "Line length and timing for Sinhala captions",
      paragraphs: [
        "Sinhala captions read best when they are short. Two lines are easier to follow than three, and a line should break between words rather than inside a consonant-vowel cluster. A reasonable starting point is about forty characters per line, but treat it as a starting point: the script's tall vowel signs and the chosen font can make a line feel much longer.",
        "Keep reading speed under control. If a cue contains a long personal name, a number and a parenthetical remark, split it even when the character count seems acceptable. The viewer needs time to recognise the script as well as read the words. Check the timing in the player at normal speed and on a phone, where the safe area is smaller.",
        "Avoid placing a line so low that descenders or vowel signs touch the edge of the frame. If the video will be burned in, inspect a frame with a tall mark and a low descender together. That is where clipping usually appears first."
      ]
    },
    {
      heading: "Review workflow for Sinhala subtitles",
      paragraphs: [
        "Review the draft in stages so that language problems and presentation problems do not get mixed together. Completeness comes first, then names and numbers, then punctuation and line breaks."
      ],
      steps: [
        "Watch the whole clip with the draft visible and note missing speech, merged cues and language switches.",
        "Check personal names, place names, dates and numbers against a written source or a Sinhala reviewer.",
        "Decide how colloquial or formal the captions should be and apply that register consistently.",
        "Preview at normal speed and at phone size, then shorten any line that is hard to read.",
        "Export UTF-8 SRT or VTT and test the file in the player that will actually show the video."
      ]
    },
    {
      heading: "Privacy and export for Sinhala work",
      paragraphs: [
        "Whisper runs inside the browser, so the recording does not need to be uploaded to an inference server. Model files are downloaded to the browser and no account is required for the workflow on this page. Privacy still depends on the device and the browser profile: shared computers, synced profiles and extensions can expose local files.",
        "Export SRT for broad compatibility or VTT for formal cue settings. Save the file as UTF-8 so the Sinhala vowel signs and conjuncts survive, then open it in a plain text editor and in the target player. Check the first cue, the longest cue and a cue that mixes Sinhala with an English name."
      ]
    }
  ],
  faqs: [
    {
      question: "Does the Sinhala subtitle generator produce Sinhala script?",
      answer:
        "Yes. The normal output is Sinhala script, and the editor keeps the text left to right. Romanized Sinhala, sometimes called Singlish, is not a promised output mode. If you need it, treat it as a separate conversion and have it reviewed."
    },
    {
      question: "Is Sinhala written right to left?",
      answer:
        "No. Sinhala is written left to right, unlike Sindhi or Pashto. The main rendering risks are font coverage, vowel-sign shaping and line breaking rather than bidirectional text. Check the exported cue in the target player."
    },
    {
      question: "Can I edit Sinhala names and numbers before exporting?",
      answer:
        "Yes. The transcript is editable. Correct names, honorifics, places, dates and numbers, then apply the same spelling across the file. Modern Sinhala normally uses Western digits, so keep one digit convention throughout."
    },
    {
      question: "Which Sinhala dialect should I use in subtitles?",
      answer:
        "There is no dialect setting. The model follows the speech it hears, and spontaneous Sinhala may be colloquial. Decide with a reviewer how formal the captions should be, then keep that register consistent instead of automatically rewriting every line."
    },
    {
      question: "Does the Sinhala subtitle generator write Singlish?",
      answer:
        "No. Romanized Sinhala is not promised. English words may appear in Latin script when the speaker used them, but the rest of the transcript is Sinhala script. Review mixed lines carefully for spelling and line length."
    },
    {
      question: "Can I export Sinhala subtitles as SRT and VTT?",
      answer:
        "Yes. After review, export SRT, VTT or TXT. SRT is widely supported by older editors, while VTT has formal cue settings. Both should be saved as UTF-8, and the final file should be tested in the player used for delivery."
    }
  ],
  workedExample: {
    title: "A Sinhala cue with its English meaning",
    intro:
      "Two illustrative cues in Sinhala script. The English lines are review notes only and would not appear in the delivered subtitle file. Timestamps are examples, not a timing standard.",
    srt: `1
00:00:01,000 --> 00:00:04,000
අද උදේ නවයට අපේ රැස්වීම පටන් ගන්නවා.
(Today at nine in the morning our meeting starts.)

2
00:00:04,200 --> 00:00:08,000
කරුණාකර වාර්තාව සහ පෑන රැගෙන එන්න.
(Please bring the report and a pen.)`,
    note: "The parenthetical English is a translation note for this page and should be removed from the export. The second cue contains a request with two objects; check that the Sinhala vowel signs above and below the consonants remain attached and that neither line touches the safe area."
  },
  sources: [
    {
      label: "Unicode CLDR — Sinhala (si) locale data",
      url: "https://www.unicode.org/cldr/charts/latest/summary/si.html"
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
      label: "Unicode — Sinhala script chart",
      url: "https://www.unicode.org/charts/PDF/U0D80.pdf"
    }
  ],
  relatedGuides: [
    "rtl-and-non-latin-subtitles",
    "how-to-improve-whisper-accuracy",
    "subtitle-line-length",
    "is-browser-transcription-private"
  ],
  keywords: [
    { keyword: "sinhala subtitle generator", role: "primary" },
    { keyword: "Sinhala captions", role: "synonym" },
    { keyword: "Sinhala audio to text", role: "synonym" },
    { keyword: "Does the Sinhala subtitle generator produce Sinhala script?", role: "faq" },
    { keyword: "Is Sinhala written right to left?", role: "faq" },
    { keyword: "Does the Sinhala subtitle generator write Singlish?", role: "faq" }
  ]
};
