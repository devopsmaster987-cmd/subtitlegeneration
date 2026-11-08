import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-transcribe-a-zoom-recording",
  h1: "How to transcribe a Zoom recording: free, offline, no upload",
  title: "Transcribe a Zoom recording free",
  metaDescription:
    "How to transcribe a Zoom recording step by step: find the local or cloud file, pick the audio-only version, run Whisper in your browser and export an SRT.",
  primaryKeyword: "transcribe a zoom recording",
  capsule:
    "This guide shows how to transcribe a Zoom recording on your own computer. Find the MP4 or audio-only file, open it in the browser-based Whisper generator, fix names and timestamps, then export an SRT file with no upload and no software to install.",
  published: "2026-11-04",
  updated: "2026-11-04",
  author: "Abdul Samad",
  readingMinutes: 10,
  keyFacts: [
    {
      label: "Local file location",
      value: "Documents\\Zoom on Windows, Documents/Zoom on Mac and Linux"
    },
    { label: "Best file to use", value: "audio_only.m4a when you only need the words" },
    { label: "Cloud files", value: "Downloaded from the Zoom web portal by a permitted user" },
    { label: "Privacy", value: "Nothing is uploaded; transcription runs in your browser" },
    { label: "File limit", value: "500 MB per file, set by browser memory" },
    { label: "Exports", value: "SRT, VTT or plain text" }
  ],
  sections: [
    {
      heading: "Two ways Zoom saves a recording",
      paragraphs: [
        "To transcribe a Zoom recording you first need the file. Zoom can record a meeting to your computer or to the Zoom cloud, and the two paths start from different places. A local recording lives on the machine that hosted the meeting. A cloud recording sits in the Zoom web portal and must be downloaded before any local tool can work with it. Knowing which one you have saves ten minutes of searching, because the file locations and permissions differ.",
        "Local recording is available to free and licensed accounts, and it produces files directly on the host's disk. Cloud recording depends on the account's settings and storage, and the recording appears in the portal once processing finishes. Zoom's support site describes where each kind of recording lives and who may download it; both matter when you are handed a task by a colleague who organised the meeting."
      ],
      bullets: [
        "Local recording: files on the host's computer, available to free and paid accounts.",
        "Cloud recording: files in the Zoom web portal, subject to account settings and storage.",
        "Neither path sends the file to a transcript service unless you upload it yourself."
      ]
    },
    {
      heading: "Finding the Zoom file you need",
      paragraphs: [
        "Zoom writes local recordings into a dated folder under your Documents directory by default. On Windows the path looks like Documents\\Zoom, on macOS it is Documents/Zoom, and Linux mirrors the same layout. Each meeting gets its own folder, and Zoom names the video file for the date and meeting. An audio-only file, usually called audio_only.m4a, sits alongside the MP4 when that option is enabled.",
        "For cloud recordings, a permitted user opens the Zoom web portal, opens the recording's page, and uses the Download control to save the files to a local disk. Depending on settings, a cloud recording can offer the shared-screen MP4, an audio-only file, and even a transcript file of its own. If the download control is greyed out, ask the meeting organiser; Zoom limits downloads by role and policy.",
        "If the audio-only file exists, start there. It is small, it carries the entire conversation, and a smaller file leaves more memory free for the transcription itself. The MP4 is fine too, but the picture track buys you nothing for a transcript."
      ]
    },
    {
      heading: "Running Whisper on the Zoom file",
      paragraphs: [
        "VoiceToTextFree transcribes in the browser with Whisper, so the basic loop is simple: open the [free subtitle generator](/), drop in the Zoom file, choose an accuracy level and wait. The first run downloads model files from Hugging Face and caches them in the browser; later runs start from that cache. Fast uses roughly 41 MB on WASM or 76 MB on WebGPU, Balanced uses 77/146 MB, and Accurate uses 249/485 MB.",
        "Choose the accuracy level by what the recording contains. A single-speaker status update with a lapel microphone almost always lands well on Balanced. A long question-and-answer session with speakers on phones from call-centre rooms will benefit from Accurate, provided your device has the memory to carry it. Phones struggle with long files, so run a one-hour meeting on a desktop or laptop when you can.",
        "Nothing about this loop uploads the meeting. Audio is decoded at 16 kHz, split into 30-second chunks and processed locally, which is the property organisations care about most when a meeting contains commercial-in-confidence material. You deal with a file you already have, and the transcript never travels to a server you do not control."
      ]
    },
    {
      heading: "From Zoom recording to text: clean-up that matters",
      paragraphs: [
        "Automatic transcription of meetings is good at words and blind to meaning, and a little editing closes most of that gap in minutes. Fix three things first: names, numbers and cross-references. A colleague's surname that Whisper typed as two words, a price with a slipped decimal, and a phrase like as we agreed earlier are the errors people actually read. Everything else is invisible to a patient reader.",
        "The in-browser editor lets you adjust cue text and timings without leaving the page. Shorten or rebalance lines where a cue drifted, and merge two cues that split mid-sentence. When the file must go to a video platform, give it the last check for overlapping cues. A lightweight pass carries far more value than a heavy rewrite, so keep your effort proportional to the fate of the transcript.",
        "If the meeting produced a chat file, keep it beside the transcript rather than merging the two. Spoken lines and chat lines obey different conventions, and a transcript that interleaves them becomes harder to quote. For more on line discipline, see [subtitle best practices](/guides/subtitle-best-practices)."
      ]
    },
    {
      heading: "Zoom transcript accuracy: what moves the needle",
      paragraphs: [
        "Accuracy on meeting audio is decided before the model starts. Overlapping speakers, uncovered mouths on laptops turned away from the mic, a shared-screen video playing underneath the conversation, and brand vocabulary nobody spelled out will all cost you words. The recording stage fixes some of this: a participant who records locally with camera audio will get a sharper source than a room phone in the middle of a table.",
        "Confirm disputed passages rather than re-running the whole job. Sentences where meaning depends on a word that could plausibly be two others deserve a second listen, because no accuracy level knows which of two spellings of a client's name is right. Long meetings benefit most from this habit, since the same names recur throughout the hour and one confirmed spelling repairs every later cue."
      ]
    },
    {
      heading: "Speaker labels: what this transcript can and cannot tell you",
      paragraphs: [
        "Whisper transcribes speech; it does not decide who spoke. The transcript produced here carries timestamps, not speaker labels, so an interface where two people talk over one another will read as one voice until you name turns by hand. If labels are important to the record, either annotate them during the editing pass or lean on a feature that has access to the live meeting, such as the speaker-labelled captions Zoom itself can produce as part of some of its recording features.",
        "There is a cheap heuristic that keeps manual labelling short: cues sit next to each other in time, so a turn usually begins at a cue boundary where the voice register changes. For most internal meetings, writing a line such as Dana: at the start of each turn costs under ten minutes for an hour of audio and is that rare edit which lowers ambiguity rather than raising it."
      ]
    },
    {
      heading: "Consent, permissions and retention",
      paragraphs: [
        "Recording consent rules depend on where participants sit and what the organisation requires. Recordings notified in advance with all participants aware cause the fewest objections, while jurisdictions that require explicit consent for recording may need real announcements or prompts that leave a written trail. A transcript derived from a recording inherits whatever legitimacy the recording has, so it is worth settling before you press record rather than after.",
        "Retention is the second half of the duty. Zoom offers administrators automatic deletion windows for cloud recordings, and a transcript you keep for years outlives the meeting that spawned it, so decide where a transcript's home directory is and delete it on the same schedule as its source. If the meeting carries client or patient content, local-only transcription has the additional benefit of never creating a copy on a third-party service for you to police.",
        "A file-only habit also protects downstream colleagues. When a transcript lives in the same folder as its recording, nobody inherits a link to a service that expired or a portal whose owner has left the organisation. Those are the boring requirements that keep a meeting archive serviceable, and they matter more than any accuracy tweak on the list."
      ]
    },
    {
      heading: "Where the transcript goes next",
      paragraphs: [
        "Download the finished file in whatever shape its reader needs. An [SRT](/guides/what-is-an-srt-file) travels to video platforms and editors, a VTT goes into browser-based players, and plain text is the format for pasting into notes, minutes and search systems. Conversion between formats is lossless at the syntax level, so exporting SRT as your master and deriving the rest keeps one file authoritative."
      ],
      steps: [
        "Open the Zoom folder and pick the audio-only file when available.",
        "Load it into the browser transcription page and choose an accuracy level.",
        "Fix names, numbers and cross-references in the editor.",
        "Export SRT as the master file and convert copies to VTT or text as needed."
      ]
    }
  ],
  faqs: [
    {
      question: "Can I transcribe a Zoom recording without the host's file?",
      answer:
        "You need the files themselves. Local recordings live only on the host's computer, and cloud recordings are downloaded from the Zoom web portal by someone with permission. A viewing link on the portal is not a usable file."
    },
    {
      question: "Which Zoom file should I transcribe?",
      answer:
        "Use the audio-only M4A when it exists. It carries every word at a fraction of the MP4's size, which matters because the transcription holds the whole file in browser memory."
    },
    {
      question: "Does Zoom transcribe recordings automatically?",
      answer:
        "Zoom offers transcription-related features on some plans and settings, including processed transcripts alongside cloud and smart recordings. Availability varies by account, so check your portal. Any file you download can also be transcribed locally with this tool."
    },
    {
      question: "How long does it take to transcribe a Zoom recording?",
      answer:
        "It depends on the device, the chosen accuracy level and the file's length. Expect the first run to add a one-time model download, and expect long meetings on phones to be the slowest case. Run long files on a desktop for speed."
    },
    {
      question: "Is the Zoom file uploaded anywhere during transcription?",
      answer:
        "No. The file is read in your browser and processed on your device with Whisper. Transcription does not require an account and there is no upload endpoint."
    },
    {
      question: "Will the transcript name each speaker?",
      answer:
        "Not automatically. The tool produces timed text without speaker labels, so annotate turns by hand when they matter. Zoom's own recording features may provide speaker-labelled transcripts on some plans."
    }
  ],
  workedExample: {
    title: "Worked example: two cues from a standup meeting",
    intro:
      "A project standup recorded locally produced audio_only.m4a. After transcription in the browser, two early cues looked like this before export as SRT. Names and the figure were confirmed against the speakers' words during the editing pass.",
    srt: `1
00:00:06,400 --> 00:00:11,900
Front-end list is done except the settings page, which needs a decision.

2
00:00:12,200 --> 00:00:18,650
Dana says the estimate needs to move from two weeks to four if design is delayed.`,
    note: "The second cue attributes the estimate in the words themselves, because the transcript carries no speaker labels. Naming the person where it keeps the record unambiguous is one of the small habits that makes sharing safe."
  },
  sources: [
    {
      label: "Zoom Support — Managing and sharing cloud recordings",
      url: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067567"
    },
    {
      label: "Zoom Support — Missing Zoom meeting recording issues",
      url: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0083769"
    }
  ],
  relatedGuides: [
    "what-is-an-srt-file",
    "how-to-improve-whisper-accuracy",
    "subtitle-best-practices",
    "how-to-sync-subtitles"
  ],
  keywords: [
    { keyword: "transcribe a zoom recording", role: "primary" },
    { keyword: "zoom recording to text", role: "secondary", headingLevel: 2 },
    { keyword: "zoom transcript accuracy", role: "secondary", headingLevel: 2 },
    { keyword: "zoom meeting transcription", role: "synonym" },
    { keyword: "zoom transcription free", role: "synonym" },
    { keyword: "zoom audio to text", role: "synonym" },
    { keyword: "can i transcribe a zoom recording without the host's file", role: "faq" },
    { keyword: "which zoom file should i transcribe", role: "faq" },
    { keyword: "does zoom transcribe recordings automatically", role: "faq" },
    { keyword: "how long does it take to transcribe a zoom recording", role: "faq" },
    { keyword: "is the zoom file uploaded anywhere during transcription", role: "faq" },
    { keyword: "will the transcript name each speaker", role: "faq" }
  ]
};
