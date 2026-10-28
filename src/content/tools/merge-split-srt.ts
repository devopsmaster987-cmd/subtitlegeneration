import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/merge-split-srt",
  preset: "merge-split-srt",
  h1: "Merge SRT lines online and split cues in one browser editor",
  title: "Merge SRT lines online — split and combine subtitle cues",
  metaDescription:
    "Merge SRT lines online or split one cue into two. This browser tool joins adjacent subtitles, distributes split timing and exports SRT, VTT or TXT.",
  primaryKeyword: "merge srt lines online",
  capsule:
    "Merge SRT lines online when two cues should read as one, or split a long cue at the cursor. This local browser editor joins adjacent subtitles, distributes split timing by character count, renumbers cues on export, and never uploads your subtitle file.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "SRT or VTT, imported or pasted" },
    { label: "Merge", value: "Joins a cue with the next one and takes the outer time range" },
    { label: "Split", value: "Divides one cue at the cursor into two cues" },
    { label: "Split timing", value: "Proportional to characters before and after the cursor" },
    { label: "Numbering", value: "Exports are renumbered from one in table order" },
    { label: "Storage", value: "Edits stay in the tab and are lost on close" }
  ],
  sections: [
    {
      heading: "How merging adjacent cues works",
      paragraphs: [
        "Merge next joins the selected cue with the row below it. The result starts at the earlier of the two start times, ends at the later of the two end times, and its text is the two blocks separated by a space. The merge function does not care which row you clicked first; it compares start times, so the earlier cue becomes the first half of the new text.",
        "That behaviour is useful when a sentence was split across two cues and the second half begins with a lower-case word. It is less useful when the two cues belong to different speakers, because the tool has no speaker field and will simply run the lines together. Line breaks inside each cue are kept, so a merged cue can end up with more than two display lines. Check the row and shorten it after merging if necessary."
      ]
    },
    {
      heading: "Split SRT file online at the cursor",
      level: 2,
      paragraphs: [
        "Split at cursor divides the current cue at the character position in its text area. Both halves keep the original text minus the split point, and the editor refuses a split that would leave one side empty. The boundary time is apportioned by the number of characters before and after the split, using the cue's original start and end.",
        "This is the practical way to split an SRT file online without leaving the browser: load the file, place the cursor at a clause boundary, and press the button. The result is two cues with the same outer start and end. Because timing follows character count rather than the audio, a long pause on one side of the split is not represented. Nudge the boundary afterwards if the visual result matters. There is no batch split-all command; work cue by cue."
      ]
    },
    {
      heading: "Choosing a split point that reads naturally",
      paragraphs: [
        "A good split follows meaning, not arithmetic. Put the cursor after a clause, a comma or a natural breath, not in the middle of a name or between an article and its noun. Keep both halves readable on their own, because a viewer may see them at different times even though they were spoken as one sentence.",
        "After splitting, look at the character counts in each half. The timing is distributed by the same counts, so a very short first half gets very little screen time. If the first part is just a filler word, consider merging it into the previous cue or deleting it instead. If the second part is much longer, adjust its end time so the reading speed stays reasonable. The line-length and reading-speed guides explain the limits; the editor itself shows characters per second for each row."
      ]
    },
    {
      heading: "When merging is a bad idea",
      paragraphs: [
        "Merging is tempting when a file has many tiny cues, but it can make captions harder to read. A merged cue occupies the screen for the whole span between its start and end. If the two original cues had a gap, that gap disappears. If they were far apart, the new cue may stay up for an uncomfortably long time or cover a shot change.",
        "Do not merge across a speaker change, a scene change or a long silence. Do not merge when the result would exceed two display lines or push the reading speed above your limit. The tool does not detect any of those conditions; it only joins text and expands the time range. A better workflow is to merge only sentences that were split by the transcriber, then split or retime anything that still feels slow."
      ]
    },
    {
      heading: "Timing and numbering after a merge or split",
      paragraphs: [
        "After a merge, the cue count drops by one. After a split, it rises by one. Exports always write fresh numbers starting at one, so the original cue numbers are not preserved. If another person is reviewing the file by cue number, tell them that the numbering changed. Keep a copy of the previous version if you need to compare comments.",
        "The split boundary is rounded to the nearest millisecond, and a split cue keeps the original start and end on its outer edges. A merged cue takes the minimum start and maximum end, which can create an overlap with a following cue if the two source cues were not adjacent in time. The validator reports that overlap. It does not fix it for you beyond its limited safe-fix pass."
      ]
    },
    {
      heading: "Batch work and large subtitle files",
      paragraphs: [
        "The buttons act on one row at a time. There is no merge-all, no split-by-word-count batch command and no rule engine. That is a deliberate limit: a bulk merge that guesses wrong can ruin an entire file in one click, and the browser page has no undo history. For a long file, work in a copy and keep the original open in another tab for reference.",
        "Very large subtitle files also stress the table. Every cue is rendered and every edit updates the whole list. If the page becomes slow, split the job into parts or use a desktop editor. The import parser is forgiving about missing numbers, but it skips a block entirely if it cannot find a valid timing line. Check the cue count after import; a lower count than expected means something was not parsed."
      ]
    },
    {
      heading: "Export and verify the changed file",
      paragraphs: [
        "Export SRT for players and editors, VTT for the web, or TXT for a plain transcript. The download name comes from the imported file, and the content comes from the current table order. If you merged two cues, confirm that the new text is joined where you expected. If you split one, confirm that both halves have sensible times and that neither is empty.",
        "A quick verification routine is enough for most files: check the first cue, the cue around the middle and the last cue in a player; run the [subtitle validator](/subtitle-validator) for overlaps and line length; and compare the cue count with the source. The [line length guide](/guides/subtitle-line-length) and [subtitle best practices](/guides/subtitle-best-practices) explain why the shape of a cue matters as much as its spelling. Keep the edited download; the page does not save it for you."
      ]
    }
  ],
  faqs: [
    {
      question: "What does Merge next do?",
      answer:
        "It joins the selected cue with the cue below it. The new cue starts at the earlier time, ends at the later time, and combines the two text blocks with a space. Internal line breaks are kept, so check the result for length."
    },
    {
      question: "How are timings divided when I split a cue?",
      answer:
        "The original duration is divided in proportion to the characters before and after the cursor. A split near the middle of the text gets roughly half the time. The boundary is rounded to the nearest millisecond."
    },
    {
      question: "Can I split at a specific word?",
      answer:
        "Yes, place the cursor at that point in the text and press Split at cursor. The tool has no word list or automatic word-level timing, so the new time is still estimated from character count."
    },
    {
      question: "Does merging remove duplicate text?",
      answer:
        "No. It joins the two blocks exactly as they are, apart from normalising surrounding whitespace. If the same word appears at the end of one cue and the start of the next, you must delete it yourself."
    },
    {
      question: "Can I merge more than two cues at once?",
      answer:
        "Not in one action. Merge next works on a pair. For three or more cues, merge the first pair, then merge the result with the next row. Check the duration and line count after each step."
    },
    {
      question: "Will the export renumber my cues?",
      answer:
        "Yes. Every export writes sequential numbers from one in the current table order. Original identifiers are not preserved. If a reviewer refers to cue numbers, tell them that a merge or split changed the numbering."
    }
  ],
  workedExample: {
    title: "A long cue split into two readable lines",
    intro:
      "The second cue contained two clauses. Splitting at the comma produced two cues, with the boundary placed by character count and then checked in a player.",
    srt: `1
00:00:01,000 --> 00:00:03,800
The first pass caught the obvious typos.

2
00:00:04,400 --> 00:00:08,000
The second pass caught the timing, and that was the harder problem.

3
00:00:08,600 --> 00:00:12,200
We kept the split because each line could stand alone.`,
    note: "If the merged version were used instead, cue 2 and cue 3 would become one cue lasting about eight seconds. That is usually too long for a two-line caption."
  },
  sources: [
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    },
    {
      label: "BBC — Subtitle guidelines",
      url: "https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/"
    }
  ],
  relatedGuides: ["subtitle-line-length", "subtitle-best-practices"],
  keywords: [
    { keyword: "merge srt lines online", role: "primary" },
    { keyword: "split srt file online", role: "secondary", headingLevel: 2 },
    { keyword: "split subtitle line", role: "synonym" },
    { keyword: "merge subtitle lines", role: "synonym" },
    { keyword: "split cue", role: "synonym" },
    { keyword: "What does Merge next do?", role: "faq" },
    { keyword: "How are timings divided when I split a cue?", role: "faq" },
    { keyword: "Can I split at a specific word?", role: "faq" },
    { keyword: "Does merging remove duplicate text?", role: "faq" },
    { keyword: "Can I merge more than two cues at once?", role: "faq" },
    { keyword: "Will the export renumber my cues?", role: "faq" }
  ]
};
