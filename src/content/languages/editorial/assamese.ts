import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "as",
  slug: "assamese",
  nativeName: "অসমীয়া",
  path: "/subtitle-generator/assamese",
  h1: "Assamese subtitle generator",
  title: "Assamese subtitle generator — private, browser-based",
  metaDescription:
    "Use the Assamese subtitle generator to transcribe অসমীয়া audio locally in your browser, review the left-to-right cues and export UTF-8 SRT, VTT or TXT.",
  primaryKeyword: "assamese subtitle generator",
  capsule:
    "The Assamese subtitle generator transcribes অসমীয়া speech with Whisper running inside your browser, so the recording does not need an upload. It returns Assamese script in left-to-right order for you to review, correct and export as UTF-8 SRT, VTT or TXT.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Assamese sample is recorded in the verification log yet, so this page is excluded from search and no tested-accuracy claim is made. The Assamese subtitle generator still works: select Assamese, run a local transcription, review the Assamese-script cues and export SRT or VTT.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "as" },
    { label: "Native name", value: "অসমীয়া" },
    { label: "Script", value: "Bengali–Assamese (Eastern Nagari)" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "Assam, India, and Assamese communities elsewhere" },
    { label: "Output", value: "SRT, VTT and TXT in UTF-8" },
    { label: "Reviewed sample", value: "None recorded on this page" }
  ],
  sections: [
    {
      heading: "How the Assamese subtitle generator handles a recording",
      paragraphs: [
        "The Assamese subtitle generator runs Whisper in the browser with Assamese selected in the language picker. The audio is processed in the tab and the transcript returns in Assamese script. Auto-detect can work on a clean, single-language recording, but choosing Assamese is safer when a clip begins with music, English narration or a title sequence.",
        "Assamese conversation often includes English, Bengali or Hindi words, especially in education, technology and urban settings. The first transcription gives you a timed draft. A speaker of Assamese still needs to check spelling, names, word boundaries and the places where the speaker switched languages."
      ]
    },
    {
      heading: "Assamese script and left-to-right layout",
      paragraphs: [
        "Assamese is written in the Bengali–Assamese script, also called Eastern Nagari, and reads from left to right. It shares most of its letters with Bengali but adds characters such as ৰ and ৱ and differs in vocabulary, spelling and usage. A font that supports Bengali may not include every Assamese letter, so check the rendered cue rather than only the editor text.",
        "The script is an abugida: consonants carry an inherent vowel, and vowel signs attach to the consonant. Conjuncts and some modified forms must render as a unit. When a font is incomplete, you may see dotted circles, separated vowel signs or a letter replaced by a fallback glyph. Set the language attribute to as so the browser can choose an appropriate font.",
        "Line height matters because Assamese uses marks above and below the base line. Do not pack two lines against the bottom of the frame. Test a cue with a conjunct, a vowel sign above the consonant and a descender, since that combination shows clipping and shaping problems first."
      ]
    },
    {
      heading: "Punctuation and numerals in Assamese captions",
      paragraphs: [
        "Modern Assamese digital text commonly uses Western punctuation: the full stop, comma, question mark and exclamation mark. The traditional danda । may appear in older or formal material, but ordinary subtitles usually follow the Western set. Choose the convention that matches the video's register and apply it consistently across cues.",
        "Assamese uses the Bengali–Assamese digits ০১২৩৪৫৬৭৮৯, and they appear in formal, literary and some official contexts. Western digits 0123456789 are also common in technical and everyday digital writing. Pick one style for dates, prices, phone numbers and scores, and keep each number in a single run.",
        "Because the script is left to right, numerals do not reorder as they can in Arabic-script subtitles. The more common problem is density: a cue with a long number, an English product name and a full Assamese sentence can become hard to read. Split it across cues rather than reducing the font size."
      ]
    },
    {
      heading: "Assamese dialects and spoken variation",
      paragraphs: [
        "Assamese has regional variety. Kamrupi is associated with western Assam, Goalpariya with the Goalpara region, and the eastern or Upper Assam varieties are often close to the standard written form. Barak Valley speech has its own history and may show Bengali influence. A spontaneous recording can differ noticeably from formal written Assamese.",
        "Do not normalise every local form into the standard without a reason. For an interview or a community story, the speaker's variety is part of the record. For a formal lesson or a corporate video, a more standardised text may be appropriate. That decision belongs to an Assamese reviewer, not to an automatic correction step.",
        "Assamese and Bengali share a script, which makes confusion easy. A model may produce a Bengali spelling, a Bengali word or a Bengali-style conjunct for a word that Assamese writes differently. Compare doubtful lines with an Assamese source instead of accepting a near-miss that looks plausible."
      ]
    },
    {
      heading: "Names, kinship terms and code-switching",
      paragraphs: [
        "Assamese names, place names and organisation names may have several accepted spellings in both Assamese script and Latin script. Build a glossary for a long project and apply it to the captions, the title, the description and any burned-in text. Consistency is more useful to viewers than a mixture of defensible variants.",
        "Conversational Assamese makes regular use of kinship terms and honorifics as forms of address. These words can carry respect, familiarity or age relationships that a plain name does not. Keep them when they are part of the speech, and check the spelling with a reviewer if the term is regional or unfamiliar.",
        "English code-switching is common, and Bengali or Hindi may also appear near the borders and in media from outside Assam. Keep an English phrase in Latin script when that is how it was spoken. Do not force a transliteration, and do not promise a romanized Assamese output mode. Mixed lines deserve extra review because they are where spelling and line-breaking errors cluster."
      ]
    },
    {
      heading: "Line length and timing for Assamese captions",
      paragraphs: [
        "Keep Assamese cues short. Two lines are easier to follow than three, and a line should break between words rather than inside a conjunct or a consonant-vowel cluster. A practical starting point is about forty characters per line, but it is only a starting point: font choice, vowel signs and screen size change the usable width.",
        "Reading speed is the better test. A cue with a long name, a date and a parenthetical phrase may fit the character limit and still be too dense. Split it and give the viewer enough time to read before the next cue appears. Check the result in the player at normal speed and on a phone.",
        "Assamese's marks above and below the baseline can make a line look taller than Latin text at the same size. Leave room inside the safe area and avoid placing the subtitle where a descender can be clipped. If the video will be burned in, inspect a frame with a conjunct and a low mark."
      ]
    },
    {
      heading: "Review workflow for Assamese subtitles",
      paragraphs: [
        "Review the draft in layers so that language and presentation issues are handled separately. Start with missing speech, then names and numbers, then punctuation and line breaks."
      ],
      steps: [
        "Watch the clip with the draft and mark gaps, merged cues and switches into English, Bengali or Hindi.",
        "Check names, places, dates and numbers against a written source or an Assamese reviewer.",
        "Confirm that Assamese letters such as ৰ and ৱ were not replaced by Bengali lookalikes.",
        "Preview at normal speed and phone size, then shorten any line that is difficult to read.",
        "Export UTF-8 SRT or VTT and test the file in the player that will actually show the video."
      ]
    },
    {
      heading: "Privacy and export for Assamese work",
      paragraphs: [
        "Whisper runs in the browser, so the recording does not need to be uploaded to an inference server. Model files are downloaded to the browser, and no account is required for the workflow described here. Privacy still depends on the device and the browser profile: shared computers, synced profiles and extensions can expose local files.",
        "Export SRT for broad compatibility or VTT for formal cue settings. Save as UTF-8 so the Assamese letters, vowel signs and conjuncts survive, then open the file in a text editor and in the target player. Check the first cue, the longest cue and a cue that mixes Assamese with an English word."
      ]
    }
  ],
  faqs: [
    {
      question: "Does the Assamese subtitle generator produce Assamese script?",
      answer:
        "Yes. The normal output is Assamese script in left-to-right order, including letters such as ৰ and ৱ. Romanized Assamese is not a promised output mode. If you need a Latin transliteration, treat it as a separate conversion with its own review."
    },
    {
      question: "Is Assamese written right to left?",
      answer:
        "No. Assamese is written left to right in the Bengali–Assamese script. The main risks are font coverage, conjunct shaping and line breaking rather than bidirectional text. Test the exported cue in the player used for delivery."
    },
    {
      question: "Can I edit Assamese names and numbers before exporting?",
      answer:
        "Yes. Correct names, kinship terms, places, dates and numbers in the editor. Choose either Bengali–Assamese digits or Western digits and keep that convention throughout. Test a cue with a number in the final player."
    },
    {
      question: "Which Assamese dialect should I use in subtitles?",
      answer:
        "There is no dialect setting. The model follows what it hears, and speech may reflect Kamrupi, Goalpariya, Upper Assam or Barak Valley forms. For interviews, preserve the speaker's variety; for formal material, normalise deliberately with a reviewer."
    },
    {
      question: "Does the Assamese subtitle generator write romanized Assamese?",
      answer:
        "No. Romanized output is not promised. English words may appear in Latin script when the speaker used them, but the rest of the transcript is Assamese script. Review mixed lines closely for spelling and length."
    },
    {
      question: "Can I export Assamese subtitles as SRT and VTT?",
      answer:
        "Yes. After transcription and review, export SRT, VTT or TXT. SRT is widely supported by older editors, while VTT has formal cue settings. Save as UTF-8 and test the exported file in the player used for delivery."
    }
  ],
  workedExample: {
    title: "An Assamese cue with its English meaning",
    intro:
      "Two illustrative cues in Assamese script. The English lines are review notes only and would be removed from the delivered subtitle file. The timestamps are examples, not a timing standard.",
    srt: `1
00:00:01,000 --> 00:00:04,000
আজি ৰাতিপুৱা ন বজাত আমাৰ সভা আৰম্ভ হ'ব।
(Today at nine in the morning our meeting will begin.)

2
00:00:04,200 --> 00:00:08,000
অনুগ্ৰহ কৰি প্ৰতিবেদন আৰু কলম লৈ আহক।
(Please bring the report and a pen.)`,
    note: "The parenthetical English is a translation note for this page and should be removed from the export. The second cue contains a polite request with a list; check that the Assamese conjuncts and vowel signs remain attached and that the line does not touch the safe area."
  },
  sources: [
    {
      label: "Unicode CLDR — Assamese (as) locale data",
      url: "https://www.unicode.org/cldr/charts/latest/summary/as.html"
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
      label: "Unicode — Bengali script chart",
      url: "https://www.unicode.org/charts/PDF/U0980.pdf"
    }
  ],
  relatedGuides: [
    "rtl-and-non-latin-subtitles",
    "how-to-improve-whisper-accuracy",
    "subtitle-best-practices",
    "is-browser-transcription-private"
  ],
  keywords: [
    { keyword: "assamese subtitle generator", role: "primary" },
    { keyword: "Assamese captions", role: "synonym" },
    { keyword: "Assamese audio to text", role: "synonym" },
    { keyword: "Does the Assamese subtitle generator produce Assamese script?", role: "faq" },
    { keyword: "Is Assamese written right to left?", role: "faq" },
    { keyword: "Does the Assamese subtitle generator write romanized Assamese?", role: "faq" }
  ]
};
