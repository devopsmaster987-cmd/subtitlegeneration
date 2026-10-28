import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/caption-generator",
  preset: "caption-generator",
  h1: "Caption generator for social video with readable, timed cues",
  title: "Caption generator — SRT, VTT and burn-in captions for social clips",
  metaDescription:
    "Use this caption generator to turn spoken video into timed SRT or VTT cues, check safe areas and reading speed, then export or burn captions in your browser.",
  primaryKeyword: "caption generator",
  capsule:
    "A caption generator creates short, timed text for a video so viewers can follow it with the sound off. VoiceToTextFree transcribes locally, writes SRT or VTT cues, and gives you controls for safe areas, line length and reading speed before export.",
  published: "2026-02-05",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "MP4, MOV, WEBM and audio files up to 500 MB" },
    { label: "Output", value: "SRT, VTT, TXT or burned-in MP4" },
    { label: "Orientation", value: "Horizontal, square and 9:16 vertical clips" },
    {
      label: "Defaults",
      value: "Two lines, about 42 characters per line, 20 characters per second"
    },
    { label: "Processing", value: "Local Whisper transcription with no upload" },
    { label: "Review", value: "Cue editor with split, merge and timing controls" }
  ],
  sections: [
    {
      heading: "What social captions need that subtitle files often miss",
      paragraphs: [
        "A caption for a short social clip has a harder job than a film subtitle. The viewer may be holding the phone at arm's length, watching in a noisy place, and scrolling past in two seconds. Words must be large enough to read at a glance, appear close to the moment they are spoken, and avoid the platform's own buttons and captions.",
        "That is why a raw transcript is not enough. The editor groups speech into short cues, but social clips often need tighter grouping than a film: one or two lines, a clear phrase, and a quick turnover. The tool gives you the timing and text controls to shape that rhythm, then exports a standard file or burns the captions into the video itself."
      ]
    },
    {
      heading: "SRT or VTT: picking an export for each platform",
      paragraphs: [
        "SRT is the safest interchange format for editors and most upload forms. It uses numbered cues and comma-separated milliseconds, and it is accepted by common desktop editors and many social scheduling tools. VTT is the web format, with a WEBVTT header and dot-separated timestamps; it is the right choice when the video plays in a browser with a native text track.",
        "Export both if you are unsure. The cues are identical, so there is no extra transcription work. Keep the SRT as the master copy and convert to VTT for the web build. If you plan to upload the video to a platform and let it handle styling, check whether that platform accepts a sidecar file at all; some only accept burned-in text or their own in-app editor."
      ]
    },
    {
      heading: "Burning captions into the picture",
      paragraphs: [
        "A sidecar SRT depends on the player showing it. A burned-in caption is part of the pixels, so it survives re-uploads, downloads and screenshots. The trade-off is permanence: once the text is rendered, changing a word means re-encoding the clip. Burn-in is the pragmatic choice for short social clips that will be posted once and watched with sound off.",
        "Keep a clean master without burned text. Style the captions for the smallest expected screen, then check the result on a phone rather than a desktop monitor. The [burn subtitles into video](/guides/how-to-burn-subtitles-into-video) guide covers the encoding settings, and the [SRT editor](/srt-editor) page covers the text and timing cleanup that should happen before rendering."
      ]
    },
    {
      heading: "Safe areas for vertical video",
      paragraphs: [
        "Vertical frames have little spare room. Platform controls often sit along the bottom and right edge, while a username or sound label may sit near the top. Put captions in the middle band and keep them clear of those zones. A two-line cue centred slightly above the lower third is usually safer than text pinned to the very bottom.",
        "The safe area changes with the app and the device, so there is no single pixel value that works everywhere. Preview the clip inside the app you will publish to, or leave a generous margin and accept slightly smaller text. Do not let a caption cover a face, a product label or on-screen text that the viewer needs to read. When in doubt, shorten the line instead of shrinking the font."
      ]
    },
    {
      heading: "Reading speed on a phone screen",
      paragraphs: [
        "Reading speed is characters divided by seconds on screen. The validator's default limit is 20 characters per second, with a minimum cue duration of 700 ms. A three-word caption can be read in under a second, but a full sentence held for the same time will feel like a flash. Split long sentences at clause boundaries and let each cue breathe.",
        "Two lines of about 42 characters each is a practical ceiling for a phone in portrait orientation. If a cue exceeds that, either shorten the wording or spread it across two cues. Do not solve every problem by extending the duration: captions that lag behind the speech feel disconnected even when they are readable. The [subtitle validator](/subtitle-validator) flags both long lines and fast cues."
      ]
    },
    {
      heading: "Editing wording for short clips",
      paragraphs: [
        "Social captions can drop more filler than a documentary subtitle. Remove false starts, repeated words and verbal tics when they add nothing, but keep the speaker's meaning and tone. Do not paraphrase a quote into something the person did not say. If the clip is an ad or a public statement, accuracy matters more than brevity.",
        "Punctuation should help the eye, not mirror a grammar test. A dash or a line break can make a two-part caption easier to scan. Avoid all caps for whole sentences; they are harder to read and may look like shouting. Emoji and decorative symbols are easier to leave out of the SRT itself, because players and platforms render them inconsistently."
      ]
    },
    {
      heading: "Privacy, limits and the review pass",
      paragraphs: [
        "The video is decoded and transcribed in the browser. Nothing is uploaded, which is useful for unreleased campaigns and private client footage. The 500 MB limit is a memory guard, so a short high-bitrate clip can be rejected while a longer compressed file fits. On a phone, use the Fast model and close other heavy tabs.",
        "Before exporting, listen once with the captions visible and once with the sound muted. The muted pass catches cues that are too fast, too long or badly placed. The [private subtitle generator](/private-subtitle-generator) page explains how to confirm local processing, and the [video to SRT](/video-to-srt) workflow is the right starting point when you need a full subtitle file rather than a short social clip. For a podcast or voice note, use [audio to SRT](/audio-to-srt); the [VoiceToTextFree](/) homepage collects the other local tools, including the [offline subtitle generator](/offline-subtitle-generator) for repeat work."
      ]
    }
  ],
  faqs: [
    {
      question: "What can this tool create for a social clip?",
      answer:
        "It produces timed SRT or VTT cues from the spoken audio, plus a plain transcript. It can also burn the captions into an MP4. You review the text and timing before any export."
    },
    {
      question: "Does it support vertical video?",
      answer:
        "Yes. The tool works with horizontal, square and 9:16 footage because it processes the audio track. Caption placement is a design choice, so preview the result in the app where the clip will be published and keep text clear of interface controls."
    },
    {
      question: "Should I export SRT or VTT for social platforms?",
      answer:
        "Use SRT for editors and upload forms that accept a sidecar file, and VTT for browser players that use a native text track. Many social apps ignore sidecar files and expect burned-in text or their own caption editor."
    },
    {
      question: "Can I burn captions into the video?",
      answer:
        "Yes. Burn-in renders the cues into the picture, so they survive re-uploads. It re-encodes the clip and makes later text edits expensive, so keep the SRT and a clean master as well."
    },
    {
      question: "How many lines should a caption have?",
      answer:
        "Two short lines is a practical ceiling for phone viewing. Keep each line near 42 characters and avoid covering faces or interface controls. If the text does not fit, shorten the wording or split the cue."
    },
    {
      question: "Are captions generated without uploading?",
      answer:
        "Yes. Audio extraction and transcription happen in the browser, and the model is cached after the first download. The video file itself is never sent to a server."
    }
  ],
  workedExample: {
    title: "Short cues for a vertical product clip",
    intro:
      "These cues are deliberately brief. Each one fits on one line on a phone, and the gaps leave room for the viewer to register the change.",
    srt: `1
00:00:00,600 --> 00:00:02,300
This hinge takes the weight.

2
00:00:02,700 --> 00:00:04,500
No tools, no extra screws.

3
00:00:04,900 --> 00:00:07,200
Open it with one hand.`,
    note: "The same cues can be exported as VTT for a web preview. Test the clip muted before publishing; if a caption feels fast on a desktop monitor, it will feel faster on a phone."
  },
  sources: [
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" },
    {
      label: "YouTube Help — add subtitles and captions",
      url: "https://support.google.com/youtube/answer/2734796"
    },
    {
      label: "Hugging Face — whisper-base ONNX model card",
      url: "https://huggingface.co/onnx-community/whisper-base"
    }
  ],
  relatedGuides: [
    "how-to-add-captions-to-reels",
    "how-to-add-subtitles-to-tiktok",
    "subtitle-line-length",
    "how-to-burn-subtitles-into-video"
  ],
  keywords: [
    { keyword: "caption generator", role: "primary" },
    { keyword: "auto caption generator", role: "synonym" },
    { keyword: "video caption generator", role: "synonym" },
    { keyword: "add captions to video", role: "synonym" },
    { keyword: "captions for social video", role: "synonym" },
    { keyword: "vertical video captions", role: "synonym" },
    { keyword: "What can this tool create for a social clip?", role: "faq" },
    { keyword: "Does it support vertical video?", role: "faq" },
    { keyword: "Should I export SRT or VTT for social platforms?", role: "faq" },
    { keyword: "Can I burn captions into the video?", role: "faq" },
    { keyword: "How many lines should a caption have?", role: "faq" },
    { keyword: "Are captions generated without uploading?", role: "faq" }
  ]
};
