import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/audio-to-srt",
  preset: "audio-to-srt",
  h1: "Audio to SRT: turn a sound file into timed subtitles",
  title: "Audio to SRT — build a timed subtitle file from MP3, WAV or M4A",
  metaDescription:
    "Convert audio to SRT in your browser. An MP3, WAV or M4A file is decoded locally, transcribed with Whisper, and exported as a timed subtitle file without an upload.",
  primaryKeyword: "audio to srt",
  capsule:
    "Audio to SRT means turning a recording that has no picture into a subtitle file with numbered, timed cues. VoiceToTextFree decodes the sound locally, runs Whisper in the browser, and lets you correct wording and timing before downloading a standard SRT.",
  published: "2026-02-05",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "MP3, WAV, M4A, AAC, FLAC, OGG and similar audio files" },
    { label: "Output", value: "SRT with numbered cues, plus VTT and TXT from the same edit" },
    { label: "Limit", value: "500 MB per file, held in browser memory" },
    { label: "Audio path", value: "Decoded to 16 kHz mono before transcription" },
    { label: "Timing", value: "Cues are generated from the audio clock, not from video frames" },
    { label: "Editing", value: "Shift, stretch, split or merge cues before export" }
  ],
  sections: [
    {
      heading: "What an audio-only subtitle file is for",
      paragraphs: [
        "Sometimes the picture is not the point. A podcast, a phone interview or a recorded lecture may have no video at all, yet still need captions for a video cut, a social clip or an accessible web player. This page accepts the sound file directly, so you do not have to attach a still image or run the audio through a video editor first.",
        "The output is an ordinary SRT file. It contains numbered cues, start and end times, and the spoken text. Because there are no frames to inspect, timing comes entirely from the audio clock. That makes the result predictable, but it also means you should listen to the first and last cue after importing the SRT into an editor, especially if the source was recorded on a device that pauses and resumes."
      ]
    },
    {
      heading: "MP3 to SRT without an upload",
      paragraphs: [
        "MP3 remains the most common delivery format for interviews and podcasts. The browser decodes it with ffmpeg.wasm, discards the compression after decoding, and passes mono samples to Whisper. Constant-bitrate and variable-bitrate MP3 files both work; the timestamp is based on decoded audio duration, so a variable-bitrate file does not drift simply because its bitrate changes.",
        "Very low bitrates introduce artefacts that the model may hear as words. If a 64 kbps phone recording produces odd cues, try a cleaner source before blaming the subtitle writer. Mono podcasts usually transcribe more reliably than stereo recordings with music in one channel, because the extracted track is downmixed before inference."
      ]
    },
    {
      heading: "WAV to SRT: uncompressed recordings",
      paragraphs: [
        "WAV files are large but simple. A 16-bit, 44.1 kHz stereo recording is decoded without loss, downmixed and resampled to 16 kHz. That is the same preparation used for video soundtracks, so a WAV from a field recorder and the audio track of an MP4 should produce closely matching text when the speech is identical.",
        "The size limit matters more here. An hour of stereo WAV at 44.1 kHz can exceed 600 MB, which is above the browser limit even though the speech may be only a few minutes. Trim the file or export a compressed copy if you only need the spoken section. If you keep the WAV, watch memory during the job: the page holds the file, the decoded samples and the model at the same time."
      ]
    },
    {
      heading: "M4A to SRT for phone and podcast recordings",
      paragraphs: [
        "M4A files from phones and podcast tools usually contain AAC audio. They are compact and decode well, which makes them a good choice when you need to send a recording to a collaborator. The extension is also used for Apple Lossless in some workflows; that variant is larger and decodes more slowly but still follows the same path.",
        "Phone recordings often include handling noise, room echo and clipped peaks. Whisper may drop a word at a loud click or invent a short phrase during a long silence. Reviewing the cues around pauses is faster than re-transcribing with a larger model, and the editor lets you delete a bad cue without touching the rest of the file."
      ]
    },
    {
      heading: "Timing accuracy when there is no picture",
      paragraphs: [
        "Cue boundaries are chosen by the model from the audio it hears. A pause between sentences is the usual split point, but a breath in the middle of a clause can become a cue boundary too. The editor shows each cue against a preview player, so you can move a start time earlier when the speaker's lip movement would be visible in a later video edit, or when the first syllable is clipped.",
        "For a constant offset, shift every cue by the same amount. For drift that grows across a long recording, use a stretch factor rather than repeated nudges. The timing controls on the [SRT editor](/srt-editor) page are built for those two cases. After any change, check a cue near the start, the middle and the end instead of trusting a single spot check."
      ]
    },
    {
      heading: "Codecs, file size and memory limits",
      paragraphs: [
        "AAC, MP3, Vorbis and PCM are handled reliably. Some broadcast formats and odd container combinations can fail during extraction. When that happens, the error appears before transcription starts, which is a useful signal: convert the file to WAV or MP3 with a trusted tool and try again. A file with several audio streams may expose only the first one to the decoder.",
        "The 500 MB limit is about tab memory rather than upload speed, because nothing is uploaded. A compressed two-hour podcast can fit while a short uncompressed master cannot. On a phone, the model and the decoded audio compete for memory, so choose the Fast model for long files. If the tab is killed by the operating system, the job is lost and must be restarted."
      ]
    },
    {
      heading: "Review, export and reuse the cue list",
      paragraphs: [
        "Read the transcript while listening to the first minute, then skim the rest for names and numbers. Fixing a wrong proper noun is quick; re-running the whole file for one bad word is not. If a sentence is split across two cues and reads awkwardly, merge them, then split at a natural clause boundary. Keep lines under about 42 characters and aim below 20 characters per second for on-screen use.",
        "Export SRT for players and editors, VTT for the web, or TXT for a readable transcript. The same cues feed all three files, so a correction made once appears in every download. Before publishing, run the file through the [subtitle validator](/subtitle-validator) to catch overlaps, empty cues and reading-speed warnings. The [video to SRT](/video-to-srt) page covers the same workflow when the source has pictures, and the [VoiceToTextFree](/) homepage lists the rest of the local tools, including the [offline subtitle generator](/offline-subtitle-generator) and the [private subtitle generator](/private-subtitle-generator). Bookmark [this audio workflow](/audio-to-srt) if you expect to repeat the job."
      ]
    }
  ],
  faqs: [
    {
      question: "Can I transcribe audio only?",
      answer:
        "Yes. This page accepts audio files directly, including MP3, WAV and M4A, and does not require a video container. The output is a normal SRT file that you can import into a player or editor."
    },
    {
      question: "Which audio formats and codecs work?",
      answer:
        "MP3, WAV, M4A, AAC, FLAC and OGG usually work when the browser build of ffmpeg can decode them. Unusual broadcast codecs or files with several audio streams may fail during extraction. Convert to WAV or MP3 if a file is rejected."
    },
    {
      question: "How accurate is the timing?",
      answer:
        "Cue times come from the audio clock, so there is no frame-rate drift to correct. Boundaries still land where the model hears a pause, which may be mid-sentence. Check a few cues against the recording and adjust the ones that clip the first word."
    },
    {
      question: "Is there a file size limit?",
      answer:
        "The limit is 500 MB per file. This is a memory guard, not a duration rule, so a compressed podcast may fit while an uncompressed master of the same length does not. For long files, the Fast model leaves more memory for the audio."
    },
    {
      question: "Do I need to upload the audio file?",
      answer:
        "No. The file is read from your device and decoded in the browser. Only the page and model files are downloaded. You can watch the network panel while a job runs to confirm that the recording is not sent anywhere."
    },
    {
      question: "What is the difference between SRT and a plain transcript?",
      answer:
        "SRT carries numbered cues with start and end times. A plain transcript is continuous text with no timings. This page exports both from the same edit, so you can publish captions and keep a readable copy without transcribing twice."
    }
  ],
  workedExample: {
    title: "SRT from a two-speaker podcast segment",
    intro:
      "The source was a 128 kbps M4A file. These cues were kept short enough to read on screen, and the overlap at the chunk boundary was removed automatically.",
    srt: `1
00:00:01,200 --> 00:00:04,600
We started the project with a single microphone.

2
00:00:05,000 --> 00:00:08,400
That worked until the second guest joined remotely.

3
00:00:08,900 --> 00:00:12,100
The room sound was the real problem, not the voices.`,
    note: "If the recording begins with a long silence, the first cue may start later than expected. That is not an error; trim the silence before export if you need the file to start immediately."
  },
  sources: [
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" },
    { label: "Whisper paper on arXiv", url: "https://arxiv.org/abs/2212.04356" },
    {
      label: "Hugging Face — whisper-small ONNX model card",
      url: "https://huggingface.co/onnx-community/whisper-small"
    },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" }
  ],
  relatedGuides: [
    "how-to-sync-subtitles",
    "subtitle-timing-guidelines",
    "how-to-improve-whisper-accuracy",
    "what-is-an-srt-file"
  ],
  keywords: [
    { keyword: "audio to srt", role: "primary" },
    { keyword: "mp3 to srt", role: "secondary", headingLevel: 2 },
    { keyword: "wav to srt", role: "secondary", headingLevel: 2 },
    { keyword: "m4a to srt", role: "secondary", headingLevel: 2 },
    { keyword: "Can I transcribe audio only?", role: "faq" },
    { keyword: "Which audio formats and codecs work?", role: "faq" },
    { keyword: "How accurate is the timing?", role: "faq" },
    { keyword: "Is there a file size limit?", role: "faq" },
    { keyword: "Do I need to upload the audio file?", role: "faq" },
    { keyword: "What is the difference between SRT and a plain transcript?", role: "faq" }
  ]
};
