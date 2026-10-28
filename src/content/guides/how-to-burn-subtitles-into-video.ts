import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-burn-subtitles-into-video",
  h1: "How to burn subtitles into video: a practical burn-in guide",
  title: "How to burn subtitles into video: a practical burn-in guide",
  metaDescription:
    "Learn how to burn subtitles into video with ffmpeg.wasm in the browser, check readability, and see when a sidecar file is still the accessible choice.",
  primaryKeyword: "how to burn subtitles into video",
  capsule:
    "Learning how to burn subtitles into video means accepting a trade: the words become part of every frame. This guide covers the browser burn-in step, the re-encode cost, MP4 and WebM output, editor alternatives, readability checks and the accessibility problem that a sidecar file solves.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 10,
  keyFacts: [
    { label: "Output container", value: "MP4 for most inputs; a WebM source is written as .webm" },
    { label: "Video encode", value: "H.264 through libx264 at CRF 22 with the veryfast preset" },
    { label: "Audio in the MP4", value: "AAC at 160 kbps" },
    {
      label: "Burn-in style",
      value: "Font size 22, bottom margin 32, white text with a dark outline"
    },
    {
      label: "Cost",
      value: "A full decode and re-encode in the browser; long clips use time and memory"
    },
    {
      label: "Viewer control",
      value: "None: the text is part of the picture and cannot be switched off"
    },
    { label: "Editable master", value: "Keep the SRT or VTT sidecar even after burning a copy" }
  ],
  sections: [
    {
      heading: "What burn-in changes, and what it does not",
      paragraphs: [
        "Burn-in renders each subtitle cue into the video frames during an encode, so the letters become pixels rather than a text track. The words then survive on a projector, a hotel television, a social player with no caption menu and a phone with subtitles disabled.",
        "The trade is control. You cannot toggle the text, switch languages, restyle it for a viewer who needs a larger font, or copy a line into a search box. The original audio is normally kept, but the subtitle information is no longer separable from the image."
      ]
    },
    {
      heading: "Burn-in vs sidecar subtitles: burned in captions compared",
      paragraphs: [
        "Burned in captions are open captions: they are always visible and cannot be turned off. A sidecar track is closed in the practical sense that the viewer can hide it, and the player can use the viewer's font, size and colour preferences. The W3C Web Accessibility Initiative draws the same distinction.",
        "A sidecar file also keeps the text available to search, translation and assistive technology. If you need captions for accessibility, publish a sidecar track as the primary deliverable and treat a burned copy as a convenience. Our guide to [subtitles for accessibility](/guides/subtitles-for-accessibility) explains the criteria.",
        "The two deliverables can coexist. Keep one master SRT, publish a VTT track next to the video, and burn a separate copy for the platform that cannot accept a caption file."
      ]
    },
    {
      heading: "When hardcoded subtitles are the right export",
      paragraphs: [
        "Hardcoded subtitles are appropriate when the destination cannot load a separate track. Short social clips, in-store displays, event loops, offline kiosks, a file played from a USB stick and a client who needs one self-contained file are common examples. They also suit a title sequence where the captions are part of the design.",
        "They are a poor default for a website, a learning platform, a broadcast deliverable or any project with an accessibility requirement. They are also wrong when the text may change, when you need several languages, or when the video will be re-edited."
      ],
      bullets: [
        "Use burn-in for a self-contained file that must look identical everywhere.",
        "Use burn-in for a platform that only accepts a video upload.",
        "Use a sidecar for accessibility, translation and later corrections.",
        "Use both when the platform needs a video but the archive needs text."
      ]
    },
    {
      heading: "The ffmpeg.wasm re-encode cost in this browser tool",
      paragraphs: [
        "The browser burn-in step uses ffmpeg.wasm, so the video is decoded, filtered and encoded on your device. Nothing is uploaded, but every frame is processed and the encoder writes a new stream. A clip that plays in two minutes can still take a noticeable time to finish because playback and encoding are different jobs.",
        "The worker uses libx264 with the veryfast preset and CRF 22, and it re-encodes audio to AAC at 160 kbps for the MP4 output. Memory use grows with resolution and duration, so a long file can exhaust a phone or a laptop. Keep the tab open until the download link appears; if the device cannot finish, export the SRT and burn it in a desktop editor. The [browser transcriber](/) still gives you the text."
      ]
    },
    {
      heading: "MP4 and WebM output, fonts and layout",
      paragraphs: [
        "Most inputs produce an MP4, which plays in the widest range of editors, phones and browsers. When the source extension is WebM, the tool names the result with a .webm extension. Judge compatibility by playing the downloaded file in the player you will actually use.",
        "The burn uses the subtitles filter with a forced style: font size 22, bottom margin 32, white text and a thin dark outline. If the requested font is missing, libass substitutes another, which can change line breaks and text width. For [Arabic](/subtitle-generator/arabic) or [Urdu](/subtitle-generator/urdu), use a font that contains the script and test the shaping; a fallback that handles Latin may not handle Nastaliq or joined Arabic forms.",
        "The filter does not wrap text intelligently for every language. A long cue can run off the frame or split at an awkward point. Shorten cues, keep them to two lines where possible, and check the result at the target resolution."
      ],
      bullets: [
        "MP4 is the default for most source files.",
        "A WebM source is returned as a .webm file.",
        "The burn style is fixed, so make typography decisions in the SRT first.",
        "Test the font on the actual machine that will encode or present the video."
      ]
    },
    {
      heading: "An editor alternative: burn in without the browser",
      paragraphs: [
        "If the browser encode is too slow, import the SRT into a desktop editor and export there. Premiere Pro, DaVinci Resolve, Final Cut Pro and CapCut all provide caption or subtitle workflows that place text on the timeline. Menu names change between versions, so check the current help page.",
        "An editor gives more control over font, position, animation and safe margins, and it renders with the project's codec settings. The cost is an installed application and a project setup. Either way, keep the SRT as the source of truth and do not retype the cues inside the editor."
      ]
    },
    {
      heading: "Readability checks before you export",
      paragraphs: [
        "Burn-in makes every readability problem permanent. Check cue length, reading speed and contrast before you start the encode. A line that looks fine in a text editor can become two cramped lines on a phone, and white text can disappear over a bright wall.",
        "Aim for short cues, no more than two lines, and enough time to read without pausing. The limits depend on language and platform, so use published guidance rather than one universal number. Run the file through a [subtitle reading speed checker](/subtitle-reading-speed-checker) and review the [line length guidance](/guides/subtitle-line-length) before a re-encode.",
        "Contrast is separate. White text with a dark outline works over many scenes but can blend into a pale sky or a busy pattern. Choose a size and outline that remain legible in the darkest and brightest shots, then inspect those shots."
      ],
      bullets: [
        "Keep cues short and avoid more than two lines.",
        "Leave the text on screen long enough for the spoken line.",
        "Check the brightest and busiest shots, not just the first frame.",
        "Watch the result at phone size, not only on a desktop monitor."
      ]
    },
    {
      heading: "Verify burned in subtitles on three screens",
      paragraphs: [
        "The first verification pass is a phone in portrait orientation, where small text, low contrast and edge crowding become obvious. The second is a desktop player at the delivered resolution. The third is the device that will present the file: a television, a projector or a kiosk display. If the file goes to a platform, watch the processed version there too, because the platform may re-encode it.",
        "Check the first and last cue, the busiest scene and any line with a name or number. Look for clipped descenders, missing glyphs shown as boxes, punctuation on the wrong side of an Arabic or Urdu line, and text covering a face or label. If cues drift, fix timing before burning; the [sync guide](/guides/how-to-sync-subtitles) covers drift. A burned file cannot be patched later, so review before delivery."
      ]
    },
    {
      heading: "Why burned-in text is not accessible captions",
      paragraphs: [
        "Burned-in text cannot be turned off, resized by the player, restyled for contrast or read by a screen reader as text. A viewer who needs captions but not permanent text has no choice, and a viewer who needs a larger font cannot change it. The W3C WAI therefore describes open captions as always displayed and closed captions as the usual web choice.",
        "Accuracy matters too. Automatic transcription is a starting point, and the WAI notes that automatic captions are not sufficient unless confirmed fully accurate. Review names, numbers and meaning before export. If the video is published on the web, provide a caption track with the HTML5 video and keep the burned copy as an optional download. The [accessibility guide](/guides/subtitles-for-accessibility) covers the requirements."
      ]
    },
    {
      heading: "Step by step: from media to a subtitled file",
      paragraphs: [
        "The browser workflow is short, but the order matters because the burn-in stage uses the cues that are in the editor at that moment."
      ],
      steps: [
        "Open the [VoiceToTextFree home page](/) and add the video file. The media stays in the browser.",
        "Choose the spoken language if you know it, or leave detection on. Pick a model that fits the device.",
        "Run the transcription and wait for the segments to appear.",
        "Read and correct the cues. Fix names, numbers, punctuation and line breaks before exporting.",
        "Export the SRT with the download button or Ctrl/Cmd + S. Keep this file even if you also burn a copy.",
        "Select the burn-in option, wait for the progress to finish and download the subtitled video.",
        "Play the downloaded file on a phone and a desktop, then compare the first and last cues with the audio."
      ]
    }
  ],
  faqs: [
    {
      question: "Does burning subtitles into video reduce quality?",
      answer:
        "Yes, the video is re-encoded, so some quality is lost. The browser burn uses H.264 at CRF 22, which is a visually reasonable setting for many clips but still a second generation of compression. Keep the original file and treat the burned copy as a delivery version."
    },
    {
      question: "Can I turn off burned-in subtitles?",
      answer:
        "No. Burned-in subtitles are part of the picture, so the viewer cannot hide them, change their size or switch language. If the viewer needs a choice, publish a separate SRT or WebVTT track instead of, or in addition to, the burned copy."
    },
    {
      question: "How long does browser burn-in take?",
      answer:
        "There is no fixed number because it depends on resolution, duration, codec and the device's CPU and memory. The tool re-encodes every frame with ffmpeg.wasm, and long or 4K clips can take much longer than playback. Keep the tab open and use a desktop editor if the job does not finish comfortably."
    },
    {
      question: "Does burn-in keep the original audio?",
      answer:
        "The workflow re-encodes the audio to AAC at 160 kbps for the MP4 output rather than copying the original stream. That is usually fine for speech, but it is another generation of lossy compression. Keep the original file if audio quality is critical."
    },
    {
      question: "Should I upload an SRT or a burned-in video to YouTube?",
      answer:
        "Upload the SRT or VTT as a caption track when the platform supports it, because the viewer can then control the captions and the text remains searchable. Use a burned-in video only when the destination requires a single file and cannot accept captions. YouTube's help pages list the supported caption formats."
    },
    {
      question: "Which is better for accessibility, burn-in or a sidecar file?",
      answer:
        "A sidecar caption track is better because it can be turned on or off, resized by the player and read as text. Burned-in text is open captions and cannot offer those controls. If you must burn in a copy, still publish an accessible sidecar track for the web version."
    }
  ],
  workedExample: {
    title: "Worked example: a four-cue burn-in at 1080p",
    intro:
      "This clip is 24 seconds long and has four short cues. The text stays on screen long enough to read, the lines are short enough for a phone, and the speaker names are already in the source transcript. The same cues are used for the sidecar export and the burn-in.",
    srt: `1
00:00:01,200 --> 00:00:04,600
MAYA: The lift is out of service.

2
00:00:04,800 --> 00:00:08,200
LEO: Use the stairs by the café.

3
00:00:08,400 --> 00:00:12,800
MAYA: The meeting starts at nine.

4
00:00:13,000 --> 00:00:17,400
LEO: I will bring the blue folder.`,
    note: "The browser worker writes these cues to captions.srt and runs the equivalent of: ffmpeg -i input.mp4 -vf \"subtitles=captions.srt:force_style='FontSize=22,MarginV=32,Outline=1.4'\" -c:v libx264 -preset veryfast -crf 22 -c:a aac -b:a 160k output.mp4. The output is a new file; the original video and the SRT are unchanged."
  },
  sources: [
    {
      label: "W3C WAI — Captions/Subtitles",
      url: "https://www.w3.org/WAI/media/av/captions/"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    },
    {
      label: "YouTube Help — Supported subtitle and closed caption files",
      url: "https://support.google.com/youtube/answer/2734698"
    }
  ],
  relatedGuides: [
    "how-to-sync-subtitles",
    "subtitle-best-practices",
    "subtitles-for-accessibility",
    "import-srt-into-video-editors"
  ],
  keywords: [
    { keyword: "how to burn subtitles into video", role: "primary" },
    { keyword: "burned in captions", role: "secondary", headingLevel: 2 },
    { keyword: "hardcoded subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "burn-in vs sidecar subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "ffmpeg.wasm re-encode cost", role: "secondary", headingLevel: 2 },
    { keyword: "verify burned in subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "Does burning subtitles into video reduce quality?", role: "faq" },
    { keyword: "Can I turn off burned-in subtitles?", role: "faq" }
  ]
};
