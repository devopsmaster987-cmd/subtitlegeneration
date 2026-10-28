import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/word-aligned-and-styled-captions",
  h1: "Word aligned subtitles and styled captions: what is possible",
  title: "Word aligned subtitles and styled captions: what is possible",
  metaDescription:
    "Word aligned subtitles need per-word timing, but VoiceToTextFree exports plain timed cues. Learn what word-level timing, styled captions and animation require.",
  primaryKeyword: "word aligned subtitles",
  capsule:
    "Word aligned subtitles give every word its own start and end time, which enables karaoke highlights, word-by-word reveals and precise caption animation. This browser tool exports segment-level cues, not word timings. This guide explains the difference, how styled and animated caption layers work in editors and web players, and when to use an external workflow.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 10,
  keyFacts: [
    {
      label: "VoiceToTextFree export",
      value: "SRT, VTT, TXT and TXT with timestamps, written from segment cues"
    },
    {
      label: "Timing granularity",
      value: "One start and end time per transcribed segment, not per word"
    },
    {
      label: "Word-level formats",
      value: "WebVTT cue timestamps, ASS karaoke tags and TTML spans"
    },
    { label: "Burn-in style", value: "One fixed style for the whole file; no per-word animation" },
    {
      label: "Web styling",
      value: "WebVTT cue settings and CSS ::cue, with browser-dependent support"
    },
    { label: "Main risk", value: "A word effect can look precise and still be too fast to read" },
    {
      label: "Review",
      value: "Watch the finished file at normal speed, not only in the editor timeline"
    }
  ],
  sections: [
    {
      heading: "What word level timing actually requires",
      paragraphs: [
        "Word level timing means each word has its own start and end point inside a cue. The cue still has an overall start and end, but the renderer knows when train becomes active, when leaves appears and when the line finishes. That data makes karaoke highlights and word-by-word reveals possible.",
        "A normal subtitle file does not contain it. It has one start, one end and a block of text. The player can show the cue but cannot know which word is spoken at 2.4 seconds unless the file carries inner timestamps or the player runs its own alignment. A fade on the cue is not word alignment.",
        "Word alignment needs a source of truth. Speech recognition can estimate word times, forced alignment can match a transcript to audio, and a human can hand-time a short clip. Each method has error, especially with music, overlapping speech and accents. Review the timings as carefully as the text."
      ]
    },
    {
      heading: "What this browser tool exports: plain timed cues",
      paragraphs: [
        "[VoiceToTextFree](/)'s transcription worker asks the model for timestamps and receives chunks. Each chunk becomes a segment with a start, an end and text, and the editor and exporters work from those segments. The SRT, VTT, TXT and timed TXT downloads contain one cue per segment, not one per word.",
        "That is a deliberate limit. The export is a clean timed transcript for editors, players and caption uploads. It is not a word-level timing file, it contains no karaoke tags, and the burn-in step draws the whole cue with one fixed style. A tutorial that promises word-by-word animation from a plain SRT is using another pipeline.",
        "You can still build styled captions from the export. Import the SRT into an editor, apply a style and animate the whole cue. That is cue-level work. It can look polished, but it is not per-word data and it will not survive as word timings if you export the SRT again."
      ]
    },
    {
      heading: "Word level timing in WebVTT, ASS and TTML",
      paragraphs: [
        "WebVTT supports inner cue timestamps. A cue can contain a timestamp such as <00:00:02.400> before a word, and the text after it becomes active at that point. The W3C specification defines these cue timestamps, and a supporting player can use them for highlighting. Browser behaviour varies, so test the effect.",
        "ASS, used by many desktop workflows, has karaoke tags such as \\k and \\kf that assign durations to syllables or words. Those tags are not part of SRT or WebVTT and do not survive a plain SRT round trip. TTML uses timed spans instead. The right format depends on the player and editor.",
        "All three formats need word timings from somewhere. A text file with words and no inner times is still cue-level. Do not add fake timestamps to look word-aligned; a highlight that drifts from the voice is worse than none."
      ]
    },
    {
      heading: "Styled captions: typography that survives the export",
      paragraphs: [
        "Styled captions control font, weight, colour, outline, background, position and line spacing. In a video editor, the style lives in the caption layer or title tool and is rendered into the export. In a web player, it may come from the default, WebVTT cue settings or CSS on the cue pseudo-element.",
        "Style often does not travel with the text. SRT has no official styling model, and many platforms ignore inline tags. WebVTT has a formal model, but browsers restrict properties and may let the viewer override the result. A style that looks perfect in one player can disappear in another.",
        "A burned-in video gives you the final look because the text becomes pixels. That is the advantage and the cost: the style is frozen. For a sidecar, keep the style simple and test it. If a brand needs a specific typeface, burn a delivery copy and keep an unstyled sidecar."
      ]
    },
    {
      heading: "Animated captions: reveal, karaoke and motion",
      paragraphs: [
        "Animated captions add change over time: words appear one at a time, the current word changes colour, a line slides in, or a background box grows behind the speaker. A short social clip can become easier to follow because the eye is guided to the current word. A longer video can become exhausting if every line moves.",
        "The useful version is restrained. A karaoke highlight that follows the voice helps a viewer listening in a second language. A word-by-word reveal can keep pace with fast speech. A constant bounce or spin adds motion without information and distracts from the face or on-screen text.",
        "Animation also raises the reading-speed problem. A word that appears late gives less time to read, even if the cue stays on screen. If the effect uses estimated word times, errors accumulate. Build on reviewed timings and watch without pausing."
      ]
    },
    {
      heading: "The caption layer in an editor",
      paragraphs: [
        "A caption layer is a separate track above the video in an editor. The video stays untouched underneath, and captions can be edited, restyled, moved or hidden without re-encoding the source. Premiere Pro, DaVinci Resolve, Final Cut Pro and CapCut usually create or import a text layer that can be exported as a sidecar or rendered into the picture.",
        "Keeping the layer separate helps even for burned-in delivery. You can revise text after review, change the font for another market, or export a clean and a captioned version. If the editor supports word-level text animation, the effect lives in that layer rather than in the SRT.",
        "Name the layer and keep it above adjustment layers that change colour or blur. A caption below a grade can lose contrast, and one inside a nested sequence may not export where expected. Check the order, then watch the rendered file."
      ]
    },
    {
      heading: "When word level timing helps, and when it hurts",
      paragraphs: [
        "Word-level timing helps when the exact moment of a word matters. Karaoke, language learning, read-along lyrics, pronunciation clips and highly produced social captions are the obvious cases. It also helps an interactive transcript that highlights the current word.",
        "It hurts when the content does not need it. A documentary interview, a lecture or a training video reads better with a stable two-line cue. Constant movement competes with the speaker, and a highlight that lags by a fraction of a second is more distracting than a static line.",
        "Follow the viewer's task. If the viewer is singing along, precise timing is the point. If the viewer is trying to understand an explanation, a calm cue with good line breaks is better."
      ],
      bullets: [
        "Use word timing for karaoke, lyrics and read-along content.",
        "Use stable cues for interviews, lectures and training.",
        "Keep a plain SRT as the master."
      ]
    },
    {
      heading: "External workflow: from segment cues to word timings",
      paragraphs: [
        "If you need true word timing, use a pipeline that produces it. A local Whisper setup can be asked for word-level timestamps, and a forced-alignment tool can align a corrected transcript to the audio. The output is usually JSON or a word-timed subtitle format, not a plain SRT. From there, generate WebVTT cue timestamps, ASS karaoke tags or the format your editor accepts.",
        "Start with a corrected transcript. Word timings attached to the wrong words are harder to fix than a missing effect. Check names, numbers and sentence boundaries, then align. For a short clip, hand-timing a few words may be faster than building a pipeline.",
        "Keep the generated file separate from the plain SRT. The plain SRT remains the accessible master; the word-timed file is a presentation layer. If the animation goes on the web, provide a normal track too."
      ]
    },
    {
      heading: "Accessibility and review checks for styled captions",
      paragraphs: [
        "A styled caption still has to be readable. Contrast, size, line length and reading speed matter more than the typeface. A thin font with a subtle outline can disappear over a bright scene, and a decorative font can slow reading. Check the style on the video, on a phone and in the target player.",
        "Animation needs an extra check. Flashing or rapidly changing text can be uncomfortable, and a web player may not respect a reduced-motion preference. If the effect is essential, keep it gentle and offer a plain track. For accessibility, a stable track is safer.",
        "Check that the effect did not break the text. Word-level tags can swallow punctuation, split a name or leave a stray space. Read the rendered cue, not just the source file. Our [accessibility guide](/guides/subtitles-for-accessibility) covers requirements, and the [timing guide](/guides/how-to-sync-subtitles) explains the cue grid."
      ]
    },
    {
      heading: "Verification before publishing",
      paragraphs: [
        "Verify text, timing and render separately. Compare the cue list with the transcript and check names, numbers and line breaks. Watch the first and last cue and any dense dialogue. Play the export in the destination player and check the caption layer, font fallback and safe area.",
        "For right-to-left targets, add a direction check. Word-by-word effects can expose bidi problems because each word becomes a display unit. Test [Urdu](/subtitle-generator/urdu) and [Arabic](/subtitle-generator/arabic) cues with numbers and Latin names, and confirm the highlight does not reorder the text.",
        "Keep the plain SRT, the styled project and the export together. If review changes a line, rebuild the presentation layer without retranscribing. The plain file survives format changes."
      ]
    }
  ],
  faqs: [
    {
      question: "Does VoiceToTextFree export word-level timings?",
      answer:
        "No. The transcription worker returns segment-level start and end times, and the exporters write one cue per segment. The SRT and VTT files do not contain per-word timestamps. You can build a styled caption layer in an editor from those cues, but it will not be true word-level alignment."
    },
    {
      question: "Can I make word-by-word captions with this tool?",
      answer:
        "Not directly. The tool produces timed cues, not word timings, and the burn-in step uses one fixed style for the whole file. For a true word-by-word effect, use an external pipeline that generates word timings, then build the animation in an editor or a web player."
    },
    {
      question: "What is the difference between styled and animated captions?",
      answer:
        "Styled captions change how the text looks: font, colour, outline, background and position. Animated captions change over time: words appear, a highlight moves, or a line slides in. A caption can be styled without being animated, and animation usually needs timing data that a plain SRT does not contain."
    },
    {
      question: "Which subtitle format supports word-level timing?",
      answer:
        "WebVTT supports inner cue timestamps, ASS uses karaoke tags, and TTML uses timed spans. SRT has no standard word-level syntax. The format you choose should match the player or editor that will render the effect, and you should test it there."
    },
    {
      question: "Do animated captions hurt accessibility?",
      answer:
        "They can. Rapid movement or flashing can distract or discomfort some viewers, and a word that appears late reduces reading time. A stable caption track is the safer default for accessibility. If you publish an animated version, keep a plain caption track available as well."
    },
    {
      question: "How do I add a caption layer in a video editor?",
      answer:
        "Import the SRT into the editor's caption or subtitle workflow, which usually creates a text layer above the video. Style and animate that layer, then export either a sidecar file or a rendered video. Check the layer order and watch the rendered result, because a caption below a colour grade can lose contrast."
    }
  ],
  workedExample: {
    title: "Worked example: one segment cue and a word-timed WebVTT cue",
    intro:
      "The first block is what this tool exports: one cue for the whole sentence, with a single start and end. The second block is a hand-built WebVTT cue with inner timestamps, which a player can use to reveal or highlight individual words. The inner timings are illustrative and would need review against the audio.",
    srt: `SRT from segment timing

1
00:00:00,500 --> 00:00:03,200
The train leaves at seven.

WEBVTT with word-level cue timestamps

WEBVTT

00:00:00.500 --> 00:00:03.200
The <00:00:00.900>train <00:00:01.400>leaves <00:00:02.000>at <00:00:02.400>seven.`,
    note: "The SRT has one timing pair for the sentence. The WebVTT cue has the same outer timing plus four inner cue timestamps, which are the extra data needed for a word highlight. VoiceToTextFree does not generate the inner timestamps; they come from a word-level alignment step or from hand timing, and they should be checked before the effect is published."
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
      label: "W3C WAI — Captions/Subtitles",
      url: "https://www.w3.org/WAI/media/av/captions/"
    }
  ],
  relatedGuides: [
    "how-to-burn-subtitles-into-video",
    "subtitle-line-length",
    "subtitle-reading-speed",
    "how-to-improve-whisper-accuracy"
  ],
  keywords: [
    { keyword: "word aligned subtitles", role: "primary" },
    { keyword: "styled captions", role: "secondary", headingLevel: 2 },
    { keyword: "animated captions", role: "secondary", headingLevel: 2 },
    { keyword: "caption layer", role: "secondary", headingLevel: 2 },
    { keyword: "word level timing", role: "secondary", headingLevel: 2 },
    { keyword: "Does VoiceToTextFree export word-level timings?", role: "faq" },
    { keyword: "Can I make word-by-word captions with this tool?", role: "faq" }
  ]
};
