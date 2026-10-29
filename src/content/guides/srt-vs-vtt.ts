import type { GuideContent } from "../types";

export const srtVsVtt: GuideContent = {
  kind: "guide",
  path: "/guides/srt-vs-vtt",
  h1: "SRT vs VTT: which subtitle format should you use?",
  title: "SRT vs VTT: which subtitle format should you use?",
  metaDescription:
    "SRT vs VTT explained with real examples: timestamp syntax, compatibility, styling and a simple decision path for video editors, YouTube and the web.",
  primaryKeyword: "srt vs vtt",
  capsule:
    "When comparing SRT vs VTT, both are plain-text subtitle formats. SRT stores numbered cues and timestamps with commas; WebVTT adds a WEBVTT header and uses dots. SRT is the safest choice for editing software and uploads, while VTT is the standard for web video and supports styling and positioning.",
  published: "2026-01-20",
  updated: "2026-10-29",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    { label: "File extensions", value: ".srt and .vtt (both UTF-8 plain text)" },
    {
      label: "Timestamp separator",
      value: "SRT uses a comma before milliseconds; WebVTT uses a dot"
    },
    { label: "Header line", value: "SRT has none; WebVTT files start with WEBVTT" },
    {
      label: "Cue numbering",
      value: "SRT requires a number above each cue; WebVTT cue identifiers are optional"
    },
    {
      label: "Styling",
      value:
        "WebVTT supports cue settings and limited inline tags; SRT only has informal inline markup"
    },
    {
      label: "Best default",
      value: "SRT for editing software and uploads; VTT for HTML5 video and the open web"
    }
  ],
  sections: [
    {
      heading: "The short answer: subtitle format comparison",
      paragraphs: [
        "If you only need one line: choose SRT when a person or a desktop editor will open the file next, and choose WebVTT when a browser will play the video. Both formats carry the same basic information — a start time, an end time and the words to display — but they grew up in different places. SRT came from the DivX and DVD-ripping world, where permissive parsers tolerated small mistakes. WebVTT was designed at the W3C for HTML5 video, with a formal syntax and features that a browser can style and position.",
        "That history explains the practical differences you will notice. An SRT file is usually just numbers, timestamps and text. A VTT file starts with a WEBVTT signature and may contain comments, regions, styling blocks and cue settings. Most video tools read SRT; most browsers read VTT natively. Many tools read both, which is why the question keeps coming up."
      ],
      table: {
        caption: "SRT and WebVTT at a glance",
        headers: ["Feature", "SRT", "WebVTT"],
        rows: [
          ["First line", "Cue number (1)", "WEBVTT"],
          ["Timestamp", "00:00:01,250 --> 00:00:03,500", "00:00:01.250 --> 00:00:03.500"],
          ["Cue identifier", "Required number", "Optional; can be text"],
          ["Position or alignment", "Not standard", "Cue settings such as align and position"],
          ["Comments", "Not defined", "NOTE blocks"],
          ["Formal specification", "No single official spec", "W3C WebVTT Recommendation"]
        ]
      }
    },
    {
      heading: "Timestamp syntax and file structure",
      paragraphs: [
        "The most common conversion bug is the millisecond separator. SRT writes 00:00:07,500 with a comma; WebVTT writes 00:00:07.500 with a period. If you rename an SRT file to .vtt without changing the commas and adding the WEBVTT header, strict players may reject it even though a lenient parser displays something. Subtitles that suddenly stop appearing after a format change usually have this problem.",
        "SRT also puts a sequence number above every cue. The numbers do not control playback order — parsers sort by timestamp — but most editors and validators expect them to be present and sequential. WebVTT allows an identifier line instead, and it can be words rather than digits. In WebVTT the identifier is not shown on screen, so you can use it to label scenes or speakers for your own workflow."
      ],
      code: {
        language: "text",
        caption: "The same two cues written as SRT and as WebVTT.",
        content: `SRT

1
00:00:01,250 --> 00:00:03,500
The train leaves at seven.

2
00:00:04,000 --> 00:00:06,200
Bring the blue folder.

WEBVTT

1
00:00:01.250 --> 00:00:03.500
The train leaves at seven.

2
00:00:04.000 --> 00:00:06.200
Bring the blue folder.`
      }
    },
    {
      heading: "Which subtitle file formats do editors and platforms accept?",
      paragraphs: [
        "Desktop editors are the strongest argument for SRT. Premiere Pro, DaVinci Resolve, Final Cut Pro and CapCut all import SRT in their normal subtitle workflows, and many of them also import VTT. If you are handing a file to a colleague who will open it in an older version of an editor, SRT is the lower-risk choice. It is also what most captioning agencies and courts still request.",
        "Browsers are the strongest argument for VTT. The HTML5 track element expects WebVTT, and Safari, Chrome and Firefox implement it natively. YouTube accepts both SRT and VTT in Studio, but its own caption editor exports SRT. TikTok and Instagram do not accept either file as a direct upload in every workflow; they often expect captions burned into the video or entered in their app. Check the current platform help page before you promise a client a file format, because menus and limits change."
      ]
    },
    {
      heading: "Styling, positioning and cue settings",
      paragraphs: [
        "SRT has no official styling model. People put <i> and <b> tags inside cues, and some players honour them, but the behaviour is not guaranteed. Positioning is even less portable: some tools understand an unofficial X1, X2, Y1, Y2 coordinate line, but the same line can appear as on-screen text in another player. If exact placement matters, SRT is the wrong container.",
        "WebVTT supports cue settings on the timestamp line, including alignment, line position, text position and size. It also defines a STYLE block and CSS-like classes, although browsers restrict which properties apply to captions. This makes VTT the better choice for a web player that needs captions near the top of the frame or left-aligned for a specific layout. The catch is that styling does not travel into most video editors, and a platform may ignore it. Treat styling as a web feature, not a universal subtitle feature."
      ]
    },
    {
      heading: "Encoding, line endings and invisible breakage",
      paragraphs: [
        "Both formats are plain text, so encoding matters more than the extension. Save as UTF-8. A file saved as Windows-1252 will turn Urdu, Arabic, Hindi, Chinese or accented European text into question marks or mojibake even if the timestamps are perfect. Some Windows tools still default to a local code page, so open the exported file in a text editor and confirm that the script looks right before uploading.",
        "Line endings are usually forgiving: CRLF from Windows and LF from macOS both work in modern players, though a few old hardware players prefer CRLF. A UTF-8 byte-order mark at the start of a VTT file can cause the WEBVTT signature to be missed, so strip the BOM if a browser refuses the file. Blank lines matter too. In both formats, a blank line separates cues; deleting them while editing by hand can merge two cues into one."
      ]
    },
    {
      heading: "Which format should I use? A decision path",
      paragraphs: [
        "Start with the destination, not with the format you like. If the file is going into a video editor, a client handoff, a DVD-style workflow or a captioning agency, export SRT. If it is going into an HTML5 player, a web accessibility review or a browser-based caption layer, export VTT. If the destination accepts both, pick SRT for maximum compatibility and convert a copy to VTT only when a web player asks for it.",
        "There are two cases where the decision is less obvious. The first is a platform that accepts both but normalises one: upload SRT if the help page lists it, then check the result on a phone. The second is a project that needs styling. Keep an SRT as the editable master and generate VTT for the web player, so a styling change never forces you to re-time the whole file."
      ],
      bullets: [
        "Editing software, client delivery, archive: SRT.",
        "HTML5 video, web player, browser captions: WebVTT.",
        "Both accepted: SRT by default; keep a VTT copy for web use.",
        "Heavy styling or positioning: keep the master in SRT and publish a styled VTT."
      ]
    },
    {
      heading: "Converting SRT to VTT and back without losing timing",
      paragraphs: [
        "A correct conversion changes the header and timestamp separator, then preserves cue text and timing exactly. SRT-to-VTT conversion is usually safe because VTT is a superset of the basic cue information. VTT-to-SRT is safe for plain cues but can lose information: cue identifiers become numbers, NOTE comments disappear, and cue settings such as align:start have no SRT equivalent. That is why a round-trip test matters. Convert a file there and back, then compare cue count and timestamps instead of assuming the files are identical.",
        "Our [SRT to VTT converter](/convert-srt-to-vtt) performs this conversion in the browser and keeps the original timing in milliseconds. For files with styling, do not treat the converted SRT as a perfect copy of the VTT. Keep the original VTT if you may need its settings again."
      ]
    },
    {
      heading: "Common SRT and VTT failures and how to spot them",
      paragraphs: [
        "A subtitle file can look correct in a text editor and still fail in a player. The fastest diagnosis is to check four things in order: the header, the timestamp separator, the blank lines between cues and the text encoding. If the player shows nothing at all, suspect the header or the extension. If it shows the first cue and then stops, suspect a malformed later timestamp. If it shows commas or numbers on screen, the player is reading the file as plain text rather than as subtitles.",
        "Overlapping cues are a different class of problem. SRT and VTT both allow overlapping times in the file, but many players display only one cue at a time. Two speakers talking over each other therefore need either a combined cue or a deliberate positioning strategy. Run the file through our [subtitle validator](/subtitle-validator) to catch overlaps, long lines and reading-speed problems before upload."
      ]
    }
  ],
  faqs: [
    {
      question: "Which subtitle format should I use?",
      answer:
        "Use SRT for video editors, client handoffs and uploads that accept it. Use WebVTT for HTML5 video and web players. If a platform accepts both, SRT is the more portable master and VTT is the better publishing copy for the browser."
    },
    {
      question: "Is VTT better than SRT?",
      answer:
        "Neither is universally better. VTT has a formal specification, cue settings and a web-native player, but it is less consistently supported by older editing software. SRT is simpler and more widely imported. Choose by destination rather than by age."
    },
    {
      question: "For YouTube, is SRT or VTT the better upload?",
      answer:
        "YouTube Studio accepts subtitle files including SRT and VTT, but the upload menu and supported formats can change. Check YouTube's current help page before a large delivery, and keep an SRT master because YouTube's caption editor uses SRT for downloads."
    },
    {
      question: "Can SRT files contain styling?",
      answer:
        "SRT has no official styling specification. Some players honour simple tags such as <i> and <b>, and some understand unofficial position coordinates, but support varies. For reliable styling or placement, use WebVTT and test in the target player."
    },
    {
      question: "Why does SRT use a comma in timestamps?",
      answer:
        "The comma is part of the de facto SRT syntax that grew from early subtitle tools. WebVTT chose a dot as part of its W3C specification. The values mean the same thing, but strict parsers expect the separator that belongs to the format."
    },
    {
      question: "Can I convert SRT to VTT without losing formatting?",
      answer:
        "Basic cues convert cleanly because both formats store start time, end time and text. Information that exists only in VTT, such as NOTE comments or cue settings, is lost when converting to SRT. Keep the original VTT if those features matter."
    }
  ],
  workedExample: {
    title: "Worked example: a three-cue SRT and its VTT equivalent",
    intro:
      "Here is a short interview clip at 25 frames per second. The speaker says the first line at 1.25 seconds. The SRT below is valid as written; the VTT version changes only the header and the millisecond separators.",
    srt: `1
00:00:01,250 --> 00:00:03,500
I started editing in 2019.

2
00:00:04,000 --> 00:00:07,800
The first cut was four minutes long.

3
00:00:08,200 --> 00:00:11,000
Then I removed the intro.

WEBVTT

00:00:01.250 --> 00:00:03.500
I started editing in 2019.

00:00:04.000 --> 00:00:07.800
The first cut was four minutes long.

00:00:08.200 --> 00:00:11.000
Then I removed the intro.`,
    note: "The VTT version omits cue numbers because they are optional in WebVTT. Both files keep the same seven milliseconds and the same cue order."
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
      label: "YouTube Help — Add subtitles and captions",
      url: "https://support.google.com/youtube/answer/2734698"
    }
  ],
  relatedGuides: [
    "what-is-an-srt-file",
    "what-is-a-vtt-file",
    "subtitle-best-practices",
    "how-to-sync-subtitles"
  ],
  keywords: [
    { keyword: "srt vs vtt", role: "primary" },
    { keyword: "srt vs vtt difference", role: "synonym" },
    { keyword: "subtitle file formats", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle format comparison", role: "secondary", headingLevel: 2 },
    { keyword: "which subtitle format should i use", role: "faq" }
  ]
};
