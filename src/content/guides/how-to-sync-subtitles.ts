import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-sync-subtitles",
  h1: "How to sync subtitles",
  title: "How to sync subtitles: offsets, drift and frame rate",
  metaDescription:
    "How to sync subtitles when every line is late or the gap keeps growing: measure drift, apply an offset or a stretch factor, and handle frame-rate mismatch.",
  primaryKeyword: "how to sync subtitles",
  capsule:
    "Learning how to sync subtitles starts with one question: is every cue late by the same amount, or does the gap grow across the file? A constant offset needs one shift. Growing drift needs a stretch factor measured from two cues. Fix timing first, then recheck the first, middle and last line.",
  published: "2026-01-26",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 8,
  keyFacts: [
    { label: "Constant offset", value: "Every cue is wrong by the same number of seconds" },
    { label: "Progressive drift", value: "The error grows from the start of the file to the end" },
    {
      label: "Two measurements",
      value: "A first and a late cue are enough to calculate both offset and stretch"
    },
    { label: "Frame rates", value: "23.976, 24, 25, 29.97 and 30 are the usual mismatch suspects" },
    { label: "Order of operations", value: "Stretch or offset the timing before editing the text" },
    { label: "Verification", value: "Check the first, middle and last cue after every change" }
  ],
  sections: [
    {
      heading: "How to sync subtitles to video: constant offset or progressive drift",
      paragraphs: [
        "There are two different timing problems, and they need different fixes. With a constant offset, every cue is early or late by roughly the same amount. The subtitles feel uniformly ahead of the dialogue, or uniformly behind it, and the gap does not grow. With progressive drift, the first cue is close, a cue in the middle is noticeably off, and the last cue is further off still. The gap grows because the subtitle clock and the video clock are running at slightly different rates.",
        "Diagnose the type before touching a timestamp. Watch the first spoken line, one line near the midpoint, and one near the end. If the error at all three points is the same, use an offset. If the error changes steadily, use a stretch factor. If the error jumps at one point and is stable before and after, you likely have a missing or duplicated section, not a clock problem. That last case needs a different repair, such as re-timing one block or re-transcribing the affected scene."
      ],
      table: {
        caption: "Offset versus drift",
        headers: ["Pattern", "First cue", "Middle cue", "Last cue", "Fix"],
        rows: [
          [
            "Constant offset",
            "0.8 s late",
            "0.8 s late",
            "0.8 s late",
            "Shift every cue by -0.8 s"
          ],
          ["Progressive drift", "0.1 s late", "1.2 s late", "2.4 s late", "Stretch, then shift"],
          ["Local jump", "On time", "Sudden 4 s late", "4 s late", "Repair one block"],
          ["Duplicated scene", "On time", "On time", "6 s late", "Remove or re-time the section"]
        ]
      }
    },
    {
      heading: "Measure the error with the first, middle and last cues",
      paragraphs: [
        "Timing by ear is unreliable because speech has natural pauses. Use a visible reference instead: a door slam, a cut to a new shot, a hand clap, or the first frame of a speaker's mouth moving. Pause on that frame, note the video time, then read the start time of the matching cue. The difference is the error at that point. Repeat for a cue near the middle and one near the end, and write the three numbers down before changing anything.",
        "Use the same reference type at each point. If you measure the first cue against a hard sound and the last cue against a soft consonant, you will invent drift that is not there. A frame-accurate editor or a player that shows timecode makes this much easier. In a browser tab, [the timing editor](/#tool) shows each cue's start and end values side by side, so you can compare them with the player's clock without leaving the page."
      ]
    },
    {
      heading: "Fix out of sync subtitles with a constant offset",
      paragraphs: [
        "A constant offset is the easy case. If every cue is 0.8 seconds late, subtract 0.8 seconds from every start and end time. If every cue is early, add the same amount. The duration of each cue does not change. This is why an offset is safe: it moves the whole track without altering the reading time inside any cue.",
        "Do not round the offset to a whole second unless the measurement supports it. A 0.4-second shift is visible on a close-up, and a 0.6-second shift can put a line before the mouth moves or after it stops. Keep milliseconds in the file. Most editors and our [subtitle timing editor](/subtitle-timing-editor) accept a decimal offset in seconds, apply it to every cue at once, and leave the text untouched."
      ],
      bullets: [
        "Subtitles late: subtract the measured delay from every cue.",
        "Subtitles early: add the measured delay to every cue.",
        "Mixed signs at the start and end: this is drift, not a constant offset.",
        "One block is wrong: fix that block instead of shifting the whole file."
      ]
    },
    {
      heading: "Frame-rate mismatch: 23.976, 24, 25, 29.97 and 30",
      paragraphs: [
        "Film and television use several frame rates that are close but not identical. 23.976 is the pulldown-friendly version of 24. 29.97 is the colour version of 30. A file timed for 25 fps played at 24 fps runs slower, and the subtitles fall behind. A file timed for 24 fps played at 25 fps runs faster, and the subtitles pull ahead. The mismatch is small per minute but accumulates over a feature-length programme.",
        "The arithmetic is simple. If the subtitle clock is based on 24 fps but the video is 23.976 fps, the video is longer by a factor of about 1.001, which is roughly 3.6 seconds per hour. A 24-to-25 mismatch is about 4 percent, which is roughly 144 seconds per hour. A 30-to-29.97 mismatch is again about 0.1 percent. These are ratios, not measured audience data, so use them to predict the direction and rough size of the drift, then measure the actual cues."
      ]
    },
    {
      heading: "Do the offset and stretch math with worked numbers",
      paragraphs: [
        "Suppose the first cue is at 00:00:10.000 but should start at 00:00:10.500, and the last cue is at 00:05:10.000 but should start at 00:05:12.500. The current span between those cues is 300 seconds. The target span is 302 seconds. Stretch factor equals target span divided by current span, so 302 / 300 = 1.006667. Apply that factor around the start of the timeline, then calculate the residual offset.",
        "After stretching, the first cue moves from 10.000 to 10.067 seconds. It still needs another 0.433 seconds to reach 10.500, so the offset is +0.433 seconds. Apply the offset after the stretch. The last cue becomes 310 × 1.006667 = 312.067 seconds, then 312.500 seconds after the offset. Both measured points now land where they should, and every cue between them is interpolated rather than guessed.",
        "If your tool asks only for a stretch factor and applies it around zero, that order is correct. If it applies the factor around the first cue instead, the residual offset will differ. Check the same three cues after the operation. Small rounding differences of a few milliseconds are acceptable; a visible error at the middle cue means the factor or the anchor point is wrong."
      ],
      table: {
        caption: "Worked numbers for the 300-second example",
        headers: ["Value", "Before", "After stretch", "After offset"],
        rows: [
          ["First cue", "10.000 s", "10.067 s", "10.500 s"],
          ["Last cue", "310.000 s", "312.067 s", "312.500 s"],
          ["Span", "300.000 s", "302.000 s", "302.000 s"],
          ["Factor", "—", "1.006667", "1.006667"],
          ["Offset", "—", "—", "+0.433 s"]
        ]
      }
    },
    {
      heading: "When subtitles out of sync means the source is wrong",
      paragraphs: [
        "Sometimes the timing file is not the problem. If the video contains an intro that the subtitles do not cover, or a scene was removed after the subtitles were made, no single offset will fix the whole file. The error will be stable before the change and stable at a different value after it. Look for a sudden jump rather than a gradual slope, and inspect the video around that point.",
        "The honest repair is to re-time the affected section or regenerate the subtitles from the final audio. Re-transcribing is often faster than hand-shifting hundreds of cues when the edit is large. Keep the old file for reference, but do not stretch it across a cut that removed or added content; the arithmetic cannot recover dialogue that is no longer there. After regenerating, check the new file against the first, middle and last cues again."
      ]
    },
    {
      heading: "Editor and platform steps",
      paragraphs: [
        "The exact menus differ, but the workflow is stable. Import the subtitle file, find the timing or sync control, enter the offset or factor, and apply it to all cues. Then export a new file rather than overwriting the only copy. In a video editor, keep the subtitle clip on its own track so a timing change does not move the picture. On a platform that processes uploads, wait for processing to finish before judging sync, because the preview can lag behind the final transcode.",
        "When a platform offers only a visual nudge tool, make one adjustment, play the same three reference points, and repeat. Do not stack several small offsets without re-measuring; it is easy to overshoot and then correct in the wrong direction. A dedicated timing tool that shows the numeric values is more predictable than dragging a track by eye."
      ],
      steps: [
        "Export a copy of the original subtitle file before editing.",
        "Mark the first, middle and last reference points in the video.",
        "Apply an offset if the error is constant; apply a stretch if it grows.",
        "Recheck the same three points and adjust the residual offset.",
        "Export a new SRT and keep the original for comparison."
      ]
    },
    {
      heading: "Check the result and prevent drift",
      paragraphs: [
        "After a timing change, watch the file at normal speed rather than only stepping frame by frame. Fast speech can expose a cue that starts correctly but ends too early, and a long pause can hide a cue that is a few hundred milliseconds late. Watch one full minute at the start, one in the middle and one at the end. If those three minutes hold, the rest of the file usually holds too.",
        "Prevention is mostly about keeping one clock. Decide the frame rate before transcription, do not convert the video after timing, and store the subtitle file with the exact video version it belongs to. If you must convert, convert the video and the subtitles together and recheck. A version label in the filename is a cheap way to avoid applying yesterday's timings to today's edit."
      ]
    }
  ],
  faqs: [
    {
      question: "How do I fix out of sync subtitles?",
      answer:
        "Measure one early cue, one middle cue and one late cue against visible events. If the error is constant, shift every cue by the same amount. If it grows, apply a stretch factor and then a small offset. Recheck the same three points after exporting."
    },
    {
      question: "Can I edit subtitle timings?",
      answer:
        "Yes. SRT and VTT timestamps are plain text, and most editors and browser tools let you change start and end values directly. Numeric editing is more precise than dragging, especially when you need millisecond accuracy or a stretch factor."
    },
    {
      question: "What is the difference between an offset and a stretch?",
      answer:
        "An offset moves every cue by the same number of seconds without changing cue durations. A stretch changes the spacing between cues by a factor. Use an offset for a uniform delay and a stretch for drift that grows across the file."
    },
    {
      question: "Why do subtitles drift more at the end of the file?",
      answer:
        "The subtitle clock and the video clock are running at slightly different rates, usually because of a frame-rate mismatch. The difference is tiny per minute but accumulates. Measure the first and last cues to calculate the factor instead of guessing."
    },
    {
      question: "Why does 23.976 fps cause sync problems?",
      answer:
        "It is slightly slower than 24 fps. A file timed on a 24 fps clock will gradually fall behind when played at 23.976 fps. The error is about 3.6 seconds per hour by ratio, so a short clip may look fine while a feature does not."
    },
    {
      question: "Should I re-transcribe a badly out-of-sync file?",
      answer:
        "If the video was re-cut, scenes were added or removed, or the error jumps instead of growing, re-transcribing is usually faster and more reliable. A stretch can handle clock drift, but it cannot recover dialogue that no longer matches the picture."
    }
  ],
  workedExample: {
    title: "Worked example: a corrected SRT after a 0.8-second delay",
    intro:
      "The original file was uniformly 0.8 seconds late against the final video. The cues below have been shifted by -0.8 seconds. Durations are unchanged, so reading speed inside each cue is the same as before.",
    srt: `1
00:00:02,200 --> 00:00:04,600
The first train leaves at six.

2
00:00:05,300 --> 00:00:08,100
We should be on the platform by five.

3
00:00:09,000 --> 00:00:11,400
The ticket office opens at dawn.`,
    note: "Check all three cues against the picture. If the first is correct but the third is late again, the file has drift rather than a constant offset and needs a stretch factor."
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
    "srt-vs-vtt",
    "subtitle-timing-guidelines",
    "how-to-add-subtitles-to-youtube-shorts",
    "subtitle-best-practices"
  ],
  keywords: [
    { keyword: "how to sync subtitles", role: "primary" },
    { keyword: "how to sync subtitles to video", role: "secondary", headingLevel: 2 },
    { keyword: "fix out of sync subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "subtitles out of sync", role: "secondary", headingLevel: 2 },
    { keyword: "how do i fix out of sync subtitles", role: "faq" },
    { keyword: "can i edit subtitle timings", role: "faq" }
  ]
};
