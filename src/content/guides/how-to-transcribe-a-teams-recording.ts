import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-transcribe-a-teams-recording",
  h1: "How to transcribe a Teams recording: free, offline, no upload",
  title: "How to transcribe a Teams recording: free and private",
  metaDescription:
    "How to transcribe a Teams recording: find the OneDrive or SharePoint file, download the MP4, run Whisper locally in your browser and export SRT, VTT or text.",
  primaryKeyword: "transcribe a teams recording",
  capsule:
    "To transcribe a Teams recording, download the meeting's MP4 from OneDrive or SharePoint and open it in the browser-based Whisper tool. Export SRT, VTT or text and fix any names in the editor. Transcription runs on your device, so the meeting audio is never uploaded to a server.",
  published: "2026-11-04",
  updated: "2026-11-04",
  author: "Abdul Samad",
  readingMinutes: 10,
  keyFacts: [
    {
      label: "Where files live",
      value: "Organizer's OneDrive (Recordings folder) or the channel's SharePoint"
    },
    { label: "Who downloads", value: "Only the meeting organizer, per Microsoft's guidance" },
    { label: "Storage window", value: "Recordings expire after an admin-set period" },
    { label: "File format", value: "MP4 with mixed audio captured at 16 kHz for transcription" },
    { label: "Privacy", value: "Local browser transcription; no upload endpoint exists" },
    { label: "Exports", value: "SRT, VTT or plain text" }
  ],
  sections: [
    {
      heading: "Where Teams stores meeting recordings",
      paragraphs: [
        "To transcribe a Teams recording you first need the file. Microsoft made OneDrive and SharePoint the home of Teams meeting recordings, and the address depends on the kind of meeting. A standard meeting writes the recording to the organiser's OneDrive for Business, inside a Recordings folder. A meeting held in a channel writes to that channel's SharePoint document library instead. The distinction trips people up because both render as the same familiar player page inside Teams.",
        "Recordings are not permanent. They expire after a period your IT admin sets, and an expired recording drops into the recycle bin of the place it lived. Microsoft's own documentation points out that once a file leaves the recycle bin it is unrecoverable, so if your transcript plan rests on an old recording, fetch the file today rather than next month.",
        "Permissions follow the same shape. Granular rights sit with the organiser, and Microsoft states that only the meeting organiser can download the recording file, which is the permission that matters for everything in this guide. If you were merely invited, you may be able to view the recording in the chat and still be unable to pull the underlying MP4. That gap is worth checking before you promise a transcript to a colleague, because the whole deliverable starts with the download."
      ]
    },
    {
      heading: "Downloading the recording file",
      paragraphs: [
        "The download path in Teams is short. Open the meeting chat or the channel where the meeting ran, switch to the Shared tab, find the recording, and use the More options menu beside it to pick Download. The result is an MP4 file with the meeting's audio track inside it. Save it to a folder you control rather than a sync folder, because a browser cannot open a file that the sync tool is still renegotiating.",
        "Channel meetings differ in only one respect: the file sits in the channel's Files area on SharePoint, and the organiser downloads it from there. Either way, the deliverable for transcription is the same local MP4. No intermediate conversion is necessary; the audio track inside the MP4 is exactly what the transcription reads."
      ],
      steps: [
        "Open the meeting chat or channel in Teams and switch to the Shared tab.",
        "Select the recording, then More options, then Download.",
        "Save the MP4 to a local folder outside any sync library you do not control."
      ]
    },
    {
      heading: "Transcribing the file locally in the browser",
      paragraphs: [
        "Open [VoiceToTextFree](/) and drop the MP4 into the page. The tool extracts audio with ffmpeg.wasm, runs Whisper through the browser's WebGPU when available and falls back to WASM when it is not, and shows the cues for editing. There is no account step and no upload stage; the tab you have open is the only program touching the file.",
        "The first transcription on a new device downloads the model, and that download is the honest cost of local execution. Fast uses roughly 41 MB on WASM or 76 MB on WebGPU, Balanced uses 77/146 MB, and Accurate uses 249/485 MB. The browser caches the model, so the second meeting of the day starts almost immediately. On a corporate laptop, the Accurate level is the one to pick for a forty-minute investor call; a quick internal huddle needs nothing heavier than Balanced.",
        "This local path is also the reason the workflow tolerates confidentiality clauses. A recording that stayed inside the tenant because the organiser downloaded it deliberately never gains a second copy on an outside service, which is the incident reviewers actually fear in a leak review."
      ]
    },
    {
      heading: "Teams meeting transcription: what Teams already provides",
      paragraphs: [
        "Teams can transcribe meetings live, and when it does, the organiser and co-organisers can download the result as a DOCX or VTT file from the meeting's transcript area. The built-in transcript carries each speaker's name beside their lines, which is something a plain Whisper run cannot supply. If that transcript exists for your meeting, starting from it can be the shorter road.",
        "The VTT file still has work to do, though. Built-in transcripts are formatted for reading and platform playback differs, and some destinations want a sidecar caption file timed to the video rather than a document for humans. Convert the VTT with the [VTT to SRT converter](/convert-srt-to-vtt) when the destination is a video editor or a platform upload form that lists SRT. Keep the original, and treat the conversion as a copy rather than a replacement."
      ]
    },
    {
      heading: "From Teams recording to text without the cloud",
      paragraphs: [
        "A fresh transcription of the MP4 is the right move in three situations. First, live transcription was never started, so there is no built-in transcript to convert. Second, the meeting audio had a language switch, an accent or heavy crosstalk that the live transcript handled poorly, and the file is worth a second, more careful pass at a higher model level. Third, the destination needs a caption file rather than a document, and rebuilding from the audio gives you cue timings that sit where the words sit.",
        "This is the honest trade: the built-in transcript knows who spoke and needs no download from you, while local transcription controls the model, the accuracy level and the outputs. Rooms where both matter do them in sequence, using the built-in transcript to pull speaker turns and the audio pass to check names and figures against the recording."
      ]
    },
    {
      heading: "Editing the transcript: what to fix and what to leave",
      paragraphs: [
        "Meeting prose is spoken prose, and a light edit suits it better than a rewrite. Put right the three things a listener would notice: names, numbers and any phrase that reads differently out of context. Leave hesitations in place when the transcript is a record of what was said; cue-splitting matters more than deleting the occasional um, which is one reason the [subtitle timing editor](/subtitle-timing-editor) sees more use than the delete key in this workflow.",
        "If the transcript is destined to become captions, switch from prose judgment to cue discipline: lines that fit, timings that match the words, and no cue that runs over a cut. When the text bears numbers that decisions rest on, confirm them against the audio, because no model, live or local, is a substitute for a human ear on the sentence where the budget moved."
      ]
    },
    {
      heading: "Keeping the workflow inside the tenant",
      paragraphs: [
        "Files that leave a tenant for an unnamed web service create two risks: copy sprawl and notification gaps. A leaked recording usually does not come from a fancy intrusion; it comes from an employee pasting a link into a tool that nobody vetted, months after the meeting. A local-only transcription step has no link to paste, because the processing happens in the tab that is already open.",
        "Treat the finished transcript like the recording it came from. Store it in the same SharePoint or OneDrive location as the meeting artefacts, apply the same expiry habit, and share it through the same channels. This keeps a transcription pass from quietly becoming the only artefact of the meeting outside the tenant, which is the outcome nobody planned and everybody notices in an audit."
      ],
      bullets: [
        "Download the MP4 only once and work from the local copy.",
        "Keep the transcript with the meeting's other artefacts.",
        "Apply the same retention rules to the text as to the video.",
        "Log who downloaded the file and when, so the copy has an owner."
      ]
    }
  ],
  faqs: [
    {
      question: "Who can download a Teams meeting recording?",
      answer:
        "Microsoft's guidance is that only the meeting organizer can download the recording file. Other invitees can usually view the recording, and download rights cannot be assumed without asking the organizer."
    },
    {
      question: "Can I transcribe a Teams meeting without recording it?",
      answer:
        "Live transcription is Teams' built-in answer for meetings you control, and it yields a downloadable transcript after the meeting. For an existing recording that was never transcribed, feed the MP4 into the local browser tool, which works whether or not the meeting was recorded through Teams' own recorder."
    },
    {
      question: "What format is a Teams recording download?",
      answer:
        "The download is an MP4 file containing the meeting's video and audio. The transcription reads the audio track directly, so no conversion step is needed before the file goes into the browser tool."
    },
    {
      question: "Can I convert the Teams VTT transcript to SRT?",
      answer:
        "Yes. Teams can export its built-in transcript as a VTT file, and the conversion tool turns VTT into SRT in the browser. Keep the original VTT as the master copy and treat the SRT as a derived file."
    },
    {
      question: "Does the local transcription name each speaker?",
      answer:
        "No. Whisper produces timed text without speaker labels, so annotate turns by hand where names matter. The built-in Teams transcript, where a live transcription was run, carries speaker names on its own."
    },
    {
      question: "Why will Teams not let me download the recording?",
      answer:
        "Download rights belong to the organizer by default, and an expired recording moves to the recycle bin of its storage location. Ask the organizer for a download, or for a fresh copy, before the deletion window closes."
    }
  ],
  workedExample: {
    title: "Worked example: from OneDrive download to sidecar SRT",
    intro:
      "A customer discovery call held in Teams produced a recording in the organiser's OneDrive Recordings folder. The organiser downloaded the MP4, the team transcribed it locally, and two cues from the export looked like this.",
    srt: `1
00:00:41,000 --> 00:00:46,300
The current invoicing process takes eleven days and nothing is automatic.

2
00:00:46,800 --> 00:00:52,750
So the team is asking whether a reminder step would change the eleven days.`,
    note: "The figure survived because it was checked against the audio during the editing pass. Meeting numbers are the cheapest words to verify and the most expensive to misquote."
  },
  sources: [
    {
      label: "Microsoft Support — Play, share, and download meeting recordings in Microsoft Teams",
      url: "https://support.microsoft.com/en-us/teams/meetings/play-share-and-download-meeting-recordings-in-microsoft-teams"
    },
    {
      label:
        "Microsoft Support — Start, stop, and download live transcripts in Microsoft Teams meetings",
      url: "https://support.microsoft.com/en-us/teams/meetings/start-stop-and-download-live-transcripts-in-microsoft-teams-meetings"
    }
  ],
  relatedGuides: [
    "what-is-a-vtt-file",
    "srt-vs-vtt",
    "how-to-improve-whisper-accuracy",
    "is-browser-transcription-private"
  ],
  keywords: [
    { keyword: "transcribe a teams recording", role: "primary" },
    { keyword: "teams meeting transcription", role: "secondary", headingLevel: 2 },
    { keyword: "teams recording to text", role: "secondary", headingLevel: 2 },
    { keyword: "microsoft teams transcript download", role: "synonym" },
    { keyword: "transcribe teams meeting free", role: "synonym" },
    { keyword: "who can download a teams meeting recording", role: "faq" },
    { keyword: "can i transcribe a teams meeting without recording it", role: "faq" },
    { keyword: "what format is a teams recording download", role: "faq" },
    { keyword: "can i convert the teams vtt transcript to srt", role: "faq" },
    { keyword: "does the local transcription name each speaker", role: "faq" },
    { keyword: "why will teams not let me download the recording", role: "faq" }
  ]
};
