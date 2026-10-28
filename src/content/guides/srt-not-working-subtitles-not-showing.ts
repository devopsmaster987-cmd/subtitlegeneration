import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/srt-not-working-subtitles-not-showing",
  h1: "SRT not working? Why your subtitles are not showing",
  title: "SRT not working? Why your subtitles are not showing",
  metaDescription:
    "SRT not working? A step-by-step diagnosis for subtitles not showing: file type, filename match, encoding, timestamps, overlaps, player limits and cache.",
  primaryKeyword: "srt not working",
  capsule:
    "SRT not working usually means the player never loaded the file, not that the words are wrong. Check the extension, the filename match, the encoding, the timestamp commas and the blank lines between cues. A validator finds most of these faults in seconds, before you blame the video or the platform.",
  published: "2026-01-26",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 8,
  keyFacts: [
    { label: "Most common cause", value: "A filename mismatch, or a file the player never parsed" },
    { label: "Timestamp separator", value: "SRT uses a comma before milliseconds: 00:00:01,250" },
    { label: "Safe encoding", value: "UTF-8 without a byte-order mark" },
    { label: "Cue separator", value: "One blank line between every cue" },
    { label: "Overlaps", value: "Legal in the file, but some players display only one cue" },
    {
      label: "Fastest check",
      value: "Paste the first lines into the validator before editing anything"
    }
  ],
  sections: [
    {
      heading: "Start with the symptom: subtitles not showing",
      paragraphs: [
        "Before you edit a single cue, decide which failure you are looking at. People describe three different symptoms the same way: no subtitle track appears at all, the track appears in a menu but stays empty, or subtitles appear for a few seconds and then stop. Each points at a different part of the chain. A missing track usually means the file was rejected at load time. An empty track means the parser found the container but no usable cues. A track that stops early usually contains a malformed cue later in the file.",
        "Write down what you see on the exact device that fails. A phone, a smart TV, a browser and a desktop editor all use different subtitle engines, and a file that survives one may fail another. Then work through the checks below in order; they are arranged from the cheapest test to the most invasive."
      ],
      bullets: [
        "No track listed anywhere: suspect the extension, the container or the filename.",
        "Track listed but empty: suspect encoding or a timestamp the parser cannot read.",
        "Track starts then stops: suspect a malformed or overlapping cue later in the file.",
        "Text visible but spoken dialogue is not: suspect burned-in titles or the wrong track."
      ],
      table: {
        caption: "Symptom-to-check decision table",
        headers: ["What you see", "Most likely cause", "First check"],
        rows: [
          ["No subtitle option at all", "File not recognised", "Extension and first line"],
          ["Option present, nothing plays", "Parser found no valid cues", "Timestamp shape"],
          ["Plays for a few seconds", "Bad cue later in the file", "Cue count and line numbers"],
          ["Boxes or question marks", "Wrong text encoding", "UTF-8 save"],
          ["Works on desktop, not on TV", "Filename or player limit", "Exact base name"],
          ["Captions cannot be turned off", "Burned into the picture", "Pause and toggle"]
        ]
      }
    },
    {
      heading: "Check the file extension and the container",
      paragraphs: [
        "The extension is not decoration; many players use it to choose a parser. A file named subtitles.srt.txt, or a document saved by a word processor as .rtf with a renamed extension, is not an SRT file. Open it in a plain text editor and confirm that the first visible line is a cue number, followed by a timestamp line containing an arrow made of two hyphens and a greater-than sign. Hidden extensions are a common trap on Windows, where subtitles.srt may really be subtitles.srt.txt.",
        "If the file came from a conversion tool, check that the tool did not add a header that belongs to another format. A WEBVTT line at the top of a file named .srt is a warning sign, not a fatal one for every player, but strict parsers will reject it. Renaming a VTT file to .srt without changing dots to commas produces the same class of failure. When in doubt, paste the first thirty lines into the [subtitle validator](/subtitle-validator) and read the parser message instead of guessing."
      ],
      steps: [
        "Turn on file extensions in your file manager.",
        "Open the file in a plain text editor, not a word processor.",
        "Confirm the first line is a number and the second is a timestamp.",
        "Save a fresh copy as UTF-8 plain text if the editor offers a format choice."
      ]
    },
    {
      heading: "Match the subtitle filename to the video filename",
      paragraphs: [
        "Many players, especially TVs, set-top boxes and older desktop media players, load sidecar subtitles automatically only when the names match. If the video is interview_final.mp4, the subtitle should normally be interview_final.srt. A language suffix such as interview_final.en.srt is also widely understood, but the exact pattern varies. The safest test is to copy the video's base name exactly, including case on systems that care about case, and place both files in the same folder.",
        "Watch for invisible differences. A trailing space, a second extension, or a name copied from a messaging app can break the match. On macOS and Linux, uppercase and lowercase are different characters; on Windows they are usually not, which is why a file that works on one machine may fail on another. If the player has an explicit subtitle menu, load the file manually once to separate a naming problem from a parsing problem."
      ]
    },
    {
      heading: "Subtitle file encoding: UTF-8, Windows-1252 and vanishing characters",
      paragraphs: [
        "Encoding is the next suspect when the file is accepted but the text is unreadable. Save subtitles as UTF-8. A file written in Windows-1252 or another legacy code page can display curly quotes and accented Latin letters correctly on the machine that created it, then turn into question marks, boxes or stray sequences on another device. The timestamps are unaffected, so the file looks structurally valid while the dialogue is unusable.",
        "For Arabic, Urdu, Hindi, Chinese, Japanese and Korean, UTF-8 is effectively mandatory. A byte-order mark is a separate issue: some players tolerate it, while a few older ones treat the three invisible bytes at the start of the file as text and then fail to find the first cue number. If a file begins with a stray character before the number 1, strip the BOM and save again. Our [SRT validator](/subtitle-validator) reports the first line it cannot parse, which is often enough to spot this."
      ],
      table: {
        caption: "Encoding symptoms and what they mean",
        headers: ["What appears", "Likely encoding problem", "Action"],
        rows: [
          [
            "Question marks in place of letters",
            "Characters unsupported or misread",
            "Re-save the source as UTF-8"
          ],
          [
            "Accented letters look like a€",
            "Windows-1252 read as UTF-8",
            "Re-save from the original"
          ],
          ["A stray character before cue 1", "Byte-order mark", "Strip the BOM"],
          [
            "Arabic or Urdu reads right to left but garbled",
            "Legacy code page",
            "Re-export as UTF-8"
          ]
        ]
      }
    },
    {
      heading: "Malformed SRT timestamps and the comma-versus-dot mistake",
      paragraphs: [
        "An SRT timestamp has a fixed shape: hours, minutes, seconds, a comma, three digits for milliseconds, a space, two hyphens, a greater-than sign, another space, and an end time in the same shape. A period instead of a comma is the classic error. So is a missing millisecond field, a single hyphen, or a colon where the comma belongs. Some lenient players repair these lines silently; others discard the cue, and a discarded first cue can make the whole track look broken.",
        "Check the line endings around the arrow as well. A timestamp line that wraps because an editor inserted a newline in the middle will not parse. If you edited the file in a spreadsheet, confirm that the application did not turn the timestamps into dates or strip leading zeros. Keep the file as plain text throughout. A single malformed cue is usually visible in the validator's output as a line number, so fix that line before rewriting anything else."
      ],
      code: {
        language: "text",
        caption: "One valid cue and the two mistakes that most often break a track.",
        content: `Valid

1
00:00:02,000 --> 00:00:04,400
The gate closes at nine.

Wrong separator

2
00:00:05.100 --> 00:00:07.800
Take the side entrance instead.

Broken arrow

3
00:00:08,200 -> 00:00:10,000
The lights stay on until noon.`
      }
    },
    {
      heading: "Missing blank lines and overlapping subtitles",
      paragraphs: [
        "SRT separates cues with a blank line. If you delete those blank lines while cleaning text, two cues can merge into one block. The parser may read the second cue's number as subtitle text or reject the block entirely. The symptom is often a file that loads but shows fewer subtitles than expected. Open the file with invisible characters visible, or use a validator that counts cues, and compare that count with the number of dialogue lines you expect.",
        "Overlaps are legal in the file but not always displayable. Two cues with the same start time, or a cue that begins before the previous one ends, can cause a player to drop one of them, flicker, or show both stacked in an unreadable position. Decide whether the overlap is intentional, such as two speakers at once, and either combine the lines into one cue or separate them in time. Run the fixed file through the validator again; overlap warnings are easier to trust than a visual check on a phone."
      ]
    },
    {
      heading: "Player and platform limitations",
      paragraphs: [
        "Not every player supports every feature. A TV may read SRT but ignore styling tags; a browser may expect WebVTT for a native track element; a social platform may not accept a sidecar file at all. If a file fails only on one destination, test the same file on a known-good desktop player before editing the text. That single test separates a broken file from a destination-specific limitation.",
        "Platform menus also change. A setting labelled subtitles may control burned-in captions rather than a sidecar track, and an app may hide uploaded caption files until processing finishes. When a platform accepts only one format, convert a copy and keep the original master, so a failed upload does not cost you the only timed version."
      ]
    },
    {
      heading: "Burned-in subtitles versus a sidecar file",
      paragraphs: [
        "A burned-in subtitle is part of the picture. It cannot be turned off, moved or restyled by the player, and it will appear even when every subtitle setting is disabled. A sidecar file is separate and can be missing, misnamed or rejected. The confusion starts when someone delivers a video with captions already rendered and the recipient still looks for an .srt file that was never included.",
        "To tell them apart, pause on a frame with dialogue and toggle the subtitle button. If the text stays, it is burned in. If it disappears, the player is rendering a track. A sidecar can also be muxed into the container as an embedded track, which behaves like a track but travels inside the video file. In that case, replacing an external .srt will not change what you see; the embedded track has to be replaced or removed in the authoring tool."
      ]
    },
    {
      heading: "Clear the cache and force a fresh load",
      paragraphs: [
        "Players cache subtitle files aggressively, particularly on smart TVs and browsers. If you fixed the file but the old behaviour persists, rename the subtitle file and the video together, or clear the app's cache, then load again.",
        "Keep a dated copy of the file that worked. When a new export fails, comparing the two files line by line is faster than repeating every check. If the only difference is a timestamp separator or an encoding change, you have found the cause without touching the text. For timing faults that survive these checks, move on to [how to sync subtitles](/guides/how-to-sync-subtitles) instead of rebuilding the file."
      ]
    }
  ],
  faqs: [
    {
      question: "Why are my SRT subtitles not showing?",
      answer:
        "The player probably never parsed the file. Check the extension, the filename match, the encoding and the timestamp line before editing the words. A validator will point to the first line that fails, which is usually the real cause."
    },
    {
      question: "Does the SRT filename have to match the video?",
      answer:
        "On many TVs and older players, yes. Copy the video's base name and keep both files in the same folder. A language suffix is often accepted, but the exact pattern varies by player, so test the plain matching name first."
    },
    {
      question: "Why does my SRT file open as plain text?",
      answer:
        "A subtitle file is plain text by design, so a text editor is the right tool for inspection. If a player shows the raw file, it is not recognising the extension or the cue structure. Confirm the file is not secretly named .srt.txt and that the first cue has a valid timestamp."
    },
    {
      question: "Can one bad timestamp hide every subtitle?",
      answer:
        "It can look that way. Some players stop reading at the first malformed cue, while others skip it. Check the cue count in a validator and compare it with the number of lines you expect. A single comma written as a period is enough to trigger this."
    },
    {
      question: "Why do subtitles work on my computer but not on my TV?",
      answer:
        "The TV likely has a stricter parser or a different filename rule. Test the exact matching base name, confirm UTF-8 without a byte-order mark, and remove overlaps. If the file still fails, the TV may not support the subtitle format at all."
    },
    {
      question: "How do I know if subtitles are burned in?",
      answer:
        "Pause on a frame with dialogue and turn subtitles off. If the text remains, it is part of the picture. Burned-in captions cannot be repaired, restyled or removed by changing a sidecar file; the video has to be re-exported."
    }
  ],
  workedExample: {
    title: "Worked example: a two-cue SRT that a strict parser accepts",
    intro:
      "The file below uses UTF-8, commas before milliseconds and one blank line between cues. The second cue starts after the first ends, so there is no overlap. This is the smallest structure worth testing before you debug a longer file.",
    srt: `1
00:00:02,000 --> 00:00:04,400
The gate closes at nine.

2
00:00:05,100 --> 00:00:07,800
Take the side entrance instead.`,
    note: "If a player shows nothing for this file, the problem is the player, the filename or the delivery path, not the cue syntax."
  },
  sources: [
    {
      label: "MDN — Character encoding",
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Character_encoding"
    },
    {
      label: "YouTube Help — Add subtitles and captions",
      url: "https://support.google.com/youtube/answer/2734698"
    },
    {
      label: "OpenAI Whisper — repository and output formats",
      url: "https://github.com/openai/whisper"
    }
  ],
  relatedGuides: [
    "what-is-an-srt-file",
    "how-to-open-an-srt-file",
    "how-to-sync-subtitles",
    "subtitle-best-practices"
  ],
  keywords: [
    { keyword: "srt not working", role: "primary" },
    { keyword: "subtitles not showing", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle file encoding", role: "secondary", headingLevel: 2 },
    { keyword: "srt timestamps", role: "secondary", headingLevel: 2 },
    { keyword: "overlapping subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "why are my srt subtitles not showing", role: "faq" },
    { keyword: "does the srt filename have to match the video", role: "faq" },
    { keyword: "how do i know if subtitles are burned in", role: "faq" }
  ]
};
