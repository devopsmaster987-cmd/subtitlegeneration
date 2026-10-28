import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/transcript-generator",
  preset: "transcript-generator",
  h1: "Transcript generator for interviews, lectures and meetings",
  title: "Transcript generator — readable text from long recordings",
  metaDescription:
    "Use this transcript generator to turn interviews, lectures and meetings into editable text, with local Whisper transcription and TXT, SRT or VTT export.",
  primaryKeyword: "transcript generator",
  capsule:
    "A transcript generator turns recorded speech into an editable document for reading, quoting and review. VoiceToTextFree transcribes the audio locally, keeps timestamps available for finding a passage, and exports a clean TXT file for reading or SRT and VTT for video.",
  published: "2026-02-05",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Input", value: "Audio or video recordings up to 500 MB" },
    { label: "Reading export", value: "UTF-8 TXT, one cue per line" },
    { label: "Timed export", value: "SRT and VTT with start and end times" },
    { label: "Speaker labels", value: "Added manually; speakers are not separated automatically" },
    { label: "Long files", value: "Processed in roughly 30-second chunks" },
    { label: "Processing", value: "Whisper runs in the browser, without an upload" }
  ],
  sections: [
    {
      heading: "What a reading transcript needs",
      paragraphs: [
        "A transcript is read, searched and quoted, so it has different standards from a caption file. Sentence punctuation matters. Paragraph breaks matter. A reader should be able to skim a page and find the part where a decision was made or a claim was stated. Caption cues, by contrast, are built for two lines at a time and can break a sentence in awkward places.",
        "The editor stores one set of cues, and the TXT export writes them as lines. That is a useful starting point, but a finished document usually needs a light pass: merge cues that belong to one answer, add paragraph breaks at topic changes, and correct names. The timestamps remain available during editing, so you can jump back to the source when a phrase does not make sense."
      ]
    },
    {
      heading: "Interviews and press recordings",
      paragraphs: [
        "An interview usually contains two or more voices, background noise and overlapping speech. The model writes down the words but does not know who said them. Add initials or surnames at the start of each turn while listening. This is manual work, but it is faster than fixing a document where every quote is attributed to the wrong person.",
        "Transcription for journalists also raises an accuracy bar. A plausible-sounding sentence can still contain the wrong number or a missing negation. Check every quotation that will be published against the audio, not against the first draft. Keep the source file and the unedited transcript until the piece is fact-checked, because later edits can hide where an error entered."
      ]
    },
    {
      heading: "Lectures and study notes",
      paragraphs: [
        "A lecture recording is often long, single-speaker and full of domain terms. That profile suits the model reasonably well, but slide numbers, formulas and acronyms may come out as ordinary words. Listen for the places where the speaker says “this slide” or points at a diagram, and add a short bracketed note if the transcript is meant to stand alone.",
        "Transcription for students is most useful as a searchable index to the recording rather than a replacement for listening. Timestamped TXT lets you jump to the passage where a concept was introduced. If the material will be shared, check the course rules and the speaker's permission before distributing a full transcript of a paid lecture."
      ]
    },
    {
      heading: "Meetings and internal reviews",
      paragraphs: [
        "Meeting recordings often have the worst acoustics and the most crosstalk. A laptop microphone picks up the room rather than individual voices, and people talk over each other. The transcript will still capture the broad discussion, but decisions, owners and deadlines need careful review. Treat the first pass as an index, then write a short summary with the recording open.",
        "If the meeting is confidential, local processing is a strong argument for this workflow. The audio does not leave the machine, and the transcript can be edited before it is stored anywhere else. Check your organisation's policy on recording calls, and tell participants when a recording is being made. The [private subtitle generator](/private-subtitle-generator) page explains how to verify that no upload occurs."
      ]
    },
    {
      heading: "Speaker labels without automatic diarization",
      paragraphs: [
        "Whisper transcribes speech but does not identify who is speaking. There is no built-in diarization step, and the tool will not invent speaker names. You can add labels yourself in the text, for example “Maya:” at the start of a turn. Keep the labels consistent and define them once at the top of the document.",
        "A practical method is to listen at the start of each cue and type a label only when the voice changes. If two speakers overlap, label the dominant voice and note the interruption in brackets. Do not guess from content alone; a question can be asked by either participant. For a polished interview, a second listening pass dedicated to speaker turns is usually necessary."
      ]
    },
    {
      heading: "Accuracy caveats and verification",
      paragraphs: [
        "Accuracy depends on language, recording quality, accent and the model selected. The Fast model is quick but more likely to substitute a similar-sounding word. The Accurate model improves difficult audio but takes longer and uses more memory. Model size is not a guarantee: a noisy recording can defeat a large model, while a clean recording may be nearly perfect with a small one.",
        "Never publish a quote you have not checked. Read for meaning first, then verify names, numbers, negations and anything inside quotation marks. If a sentence is ambiguous, mark it for review instead of smoothing it into a confident statement. The [how to improve Whisper accuracy](/guides/how-to-improve-whisper-accuracy) guide covers microphone placement and model choice in more detail."
      ]
    },
    {
      heading: "Editing, export and long-file workflow",
      paragraphs: [
        "For a long recording, edit in stages: names, then numbers, then punctuation, then paragraph structure. The preview player follows the selected cue, so corrections can be made without scrubbing. Merge short cues when they belong to one sentence, and split a cue when the speaker changes topic in the middle. Export a TXT draft early so you can read the whole document in a comfortable editor.",
        "When the text will also become captions, finish the wording first and adjust cue length second. The [SRT editor](/srt-editor) page covers timing controls, and the [subtitle validator](/subtitle-validator) catches reading-speed problems. If the recording is a video interview, start from the [video to text](/video-to-text) workflow; for an audio-only recorder, the [audio to SRT](/audio-to-srt) page is the closer match. The [VoiceToTextFree](/) homepage also links [video to SRT](/video-to-srt) and the [offline subtitle generator](/offline-subtitle-generator) for repeat work."
      ]
    }
  ],
  faqs: [
    {
      question: "How do I create a transcript from a recording?",
      answer:
        "Choose an audio or video file, select the spoken language, and press Generate. The tool extracts audio locally, transcribes it with Whisper, and shows editable cues. Export TXT for reading or SRT and VTT if the text will appear on screen."
    },
    {
      question: "Does it identify different speakers?",
      answer:
        "No. The model writes down speech but does not separate voices, so speaker labels must be added by hand. Define the labels at the top of the document and apply them while listening to the recording."
    },
    {
      question: "Can I use it for interviews and lectures?",
      answer:
        "Yes. A clear single speaker usually transcribes well, while interviews with crosstalk need more correction. Keep the source audio until every quotation and number has been checked against the recording."
    },
    {
      question: "Can I edit the transcript before exporting?",
      answer:
        "Yes. Every cue can be corrected, split, merged or deleted. Changes update the live preview, and the same edited cues feed the TXT, SRT and VTT exports."
    },
    {
      question: "How long can the recording be?",
      answer:
        "The file limit is 500 MB, which is a memory guard rather than a time limit. Long recordings are processed in chunks, so the tab must stay open. Use a desktop browser and the Fast model for multi-hour files."
    },
    {
      question: "Is the transcript accurate enough to quote?",
      answer:
        "It is a strong draft, not a certified record. Clear speech is usually close, but names, numbers and negations can be wrong. Verify every quotation against the audio before publishing."
    }
  ],
  workedExample: {
    title: "An interview excerpt with manual speaker labels",
    intro:
      "The recording had two speakers on separate microphones mixed to one track. Labels were added by hand during review, then the cues were exported as both TXT and SRT.",
    srt: `1
00:00:04,200 --> 00:00:07,600
Interviewer: When did you first notice the change?

2
00:00:08,100 --> 00:00:12,400
Guest: It was after the second delivery, not the first.

3
00:00:12,900 --> 00:00:16,300
Interviewer: So the timeline in the report is wrong.`,
    note: "The label sits inside the cue text because SRT has no speaker field. If you export TXT, keep the labels consistent so a reader can follow the exchange."
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
    "how-to-improve-whisper-accuracy",
    "whisper-model-sizes-compared",
    "subtitle-best-practices",
    "what-is-an-srt-file"
  ],
  keywords: [
    { keyword: "transcript generator", role: "primary" },
    { keyword: "transcription for journalists", role: "synonym" },
    { keyword: "transcription for students", role: "synonym" },
    { keyword: "subtitles for interviews", role: "synonym" },
    { keyword: "How do I create a transcript from a recording?", role: "faq" },
    { keyword: "Does it identify different speakers?", role: "faq" },
    { keyword: "Can I use it for interviews and lectures?", role: "faq" },
    { keyword: "Can I edit the transcript before exporting?", role: "faq" },
    { keyword: "How long can the recording be?", role: "faq" },
    { keyword: "Is the transcript accurate enough to quote?", role: "faq" }
  ]
};
