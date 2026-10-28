import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-create-and-edit-an-srt-file",
  h1: "How to create an SRT file: syntax, timing and safe edits",
  title: "How to create an SRT file in a text editor or the browser",
  metaDescription:
    "How to create an SRT file with exact cue syntax, timestamp math and safe editing steps, plus fixes for overlaps, wrong separators and encoding problems.",
  primaryKeyword: "how to create an srt file",
  capsule:
    "How to create an SRT file means writing cues in plain text: a number, a start and end time with a comma before milliseconds, the subtitle text and a blank line. This guide shows the exact syntax, timestamp math, safe edits, cue splitting and the mistakes that break playback.",
  published: "2026-01-25",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    { label: "Extension", value: ".srt saved as plain UTF-8 text" },
    { label: "Cue pattern", value: "Number, timestamp line, text, blank line" },
    { label: "Timestamp", value: "Hours:minutes:seconds,milliseconds on both sides of -->" },
    { label: "Separator", value: "A comma before milliseconds, not a dot" },
    { label: "Safe tool", value: "A plain text editor or a structured subtitle editor" },
    { label: "Review step", value: "Play the video and run a timing and line-length check" }
  ],
  sections: [
    {
      heading: "What you need before you type a cue",
      paragraphs: [
        "You do not need a video editor to start. A plain text editor, a video player for checking the result and a little patience with timestamps are enough. The file is small, and every line has a visible job. That transparency is both the strength and the risk: a missing blank line is easy to create and hard to notice until playback.",
        "Before typing, decide the cue length you want. A comfortable target is one or two short lines per cue, with enough time on screen to read them. If you already have a transcript, you can cut it into cues; if you are working from audio, listen in short passes and mark the start and end of each phrase.",
        "Work from a copy if the file already exists. Keep a version with a date or a short note, and change one thing at a time. If a bulk find-and-replace goes wrong, the copy is the difference between a two-minute fix and a full retime."
      ]
    },
    {
      heading: "Manual creation: the exact SRT syntax",
      paragraphs: [
        "A cue starts with a number on its own line. The next line holds the start time, two hyphens, a greater-than sign and the end time. The line after that holds the subtitle text. A blank line closes the cue. Repeat for the next cue, and use the same comma before milliseconds throughout.",
        "The text can span more than one line, but each line becomes a visual line in players that respect line breaks. Keep manual breaks intentional. If you let a player wrap text automatically, the result depends on screen width and font size, which is why short lines are easier to control.",
        "Spacing around the arrow is conventional: one space before and after. Some parsers accept no spaces, but there is no benefit to testing that tolerance. Use exactly one blank line between cues. Two blank lines are usually ignored, while zero blank lines merge cues and break numbering."
      ],
      code: {
        language: "text",
        caption: "A minimal valid SRT file with two cues and correct comma separators.",
        content: `1
00:00:00,800 --> 00:00:04,100
The workshop opens at nine.

2
00:00:04,700 --> 00:00:08,300
Bring your own safety glasses.`
      }
    },
    {
      heading: "Cue numbers and timestamp math",
      paragraphs: [
        "Timestamps read hours:minutes:seconds,milliseconds. In 00:01:23,450, the cue starts one minute and twenty-three seconds into the video, plus 450 milliseconds. The end time uses the same pattern. Hours are often zero, but they still need two digits in the common form.",
        "Converting from a video player's time display is mostly subtraction. If the player shows 2:14 and you want a cue to start half a second later, write 00:02:14,500. If you need frame math, divide the frame number by the frame rate, then convert the decimal seconds to milliseconds. At 25 frames per second, frame 10 is 0.4 seconds, so it becomes 400 milliseconds.",
        "Leave a little breathing room. A cue that starts exactly when a word begins can feel clipped, and one that ends exactly when the next begins can flicker. A gap of 80 to 120 milliseconds is usually enough for a clean cut, though the right value depends on the edit. Consistency matters more than a magic number."
      ]
    },
    {
      heading: "How to edit an SRT file without breaking timing",
      paragraphs: [
        "Editing an existing file is usually safer than rebuilding it. Change the text first, because text edits do not move timings. Then adjust start and end times cue by cue. If a whole block is early or late by the same amount, shift every timestamp in that block rather than nudging each cue individually.",
        "When you change a cue's end time, check the next cue's start time. An overlap is easy to introduce and may cause one line to disappear. When you delete a cue, renumber the following cues if your tool expects sequential numbers. When you insert a cue, give it a number that fits the sequence and check the blank lines around it.",
        "Use a structured editor when the file has dozens of cues. Hand-editing timestamps in a text editor works for small fixes, but a timeline view makes drift and overlap visible. The [SRT editor](/srt-editor) shows cues in order, and the [timing editor](/subtitle-timing-editor) is designed for shifting blocks."
      ]
    },
    {
      heading: "Splitting long cues and merging short ones",
      paragraphs: [
        "A cue that stays on screen for eight seconds is hard to read, even if the sentence is short. Split it at a natural pause, not in the middle of a name or a number. Give each half its own start and end time, and keep the reading speed reasonable.",
        "Merging is the reverse. Two cues that flash by for half a second each may read better as one cue with a short gap. Merge only when the combined line still fits the screen and the speaker does not pause long enough to justify a change. Preserve the original start of the first cue and the end of the last.",
        "Splitting and merging change cue count, so renumber afterwards. They also change reading speed, which is why a validator pass after the edit is worthwhile. Long lines and very short durations are the two problems that survive a quick visual check."
      ]
    },
    {
      heading: "Common mistakes: overlaps, dots and blank lines",
      paragraphs: [
        "Overlaps are the most common structural mistake. Two cues share time, and the player chooses one or stacks them depending on its settings. If the dialogue really overlaps, decide whether to combine the lines or split the screen; do not leave the file ambiguous.",
        "The second mistake is a dot instead of a comma. It is easy to carry over from WebVTT or from a note written in a different format. The third is a missing blank line, which turns two cues into one and makes the second number appear as subtitle text."
      ],
      bullets: [
        "Use a comma before milliseconds.",
        "Keep one blank line between cues.",
        "Number cues sequentially.",
        "Do not let timestamps run backward.",
        "Save as UTF-8, not a word-processor format.",
        "Check the first and last cue after every bulk edit."
      ]
    },
    {
      heading: "Create and edit in the browser with VoiceToTextFree",
      paragraphs: [
        "If typing every cue is too slow, generate a draft. Open the [subtitle generator](/#tool), load the media, choose a model and run the transcription. Whisper produces timestamps along with text, so the result is already close to a usable subtitle file. The draft still needs human review, especially for names, numbers and crosstalk.",
        "Once the draft is loaded, the [SRT editor](/srt-editor) is the place to fix text, split lines and adjust timing. Export the file and check it in a player. If you need to compare versions, keep a copy before a large timing shift so you can return to the earlier cue map.",
        "A browser workflow is convenient because nothing needs to be installed, and the audio stays local when the model runs in the browser. That does not remove the need to review the output; it only changes where the editing happens."
      ]
    },
    {
      heading: "Working with non-Latin text and punctuation",
      paragraphs: [
        "Non-Latin scripts need the same structure and a little more care with encoding. UTF-8 covers Arabic, Hebrew, Devanagari, Chinese, Japanese and Korean, but the player also needs a font that contains the glyphs. Right-to-left scripts may need the player's bidi support; the SRT format itself does not store direction.",
        "Punctuation can differ from English conventions. Use the script's own comma and question mark where appropriate, and do not assume that a Latin font will render them. Test on the target device, not only in the editor.",
        "Mixed-language cues are common in interviews. Keep the original language in one file and the translation in another rather than alternating languages inside a cue, unless the audience expects bilingual captions. If you must combine them, put the primary language first and separate the lines consistently."
      ]
    },
    {
      heading: "A short review checklist",
      paragraphs: [
        "Before delivery, read the file as a viewer would. Play the video from the start with captions on and watch for cues that arrive late, leave too quickly or cover important action. Then read the raw file once more for structural problems."
      ],
      bullets: [
        "Every cue has a number, a timestamp line and text.",
        "Timestamps use commas and do not overlap.",
        "Each cue has a readable duration and line length.",
        "Blank lines separate cues.",
        "The file is UTF-8 and ends with .srt.",
        "The first and last cues match the video."
      ]
    }
  ],
  faqs: [
    {
      question: "Do I need special software to create an SRT file?",
      answer:
        "No. A plain text editor can create a valid file if you follow the cue structure and use the correct timestamp separators. A subtitle editor makes long files easier to review, but it is not required for a short clip."
    },
    {
      question: "How do I add timestamps to the cues?",
      answer:
        "Write the start time, two hyphens, a greater-than sign and the end time on one line. Use hours, minutes, seconds and milliseconds, with a comma before the milliseconds. Then place the subtitle text on the next line."
    },
    {
      question: "Why are my subtitle cues overlapping?",
      answer:
        "One cue's end time is later than the next cue's start time. Shorten the first cue, delay the second, or merge them if the speaker truly overlaps. A validator can list every overlap so you do not have to scan the file by eye."
    },
    {
      question: "Should timestamps use a comma or a dot?",
      answer:
        "SRT uses a comma before milliseconds. A dot belongs to WebVTT. Some players tolerate the wrong separator, but strict tools may reject the file, so match the format you are saving."
    },
    {
      question: "How many characters should a subtitle line have?",
      answer:
        "There is no single universal limit, but short lines are easier to read on phones and televisions. Aim for one or two lines per cue and split at natural phrase boundaries. Check the result at the size your audience will see."
    },
    {
      question: "Can I edit an SRT file in Notepad?",
      answer:
        "Yes. Notepad can open and save plain text, so it can edit cue text and timestamps. Use Save As and confirm the encoding is UTF-8, then reopen the file in a player to check the result."
    }
  ],
  workedExample: {
    title: "Worked example: timing a two-line answer by hand",
    intro:
      "A presenter answers a question at 1 minute 12 seconds. The answer runs for four seconds, then the next question begins. The cue below starts 200 milliseconds before the first word and ends 300 milliseconds after the last.",
    srt: `1
00:01:11,800 --> 00:01:15,900
We ship on the first Tuesday of each month.

2
00:01:16,500 --> 00:01:19,200
The cutoff is the Friday before.`,
    note: "The 600-millisecond gap between cues gives the player a clean break. If you shorten the gap, watch the join at normal speed before deciding it is better."
  },
  sources: [
    {
      label: "YouTube Help — Add subtitles and captions",
      url: "https://support.google.com/youtube/answer/2734698"
    },
    {
      label: "Adobe — Premiere Pro user guide",
      url: "https://helpx.adobe.com/premiere-pro/user-guide.html"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    }
  ],
  relatedGuides: [
    "what-is-an-srt-file",
    "how-to-open-an-srt-file",
    "how-to-sync-subtitles",
    "subtitle-line-length"
  ],
  keywords: [
    { keyword: "how to create an srt file", role: "primary" },
    { keyword: "how to edit an srt file", role: "secondary", headingLevel: 2 },
    { keyword: "make srt subtitle", role: "synonym" },
    { keyword: "srt subtitle editor", role: "synonym" },
    { keyword: "do i need special software to create an srt file", role: "faq" },
    { keyword: "how do i add timestamps to the cues", role: "faq" },
    { keyword: "why are my subtitle cues overlapping", role: "faq" },
    { keyword: "should timestamps use a comma or a dot", role: "faq" },
    { keyword: "how many characters should a subtitle line have", role: "faq" },
    { keyword: "can i edit an srt file in notepad", role: "faq" }
  ]
};
