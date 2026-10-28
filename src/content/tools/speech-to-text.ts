import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/speech-to-text",
  preset: "speech-to-text",
  h1: "Speech to text: dictation-style transcripts from any recording",
  title: "Speech to text — local transcription for long recordings",
  metaDescription:
    "Use speech to text in your browser to turn interviews, lectures and voice notes into editable transcripts, with Whisper running locally and no upload.",
  primaryKeyword: "speech to text",
  capsule:
    "Speech to text here means a written transcript made from a recording, not a live microphone mode. VoiceToTextFree runs Whisper inside the browser, handles long files in chunks, and lets you edit the result before exporting TXT, SRT or VTT.",
  published: "2026-02-05",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "Audio or video files up to 500 MB" },
    { label: "Output", value: "TXT transcript, SRT or VTT subtitles" },
    { label: "Processing", value: "Whisper runs in the browser with WASM or WebGPU" },
    { label: "Languages", value: "Multilingual models with a language picker" },
    { label: "Long files", value: "Split into roughly 30-second chunks with overlap" },
    { label: "Live dictation", value: "Not supported; you process a saved file" }
  ],
  sections: [
    {
      heading: "What dictation-style output means here",
      paragraphs: [
        "The phrase often brings to mind a microphone that types while you talk. This page does something different: you supply a finished recording, and the tool writes down what it hears. That makes it suitable for interviews, lectures, voice notes and meeting captures that already exist, including files made on a phone hours earlier.",
        "The result is a working draft, not a courtroom transcript. Whisper adds punctuation and sentence casing, but it does not know which words are names or which pauses are meaningful. The editor exposes every cue, so you can fix the text while listening to the matching section of audio. For a plain reading copy, export TXT; for on-screen captions, export SRT or VTT."
      ]
    },
    {
      heading: "Languages, accents and mixed speech",
      paragraphs: [
        "The language picker covers the languages supported by the bundled Whisper models. Choosing the spoken language explicitly is usually more reliable than leaving the choice to the model, especially for short clips where there is little context. If a speaker switches languages mid-sentence, expect the transcript to favour the selected language and to miss or mistranslate the switch.",
        "Accents are handled unevenly. A familiar accent in a quiet room may need almost no correction, while a strong accent combined with background noise can produce confident but wrong words. Numbers, dates and spelled-out abbreviations are common failure points. Read the transcript rather than skimming it: a wrong word often looks plausible until the surrounding sentence is considered."
      ]
    },
    {
      heading: "Accuracy on interviews and lectures",
      paragraphs: [
        "A single speaker with a close microphone is the easy case. Two people sharing one room microphone are harder, and a lecture recorded from the back of a hall is harder still. Whisper does not separate speakers, so you will need to add names by hand if the document must show who said what. Keep a notebook or the video timeline nearby while doing that pass.",
        "Domain vocabulary drives most of the remaining errors. A medical lecture, a legal interview and a software review all contain terms the model may normalise into ordinary words. Build a short list of recurring names and technical terms, then search for them across the transcript. Fixing the same mistake once with a find-and-replace is faster than correcting every occurrence by ear."
      ]
    },
    {
      heading: "Long recordings and chunk boundaries",
      paragraphs: [
        "Files are sliced into chunks of about 30 seconds with a two-second overlap. Each chunk is transcribed with a little context from its neighbour, and repeated words at the seam are removed when the results are joined. This keeps memory bounded and lets the progress panel show how much audio remains. It also means a very long recording is a sequence of small jobs rather than one giant inference call.",
        "Boundaries are generally clean, but a word cut in half can occasionally be lost or duplicated. If a sentence near a seam looks wrong, replay a few seconds around it. Re-running the entire file with a larger model rarely fixes a single boundary error and costs much more time. The [how Whisper works](/guides/how-does-whisper-work) guide explains why the model works in fixed-size windows."
      ]
    },
    {
      heading: "Privacy: processing stays on your device",
      paragraphs: [
        "The file is read locally, decoded locally and transcribed locally. Model weights are fetched from a public repository on first use and then stored in the browser cache. Your recording is not part of that download. This is not a promise supported only by marketing copy: the network panel can show the requests, and the [private subtitle generator](/private-subtitle-generator) page walks through the check step by step.",
        "Local processing has a trade-off. Speed depends on your hardware, and closing the tab ends the job. A server with a large GPU would be faster, but it would also mean sending the recording to someone else. For confidential interviews, medical notes and internal meetings, keeping the audio on the machine is often worth the extra waiting time. See [is browser transcription private](/guides/is-browser-transcription-private) for the threat model."
      ]
    },
    {
      heading: "No live dictation, and why that is deliberate",
      paragraphs: [
        "There is no start-and-speak mode. The page waits for a saved file, extracts its audio, and then runs the model. This avoids the permission prompts, partial buffers and unstable timings of a live microphone pipeline, and it produces a consistent file you can review before anything is exported. It also means the tool cannot be used to caption a live event in real time.",
        "If you need a live transcript, use your operating system's built-in dictation or a dedicated live captioning service. If you need a reliable record of something already recorded, file-based processing is the more practical route. The [offline subtitle generator](/offline-subtitle-generator) page covers what changes after the model has been cached for repeat work without a connection."
      ]
    },
    {
      heading: "Editing and exporting the result",
      paragraphs: [
        "Work in short passes. First correct names and numbers, then punctuation, then anything that reads badly. The preview player follows the cue you select, so you can confirm a doubtful phrase without scrubbing through the whole file. Splitting a cue is useful when a sentence runs across two lines; merging is useful when the model broke a thought at a breath.",
        "TXT is the reading format. SRT and VTT are for players and editors, and they need shorter lines than a printed transcript. The [SRT editor](/srt-editor) handles timing changes, and the [subtitle validator](/subtitle-validator) checks line length, overlaps and reading speed before you publish. If the source is a video rather than a voice note, the [video to text](/video-to-text) page describes the same editing flow with picture-based review. For caption-shaped output, use [video to SRT](/video-to-srt) or [audio to SRT](/audio-to-srt); the [VoiceToTextFree](/) homepage lists every local tool, including the cached offline setup."
      ]
    }
  ],
  faqs: [
    {
      question: "Does this work as live dictation?",
      answer:
        "No. The page processes a saved audio or video file after you press Generate, so it is not intended for real-time captioning. Use system dictation or a live caption service if you need words to appear as you speak."
    },
    {
      question: "Which languages can it transcribe?",
      answer:
        "The language picker lists the languages handled by the bundled Whisper models. Select the spoken language when you know it, because automatic detection can struggle on short or noisy clips. Mixed-language speech is transcribed unevenly."
    },
    {
      question: "Can I transcribe a long recording?",
      answer:
        "Yes, up to the 500 MB file limit. Long audio is processed in roughly 30-second chunks, so memory use stays bounded but the tab must remain open. For multi-hour files, use a desktop browser and the Fast model."
    },
    {
      question: "How accurate is it on accented speech?",
      answer:
        "Clear speech with a close microphone is usually close to correct. Strong accents, crosstalk and background noise increase errors, particularly on names and technical terms. Read the whole draft and correct doubtful passages by ear."
    },
    {
      question: "Are my recordings uploaded?",
      answer:
        "No. The audio is decoded and transcribed inside the browser, and the model is downloaded once and cached. You can verify this in the network panel after clearing the request log and starting a job."
    },
    {
      question: "What can I export?",
      answer:
        "You can download a plain TXT transcript, an SRT subtitle file or a WebVTT file from the same set of cues. TXT suits reading and quoting; SRT and VTT suit video players and editors."
    }
  ],
  workedExample: {
    title: "A lecture excerpt with sentence-level cues",
    intro:
      "The recording was a single speaker at a desk microphone. The cues follow sentence boundaries closely, which makes the TXT export easy to read.",
    srt: `1
00:00:03,100 --> 00:00:06,700
The experiment failed for a reason we did not expect.

2
00:00:07,200 --> 00:00:10,900
The sensor was working, but the sample had warmed up.

3
00:00:11,400 --> 00:00:15,300
So the second run used a fresh sample and a shorter delay.`,
    note: "If the speaker pauses mid-sentence, the model may start a new cue there. Merging the two cues gives a cleaner reading copy without changing the words."
  },
  sources: [
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" },
    { label: "Whisper paper on arXiv", url: "https://arxiv.org/abs/2212.04356" },
    {
      label: "Hugging Face — whisper-tiny ONNX model card",
      url: "https://huggingface.co/onnx-community/whisper-tiny"
    },
    {
      label: "MDN — Web Audio API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
    }
  ],
  relatedGuides: [
    "how-to-improve-whisper-accuracy",
    "whisper-model-sizes-compared",
    "is-browser-transcription-private",
    "how-does-whisper-work"
  ],
  keywords: [
    { keyword: "speech to text", role: "primary" },
    { keyword: "audio to text", role: "synonym" },
    { keyword: "audio transcription", role: "synonym" },
    { keyword: "local speech to text", role: "synonym" },
    { keyword: "Does this work as live dictation?", role: "faq" },
    { keyword: "Which languages can it transcribe?", role: "faq" },
    { keyword: "Can I transcribe a long recording?", role: "faq" },
    { keyword: "How accurate is it on accented speech?", role: "faq" },
    { keyword: "Are my recordings uploaded?", role: "faq" },
    { keyword: "What can I export?", role: "faq" }
  ]
};
