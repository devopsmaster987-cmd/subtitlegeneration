import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/subtitle-timing-editor",
  preset: "subtitle-timing-editor",
  h1: "Subtitle timing editor online: shift and stretch every subtitle cue",
  title: "Subtitle timing editor online — shift and stretch SRT cues",
  metaDescription:
    "Use this subtitle timing editor online to shift every cue by seconds or stretch timestamps for frame-rate drift. Edit SRT or VTT locally and export a retimed file.",
  primaryKeyword: "subtitle timing editor online",
  capsule:
    "A subtitle timing editor online lets you move or rescale every cue in an SRT or VTT file without re-transcribing it. This browser tool applies a global offset in seconds or a stretch factor, shows each cue in a table, and exports the retimed file locally.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "SRT, VTT or pasted subtitle text" },
    { label: "Offset unit", value: "Seconds, converted to whole milliseconds before applying" },
    { label: "Offset behaviour", value: "Added to every existing start and end, clamped at zero" },
    { label: "Stretch behaviour", value: "Multiplies absolute timestamps by a positive factor" },
    { label: "Reset", value: "Restores the cues and timings captured at import" },
    { label: "Output", value: "SRT, WebVTT and TXT downloads" },
    { label: "Storage", value: "Nothing is saved; download before closing the tab" }
  ],
  sections: [
    {
      heading: "What this timing editor changes",
      paragraphs: [
        "This page works on a subtitle file that already has timestamps. You import an SRT or VTT file, or paste subtitle text, and the cues appear in a table with an editable start time, end time and text area. The timing controls sit above that table: an offset in seconds, a stretch factor, and a reset button. Every change is applied to the cue list in the browser, and the corrected file is downloaded from the same page.",
        "That scope is deliberately narrow. The tool does not transcribe audio, does not read a video track and does not decide where a line should appear. It cannot listen to a clip and align words to it. What it can do is apply a timing correction that you have already diagnosed, which is often the fastest fix for a file that was authored against a different copy of the same video."
      ]
    },
    {
      heading: "Adjust subtitle timing with a global offset",
      level: 2,
      paragraphs: [
        "The offset field is measured in seconds and defaults to 0.5. A positive value moves every cue later; a negative value moves every cue earlier. When you press Apply offset, the number is multiplied by 1000 and rounded to a whole millisecond, then added to both the start and the end of every cue. A value of 1.5 therefore adds exactly 1500 ms, and a value of -0.25 subtracts 250 ms.",
        "This is a global shift, not a per-cue edit. If one line is early and the rest are correct, the offset will make the other lines wrong. Use the individual timestamp fields for that kind of repair. The offset is also applied to the current table, not to the original file, so pressing the button twice adds the value twice. There is no preview and no confirmation step, but Reset timing returns to the imported state."
      ],
      bullets: [
        "Subtitles appear too late: enter a negative offset, for example -1.2 seconds.",
        "Subtitles appear too early: enter a positive offset, for example 0.8 seconds.",
        "A platform trimmed the start of the video: shift by the length that was removed.",
        "A file was authored for a different cut: shift first, then check for drift at the end."
      ]
    },
    {
      heading: "Subtitle timing editor stretch factors for growing drift",
      level: 2,
      paragraphs: [
        "A stretch factor multiplies each absolute timestamp by the number you enter. A factor of 1.001 makes a cue at 00:01:00,000 start at 00:01:00,060, while a cue at 00:30:00,000 moves by 1.8 seconds. That growing effect is the point: it corrects drift that accumulates across a file, which a single offset cannot fix. The multiplier must be greater than zero; an invalid or non-finite value is ignored and treated as 1.",
        "The important detail is that the factor is applied to absolute time from zero, not to each cue's duration around its own start. A cue that is 3 seconds long at 00:10:00,000 becomes 3 seconds long at 00:10:00,600 when stretched by 1.0002, not a 3.0006-second cue pinned to its old start. Cues near the beginning barely move, and cues near the end move the most. That matches a frame-rate conversion or a speed change, where the whole timeline is rescaled.",
        "The factor is applied to the current values, so repeated presses compound. Work from a known state: import the file, apply one stretch, then test the first, middle and last cue in a player. Do not stack a large stretch and a large offset without checking the middle of the file, because both operations are silent and immediate."
      ]
    },
    {
      heading: "Reading the cue table and checking your work",
      paragraphs: [
        "The table shows a position number, the start and end fields, the cue text, and the current reading speed in characters per second. Reading speed is calculated from the text length and the cue duration, so it updates as soon as you change a timestamp. It is not a compliance verdict, but it makes an obviously crowded cue visible before export.",
        "After a global change, inspect more than the first line. Check a cue near the start, one near the middle and one near the end against the same video. If the start is now correct but the end drifts, the file needs a stretch rather than another offset. If a cue has lost its lead-in because a negative shift pushed it against zero, correct that cue by hand. The table is also where you can delete a cue that no longer belongs after a re-edit."
      ]
    },
    {
      heading: "Choosing an offset or a stretch factor",
      paragraphs: [
        "Use an offset when the error is constant: every cue is late by the same amount, or every cue is early by the same amount. That usually comes from a wrong start point, a pre-roll that was added or removed, or a file authored against a slightly different export. Use a stretch when the error is small at the beginning and larger at the end. That pattern is typical of a frame-rate mismatch or a video that was sped up or slowed down.",
        "The arithmetic for drift is simple if you know both durations. Divide the target duration by the source duration to get the factor. A 23.976 fps master played at 25 fps runs about 4.1 percent shorter, so timestamps authored for the slower version need a factor near 0.959. The reverse conversion, from a 25 fps cut back to 23.976, needs about 1.043. If you do not know the frame rates, measure the first and last cue's error and estimate the factor from that ratio instead of guessing.",
        "Do not use stretch to make a single cue readable. It changes every other cue as well, and the change is not anchored at the first subtitle. For one long cue, split it or edit its end time directly. For a whole file that needs to fit a new runtime, stretch is the right instrument."
      ]
    },
    {
      heading: "Reset, export and keep a copy",
      paragraphs: [
        "Reset timing restores the cues captured when the file was imported, including their original text and timestamps. It is the clean way to undo a stretch experiment. It does not reload the file from disk, and it does not merge with changes made after import. If you have edited text deliberately, download that version before pressing reset, because the reset will discard those edits as well.",
        "Exports are available as SRT, VTT and TXT. SRT uses numbered cues and a comma before the milliseconds. VTT adds a WEBVTT header and uses a dot. TXT writes the text without timings. All three come from the current table, so the retimed values appear in every format. The exporter writes UTF-8, normalises line endings and renumbers cues in their current order.",
        "The page does not save work in local storage, a database or a cookie. A refresh, a closed tab or a browser crash removes the cue list. Download a copy before making a second class of change, and keep the untouched original next to it so you can compare the result in a player."
      ]
    },
    {
      heading: "Limits, privacy and honest expectations",
      paragraphs: [
        "Everything happens in the tab. The file you choose is read with the browser's file API and parsed locally; there is no upload endpoint and no account. You can confirm that in the network panel. The trade-off is that very large subtitle files render slowly, and the page has no waveform, video preview or undo history. A timing change that looks plausible in the table still has to be checked against the actual recording.",
        "This tool is a retiming instrument, not an automatic sync service. It will not detect a offset by listening to speech, and it will not align subtitles to a waveform. If a file needs line-by-line re-synchronisation after a heavy re-edit, the honest workflow is to retime each cue in a player or regenerate the subtitles. For the background on why drift happens, read the guide on how to sync subtitles; for target durations and reading speed, see the subtitle timing guidelines."
      ]
    }
  ],
  faqs: [
    {
      question: "How do I fix subtitles that are a few seconds late?",
      answer:
        "Enter a negative offset equal to the delay, for example -1.5 for one and a half seconds, and press Apply offset. Check the first and last cue afterwards; if the error grows across the file, use a stretch factor instead of a second offset."
    },
    {
      question: "What offset moves subtitles earlier?",
      answer:
        "A negative number moves cues earlier because it is added to every timestamp. The default 0.5 moves cues later, so type -0.5 to move them half a second earlier. The input is in seconds, not milliseconds."
    },
    {
      question: "When should I use stretch instead of offset?",
      answer:
        "Use stretch when the first cue is almost right and later cues drift further out of sync. That pattern points to a speed or frame-rate difference, which needs the timeline multiplied by a factor. A constant error across the whole file needs an offset."
    },
    {
      question: "Does the tool sync subtitles automatically to the audio?",
      answer:
        "No. It has no audio playback, waveform or speech alignment. It applies the offset or factor you supply to existing timestamps. You still need to compare the result with the video and correct individual cues that remain wrong."
    },
    {
      question: "Is this timing editor free and private?",
      answer:
        "Yes. It runs in the browser with no account and no paid export, and the subtitle file is parsed locally rather than uploaded. Nothing is stored on the site, so download the retimed file before closing the tab."
    },
    {
      question: "Why did my first cue get shorter after a negative offset?",
      answer:
        "The shift clamps both the start and the end at zero. If a cue begins at 0.6 seconds and you subtract 1.5 seconds, the start becomes zero while the end moves to the correct earlier time, so the cue loses its original lead-in. Fix that cue by hand."
    }
  ],
  workedExample: {
    title: "A three-cue file shifted 1.5 seconds later",
    intro:
      "The imported cues below were 1.5 seconds early against the video. Applying an offset of 1.5 seconds adds 1500 ms to every start and end, producing this retimed file.",
    srt: `1
00:00:02,100 --> 00:00:04,500
The first pass caught the room tone.

2
00:00:04,900 --> 00:00:07,700
The second pass fixed the names.

3
00:00:08,300 --> 00:00:11,400
The final pass checked the numbers.`,
    note: "The original cue 1 started at 00:00:00,600. A shift of -1.5 seconds would instead clamp it to 00:00:00,000 and reduce its duration, so negative offsets deserve a check on the opening cue."
  },
  sources: [
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    },
    {
      label: "BBC — Subtitle Guidelines",
      url: "https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/"
    }
  ],
  relatedGuides: ["how-to-sync-subtitles", "subtitle-timing-guidelines"],
  keywords: [
    { keyword: "subtitle timing editor online", role: "primary" },
    { keyword: "subtitle timing editor", role: "secondary", headingLevel: 2 },
    { keyword: "adjust subtitle timing", role: "secondary", headingLevel: 2 },
    { keyword: "edit subtitle timings", role: "synonym" },
    { keyword: "sync subtitles", role: "synonym" }
  ]
};
