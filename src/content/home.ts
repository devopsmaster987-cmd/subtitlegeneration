import type { BasePageContent } from "./types";

export interface HomeContent extends BasePageContent {
  kind: "home";
}

export const homeContent: HomeContent = {
  kind: "home",
  path: "/",
  h1: "Free subtitle generator and voice to text tool",
  title: "Free subtitle generator and voice to text tool | VoiceToTextFree",
  metaDescription:
    "Free subtitle generator and voice to text tool: transcribe video or audio locally, edit cues and export SRT, VTT or TXT. Nothing is uploaded.",
  primaryKeyword: "free subtitle generator",
  capsule:
    "VoiceToTextFree is a free subtitle generator and voice to text tool that runs OpenAI Whisper inside your browser. Choose a video or audio file, pick one of 99 languages or auto-detect, then edit the timed transcript and export SRT, VTT or TXT. Your media is never uploaded.",
  published: "2026-01-15",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Price", value: "Free, no account, no credit card" },
    { label: "Languages", value: "99 spoken languages supported by multilingual Whisper" },
    { label: "Input files", value: "MP4, MOV, WEBM, MP3, WAV, M4A and similar media containers" },
    { label: "File limit", value: "500 MB per file; large files are slower on phones" },
    { label: "Exports", value: "SRT, WebVTT and plain TXT (with an optional timestamped TXT)" },
    { label: "Where processing happens", value: "In this browser tab, using WebGPU or WebAssembly" }
  ],
  sections: [
    {
      heading: "What VoiceToTextFree does",
      paragraphs: [
        "VoiceToTextFree turns a recording into a timed transcript you can edit and publish. Drop in an interview, a lecture, a screen recording or a phone video; the app extracts a mono 16 kHz audio track, slices it into overlapping chunks and sends those chunks to a Whisper model that is running on your device. The output appears as numbered cues with start and end times. You can correct a name, fix a sentence, split a cue that stayed on screen too long, merge two short cues, or shift every timing by a fixed offset before exporting.",
        "The result is a normal subtitle file, not a proprietary project. SRT works in Premiere Pro, DaVinci Resolve, Final Cut Pro, CapCut and most upload forms. WebVTT is the format HTML5 video players expect. Plain TXT is useful when you need a readable transcript for a report, an article or a searchable archive. The tool does not add a watermark, ask for an email address or send your audio to a paid API."
      ]
    },
    {
      heading: "How to generate subtitles, step by step",
      steps: [
        "Choose an MP4, MOV, WEBM, MP3, WAV, M4A or similar file. Start with a clip under ten minutes while you learn how the model behaves.",
        "Leave the language on auto-detect for clear single-language speech, or select the spoken language for accents, music and noisy rooms.",
        "Pick Fast, Balanced or Accurate. Fast downloads about 41 MB with WASM; Accurate downloads about 249 MB and needs more memory.",
        "Press Generate subtitles and keep the tab open. The first run downloads the model; later runs reuse the browser cache.",
        "Review every cue in the editor. Fix names and numbers, then use Split at cursor and Merge next to match the reading rhythm.",
        "Download SRT, VTT or TXT. Optionally burn the captions into a video with ffmpeg.wasm."
      ],
      paragraphs: [
        "The first ten seconds are usually the slowest because the model has to load. On a laptop with WebGPU, a short clip can finish quickly; on an older phone using WebAssembly, the same clip may take several minutes. The progress panel shows whether the browser is extracting audio, downloading the model or transcribing, so you can tell which stage is slow."
      ]
    },
    {
      heading: "How local Whisper transcription works",
      paragraphs: [
        "Whisper is an open speech-recognition model released by OpenAI. The multilingual versions are trained on many languages and can also translate speech into English. VoiceToTextFree uses ONNX versions of Whisper through transformers.js, a JavaScript library that runs the model with WebGPU where available and WebAssembly everywhere else. The model files are downloaded from Hugging Face the first time you use them and cached by your browser.",
        "Audio never travels to VoiceToTextFree. The browser reads the file you selected, ffmpeg.wasm extracts an audio track in memory, and the transcription worker passes float samples to the model. You can confirm this in your browser's network panel: after the page and model have loaded, generating subtitles produces no request that contains your media. The trade-off is that your device does the work, so speed and memory depend on your hardware rather than on a server."
      ]
    },
    {
      heading: "Languages: 99 options, with honest limits",
      paragraphs: [
        "The language picker lists all 99 languages in the multilingual Whisper tokenizer, from English, Spanish, French and Arabic to Urdu, Hindi, Bengali, Tamil, Swahili, Yoruba and Welsh. The list is generated from a verified tokenizer map and checked by a unit test, so it does not quietly drift when the model changes. Popular languages appear first; the full list is alphabetical and searchable by English name, native name or code.",
        "Support is not the same as equal accuracy. Whisper is strongest on well-resourced languages with clear audio and weak on low-resource languages, heavy code-switching and long stretches of music. The language pages explain the script, punctuation and common pitfalls for each language, and pages without a recorded accuracy test stay out of the search index until a real sample has been checked. That is deliberate: a page that claims good Urdu accuracy without testing it is not useful."
      ]
    },
    {
      heading: "Accuracy tips that make a visible difference",
      bullets: [
        "Choose the spoken language instead of auto-detect when the clip has an accent, background music or more than one language.",
        "Use Accurate for interviews with names, jargon or quiet speakers; use Fast for a rough draft you will edit anyway.",
        "Clean the audio before transcription if you can: remove hum, lower music and avoid overlapping speakers.",
        "Keep clips short while testing. A 60-second sample tells you whether the model handles the accent before you wait for a 90-minute file.",
        "Expect numbers, proper nouns and punctuation to need editing. Budget review time instead of trusting the raw output.",
        "If a language page says results can be weak, plan for a full manual pass rather than a quick spell-check."
      ],
      paragraphs: [
        "The biggest quality jump usually comes from the audio, not from a bigger model. A phone recording made across a room will produce more errors than a close microphone, even with the Accurate model. If you cannot change the recording, try the language-specific tips on the relevant language page: some scripts need different punctuation review, and some languages commonly mix in English words that Whisper may render in the wrong script."
      ]
    },
    {
      heading: "Privacy: what stays on your device",
      paragraphs: [
        "Your file, the extracted audio, the transcript and your edits stay in the browser tab. VoiceToTextFree has no backend, no API route and no file storage. The only network requests are for the static site, the model files and — if advertising is enabled and you consent — the ad script. The privacy policy explains cookies, local storage and the choices available to visitors in the EEA, UK and Switzerland.",
        "Local processing is a real privacy advantage for journalists, lawyers, teachers and anyone handling confidential recordings. It is not a promise that the device is secure. If someone else can access your browser profile, they may be able to see cached files or a downloaded transcript. Clear the site's storage after sensitive work, and download or delete the transcript when you are finished."
      ]
    },
    {
      heading: "Who VoiceToTextFree is for",
      paragraphs: [
        "Creators use it to caption short videos without paying per minute. Students use it to turn a lecture recording into notes they can search. Journalists use it to get a first-pass transcript of an interview, then check every quote against the audio. Teachers use it to make a lesson accessible, and small teams use it to caption internal recordings without sending them to a third party.",
        "It is less suitable for live captioning, for recordings with several people talking over each other, and for legally certified transcripts. Whisper can miss words, invent punctuation and mishear names. Treat the output as a draft that a human reviews. If you need word-level timing for animated captions or a certified transcript, the guides explain the extra steps and the limits of this tool."
      ]
    },
    {
      heading: "Limits and honest caveats",
      paragraphs: [
        "The browser build is capped at 500 MB per file because decoding and transcription both happen in memory. A long recording can exhaust a phone's memory even when the file is smaller than that. There is no speaker diarization, no automatic translation into languages other than English, and no guarantee that a subtitle file will pass a platform's own caption review. Burn-in re-encodes video and can take longer than transcription.",
        "Offline use works only after the model has been downloaded once. A first visit without a connection cannot fetch the model. Model sizes and language coverage are checked against the Hugging Face repositories, with the sources and dates recorded in our verification log. Where a claim cannot be verified, the site says so rather than filling the gap with a number."
      ]
    }
  ],
  faqs: [
    {
      question: "What file formats can I upload?",
      answer:
        "VoiceToTextFree accepts common video and audio containers including MP4, MOV, WEBM, MP3, WAV and M4A, plus similar formats such as MKV, OGG, FLAC and Opus when your browser can read them. The file is decoded locally with ffmpeg.wasm, so unsupported codecs can fail even when the extension is accepted."
    },
    {
      question: "What is the maximum file size?",
      answer:
        "The limit is 500 MB per file. Files over 100 MB may be slow or unstable on phones because the audio is held in memory. For long recordings, trim the clip or split it into parts; there is no server-side queue to resume a failed job."
    },
    {
      question: "Is there a file size limit?",
      answer:
        "Yes. The limit is 500 MB per file, set by browser memory rather than a server quota. If a recording is larger, trim it or split it into parts before transcribing; there is no server-side queue to resume a failed job."
    },
    {
      question: "Is it free?",
      answer:
        "Yes. The tool is free to use, with no account, credit card or per-minute charge. If advertising is enabled, ads appear only outside the tool area and only after the required consent; the tool itself does not depend on ad interaction."
    },
    {
      question: "Do I need an account?",
      answer:
        "No. There is no sign-up, login or email requirement. Your transcript lives in the browser tab, so download it before closing the page. Clearing site data also removes cached models, which means the next visit downloads them again."
    },
    {
      question: "Does it work on mobile?",
      answer:
        "It works in modern mobile browsers, but large files and the Accurate model can run out of memory. Start with a short clip and the Fast model, keep the tab in the foreground, and prefer a desktop browser for long recordings. WebGPU support varies by device."
    },
    {
      question: "Can I edit the generated subtitles?",
      answer:
        "Yes. Every cue can be edited inline, including its start time, end time and text. You can split a cue at the cursor, merge it with the next one, delete it or add a new cue. The main editor virtualises lists above 500 cues so long transcripts stay responsive."
    },
    {
      question: "How to make subtitles for a video?",
      answer:
        "Load the video, choose the spoken language, generate the transcript, then review the cues and download SRT or VTT. If your platform does not accept a sidecar file, use the optional burn-in step or import the SRT into your video editor and position the captions there."
    },
    {
      question: "How to add subtitles to a video?",
      answer:
        "For editing software, import the SRT as a subtitle track and export the video. For a web player, publish the VTT alongside the video and reference it with a track element. For social platforms, follow the platform's current upload flow or burn the captions into the video."
    }
  ],
  workedExample: {
    title: "What the output looks like",
    intro:
      "A three-cue excerpt from a one-minute test clip. The timings are the ones the editor shows while the audio plays; adjust them if a line appears too early or too late.",
    srt: `1
00:00:01,120 --> 00:00:03,480
The first thing I noticed was the room tone.

2
00:00:03,900 --> 00:00:06,240
It was louder than the speaker.

3
00:00:06,700 --> 00:00:09,100
So we moved the microphone closer.`,
    note: "This is a real cue layout, not a promise about accuracy on your recording. Always listen through the finished file."
  },
  sources: [
    {
      label: "OpenAI Whisper repository and model card",
      url: "https://github.com/openai/whisper"
    },
    {
      label: "Hugging Face — onnx-community/whisper-base",
      url: "https://huggingface.co/onnx-community/whisper-base"
    },
    {
      label: "transformers.js documentation",
      url: "https://huggingface.co/docs/transformers.js"
    },
    {
      label: "W3C — WebVTT specification",
      url: "https://www.w3.org/TR/webvtt1/"
    }
  ],
  relatedGuides: [
    "how-does-whisper-work",
    "how-to-improve-whisper-accuracy",
    "is-browser-transcription-private",
    "whisper-model-sizes-compared"
  ],
  keywords: [
    { keyword: "free subtitle generator", role: "primary" },
    { keyword: "subtitle generator", role: "synonym" },
    { keyword: "automatic subtitle generator", role: "synonym" },
    { keyword: "auto subtitle generator", role: "synonym" },
    { keyword: "AI subtitle generator", role: "synonym" },
    { keyword: "online subtitle generator", role: "synonym" },
    { keyword: "free subtitle generator online", role: "synonym" },
    { keyword: "free online subtitle generator", role: "synonym" },
    { keyword: "video subtitle generator", role: "synonym" },
    { keyword: "audio subtitle generator", role: "synonym" },
    { keyword: "generate subtitles", role: "synonym" },
    { keyword: "generate subtitles from video", role: "synonym" },
    { keyword: "generate subtitles from audio", role: "synonym" },
    { keyword: "add subtitles to video", role: "synonym" },
    { keyword: "what file formats can i upload", role: "faq" },
    { keyword: "what is the maximum file size", role: "faq" },
    {
      keyword: "is there a file size limit",
      role: "faq",
      note: "Answered by the same visible FAQ as the maximum size question."
    },
    { keyword: "is it free", role: "faq" },
    { keyword: "do i need an account", role: "faq" },
    { keyword: "does it work on mobile", role: "faq" },
    { keyword: "can i edit the generated subtitles", role: "faq" },
    { keyword: "how to make subtitles for a video", role: "faq" },
    { keyword: "how to add subtitles to a video", role: "faq" }
  ]
};
