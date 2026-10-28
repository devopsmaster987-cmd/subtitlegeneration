import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "ps",
  slug: "pashto",
  nativeName: "پښتو",
  path: "/subtitle-generator/pashto",
  h1: "Pashto subtitle generator",
  title: "Pashto subtitle generator — private, browser-based",
  metaDescription:
    "Use the Pashto subtitle generator to transcribe پښتو audio locally in your browser, review the right-to-left cues and export UTF-8 SRT, VTT or TXT.",
  primaryKeyword: "pashto subtitle generator",
  capsule:
    "The Pashto subtitle generator transcribes پښتو speech with Whisper running inside your browser, so the recording does not need an upload. It returns Arabic-script text in right-to-left order for you to review, correct and export as UTF-8 SRT, VTT or TXT.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Pashto sample is recorded in the verification log yet, so this page is excluded from search and no tested-accuracy claim is made. The Pashto subtitle generator still works: select Pashto, run a local transcription, review the Arabic-script cues and export SRT or VTT.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "ps" },
    { label: "Native name", value: "پښتو" },
    { label: "Script", value: "Arabic script with additional Pashto letters" },
    { label: "Direction", value: "Right to left" },
    { label: "Region", value: "Afghanistan, Pakistan and the Pashto diaspora" },
    { label: "Output", value: "SRT, VTT and TXT in UTF-8" },
    { label: "Reviewed sample", value: "None recorded on this page" }
  ],
  sections: [
    {
      heading: "How the Pashto subtitle generator handles a recording",
      paragraphs: [
        "The Pashto subtitle generator uses the browser-based Whisper workflow with Pashto chosen in the language picker. Audio is processed in the tab and the transcript comes back in Arabic script. For a clean, single-language interview, auto-detect may be enough; for a clip that opens with music or Dari, selecting Pashto explicitly gives the model a clearer starting point.",
        "Pashto speech can include Dari, Urdu or English terms depending on where the recording was made. The first transcript is a draft with timing. It still needs a Pashto speaker to check spelling, names, dialect forms and the punctuation that the model may have placed inconsistently."
      ]
    },
    {
      heading: "Pashto script and right-to-left presentation",
      paragraphs: [
        "Pashto uses a modified Arabic script and reads from right to left. Its alphabet includes letters such as ښ، ږ، ړ، ډ، ټ، ځ، څ، ڼ، ې and ۍ, which are not all present in a basic Arabic font. A player with incomplete font coverage may show boxes, incorrect joins or fallback glyphs even though the transcript text looks correct in the editor.",
        "Characters are stored in logical order and displayed from right to left by the Unicode bidirectional algorithm. Reversing the line by hand creates a second reversal in the player. In the editor, use a right-to-left direction and tag the text as Pashto so the cursor, selection and punctuation follow the script.",
        "Pashto screen text is commonly set in a Naskh-style font. Check joined forms and diacritics at the delivered size, especially in a two-line cue. If the lines look tight, increase line height or shorten the text before reducing the font size."
      ]
    },
    {
      heading: "Punctuation, numerals and mixed-direction lines",
      paragraphs: [
        "Pashto uses the Arabic comma ، and the Arabic question mark ؟, and a full stop may appear as ۔ or as a Western period. The choice often depends on the publisher and the input method rather than on a single enforced standard. Use one convention consistently within the file and check that the same convention survives export.",
        "Numerals are a practical trap. Afghan Pashto commonly uses Eastern Arabic-Indic digits ۰۱۲۳۴۵۶۷۸۹, while material from Pakistan often uses Western digits 0123456789. Dari material may follow the same Eastern set. Whichever set matches the audience, keep dates, phone numbers, scores and house numbers in a single run and test how they render beside right-to-left text.",
        "A line that mixes Pashto with an English product name, a URL or a Latin acronym has several directional runs. Neutral punctuation can move to the wrong end of the line. Place punctuation at the logical end of the Pashto sentence, avoid ambiguous symbols between runs, and check the actual rendered cue rather than only the editor view."
      ]
    },
    {
      heading: "Pashto dialects and regional accents",
      paragraphs: [
        "Pashto has major dialect groups usually described as southern, northern and central, with Kandahari and Peshawari forms among the best known. Vocabulary, pronunciation and some grammatical endings differ across regions, and a recording from one area may not match the written form a reviewer expects.",
        "The model may favour common or frequent spellings, but it does not know which variety the speaker uses. For interviews and local reporting, preserve the speaker's words and ask a reviewer from the same region. For formal narration or teaching material, a more standardised text may be appropriate, but that normalisation should be a deliberate editorial choice.",
        "Do not assume that a transcript with the right words is automatically in the right dialect. Listen for distinctive vowels, pronouns and verb endings, and mark any line where you are unsure rather than smoothing it over silently."
      ]
    },
    {
      heading: "Names, places and code-switching in Pashto video",
      paragraphs: [
        "Pashto names and place names may have several accepted Latin spellings and several Arabic-script forms. The same village or family name can be written with different vowels or with an extra letter. Build a glossary for a long project and apply it consistently to the captions, title, description and any burned-in text.",
        "Code-switching is common. A speaker in Afghanistan may move between Pashto and Dari, and a speaker in Pakistan may mix Pashto with Urdu or English. Keep a quoted English phrase in Latin letters when that is how it was said, and do not force every borrowed word into a Pashto spelling. The goal is a readable record of the speech, not a purified dictionary entry.",
        "This page describes the Arabic-script Pashto path. It does not promise romanized output, and it does not claim to convert Pashto into Dari or Urdu. Those are separate translation or transliteration tasks with their own review needs."
      ]
    },
    {
      heading: "Line length and reading speed for Pashto captions",
      paragraphs: [
        "Keep Pashto cues short. Two lines are generally easier to read than three, and a break should fall between words, never inside a joined word. A practical starting point is roughly forty characters per line, but that is not a universal rule: font, screen size and the amount of diacritic detail change the usable width.",
        "Watch reading speed as well as length. A cue packed with a long name, a date and a parenthetical phrase may fit the character limit and still be hard to read. Split it across two cues and give the viewer enough time to finish before the next line appears. Judge this in the player at normal speed, not in a static transcript list.",
        "Right-to-left text can look denser than Latin text at the same size, and a font with tall marks may collide with the safe area. Leave room at the bottom of the frame and test a cue with a descender. If the video will be burned in, check the burned frame rather than relying on the preview alone."
      ]
    },
    {
      heading: "Review workflow for Pashto subtitles",
      paragraphs: [
        "A useful review is layered. Start with completeness and timing, then move to language, then to presentation. This keeps you from polishing punctuation while a whole sentence is still missing."
      ],
      steps: [
        "Watch the clip with the draft transcript and mark gaps, merged cues and places where the speaker changes language.",
        "Check names, places, dates and numbers against a written source or a Pashto reviewer.",
        "Choose one punctuation and numeral convention and apply it consistently.",
        "Read each cue aloud and shorten any line that cannot be read at normal speed.",
        "Export UTF-8 SRT or VTT and test the file in the player that will actually show the video."
      ]
    },
    {
      heading: "Privacy and export for Pashto projects",
      paragraphs: [
        "Transcription happens in the browser, so the audio does not need to be uploaded to an inference server. The model is downloaded to the browser, and no account is required for the workflow described here. Privacy also depends on the device: a shared computer, a synced browser profile or an extension with broad permissions can expose local files.",
        "Export SRT for broad compatibility or VTT when you need formal cue settings. Save as UTF-8 and open the file in a plain text editor to confirm that the Pashto letters are intact. Then load it beside the video in the target player and check the first cue, a cue with a number and the longest cue."
      ]
    }
  ],
  faqs: [
    {
      question: "Does the Pashto subtitle generator support right-to-left text?",
      answer:
        "Yes. Pashto is displayed right to left, and the editor uses a right-to-left writing direction. The file stores characters in logical order, so do not reverse them by hand. Test the exported cue in the target player because font fallback can differ."
    },
    {
      question: "What script does the Pashto subtitle generator output?",
      answer:
        "The output is Arabic-script Pashto, including letters that are specific to the language. Romanized output is not promised. If you need a Latin transliteration, treat it as a separate conversion and have a Pashto speaker review it."
    },
    {
      question: "Can I edit Pashto names and numbers before export?",
      answer:
        "Yes. Correct names, places, dates and numbers in the editor before exporting. Keep each number in one run and check it in the player, because mixed-direction lines can move digits or punctuation to the wrong side."
    },
    {
      question: "Which Pashto dialect does the model use?",
      answer:
        "There is no dialect setting. The model follows what it hears and may favour common spellings. For interviews, keep the speaker's regional forms and use a reviewer from the same area. For formal material, normalise deliberately rather than by accident."
    },
    {
      question: "Does the Pashto subtitle generator produce romanized Pashto?",
      answer:
        "No. Romanized output is not promised. Latin letters may appear where the speaker used an English word or acronym. Review those mixed cues closely, since they are the most likely to produce punctuation or direction errors."
    },
    {
      question: "Can I export Pashto subtitles as SRT and VTT?",
      answer:
        "Yes. Review the transcript, then export SRT, VTT or TXT. SRT is the safer exchange format for older editors, while VTT has formal cue settings. Keep the original export as a master and test a copy in the final player."
    }
  ],
  workedExample: {
    title: "A Pashto cue with its English meaning",
    intro:
      "Two illustrative cues in Pashto script. The English lines are review notes, not subtitle content, and the timestamps are examples rather than a timing standard.",
    srt: `1
00:00:01,000 --> 00:00:04,200
نن سهار نه بجې زموږ غونډه پیلېږي.
(Today at nine in the morning our meeting begins.)

2
00:00:04,400 --> 00:00:08,000
مهرباني وکړئ راپور او قلم له ځان سره راوړئ.
(Please bring the report and a pen with you.)`,
    note: "The parenthetical English is for this page only and would be removed from the delivered file. The second cue contains a polite request with a list; check that the Arabic comma and the full stop remain attached to the Pashto sentence when the cue is rendered right to left."
  },
  sources: [
    {
      label: "Unicode CLDR — Pashto (ps) locale data",
      url: "https://www.unicode.org/cldr/charts/latest/summary/ps.html"
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
    "subtitle-best-practices",
    "is-browser-transcription-private"
  ],
  keywords: [
    { keyword: "pashto subtitle generator", role: "primary" },
    { keyword: "Pashto captions", role: "synonym" },
    { keyword: "Pashto audio to text", role: "synonym" },
    { keyword: "Does the Pashto subtitle generator support right-to-left text?", role: "faq" },
    { keyword: "What script does the Pashto subtitle generator output?", role: "faq" },
    { keyword: "Does the Pashto subtitle generator produce romanized Pashto?", role: "faq" }
  ]
};
