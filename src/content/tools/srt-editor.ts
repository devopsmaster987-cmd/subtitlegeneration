import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/srt-editor",
  preset: "srt-editor",
  h1: "Free SRT editor online: open, fix and export subtitle cues",
  title: "Free SRT editor online — edit SRT and VTT in your browser",
  metaDescription:
    "Use this free SRT editor online to open, correct and export cues in your browser. Edit text and timestamps, split or merge cues, then download SRT or VTT.",
  primaryKeyword: "free srt editor online",
  capsule:
    "A free SRT editor online lets you open a subtitle file, correct cue text and timestamps, and export a clean copy without installing software. This browser editor accepts SRT or VTT, keeps the file on your device, and offers split, merge, delete and three download formats.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "SRT, VTT or pasted subtitle text" },
    { label: "Output", value: "SRT, WebVTT and TXT downloads" },
    { label: "Cue editing", value: "Text, start time and end time for every row" },
    { label: "Split timing", value: "Divided by character count at the cursor" },
    { label: "Merge result", value: "Earlier start, later end, both text blocks joined" },
    { label: "Storage", value: "Nothing is saved; download before closing the tab" }
  ],
  sections: [
    {
      heading: "Opening a subtitle file in the browser",
      paragraphs: [
        "Choose an SRT or VTT file from the import control, or paste subtitle text into the second box and press Use pasted text. The file is read with the browser's text reader and parsed in the page, so the subtitle never leaves the device. A small sample is included if you want to see how the table behaves before using your own file.",
        "The parser is tolerant on purpose. It strips a byte-order mark, accepts Windows or Unix line endings, and reads cues even when the sequence number is missing. It skips WEBVTT headers and NOTE, STYLE or REGION blocks, which means a VTT file with comments can still be edited. Cues are sorted by start time as soon as they load. If the file contains no line with an arrow between two timestamps, nothing appears and an error explains that no cues were found."
      ]
    },
    {
      heading: "What you can change on each cue",
      paragraphs: [
        "Every row has an editable start time, an editable end time and a text area. Timestamps are typed in the usual hour:minute:second,millisecond shape. A value is committed when the field loses focus or you press Enter; if the parser cannot read it, the field snaps back to the previous value instead of writing a broken time. That small behaviour prevents a typo from corrupting the file.",
        "The text area accepts line breaks, so you can keep a cue to two display lines. Beside the timestamps the row shows the reading speed in characters per second, recalculated as you type. The number is only a guide, but it makes a very long cue obvious before export. Delete removes the row immediately, and there is no separate undo stack, so export a copy before a large cleanup."
      ]
    },
    {
      heading: "Splitting and merging cues without touching the audio",
      paragraphs: [
        "Two buttons control cue structure: Split at cursor and Merge next. Place the text cursor where the sentence should break, then press Split at cursor. The editor trims both sides and refuses to create an empty cue. The new boundary time is calculated from the character count of the two pieces, so a split near the middle of the text lands near the middle of the cue's duration. That is predictable, but it is not a word-level timestamp; adjust the two times afterwards if the speaker pauses at a different point.",
        "Merge next combines the current row with the one below it. The merged cue starts at the earlier start, ends at the later end, and joins the two text blocks with a space. It does not invent punctuation or remove repeated words. Use merge when a sentence was broken across cues, and use split when one cue holds two ideas that should appear at different moments."
      ]
    },
    {
      heading: "Reading the cue table and catching mistakes",
      paragraphs: [
        "The table is deliberately plain: number, timing and text. It lists the current order after the initial sort, while the numbers you see are table positions rather than the original cue identifiers. Exports write fresh sequential numbers from the current order. That solves most numbering complaints without a separate renumber command, but it also means a deleted cue closes the gap automatically.",
        "Look for rows whose end time is earlier than the start, rows with no text, and rows that overlap the previous cue. This editor does not run a full validation pass, so those problems remain visible only if you inspect the table. If you want a report, load the same file in the subtitle validator after saving a copy. For an SRT with a few dozen cues, a quick scroll plus a check of the first and last rows catches most mistakes."
      ]
    },
    {
      heading: "Export formats and what changes between them",
      paragraphs: [
        "Three downloads are available at any time: SRT, VTT and TXT. SRT writes numbered cues with a comma before the milliseconds. VTT writes a WEBVTT header, removes the numbers, and uses a dot before the milliseconds. TXT writes one line of subtitle text per cue with no timing at all. All three are generated from the same table, so a text correction appears in every format.",
        "The exporter always writes UTF-8. It also normalises trailing spaces and line endings, which is why a file that looked messy in a text editor becomes predictable after a round trip. Formatting that belongs to a particular source file is not preserved. A VTT style block, a cue setting such as position, or a comment is skipped on import and is not written back. If those details matter, keep the original file and use this tool for text and timing repairs only."
      ]
    },
    {
      heading: "SRT editor online versus a VTT editor",
      level: 2,
      paragraphs: [
        "An SRT editor online and a VTT editor online often differ in strictness. This page uses one forgiving parser for both formats. It accepts dot or comma milliseconds, optional hours, and text after a VTT timestamp. The practical result is that you can open a web caption file, fix the words, and export it as SRT or VTT without converting it in a separate step.",
        "There are limits to that convenience. VTT identifiers are not shown as a separate column, so a named cue id is lost when the file is re-exported. Region and style rules are skipped. SRT has no formal styling model, so inline tags are treated as part of the text rather than interpreted. Treat the tool as a cue and timing editor, not as a styling editor. If you need a subtitle editor online for plain text, this is enough; if you need positioned captions, use a player-specific authoring tool."
      ]
    },
    {
      heading: "When a text editor is the better choice",
      paragraphs: [
        "A browser table is convenient, but it is not always the right tool. Very large files with thousands of cues can make the page slow because every row is rendered and every keystroke updates state. A plain text editor may be faster for a single global search and replace. A dedicated video editor is better when you need to see the picture while moving a boundary.",
        "This editor also has no playback control, no waveform and no automatic sync. Those omissions are intentional: the page works on the subtitle file alone, which keeps it usable with any video player. Keep a copy of the imported file, make one class of change at a time, and download before closing the tab. The page does not save work in the browser, so a refresh or a crash discards the current cue list. For the timing side of the same job, open the [timing editor](/subtitle-timing-editor); for structural checks, use the [subtitle validator](/subtitle-validator). This srt editor in browser approach is best for files you can inspect quickly, not for unattended batch jobs."
      ]
    }
  ],
  faqs: [
    {
      question: "Is this SRT editor really free?",
      answer:
        "Yes. The editor runs in the page with no account, no trial limit and no paid export. The only practical costs are your device's memory and the time spent editing. Nothing is uploaded, so there is no per-file fee or subscription behind the download buttons."
    },
    {
      question: "Does the editor upload my subtitle file?",
      answer:
        "No. The browser reads the file you choose and parses it in the tab. There is no upload endpoint in the tool. You can watch the network panel while importing and editing to confirm that the subtitle text stays on your device."
    },
    {
      question: "Can I edit a VTT file as well as SRT?",
      answer:
        "Yes. The import control accepts .vtt and .srt, and the parser skips WebVTT headers and comment blocks. Cue settings and style blocks are not preserved, so export a copy if the original positioning matters."
    },
    {
      question: "How does Split at cursor set the new timings?",
      answer:
        "It measures the characters before and after the cursor, then divides the original duration in the same proportion. The split lands at the nearest millisecond. Character count is an estimate of speech time, so adjust the boundary if the speaker pauses."
    },
    {
      question: "Will merging two cues keep both lines of text?",
      answer:
        "Yes. Merge next joins the two text blocks with a space and keeps any internal line breaks. It starts at the earlier start and ends at the later end. It does not add punctuation, remove duplicates or insert a speaker label."
    },
    {
      question: "What happens if I enter an invalid timestamp?",
      answer:
        "The field keeps your draft until you leave it or press Enter. If the value cannot be parsed, it reverts to the previous valid time instead of saving a broken timestamp. That prevents a typo from creating a cue with a missing or negative time."
    }
  ],
  workedExample: {
    title: "An SRT cue list before a cleanup pass",
    intro:
      "A three-cue file loaded into the table. The second cue is long enough to split at the comma, and the third has a speaker name that should be corrected by hand.",
    srt: `1
00:00:01,000 --> 00:00:04,200
The first edit is always the hardest.

2
00:00:04,800 --> 00:00:09,500
We cut the opening scene, moved the title card, and then realised the music was too loud.

3
00:00:10,200 --> 00:00:13,400
Mira said the second version felt calmer.`,
    note: "After splitting cue 2, check both new timings in a player. Character count puts the boundary near the comma, but the actual pause may be a little earlier or later."
  },
  sources: [
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    },
    {
      label: "MDN — HTML track element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"
    }
  ],
  relatedGuides: ["how-to-sync-subtitles", "subtitle-timing-guidelines"],
  keywords: [
    { keyword: "free srt editor online", role: "primary" },
    { keyword: "srt editor online", role: "secondary", headingLevel: 2 },
    { keyword: "srt editor in browser", role: "synonym" },
    { keyword: "subtitle editor", role: "synonym" },
    { keyword: "subtitle editor online", role: "synonym" },
    { keyword: "edit srt online", role: "synonym" },
    { keyword: "Is this SRT editor really free?", role: "faq" },
    { keyword: "Does the editor upload my subtitle file?", role: "faq" },
    { keyword: "Can I edit a VTT file as well as SRT?", role: "faq" },
    { keyword: "How does Split at cursor set the new timings?", role: "faq" },
    { keyword: "Will merging two cues keep both lines of text?", role: "faq" },
    { keyword: "What happens if I enter an invalid timestamp?", role: "faq" }
  ]
};
