import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/subtitle-glossary",
  h1: "Subtitle glossary: 46 terms for captions, timing and delivery",
  title: "Subtitle glossary: 46 terms for captions, timing and delivery",
  metaDescription:
    "A subtitle glossary of 46 captioning terms: cue, timecode, CPS, CPL, SDH, sidecar, burn-in, SRT, WebVTT, TTML and more, defined in plain language.",
  primaryKeyword: "subtitle glossary",
  capsule:
    "A subtitle glossary is a working reference for the words captioners use every day: cue, timecode, CPS, SDH, sidecar, burn-in and more. This guide defines more than forty terms in original language, groups them by format, timing, accessibility and workflow, and shows how the vocabulary maps to real files you will open in an editor or player.",
  published: "2026-02-04",
  updated: "2026-10-29",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Terms defined",
      value: "46 entries across format, timing, accessibility and workflow"
    },
    {
      label: "Timing units",
      value: "Timecode counts frames; subtitle files usually store milliseconds"
    },
    {
      label: "Reading measures",
      value: "CPS counts characters per second; CPL counts characters per line"
    },
    {
      label: "Accessibility",
      value: "SDH adds non-speech information; audio description serves blind viewers"
    },
    {
      label: "File models",
      value: "Sidecar files travel separately; burn-in is rendered into the picture"
    },
    {
      label: "Encoding",
      value: "UTF-8 without a BOM is a reliable default for subtitle text"
    }
  ],
  sections: [
    {
      heading: "Subtitle terminology: how the terms fit together",
      paragraphs: [
        "Subtitle vocabulary mixes file-format names, broadcast conventions, accessibility practice and informal shorthand. The same word can mean different things in different rooms: a producer may say caption when they mean a same-language track, while a translator may say subtitle for a translated track. A useful reference does not pretend those usages are identical. It gives each term a clear working definition and notes where context changes the meaning.",
        "The terms also arrive in layers. At the bottom are the container and file formats: SRT, WebVTT, TTML and ASS/SSA. Above them sit timing concepts such as cue, timecode, frame rate and reading speed. Accessibility adds SDH, closed captions, open captions and audio description. Production adds transcription, diarization, sidecar delivery, burn-in and archiving. Learning the layers separately makes a technical conversation much easier to follow.",
        "Use the definitions as a shared vocabulary, not as a substitute for the specification you are delivering against. When a client says a file must be 'broadcast compliant' or 'SDH ready', ask which document and which language guide they mean. The words are a starting point for that question."
      ]
    },
    {
      heading: "Subtitle formats explained: SRT, WebVTT, TTML and ASS",
      paragraphs: [
        "SRT is the common plain-text format: numbered cues, timestamps with a comma before milliseconds, and text. WebVTT is the W3C format for web video, with a WEBVTT header, timestamps that use a dot, and optional cue settings for alignment and position. VTT is usually shorthand for WebVTT or its .vtt extension, though people sometimes use it loosely for any web caption file. TTML is an XML family used in broadcast and streaming pipelines, and ASS/SSA is a script-based format with styling and effects that remains common in anime and fansub workflows.",
        "A sidecar file travels beside the video and can be switched on, styled or replaced. A burn-in is rendered into the picture and cannot be turned off. Hardsub and softsub describe those two states, although the words are informal and sometimes refer to how a release was assembled rather than to a formal specification. Muxing combines video, audio and subtitle streams into one container; it does not automatically make the subtitles selectable.",
        "Character encoding is a separate layer from the subtitle format. UTF-8 can represent the scripts most productions need, while a BOM at the start of a file can confuse a parser that expects the first characters to be WEBVTT. If a file opens in a text editor but shows nothing in a player, check the header, the timestamp separator and the encoding before rewriting the cues."
      ]
    },
    {
      heading: "Subtitle timing terms: timecode, frame rate, CPS and gaps",
      paragraphs: [
        "A cue is one timed event: an in-point, an out-point and the text between them. Timecode labels a position in the programme, often as hours, minutes, seconds and frames. Frame rate determines how long one frame lasts, so a timecode in frames and a subtitle file in milliseconds are two views of the same timeline. Drop-frame timecode skips selected frame numbers to stay aligned with real time at rates such as 29.97 fps; non-drop-frame timecode counts every frame and gradually diverges from the clock. The fractional rate 23.976 fps is 24000/1001, a common film-origin rate.",
        "Reading speed is usually expressed as characters per second, or CPS: the number of characters in a cue divided by its duration in seconds. Characters per line, or CPL, measures width instead of pace. Minimum duration and maximum duration bound how briefly or how long a cue may appear. A gap is the space between one cue and the next; an overlap is the opposite, where two cues share time. Overlaps can be deliberate for simultaneous speakers, but they are often a sign that a timing edit went wrong.",
        "A line break is a manual newline inside a cue, not the automatic wrapping a player performs. Manual breaks are useful when they follow the grammar, and harmful when they split a name or a unit. Cue timing and text layout are related but distinct: a cue can fit the character limit and still be unreadable because the break lands in the wrong place."
      ]
    },
    {
      heading: "Accessibility caption terms: SDH, WCAG and audio description",
      paragraphs: [
        "A subtitle usually carries dialogue, often as a translation. A caption usually represents the audio more fully, including speaker labels and meaningful sounds; the distinction is a convention rather than a strict technical rule, and usage varies by country and platform. A closed caption can be switched on or off, while an open caption is always visible, either burned in or delivered as a track the viewer cannot disable. SDH means subtitles for Deaf and hard-of-hearing viewers and typically includes non-speech information that ordinary subtitles omit.",
        "A forced subtitle appears for foreign dialogue or essential on-screen text even when the main subtitle track is off. Some pipelines call this a forced narrative. Audio description is a separate narrated track that describes important visual action for viewers who are blind or have low vision. WCAG is the W3C's Web Content Accessibility Guidelines; its success criteria include captions for prerecorded and live media, and audio description for video.",
        "These terms describe different jobs, and a single file rarely does all of them. A translated subtitle track is not automatically an SDH track, and an SDH track is not automatically audio description. Asking which audience the deliverable serves is more useful than arguing about the label."
      ]
    },
    {
      heading: "Captioning workflow terms: sidecar, burn-in, muxing and archive",
      paragraphs: [
        "Automatic speech recognition, or ASR, turns audio into text and often supplies timestamps. Diarization goes further by partitioning the audio by speaker, which helps a reviewer assign speaker labels. A transcript is the text of what was said, usually without cue timing, though it may carry timestamps or speaker names. A speaker label identifies who is talking when the picture does not make it obvious.",
        "Word-level timing attaches start and end times to individual words, enabling karaoke highlighting and precise alignment. Caption display styles have their own names: pop-on cues appear as complete blocks, paint-on cues reveal words progressively, roll-up cues scroll upward as new lines arrive, and karaoke captions highlight words in time with the audio. The first two are common in pre-recorded work; the live styles favour different production tools.",
        "Delivery terms describe where the text lives. A sidecar file is separate from the video; a burn-in is part of the image; muxing puts streams into one container; encoding converts text or media into a coded representation. Archiving is not a format term, but it belongs in the vocabulary because a project without a master file and a transcript is difficult to revise."
      ]
    },
    {
      heading: "Quick reference: 46 terms defined",
      paragraphs: [
        "The table below is the compact reference. Read a definition in the context of the section above it, because several terms have a narrow technical meaning and a broader everyday one. Where a platform or style guide defines a term differently, the delivery document wins for that project."
      ],
      table: {
        caption: "Working definitions for subtitle and captioning terms",
        headers: ["Term", "Definition"],
        rows: [
          [
            "cue",
            "A single timed subtitle event: an in-point, an out-point and the text shown between them."
          ],
          [
            "timecode",
            "A label for a position in a video, usually hours:minutes:seconds:frames, or with a semicolon before frames for drop-frame counting."
          ],
          [
            "frame rate",
            "The number of video frames per second. It sets the length of one frame and therefore how timecode maps to milliseconds."
          ],
          [
            "CPS",
            "Characters per second: the number of characters in a cue divided by its duration in seconds, used as a reading-speed check."
          ],
          [
            "CPL",
            "Characters per line: the number of characters on one displayed line, a common width limit in subtitle style guides."
          ],
          [
            "SDH",
            "Subtitles for Deaf and hard-of-hearing viewers, including dialogue plus meaningful non-speech sounds and speaker information."
          ],
          [
            "forced subtitle",
            "A subtitle shown for foreign dialogue or on-screen text even when the viewer has subtitles switched off; also called a forced narrative in some workflows."
          ],
          [
            "burn-in",
            "Rendering subtitle text permanently into the video frames so it cannot be switched off."
          ],
          [
            "sidecar",
            "A separate subtitle file delivered beside the video, such as an .srt or .vtt file, rather than being rendered into the picture."
          ],
          [
            "SRT",
            "SubRip Text, a plain-text subtitle format with numbered cues, comma-separated millisecond timestamps and cue text."
          ],
          [
            "WebVTT",
            "The W3C Web Video Text Tracks format, a plain-text format for web video with a WEBVTT header, dot-separated timestamps and optional cue settings."
          ],
          [
            "VTT",
            "A common shorthand for WebVTT and the .vtt file extension; formally WebVTT is the format name."
          ],
          [
            "ASS/SSA",
            "Advanced SubStation Alpha and SubStation Alpha, script-based subtitle formats that support styling, positioning and effects; common in fansubbing workflows."
          ],
          [
            "TTML",
            "Timed Text Markup Language, an XML-based family of subtitle and caption formats used in broadcast and streaming delivery."
          ],
          [
            "closed caption",
            "A caption track that can be switched on or off by the viewer; the term often implies same-language captions that include non-speech information."
          ],
          [
            "open caption",
            "Caption text that is always visible, either burned into the picture or delivered as an open track that cannot be turned off."
          ],
          [
            "subtitle",
            "Text that conveys dialogue, usually as a translation or transcription timed to the audio; usage varies by region and platform."
          ],
          [
            "caption",
            "Text that represents the audio, often including speaker labels and meaningful sounds; frequently used for same-language accessibility."
          ],
          [
            "transcript",
            "The spoken content written as text, usually without cue timing, although it may include timestamps or speaker names."
          ],
          [
            "speaker label",
            "A short identifier, such as [Maya] or MAYA:, that tells the viewer who is speaking when the picture does not make it clear."
          ],
          [
            "reading speed",
            "How quickly a viewer must read a cue, often estimated as characters per second; it depends on text length and duration."
          ],
          [
            "minimum duration",
            "The shortest time a cue is allowed to remain on screen, set by a style guide, platform or project convention."
          ],
          [
            "maximum duration",
            "The longest time a cue may remain on screen before it is split, shortened or re-timed."
          ],
          [
            "overlap",
            "A condition where two cues occupy the same time range. It can be intentional for dual speakers but often signals a timing error."
          ],
          [
            "gap",
            "The interval between one cue's out-point and the next cue's in-point, used to make a change visible."
          ],
          [
            "line break",
            "A manual newline inside a cue that controls where the displayed text wraps."
          ],
          [
            "roll-up caption",
            "A live caption style in which new lines appear at the bottom and previous lines scroll upward."
          ],
          [
            "pop-on caption",
            "A caption style in which a complete cue appears at once, stays for a set time and is replaced by the next cue."
          ],
          [
            "paint-on caption",
            "A live caption style in which words are revealed progressively as they are spoken."
          ],
          [
            "karaoke caption",
            "A caption style that highlights words in time with sung or spoken audio, usually relying on word-level timing."
          ],
          [
            "word-level timing",
            "Start and end times attached to individual words rather than only to a whole cue."
          ],
          [
            "alignment",
            "The horizontal or vertical placement and justification of caption text, or the anchor used by a cue setting."
          ],
          [
            "safe area",
            "The part of the frame kept clear of critical content so text is not clipped by different screens or overscan."
          ],
          [
            "hardsub",
            "Subtitles that are burned into the video image; the viewer cannot turn them off or change their appearance."
          ],
          [
            "softsub",
            "Subtitles stored as a separate, selectable track or sidecar file rather than rendered into the picture."
          ],
          [
            "muxing",
            "Multiplexing: combining video, audio and subtitle streams into a single container file."
          ],
          [
            "encoding",
            "Converting text or media into a defined coded representation; for subtitle files, the character encoding determines how bytes map to letters."
          ],
          [
            "UTF-8",
            "A variable-width Unicode character encoding that covers most of the world's scripts and is the usual default for subtitle text."
          ],
          [
            "BOM",
            "Byte order mark, an invisible U+FEFF character at the start of a file; in some players it can prevent a WEBVTT header from being recognised."
          ],
          [
            "drop frame",
            "A timecode counting method that skips certain frame numbers to keep timecode aligned with real time at rates such as 29.97 fps; it does not remove actual video frames."
          ],
          [
            "non-drop frame",
            "A timecode counting method that numbers every frame without skipping; at 29.97 fps it gradually differs from wall-clock time."
          ],
          [
            "23.976",
            "A fractional frame rate of 24000/1001, approximately 23.976 fps, common in film-origin material transferred for television."
          ],
          [
            "audio description",
            "A narrated track that describes important visual action for viewers who are blind or have low vision."
          ],
          [
            "WCAG",
            "The Web Content Accessibility Guidelines from the W3C, which include success criteria for captions and audio description."
          ],
          [
            "ASR",
            "Automatic speech recognition: software that converts spoken audio into text, often with timestamps."
          ],
          [
            "diarization",
            "The process of partitioning audio by speaker so a transcript or caption track can identify who spoke when."
          ]
        ]
      }
    },
    {
      heading: "How to read a definition without over-generalising",
      paragraphs: [
        "A definition describes a concept; it does not supply the number your platform expects. For example, CPS is a measurement, not a universal ceiling, and minimum duration is a setting that changes by guide and by language. The same is true of line length: CPL is a count, while the limit depends on the destination and the script. Use the term to ask a precise question, then consult the relevant specification or test in the player.",
        "Be equally careful with format names. SRT and WebVTT are often described as interchangeable because both carry timed text, but their syntax differs in small ways that matter to strict parsers. A file renamed from .srt to .vtt is not automatically a WebVTT file. Likewise, a softsub release is not simply a video with subtitles; it implies a selectable track or sidecar that a player can handle."
      ]
    },
    {
      heading: "Using the vocabulary in a real review",
      paragraphs: [
        "When you open a file, name what you are looking at before you change it. Is this a cue with a malformed timestamp, an overlap between two cues, or a line break in the wrong place? Is the problem the character encoding, the header, or the player's rendering? A shared vocabulary turns a vague complaint into a checkable defect.",
        "A practical review uses only a few terms at a time: cue, timecode, CPS, CPL, gap, overlap and speaker label cover most structural problems. Check the timing first, then the text, then the layout. The [subtitle validator](/subtitle-validator) can flag structural issues, the [SRT editor](/srt-editor) lets you inspect and repair cues, and the guides to [subtitle reading speed](/guides/subtitle-reading-speed) and [subtitle line length](/guides/subtitle-line-length) explain the limits you are applying. Start from the [VoiceToTextFree home page](/) if you need a first transcript."
      ]
    }
  ],
  faqs: [
    {
      question: "What is the difference between a subtitle and a caption?",
      answer:
        "A subtitle usually conveys dialogue, often as a translation, while a caption usually represents the audio more fully, including speaker labels and meaningful sounds. The distinction is conventional rather than strictly technical, and usage varies by platform and region. In accessibility work, caption is the broader term for same-language text that includes non-speech information."
    },
    {
      question: "What does CPS mean?",
      answer:
        "CPS stands for characters per second. It is calculated by dividing the number of characters in a cue by its duration in seconds and is used as a reading-speed check. A high CPS value means the viewer has less time per character, even if the cue stays on screen for several seconds."
    },
    {
      question: "Why do people say VTT instead of WebVTT?",
      answer:
        "VTT is commonly used as shorthand for WebVTT and for the .vtt file extension. WebVTT is the formal name of the W3C format, which has a WEBVTT header, dot-separated timestamps and optional cue settings. Calling a file VTT is usually understood, but the precise term is WebVTT."
    },
    {
      question: "What is the difference between hardsub and softsub?",
      answer:
        "Hardsub means the text is burned into the video image, so it is always visible and cannot be changed. Softsub means the subtitles are stored as a separate selectable track or sidecar file. Softsubs are easier to edit and translate, while hardsubs guarantee that the text appears in every player."
    },
    {
      question: "Why does a BOM break a subtitle file?",
      answer:
        "A BOM is an invisible U+FEFF character at the start of a file. Some parsers expect the first characters of a WebVTT file to be WEBVTT, and the BOM can prevent that match. Saving the file as UTF-8 without a BOM is the usual fix when a player rejects an otherwise valid file."
    },
    {
      question: "What is the difference between SDH and closed captions?",
      answer:
        "SDH is a kind of captioning designed for Deaf and hard-of-hearing viewers, typically including meaningful sounds and speaker information. Closed captions are captions that can be switched on or off, and they often overlap with SDH in purpose. The labels are not perfectly interchangeable, so check what the delivery specification expects."
    }
  ],
  workedExample: {
    title: "Worked example: reading a short file in glossary terms",
    intro:
      "This illustrative excerpt is not a platform template. Cue 1 is a pop-on cue with a speaker label. Cue 2 is a short SDH-style sound description. At 25 fps, one frame lasts 40 ms, and the 200 ms gap between the cues is five frames.",
    srt: `1
00:00:02,000 --> 00:00:04,200
MAYA: The file is ready.

2
00:00:04,400 --> 00:00:06,800
[printer starts]`,
    note: "Cue 1 lasts 2.2 seconds and contains about 24 characters, so its reading speed is roughly 11 CPS. Cue 2 is a non-speech event, not dialogue. The cues do not overlap, and the gap is deliberate. These calculations describe this example only; they are not a universal timing or reading-speed target."
  },
  sources: [
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "W3C WAI — WCAG 2.2",
      url: "https://www.w3.org/TR/WCAG22/"
    },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    }
  ],
  relatedGuides: [
    "what-is-an-srt-file",
    "what-is-a-vtt-file",
    "closed-captions-vs-subtitles",
    "subtitle-best-practices"
  ],
  keywords: [
    { keyword: "subtitle glossary", role: "primary" },
    { keyword: "subtitle terminology", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle formats explained", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle timing terms", role: "secondary", headingLevel: 2 },
    { keyword: "accessibility caption terms", role: "secondary", headingLevel: 2 },
    { keyword: "captioning workflow terms", role: "secondary", headingLevel: 2 },
    { keyword: "captioning glossary", role: "synonym" },
    { keyword: "What is the difference between a subtitle and a caption?", role: "faq" },
    { keyword: "What does CPS mean?", role: "faq" }
  ]
};
