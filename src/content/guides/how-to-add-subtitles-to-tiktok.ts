import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-add-subtitles-to-tiktok",
  h1: "How to add subtitles to TikTok: in-app text, auto captions or burn-in",
  title: "How to add subtitles to TikTok (in-app, SRT and burn-in)",
  metaDescription:
    "How to add subtitles to TikTok with in-app text, automatic captions where available, or a burned-in SRT. Covers safe areas, short cue timing and phone checks.",
  primaryKeyword: "how to add subtitles to tiktok",
  capsule:
    "How to add subtitles to TikTok depends on what your app exposes. You can type text in the editor, use automatic captions where they are available, or burn a prepared SRT into the video. TikTok's help pages we checked do not document a sidecar upload for a standard post, so verify the current tools and test on a phone.",
  published: "2026-02-02",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Documented route",
      value: "In-app text and caption tools; availability varies by account and region"
    },
    { label: "SRT upload", value: "Not documented on the TikTok help pages we checked" },
    { label: "Frame", value: "Vertical 9:16; preview with the app interface visible" },
    { label: "Cue shape", value: "One or two short lines, often one to three seconds" },
    {
      label: "Safe area",
      value: "Central band; avoid the bottom text block and right-side buttons"
    },
    { label: "Review", value: "Auto-generated text needs a pass for names, numbers and negations" }
  ],
  sections: [
    {
      heading: "Decide what a subtitle means inside TikTok",
      paragraphs: [
        "TikTok's editor is built for speed, and its text tools reflect that. You can add a text layer, style it, and time it on the timeline; some app versions also offer automatic captions. A text layer is not the same as a subtitle track. It is a design object placed over the video, usually burned into the exported file, and it does not give the viewer a separate caption control. That distinction matters when a client asks for subtitles and expects something a viewer can switch off.",
        "For most TikTok posts, the practical choice is between an in-app text layer and a burn-in from an external editor. A sidecar SRT is useful upstream: it carries the timing and wording into the editor, and it can be translated or reviewed. It is not a delivery format that TikTok documents for an ordinary post. Build the SRT as the master, then choose how the words reach the viewer."
      ]
    },
    {
      heading: "TikTok subtitle requirements: what is actually documented",
      paragraphs: [
        "TikTok's help centre describes adding text and captions in the video editor, but the pages we checked do not publish a file-format specification for caption uploads on standard posts. That is different from YouTube, which lists SRT, WebVTT and other caption formats. The absence of a public spec is not proof that no import path exists anywhere; it means you should not promise a client that an SRT will attach, and you should check the current help page and your own app before building a workflow around it.",
        "The safer reading is that the in-app tools are the documented route and that availability can vary by region, app version and account. Automatic captions, in particular, are a feature that may appear for one creator and not another. Build the text so it works as a burn-in if the in-app route is unavailable. That way the post still ships, and the SRT remains useful for the next platform."
      ]
    },
    {
      heading: "In-app captions versus an SRT versus a burn-in",
      paragraphs: [
        "An in-app text layer is fast and native. It inherits the app's fonts and animations, sits in the editor where you can nudge it, and exports with the video. The cost is control: precise timing, line breaks and consistent styling across a series are harder than in a desktop editor, and a long caption may need to be split by hand. Auto-generated text also needs a review pass for names, numbers and slang.",
        "An SRT plus a burn-in gives you repeatable typography and timing. You can review the cues in a timeline, apply one style to the whole track, and export a clean master. The trade-off is an extra app and an extra encode, but for a series the SRT is the better investment because the tenth video costs less than the first."
      ]
    },
    {
      heading: "Generate short-cue SRT text before you open the editor",
      paragraphs: [
        "Generate the transcript with [video to SRT](/video-to-srt), then open it in the [SRT editor](/srt-editor) and shorten every cue. TikTok viewers are often reading while the edit is already moving, so a cue that contains a full sentence with two clauses will either be rushed or linger over the next shot. Split at the clause, keep the key word early, and remove repeated filler that the ear does not need.",
        "Do not translate the platform's pace into a rule that every cue must be under one second. A short exclamation can be readable in 800 ms, while a product name with a number may need two seconds even after trimming. The test is whether you can read the line once, comfortably, while watching the clip. If you have to read it twice, it is too long or too slow."
      ],
      steps: [
        "Generate the transcript and listen to the opening three seconds.",
        "Split sentences at clause boundaries, not at scene cuts.",
        "Shorten each cue to one or two short lines.",
        "Check names, products, numbers and negations.",
        "Export UTF-8 SRT and keep the master for the next cut."
      ]
    },
    {
      heading: "Safe area and framing for a vertical TikTok",
      paragraphs: [
        "The TikTok interface covers the bottom of the frame with the username, caption and sound line, and the right edge with the action buttons. Those overlays move as the app changes, so treat any pixel measurement as temporary. The durable rule is to keep the words in the central band, leave a margin from the right edge, and keep the lowest line above the area where the app's own text sits.",
        "Vertical framing also changes what centred means. A caption centred in the video file can look low once the interface is drawn over it, and a caption placed high can collide with a title or a creator's face. Preview the composition with the app's overlays visible, not only in the editor's clean viewer. The [subtitle line length](/guides/subtitle-line-length) habits that work for other vertical platforms are a useful starting point, but this app's layout is the final check."
      ],
      bullets: [
        "Keep the caption block in the central band.",
        "Leave the bottom area clear for the username, caption and sound line.",
        "Leave the right edge clear for the action buttons.",
        "Test the longest product name, not the shortest word.",
        "Preview with the interface visible, not only in a clean viewer."
      ]
    },
    {
      heading: "Cue timing for fast speech and hard cuts",
      paragraphs: [
        "Fast speech is not the same as fast reading. A creator may deliver a sentence in two seconds, but the viewer still needs time to parse the words, especially if the sentence contains a name or a number. Start the cue on the stressed syllable, end it after the thought, and avoid changing the text in the middle of a gesture that the viewer is following. A hard cut is a natural place for a cue change; a cut in the middle of a word is not.",
        "When two speakers overlap, do not stack two full captions in the same position. Either combine the exchange into one cue with clear labels, or split the screen position deliberately and keep it consistent. If the overlap is brief, a single cue that captures the meaningful line is often better than two cues fighting for the same space. Check the result at normal speed, not frame by frame."
      ]
    },
    {
      heading: "Editing auto-generated text without losing the beat",
      paragraphs: [
        "Automatic captions are a draft. Read them once with the sound on and once with the sound off. The first pass catches words the recogniser misheard; the second catches lines that are technically correct but split in a way that makes the sentence hard to follow. Pay particular attention to product names, handles, numbers, and negations such as not and never, because those change the meaning of the post.",
        "If the app lets you edit the generated text, make the correction in the smallest unit possible rather than retyping the whole block. If it does not, export the video and caption it in an editor where you can control the cues. Keep a note of the corrections in the SRT so the next post with the same vocabulary starts from a better transcript."
      ]
    },
    {
      heading: "Export and upload: keeping the text readable",
      paragraphs: [
        "Export the highest-quality master you can, then create the captioned version from that master. A caption burned into an already compressed file inherits the compression, and small text suffers first. Keep the caption style simple: one weight, one colour, a readable outline or background, and a size that survives a phone screen at arm's length. Test the busiest frame, not a clean title card.",
        "If you are uploading a file with burned-in text, watch the uploaded result rather than the local preview. The app may re-encode the video, and that can soften edges or shift the apparent size of the text. If the result is hard to read, fix the source and upload again rather than adding a second text layer on top. The [burn-in guide](/guides/how-to-burn-subtitles-into-video) covers the export settings that keep small type intact."
      ]
    },
    {
      heading: "Common failures and a final phone check",
      paragraphs: [
        "Start with the track or layer you can verify. If the words are missing, check whether the text layer was actually included in the exported file, whether the caption tool was available for that account, and whether the viewer has captions turned off. A burned-in caption that disappears is usually an export or layering problem, not a platform bug. Our guide to [subtitles not showing](/guides/srt-not-working-subtitles-not-showing) covers the file-level checks.",
        "Finally, watch the post on a phone with the sound off, then with the sound on. Check the first second, the fastest exchange, and the loop point. The [VoiceToTextFree home page](/) has the generator and editor if you need to rebuild the text, and the [captioning workflow](/guides/subtitle-and-captioning-workflow) is useful when the TikTok post is one part of a larger release."
      ],
      bullets: [
        "The text is visible in the exported file, not only in the preview.",
        "The caption tool or auto-caption feature was available for the account.",
        "The viewer's caption setting is not hiding a track.",
        "The lowest line clears the username and caption block.",
        "The loop point does not cut off the final cue."
      ]
    }
  ],
  faqs: [
    {
      question: "What subtitle format works on TikTok?",
      answer:
        "TikTok's help pages we checked describe in-app text and caption tools rather than a caption-file format for standard posts. A burned-in export therefore works everywhere the video plays. If an SRT import appears in your app version, treat it as an optional path and verify it before relying on it."
    },
    {
      question: "Does TikTok accept SRT files?",
      answer:
        "We found no documented SRT sidecar upload for a standard TikTok post on the help pages we checked. The practical route is to use the in-app caption tools where available or burn the SRT into the video. If your app shows an import option, check the current help page and test it on a draft before a client delivery."
    },
    {
      question: "What is the best subtitle format for TikTok?",
      answer:
        "For a platform that plays the words as part of the video, a burned-in caption is the most predictable delivery. Keep the SRT as the editable master so the text can be re-timed, translated or reused. If TikTok's in-app captions are available to your account, they are the faster route for a single post."
    },
    {
      question: "Why are my TikTok captions not showing?",
      answer:
        "If the captions were burned in, check the exported file before blaming the app; a layer that is hidden or outside the safe area will not appear. If they were generated in-app, the feature may not be available for the account or the viewer may have captions turned off. Test the draft on a second phone."
    },
    {
      question: "Can I edit captions after posting?",
      answer:
        "TikTok's editing and caption controls change with the app version, and the help pages we checked do not promise a full post-publish caption editor. For a correction that must be exact, keep the master and repost rather than relying on an in-place fix. Check the current help page for the latest options."
    },
    {
      question: "How long should each TikTok caption stay on screen?",
      answer:
        "Long enough to read once comfortably, not so long that it covers the next shot. Short exclamations may work under a second, while a name or number may need two seconds or more. Read the cue at normal speed and shorten the text before stretching the duration."
    }
  ],
  workedExample: {
    title: "A four-cue SRT for a fast vertical demo",
    intro:
      "This clip runs at 30 frames per second and is framed for a phone. The cues are short, the gaps are deliberate, and the text is kept out of the lower interface.",
    srt: `1
00:00:00,400 --> 00:00:02,600
This is the new latch.

2
00:00:02,800 --> 00:00:05,400
Pull it once, then lift.

3
00:00:05,600 --> 00:00:08,900
The stand folds flat.

4
00:00:09,100 --> 00:00:11,800
No tools needed.`,
    note: "Cue two is the fastest line in the clip. If it feels rushed on a phone, shorten the wording before adding time; a longer cue that overlaps the next action will feel later than it is."
  },
  sources: [
    {
      label: "TikTok Support — Creating videos: captions",
      url: "https://support.tiktok.com/en/using-tiktok/creating-videos/captions"
    },
    {
      label: "TikTok Support — Editing TikTok videos and photos",
      url: "https://support.tiktok.com/en/using-tiktok/creating-videos/editing-tiktok-videos-and-photos"
    },
    {
      label: "OpenAI Whisper repository",
      url: "https://github.com/openai/whisper"
    }
  ],
  relatedGuides: [
    "how-to-burn-subtitles-into-video",
    "how-to-sync-subtitles",
    "subtitle-best-practices",
    "subtitle-timing-guidelines"
  ],
  keywords: [
    { keyword: "how to add subtitles to tiktok", role: "primary" },
    { keyword: "tiktok subtitle requirements", role: "secondary", headingLevel: 2 },
    { keyword: "what subtitle format works on tiktok", role: "faq" },
    { keyword: "does tiktok accept srt files", role: "faq" },
    { keyword: "what is the best subtitle format for tiktok", role: "faq" },
    { keyword: "tiktok captions", role: "synonym" }
  ]
};
