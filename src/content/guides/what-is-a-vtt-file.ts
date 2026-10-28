import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/what-is-a-vtt-file",
  h1: "What is a VTT file? The WebVTT subtitle format explained",
  title: "What is a VTT file? WebVTT format, cues and browser support",
  metaDescription:
    "What is a VTT file? Learn how the WEBVTT header, dot timestamps, cue settings and the HTML5 track element work, with valid and invalid examples.",
  primaryKeyword: "what is a vtt file",
  capsule:
    "What is a VTT file? It is a WebVTT subtitle file: a plain-text format that starts with the WEBVTT header, uses a dot before milliseconds and can carry cue settings for browser video. HTML5 players load it through the track element, and the MIME type is text/vtt.",
  published: "2026-01-25",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    { label: "File extension", value: ".vtt, defined by the W3C WebVTT specification" },
    { label: "First line", value: "WEBVTT, optionally followed by a header comment" },
    { label: "Timestamp separator", value: "A dot before milliseconds: 00:00:04.250" },
    { label: "MIME type", value: "text/vtt" },
    { label: "Cue identifiers", value: "Optional; they may be words or numbers" },
    { label: "Browser loading", value: "HTML5 track element inside a video or audio element" }
  ],
  sections: [
    {
      heading: "The VTT file format compared with SRT",
      paragraphs: [
        "Both SRT and VTT hold timed subtitle text, but they make different promises. An SRT file is a loose convention. A VTT file is built to a published specification, so a browser knows exactly what each line means. That formality is why VTT appears in HTML5 video, in web accessibility audits and in players that need to position captions rather than merely display them.",
        "On the surface the two files look similar. Both list cues in time order, both store a start time, an end time and text, and both are readable in a text editor. The difference appears in the details: the header line, the millisecond separator, the role of identifiers and the presence of cue settings. A file that ignores those details may play in a forgiving desktop editor and fail in a browser."
      ],
      bullets: [
        "SRT: number, comma timestamp, text.",
        "VTT: WEBVTT header, optional identifier, dot timestamp, optional settings.",
        "VTT is the format the HTML5 track element expects."
      ]
    },
    {
      heading: "The WebVTT format: header, cues and settings",
      paragraphs: [
        "Every WebVTT file begins with the signature WEBVTT on the first line. A blank line normally follows, then the first cue. The signature tells a parser that the file is not SRT with an unusual name. Comments, regions and style blocks may appear before the first cue. If the signature is missing or preceded by a byte-order mark, a strict browser can ignore the entire track.",
        "VTT writes milliseconds after a dot, not a comma: 00:00:04.250. The arrow and spacing between the two times match the familiar SRT look. An optional cue identifier can sit on its own line above the timestamp. Unlike SRT's sequence number, this identifier is not displayed and does not need to be numeric. You can use a word such as intro or speaker-a to make the file easier to review.",
        "Cue settings follow the end timestamp on the same line. They control alignment, line position, text position, size and region. A settings list might read align:start position:10%. Browsers apply these hints; many video editors ignore them on import. Inline tags such as <b> and <i> are also defined, along with voice and language spans."
      ],
      code: {
        language: "text",
        caption: "A minimal WebVTT file with optional cue identifiers and one cue setting.",
        content: `WEBVTT

intro
00:00:00.500 --> 00:00:03.400
This is the first caption.

speaker-a
00:00:03.800 --> 00:00:07.200 align:start position:10%
The second caption sits on the left.`
      }
    },
    {
      heading: "Cue identifiers, NOTE blocks and STYLE rules",
      paragraphs: [
        "WebVTT reserves blocks for comments and styling. A NOTE block begins with NOTE and continues until a blank line. It is invisible in playback and useful for editorial notes, speaker names or conversion warnings. A STYLE block contains CSS rules that apply to cue classes, though browsers limit which properties affect captions. A REGION block defines a positioned area for cues that share placement.",
        "These blocks are the main reason a VTT file can carry information that an SRT file cannot. They also make hand-editing riskier. A missing blank line can absorb the next cue into a comment, and a stray brace in a STYLE block can break the rules that follow. When you only need plain captions, omit these blocks entirely and keep the file as close to SRT structure as the format allows.",
        "Cue identifiers are optional, and that surprises people who are used to SRT numbering. If you delete every identifier from a simple VTT file, it still plays. If you keep identifiers, make them unique within the file. Duplicate identifiers are not a parsing error, but they make debugging harder when a player logs the cue name."
      ]
    },
    {
      heading: "Browser support and the HTML5 track element",
      paragraphs: [
        "Browsers do not read VTT files through a file input by default. A web page loads a caption track with the HTML5 track element: a video element contains a track element whose kind is captions or subtitles, whose src points to the .vtt file and whose srclang names the language. The track element also supports a default attribute for the track that should start enabled.",
        "The server should send the file with the text/vtt MIME type. If it sends text/plain or application/octet-stream, some browsers still load the track, but standards-compliant behavior depends on the correct type. Cross-origin tracks add another constraint: the video page must be allowed to read the caption file, often through CORS headers.",
        "Support is broad in current versions of Chrome, Edge, Firefox and Safari, but the details differ. Styling support is partial, and cue settings are hints rather than guarantees. Test with the browser and device your audience uses, especially if captions are positioned over a busy part of the frame."
      ]
    },
    {
      heading: "Encoding and valid versus invalid examples",
      paragraphs: [
        "Encoding works the same way as other plain-text subtitles: UTF-8 is the safe default. The WEBVTT signature must be the first text a parser sees. A UTF-8 byte-order mark can appear before it, and some parsers tolerate that while others do not. If a browser refuses a file that looks correct, save without a BOM and reload.",
        "Line endings are usually forgiving. Windows CRLF and Unix LF both work in modern browsers, although consistency makes diffs and version control cleaner. Avoid tabs inside cue text; use spaces if alignment matters to you. Keep one blank line between blocks so that a NOTE or a cue does not swallow the next block.",
        "A valid cue has a timestamp line and at least one line of text. An invalid file might use a comma, omit the WEBVTT header, place text before the timestamp, or include an empty cue. The examples below show the difference. The second block is intentionally broken and should not be copied."
      ],
      code: {
        language: "text",
        caption:
          "The first cue uses a dot and parses; the second uses a comma and fails strict parsing.",
        content: `WEBVTT

00:00:01.000 --> 00:00:04.000
The door is open.

00:00:06,000 --> 00:00:09,000
The comma breaks strict parsing.`
      }
    },
    {
      heading: "Where VTT is the better choice",
      paragraphs: [
        "Choose VTT when the video will play in a browser and the player supports the track element. It is the standard path for custom HTML5 players, for some learning platforms and for sites that need captions to respond to layout. VTT is also a reasonable choice when you need comments or cue-level styling that should travel with the file.",
        "Choose SRT when the file will move between desktop editors, captioning agencies or upload forms that list SRT first. SRT is simpler and harder to break. If both are needed, keep an SRT master and generate VTT for web playback, so a browser-only feature never becomes a dependency in the editing pipeline.",
        "Do not assume that converting to VTT magically adds browser support. A player still needs a caption track, a matching language and a reachable URL. Conversion fixes syntax, not delivery."
      ]
    },
    {
      heading: "How to create a VTT with VoiceToTextFree",
      paragraphs: [
        "VoiceToTextFree can produce the text and timing, then you can download a subtitle file for the player you use. Open the [subtitle generator](/) and transcribe the clip in the browser. Review the cues in the [SRT editor](/srt-editor), fix names and line breaks, and export. If the destination is a web page, convert a copy to VTT and check the header and dot separators.",
        "After conversion, load the file in the target browser with the developer console open. A missing track, a MIME type mismatch or a CORS error is easier to diagnose there than by guessing from a blank caption area. Keep the original transcript so you can regenerate a clean file if the conversion step changes."
      ]
    },
    {
      heading: "Common mistakes when writing WebVTT",
      paragraphs: [
        "The most common mistake is a comma timestamp copied from SRT. The second is a missing WEBVTT header. The third is a blank line in the wrong place, which turns the following cue into part of a comment or a continuation. All three produce files that look plausible in a text editor and fail in a browser."
      ],
      bullets: [
        "Use a dot, not a comma, before milliseconds.",
        "Keep WEBVTT as the first visible line.",
        "Put exactly one blank line between blocks.",
        "Do not add SRT-style sequence numbers unless you understand that they become cue identifiers.",
        "Serve the file as text/vtt."
      ]
    },
    {
      heading: "Checking a file in a second browser",
      paragraphs: [
        "If a track works in one browser and fails in another, the difference is often MIME type, CORS or a byte-order mark rather than the cue text. Open the network panel and confirm that the .vtt request returned the file with the expected type. Then compare the first line of the response with a known-good file.",
        "A second browser is a cheap test, but it is not a substitute for a validator. Syntax problems and delivery problems look identical when the caption area is simply empty, so check both layers before you change the text."
      ]
    }
  ],
  faqs: [
    {
      question: "What does a VTT file do?",
      answer:
        "It supplies timed captions or subtitles to a video player, most often in a browser. The file pairs each line of text with a start and end time and can add placement or styling hints. HTML5 players read it through a caption track."
    },
    {
      question: "Can I rename an SRT file to VTT?",
      answer:
        "Not safely without editing it. A VTT file needs the WEBVTT header and a dot before milliseconds. Some players accept a renamed file, but a strict browser may reject it. Convert the syntax and test the result."
    },
    {
      question: "Does YouTube accept VTT files?",
      answer:
        "YouTube Studio accepts subtitle uploads in several formats, and VTT is commonly listed. The exact menu and limits can change, so check YouTube's current help page before a large delivery. Keep a copy of the original file either way."
    },
    {
      question: "Why is my VTT file not loading in the browser?",
      answer:
        "Check the track element's src and srclang attributes, then confirm the response uses text/vtt. A missing WEBVTT header, a BOM or a CORS block can also stop the track. The browser console usually names the failing request."
    },
    {
      question: "Is VTT the same as WebVTT?",
      answer:
        "The .vtt extension is used for WebVTT files, and the two names are often used interchangeably. The formal format is WebVTT, defined by the W3C. A file with a .vtt extension that lacks the WebVTT syntax is not a valid WebVTT file."
    },
    {
      question: "What MIME type should a VTT file use?",
      answer:
        "Serve it as text/vtt. Other types may work in lenient browsers but do not meet the specification. If you control the server, set the type explicitly rather than relying on extension detection."
    }
  ],
  workedExample: {
    title: "Worked example: the same three cues as SRT and WebVTT",
    intro:
      "A short cooking clip has three spoken lines. The SRT version uses commas and sequence numbers. The VTT version adds the header, switches to dots and drops the optional identifiers.",
    srt: `1
00:00:02,100 --> 00:00:05,400
Heat the pan before adding oil.

2
00:00:06,000 --> 00:00:09,250
Wait until the surface shimmers.

3
00:00:10,000 --> 00:00:13,800
Then add the onions in one layer.

WEBVTT

00:00:02.100 --> 00:00:05.400
Heat the pan before adding oil.

00:00:06.000 --> 00:00:09.250
Wait until the surface shimmers.

00:00:10.000 --> 00:00:13.800
Then add the onions in one layer.`,
    note: "The cue text and timings are identical. Only the header, the separators and the optional identifiers changed, which is what a correct conversion should do."
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
      label: "MDN — HTML track element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"
    }
  ],
  relatedGuides: [
    "what-is-an-srt-file",
    "srt-vs-vtt",
    "how-to-open-an-srt-file",
    "subtitle-best-practices"
  ],
  keywords: [
    { keyword: "what is a vtt file", role: "primary" },
    { keyword: "vtt file format", role: "secondary", headingLevel: 2 },
    { keyword: "webvtt format", role: "secondary", headingLevel: 2 },
    { keyword: "webvtt subtitle file", role: "synonym" },
    { keyword: "vtt caption file", role: "synonym" },
    { keyword: "what does a vtt file do", role: "faq" },
    { keyword: "can i rename an srt file to vtt", role: "faq" },
    { keyword: "why is my vtt file not loading in the browser", role: "faq" },
    { keyword: "is vtt the same as webvtt", role: "faq" },
    { keyword: "what mime type should a vtt file use", role: "faq" }
  ]
};
