import type { ToolPageContent } from "../types";

export const videoToSrt: ToolPageContent = {
  kind: "tool",
  path: "/video-to-srt",
  preset: "video-to-srt",
  h1: "Video to SRT: generate timed subtitles from a video",
  title: "Video to SRT — generate a timed subtitle file",
  metaDescription:
    "Convert video to SRT in your browser. Whisper creates timed cues from MP4, MOV or WEBM, you fix the text, then download a clean SRT. No upload.",
  primaryKeyword: "video to srt",
  capsule:
    "Video to SRT means turning a video's spoken audio into a subtitle file with numbered, timed cues. VoiceToTextFree extracts the audio locally, transcribes it with Whisper, and lets you edit and download a standard SRT file without uploading the video.",
  published: "2026-01-22",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Accepted video", value: "MP4, MOV, WEBM, M4V, MKV and similar containers" },
    { label: "Output", value: "SRT (plus VTT and TXT from the same transcript)" },
    { label: "File limit", value: "500 MB per video" },
    { label: "Audio handling", value: "Extracted in the browser at 16 kHz mono" },
    {
      label: "Typical wait",
      value: "Depends on device and model; first run also downloads the model"
    },
    { label: "Editing", value: "Every cue's text and timestamps can be changed before export" }
  ],
  sections: [
    {
      heading: "What this tool does with your video",
      paragraphs: [
        "The page is a working video-to-SRT converter, not a landing page for one. Choose a video file, select the spoken language, and press Generate. The browser extracts an audio track with ffmpeg.wasm, splits it into roughly 30-second chunks with a two-second overlap, and transcribes each chunk with Whisper. The cues are stitched back together, duplicate words at the overlap are removed, and the result appears in the editor with start and end times.",
        "Nothing about the video is sent to a server. That matters for client work and for interviews, but it also means the speed depends on your machine. A five-minute MP4 on a modern laptop with WebGPU can be much faster than the same file on an older phone using WASM. The progress panel separates model download, audio extraction and transcription so a slow first run does not look like a failed conversion."
      ]
    },
    {
      heading: "MP4 to SRT",
      paragraphs: [
        "MP4 is the most common input. Most MP4 files store H.264 or HEVC video with AAC audio. ffmpeg.wasm decodes the audio track and discards the video frames, which is why a 200 MB MP4 does not produce a 200 MB audio file. If the MP4 uses an unusual audio codec or has no audio track at all, extraction fails with an error rather than producing an empty SRT.",
        "For a clean result, make sure the speech is not buried under loud music. Whisper can transcribe sung vocals, but it is not a lyrics aligner. If the video has several speakers recorded on one microphone, expect punctuation and speaker changes to need manual cleanup. The SRT itself has no speaker labels; add them in the text if your project needs them."
      ]
    },
    {
      heading: "MOV to SRT",
      paragraphs: [
        "MOV files from cameras and phones often carry PCM audio or high-bitrate AAC. They usually convert without trouble, but they can be large. The 500 MB limit is about browser memory, not about the length of the video. A ten-minute ProRes MOV can exceed the limit while a two-hour compressed lecture may fit. If a MOV is rejected for size, export a smaller proxy or extract its audio first.",
        "One MOV-specific pitfall is variable frame rate. The subtitle timestamps are based on audio time, not on video frames, so an SRT remains usable after a frame-rate conversion as long as you apply a matching stretch or offset. The timing editor on this site handles global shifts and stretch factors without re-transcribing."
      ]
    },
    {
      heading: "WEBM to SRT",
      paragraphs: [
        "WEBM is common for screen recordings and web exports. Its audio is usually Opus, which ffmpeg.wasm decodes reliably. Screen recordings often contain long pauses and interface sounds; Whisper may turn a click or a notification sound into a short word. Listen through the first minute and delete those cues rather than trying to fix them with a global timing change.",
        "If the WEBM was recorded from a browser tab with system audio, check that the audio track is actually present. A silent WEBM produces no cues and is not a bug in the SRT writer. Play the file in your browser before converting, then re-record with the correct input if needed."
      ]
    },
    {
      heading: "Timing, file size and how long conversion takes",
      paragraphs: [
        "There is no honest single answer to “how long does it take?” because the model, device and audio length all matter. The model download dominates the first run: about 41 MB for Fast with WASM, 77 MB for Balanced and 249 MB for Accurate. After that, the transcript is generated chunk by chunk, and the progress bar shows an estimate based on the chunks already finished.",
        "Subtitles should normally stay on screen between about one and seven seconds, and reading speed should stay near 20 characters per second or below. Whisper's raw cues sometimes run long because the model groups a whole sentence. Use Split at cursor in the editor, then check the cue with the [reading speed checker](/subtitle-reading-speed-checker). Do not stretch every cue by the same factor unless the whole file is consistently early or late."
      ]
    },
    {
      heading: "Review, edit and export SRT",
      paragraphs: [
        "The editor is the part that makes the output usable. Click a cue's play button to hear it, fix the names and numbers, then split or merge cues. If a line appears half a second early throughout the file, apply a global offset of about −500 ms; if the drift grows toward the end, the cause is usually a frame-rate mismatch rather than a constant offset. The timing editor has a stretch control for that case.",
        "Export writes a UTF-8 SRT with numbered cues and comma-separated milliseconds. The same transcript can be downloaded as VTT for a web player or as TXT for a readable transcript. If you need captions inside the video file itself, the optional burn-in step re-encodes the video, which takes longer and is not required for an SRT upload."
      ]
    },
    {
      heading: "Privacy and responsible use",
      paragraphs: [
        "The video never leaves the device. The browser reads the file you chose, and the model runs locally. You can verify this in the network panel: after the page and model have loaded, pressing Generate does not send your media anywhere. Ads, if enabled, are kept outside the tool and load only with consent.",
        "Only convert videos you own or have permission to subtitle. VoiceToTextFree does not download videos from YouTube, TikTok or other platforms, and it does not bypass access controls. If you are captioning someone else's recording, check the licence and the platform's rules before publishing the SRT."
      ]
    }
  ],
  faqs: [
    {
      question: "How do I turn a video into subtitles?",
      answer:
        "Load the video, choose the spoken language, and press Generate subtitles. Review the cues in the editor, then download SRT. The conversion extracts audio locally, so the video is not uploaded."
    },
    {
      question: "Can I convert an MP4 to SRT without uploading it?",
      answer:
        "Yes. VoiceToTextFree reads the MP4 in your browser, extracts audio with ffmpeg.wasm and runs Whisper on your device. The video and audio stay local; only the static site and model files are downloaded."
    },
    {
      question: "Does this tool support MOV and WEBM?",
      answer:
        "Yes, MOV and WEBM are accepted when the browser build of ffmpeg can decode their audio. Unusual codecs can fail, and files over 500 MB are rejected because processing happens in memory."
    },
    {
      question: "Why is my SRT out of sync?",
      answer:
        "A constant offset usually means the subtitle started at the wrong point; use the timing editor to shift all cues. Growing drift often comes from a frame-rate mismatch, which needs a stretch factor. Check the first, middle and last cue after any change."
    },
    {
      question: "How accurate is the SRT?",
      answer:
        "Accuracy depends on language, audio quality, accents and the model. Whisper is generally strong on clear, well-resourced languages and weaker on noisy or low-resource recordings. Treat the first pass as a draft and review names, numbers and punctuation."
    },
    {
      question: "Is the SRT file UTF-8?",
      answer:
        "Yes. SRT exports are UTF-8 with numbered cues and comma-separated milliseconds. UTF-8 is what modern editors and platforms expect, including for Arabic, Urdu, Hindi, Chinese and other non-Latin scripts."
    }
  ],
  workedExample: {
    title: "A valid SRT from a short product clip",
    intro:
      "This is the shape the exporter writes. The cue numbers are sequential, the timestamps use commas, and a blank line separates each cue.",
    srt: `1
00:00:00,800 --> 00:00:03,100
This is the second version of the stand.

2
00:00:03,600 --> 00:00:06,400
It folds flat in about two seconds.

3
00:00:06,900 --> 00:00:09,200
The latch is on the left side.`,
    note: "If you open this in a text editor, save it as UTF-8. If your player shows the timestamps as text, the file extension or header is wrong."
  },
  sources: [
    {
      label: "W3C — WebVTT specification (for VTT exports)",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" },
    {
      label: "Hugging Face — whisper-base ONNX model card",
      url: "https://huggingface.co/onnx-community/whisper-base"
    }
  ],
  relatedGuides: [
    "what-is-an-srt-file",
    "how-to-sync-subtitles",
    "how-to-improve-whisper-accuracy",
    "how-to-burn-subtitles-into-video"
  ],
  keywords: [
    { keyword: "video to srt", role: "primary" },
    { keyword: "mp4 to srt", role: "secondary", headingLevel: 2 },
    { keyword: "mov to srt", role: "secondary", headingLevel: 2 },
    { keyword: "webm to srt", role: "secondary", headingLevel: 2 },
    { keyword: "generate srt file from video", role: "synonym" }
  ]
};
