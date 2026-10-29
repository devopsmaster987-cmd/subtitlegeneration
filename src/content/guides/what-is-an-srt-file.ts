import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/what-is-an-srt-file",
  h1: "What is an SRT file? Inside the plain-text subtitle format",
  title: "What is an SRT file? A plain-text subtitle format explained",
  metaDescription:
    "What is an SRT file? Learn how numbered cues, comma timestamps and UTF-8 text work, how to inspect an SRT, and how to create or export one.",
  primaryKeyword: "what is an srt file",
  capsule:
    "What is an SRT file? It is a plain-text subtitle format that pairs numbered cues with start and end timestamps, then the words to display. Each cue is separated by a blank line, timestamps use HH:MM:SS,mmm with a comma, and files are normally saved as UTF-8.",
  published: "2026-01-25",
  updated: "2026-10-29",
  author: "Abdul Samad",
  readingMinutes: 8,
  keyFacts: [
    { label: "File extension", value: ".srt, opened as plain text by any editor" },
    { label: "Cue structure", value: "Sequence number, timestamp line, text, blank line" },
    { label: "Timestamp pattern", value: "HH:MM:SS,mmm --> HH:MM:SS,mmm" },
    { label: "Encoding", value: "UTF-8 recommended; a BOM can confuse some parsers" },
    { label: "Specification", value: "No single official standard; a de facto format" },
    {
      label: "Typical destination",
      value: "Video editors, players, upload forms and caption tools"
    }
  ],
  sections: [
    {
      heading: "The SRT file format, line by line",
      paragraphs: [
        "An SRT file stores subtitles as plain text. Each cue has three parts: a sequence number, a timestamp line and the text that appears on screen. A blank line separates one cue from the next. That is the whole structure. There are no required fonts, colours, positioning values or metadata blocks. Because the format is so small, you can open a subtitle file in Notepad, VS Code or any text editor and understand it without special software.",
        "The number above each cue is a counter, not an identifier that you reference elsewhere. Players sort cues by their timestamps, so cue 7 can sit above cue 6 in the file and still play in the right order. Editors and validators, however, expect the numbers to run in sequence, and a missing number can confuse older parsers. When you edit by hand, renumbering from 1 is the safest habit."
      ],
      bullets: [
        "Cue number: an integer, usually starting at 1.",
        "Timestamp line: start and end times separated by -->.",
        "Text: one or more lines shown together.",
        "Blank line: the separator between cues."
      ]
    },
    {
      heading: "Timestamps, commas and why SRT uses a comma",
      paragraphs: [
        "The timestamp line follows a fixed pattern: hours, minutes, seconds and milliseconds. Milliseconds are separated from the seconds by a comma, and the two times are joined by a space, two hyphens, a greater-than sign and another space. A typical line reads 00:00:12,480 --> 00:00:15,200. Hours are written as two digits, and the field is not optional in the common form.",
        "The comma is a historical choice, not a technical necessity. Early subtitle tools used it, and the habit spread before anyone wrote a formal specification. Some modern utilities accept a dot, and many parsers are lenient, but a comma is what other tools expect. If a file is renamed from .srt to .vtt without fixing the comma, strict WebVTT parsers can reject it.",
        "Timestamp precision matters more than it looks. Rounding to whole seconds makes cues feel late, especially for rapid dialogue. Keeping three decimal places gives you millisecond control, which is enough for frame-accurate work at common frame rates. If two cues touch at exactly the same millisecond, many players show a brief flicker; leave a small gap or merge them into one cue."
      ]
    },
    {
      heading: "There is no single official SRT specification",
      paragraphs: [
        "SRT is often described as a format with no official standard, and that description is accurate. It grew through use rather than through a committee. Different tools have added unofficial extensions: coordinates for positioning, tags for italics, and non-standard timestamp variants. A player may honour those extensions or ignore them, and both behaviours are common.",
        "The practical consequence is that a file can be valid to one tool and invalid to another. A file with <i> tags may look right in VLC and show literal angle brackets in a web player. A file with position coordinates may render correctly in one editor and as stray numbers in another. When a client asks for a guaranteed-compatible file, keep the content plain and test in the destination player.",
        "Because there is no central authority, the best test is behavioural: open the file, play the video and watch. Syntax checkers catch malformed timestamps and overlaps, while playback reveals how a specific app treats optional markup. Treat any extension outside cues and timestamps as a local convention until you confirm it on the target system."
      ]
    },
    {
      heading: "UTF-8 SRT: encoding, BOM and special characters",
      paragraphs: [
        "UTF-8 is the safest encoding for any subtitle file that contains more than basic English. It can represent Arabic, Hindi, Chinese, Japanese, Korean, Cyrillic and accented Latin text without switching code pages. Most modern editors save UTF-8 by default, but older Windows tools may still offer ANSI or a local encoding in the Save As dialog. Choose UTF-8 explicitly when the option exists.",
        "The byte-order mark is a separate decision. A BOM is an invisible signature at the start of the file. Windows Notepad has historically added one, and some players treat it as part of the first cue number or the first line of text. If a file fails only at the beginning, or if the first cue number looks wrong, save without a BOM and test again.",
        "Special characters such as curly quotes, em dashes and musical notes are fine in UTF-8, but they depend on the font used by the player. A glyph that appears in your editor may fall back to a box on a television or an older phone. For maximum portability, use straight quotes and avoid symbols that carry meaning only in a specific font."
      ]
    },
    {
      heading: "A complete SRT example",
      paragraphs: [
        "The example below is a complete, valid file. It has three cues, sequential numbers, comma-separated milliseconds and a blank line between cues. The text is deliberately plain so it can be copied into any player for a test.",
        "Notice that the file ends after the last line of dialogue. A trailing blank line is tolerated by most parsers, but extra blank lines inside a cue can split it into two. If you paste the sample into a text editor, keep the spacing exactly as shown and save with a .srt extension."
      ],
      code: {
        language: "text",
        caption: "A complete three-cue SRT file with the required blank lines.",
        content: `1
00:00:00,500 --> 00:00:03,200
Welcome to the studio tour.

2
00:00:03,600 --> 00:00:06,900
We start in the control room.

3
00:00:07,400 --> 00:00:10,100
The mixer feeds four cameras.`
      }
    },
    {
      heading: "Where SRT files are used",
      paragraphs: [
        "SRT is the default handoff format for a lot of video work. Editing software imports it, captioning agencies deliver it, and many upload forms accept it. YouTube Studio, for example, accepts subtitle files and lets creators download captions in SRT form. Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro and CapCut all have caption or subtitle import paths that read SRT.",
        "It is also common in places where a formal standard is less important than readability. A teacher can hand a student an SRT and a video file; the student can open both without a subscription. A researcher can store interview transcripts as SRT and search them as text. The same simplicity makes SRT a reasonable archive format: if the software disappears, the file is still readable.",
        "The format is less suited to styled captions, karaoke timing and precise on-screen placement. Those jobs belong to WebVTT, ASS or a platform-specific caption format. SRT remains the interchange layer: easy to generate, easy to inspect and widely understood. That is also why a plain SRT survives a change of software: the words and times remain legible even when the original app is gone."
      ]
    },
    {
      heading: "How to inspect an SRT before you send it",
      paragraphs: [
        "Before you send a file to a client or upload it to a platform, spend a minute on inspection. Open it in a plain text editor and check the first cue, the last cue and any cue with unusual characters. Then play the video with the subtitle file loaded and watch the opening minute at normal speed."
      ],
      steps: [
        "Confirm the extension is .srt, not .srt.txt.",
        "Check that every cue has a number, an arrow timestamp and at least one line of text.",
        "Look for comma separators in timestamps and a blank line between cues.",
        "Verify that accented and non-Latin characters display correctly.",
        "Run the file through the subtitle validator to catch overlaps and unreadable line lengths."
      ]
    },
    {
      heading: "How to create an SRT with VoiceToTextFree",
      paragraphs: [
        "You can create an SRT by typing one, but the faster route is to transcribe the audio and let a tool draft the cues. VoiceToTextFree runs Whisper in the browser, so the audio stays on your device. Open the [subtitle generator](/) to upload a video or audio file, choose a model, and generate a transcript with timestamps. Then review the result before exporting.",
        "Automated cues are a draft, not a final delivery. Names, numbers and overlapping speech often need correction. Use the [SRT editor](/srt-editor) to adjust text and timing, then run the [subtitle validator](/subtitle-validator) for line length and overlap warnings. The [timing editor](/subtitle-timing-editor) is useful when a whole block drifts a few seconds away from the speech."
      ],
      bullets: [
        "Transcribe with a model that fits your device and language.",
        "Correct names and punctuation before touching timing.",
        "Check reading speed, then export SRT."
      ]
    }
  ],
  faqs: [
    {
      question: "How do I export an SRT file?",
      answer:
        "Generate or open captions in your tool, then choose an export or download option and select SRT. In VoiceToTextFree, finish editing in the SRT editor and use the download button. Check the saved file in a text editor before sending it on."
    },
    {
      question: "Can I export SRT?",
      answer:
        "Yes. Most subtitle editors, video editors and caption platforms can export SRT, though the menu location varies. If a tool only offers WebVTT, convert the file and test the commas after conversion."
    },
    {
      question: "Is SRT an official standard?",
      answer:
        "No single standards body owns SRT. It is a de facto format shaped by the tools that read and write it. That is why small syntax differences survive across players and why testing in the destination app matters."
    },
    {
      question: "Why does my SRT file show numbers and commas on screen?",
      answer:
        "The player is reading the file as plain text instead of as subtitles. This usually means the extension is wrong, the file is not matched to the video, or the player does not support external subtitle tracks. Rename the extension and load the file through the player's subtitle menu."
    },
    {
      question: "What encoding should an SRT file use?",
      answer:
        "UTF-8 is the safest choice because it covers Latin, Arabic, Indic, CJK and other scripts in one file. Save without a BOM if the first cue misbehaves. If a tool forces ANSI, expect missing or garbled characters outside its code page."
    },
    {
      question: "How do I inspect what is inside an SRT file?",
      answer:
        "You can open one in a text editor or in VoiceToTextFree's browser-based editor without installing anything. A browser video player needs the subtitle file loaded through its own track support; plain SRT is not rendered automatically by every player."
    }
  ],
  workedExample: {
    title: "Worked example: a two-cue SRT for a product clip",
    intro:
      "A 20-second product clip has two spoken lines. The first starts at 1.2 seconds and the second at 8.4 seconds. Both cues use comma-separated milliseconds and a blank line as the separator.",
    srt: `1
00:00:01,200 --> 00:00:05,750
The case is made from recycled aluminium.

2
00:00:08,400 --> 00:00:12,900
It weighs less than a full water bottle.`,
    note: "The gap between 5.750 and 8.400 is intentional: the speaker pauses, and holding the first line on screen would make the pause feel sluggish."
  },
  sources: [
    {
      label: "YouTube Help — Add subtitles and captions",
      url: "https://support.google.com/youtube/answer/2734698"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    }
  ],
  relatedGuides: [
    "srt-vs-vtt",
    "what-is-a-vtt-file",
    "how-to-open-an-srt-file",
    "how-to-create-and-edit-an-srt-file"
  ],
  keywords: [
    { keyword: "what is an srt file", role: "primary" },
    { keyword: "srt file format", role: "secondary", headingLevel: 2 },
    { keyword: "utf-8 srt", role: "secondary", headingLevel: 2 },
    { keyword: "subrip subtitle", role: "synonym" },
    { keyword: "srt subtitle file", role: "synonym" },
    { keyword: "how do i export an srt file", role: "faq" },
    { keyword: "can i export srt", role: "faq" },
    { keyword: "is srt an official standard", role: "faq" },
    { keyword: "why does my srt file show numbers and commas on screen", role: "faq" },
    { keyword: "what encoding should an srt file use", role: "faq" }
  ]
};
