import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-transcribe-a-lecture",
  h1: "How to transcribe a lecture recording: free, private, in your browser",
  title: "How to transcribe a lecture recording for free",
  metaDescription:
    "How to transcribe a lecture recording: capture clean audio, pick the right Whisper model, fix technical terms and export SRT or text, all without upload.",
  primaryKeyword: "transcribe a lecture",
  capsule:
    "To transcribe a lecture, record or download the audio, run it through the free browser-based Whisper tool, and export an SRT or plain transcript. Everything happens on your own device, so a class recording never leaves the computer you made it on.",
  published: "2026-11-04",
  updated: "2026-11-04",
  author: "Abdul Samad",
  readingMinutes: 10,
  keyFacts: [
    { label: "Audio source", value: "A recording device close to the speaker beats room audio" },
    { label: "Model choice", value: "Balanced or Accurate for an hour of speech on a laptop" },
    { label: "File limit", value: "500 MB per file, set by browser memory" },
    { label: "Privacy", value: "Audio is decoded and transcribed locally; nothing is uploaded" },
    { label: "Journal habit", value: "Fix names, technical terms and numerals in the first pass" },
    { label: "Exports", value: "SRT, VTT or plain text transcript" }
  ],
  sections: [
    {
      heading: "Capturing audio that is worth transcribing",
      paragraphs: [
        "Anyone hoping to transcribe a lecture should start earlier than transcription: the quality ceiling of a lecture transcript is set at the moment of recording, not at the moment of transcription. A handheld recorder, a phone on the podium, or a laptop near the speaker captures a far cleaner signal than a phone held three rooms away from the lectern. If you are attending in person, put the recording device near the source of speech, because attention drift and murmur from the audience will arrive at the model thirty seconds behind the important sentence.",
        "Recordings supplied by the institution are frequently better than anything a student can make. Lecture-capture systems feed the podium microphone directly, and a recording that was born from the soundboard needs no rescue. Where the choice is between a personal recorder and a designated seat near a live speaker, the recorder wins on consistency: it keeps speaking distance constant for an hour, which stops the model from struggling with a voice that changes level every time the lecturer turns to the board.",
        "One practical habit removes a class of errors entirely: say the non-obvious terms plainly once in the recording's first minutes, or jot them down with the timestamp as the lecture proceeds. A spoken list of isotope names or algorithm names is an anchor the editing pass can use later, and it is cheaper to capture while the recording is fresh than to guess at the end of a long file."
      ]
    },
    {
      heading: "Formats, sizes and what the browser accepts",
      paragraphs: [
        "The transcription runs on files you open yourself, so almost any container works: MP3, M4A, WAV, MP4 and the formats a phone's voice-memo app produces are all readable, because audio is decoded to 16 kHz mono before the model sees it. The practical limit is 500 MB per file, which is a boundary set by browser memory rather than a server quota, and an hour of voice-memo audio sits comfortably under it.",
        "Long recordings reward one small preparation step: stripping silence where it exists. A lecture with a long pause at each end, or an instrument test at the start, adds dead weight to the decode stage without adding words. A short trim with any desktop editor is optional rather than required, and doing it only when the file misbehaves keeps the workflow light."
      ],
      bullets: [
        "Record at the highest quality the device offers; the decode step downsamples anyway.",
        "Keep an untouched copy of the original recording in case you need a second pass.",
        "Trim only dead air at the edges; the model tolerates gaps inside the lecture."
      ]
    },
    {
      heading: "Running the transcript in the browser",
      paragraphs: [
        "Open the [free transcription tool](/) and drop in the recording. Whisper runs through the browser, choosing WebGPU when the device offers it and falling back to WASM otherwise. Nothing leaves the machine; there is no upload step, no account and no queue to join, which is the property that makes the tool tolerable when a class recording contains another student's voice or a personal comment meant for the room.",
        "Accuracy levels are a memory equation. Fast uses roughly 41 MB on WASM or 76 MB on WebGPU, Balanced uses 77/146 MB, and Accurate uses 249/485 MB. For a lecture that is mostly one voice speaking in full sentences, Balanced is the level that finishes first with few enough errors to fix by hand. Accurate earns its download on the hardest inputs: heavy accents, technical vocabulary, recordings made from the back of a hall.",
        "Process a ninety-minute seminar on a desktop or laptop rather than a phone. Phones work for short clips, but a long file holds the whole decoded audio in memory, and a browser that runs out of memory is the most common failure on handsets. The guidance on [improving Whisper accuracy](/guides/how-to-improve-whisper-accuracy) goes deeper on choosing the level."
      ]
    },
    {
      heading: "From lecture audio to text: the first editing pass",
      paragraphs: [
        "The first ten minutes of editing decide whether a transcript is useful. Read from the top and fix the recurring nouns immediately: names of people, names of methods, units, and any term the lecturer introduced with a joke or a spelling. Every later instance reads cleanly once the term is right, and a keeper who skips this step pays the cost again on every page of study notes. Numbers come next, because a lecture is where values get spoken aloud, and a summary slide usually answers a misheard figure in seconds.",
        "Watch line breaks rather than paragraph style. Cues should break at clause boundaries so a reading line matches a spoken phrase, and the editor lets you rebalance a cue that swallowed two clauses at once. Where the topic turns, split cues more aggressively; a paragraph boundary is also the timestamp you will want when you search the transcript later, and the [subtitle timing editor](/subtitle-timing-editor) makes that adjustment a two-click fix.",
        "The honest answer on filler words is that they cost little to keep. Removing every like and you know from an hour of speech is an hour of bad editing, while leaving them costs only tone. Delete fillers in cues destined for captions, keep them in a study transcript, and let the eventual reader, not perfectionism, decide."
      ]
    },
    {
      heading: "Lecture transcription accuracy: the failure patterns",
      paragraphs: [
        "Four inputs account for most lecture errors. Homophones in technical vocabulary confuse without context, so a spoken word like ligase or aldol can land as anything until you know the subject. Code-switching between the language of instruction and another costs words at switches. Cross-talk from a lecture hall's question breaks a chunk boundary mid-response. And equipment hiss from an early recording file buries quiet consonants entirely.",
        "Each failure has a matching remedy that does not involve retyping. In a subject with dense vocabulary, a model only knows its word list so well; keep a small glossary of the course terms and correct with find-and-replace, which covers a term as reliably as the fix that the model itself would need retraining to learn. For question sections, adding a manual label such as Audience at the boundary is honest about the truth the model cannot see.",
        "Low-resource languages and mixed-script output need patience rather than excuses, and the limits are documented on the language pages of this site rather than smiled at. When a course is presented in a language with modest available data, plan on an editing pass proportionate to the length; a first transcript that is ninety per cent right is still far faster than a transcription from nothing."
      ]
    },
    {
      heading: "Captions, notes and where a transcript fits",
      paragraphs: [
        "A transcript and a set of notes answer different needs, and confusing them is how a tool gets blamed for a job it was never doing. Notes are dense judgments; a transcript is verbatim record. Students who keep both get the best result: skim the transcript to find a topic, then study the notes, with the SRT timestamps available to jump back to the exact minute the explanation was given.",
        "Where a recording is shared with a class, a caption file is the artefact with the strongest claim on anyone's attention, because captions serve deaf and hard-of-hearing viewers, second-language readers and anyone in a quiet space, and accessibility guidance from the W3C describes how to make audio and video materials usable for those audiences. Uploading an SRT alongside a lecture recording on the platform that hosts it costs minutes and stays useful long after the recording itself feels old."
      ]
    },
    {
      heading: "Permissions, consent and honest limits",
      paragraphs: [
        "Ask before you record. An instructor's consent is the difference between a study aid and a disciplinary conversation at institutions that treat lectures as recorded material with a policy, and a self-appointed recording habit looks the same on paper as it does in the row behind you. Consent questions are the reason a transcript produced for personal use should stay there until the policy says otherwise.",
        "The tool's honesty is easy to state because there is no hardware claim to lean on: transcription runs on the device that opened the file, weak accents and long recordings cost more time than short clear ones, and the model will be wrong outside its training data without announcing it. Evaluation of gaps belongs to the reader of the transcript, and spot-checking a few cues against the audio is the cheapest verification that exists."
      ]
    },
    {
      heading: "The full workflow at a glance",
      paragraphs: [
        "The loop from recording to study notes is short enough to run on the same day as the class, which is when fixing terms costs least, because memory of the lecture is part of the editing stack. Export a plain transcript for reading and quote search, plus an SRT if the recording travels to a platform. One pass, two exports, no upload at any stage."
      ],
      steps: [
        "Record or obtain the lecture audio, ideally from a device near the speaker.",
        "Open the file in the browser tool and choose Balanced for standard speech, Accurate for difficult audio.",
        "Fix terms, names and numerals from the top before re-reading lower down.",
        "Export plain text for notes and an SRT if the recording will be shared.",
        "Store the transcript with the recording so timestamps stay meaningful."
      ]
    }
  ],
  faqs: [
    {
      question: "Do I need permission to transcribe a lecture?",
      answer:
        "In institutions with recording policies, the instructor's consent is the usual requirement, and many instructors allow recording for study purposes when asked. The safe pattern is to ask first and keep the transcript for its approved purpose."
    },
    {
      question: "Which model level should I use for long lectures?",
      answer:
        "Balanced covers most single-voice lecture audio with a modest download, and Accurate earns its larger model on accents, technical vocabulary or poor recording conditions. Long files also need the memory of a desktop or laptop rather than a phone."
    },
    {
      question: "Why are technical words transcribed wrong?",
      answer:
        "Speech recognition guesses from context, and technical vocabulary has less of it. Fix the term once with find-and-replace, because every later instance then reads correctly, and keep a course glossary so the same words are fixed consistently."
    },
    {
      question: "Does the transcript include the slides?",
      answer:
        "No. The transcript covers spoken words only, and anything written on a slide or board has to be merged by hand if you need it. Keeping the transcript beside a copy of the slides is simpler than interleaving them."
    },
    {
      question: "Is the lecture recording uploaded anywhere?",
      answer:
        "No. The file is decoded and transcribed in your browser on your device, with no upload endpoint and no account. Transcripts export as downloads, not through a server."
    },
    {
      question: "Can I transcribe a lecture on my phone?",
      answer:
        "Short recordings work, and older or larger files can exhaust phone memory during transcription. For an hour-long lecture, a desktop or laptop is the reliable place to run the job."
    }
  ],
  workedExample: {
    title: "Worked example: cues from a chemistry lecture",
    intro:
      "A forty-minute lecture recorded on a phone near the podium produced these cues after a Balanced transcription and one editing pass. The chemical name was corrected from the deck's spelling during the first read.",
    srt: `1
00:03:12,500 --> 00:03:19,800
The reaction rate depends on the concentration of hypochlorite, not on the solvent.

2
00:03:20,400 --> 00:03:26,100
That relation is what the next slide plots against temperature.`,
    note: "The first cue carries the claim that the summary question would rest on, so the technical term was checked before anything else. A cue fixed at its first appearance stays right for the rest of the transcript."
  },
  sources: [
    {
      label: "OpenAI — Whisper GitHub repository",
      url: "https://github.com/openai/whisper"
    },
    {
      label: "Radford et al. — Robust Speech Recognition via Large-Scale Weak Supervision (arXiv)",
      url: "https://arxiv.org/abs/2212.04356"
    },
    {
      label: "W3C WAI — Making Audio and Video Media Accessible",
      url: "https://www.w3.org/WAI/media/av/"
    }
  ],
  relatedGuides: [
    "how-to-improve-whisper-accuracy",
    "whisper-model-sizes-compared",
    "subtitle-best-practices",
    "subtitles-for-accessibility"
  ],
  keywords: [
    { keyword: "transcribe a lecture", role: "primary" },
    { keyword: "lecture transcription", role: "secondary", headingLevel: 2 },
    { keyword: "lecture audio to text", role: "secondary", headingLevel: 2 },
    { keyword: "transcribe lecture recording", role: "synonym" },
    { keyword: "class lecture transcript", role: "synonym" },
    { keyword: "lecture transcription free", role: "synonym" },
    { keyword: "do i need permission to transcribe a lecture", role: "faq" },
    { keyword: "which model level should i use for long lectures", role: "faq" },
    { keyword: "why are technical words transcribed wrong", role: "faq" },
    { keyword: "does the transcript include the slides", role: "faq" },
    { keyword: "is the lecture recording uploaded anywhere", role: "faq" },
    { keyword: "can i transcribe a lecture on my phone", role: "faq" }
  ]
};
