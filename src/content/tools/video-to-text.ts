import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/video-to-text",
  preset: "video-to-text",
  h1: "Video to text: turn a recording into a clean transcript",
  title: "Video to text — extract a readable transcript from any recording",
  metaDescription:
    "Turn a video to text in your browser. Extract audio locally, transcribe with Whisper, fix names and numbers, then export TXT with optional timestamps.",
  primaryKeyword: "video to text",
  capsule:
    "Video to text converts the speech in a recording into a readable document. VoiceToTextFree extracts the audio locally, runs Whisper in your browser, and lets you correct names and numbers before exporting plain TXT, with timestamps only if you need them.",
  published: "2026-02-05",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Accepted input", value: "MP4, MOV, WEBM, MKV and similar containers, up to 500 MB" },
    { label: "Plain output", value: "TXT transcript, one paragraph-like line per cue" },
    { label: "Optional timing", value: "Timestamped TXT using [HH:MM:SS,mmm] prefixes" },
    { label: "Audio preparation", value: "16 kHz mono track extracted in the browser" },
    { label: "Model choice", value: "Fast, Balanced or Accurate, downloaded once and cached" },
    {
      label: "Editing",
      value: "Every cue can be corrected, split, merged or deleted before export"
    }
  ],
  sections: [
    {
      heading: "What this page extracts from your video",
      paragraphs: [
        "This tool produces a transcript, not a subtitle file. It reads the chosen recording, pulls out the audio track, and asks Whisper to write down what was said. The result appears as a sequence of editable cues. You can join them into flowing paragraphs or keep one line per spoken segment, then download the text as a TXT file. Captions and SRT exports remain available from the same editor if you change your mind.",
        "The distinction matters when you are producing an article, a searchable archive or meeting notes. A transcript is read on a page, so punctuation and paragraph breaks matter more than frame-accurate cue boundaries. VoiceToTextFree still records timings during transcription, which is why you can switch on a timestamp prefix at export time without running the audio through the model a second time."
      ]
    },
    {
      heading: "Formats you can bring and how the audio is prepared",
      paragraphs: [
        "MP4 and MOV are the usual inputs, but WEBM, M4V, MKV and audio-only files such as MP3, WAV and M4A also work. The browser passes the file to ffmpeg.wasm, which decodes the audio and discards the video frames. The extracted track is converted to mono at a 16 kHz sample rate, the format Whisper expects. A 300 MB camera file therefore does not become a 300 MB audio job inside the tab.",
        "The 500 MB limit is a memory guard. Very large camera files and ProRes masters can be rejected even when the spoken portion is short. In that case export a smaller proxy, or use the [audio to SRT page](/audio-to-srt) after extracting the sound in an editor. Files with no audio track fail with an error instead of returning an empty document, which makes the cause easier to spot."
      ]
    },
    {
      heading: "Transcript or subtitles: choosing the right export",
      paragraphs: [
        "A TXT transcript is the right choice for reading, quoting and full-text search. Subtitles are timed cues meant to appear over moving images, with short lines and a maximum reading speed. If the recording will be watched with sound off, use the [video to SRT](/video-to-srt) route instead. If it will be read in a document, a browser or a research tool, plain text is easier to reuse.",
        "You do not have to decide before transcribing. The editor holds one shared set of cues, and the export bar writes TXT, SRT or VTT from it. One practical workflow is to generate once, clean the text in TXT form, then return to the editor and split long cues before downloading an SRT for the same clip."
      ]
    },
    {
      heading: "Editing a transcript for reading",
      paragraphs: [
        "Whisper handles clear speech well, but it does not know your subject. Product names, surnames, acronyms and units are the first things to check. Click a cue, listen to the matching audio, and correct the text in place. Removing filler words is a judgement call: keep them if the transcript is evidence, remove them if it is a readable summary.",
        "Punctuation often needs light work. The model may end a sentence early when a speaker pauses, or run two sentences together when they are delivered quickly. Fixing punctuation changes how the text reads but not the timings. For a long interview, edit in passes: names first, numbers second, then punctuation. The [SRT editor](/srt-editor) page explains the same controls if you later need caption-shaped output."
      ]
    },
    {
      heading: "Exporting TXT with optional timestamps",
      paragraphs: [
        "Plain export writes one line per cue and joins the lines with newlines. That is convenient for pasting into a document, but it can look choppy because Whisper groups speech by breath and pause rather than by paragraph. If you want clean prose, merge related cues first or join the lines in your writing tool and add paragraph breaks manually.",
        "Timestamped export prefixes each line with its start time in [HH:MM:SS,mmm] form. This is useful for locating a quote in the source video or for building a searchable index. It is not a subtitle format and should not be renamed to SRT. For strict cue numbering and comma-separated timings, export SRT and validate it with the [subtitle validator](/subtitle-validator)."
      ]
    },
    {
      heading: "Privacy and local processing",
      paragraphs: [
        "The recording is read from your device and processed in the browser. Audio extraction, chunking and inference all happen locally. The only network requests are for the page itself and the model files, which are cached after the first run. There is no upload step, no account and no server-side queue waiting for a worker.",
        "You can confirm this yourself. Open the browser developer tools, switch to the network panel, clear the log, and press Generate. After the model is cached, the request list should not contain your file. This matters for interviews, internal meetings and any material covered by a confidentiality agreement. See the [private subtitle generator](/private-subtitle-generator) page for a longer verification walkthrough."
      ]
    },
    {
      heading: "Limits and when another tool is a better fit",
      paragraphs: [
        "Long recordings are processed in roughly 30-second chunks with a two-second overlap. The overlap gives the model context at each boundary, and repeated words are removed afterwards. It also means the tab must stay open for the whole job. On a phone, a large model plus a long recording can exhaust memory; choose the Fast model or work on a desktop for substantial files.",
        "Music, crosstalk and heavy background noise reduce accuracy, and overlapping speakers are not separated into different voices. The output has no speaker labels. If you need a diarized record, annotate speakers by hand while listening. If you only need a quick draft for editing, the [offline subtitle generator](/offline-subtitle-generator) page describes how cached models behave once the first download has finished. The [VoiceToTextFree](/) homepage lists the other local tools."
      ]
    }
  ],
  faqs: [
    {
      question: "What video file types can I use?",
      answer:
        "MP4, MOV, WEBM, M4V and MKV are accepted when ffmpeg.wasm can decode their audio. Audio-only files such as MP3, WAV and M4A also work. Files above 500 MB are rejected because everything is processed in browser memory."
    },
    {
      question: "Which languages are supported?",
      answer:
        "Whisper is multilingual, and the language picker includes the languages the bundled models handle. Clear, widely spoken languages usually need less correction than low-resource languages or recordings with strong accents. You can also ask the model to translate speech into English."
    },
    {
      question: "Can I include timestamps in the TXT file?",
      answer:
        "Yes. The export bar offers a timestamped text option that prefixes each line with the cue start time. Leave it off for clean prose, or switch it on when you need to find a quote in the original recording. SRT and VTT exports keep full start and end times."
    },
    {
      question: "How accurate is the transcript?",
      answer:
        "Accuracy depends on the language, the recording quality, the accent and the model you choose. Clear speech from a good microphone is usually close, while names, numbers and technical terms still need review. Treat the first pass as a draft and listen to doubtful cues."
    },
    {
      question: "How do I export a plain TXT file?",
      answer:
        "Generate the transcript, review the cues in the editor, then choose TXT in the export bar. The file is UTF-8 text with one cue per line. If you want paragraphs, merge cues before exporting or join the lines in your writing app."
    },
    {
      question: "Is the transcript the same as subtitles?",
      answer:
        "No. A transcript is text for reading, while subtitles are short timed cues designed for video playback. Both come from the same transcription here, but subtitle exports also need line-length and reading-speed checks. Use SRT or VTT when the text will appear on screen."
    }
  ],
  workedExample: {
    title: "A timestamped excerpt from a workshop recording",
    intro:
      "This SRT excerpt shows the timing data kept alongside the transcript. The TXT export can use the same start times as prefixes or drop them entirely.",
    srt: `1
00:00:02,400 --> 00:00:05,900
The first step is to label every cable before you unplug it.

2
00:00:06,300 --> 00:00:09,800
A strip of masking tape and a marker is enough.

3
00:00:10,500 --> 00:00:14,200
Photograph the back panel once the labels are in place.`,
    note: "Use a desktop browser for long recordings. If a cue is hard to hear, replay that short section instead of re-running the whole file with a larger model."
  },
  sources: [
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" },
    { label: "Whisper paper on arXiv", url: "https://arxiv.org/abs/2212.04356" },
    {
      label: "Hugging Face — whisper-base ONNX model card",
      url: "https://huggingface.co/onnx-community/whisper-base"
    },
    {
      label: "MDN — Web Audio API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
    }
  ],
  relatedGuides: [
    "what-is-an-srt-file",
    "how-to-improve-whisper-accuracy",
    "subtitle-line-length",
    "how-to-create-and-edit-an-srt-file"
  ],
  keywords: [
    { keyword: "video to text", role: "primary" },
    { keyword: "transcribe video", role: "synonym" },
    { keyword: "video transcription", role: "synonym" },
    { keyword: "transcribe video online", role: "synonym" },
    { keyword: "What video file types can I use?", role: "faq" },
    { keyword: "Which languages are supported?", role: "faq" },
    { keyword: "Can I include timestamps in the TXT file?", role: "faq" },
    { keyword: "How accurate is the transcript?", role: "faq" },
    { keyword: "How do I export a plain TXT file?", role: "faq" },
    { keyword: "Is the transcript the same as subtitles?", role: "faq" }
  ]
};
