import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-add-subtitles-to-youtube-shorts",
  h1: "How to add subtitles to YouTube Shorts without breaking the vertical frame",
  title: "How to add subtitles to YouTube Shorts (SRT and Studio)",
  metaDescription:
    "How to add subtitles to YouTube Shorts with a clean SRT: generate cues, review timing, upload in YouTube Studio, and check safe areas on a phone.",
  primaryKeyword: "how to add subtitles to youtube shorts",
  capsule:
    "How to add subtitles to YouTube Shorts starts with a clean SRT, not with the upload button. Generate timed cues, shorten them for a vertical frame, review names and numbers, then attach the file in YouTube Studio. Keep text clear of the lower interface and right-side controls, and check the result on a phone.",
  published: "2026-02-02",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Caption formats",
      value: "SRT and WebVTT are both listed by YouTube; SRT must be plain UTF-8"
    },
    { label: "SRT styling", value: "YouTube does not recognise style markup in SRT files" },
    {
      label: "Studio path",
      value: "Subtitles > select the video > Add language > Add > Upload file"
    },
    { label: "Frame", value: "Vertical 9:16; test overlays on the phone your viewer will use" },
    { label: "Cue shape", value: "One or two short lines, usually one to four seconds" },
    { label: "Processing", value: "A new track can take time to appear on the watch page" }
  ],
  sections: [
    {
      heading: "Start with the caption track, not the on-screen text",
      paragraphs: [
        "On a Short, text can live in two different places. It can be a caption track attached to the video record, which a viewer can switch on or off, or it can be pixels burned into the picture. The first is a subtitle in the technical sense. The second is open text: it survives every player, but it cannot be disabled, translated or corrected without a new export. Knowing which one you are making prevents most of the confusion that follows.",
        "Captions also differ from the hook text that many creators place near the top of the frame. A hook is part of the creative treatment. A caption track carries the dialogue and meaningful sounds, follows the audio, and is the version that helps viewers watching without sound."
      ]
    },
    {
      heading: "Generate the SRT before you open Studio",
      paragraphs: [
        "VoiceToTextFree's [video to SRT](/video-to-srt) workflow extracts audio in the browser, transcribes it with Whisper, and produces numbered cues. For a Short, the source is usually a vertical MP4 or MOV between fifteen seconds and a minute, but the same workflow handles longer takes that you plan to cut down.",
        "Whisper returns sentence-level cues, which are too long for a fast vertical edit. Open the [SRT editor](/srt-editor), split at natural pauses, and shorten each cue so it can be read in one glance. Remove filler that adds nothing, but keep names, numbers and negations exactly as spoken. Export UTF-8 SRT. If you also need a web player copy, convert a duplicate rather than renaming the master file."
      ],
      steps: [
        "Choose the clip and the spoken language.",
        "Generate, then listen to the first thirty seconds against the waveform.",
        "Split cues longer than about two short lines.",
        "Fix names, numbers and punctuation.",
        "Export UTF-8 SRT and keep the project open for a second pass."
      ]
    },
    {
      heading: "Review timing at vertical-video speed",
      paragraphs: [
        "A Short often cuts faster than a horizontal tutorial. That does not mean every cue should be shorter than a second; it means the caption must change when the ear expects it to change. Start each cue a fraction after the first syllable rather than before it, and end it when the phrase finishes, not when the next scene begins. A small gap between cues makes the change visible without pushing text away from the voice.",
        "Read the file at normal speed, then at half speed. The second pass exposes cues that arrive late or linger over a cut. If a line is impossible to read in the time available, shorten the text before stretching the duration. A caption that remains on screen after the speaker has moved on feels more wrong than a caption that leaves a little early. Use the [reading speed checker](/subtitle-reading-speed-checker) as a second opinion, not as a substitute for watching the clip."
      ]
    },
    {
      heading: "Upload SRT to YouTube: the Studio path",
      paragraphs: [
        "The documented route is YouTube Studio, not the Shorts camera. Sign in, open the left-hand menu, and choose Subtitles. Select the video that corresponds to the Short, click ADD LANGUAGE, choose the language, then click ADD under Subtitles and choose Upload file. Pick With timing, select the SRT, and save. The same page also accepts a transcript without timing, but that path asks YouTube to align the text, which is a different operation.",
        "Two details matter. First, YouTube's help page says SRT files must be plain UTF-8 and that style markup is not recognised, so bold tags or positioning coordinates will either be ignored or appear as literal text. Second, a newly uploaded track is not always visible instantly. Wait for processing, then reload the watch page rather than assuming the upload failed."
      ],
      steps: [
        "Open YouTube Studio and select Subtitles.",
        "Find the Short in the video list.",
        "Add the language, then choose Add > Upload file.",
        "Choose With timing and upload the SRT.",
        "Save, wait for processing, and review on the watch page."
      ]
    },
    {
      heading: "YouTube Shorts subtitle requirements and the limits of the help page",
      paragraphs: [
        "YouTube publishes one list of supported caption formats rather than a separate list for Shorts. The page names SubRip (.srt) and WebVTT (.vtt), among others, and describes SRT as a basic format with no style markup and a UTF-8 requirement. It describes WebVTT as an initial implementation with positioning support but limited styling. That is the requirement to design against: a clean text file with valid timestamps, saved as UTF-8.",
        "The help page does not describe a distinct caption uploader inside the Shorts creation flow. Treat a Short as a video in Studio: if it appears in the Subtitles list, attach the track there. If a Short created in a different surface does not appear, or the menu differs by account, check the current help page before promising a client that a file will attach."
      ]
    },
    {
      heading: "Captions versus burned-in text on a vertical frame",
      paragraphs: [
        "A caption track is the flexible option. It can be switched off, translated later, and updated without re-encoding the video. It also respects the viewer's caption settings. The trade-off is that it depends on the player and on the track being processed correctly. On a phone, the viewer may need to open the player menu to enable it, and a track that is present but not selected can look like a missing file.",
        "Burned-in text is the reliable option for a specific look: large centred words, colour changes, or text that must sit inside a particular safe area. The cost is permanence. Every typo means a new export, and viewers who do not want captions cannot remove them. Many Shorts use a hybrid: a clean caption track for accessibility and a lightly styled burned-in version for the hook. If you choose the hybrid, keep the two versions consistent so the viewer does not read two different scripts. The [burn-in guide](/guides/how-to-burn-subtitles-into-video) covers the export side."
      ]
    },
    {
      heading: "Safe areas, line length and the phone check",
      paragraphs: [
        "A vertical frame gives you height but not much width. Keep captions inside the central band and away from the lower interface, where the title, channel name and progress controls sit, and away from the right edge, where the action buttons stack. The exact overlay changes with the app version and device, so the only dependable test is to watch the published or preview version on a phone.",
        "Two short lines are usually safer than one long line. Break at a phrase boundary, not in the middle of a name, and avoid stacking a caption directly under a large hook. Contrast matters more on a busy vertical background than on a desktop monitor: a white caption over a bright sky can disappear even when the file is correct. If the player allows styling, keep it simple; if it does not, solve contrast in the video or accept the default caption look.",
        "The [subtitle line length](/guides/subtitle-line-length) guidance is written for general video, so treat its limits as a ceiling rather than a target. On a phone, the comfortable amount of text is often lower."
      ]
    },
    {
      heading: "When a Short shows no captions: failure reasons",
      paragraphs: [
        "Work through the failure in the order the data travels. First confirm the track exists in Studio and is published for the right language. Then check the file itself: a byte-order mark, a comma instead of a dot in a VTT copy, missing blank lines, or a non-UTF-8 save can all produce a track that looks uploaded but renders nothing. Our guide to [subtitles not showing](/guides/srt-not-working-subtitles-not-showing) walks through the same checks at file level.",
        "Next, separate a file problem from a player problem. Open the watch page in a private window, turn captions on explicitly, and try a second device. If the captions appear on desktop but not on mobile, the track is probably fine and the issue is the app's caption setting or a cached version. If they appear in the wrong place or with stray tags, the file contains markup that YouTube does not honour. Re-export plain text rather than editing the tags by hand."
      ],
      bullets: [
        "Track missing from Studio: wrong video, wrong language, or processing delay.",
        "Track present but empty: encoding, blank lines, or malformed timestamps.",
        "Text visible as code: markup or a renamed file with the wrong syntax.",
        "Captions on desktop only: app caption setting or a cached version.",
        "Captions cover the interface: adjust the burned-in version, not the SRT."
      ]
    },
    {
      heading: "Publish, then verify like a viewer",
      paragraphs: [
        "After the track is live, watch the Short from the beginning with sound off. Check the first three seconds, the fastest exchange, and the final call to action. Catch the moment when a caption sits under the channel name or changes a beat after the cut.",
        "Keep the SRT master alongside the project. If you later publish a horizontal cut, the same cues can be re-timed rather than re-transcribed, and a translator can work from the text instead of the audio. For a broader workflow, see the [captioning workflow](/guides/subtitle-and-captioning-workflow) and the [subtitle timing guidelines](/guides/subtitle-timing-guidelines). If you need to regenerate the file, start from the [VoiceToTextFree home page](/). The upload is the last mile, not the whole job."
      ]
    }
  ],
  faqs: [
    {
      question: "What subtitle format works on YouTube?",
      answer:
        "YouTube's help page lists SubRip (.srt) and WebVTT (.vtt), along with several other formats. SRT must be plain UTF-8 and is treated as a basic format without style markup. Check the current supported-formats page before a large delivery, because the list and implementation notes can change."
    },
    {
      question: "Does YouTube accept VTT files?",
      answer:
        "Yes. YouTube's supported-formats page lists WebVTT with the .vtt extension and describes it as an initial implementation. Positioning is supported, but styling is limited to simple tags such as bold, italic and underline. If exact styling matters, test the uploaded result rather than assuming the file will look the same in the player."
    },
    {
      question: "What is the best subtitle format for YouTube?",
      answer:
        "There is no single best format for every job. SRT is the safer default when you want a simple, portable file and do not need positioning. WebVTT is the better choice when a web player needs cue settings, provided you accept that YouTube may ignore most styling. Keep an SRT master and generate a VTT copy only when the destination needs it."
    },
    {
      question: "Do YouTube Shorts support captions?",
      answer:
        "Shorts are videos in YouTube Studio, and captions are attached through the Subtitles workflow rather than a separate Shorts caption menu. If the Short does not appear in that list, or your Studio menu differs, check YouTube's current help page. Burned-in text remains an alternative when a track cannot be attached."
    },
    {
      question: "Why are my Shorts captions out of sync?",
      answer:
        "A constant offset usually means the whole file started at the wrong point, while growing drift points to a frame-rate mismatch or an edit made after transcription. Compare the first, middle and last cue against the audio before changing anything. The [subtitle sync guide](/guides/how-to-sync-subtitles) explains offset and stretch corrections."
    },
    {
      question: "Can I add captions to a Short after publishing?",
      answer:
        "Yes. Open the video in YouTube Studio, go to Subtitles, and add or replace the track for the relevant language. Processing can take a few minutes, so reload the watch page before concluding that the upload failed. If the platform changes the menu, follow the current help page rather than an old tutorial."
    }
  ],
  workedExample: {
    title: "A vertical SRT for a twenty-eight second product Short",
    intro:
      "This clip runs at 25 frames per second. The cues are deliberately short, use one or two lines, and leave a small gap at each change so the caption does not sit under the interface for the whole shot.",
    srt: `1
00:00:00,600 --> 00:00:02,900
The latch is on the left.

2
00:00:03,100 --> 00:00:05,800
Lift the handle, then pull.

3
00:00:06,000 --> 00:00:09,200
It folds flat in two seconds.

4
00:00:09,400 --> 00:00:12,000
No tools needed.`,
    note: "Keep this text inside the central band. Cue three is the one most likely to collide with the channel name on a phone, so check it on the device before publishing."
  },
  sources: [
    {
      label: "YouTube Help — Supported subtitle and closed caption files",
      url: "https://support.google.com/youtube/answer/2734698"
    },
    {
      label: "YouTube Help — Add subtitles and captions",
      url: "https://support.google.com/youtube/answer/2734796"
    },
    {
      label: "YouTube Help — Use automatic captioning",
      url: "https://support.google.com/youtube/answer/6373554"
    }
  ],
  relatedGuides: [
    "how-to-sync-subtitles",
    "srt-vs-vtt",
    "how-to-burn-subtitles-into-video",
    "subtitle-best-practices"
  ],
  keywords: [
    { keyword: "how to add subtitles to youtube shorts", role: "primary" },
    { keyword: "upload srt to youtube", role: "secondary", headingLevel: 2 },
    { keyword: "youtube shorts subtitle requirements", role: "secondary", headingLevel: 2 },
    { keyword: "what subtitle format works on youtube", role: "faq" },
    { keyword: "does youtube accept vtt files", role: "faq" },
    { keyword: "what is the best subtitle format for youtube", role: "faq" },
    { keyword: "shorts captions", role: "synonym" }
  ]
};
