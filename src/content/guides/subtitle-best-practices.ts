import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/subtitle-best-practices",
  h1: "Subtitle best practices: a practical guide to cleaner captions",
  title: "Subtitle best practices: a practical guide to cleaner captions",
  metaDescription:
    "Subtitle best practices for real playback: clause-level segmentation, two-line limits, reading speed, punctuation, speaker IDs, SDH and a clean review pass.",
  primaryKeyword: "subtitle best practices",
  capsule:
    "Good subtitle best practices start with the viewer: one clear idea per cue, breaks at clause boundaries, no more than two lines, and enough time to read without rushing. This guide covers segmentation, punctuation, speaker labels, sound descriptions, numbers, italics, gaps and the review pass that catches the mistakes automation leaves behind.",
  published: "2026-01-27",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    { label: "Cue budget", value: "One idea per cue; two lines is the practical maximum" },
    {
      label: "Line breaks",
      value: "After punctuation or before a conjunction; never inside a name or unit"
    },
    {
      label: "Reading target",
      value: "Check characters per second in the target player, not only duration"
    },
    { label: "Gaps", value: "A short visible gap helps the eye reset between cues" },
    { label: "SDH", value: "Bracketed descriptions for meaningful non-speech audio" },
    { label: "Review", value: "Watch at normal speed and test the exported file" }
  ],
  sections: [
    {
      heading: "Start with the viewer, then open the subtitle file",
      paragraphs: [
        "A subtitle file is a reading experience that happens while the viewer is also watching faces, motion and on-screen text. That split attention is the reason so many rules exist. If a cue arrives late, asks the eye to jump between three lines, or disappears before the sentence is finished, the viewer misses both the words and the picture. Start by watching the clip once without captions, then decide what the text must carry. The file is a tool for that job, not a transcript with timestamps attached.",
        "It also helps to separate three layers: what is said, how it is timed, and how it is presented. A clean transcript can still produce poor captions if the segmentation ignores grammar. Accurate timing can still feel rushed if each cue contains too many words. Correct wording can still be hard to read if a line break splits a name or a number. Treat each layer as its own pass, then review the combined result at normal speed."
      ]
    },
    {
      heading: "Subtitle segmentation: cut at clause boundaries",
      paragraphs: [
        "A cue should usually carry one complete thought. Cut where a clause ends, where a speaker pauses, or where the grammar gives the reader a natural resting point. Splitting before a verb or between an article and its noun forces the eye to hold an unfinished phrase while the picture changes. If the speech is fast, shorten the text rather than packing an entire sentence into one cue. Condensing is normal; inventing meaning is not.",
        "Listen for the places where a reader could look away and still know what was said. A relative clause, a list item or a short aside can often stand alone. When a sentence runs long, move the second half into the next cue and keep the first half meaningful. Do not break in the middle of a proper name, a date or a unit. The test is simple: read each cue by itself and ask whether it makes sense as a fragment of the conversation."
      ],
      bullets: [
        "Cut after a complete clause, not after an arbitrary word count.",
        "Keep names, dates, amounts and units on one line.",
        "Shorten wording before adding a third line.",
        "Let pauses guide boundaries, but do not leave a cue hanging after the thought ends."
      ]
    },
    {
      heading: "Subtitle formatting and line breaks that read cleanly",
      paragraphs: [
        "Formatting is mostly about reducing eye travel. Keep the text block centred or in a consistent position, use a readable size, and avoid placing captions over faces, logos or lower-third graphics. If the player allows positioning, move the cue rather than shrinking the type. Two shorter lines are easier to scan than one very long line, but a line break in the wrong place can be worse than a slightly longer line. Break for meaning first and width second.",
        "Do not separate an article from its noun, an adjective from the word it modifies, a first name from a surname, or a number from its unit. Prefer breaks after punctuation, before a conjunction, or before a prepositional phrase. Manual breaks should survive conversion to another format, so test the exported file rather than trusting the editor preview. If a platform reflows the text, keep the original line breaks simple and avoid decorative spacing."
      ],
      table: {
        caption: "Line-break decisions that preserve meaning",
        headers: ["Weak break", "Better break", "Why"],
        rows: [
          [
            "The blue / folder is on the desk.",
            "The blue folder / is on the desk.",
            "Keeps the noun phrase intact."
          ],
          ["We meet / on 14 March.", "We meet on / 14 March.", "Keeps the date together."],
          ["Maya / Chen will present.", "Maya Chen / will present.", "Keeps the name together."],
          [
            "It costs 12 / dollars.",
            "It costs / 12 dollars.",
            "Keeps the amount and unit together."
          ]
        ]
      }
    },
    {
      heading: "Why two lines per subtitle is the practical ceiling",
      paragraphs: [
        "Three lines cover more of the picture and take longer to scan. They also encourage cramming: once a third line exists, the temptation is to fill it rather than cut words. Most viewers read captions in quick glances, so a compact block is kinder than a dense one. One line is usually preferable for short utterances. Two lines give enough room for a normal sentence without hiding the action.",
        "If the text does not fit in two lines, the answer is editing, not smaller type. Remove filler, replace a clause with a shorter phrase, or split the cue at a natural boundary. Keep the reading speed comfortable after the cut; a short cue with too many characters is still rushed. The two-line ceiling is a discipline that forces clearer writing, and it travels well across players that render captions differently."
      ]
    },
    {
      heading: "Reading speed, punctuation and the gap between cues",
      paragraphs: [
        "Reading speed is the bridge between text length and duration. A cue that looks fine on a storyboard can fail when it appears for only a moment. Different platforms and languages set different targets, so use a range rather than a magic number. Our [subtitle reading speed checker](/subtitle-reading-speed-checker) flags cues that ask too much of the eye. If a line is over the target, shorten it or extend the cue only where the audio allows; never let a caption outlive the sound just to meet a number.",
        "Punctuation belongs in captions because it carries tone and structure. Keep question marks and exclamation points when they reflect the delivery. Use commas where they help the reader parse a list or a clause, but do not reproduce every hesitation. An ellipsis can show a trailing thought; a dash can show an interruption. Leave a small gap between cues so the change is visible. Overlap only when two speakers genuinely overlap and the platform can display both."
      ]
    },
    {
      heading: "Speaker identification, sound descriptions in SDH, and italics",
      paragraphs: [
        "When it is not obvious who is talking, label the speaker. A short uppercase name followed by a colon works in SRT and remains readable after conversion: MAYA: We should leave. For rapid back-and-forth, dashes at the start of each line can separate two speakers inside one cue, but do not use dashes and labels in the same breath. Use speaker identification consistently, especially in interviews, panels and scenes where the camera is not on the person speaking.",
        "SDH, or subtitles for Deaf and hard-of-hearing viewers, also carries meaningful non-speech audio. Put descriptions in square brackets: [door closes], [phone buzzes], [laughter]. Music can be labelled with a short description, and lyrics may use musical notes if the platform supports them. Italics are useful for narration, voice-over, thoughts or foreign-language words, but use them sparingly; a cue full of slanting text is harder to read. Describe only sounds that affect meaning, not every background noise."
      ]
    },
    {
      heading: "Numbers, dates, units, capitalization and consistency",
      paragraphs: [
        "Write numbers the way a reader would say them, unless the exact figure matters. Keep the unit beside the number and use the same format throughout: 5 km, not 5km in one cue and five kilometres in the next. Dates should remove ambiguity where the audience is international; 14 March is clearer than 3/14. Preserve currency codes when conversion would change the meaning. If a character reads a number aloud, the caption can show the numeral while the audio supplies the words.",
        "Use sentence case for ordinary dialogue and reserve full capitals for shouting, on-screen signs or a deliberate style choice. Keep a small project glossary for names, product terms and recurring phrases, then apply it across every file in the series. Consistency is invisible when it works and glaring when it fails. A viewer who sees a name spelled three ways starts questioning the captions instead of following the story."
      ]
    },
    {
      heading: "Review against the audio before you deliver",
      paragraphs: [
        "The final pass is not a spell-check. If you started from a rough transcript, generate a first pass on the [VoiceToTextFree home page](/) and treat it as raw material, not a finished track. Watch the whole clip at normal speed with sound on. Check that each cue appears before the words are spoken, stays long enough to read, and clears before the next thought begins. Look for cues that cover a face, collide with burned-in text, or linger over silence. Read the captions aloud to catch missing words and awkward breaks that looked fine in a spreadsheet.",
        "Then test the exported file in the player your audience will use. Run it through our [subtitle validator](/subtitle-validator) to catch overlaps, malformed timestamps and empty cues, and spot-check the beginning, middle and end. If the project started from automatic transcription, compare names, numbers and technical terms against the audio; those are the places where a confident-sounding machine guess is most likely to be wrong. A short review pass is the difference between a file that opens and captions that work."
      ]
    }
  ],
  faqs: [
    {
      question: "How long should subtitles stay on screen?",
      answer:
        "Long enough to read the cue once without rushing, and no longer than the speech or the scene needs. A one-second cue can work for a short exclamation; a full sentence usually needs two to four seconds. Check the reading speed after you set the duration, because a cue can be on screen for three seconds and still contain too many words."
    },
    {
      question: "Should subtitles use one line or two?",
      answer:
        "Use one line when the thought is short, and two lines when the sentence needs the room. Avoid three lines because they cover more of the picture and slow the eye down. If the text will not fit in two lines, shorten the wording or split the cue at a clause boundary."
    },
    {
      question: "Do subtitles need punctuation?",
      answer:
        "Yes, punctuation helps the viewer hear the sentence in their head. Keep question marks, exclamation points and commas that clarify structure. Do not reproduce every pause or verbal tic, and use ellipses and dashes only when they carry a real interruption or trailing thought."
    },
    {
      question: "How do you show two speakers in one subtitle?",
      answer:
        "Use a dash at the start of each speaker's line, or label each line with a short uppercase name. Keep the exchange short enough to read in one glance. If both speakers talk at once, consider separate positioned cues when the player supports them."
    },
    {
      question: "Should I caption sound effects in ordinary subtitles?",
      answer:
        "Ordinary same-language subtitles often focus on dialogue, but meaningful sounds still matter. Add bracketed descriptions when a sound changes the story, such as a door closing or a phone ringing. Full SDH tracks go further and describe music, laughter and other audio cues that carry meaning."
    },
    {
      question: "How much space should be between subtitle cues?",
      answer:
        "Leave a short visible gap when the audio allows one, so the viewer can see that the cue has changed. The gap does not need to be long; a few frames are often enough. Never create a gap by cutting off dialogue that is still being spoken."
    }
  ],
  workedExample: {
    title: "Worked example: repairing a rushed two-line cue",
    intro:
      'Before editing, cue 2 ran from 00:00:04,000 to 00:00:06,000 and read: "Maya Chen will / present the budget update. We can / take questions after." It split a surname, mixed two thoughts and asked the viewer to read a long line in two seconds. The corrected file below keeps each thought in its own cue and leaves a short gap. The clip runs at 25 frames per second, so one frame is 40 milliseconds.',
    srt: `1
00:00:01,200 --> 00:00:03,600
Maya Chen will present
the budget update.

2
00:00:03,800 --> 00:00:05,600
We can take questions
after the presentation.

3
00:00:06,000 --> 00:00:08,200
[door closes]

4
00:00:08,400 --> 00:00:11,000
Thanks for waiting.`,
    note: "Cue 1 keeps the name together and ends at a clause boundary. Cue 2 separates the second thought instead of cramming both into one event. The 200 ms gaps make the change visible without pushing the captions out of sync. Cue 3 describes a sound that changes the scene, and cue 4 stays on one line because the sentence is short."
  },
  sources: [
    {
      label: "W3C WAI — Captions/Subtitles",
      url: "https://www.w3.org/WAI/media/av/captions/"
    },
    {
      label: "Netflix Partner Help — Timed Text Style Guide: General Requirements",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617-Timed-Text-Style-Guide-General-Requirements"
    },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    }
  ],
  relatedGuides: [
    "subtitle-line-length",
    "subtitle-reading-speed",
    "subtitle-timing-guidelines",
    "netflix-subtitle-guidelines"
  ],
  keywords: [
    { keyword: "subtitle best practices", role: "primary" },
    { keyword: "subtitle formatting", role: "secondary", headingLevel: 2 },
    { keyword: "two lines per subtitle", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle segmentation", role: "secondary", headingLevel: 2 },
    { keyword: "speaker identification", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle line breaks", role: "synonym" },
    { keyword: "How long should subtitles stay on screen?", role: "faq" }
  ]
};
