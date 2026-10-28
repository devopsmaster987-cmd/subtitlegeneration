import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/subtitles-for-accessibility",
  h1: "Subtitles for accessibility: what WCAG requires and how to deliver it",
  title: "Subtitles for accessibility: what WCAG requires and how to deliver it",
  metaDescription:
    "Subtitles for accessibility explained with WCAG 2.2: captions for prerecorded and live audio, speaker IDs, sound descriptions, timing and WebVTT delivery.",
  primaryKeyword: "subtitles for accessibility",
  capsule:
    "Subtitles for accessibility are not a transcript with timestamps. WCAG 2.2 Success Criterion 1.2.2 requires captions for prerecorded audio, and 1.2.4 covers live audio. Good captions identify speakers, describe meaningful sounds, stay synchronized and remain readable. Audio description is a separate success criterion. This guide explains the requirements and the practical checks that follow.",
  published: "2026-01-27",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    { label: "Prerecorded captions", value: "WCAG 2.2 SC 1.2.2, Level A" },
    { label: "Live captions", value: "WCAG 2.2 SC 1.2.4, Level AA" },
    {
      label: "Audio description",
      value: "Separate requirement in SC 1.2.3 and 1.2.5, not a caption substitute"
    },
    { label: "Content", value: "Dialogue, speaker identification and meaningful non-speech audio" },
    { label: "Web format", value: "WebVTT is the common caption format for HTML5 video" },
    {
      label: "Automation",
      value:
        "Automatic captions need review; WAI says they are not sufficient unless fully accurate"
    }
  ],
  sections: [
    {
      heading: "WCAG success criteria for captions at a glance",
      paragraphs: [
        "Accessibility guidance starts with a simple question: can a viewer who cannot hear the audio follow the content? WCAG 2.2 answers that with success criteria rather than a single checklist for fonts or colours. The two caption criteria sit in the time-based media guideline. One covers prerecorded audio, the other covers live audio, and both apply to synchronized media rather than to text on a static page.",
        "WCAG is a technical standard with conformance levels. Success Criterion 1.2.2 is Level A, the base level, and Success Criterion 1.2.4 is Level AA. A project can meet those criteria without meeting every accessibility guideline, and meeting them says nothing by itself about local law. Treat the standard as the published baseline, then check the obligations that apply to your organization."
      ]
    },
    {
      heading: "Captions for prerecorded audio (1.2.2)",
      paragraphs: [
        "Success Criterion 1.2.2 states that captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labelled as such. The W3C WAI Understanding page explains that the intent is to let people who are deaf or hard of hearing watch the presentation. It also notes that captions include dialogue, identify who is speaking and include non-speech information conveyed through sound.",
        "In practice, that means every prerecorded video with meaningful audio needs a caption track, not just a transcript elsewhere on the page. The exception is narrow: the media must present no more information than text that is already available and must be clearly labelled as an alternative. Background music with no narrative importance may not need a description, but speech, meaningful sound effects and lyrics usually do. The requirement applies to the audio content, not to the popularity or length of the video."
      ]
    },
    {
      heading: "Live captions (1.2.4)",
      paragraphs: [
        "Success Criterion 1.2.4 requires captions for all live audio content in synchronized media, and it sits at Level AA. The W3C WAI Understanding page describes the goal as providing synchronized text for real-time presentations so that people who are deaf or hard of hearing can follow them. Live captions are usually produced by a professional captioner or a real-time captioning service, because the text must keep up with the speaker.",
        "A recording of a live event may need a second pass. The WAI captions page notes that if you post a recording of a live captioned event, you will probably need to do minor editing for accuracy. Names, numbers and technical terms are the usual casualties of real-time work. If the live stream is the only version, test the caption delay and make sure the viewer can see the text without it covering the speaker or the presentation slides."
      ]
    },
    {
      heading: "Audio description is a separate success criterion",
      paragraphs: [
        "Audio description narrates important visual information that is not available in the main soundtrack: actions, characters, scene changes and on-screen text. WCAG treats it separately from captions. Success Criterion 1.2.3 at Level A lets an author choose audio description or a full text alternative for prerecorded video, while Success Criterion 1.2.5 at Level AA requires audio description for prerecorded video. The W3C WAI Understanding page for 1.2.5 explains that description is added during existing pauses in dialogue.",
        "Captions do not satisfy that requirement. A caption track gives a deaf or hard-of-hearing viewer access to the audio; it does not give a blind or low-vision viewer access to the picture. The WAI captions page recommends providing a separate description of visual information for optimum accessibility. If your project is planning an accessibility pass, budget for description as its own deliverable rather than folding it into the caption file."
      ]
    },
    {
      heading: "Accuracy, speaker identification and non-speech information",
      paragraphs: [
        "The success criteria require captions to be provided, and the WAI guidance explains what usable captions contain. Automatic captions are a starting point, not a finished deliverable: the WAI captions page states that automatically generated captions do not meet user needs or accessibility requirements unless they are confirmed to be fully accurate. A missing word such as not can reverse the meaning of a sentence, and a misheard name can confuse the viewer for the rest of the scene.",
        "Speaker identification matters when the voice is not obvious from the picture. A short name label or a consistent colour can help, provided the player supports it. Non-speech information should describe sounds that carry meaning, not every background noise. The Understanding page for 1.2.2 gives the example of meaningful sound effects, and the WAI captioning guidance treats the selection of those sounds as a judgement call rather than a mechanical transcription task."
      ]
    },
    {
      heading: "Timing, line length, reading speed and contrast",
      paragraphs: [
        "Captions must be synchronized with the audio, or they stop being captions and become a transcript that happens to sit on the screen. Keep cues close to the voice, leave a small gap between events when the audio allows, and avoid leaving text over a scene where it no longer applies. WCAG does not prescribe a single reading speed for every language and platform, so use the published guidance for the destination and check the result with a [reading speed checker](/subtitle-reading-speed-checker).",
        "Line length and contrast are presentation issues that affect whether the text can be read at all. Keep cues to two lines, avoid covering faces or essential on-screen text, and do not rely on a custom style that disappears against a bright or busy scene. The WAI captions page notes that browser and player support for styling is inconsistent, and that most web videos use the player's default presentation. Test the default before adding a custom look.",
        "Contrast is easiest to judge on the actual video, not on a white editing canvas. A white caption with no background can vanish over a bright window or a pale wall, while a heavy black box can cover important details. If the player supports it, use a semi-transparent background or an outline and keep the style consistent. Then check the result on a phone in daylight, because that is often where a caption style that looked fine on a monitor becomes hard to read."
      ]
    },
    {
      heading: "Accessible subtitle files: WebVTT, SRT and sidecars",
      paragraphs: [
        "The WAI captions page names WebVTT as the most common format for captions on the web, and the HTML5 track element expects it. A WebVTT file can carry cue text, timing and optional speaker tags, and it stays separate from the video so the viewer can turn it on or off. SRT remains useful for editing software and for platforms that accept it, but it is not the native format for an HTML5 video element.",
        "A sidecar file is the accessible default because it preserves the text as text. It can be searched, restyled by the player, translated and corrected without re-exporting the video. Save it as UTF-8 so non-Latin scripts and accented characters survive, and test the actual upload rather than only the local preview. For a format-level comparison, see our guide to [SRT vs VTT](/guides/srt-vs-vtt)."
      ]
    },
    {
      heading: "Player controls and a practical delivery checklist",
      paragraphs: [
        "A caption track is only useful if the viewer can find and control it. Provide a visible caption button, make sure it works from the keyboard, and remember the viewer's choice where the player allows it. Captions should not cover essential interface controls or the speaker's face, and the player should let the user resize or restyle the text when it supports those preferences. A track that exists but cannot be turned on is not an accessible experience.",
        "Before delivery, check that every spoken line is present, speaker changes are clear, meaningful sounds are described and the timing follows the audio. Confirm the file is UTF-8, the cue numbers are sequential if the format requires them, and the last cue is not clipped. Run the file through our [subtitle validator](/subtitle-validator), then watch it in the target player on a phone and a desktop. The validation catches structure; the viewing catches the experience."
      ],
      bullets: [
        "Every spoken line is present and intelligible.",
        "Speaker changes are identifiable.",
        "Meaningful sounds and music are described.",
        "Cues are synchronized and readable at normal speed.",
        "The caption control is visible and keyboard accessible."
      ]
    }
  ],
  faqs: [
    {
      question: "Do automatically generated captions meet WCAG?",
      answer:
        "Not on their own. The W3C WAI captions page says automatically generated captions do not meet user needs or accessibility requirements unless they are confirmed to be fully accurate. Use them as a starting point, then review names, numbers, technical terms and anything that changes the meaning."
    },
    {
      question: "What does WCAG 1.2.2 require?",
      answer:
        "Success Criterion 1.2.2 requires captions for all prerecorded audio content in synchronized media. The narrow exception is media that is a text alternative and is clearly labelled as such. It is a Level A requirement in WCAG 2.2."
    },
    {
      question: "Does WCAG require audio description as well as captions?",
      answer:
        "Yes, as a separate requirement. Captions address audio content for viewers who cannot hear it, while audio description addresses visual content for viewers who cannot see it. Success Criterion 1.2.5 requires audio description for prerecorded video at Level AA."
    },
    {
      question: "Which subtitle format should I use for web accessibility?",
      answer:
        "WebVTT is the usual choice because it is the native format for the HTML5 track element and is named by W3C WAI as the most common web caption format. SRT is still useful for editing and for platforms that accept it. Keep a sidecar file so the text remains editable."
    },
    {
      question: "How accurate do captions need to be?",
      answer:
        "The success criteria do not state a single accuracy percentage. The practical test is whether the captions convey the dialogue, speaker changes and meaningful sounds correctly. W3C WAI advises that automatic captions are not sufficient unless confirmed to be fully accurate, so a human review is part of the work."
    },
    {
      question: "Can captions be turned off?",
      answer:
        "Closed captions can be turned on or off by the viewer, which is why they are the usual choice for web video. Open captions are burned into the picture and cannot be switched off. If you use open captions, make sure the text does not cover essential visual information."
    }
  ],
  workedExample: {
    title: "Worked example: a short accessible caption track",
    intro:
      "This SRT is for a 25 fps clip in a building lobby. It labels both speakers, describes an alarm that interrupts the conversation, and leaves a short gap between events. The timings are deliberately modest so the viewer can read each line without the cue running into the next sound.",
    srt: `1
00:00:01,000 --> 00:00:03,400
MAYA: The lift is out of service.

2
00:00:03,600 --> 00:00:05,200
[alarm beeps twice]

3
00:00:05,400 --> 00:00:08,000
MAYA: Use the stairs by the café.

4
00:00:08,200 --> 00:00:10,600
LEO: I will meet you upstairs.`,
    note: "The speaker labels make the exchange clear even when the camera is on the lobby rather than the person talking. The alarm is described because it changes what the characters do next. Each cue stays on one or two short lines, and the 200 ms gaps make the changes visible without pushing the text away from the voice."
  },
  sources: [
    {
      label: "W3C WAI — Captions/Subtitles",
      url: "https://www.w3.org/WAI/media/av/captions/"
    },
    {
      label: "W3C WAI — Understanding SC 1.2.2: Captions (Prerecorded)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html"
    },
    {
      label: "W3C WAI — Understanding SC 1.2.4: Captions (Live)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html"
    },
    {
      label: "W3C WAI — Understanding SC 1.2.5: Audio Description (Prerecorded)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html"
    }
  ],
  relatedGuides: [
    "closed-captions-vs-subtitles",
    "subtitle-best-practices",
    "subtitle-timing-guidelines",
    "subtitle-reading-speed"
  ],
  keywords: [
    { keyword: "subtitles for accessibility", role: "primary" },
    { keyword: "captions for prerecorded audio", role: "secondary", headingLevel: 2 },
    { keyword: "live captions", role: "secondary", headingLevel: 2 },
    { keyword: "audio description", role: "secondary", headingLevel: 2 },
    { keyword: "wcag success criteria for captions", role: "secondary", headingLevel: 2 },
    { keyword: "accessible subtitle files", role: "secondary", headingLevel: 2 },
    { keyword: "Do automatically generated captions meet WCAG?", role: "faq" }
  ]
};
