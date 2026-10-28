import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/subtitle-line-length",
  h1: "Subtitle line length",
  title: "Subtitle line length: the 42-character convention and how to apply it",
  metaDescription:
    "Subtitle line length explained: the 42-character convention, two-line limits, counting spaces, line balancing and scripts such as CJK, Arabic and Urdu.",
  primaryKeyword: "subtitle line length",
  capsule:
    "Subtitle line length is a readability control, not a decoration. Many broadcast and streaming style guides cap a cue at two lines and around 42 characters per line, counting spaces. That figure is a convention, not a law: the right limit depends on the platform, the language and how fast the audience can read.",
  published: "2026-01-26",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 7,
  keyFacts: [
    { label: "Common convention", value: "42 characters per line" },
    { label: "Maximum lines", value: "Two per cue in most style guides" },
    { label: "Spaces", value: "Counted as characters" },
    { label: "Preferred break", value: "After punctuation, before conjunctions and prepositions" },
    { label: "CJK and RTL", value: "Measure in glyphs or display width, not Latin characters" },
    { label: "Reflow", value: "Change line breaks, not timestamps" }
  ],
  sections: [
    {
      heading: "Maximum subtitle line length by delivery target",
      paragraphs: [
        "A line limit exists because the eye can only take in so much text in one glance while also following the picture. The familiar number in English-language subtitling is 42 characters per line, with a maximum of two lines. That pairing appears in many broadcast and streaming style guides, including the Netflix timed text guides, and it has survived because it fits a comfortable reading span on a television screen without crowding the frame.",
        "Treat the number as a working target rather than a universal constant. A cinema screen, a phone held vertically and a browser player embedded in an article have different safe areas and different viewing distances. A documentary with long questions may need shorter lines than a drama with clipped dialogue. The table below separates the convention from the destination-specific advice you still have to check."
      ],
      table: {
        caption: "Working line limits by destination",
        headers: ["Destination", "Working limit", "Maximum lines", "Note"],
        rows: [
          [
            "Broadcast and streaming style guides",
            "42 characters",
            "2",
            "Count spaces; keep cues short"
          ],
          [
            "General web player",
            "About 42 characters",
            "2",
            "Font size and player width change the fit"
          ],
          ["Vertical social video", "Shorter lines", "1-2", "Leave room for interface overlays"],
          [
            "Cinema or large screen",
            "42 characters",
            "2",
            "Viewing distance helps, but do not crowd"
          ],
          [
            "Chinese, Japanese, Korean",
            "Measure in glyphs",
            "2",
            "Latin character counts do not transfer"
          ],
          ["Arabic and Urdu", "Measure in display width", "2", "Keep joined words intact"]
        ]
      }
    },
    {
      heading: "Characters per line subtitles: counting spaces and punctuation",
      paragraphs: [
        'Count every character the viewer sees, including spaces and punctuation. The line "We leave at six." is 15 characters, not 12, because the two spaces and the period occupy width. A trailing space is usually invisible but still counts if the renderer reserves it; strip trailing spaces when you finish. Double spaces are a common import artefact and should be collapsed before you judge whether a line fits.',
        "Count the line as displayed, not the whole cue. Two lines of 38 characters each can be within a 42-character limit even though the cue contains more than 42 characters in total. Conversely, one line of 60 characters is over the limit even if the cue has only one line. If your tool reports a cue total instead of a per-line count, divide at the line breaks and check each line separately."
      ],
      bullets: [
        "Count letters, digits, punctuation and spaces.",
        "Do not count the cue number or the timestamp line.",
        "Strip trailing spaces and collapse double spaces first.",
        "Check each displayed line, not the combined cue."
      ]
    },
    {
      heading: "Why 42 characters per line subtitles is a convention, not a law",
      paragraphs: [
        "The 42-character figure is a convention used by many broadcasters and style guides, not a rule enforced by the subtitle file format. SRT and WebVTT do not know how wide a character will be, what font the player uses, or how large the video is. A font with wide glyphs can make 42 characters overflow, while a condensed font can fit more. The number is a useful default, not a guarantee.",
        "That is why a strict validator may flag a 44-character line while a player displays it without complaint. The flag is a prompt to look, not proof of a defect. Treat the limit as a budget: stay under it for most cues, allow a small overflow for a proper name or a number that cannot be broken sensibly, and fix the pattern rather than one cosmetic character. If you routinely exceed the budget, the real problem is probably reading speed, not line width."
      ],
      table: {
        caption: "When to keep, bend or break the convention",
        headers: ["Situation", "Action", "Reason"],
        rows: [
          [
            "A name pushes a line to 44 characters",
            "Keep it if the cue is short",
            "Breaking a name is worse than a small overflow"
          ],
          ["Every cue is 50 characters", "Shorten the text", "The pattern will read as crowded"],
          [
            "A line has one orphan word",
            "Rebalance both lines",
            "The eye wastes a fixation on one word"
          ],
          ["A number and unit split", "Keep them together", "Meaning is clearer on one line"],
          [
            "A CJK cue uses 42 glyphs",
            "Recheck the visual width",
            "Latin counts are not meaningful here"
          ]
        ]
      }
    },
    {
      heading: "Two lines maximum, and how to balance them",
      paragraphs: [
        "Two lines is the common maximum because a third line starts to cover too much of the picture and asks the viewer to scan too far. Within those two lines, balance matters as much as the count. A top line of 40 characters above a bottom line of 4 characters looks unstable and slows reading. Aim for a bottom-heavy shape, then avoid leaving a single short word alone on the top line.",
        "Break after punctuation when possible, and before conjunctions or prepositions. Do not separate an article from its noun, an adjective from its noun, a first name from a last name, or a verb from its subject pronoun. These are not arbitrary preferences: they keep the line break from interrupting a phrase the reader expects to process as a unit. A break in the wrong place can make a simple sentence take longer to understand."
      ],
      bullets: [
        "Prefer a break after a comma, period or colon.",
        "Break before and, but, because, when, with, for or to.",
        "Keep names, titles and numbers together where possible.",
        "Avoid a top line with only one or two words.",
        "Never use three lines to solve a two-line problem."
      ]
    },
    {
      heading: "Reflow a long cue without changing its timing",
      paragraphs: [
        "Reflowing means changing only the line breaks inside a cue. The words, the start time and the end time stay exactly the same. Use a plain text editor or a line-break tool, not a word processor that may alter punctuation or spacing. Before you edit, save a copy. After you edit, compare the cue count and timestamps with the original; they should be identical.",
        "Do not split one long cue into two timed cues unless you also give the second cue its own start and end time. Splitting a cue without retiming forces the player to show the first half for the original duration and the second half for zero seconds, or to push the second half into the next cue. If a cue genuinely needs to become two events, treat that as a timing edit and recalculate the durations.",
        "Reflow is also the moment to remove text that adds nothing. A filler word or a repeated name can come out without harming meaning, and the shorter line will read better. Keep the cut consistent with the audio: subtitles can condense speech, but they should not invent a different statement. When in doubt, preserve the words and let the line break do the work.",
        "Keep a simple before-and-after list when several cues are reflowed. Note the cue number, the old line breaks and the new ones, then compare timestamps in a validator. This is especially useful when a colleague reviews the file and cannot tell whether the words changed or only the layout. If a line still overflows after reflowing, shorten the text rather than shrinking the font; font size is a player setting, not something a subtitle file controls reliably."
      ]
    },
    {
      heading: "CJK, Arabic and Urdu: why Latin character counts do not transfer",
      paragraphs: [
        "Chinese, Japanese and Korean text is set with glyphs that are usually wider than Latin letters. A 42-character Latin budget is not a meaningful limit for a line of Han characters, because 42 glyphs may occupy far more horizontal space. Count in full-width character units or measure the rendered width, and check the result on the actual player. The two-line maximum still applies, but the per-line number has to be recalculated for the script.",
        "Arabic and Urdu add two more constraints. The script is cursive and right to left, so a line break inside a joined word can break the connection between letters or change the appearance of the word. Keep words intact, measure the display width rather than the code-point count, and test with the font the player will use. A line that fits in a Latin fallback font may overflow when the correct Arabic font is loaded.",
        "If you are working across scripts, keep separate style rules rather than translating a Latin character count into another writing system. The [reading speed guide](/guides/subtitle-reading-speed) explains how duration and character count interact; the visual limit on a line is a separate constraint and should be measured, not assumed."
      ]
    },
    {
      heading: "Check line length before export",
      paragraphs: [
        "A validator can flag lines over a chosen limit, but it cannot see the final font or the safe area. Use it as a first pass, then watch the file in the target player. Set the limit to 42 for English unless the destination publishes a different number, and check the longest line in the file rather than the average. One overflowing line at the edge of the frame is more damaging than a file that is slightly under budget everywhere else.",
        "The [reading speed checker](/subtitle-reading-speed-checker) reports the CPS and line length together, which is useful because the two limits interact. A short line shown for half a second can still be too fast, and a long line shown for five seconds can still be too wide. Fix the line breaks first, then check whether the cue needs more time or less text.",
        "Safe areas matter as much as character counts. Many players reserve the bottom of the frame for controls, and vertical video overlays captions with buttons and app interface elements. Keep the text above the lower edge and inside the horizontal margins, then check on a phone as well as a desktop. A line that fits the character budget can still sit under an interface element."
      ]
    }
  ],
  faqs: [
    {
      question: "How many characters per subtitle line?",
      answer:
        "A common working limit is 42 characters per line, including spaces and punctuation, with a maximum of two lines. The figure comes from broadcast and streaming style guides rather than the subtitle file format. Check the destination's current guidance before a large delivery."
    },
    {
      question: "Is 42 characters per line a rule?",
      answer:
        "No. It is a convention used by many broadcasters and style guides. SRT and WebVTT do not enforce a width. Treat 42 as a sensible default for English, then adjust for the font, screen size and language."
    },
    {
      question: "Should subtitles be one line or two?",
      answer:
        "Prefer one line when the text fits comfortably. Use two lines when the sentence needs the space, and never use three. If a cue needs more than two lines, shorten the text or split it into separate timed cues."
    },
    {
      question: "Do spaces count toward the character limit?",
      answer:
        "Yes. Spaces and punctuation occupy width on screen, so they count. Strip trailing spaces and collapse double spaces before measuring. Count each displayed line separately rather than the whole cue."
    },
    {
      question: "How do I shorten a long subtitle line without changing timing?",
      answer:
        "Move a word to the other line, remove a filler word, or replace a phrase with a shorter equivalent. Keep the timestamps and the overall meaning unchanged. If the cue still needs more room, extend its duration or split it into two timed cues."
    },
    {
      question: "Does the 42-character limit work for Chinese or Arabic?",
      answer:
        "Not directly. Chinese, Japanese and Korean glyphs are usually wider, so measure in full-width units or rendered width. Arabic and Urdu are cursive and right to left, so keep words intact and test with the actual font. Use the two-line maximum as a starting point, not the Latin count."
    }
  ],
  workedExample: {
    title: "Worked example: reflowing one cue without retiming it",
    intro:
      "The original cue was a single 70-character line. It has been broken into two balanced lines inside the same cue. The start and end times are unchanged, and no words were added or removed.",
    srt: `1
00:00:03,000 --> 00:00:06,400
The station master said the last train
would leave from platform four.

2
00:00:07,100 --> 00:00:09,800
Bring the blue folder with you.`,
    note: "The first line is 38 characters and the second is 31, both under 42. The break falls before the verb phrase, so the sentence stays easy to read. The second cue is deliberately short to show the contrast."
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
    "subtitle-reading-speed",
    "subtitle-best-practices",
    "netflix-subtitle-guidelines",
    "subtitle-timing-guidelines"
  ],
  keywords: [
    { keyword: "subtitle line length", role: "primary" },
    { keyword: "maximum subtitle line length", role: "secondary", headingLevel: 2 },
    { keyword: "characters per line subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "42 characters per line subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "how many characters per subtitle line", role: "faq" },
    { keyword: "is 42 characters per line a rule", role: "faq" }
  ]
};
