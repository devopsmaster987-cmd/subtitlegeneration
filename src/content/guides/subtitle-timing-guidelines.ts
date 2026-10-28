import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/subtitle-timing-guidelines",
  h1: "Subtitle timing guidelines: duration, gaps and cue length",
  title: "Subtitle timing guidelines: duration, gaps and cue length",
  metaDescription:
    "Subtitle timing guidelines for editors: practical duration ranges, cue length, gaps, shot changes, frame-rate rounding, sync and lead-in, with a scenario table.",
  primaryKeyword: "subtitle timing guidelines",
  capsule:
    "Subtitle timing guidelines are ranges, not universal laws: keep most cues between roughly one and seven seconds, leave a small gap between events, and check duration against reading speed. Platform, broadcaster and language conventions differ. This guide covers minimums, maximums, gap rules, shot changes, frame-rate rounding, sync, lead-in and lead-out with a scenario table.",
  published: "2026-01-27",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Working range",
      value: "Roughly 1–7 seconds per cue, with platform rules taking precedence"
    },
    {
      label: "Published example",
      value: "Netflix specifies a 5/6 second minimum and a 7 second maximum"
    },
    { label: "Gaps", value: "Small gap where the audio allows; avoid accidental overlap" },
    { label: "Reading speed", value: "Length and duration must be checked together" },
    {
      label: "Frame rates",
      value: "Convert frames to milliseconds carefully at 23.976, 24, 25 and 30 fps"
    },
    {
      label: "Shot changes",
      value: "Prefer a cut at a visual boundary when it does not break sync"
    }
  ],
  sections: [
    {
      heading: "Why timing is a range, not a universal rule",
      paragraphs: [
        "A timing rule that works on one service can fail on another. Broadcasters, streaming platforms, film festivals and classroom players publish different limits, and some accept a file that another rejects. Language matters too: a line that is comfortable in German may be dense in Japanese, and character-based scripts change how much text fits in a glance. Treat any single number as a starting point, then check the delivery specification for the destination.",
        "The useful approach is a working range plus a reading test. Many editors keep cues somewhere between one and seven seconds, avoid cues that flash by too quickly to register, and avoid leaving text on screen after the thought has ended. Those habits are sensible, but they are conventions rather than a global standard. When a platform publishes its own limits, that document wins. When it does not, use the range, check reading speed, and review the result in the target player."
      ]
    },
    {
      heading: "Subtitle duration: minimums, maximums and the one-to-seven-second range",
      paragraphs: [
        "Duration is the time between the in-point and the out-point of a cue. A minimum keeps the caption from flashing, and a maximum keeps stale text from sitting over a new shot. Netflix's published style guide, for example, sets a minimum of five-sixths of a second and a maximum of seven seconds per subtitle event. That is a Netflix delivery rule, not a standard for every platform, but it shows why both ends of the range matter.",
        "Short cues are not automatically wrong. A one-word answer or a short exclamation can sit near the low end if the reading speed is comfortable and the sound is brief. Long cues are harder to defend: if a sentence needs more than seven seconds, the usual fix is to split it at a clause boundary or shorten the wording. Extending a cue into silence does not make dense text easier to read; it only makes the caption feel detached from the audio."
      ]
    },
    {
      heading: "Subtitle cue length: words, characters and the two-line limit",
      paragraphs: [
        "Cue length is the amount of text the viewer must read, and it interacts directly with duration. A two-line cue with short words may read faster than a one-line cue with a technical term. Count characters rather than words when you compare cues, because character count tracks the visual load more closely. Keep the block to two lines, and treat a third line as a signal that the cue should be split or rewritten. [Subtitle line length](/guides/subtitle-line-length) covers the layout side in more detail.",
        "A useful test is to read the cue aloud at the pace of the scene. If you stumble, the viewer will too. Dense noun stacks, long numbers and repeated names are common culprits. Replace a phrase with a shorter equivalent, move a subordinate clause into the next cue, or let a pause carry part of the meaning. Do not solve a length problem with a smaller font; that trades one readability problem for another and may not survive the player's own rendering."
      ]
    },
    {
      heading: "Subtitle reading speed and the duration trade-off",
      paragraphs: [
        "Reading speed is usually expressed as characters per second, and it is the most direct check on whether a duration is honest. A cue can meet a minimum duration and still be too fast because it contains too many characters. Reading speed also varies by language, audience and context; children's programmes and technical lectures do not make the same demands. Our guide to [subtitle reading speed](/guides/subtitle-reading-speed) explains how to measure it, and the [reading speed checker](/subtitle-reading-speed-checker) flags cues that exceed a chosen target.",
        "When a cue is too fast, you have two levers: shorten the text or extend the duration. Extending is safer only when the audio still supports the cue and the next cue does not collide. Shortening is usually better because it preserves sync and reduces the visual load. If both options fail, split the cue at a clause boundary and accept a slightly earlier in-point for the second half. The goal is a readable cue that still feels attached to the voice, not a mathematically perfect duration."
      ]
    },
    {
      heading: "Gaps and shot changes: giving the eye a clean cut",
      paragraphs: [
        "A small gap between cues helps the viewer see that one thought has ended and another has begun. The gap does not need to be long; a few frames or around a tenth of a second often works when the audio allows it. Do not invent a gap by cutting off the end of a spoken phrase, and do not leave a gap so large that the caption arrives noticeably after the voice. If two speakers overlap, decide whether to combine them in one cue or use separate positions, then test the result.",
        "Shot changes are a special case. A cue that spans a hard cut can feel as if the text belongs to the wrong image, especially when the new shot has a different speaker or location. Moving the cue boundary to the cut often makes the sequence easier to follow. The exception is a sentence that would become unreadable if split at that exact frame; in that case, keep the meaning intact and accept the cut. Timing serves comprehension, not the edit timeline."
      ]
    },
    {
      heading: "Frame rate rounding and millisecond precision",
      paragraphs: [
        "Editing software often displays timecode in frames while subtitle files store milliseconds. At 24 fps one frame lasts about 41.7 ms, at 25 fps it lasts 40 ms, and at 30 fps it lasts about 33.3 ms. Converting a frame count to milliseconds is simple, but rounding each cue independently can make a sequence drift by a few milliseconds. That drift is usually invisible in a short clip and obvious in a feature-length file with hundreds of cues.",
        "Choose one conversion method and apply it to the whole file. If the player accepts frame-based formats, keep the frame values until the final export. If you must deliver SRT, write milliseconds consistently and check the first, middle and last cues against the picture. Fractional rates such as 23.976 fps need the same care; treat them as their own rate rather than rounding them to 24. A short test export catches more rounding problems than a long calculation."
      ]
    },
    {
      heading: "Sync, lead-in and lead-out",
      paragraphs: [
        "Sync is the relationship between the caption and the sound. A cue should normally appear as the words begin, not several seconds earlier, and it should clear when the thought ends. A small lead-in can help when the speaker starts abruptly, but a caption that appears before the viewer hears anything can feel like a spoiler. A short lead-out can help the eye finish, but it should not leave text hanging over a new scene or a silent pause.",
        "For long files, check for drift rather than only checking the first cue. A constant offset suggests the whole track needs shifting; a growing offset suggests a frame-rate mismatch or a conversion error. Our guide to [syncing subtitles](/guides/how-to-sync-subtitles) walks through both cases. If the source already has captions, compare a few known lines at the start, middle and end before you adjust anything, so you do not fix one section and break another."
      ]
    },
    {
      heading: "Timing scenarios at a glance",
      paragraphs: [
        "The table below gives starting points, not mandates. Use it to choose a first pass, then check the platform specification and the reading speed. A scenario that feels obvious in one language may need a different balance in another, especially when the script is character-based or the dialogue is very fast.",
        "Before delivery, watch the whole sequence at normal speed and then spot-check the busiest section frame by frame. Look for cues that arrive late, cues that overlap unintentionally, and cues that stay on screen after the speaker has stopped. Run the file through our [subtitle validator](/subtitle-validator) to catch structural problems, then confirm the timing in the player your audience will actually use. A clean table is no substitute for a final viewing."
      ],
      table: {
        caption: "Timing scenarios and practical starting points",
        headers: ["Scenario", "Starting point", "What to check"],
        rows: [
          [
            "Short exclamation or one-word answer",
            "About 1 second, or as long as the sound",
            "Does the cue disappear after the voice?"
          ],
          [
            "Ordinary sentence",
            "2–4 seconds within a 1–7 second working range",
            "Reading speed and clause boundary"
          ],
          [
            "Dense technical line",
            "Shorten or split; do not push past the platform maximum",
            "Characters per second"
          ],
          [
            "Rapid dialogue exchange",
            "Shorter cues with small gaps",
            "Overlap and speaker changes"
          ],
          [
            "On-screen sign or title",
            "Match the time the text is legible on screen",
            "Do not duplicate dialogue"
          ],
          ["Song lyric", "Follow the phrase, not the beat", "Meaning and readability"],
          [
            "Cue across a shot change",
            "Move the cut to the shot boundary if possible",
            "Distraction and sync"
          ],
          [
            "Long pause in speech",
            "End the cue when the thought ends",
            "Do not leave text over silence"
          ]
        ]
      }
    }
  ],
  faqs: [
    {
      question: "What is the minimum subtitle duration?",
      answer:
        "There is no universal minimum, but many style guides avoid cues shorter than about one second. Netflix's published rule uses five-sixths of a second for its own deliveries. A very short cue can still work if the text is brief and the reading speed is comfortable."
    },
    {
      question: "What is the maximum subtitle duration?",
      answer:
        "Seven seconds is a common ceiling, and Netflix specifies that maximum for its deliveries. A cue that needs longer usually contains too much text or covers a pause that should be silent. Split the thought or shorten the wording rather than leaving a caption on screen indefinitely."
    },
    {
      question: "Should subtitles have gaps between cues?",
      answer:
        "A small gap helps the viewer register a change of cue, but it should not cut off speech. A few frames are often enough when the audio allows. Avoid long gaps that make the caption arrive after the voice, and avoid accidental overlaps that make two cues compete."
    },
    {
      question: "Do subtitles need to avoid shot changes?",
      answer:
        "Avoiding a hard cut is a useful habit, not an absolute rule. A cue that spans a cut can feel attached to the wrong image, so moving the boundary often helps. If splitting at the cut would break a sentence, keep the meaning intact and accept the visual transition."
    },
    {
      question: "How do frame rates affect subtitle timing?",
      answer:
        "Frame-based editors and millisecond-based subtitle files use different units. At 24 fps one frame is about 41.7 ms, while at 25 fps it is 40 ms. Convert consistently across the whole file and check the final cues, because small rounding differences can accumulate."
    },
    {
      question: "Should subtitles appear before the speaker starts?",
      answer:
        "Only by a very small amount, if at all. A slight lead-in can help when speech begins abruptly, but an early caption can reveal a line before it is heard. Match the in-point to the voice and use the out-point to let the viewer finish reading."
    }
  ],
  workedExample: {
    title: "Worked example: four cues with deliberate gaps",
    intro:
      "This short station scene runs at 25 frames per second. The first cue lasts 2.2 seconds, the second lasts 1.5 seconds, and a 300 ms gap separates them so the change is visible. The third cue carries a two-line sentence for 2.8 seconds, and the final sound description is short because the sound itself is short.",
    srt: `1
00:00:02,000 --> 00:00:04,200
The first train leaves at six.

2
00:00:04,500 --> 00:00:06,000
Bring the blue folder.

3
00:00:08,000 --> 00:00:10,800
We will meet the client
at the station.

4
00:00:11,000 --> 00:00:13,500
[announcement chimes]`,
    note: "The 300 ms gap after cue 1 is a deliberate choice, not a universal rule. Cue 3 stays within the working range and leaves a 200 ms gap before the sound description. The sound cue is timed to the chime rather than to a fixed duration, because the audio itself tells the viewer when the event ends."
  },
  sources: [
    {
      label: "Netflix Partner Help — Timed Text Style Guide: General Requirements",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617-Timed-Text-Style-Guide-General-Requirements"
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
    "subtitle-reading-speed",
    "subtitle-line-length",
    "netflix-subtitle-guidelines",
    "how-to-sync-subtitles"
  ],
  keywords: [
    { keyword: "subtitle timing guidelines", role: "primary" },
    { keyword: "subtitle duration", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle cue length", role: "secondary", headingLevel: 2 },
    { keyword: "shot changes", role: "secondary", headingLevel: 2 },
    { keyword: "frame rate rounding", role: "secondary", headingLevel: 2 },
    { keyword: "What is the minimum subtitle duration?", role: "faq" }
  ]
};
