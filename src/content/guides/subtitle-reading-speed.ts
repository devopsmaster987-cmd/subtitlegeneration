import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/subtitle-reading-speed",
  h1: "Subtitle reading speed",
  title: "Subtitle reading speed: CPS, duration and how to fix fast cues",
  metaDescription:
    "Subtitle reading speed explained: the CPS formula, 15-20 CPS guidelines, minimum duration, the 1-7 second range and how to fix cues that are too fast.",
  primaryKeyword: "subtitle reading speed",
  capsule:
    "Subtitle reading speed is characters divided by seconds on screen. A common working ceiling is 15 to 20 characters per second for adult English, with shorter limits for children and dense text. Duration matters too: very short cues flash, and very long cues linger. Measure CPS per cue, then shorten, extend or split.",
  published: "2026-01-26",
  updated: "2026-10-29",
  author: "Abdul Samad",
  readingMinutes: 8,
  keyFacts: [
    { label: "CPS formula", value: "Characters in the cue divided by seconds on screen" },
    { label: "Common ceiling", value: "About 15-20 CPS for adult English" },
    { label: "Netflix adult limit", value: "Up to 20 CPS" },
    { label: "Netflix children's limit", value: "Up to 17 CPS" },
    { label: "Netflix duration", value: "Minimum five-sixths of a second; maximum 7 seconds" },
    { label: "Fix order", value: "Shorten the text, extend the cue, then split it" }
  ],
  sections: [
    {
      heading: "Characters per second subtitles: the CPS formula",
      paragraphs: [
        "CPS means characters per second. It is the number of characters a viewer has to read for every second a cue is visible. The formula is simple: count the characters in the cue, including spaces and punctuation, then divide by the cue duration in seconds. A cue with 84 characters on screen for 6 seconds runs at 14 CPS. The same 84 characters on screen for 4 seconds runs at 21 CPS. The words did not change; only the time did.",
        "Be consistent about what you count. Some tools ignore spaces and some include them, which can shift the result noticeably on ordinary prose. Pick one convention and use it across the file. This guide counts spaces because the eye has to cross them. Whatever convention you choose, compare cues within the same file using the same rule, and do not compare a number from one tool with a number from another without checking the method."
      ]
    },
    {
      heading: "Why 15-20 CPS is a common working guideline",
      paragraphs: [
        "Many subtitling style guides converge on a range of roughly 15 to 20 CPS for adult English. The number is a ceiling, not a target; slower is generally easier. Netflix's English timed text guide lists up to 20 CPS for adult programmes and 17 CPS for children's programmes, which shows how the limit moves with the audience. A children's programme is not just a slower version of an adult one; the vocabulary and the reading experience differ too.",
        "The range is not a law and it is not a substitute for watching the result. Dense proper nouns, numbers and rapid banter read more slowly than their character count suggests. A line of short common words is easier than a line of the same length made of legal terminology. Use the number to catch outliers, then judge the cue in context with the picture and the audio."
      ],
      table: {
        caption: "Reading speed bands used in practice",
        headers: ["Band", "CPS", "Typical use"],
        rows: [
          ["Comfortable", "Up to about 12", "Documentary, slow dialogue, children's content"],
          ["Standard", "About 12-15", "General adult subtitles"],
          ["Upper range", "About 16-20", "Fast dialogue; use sparingly"],
          ["Over the ceiling", "Above 20", "Revise the cue before delivery"],
          ["Children's ceiling", "About 17", "Shorter attention span and vocabulary"]
        ]
      }
    },
    {
      heading: "Minimum duration and the rough 1-7 second range",
      paragraphs: [
        "Duration alone does not guarantee readability, but it sets a floor and a ceiling. A cue that appears for less than about a second is hard to notice, especially if it follows a cut. A cue that stays longer than about seven seconds can feel stuck and may overlap the next line of dialogue. The 1-7 second range is a rough working bracket, not a rule that makes every cue readable.",
        "Netflix's general timed text requirements put the minimum at five-sixths of a second and the maximum at seven seconds per event. Those figures come from a delivery style guide, not from a universal law. A one-second cue with five characters can be fine; a one-second cue with thirty characters cannot. Check duration and CPS together, because either one alone can mislead you."
      ]
    },
    {
      heading: "How to measure reading speed",
      paragraphs: [
        "Measure in the player or in a checker, not by counting on your fingers. Load the file, read the CPS for each cue, and sort by the highest value. The worst cues are the ones to fix first. If a tool shows only an average, ask for per-cue values; an average can hide one impossible line among many comfortable ones.",
        "Measure against the final video. A cue that fits at the script stage may be too fast after the edit tightens a pause. If the video has been re-timed, recalculate before deciding to cut text. Our [reading speed checker](/subtitle-reading-speed-checker) computes CPS per cue and lists the ones over your chosen limit, so you can work from a list instead of scanning the whole file."
      ]
    },
    {
      heading: "Worked examples: calculating CPS from a real cue",
      paragraphs: [
        "Take a cue with 84 characters that stays on screen for 6 seconds. Divide 84 by 6 and you get 14 CPS, which sits in the comfortable band. Now take a cue with 126 characters at 5 seconds. Divide 126 by 5 and you get 25.2 CPS, which is over a 20 CPS ceiling. The second cue needs a change; the first probably does not.",
        "There are three levers. Shorten the text, extend the duration, or split the cue. Suppose the 126-character cue can be cut to 96 characters without losing meaning. At the original 5 seconds, 96 / 5 = 19.2 CPS, which fits under 20. If the text cannot be cut, extending the cue to 6.3 seconds gives 126 / 6.3 = 20 CPS. If the maximum duration is 7 seconds and the cue still runs hot, splitting is the remaining option.",
        "Splitting needs its own arithmetic. A 120-character cue at 6 seconds is 20 CPS. Split into two 60-character cues, each shown for 3 seconds, and each half is 20 CPS. That looks correct on paper, but it leaves no gap between the halves and might create two very short events. Add a small gap if the speech allows it, and check that each new cue still meets the minimum duration."
      ],
      table: {
        caption: "CPS arithmetic for three cues",
        headers: ["Characters", "Seconds", "CPS", "Verdict"],
        rows: [
          ["84", "6.0", "14.0", "Comfortable"],
          ["126", "5.0", "25.2", "Too fast"],
          ["96", "5.0", "19.2", "Fits after shortening"],
          ["126", "6.3", "20.0", "Fits after extending"],
          ["120 split into 60 + 60", "6.0 total", "20.0 each", "Possible, but check the gap"]
        ]
      }
    },
    {
      heading: "How to fix cues that are too fast",
      paragraphs: [
        'Shorten first. Remove filler, repeated names, greetings and anything the picture already makes clear. Condense a phrase rather than deleting information: "in the event that" becomes "if", and "at this point in time" becomes "now". Keep the subject, the verb and the detail the scene depends on. A shorter line reads faster and also takes less horizontal space.',
        "Extend the cue second. Move the end time later if the next cue allows it, or move the start time earlier if the previous cue has ended. Do not create an overlap just to buy time; many players show only one cue at a time, and the overlap may hide one of them. Extending into a pause is safer than extending into another speaker's line.",
        "Split last. Splitting changes the rhythm of the file and adds an event, so use it when the text is genuinely too long for one cue. Give each part its own start and end time, keep the break at a phrase boundary, and make sure each part is long enough to be read. A split that produces two half-second flashes has not solved the problem."
      ],
      bullets: [
        "Cut filler and repetition before cutting meaning.",
        "Extend into silence, not into the next cue.",
        "Split at a phrase boundary, not mid-thought.",
        "Recheck CPS for every new cue after a split.",
        "Do not raise the limit just to silence the warning."
      ]
    },
    {
      heading: "How the reading speed checker works",
      paragraphs: [
        "The checker in [the browser workbench](/#tool) parses an SRT or VTT file, counts the characters in each cue, divides by that cue's duration and compares the result with a maximum CPS you choose. The default is 20, matching the upper end of the common adult range. It also checks a maximum line length, defaulting to 42 characters, because a cue can be within the CPS limit and still be hard to scan.",
        "Everything runs in the tab. You can paste text or import a file, adjust the thresholds for a children's programme or a house style, and read a list of errors and warnings. The validator mode can apply safe fixes such as trimming overlaps or normalising timestamps, but it does not rewrite dialogue. Text decisions still belong to a person who can hear the scene."
      ]
    },
    {
      heading: "Line length and reading speed work together",
      paragraphs: [
        "CPS measures how much text there is per second; line length measures how far the eye must travel to take it in. A cue with 80 characters on two balanced lines can feel easier than the same 80 characters on one long line, even though the CPS value is identical. The eye finds the start of the second line faster when the break follows a phrase boundary.",
        "That is why the [line length guide](/guides/subtitle-line-length) and this one are usually applied together. Reflowing a cue does not change its CPS, because the character count and duration stay the same. It changes the scanning cost. If a cue is both over the CPS ceiling and over the line limit, fix the words first, then the line breaks, then re-measure both."
      ]
    },
    {
      heading: "What to do when the audio will not slow down",
      paragraphs: [
        "Some speakers talk faster than any subtitle can follow comfortably. If the platform caps duration and the dialogue is dense, the only honest fix is fewer words. Keep the information the scene needs and drop what the picture, the tone or the context already supplies. Do not raise the CPS limit to make the warning disappear; that hides the problem from the checker without helping the viewer.",
        "For accessibility work, check the result with someone who relies on captions, not only with a colleague who knows the script. A line that seems obvious to the editor can be ambiguous without the audio. If a cue still fails after trimming and splitting, flag it for review rather than guessing. A short, clear subtitle is better than a complete transcript that nobody can read in time."
      ]
    }
  ],
  faqs: [
    {
      question: "How long should a subtitle stay on screen?",
      answer:
        "Long enough to read the text at a comfortable speed, usually between about one and seven seconds. Very short cues are easy to miss, and very long cues can linger over the next line. Let the character count and the speech determine the exact duration."
    },
    {
      question: "Is there an upper limit for how long a cue stays on screen?",
      answer:
        "There is no single number. A short cue of a few words may need only a second; a full sentence may need three to five. Netflix's general requirements use a minimum of five-sixths of a second and a maximum of seven seconds, which is a useful outside bracket."
    },
    {
      question: "Which CPS target should general-audience subtitles use?",
      answer:
        "For adult English, about 12 to 15 CPS is comfortable and up to 20 CPS is a common ceiling. Children's content is usually held to a lower limit. Dense names, numbers and technical terms may need to be slower than the raw count suggests."
    },
    {
      question: "What is the minimum duration for a subtitle?",
      answer:
        "Many style guides use about one second as a practical floor, and Netflix's general requirements specify five-sixths of a second. A cue shorter than that is easy to miss, especially after a cut. If the text is too long for the minimum, shorten it or split it."
    },
    {
      question: "How do I calculate characters per second?",
      answer:
        "Count the characters in the cue, including spaces and punctuation, and divide by the number of seconds the cue is visible. For example, 84 characters over 6 seconds is 14 CPS. Be consistent about whether spaces are included when comparing cues."
    },
    {
      question: "Should I split a long cue or extend its duration?",
      answer:
        "Extend first if there is room and no overlap, because it preserves the original structure. Split when the cue is far over the limit or when the maximum duration has been reached. Shorten the text before doing either if the wording contains filler or repetition."
    }
  ],
  workedExample: {
    title: "Worked example: two cues measured at the same threshold",
    intro:
      "The first cue is 77 characters over 5 seconds. The second is 50 characters over 3 seconds. Using the same counting rule for both, the first runs at 15.4 CPS and the second at 16.7 CPS, so both sit under a 20 CPS ceiling.",
    srt: `1
00:00:02,000 --> 00:00:07,000
The station master said the last train would leave from platform four at six.

2
00:00:07,600 --> 00:00:10,600
Take the side entrance and keep your ticket ready.`,
    note: "If the first cue had 126 characters at the same 5 seconds, it would run at 25.2 CPS and would need text cuts or more time. The arithmetic is a screening tool, not a substitute for watching the scene."
  },
  sources: [
    {
      label: "Netflix — English (USA) Timed Text Style Guide",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/217350977-Timed-Text-Style-Guide-Subtitle-Timing-Guidelines"
    },
    {
      label: "Netflix — Timed Text Style Guide: General Requirements",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617-Timed-Text-Style-Guide-General-Requirements"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    }
  ],
  relatedGuides: [
    "subtitle-line-length",
    "subtitle-best-practices",
    "subtitle-timing-guidelines",
    "subtitles-for-accessibility"
  ],
  keywords: [
    { keyword: "subtitle reading speed", role: "primary" },
    { keyword: "characters per second subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "how long should a subtitle stay on screen", role: "faq" },
    { keyword: "is there an upper limit for how long a cue stays on screen", role: "faq" },
    { keyword: "which cps target should general-audience subtitles use", role: "faq" },
    { keyword: "how do i calculate characters per second", role: "faq" }
  ]
};
