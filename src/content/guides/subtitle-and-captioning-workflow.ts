import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/subtitle-and-captioning-workflow",
  h1: "Captioning workflow: from recording to delivery",
  title: "Captioning workflow: from recording to delivery",
  metaDescription:
    "A practical captioning workflow from planning and audio cleanup to local transcription, review, CPS checks, validation, player QA and archiving.",
  primaryKeyword: "captioning workflow",
  capsule:
    "A repeatable captioning workflow turns raw recordings into captions that survive real playback. Plan the file, clean the audio, transcribe locally, correct names and numbers, segment by meaning, check reading speed and line length, validate the export, test it in the target player, and archive the source. The steps scale from one interview to a full course.",
  published: "2026-02-04",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Pipeline",
      value: "Plan, clean, transcribe, review, segment, check, validate, export, QA, archive"
    },
    {
      label: "Transcription",
      value: "Whisper runs locally in the browser on the VoiceToTextFree home page"
    },
    {
      label: "Review priority",
      value: "Names, numbers and technical terms before segmentation"
    },
    {
      label: "Timing checks",
      value: "Characters per second and characters per line, not duration alone"
    },
    {
      label: "Validation",
      value: "Overlaps, empty cues, malformed timestamps and overlong lines"
    },
    {
      label: "Delivery",
      value: "Test the export in the target player and keep a versioned archive"
    }
  ],
  sections: [
    {
      heading: "The captioning process, step by step",
      paragraphs: [
        "A dependable process separates editorial decisions from mechanical checks. Decide who the captions serve and where they will play first; then work through the recording in a fixed order so a late change does not force the whole file to be rebuilt. The order below is a working default, not a rigid rule. The important part is that review happens before timing, and player testing happens before delivery.",
        "The steps assume a pre-recorded file. Live captioning adds a real-time operator and different tools, but the review and delivery questions remain similar."
      ],
      steps: [
        "Plan the file: choose the destination, audience, language, format and filename pattern before opening the audio. A short planning pass prevents a re-export later.",
        "Clean the audio: remove handling noise, hum and long silence, but keep room tone and natural pauses. Heavy noise reduction can smear the consonants that speech recognition needs.",
        "Transcribe locally: run speech recognition on the [VoiceToTextFree home page](/) so the recording stays in the browser. Treat the result as a timed draft, not a finished track.",
        "Review names and numbers: read the transcript against the audio for people, places, product terms, units, dates and code. Fix these before segmenting, because a wrong word changes where a cue should break.",
        "Segment by meaning: cut at clause boundaries and speaker changes. Keep one thought per cue, and let pauses do some of the work of punctuation.",
        "Check CPS and line length: measure characters per second and characters per line. Shorten the text or split the cue when it exceeds your documented limit.",
        "Validate the structure: look for overlaps, empty cues, malformed timestamps and overlong lines. Fix structural errors before export, while the source is still easy to edit.",
        "Export the delivery copy: write UTF-8, choose SRT or VTT for the destination, and use a filename that carries the project name and version.",
        "QA in the target player: watch the opening, a dense middle section and the ending at normal speed on the device your audience uses.",
        "Archive the master: keep the recording, transcript, master subtitle file, glossary and a note describing the limits you applied."
      ]
    },
    {
      heading: "Audio preparation for captions",
      paragraphs: [
        "Audio quality sets the ceiling for transcription accuracy. Record with the microphone close enough to avoid room reflection, set levels so loud passages do not clip, and capture ten seconds of room tone before the first take. If the recording has separate dialogue and music tracks, transcribe from the dialogue track and add music back only when you review the mix. A music bed under speech is one of the most common reasons a recogniser invents words.",
        "Cleanup should be conservative. High-pass filtering can remove rumble, and a short fade can hide a click, but aggressive denoising often creates artefacts that sound worse than the original noise. For screen recordings, capture system audio on its own track when possible, so notification sounds do not sit on top of the voice. For course videos, keep microphone placement and gain consistent across lessons; consistent input makes the transcript easier to review and the captions easier to match.",
        "Listen to a thirty-second sample before running the whole file. If a section is unintelligible to you, it will be harder for a recogniser, so re-record or add it to a manual review list. Cleaning is not about making the audio sound polished; it is about giving the transcriber and the reviewer a clear signal."
      ]
    },
    {
      heading: "Subtitles for online courses: a course-specific pass",
      paragraphs: [
        "Course video adds constraints that a short interview does not have. Lessons repeat terminology, refer to slides and build on previous modules, so consistency matters as much as per-cue readability. Build a glossary before the first lesson: instructor names, software names, formulas, abbreviations and the exact spelling of every product feature. Apply it across the whole course instead of correcting each file in isolation.",
        "Treat on-screen slides as a separate channel. The caption should transcribe what the instructor says, not duplicate a bullet list the viewer can already read. When a slide contains essential text that is not spoken, add a description or make the slide available as a document; captions are not a substitute for an accessible handout. Equations, code and command lines need extra care because a single wrong character changes the meaning. Read those cues at half speed and compare them with the recording.",
        "Structure the review by module. Caption one lesson completely, check it in the learning management system or player, then use it as the template for the rest. Keep speaker labels consistent when several instructors or guests appear. If a lesson is re-recorded, version the subtitle file with the video instead of overwriting the old master, so a rollback does not require re-captioning. A course is a series, and series-level consistency is part of the quality."
      ]
    },
    {
      heading: "Caption quality control and player QA",
      paragraphs: [
        "Quality control has three layers: a structural check, a read-through, and a playback test. The structural check catches overlaps, empty cues, impossible timestamps and lines that exceed your limit. The read-through catches wrong words, awkward breaks, missing punctuation and speaker labels that do not match the picture. The playback test catches everything the file cannot tell you: a caption hidden behind a player control, a line that wraps differently on a phone, or a cue that arrives after the viewer has already heard the line.",
        "Run the structural pass with the [subtitle validator](/subtitle-validator), or open the file in the [SRT editor](/srt-editor) and inspect the cues directly. Compare characters per second against the [reading speed guide](/guides/subtitle-reading-speed) and line width against the [line length guide](/guides/subtitle-line-length). Then watch the whole programme once with sound, even if the file passed every automated check.",
        "For courses, test in the actual learning platform as well as a desktop player. Autoplay, muted autoplay and full-screen controls all change what the viewer sees. Check the first ten seconds, the densest explanation and the final summary. If the platform burns captions in or reflows them, test that rendering path too, because a clean sidecar file can still look wrong after a platform transformation."
      ]
    },
    {
      heading: "A subtitle delivery checklist and archive",
      paragraphs: [
        "A delivery is more than an SRT attachment. Confirm the language, variant, file format and naming convention the recipient expects. Check that the file is UTF-8, that the extension matches the content, and that cue numbers are sequential where the format requires them. Include the transcript if the client asked for one, and note whether the captions are same-language, translated or SDH.",
        "Keep a small project record with the source recording, the master subtitle file, any published copy, the glossary, the limits you used for reading speed and line length, and the date of the review. If you changed a name or a number after checking the audio, note the decision. A future editor should be able to tell why a cue reads the way it does without watching the entire recording again.",
        "Archive the version that was actually delivered, not only the working file. If the video is re-edited, the old subtitle file is the reference for what changed. A clear archive turns a one-off delivery into a process you can repeat, which is the point of a stable subtitle workflow."
      ]
    },
    {
      heading: "What changes when a course gets long",
      paragraphs: [
        "Long courses reward batch work and punish skipped review. Caption a representative lesson first, fix the template, and only then process the rest. Run the structural check across the whole batch, but keep a human read-through for every lesson, because names and slide references change from module to module.",
        "Spot-check the export at the start, middle and end of the course rather than only the first file. A player that handles lesson one correctly can still wrap a long line badly in lesson twelve. When the course is updated, re-caption only the changed lessons and keep the unchanged files versioned with their original video."
      ]
    }
  ],
  faqs: [
    {
      question: "What are the steps from recording to delivery?",
      answer:
        "Plan the destination and format, clean the audio, transcribe locally, correct names and numbers, segment by meaning, check characters per second and line length, validate the file, export it, test it in the target player, and archive the master. The order matters because review before timing reduces rework."
    },
    {
      question: "Why clean audio before transcription?",
      answer:
        "Speech recognition performs better when the voice is clear and the level is consistent. Removing hum, clicks and long silences helps, but aggressive denoising can damage consonants. Keep room tone and natural pauses, and re-record sections that are unintelligible to a human listener."
    },
    {
      question: "Should I transcribe in the browser or upload the file?",
      answer:
        "Browser transcription keeps the recording on your device and is a good default for private or client material. Uploading to a service can add features but changes who holds the file. Choose deliberately, and check the privacy terms of any tool before using it on confidential recordings."
    },
    {
      question: "How do I check caption quality before delivery?",
      answer:
        "Run a structural validation pass, read the transcript against the audio, and watch the exported file in the target player. Check names, numbers, speaker labels, line breaks, overlaps and reading speed. Finish with a full playback at normal speed rather than relying on a green checklist."
    },
    {
      question: "What is different about subtitles for online courses?",
      answer:
        "Courses need a shared glossary, consistent speaker labels and a review that accounts for slides, equations and code. Captions should transcribe speech rather than duplicate readable slide text. Version each lesson with its video so a re-record does not overwrite a working master."
    },
    {
      question: "Should I keep a transcript after exporting captions?",
      answer:
        "Yes. A transcript is easier to search, reuse in course notes and translate later. Keep it with the source audio, the master subtitle file and the glossary. A small archive record also preserves the reading-speed and line-length limits used for the delivery."
    }
  ],
  workedExample: {
    title: "Worked example: splitting a fast course cue",
    intro:
      "This excerpt is illustrative, not a benchmark or a platform requirement. The original cue ran from 00:01:12,000 to 00:01:16,000 and contained 90 characters, which is about 22.5 characters per second across four seconds. The revised file splits the thought and shortens the second line so the same speech sits at a more comfortable pace.",
    srt: `1
00:01:11,800 --> 00:01:14,000
The formula assumes a constant
rate of change.

2
00:01:14,200 --> 00:01:16,400
We test that assumption
in the next module.`,
    note: "The first revised cue is about 21 characters per second across 2.2 seconds; the second is about 20 across 2.2 seconds. The 200 ms gap makes the change visible without pushing either cue away from the voice. These figures are arithmetic on this example, not a recommendation for every course. Check your own limits and the destination player."
  },
  sources: [
    {
      label: "W3C WAI — Captions/Subtitles",
      url: "https://www.w3.org/WAI/media/av/captions/"
    },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    },
    {
      label: "OpenAI — Whisper on GitHub",
      url: "https://github.com/openai/whisper"
    }
  ],
  relatedGuides: [
    "subtitle-best-practices",
    "subtitle-timing-guidelines",
    "how-to-improve-whisper-accuracy",
    "is-browser-transcription-private"
  ],
  keywords: [
    { keyword: "captioning workflow", role: "primary" },
    { keyword: "captioning process", role: "secondary", headingLevel: 2 },
    { keyword: "audio preparation for captions", role: "secondary", headingLevel: 2 },
    { keyword: "subtitles for online courses", role: "secondary", headingLevel: 2 },
    { keyword: "caption quality control", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle delivery checklist", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle workflow", role: "synonym" },
    { keyword: "What are the steps from recording to delivery?", role: "faq" },
    { keyword: "How do I check caption quality before delivery?", role: "faq" }
  ]
};
