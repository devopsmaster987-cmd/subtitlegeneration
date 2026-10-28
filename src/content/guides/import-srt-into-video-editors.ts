import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/import-srt-into-video-editors",
  h1: "SRT for Premiere Pro: import SRT into video editors without drift",
  title: "SRT for Premiere Pro: import SRT into video editors (verified steps)",
  metaDescription:
    "SRT for Premiere Pro: import SRT into video editors with verified steps for Premiere Pro, DaVinci Resolve, Final Cut Pro and CapCut.",
  primaryKeyword: "srt for premiere pro",
  capsule:
    "SRT for Premiere Pro is one import among four. To import SRT into video editors, start with a UTF-8 file, check the frame rate, and use each editor's caption or subtitle track. Premiere Pro accepts an SRT as media; Resolve, Final Cut Pro and CapCut have their own import paths. Verify the menu on your version.",
  published: "2026-02-02",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 10,
  keyFacts: [
    {
      label: "Premiere Pro",
      value: "Import the SRT like media; drag it into the sequence to create a caption track"
    },
    {
      label: "DaVinci Resolve",
      value:
        "File > Import > Subtitle after selecting the Subtitles bin; SRT, VTT, TTML and DFXP are supported"
    },
    {
      label: "Final Cut Pro",
      value: "File > Import > Closed Captions; choose a role, language and insertion time"
    },
    { label: "CapCut desktop", value: "Captions > Add Captions; choose an SRT or TXT file" },
    { label: "CapCut web", value: "Captions tab; SRT only, with TXT not supported on web" },
    { label: "Common failure", value: "Offset or frame-rate drift, not a corrupt SRT" }
  ],
  sections: [
    {
      heading: "What a clean import requires",
      paragraphs: [
        "An SRT is an interchange file, not a finished caption design. It carries cue numbers, start and end times, and text. It does not carry a reliable font, position or animation, even when a tool writes unofficial markup into the file. Every editor below reads the timing and the words, then creates its own caption or subtitle object. That object is what you style, move and export.",
        "The practical consequence is that a clean import depends on the file being boring. Valid timestamps, sequential numbers, UTF-8 text, and no tags that the editor will print literally. If the import produces one long cue, a blank timeline, or text that includes the numbers, the problem is usually in the file rather than in the editor."
      ]
    },
    {
      heading: "Prepare the SRT: timing, encoding and naming",
      paragraphs: [
        "Start with a transcript from [video to SRT](/video-to-srt), then open the [SRT editor](/srt-editor). Keep each cue to one or two lines and split at natural pauses. A cue that runs for eight seconds across three sentences will import, but it will be painful to style and impossible to sync after a cut.",
        "Save as UTF-8, with comma-separated milliseconds and a blank line between cues. Remove bold or italic tags unless you know the target editor honours them, because a tag can appear as literal characters in a caption track. Name the file after the sequence and version, not after the source camera. If you work at 23.976, 24, 25 or 29.97 fps, note the rate beside the file; you will need it when the import asks how to interpret the timecodes."
      ],
      bullets: [
        "UTF-8, without a byte-order mark.",
        "Sequential cue numbers with no gaps.",
        "The 00:00:01,250 --> 00:00:03,500 timestamp shape.",
        "A blank line between every cue.",
        "No styling tags unless the editor documents support."
      ]
    },
    {
      heading: "Premiere Pro: drag the SRT into the sequence",
      paragraphs: [
        "Adobe's help page describes the import as a media operation. Import the SRT into the project, then drag it from the Project panel into the sequence and drop it anywhere. Premiere creates a new caption track and places the captions on it.",
        "It also means the SRT appears in the Project panel like any other asset, so a missing file is often a case of looking in the wrong bin. If the drag does not create a track, check that the file is a valid SRT and that the sequence is active. The current help page is the authority for the exact panel names."
      ],
      steps: [
        "Import the SRT into the project.",
        "Open the sequence in the Timeline.",
        "Drag the SRT from the Project panel into the sequence.",
        "Confirm that a new caption track appears.",
        "Edit wording and timing in the Text panel."
      ]
    },
    {
      heading: "SRT for DaVinci Resolve",
      paragraphs: [
        "Blackmagic's editor guide lists .srt, .vtt, .ttml (IMSC1) and .dfxp as supported subtitle formats. The documented route is to select the Subtitles bin in the Media Pool, choose File > Import > Subtitle, and open the file. Drag it into the timeline above the existing subtitle track to create a new subtitle track, then enable that track so it is visible.",
        "Styling lives in the Inspector. Select a subtitle and open the Track tab to change the look of the whole subtitle track, or use the individual controls when one cue needs an exception. Subtitle regions are a separate feature and are supported only by .ttml and .dfxp files, so do not expect an SRT to carry region styling. The editor guide is the reference for the current menu labels."
      ],
      steps: [
        "Select the Subtitles bin in the Media Pool.",
        "Choose File > Import > Subtitle and open the SRT.",
        "Drag the imported file into the timeline above the existing subtitle track.",
        "Enable the new subtitle track.",
        "Adjust the track style in the Inspector's Track tab."
      ]
    },
    {
      heading: "SRT for Final Cut Pro",
      paragraphs: [
        "Apple's guide says Final Cut Pro can import CEA-608, iTT and SRT closed caption files directly. Choose File > Import > Closed Captions, select the .srt file, then choose a closed caption role and a language subrole. In the Insertion Time section, choose whether the captions are positioned relative to the timeline or absolutely at their own timecodes.",
        "Assign a caption role and the correct language so the track is identifiable in the timeline and in delivery. If the captions land at the wrong point, revisit the insertion-time choice before moving every cue by hand. The import is time-based, so the project frame rate and the SRT's intended rate should agree."
      ],
      steps: [
        "Open the project and place the playhead where the captions should begin.",
        "Choose File > Import > Closed Captions.",
        "Select the .srt file.",
        "Choose the caption role and language subrole.",
        "Choose relative or absolute insertion time, then import."
      ]
    },
    {
      heading: "SRT for CapCut",
      paragraphs: [
        "CapCut's help page separates the desktop and web workflows. On desktop, open the project, go to Captions > Add Captions, and select an .srt or .txt file. On the web editor, open the captions tab on the left toolbar and upload an .srt; the page says TXT files are not supported on web. The same page states that the mobile app does not support direct subtitle import, so an SRT workflow on mobile needs a different route.",
        "Import the file before you spend time styling. If the cues appear but the text is garbled, check the encoding; the help page recommends UTF-8 for special characters. If the cues do not appear at all, confirm that the file is an SRT and that you are in the captions tool rather than a text layer. Menu labels can change between builds, so compare against the current help page."
      ],
      steps: [
        "Open the project in CapCut desktop or the web editor.",
        "On desktop, choose Captions > Add Captions; on web, open the captions tab.",
        "Select the SRT file and wait for the cues to load.",
        "Check the first and last cue before styling.",
        "Keep the SRT as the master if you plan another cut."
      ]
    },
    {
      heading: "Offset, frame rate and drift after import",
      paragraphs: [
        "After import, play the first, middle and last cue. A constant offset means every cue is early or late by the same amount; fix it by shifting the whole track. Growing drift means the error increases toward the end, which points to a frame-rate mismatch or a speed change in the edit.",
        "Check the project frame rate and the rate the SRT was timed for. A file prepared for 25 fps played in a 23.976 fps timeline will drift, and a speed-ramped clip will break the relationship between timecode and real time even when both rates match. The [subtitle sync guide](/guides/how-to-sync-subtitles) explains offset, stretch and the checks that separate the two. Apply the smallest correction that fixes the last cue without pushing the first one out."
      ]
    },
    {
      heading: "Style the captions without breaking the export",
      paragraphs: [
        "Style at the track level first. A consistent font, size, colour and background is easier to read and easier to change than a hundred individual overrides. In Resolve, the Track tab controls the whole subtitle track. In Premiere, the Text panel and the caption track's properties control the look. Final Cut Pro exposes caption styling in the inspector, and CapCut applies text styles to the caption layer.",
        "Keep the captions inside the safe area for the destination. A style that looks elegant on a monitor can sit under a phone's interface, and a thin font can disappear over a bright scene. If the SRT contained styling tags, remove them before import; the editor's style is what survives export."
      ]
    },
    {
      heading: "Export: sidecar or burned-in",
      paragraphs: [
        "Decide whether the destination wants a separate subtitle file or open captions. A sidecar SRT is the right choice for a platform that accepts caption uploads, for an archive, and for a client who may need to edit the text. Burned-in captions are the right choice for a social post, a player that ignores sidecars, or a look that must be identical everywhere. The [burn-in guide](/guides/how-to-burn-subtitles-into-video) covers the export settings.",
        "Keep the SRT master even after a burn-in. The master is what you re-time for a different cut, translate for another language, or hand to an accessibility reviewer. If you export a sidecar, check that the editor writes UTF-8 and that the cue count matches the timeline."
      ]
    },
    {
      heading: "A four-editor checklist",
      paragraphs: [
        "Before delivery, run four checks per editor. First, the file imports without error and the cue count matches. Second, the first and last cues land on the right words. Third, the track style is readable on the target screen. Fourth, the export is a valid sidecar or visible open captions.",
        "Keep the project, the SRT and the exported file together. If you need to rebuild the text, start from the [VoiceToTextFree home page](/) and generate a fresh file with [video to SRT](/video-to-srt), then clean it in the [SRT editor](/srt-editor). The import step is repeatable once the file is boring and the frame rate is known."
      ],
      bullets: [
        "Import succeeds and the cue count matches the timeline.",
        "The first, middle and last cues are in sync.",
        "Track-level style is readable on the target screen.",
        "The export is a UTF-8 sidecar or a verified burn-in.",
        "Master, project and export are stored together."
      ]
    }
  ],
  faqs: [
    {
      question: "Can I import an SRT into Premiere Pro?",
      answer:
        "Yes. Adobe's help page says to import the SRT like any media file, then drag it from the Project panel into the sequence, where Premiere creates a caption track. Edit the text in the Text panel. Check the current help page for the exact panel names in your version."
    },
    {
      question: "Does DaVinci Resolve support SRT files?",
      answer:
        "Yes. Blackmagic's editor guide lists .srt, .vtt, .ttml and .dfxp as supported subtitle formats. Select the Subtitles bin, choose File > Import > Subtitle, then drag the file onto the timeline and enable the new subtitle track. Style it from the Inspector."
    },
    {
      question: "Can Final Cut Pro import SRT captions?",
      answer:
        "Yes. Choose File > Import > Closed Captions, select the .srt file, choose a caption role and language, and set the insertion time. The captions appear on a caption track in the timeline. The menu wording can change, so verify it on your version."
    },
    {
      question: "How do I import subtitles into CapCut?",
      answer:
        "On desktop, use Captions > Add Captions and choose an SRT or TXT file. In the web editor, use the captions tab and upload an SRT; the help page says TXT is not supported there. The mobile app does not support direct subtitle import according to the same page."
    },
    {
      question: "Why are my imported subtitles out of sync?",
      answer:
        "A constant offset means the whole track is early or late; growing drift usually means a frame-rate mismatch or a speed change. Compare the first, middle and last cues before editing individual timestamps. Use an offset or stretch correction rather than retyping the text."
    },
    {
      question: "Do video editors keep SRT styling?",
      answer:
        "Usually not. SRT has no reliable styling model, and most editors create their own caption objects from the text and timing. Apply the look in the editor's caption or subtitle controls. If you need a specific appearance in the delivered video, burn it in."
    }
  ],
  workedExample: {
    title: "A four-cue SRT checked in a 25 fps sequence",
    intro:
      "This file runs at 25 frames per second and uses short cues that survive an import into any of the four editors. The gaps make an offset easier to spot when you compare the first and last lines.",
    srt: `1
00:00:01,000 --> 00:00:03,400
The first cut was four minutes.

2
00:00:03,700 --> 00:00:06,500
Then the intro came out.

3
00:00:06,800 --> 00:00:09,600
The pacing improved immediately.

4
00:00:09,900 --> 00:00:12,300
That was the whole change.`,
    note: "If the last cue lands late but the first one is correct, treat it as drift rather than a bad cue. Check the sequence frame rate before moving individual timestamps."
  },
  sources: [
    {
      label: "Adobe Help — Import caption file from a third-party service in Premiere Pro",
      url: "https://helpx.adobe.com/premiere/desktop/add-text-images/insert-captions/import-caption-file-from-third-party-service.html"
    },
    {
      label: "Blackmagic Design — DaVinci Resolve 20 Editors Guide (PDF, Importing Subtitles)",
      url: "https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Editors-Guide.pdf"
    },
    {
      label: "Apple Support — Import closed captions into Final Cut Pro for Mac",
      url: "https://support.apple.com/guide/final-cut-pro/import-closed-captions-ver4185ef95a/mac"
    },
    {
      label: "CapCut Help — How do I import subtitles?",
      url: "https://www.capcut.com/help/how-to-import-subtitles"
    }
  ],
  relatedGuides: [
    "how-to-sync-subtitles",
    "how-to-burn-subtitles-into-video",
    "what-is-an-srt-file",
    "srt-not-working-subtitles-not-showing"
  ],
  keywords: [
    { keyword: "srt for premiere pro", role: "primary" },
    { keyword: "srt for davinci resolve", role: "secondary", headingLevel: 2 },
    { keyword: "srt for final cut pro", role: "secondary", headingLevel: 2 },
    { keyword: "srt for capcut", role: "secondary", headingLevel: 2 },
    { keyword: "can i import an srt into premiere pro", role: "faq" },
    { keyword: "does davinci resolve support srt files", role: "faq" },
    { keyword: "how do i import subtitles into capcut", role: "faq" }
  ]
};
