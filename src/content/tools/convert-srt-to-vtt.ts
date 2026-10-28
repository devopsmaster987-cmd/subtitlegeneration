import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/convert-srt-to-vtt",
  preset: "convert-srt-to-vtt",
  h1: "Convert SRT to VTT and back in your browser",
  title: "Convert SRT to VTT — WebVTT converter with SRT export",
  metaDescription:
    "Convert SRT to VTT in the browser, preview the WebVTT output, and download SRT, VTT or plain text. Import a VTT file when you need to convert VTT to SRT.",
  primaryKeyword: "convert srt to vtt",
  capsule:
    "Convert SRT to VTT by importing a subtitle file and reviewing the WebVTT preview before you download it. The same editor can convert VTT to SRT or export plain text, with cue text and timings preserved and nothing sent to a server.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "SRT, VTT or pasted subtitle text" },
    { label: "VTT output", value: "WEBVTT header, dot timestamps, no cue numbers" },
    { label: "SRT output", value: "Comma timestamps and sequential cue numbers" },
    { label: "TXT output", value: "Plain cue text with no numbers or times" },
    { label: "Preserved", value: "Cue text and millisecond timings" },
    { label: "Not preserved", value: "VTT settings, regions, styles, comments and cue identifiers" }
  ],
  sections: [
    {
      heading: "Reading the WebVTT preview",
      paragraphs: [
        "The conversion preview shows the current cue list written as WebVTT. It begins with the WEBVTT signature, leaves a blank line, then writes each cue as a start time, an arrow, an end time and the text. Times use a dot before the milliseconds and no sequence numbers appear above the cues. The preview updates as you edit text or timestamps.",
        "This preview is the quickest way to confirm that the file is structurally valid before download. Look at the header, the separator between milliseconds and the blank line between cues. If the preview shows text where a timestamp should be, the source cue was not parsed as a cue. The preview is generated from the table, not from the original file, so it also reflects any deletions or merges made in the editor."
      ]
    },
    {
      heading: "Convert VTT to SRT",
      level: 2,
      paragraphs: [
        "The other direction uses the same table. Import a .vtt file and the parser skips the WEBVTT line plus any NOTE, STYLE or REGION blocks. It reads dot or comma timestamps and ignores cue settings that follow the end time. The cues appear in the table, and Download SRT writes them with commas and sequential numbers.",
        "This is a one-way loss of presentation details. A cue identifier, an alignment setting or a region reference is not stored in the list, so it cannot be written to SRT. The words and the millisecond timings survive. If a VTT file relies on positioning to place a sign or a speaker label, the SRT version will show that text in the default position. Keep the original VTT if positioning matters, and use the SRT copy only where plain cues are acceptable."
      ]
    },
    {
      heading: "SRT to TXT: a transcript without timings",
      paragraphs: [
        "Download TXT produces the plain text of the cues, one line per cue, with no numbers and no timestamps. Empty cues are dropped. This is useful when you need a transcript for searching, quoting or translation, but it is not a subtitle file. A player cannot use it for timing, and a text editor will not show where each line appeared.",
        "Because the text comes from the cue table, a line break inside a cue is preserved. If you want flowing prose, join the lines in a word processor. If you want a timed transcript, export SRT or VTT instead. The srt to txt route is also a quick way to inspect the wording without the distraction of timecodes, especially when you are checking names and numbers against the source audio."
      ]
    },
    {
      heading: "What changes and what does not",
      paragraphs: [
        "The conversion preserves the cue text and the time values at millisecond precision. It does not preserve comments, styles, regions, cue identifiers or settings, because the editable table has no place to store them. It also does not reflow text. A cue with three lines stays a cue with three lines, even if the target player would prefer two.",
        "A round trip is not lossless. Converting SRT to VTT and back returns the same words and timings, but anything WebVTT added in between — cue settings, regions, identifiers or NOTE blocks — is dropped the first time the file passes through the table. Even a direct SRT to VTT to SRT trip produces a plain file, not the original bytes. If the source carried styling that matters, treat the converted copy as a new delivery file and keep the original.",
        "Inline markup is left as text. A tag that was meaningful in one format may not be understood in the other, and this tool does not translate styling syntax. Treat the output as a clean cue list rather than a full format transplant. If the source is an SRT with informal bold or italic tags, check how the target player renders them before publishing. If the source is a styled VTT, expect the styling to disappear."
      ]
    },
    {
      heading: "Encoding and line endings",
      paragraphs: [
        "The importer strips a UTF-8 byte-order mark and normalises Windows and old Mac line endings. The exporter writes a Blob with a UTF-8 charset, so accented letters and non-Latin scripts are stored consistently. What it cannot do is guess the encoding of a file that was saved in a legacy code page. If the imported text looks like random symbols, the source was not UTF-8 and the browser read it with the wrong assumption.",
        "In that case, open the original in an editor that can convert encodings and save a UTF-8 copy before importing it here. The page has no encoding picker and no character-set repair. It also does not report encoding as a validation issue; it simply displays what the browser decoded. This is one reason to keep the original file until the exported subtitle has been checked in a player."
      ]
    },
    {
      heading: "Choosing the right format for the player",
      paragraphs: [
        "Use VTT for HTML5 video, especially when the player loads a track element. Browsers understand the WEBVTT header and dot timestamps natively. Use SRT for desktop editors, older players and upload forms that ask for a subtitle file without offering WebVTT. Use TXT only for reading, searching or sending words to another person.",
        "The extension is not the conversion. Renaming an SRT to end in .vtt leaves commas and no header, and a strict player may reject it. This page rewrites the header and separators for you. If you need to know which format a platform expects, check its upload instructions rather than guessing from the file picker. The [SRT vs VTT guide](/guides/srt-vs-vtt) explains the differences in more detail, and the [VTT overview](/guides/what-is-a-vtt-file) covers the header and cue model."
      ]
    },
    {
      heading: "A practical conversion checklist",
      paragraphs: [
        "A short routine avoids most conversion surprises. Import the file, confirm the cue count, scan the first and last cues, make any text corrections, and look at the preview before downloading. Export the target format, then test it in the player that will actually use it. If the player has a caption menu, make sure captions are switched on.",
        "Keep both the original and the converted file until the new one is verified. The page does not save anything, so closing the tab discards the table. If you are converting a batch of files, do them one at a time and name the outputs clearly. For timing repairs before conversion, use the [timing editor](/subtitle-timing-editor); for structural warnings, use the [subtitle validator](/subtitle-validator)."
      ]
    }
  ],
  faqs: [
    {
      question: "Does the conversion change the timings?",
      answer:
        "No. Times are parsed to milliseconds and written in the target format at the same values. The visible change is the separator: SRT uses a comma before milliseconds and WebVTT uses a dot."
    },
    {
      question: "Can I convert VTT back to SRT?",
      answer:
        "Yes. Import a .vtt file and download SRT. The words and timings are kept, but cue settings, regions and identifiers are lost because the editable table has nowhere to store them."
    },
    {
      question: "What happens to VTT cue settings?",
      answer:
        "They are ignored on import. Settings such as alignment or position are not shown in the table and are not written to either export. Keep the original file if those details are part of the delivery."
    },
    {
      question: "Can I get a plain text version?",
      answer:
        "Yes. Download TXT writes one line of cue text per cue with no numbers or timestamps. Empty cues are removed. It is a reading copy, not a subtitle file a player can use."
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. The file is read and rewritten in the browser. Nothing is uploaded. You can watch the network panel to confirm that no subtitle content leaves the device during import or download."
    },
    {
      question: "Why does my VTT preview have dots instead of commas?",
      answer:
        "WebVTT uses a dot before milliseconds, while SRT uses a comma. The preview shows the WebVTT form because that is the format being previewed. The SRT download keeps commas."
    }
  ],
  workedExample: {
    title: "The same cues before and after conversion",
    intro:
      "The SRT on the left of this block becomes WebVTT with a header, dot separators and no numbers. The words and the start and end values stay the same.",
    srt: `Before (SRT)
1
00:00:01,250 --> 00:00:03,500
The train leaves at seven.

2
00:00:04,000 --> 00:00:06,750
The platform changes at the last minute.

3
00:00:07,100 --> 00:00:09,900
Listen for the announcement.

After (VTT)
WEBVTT

00:00:01.250 --> 00:00:03.500
The train leaves at seven.

00:00:04.000 --> 00:00:06.750
The platform changes at the last minute.

00:00:07.100 --> 00:00:09.900
Listen for the announcement.`,
    note: "The VTT output begins with WEBVTT and writes 00:00:01.250 instead of 00:00:01,250. If a player rejects the file, check that header and the dot first."
  },
  sources: [
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    },
    { label: "FFmpeg — subtitle formats", url: "https://ffmpeg.org/ffmpeg-formats.html#subtitles" }
  ],
  relatedGuides: ["srt-vs-vtt", "what-is-a-vtt-file"],
  keywords: [
    { keyword: "convert srt to vtt", role: "primary" },
    { keyword: "convert vtt to srt", role: "secondary", headingLevel: 2 },
    { keyword: "srt to txt", role: "synonym" },
    { keyword: "srt to webvtt", role: "synonym" },
    { keyword: "vtt to srt converter", role: "synonym" },
    { keyword: "Does the conversion change the timings?", role: "faq" },
    { keyword: "Can I convert VTT back to SRT?", role: "faq" },
    { keyword: "What happens to VTT cue settings?", role: "faq" },
    { keyword: "Can I get a plain text version?", role: "faq" },
    { keyword: "Is the conversion done on a server?", role: "faq" },
    { keyword: "Why does my VTT preview have dots instead of commas?", role: "faq" }
  ]
};
