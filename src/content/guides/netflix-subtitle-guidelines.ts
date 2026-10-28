import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/netflix-subtitle-guidelines",
  h1: "Netflix subtitle guidelines: what the published timed-text guide says",
  title: "Netflix subtitle guidelines: what the published timed-text guide says",
  metaDescription:
    "A neutral walkthrough of Netflix subtitle guidelines: published timing, reading speed, line length, shot changes, speaker IDs, music and SDH, with attribution.",
  primaryKeyword: "netflix subtitle guidelines",
  capsule:
    "The Netflix subtitle guidelines are delivery requirements published on Netflix's Partner Help Center for timed text made for its catalogue. They cover duration, reading speed, line length, positioning, shot changes, speaker identifiers and sound description. This page paraphrases the published rules and explains how to apply them without treating them as universal standards.",
  published: "2026-02-04",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Scope",
      value: "Published requirements for timed text delivered to Netflix, not a global standard"
    },
    {
      label: "Minimum duration",
      value: "Five-sixths of a second per subtitle event in the general requirements"
    },
    { label: "Maximum duration", value: "Seven seconds per subtitle event" },
    { label: "Line length", value: "42 characters per line in the U.S. English guide" },
    {
      label: "Reading speed",
      value: "Up to 20 characters per second for adult programmes, 17 for children's"
    },
    {
      label: "Gap between events",
      value: "At least two frames; short gaps are closed rather than left uneven"
    }
  ],
  sections: [
    {
      heading: "What the Netflix timed text style guide covers",
      paragraphs: [
        "Netflix publishes timed-text requirements on its [Partner Help Center](https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617-Timed-Text-Style-Guide-General-Requirements). The set includes a general requirements article, a subtitle timing guide, language-specific style guides and file-type guidance. The general article covers duration, line treatment, positioning, consistency and technical aspects. The language guides add character limits, reading speed, punctuation, speaker identifiers and sound description. A vendor may need several of those documents, not the general page alone.",
        "Two cautions matter before applying any of it. The pages are written for vendors delivering timed text to Netflix, not for every video on the web. The values also change: the pages carry change logs, and the general requirements point readers to the current delivery specification. Treat this page as a map of what the published material covers, then open the live article for the figure that applies to your project. VoiceToTextFree is independent and not affiliated with Netflix.",
        "The published material is useful even if you never deliver to Netflix, because it shows how a large buyer turns readability goals into checkable requirements. It also shows where the requirements are intentionally narrow: a rule about shot changes or bracketed labels exists to serve a particular pipeline, not to settle every editorial question."
      ]
    },
    {
      heading: "Netflix subtitle timing: duration, gaps and shot changes",
      paragraphs: [
        "The general requirements set a minimum duration of five-sixths of a second per subtitle event and a maximum of seven seconds. The timing guide describes the minimum as 20 frames and requires at least two frames between events. At 24 fps, gaps of three to eleven frames are treated as awkward and should be closed to two frames, while longer gaps should be at least half a second.",
        "The timing guide also works around the picture. An in-time should land on the first frame of audio, within one or two frames. An out-time may extend at least half a second past the end of dialogue when no following event is close. When a shot change falls within half a second, the guide allows the boundary to move to the cut, with a two-frame gap. Dialogue that genuinely crosses a shot change may keep the caption across the cut, subject to reading speed.",
        "These are delivery rules for Netflix, not a universal formula. A short social clip, a live stream and a classroom recording may need different choices. What travels well is the reasoning: keep captions attached to the voice, avoid accidental flashes, and decide deliberately whether a caption belongs on both sides of a cut."
      ]
    },
    {
      heading: "Netflix reading speed and character limits",
      paragraphs: [
        "The U.S. English guide sets reading speed at up to 20 characters per second for adult programmes and up to 17 for children's programmes. It also sets a 42-character line limit. Those figures are upper limits for that language and audience, not targets to fill. A cue at the limit can read comfortably if the words are simple and the timing is generous.",
        "Reading speed and duration have to be checked together. Shortening the text is usually safer than stretching a cue beyond the audio, because an overlong caption stops feeling attached to the speaker. If a line cannot be reduced without losing meaning, re-segment at a clause boundary or move part of the thought into a neighbouring cue. The [reading speed guide](/guides/subtitle-reading-speed) explains how to calculate the figure, and the [reading speed checker](/subtitle-reading-speed-checker) can flag cues against a chosen limit.",
        "Do not copy the English numbers into another language without checking that language's guide. Character-based scripts, longer average words and different audience expectations all affect what fits. Use a documented local target and review the result in the player."
      ]
    },
    {
      heading: "Netflix line length and line-break rules",
      paragraphs: [
        "The published guides allow a maximum of two lines and usually prefer one. The 42-character limit in the U.S. English guide is a line limit, not a total per cue. When a break is needed, the guidance is to break after punctuation, before conjunctions and before prepositions. It warns against separating an article from its noun, an adjective from its noun, a first name from a last name, a subject pronoun from its verb, a prepositional verb from its preposition, or a verb from an auxiliary, reflexive pronoun or negation.",
        "The U.S. English guide also suggests a bottom-heavy pyramid when several breaks are possible, while avoiding a top line with only one or two words. That is a presentation preference, not a law of readability; a clean clause boundary usually matters more than the silhouette. For a deeper treatment of width and balance, see the guide to [subtitle line length](/guides/subtitle-line-length).",
        "Line treatment interacts with positioning. The general requirements ask for centre-justified subtitles at the top or bottom of the screen, avoiding on-screen text. A line that fits the character limit can still collide with a lower-third graphic, so the final check belongs in the player, not only in the text file."
      ]
    },
    {
      heading: "Speaker IDs and SDH: names, sounds and music",
      paragraphs: [
        "The U.S. English SDH guidance puts speaker identifiers and sound effects in square brackets and uses lowercase except for proper nouns. A label appears when the viewer cannot identify the source from the picture. Before a character is named, the guide suggests a neutral label such as [man] or [woman], with numbers when several unidentified voices appear. Dual-speaker cues use a hyphen with one speaker per line, and the dialogue on each line should be a contained sentence.",
        "Music gets its own conventions. Sung lyrics are italicised and enclosed with music notes at the start and end of each subtitle, song titles sit in quotation marks, and unknown titles can be described instead of guessed. Ambient music can be described by genre or mood. Sound effects should be plot-pertinent and described rather than interpreted. The guide also warns against labelling a hesitation as stuttering unless the speaker actually stutters.",
        "These conventions are specific to the SDH track and the language guide. A same-language track for a casual video may not need every sound description, and a translated track may follow different rules. The principle is consistent: identify what the viewer cannot otherwise know, and do not turn description into commentary."
      ]
    },
    {
      heading: "Positioning, on-screen text and forced narratives",
      paragraphs: [
        "The general requirements ask for centred subtitles at the top or bottom of the frame and for placement that avoids on-screen text. When text occupies both top and bottom, the guide says to choose the position that is easier to read.",
        "Forced narratives translate on-screen text that the audience needs to understand. The timing guide asks them to mimic the on-screen text and stay in sync, setting the boundary halfway through a fade when text fades in or out. The U.S. English guide puts forced narratives in capitals, except for long passages, and says never to combine a forced narrative with dialogue in the same subtitle.",
        "The caveat is important: forced-narrative practice varies by platform and by whether the original already carried a translation. The Netflix pages describe a delivery convention for Netflix. Copy the reasoning, then check the specification for your destination."
      ]
    },
    {
      heading: "How to apply published rules without treating them as universal",
      paragraphs: [
        "Start with the destination. A platform that publishes a timed-text specification expects that specification; a client with a house style expects the house style; a classroom or social channel may have no formal rule beyond readability. The Netflix pages are a credible reference because they are detailed and public, but they are not a default law for independent video.",
        "When no specification exists, adopt a small set of documented defaults and keep them stable across a series. For example: two lines maximum, a reading-speed ceiling you can justify, a minimum duration that prevents flashes, and a consistent speaker-label style. Write those defaults down so a collaborator can reproduce them. Then use a validator to catch structural mistakes before the file reaches a player.",
        "Paste a file into the [SRT editor](/srt-editor) to inspect cue boundaries, or run it through the [subtitle validator](/subtitle-validator) to flag overlaps, bad timestamps and long lines. If you are starting from automatic transcription, generate a first pass on the [VoiceToTextFree home page](/) and treat it as a draft."
      ]
    },
    {
      heading: "A short review checklist for a delivery",
      paragraphs: [
        "Before you call a file finished, confirm the current version of the published article and the guide for the target language. Then read the file as a viewer would: watch the opening, a dense section in the middle and the final minute with sound on. Look for cues that arrive late, gaps that read as flicker, and text that covers a face or an on-screen label.",
        "Use the checklist below as a prompt, not as evidence that the captions are finished."
      ],
      bullets: [
        "Check the live article and the language-specific guide before relying on a number.",
        "Confirm minimum and maximum duration per event.",
        "Check that gaps are deliberate and that shot changes do not produce accidental crossings.",
        "Count characters per second and characters per line.",
        "Review speaker labels, music treatment and meaningful sounds.",
        "Test the export in the target player and keep the source file."
      ]
    }
  ],
  faqs: [
    {
      question: "Are Netflix's timed-text rules mandatory for every video?",
      answer:
        "No. They are delivery requirements for timed text supplied to Netflix, published for vendors and partners. They are a useful reference for other projects, but a different platform, client or classroom may publish its own rules. Check the destination specification before treating any value as required."
    },
    {
      question: "What is the minimum and maximum duration in Netflix's published guide?",
      answer:
        "The general requirements list a minimum of five-sixths of a second and a maximum of seven seconds per subtitle event. The timing guide describes the minimum as 20 frames and also sets a two-frame minimum gap. The current published article is the authority if those values change."
    },
    {
      question: "What reading speed does Netflix use for English?",
      answer:
        "The US English guide allows up to 20 characters per second for adult programmes and up to 17 for children's programmes. The same guide sets a 42-character line limit. Those are ceilings for that language and audience, not universal targets."
    },
    {
      question: "How many characters fit on a Netflix subtitle line?",
      answer:
        "The US English guide specifies 42 characters per line, with a maximum of two lines. Other language guides may set different limits because of script and word length. Use the guide for the language you are delivering, not the English figure by default."
    },
    {
      question: "Does Netflix require speaker labels in every subtitle?",
      answer:
        "No. The SDH guidance asks for a label when the viewer cannot identify the speaker from the picture, and it sets bracket and capitalisation conventions for those labels. Ordinary dialogue does not need a label when the speaker is visible and unambiguous. The language-specific guide contains the details."
    },
    {
      question: "Does VoiceToTextFree follow Netflix's guide automatically?",
      answer:
        "No. VoiceToTextFree is independent and not affiliated with Netflix, and its validator uses configurable limits rather than a Netflix delivery preset. You can set a reading-speed ceiling and a line-length limit that match your project. The published guide remains the source for Netflix's own requirements."
    }
  ],
  workedExample: {
    title: "Worked example: a two-frame gap at 24 fps",
    intro:
      "This seven-second excerpt is illustrative, not an actual Netflix delivery and not a benchmark. It uses 24 fps, so two frames last about 83 ms. The first cue runs 2.5 seconds, the second starts two frames after it ends, and the third follows the same pattern.",
    srt: `1
00:00:01,000 --> 00:00:03,500
The package arrived
before noon.

2
00:00:03,583 --> 00:00:06,000
No one signed for it,
so it went back.

3
00:00:06,083 --> 00:00:08,000
[door closes]`,
    note: "Cue 1 and cue 2 are separated by 83 ms, which is two frames at 24 fps. Cue 2 starts on the frame after the gap and stays under seven seconds. Cue 3 is a short sound description, not dialogue. The example shows the shape of the rule; always confirm the current values and the language-specific requirements in the published guide."
  },
  sources: [
    {
      label: "Netflix Partner Help — Timed Text Style Guide: General Requirements",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617-Timed-Text-Style-Guide-General-Requirements"
    },
    {
      label: "Netflix Partner Help — Timed Text Style Guide: Subtitle Timing Guidelines",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/360051554394-Timed-Text-Style-Guide-Subtitle-Timing-Guidelines"
    },
    {
      label: "Netflix Partner Help — English (USA) Timed Text Style Guide",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/217350977-English-USA-Timed-Text-Style-Guide"
    }
  ],
  relatedGuides: [
    "subtitle-timing-guidelines",
    "subtitle-line-length",
    "subtitle-reading-speed",
    "subtitle-best-practices"
  ],
  keywords: [
    { keyword: "netflix subtitle guidelines", role: "primary" },
    { keyword: "netflix timed text style guide", role: "secondary", headingLevel: 2 },
    { keyword: "netflix subtitle timing", role: "secondary", headingLevel: 2 },
    { keyword: "netflix reading speed", role: "secondary", headingLevel: 2 },
    { keyword: "netflix line length", role: "secondary", headingLevel: 2 },
    { keyword: "speaker ids and sdh", role: "secondary", headingLevel: 2 },
    { keyword: "netflix timed text rules", role: "synonym" },
    {
      keyword: "What is the minimum and maximum duration in Netflix's published guide?",
      role: "faq"
    },
    { keyword: "Does VoiceToTextFree follow Netflix's guide automatically?", role: "faq" }
  ]
};
