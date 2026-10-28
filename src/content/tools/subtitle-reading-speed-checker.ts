import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/subtitle-reading-speed-checker",
  preset: "subtitle-reading-speed-checker",
  h1: "Subtitle reading speed checker: find cues that are too fast",
  title: "Subtitle reading speed checker — CPS and line length limits",
  metaDescription:
    "Use this subtitle reading speed checker to find cues above your CPS or line-length limit. Set the limits, review every warning, edit the cue, then export SRT or VTT.",
  primaryKeyword: "subtitle reading speed checker",
  capsule:
    "A subtitle reading speed checker measures characters per second for each cue and flags any line above the limits you choose. Import an SRT or VTT file, adjust the CPS and line-length thresholds, then fix the cues that are slow to read before exporting.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Metric", value: "Characters per second for each cue" },
    { label: "Default CPS", value: "20 characters per second, editable" },
    { label: "Default line", value: "42 characters per line, editable" },
    { label: "Fixed rule", value: "No more than two lines per cue" },
    { label: "Input", value: "SRT, VTT or pasted subtitle text" },
    { label: "Output", value: "A warning list plus SRT, VTT and TXT downloads" }
  ],
  sections: [
    {
      heading: "Characters per second subtitles: how CPS is calculated",
      paragraphs: [
        "The checker calculates reading speed for each cue by counting characters in the cue text and dividing by the cue's duration in seconds. Tags are stripped from the count, runs of whitespace become a single space, and the text is trimmed. A cue that lasts two seconds and contains forty counted characters reads at twenty characters per second.",
        "The count includes spaces between words, because a reader's eye still travels across them. It does not include the timestamp line, the cue number or HTML-like markup. Duration is measured from start to end, so a long gap between two spoken phrases inside one cue is treated as reading time even if the screen is momentarily empty. That makes CPS a useful screening number rather than a perfect model of reading."
      ]
    },
    {
      heading: "Setting a CPS limit that fits your audience",
      paragraphs: [
        "The default limit is 20 characters per second. You can raise or lower it in the Maximum CPS field; the issue list recalculates immediately. A lower limit such as 15 is more forgiving for children, dense terminology or an audience reading in a second language. A higher limit may suit a fast social edit, but it also assumes a viewer who is already paying close attention.",
        "There is no universal number that fits every programme. Broadcast and streaming guidelines differ, and the right value depends on the font, the screen size and how much visual information competes with the text. Use the field as a policy control for your project, not as a verdict from the tool. Change one limit at a time so you can tell which warnings came from the new setting."
      ]
    },
    {
      heading: "Line length and the two-line limit",
      paragraphs: [
        "Line length is checked separately, with a default maximum of 42 characters per line. The checker also enforces a fixed maximum of two lines per cue, because the table cannot display more without making the caption block too tall. A line is measured after tags are removed and whitespace is collapsed. The result is a character count, not a pixel width.",
        "That distinction matters for proportional fonts and for scripts where one character occupies a different amount of space. A 42-character line of narrow letters may fit comfortably while a shorter line of wide capitals overflows. The tool cannot see the player's font, size, margins or safe area. Use the number as a first pass, then watch the captions on the target screen. For a phone-first edit, a lower line limit is usually easier to read."
      ]
    },
    {
      heading: "Reading the issue list",
      paragraphs: [
        "The issue panel lists warnings and errors with the cue number and the measured value. It shows at most one hundred items, so a very large file may need several passes after fixes. Overlaps, empty text, too many lines, long lines and reading speed appear as warnings; an end time before the start appears as an error. The list is recalculated whenever the file or a limit changes.",
        "This panel is a report, not a repair queue. In reading-speed mode there is no automatic fix button, and the split and merge buttons are not shown. You can edit the text or the timestamps in the table, delete a row, or export the file and continue in another tool. The validator page has a limited safe-fix action, but it does not reduce reading speed or shorten lines. Choose the page that matches the work you intend to do."
      ]
    },
    {
      heading: "Fixing a cue without guessing",
      paragraphs: [
        "When a cue is too fast, you have three honest options. Shorten the text by removing filler that does not change the meaning. Extend the end time if the next cue leaves a gap. Or move part of the sentence into a separate cue, which requires the merge/split editor because this page does not expose those buttons.",
        "Do not simply stretch every cue. A global change can fix one row and break ten others. Work from the longest or fastest warnings first, because they affect the most viewers. Keep names, numbers and negations intact even when trimming; those are the words a viewer cannot infer from context. After a change, read the cue aloud at the pace of the timestamps. If it feels rushed to you, it is probably rushed on screen."
      ]
    },
    {
      heading: "What the checker does not measure",
      paragraphs: [
        "The checker does not measure words per minute, comprehension, eye movement or how much of the picture the caption covers. It does not know the font, the display size, the viewing distance or whether the viewer is listening in a second language. It also does not score the whole file with an average; one very fast cue can be hidden by many comfortable ones, which is why the per-cue list matters.",
        "It does not detect timing drift, missing audio, speaker changes or translation quality. Those are outside the scope of a character-count calculation. Treat a clean report as a necessary check, not a guarantee that the subtitles are good. A human review with the sound on and the sound off still catches problems that a CPS number cannot describe."
      ]
    },
    {
      heading: "A repeatable review workflow",
      paragraphs: [
        "Start by importing the file and setting the limits your project uses. Read the issue list from the top, fix the most severe cue first, then recheck. Export a copy after each batch so you can compare versions. When the list is empty at your chosen limits, watch the file in a player at the intended size. Pause on the fastest lines and decide whether the cut needs a different edit rather than more text.",
        "For broader guidance, the [reading speed guide](/guides/subtitle-reading-speed) explains how CPS relates to comprehension, and the [line length guide](/guides/subtitle-line-length) covers layout. If the file also has structural problems, run it through the [validator](/subtitle-validator). If you need to reshape cues, use the [merge/split editor](/merge-split-srt). Keep the original file; this page does not save your edits."
      ]
    }
  ],
  faqs: [
    {
      question: "What is a good reading speed for subtitles?",
      answer:
        "A common editorial target is around 20 characters per second or lower. Some audiences need a slower pace. The checker lets you set the limit, so use the value that fits your viewers and the screen rather than treating one number as universal."
    },
    {
      question: "How does this tool calculate CPS?",
      answer:
        "It counts characters after stripping tags and collapsing whitespace, then divides by the cue duration in seconds. Spaces are included. The result is shown per cue and compared with the maximum you enter."
    },
    {
      question: "Does the checker fix fast cues automatically?",
      answer:
        "No. Reading-speed mode only reports warnings. You can edit text or timestamps in the table, but the split and merge buttons are not available on this page. Use the merge/split editor if a cue needs to become two."
    },
    {
      question: "Can I change the line-length limit?",
      answer:
        "Yes. The Maximum line length field accepts a new number and the report updates immediately. The two-line maximum is fixed. The count is character-based, so it does not know the font or screen width."
    },
    {
      question: "Does it check overlapping cues too?",
      answer:
        "Yes. The same validation pass reports an overlap when a cue starts before the previous cue ends. It also flags empty text and cues with more than two lines. Those checks run alongside the reading-speed test."
    },
    {
      question: "Is my subtitle file uploaded?",
      answer:
        "No. The file is parsed in the tab and the calculations happen in the browser. Closing the tab discards the work, so download the result before you leave."
    }
  ],
  workedExample: {
    title: "A cue list with one fast line",
    intro:
      "The middle cue carries too many characters for its duration. A practical fix is to shorten the wording or extend the end time, then check the next cue for a gap.",
    srt: `1
00:00:01,000 --> 00:00:04,000
The first version of the map had three routes.

2
00:00:04,400 --> 00:00:06,000
Turn left at the old station, follow the river path, then take the second bridge and wait by the gate.

3
00:00:06,500 --> 00:00:09,500
The second bridge is the one without a sign.`,
    note: "Cue 2 is the warning. Its text is far too long for 1.6 seconds, so either cut it down or move the boundary to give it more time."
  },
  sources: [
    {
      label: "BBC — Subtitle guidelines",
      url: "https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/"
    },
    {
      label: "W3C — Captions (prerecorded) in WCAG 2.2",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html"
    },
    {
      label: "Netflix — Timed text style guide",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617-Timed-Text-Style-Guide-General-Requirements"
    }
  ],
  relatedGuides: ["subtitle-reading-speed", "subtitle-line-length"],
  keywords: [
    { keyword: "subtitle reading speed checker", role: "primary" },
    { keyword: "reading speed checker", role: "synonym" },
    { keyword: "What is a good reading speed for subtitles?", role: "faq" },
    { keyword: "How does this tool calculate CPS?", role: "faq" },
    { keyword: "Does the checker fix fast cues automatically?", role: "faq" },
    { keyword: "Can I change the line-length limit?", role: "faq" },
    { keyword: "Does it check overlapping cues too?", role: "faq" },
    { keyword: "Is my subtitle file uploaded?", role: "faq" }
  ]
};
