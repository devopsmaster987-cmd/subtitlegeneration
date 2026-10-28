import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/subtitle-validator",
  preset: "subtitle-validator",
  h1: "Subtitle validator: check an SRT or VTT file for errors",
  title: "Subtitle validator — find SRT and VTT errors before playback",
  metaDescription:
    "Run a subtitle validator on SRT or VTT to find overlaps, bad timestamps, empty cues and over-long lines. Apply safe fixes locally, then download a clean file.",
  primaryKeyword: "subtitle validator",
  capsule:
    "A subtitle validator checks an SRT or VTT file for structural errors before a player has to. It reports cues that end before they start, negative times, overlaps, empty text, extra lines, over-long lines and reading speeds above your limit, then offers one-click safe fixes and a clean SRT, VTT or TXT download.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "SRT, VTT or pasted subtitle text" },
    {
      label: "Detected issues",
      value:
        "Reversed timings, negative times, overlaps, empty text, line count, line length and reading speed"
    },
    { label: "Default CPS", value: "20 characters per second, editable" },
    { label: "Default line", value: "42 characters per line, editable" },
    { label: "One-click fixes", value: "Sort, clamp, drop empty cues and renumber" },
    { label: "Output", value: "SRT, VTT and TXT downloads" }
  ],
  sections: [
    {
      heading: "What this validation pass actually checks",
      paragraphs: [
        "The page runs a structural validation pass inside the browser tab. When you import a file or paste text, the parser splits the input into blocks, reads each timing line and stores start and end times in milliseconds. The issue list is recalculated on every edit and whenever you change a limit, so you are never looking at a stale report. Nothing is sent to a server, and nothing is saved after you close the tab.",
        "The report covers seven practical faults: a cue that ends before it starts, a negative timestamp, an overlap with the previous cue, empty text, more than two lines in one cue, a line longer than your limit, and reading speed above your limit. The line-count rule is fixed at two. The line-length and reading-speed limits are editable. The list separates errors from warnings: reversed timings and negative times are errors, while the other findings are warnings that still deserve attention."
      ]
    },
    {
      heading: "How to validate SRT file structure",
      paragraphs: [
        "Import an .srt file or paste its text. The parser accepts a byte-order mark, Windows or Unix line endings, and blocks separated by one or more blank lines. Cue numbers are optional: a block that starts directly with a timing line is still read, and the export renumbers every cue from one. That tolerance is convenient, but it also means a missing number will not produce its own warning in the list.",
        "A malformed timing line is a different story. If a block has no arrow, or its timestamp cannot be parsed, that block is skipped without a per-cue message. The visible symptom is a shorter cue list or the error “No cues were found” when nothing valid remains. Compare the cue count with the source file if the report looks suspiciously clean. The tool reads the file as text; it does not guess a legacy encoding, so garbled characters mean the file should be re-saved as UTF-8."
      ]
    },
    {
      heading: "How to validate VTT file syntax",
      paragraphs: [
        "A .vtt file is parsed by the same routine. The WEBVTT header, NOTE, STYLE and REGION blocks are ignored, cue identifiers are accepted, and settings after the end timestamp are tolerated. The report then lists the same structural warnings as it does for SRT. Because parsing is lenient, a file can pass this pass and still fail a strict player that insists on a header line, dot-separated milliseconds or legal cue settings.",
        "Use the report as a content check, not a specification conformance test. For a web player, keep WEBVTT as the first line, use a dot before the milliseconds, and avoid stray blank lines inside a cue. If a track still refuses to load, the [SRT not working guide](/guides/srt-not-working-subtitles-not-showing) walks through filename, MIME type and player caching. Export VTT from the tool when you want a normalized file with a guaranteed header."
      ]
    },
    {
      heading: "Overlaps, negative times and reversed cues",
      paragraphs: [
        "An overlap warning appears when a cue starts before the previous cue ends in the sorted list. Import sorts cues by start time, so the message refers to the order you see in the table, not necessarily the order in the original file. Overlaps are legal in many formats, but players handle them differently: some stack both cues, some show the later one, and some drop one entirely. A warning is not proof of a broken file, but it is a common reason a line appears late or disappears.",
        "An end time before the start time is an error, and so is a negative start or end. These usually come from a bad conversion, a hand edit, or a script that subtracted more than the cue duration. The table lets you type a corrected timestamp; invalid text is rejected and the previous value is restored when the field loses focus. Fix errors before warnings, then re-read the list, because changing a time can create or remove an overlap."
      ]
    },
    {
      heading: "Line length, line count and reading speed",
      paragraphs: [
        "Line length is counted after HTML-like tags are removed and whitespace is collapsed. The default maximum is 42 characters per line, and you can change it in the Maximum line length field. The line-count maximum is fixed at two, matching a conventional caption block; a cue with three or four lines gets a warning even if every individual line is short. These numbers are character counts, not pixels, so they cannot account for the player's font, size or safe area.",
        "Reading speed is counted characters divided by cue duration in seconds, using the same tag-stripped text. The default ceiling is 20 characters per second and is editable. A cue with 60 characters in 2.5 seconds reads at 24 CPS and is flagged. Lower the ceiling for children or a second-language audience, and raise it only after watching the result on the target screen. The two checks are independent: a short line can still be too fast, and a long line can sit on screen long enough to pass."
      ]
    },
    {
      heading: "One-click fixes and what they leave alone",
      paragraphs: [
        "The Apply safe fixes button calls a deterministic repair routine. It sorts cues by start time, rounds timings to whole milliseconds, clamps negative values to zero, and forces every end time to be at least one millisecond after its start. It also nudges a cue's start to at least one millisecond after the previous cue's start, drops cues whose text is only whitespace, and renumbers the remaining cues. The issue list updates immediately, so you can see what changed.",
        "Safe does not mean complete. The routine does not shorten long lines, lower reading speed, split a cue, merge two cues, or recover a timestamp that was dropped during import. Its overlap handling is deliberately conservative: it separates start times but does not always push a cue past the previous end. If warnings remain, edit the text or the timestamps, or use the [merge/split editor](/merge-split-srt) for structural changes. Download before closing the tab, because edits are not saved."
      ]
    },
    {
      heading: "A short review workflow before you publish",
      paragraphs: [
        "Start with a copy of the file you intend to publish. Import it, set the reading-speed and line-length limits your project uses, and read the errors first. Apply safe fixes only after you understand which cues they will touch, then compare the cue count and the first few cues with the source. Work through warnings from the top, saving a new export after each batch so you can roll back a bad edit.",
        "Finally, play the exported file in the player that actually matters. A clean report cannot prove that the font fits, that the track is selected, or that the file is named to match the video. If subtitles do not appear at all, switch to the troubleshooting guide rather than editing more cues. For background on the container itself, read [what an SRT file is](/guides/what-is-an-srt-file). If you only need to fix SRT file timing, the timing editor is the narrower tool."
      ]
    }
  ],
  faqs: [
    {
      question: "What does this tool check in a subtitle file?",
      answer:
        "It checks end times that come before start times, negative timestamps, overlaps between neighbouring cues, empty cue text, cues with more than two lines, lines above your character limit, and reading speed above your CPS limit. Reversed and negative timings are errors; the rest are warnings."
    },
    {
      question: "Can I validate SRT file and VTT file with the same tool?",
      answer:
        "Yes. Both formats are parsed into the same cue list, so the same checks run on either one. The parser ignores the WEBVTT header and note blocks, and it accepts cue identifiers and cue settings. Export chooses which format you download."
    },
    {
      question: "Why did a cue disappear after import?",
      answer:
        "A block whose timing line is missing an arrow, or whose timestamp cannot be parsed, is skipped without a per-cue warning. If several cues vanish, compare the loaded count with the original file and check those blocks for a missing arrow, a stray letter in the time, or a comma where a digit should be."
    },
    {
      question: "Does it warn about missing cue numbers?",
      answer:
        "No. The parser deliberately accepts blocks with no number, and the exporter numbers every cue sequentially. That means a missing number will not appear in the report, but the downloaded file will still be numbered correctly."
    },
    {
      question: "Does Apply safe fixes repair every warning?",
      answer:
        "No. It sorts cues, clamps negative times, guarantees an end after the start, pushes start times apart, removes empty cues and renumbers the file. It does not shorten lines, reduce reading speed, split or merge cues, or fully resolve every overlap."
    },
    {
      question: "Is my subtitle file uploaded or stored?",
      answer:
        "No. The file is read and parsed in the tab, and the checks run locally. The site does not store your cues or your edits. Closing the tab discards the work, so download the SRT, VTT or TXT you want to keep."
    }
  ],
  workedExample: {
    title: "One overlap and one rushed cue",
    intro:
      "Cue 2 begins before cue 1 has finished, and cue 3 carries far too much text for its short duration. The report would show an overlap warning for cue 2 and both a long-line warning and a reading-speed warning for cue 3.",
    srt: `1
00:00:01,000 --> 00:00:03,000
The opening shot was fine.

2
00:00:02,500 --> 00:00:04,000
This cue starts before the previous one ends.

3
00:00:04,200 --> 00:00:05,100
Set the export preset to match the platform and keep the audio description track separate from the dialogue track.`,
    note: "Move cue 2 to start at 00:00:03,050 to clear the overlap. Cue 3 needs more time or less text; splitting it after “platform” is usually cleaner than shrinking the font in the player."
  },
  sources: [
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    },
    {
      label: "BBC — Subtitle guidelines",
      url: "https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/"
    }
  ],
  relatedGuides: ["srt-not-working-subtitles-not-showing", "what-is-an-srt-file"],
  keywords: [
    { keyword: "subtitle validator", role: "primary" },
    { keyword: "validate srt file", role: "secondary", headingLevel: 2 },
    { keyword: "validate vtt file", role: "secondary", headingLevel: 2 },
    { keyword: "fix srt file", role: "synonym" }
  ]
};
