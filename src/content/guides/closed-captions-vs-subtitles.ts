import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/closed-captions-vs-subtitles",
  h1: "Closed captions vs subtitles: what each term means",
  title: "Closed captions vs subtitles: what each term means",
  metaDescription:
    "Closed captions vs subtitles explained: definitions, SDH, translation, open and closed captions, burned-in versus sidecar files, platform behavior and WCAG context.",
  primaryKeyword: "closed captions vs subtitles",
  capsule:
    "Closed captions vs subtitles is partly terminology and partly workflow. Captions usually carry dialogue plus speaker IDs and meaningful sounds for viewers who cannot hear the audio. Subtitles often translate dialogue for viewers who can hear but do not understand the language. Open captions are burned in; closed captions can be switched off. Choose by audience, platform and format.",
  published: "2026-01-27",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    { label: "Captions", value: "Dialogue plus speaker IDs and meaningful non-speech audio" },
    {
      label: "Subtitles",
      value: "Often a translation of dialogue for viewers who can hear the audio"
    },
    { label: "Open captions", value: "Rendered into the picture and cannot be switched off" },
    { label: "Closed captions", value: "A separate track the viewer can turn on or off" },
    {
      label: "SDH",
      value: "Same-language captions with sound information for Deaf and hard-of-hearing viewers"
    },
    { label: "Web format", value: "WebVTT is the usual caption format for HTML5 video" }
  ],
  sections: [
    {
      heading: "The short answer: related files, different jobs",
      paragraphs: [
        "The two terms overlap in everyday use, which is why the question keeps returning. In a broad sense, both put synchronized text on a screen. In a stricter sense, captions are built for viewers who cannot hear the audio, while subtitles are built for viewers who can hear it but need another language. That difference changes what goes into the file, not just what you call it.",
        "A practical way to decide is to ask who needs the text and why. If the answer is a Deaf or hard-of-hearing viewer who needs the dialogue, speaker changes and important sounds, you are captioning. If the answer is a viewer who can hear the scene but does not speak the language, you are subtitling. Many projects need both, and the same WebVTT or SRT container can hold either version.",
        "Terminology also changes across markets. In the United States, the word captions usually means the accessibility track, while in parts of Europe subtitles for the deaf and hard of hearing is the common phrase. A client may ask for subtitles and mean either version. Confirm the audience, the required content and the file format in writing before the work begins; that short exchange prevents a delivery that technically opens but misses the brief."
      ]
    },
    {
      heading: "What closed captions include that dialogue-only subtitles often do not",
      paragraphs: [
        "Captions carry the dialogue, but they also identify who is speaking and note non-speech information that matters to the story. A door slamming, a phone buzzing, laughter or a piece of music can change how a scene reads. The W3C definition describes captions as a synchronized alternative for both speech and non-speech audio information needed to understand the media. That is a higher bar than transcribing words alone.",
        "Dialogue-only subtitles usually leave those sounds out because the audience can already hear them. A translated subtitle track may also simplify cultural references or condense fast speech to fit the reading speed of the target language. Neither approach is wrong; they serve different audiences. The mistake is delivering a dialogue-only file to viewers who need captions, then assuming the accessibility work is finished."
      ]
    },
    {
      heading: "Open vs closed captions: who controls visibility",
      paragraphs: [
        "Open captions are part of the picture. They are rendered into the video frames, so they cannot be turned off or restyled by the viewer. That makes them reliable on platforms that do not support caption tracks, and it is why social videos often use burned-in text. The trade-off is control: viewers who do not want captions cannot hide them, and the text cannot be edited without re-exporting the video.",
        "Closed captions live in a separate track that the player can show or hide. The viewer can usually change the size, colour or position, and the file remains searchable and editable. Closed captions are the better default for a website, a streaming service or any player with a caption menu. Open captions are a fallback for distribution channels that ignore sidecar files, not a replacement for a proper track when one is supported.",
        "Player support is the deciding factor for this track. HTML5 video uses the track element and WebVTT, and the browser exposes a caption menu when the track is present. Some social players do not offer a visible toggle at all, which is why creators fall back to open captions. Test the actual embed rather than assuming that a file upload will produce a menu."
      ]
    },
    {
      heading: "SDH subtitles and same-language captions",
      paragraphs: [
        "SDH stands for subtitles for Deaf and hard-of-hearing viewers. An SDH file is usually in the same language as the audio and includes speaker labels, meaningful sound descriptions and sometimes music cues. In that respect it behaves like a caption track even when the platform calls it a subtitle. The acronym is common in broadcast and streaming workflows, especially in Europe.",
        "Terminology varies by region. Some countries use subtitles for both same-language and translated text, and distinguish them as intralingual and interlingual. Others reserve captions for the accessibility version and subtitles for translation. Do not rely on the label alone. Open the file and check whether it identifies speakers and describes important sounds; that tells you which audience it can actually serve."
      ]
    },
    {
      heading: "Translated subtitles and language access",
      paragraphs: [
        "Translated subtitles are a language-access tool, not a substitute for captions. They help a viewer who can hear the original audio follow dialogue in another language, but they often omit sound descriptions because the viewer can hear the sound. The W3C guidance makes this distinction explicit: captions are needed for accessibility, while subtitles in another language are not directly an accessibility accommodation.",
        "Translation also changes timing decisions. A target language may need more characters to express the same idea, which pushes against reading speed and the two-line limit. A good workflow translates the meaning, then re-times and re-breaks the lines for the target audience rather than copying the source cue boundaries. Forced narrative captions, which translate only on-screen text or foreign dialogue, are a third case with their own rules."
      ]
    },
    {
      heading: "Burned-in, sidecar and platform caption tracks",
      paragraphs: [
        "A sidecar file is a separate subtitle file such as SRT or WebVTT that travels with the video. It is easy to edit, easy to search and easy to replace without touching the picture. A platform caption track is similar in spirit but lives inside the hosting service; you upload or type the text, and the player exposes it through its own menu. Both keep the text separate from the video frames.",
        "Burned-in text is already part of the image, so every viewer sees it. That can be useful for a short social clip where the platform ignores caption files, but it is a poor master copy. Keep an editable sidecar as the source of truth, then burn a copy only for a destination that requires it. If you need to compare container choices, our [SRT vs VTT guide](/guides/srt-vs-vtt) covers the file-level differences."
      ]
    },
    {
      heading: "Which one should you deliver? A comparison table",
      paragraphs: [
        "Start with the audience and the distribution channel. A public website with an HTML5 player usually needs a closed WebVTT track. A broadcast or streaming delivery may require a specific sidecar format and an SDH version. A social clip may need burned-in text because the platform's caption support is limited or inconsistent. The label matters less than whether the viewer can actually read the right information.",
        "When you need both accessibility and translation, produce two files rather than compromising on one. The caption file carries speaker IDs and sounds; the translated subtitle file carries the target-language dialogue and follows its own reading-speed limits. Name the files clearly and test each one in the player. A single file that tries to do both jobs often does neither well.",
        "Keep the master files separate from the delivery copies. Name them with the language, the version and the audience, for example en-captions and fr-subtitles, so nobody uploads the wrong track. After upload, watch the first minute, a dense middle section and the final cue on a phone as well as a desktop. Captions that work in a desktop preview can still collide with interface elements or disappear behind a control on a smaller screen."
      ],
      table: {
        caption: "Captions and subtitles compared",
        headers: ["Question", "Captions", "Subtitles"],
        rows: [
          [
            "Primary audience",
            "Viewers who cannot hear the audio",
            "Viewers who can hear but need another language"
          ],
          [
            "Typical content",
            "Dialogue, speaker IDs, meaningful sounds",
            "Dialogue, often without sound descriptions"
          ],
          ["Visibility", "Open or closed", "Usually closed, sometimes burned in"],
          ["Typical editing file", "SRT or WebVTT sidecar", "SRT or WebVTT sidecar"],
          ["Typical web format", "WebVTT track", "WebVTT track"],
          [
            "Accessibility role",
            "Direct accommodation",
            "Language access, not a caption substitute"
          ]
        ]
      }
    },
    {
      heading: "Accessibility, WCAG and the limits of legal shorthand",
      paragraphs: [
        "WCAG 2.2 Success Criterion 1.2.2 requires captions for prerecorded audio in synchronized media, with an exception for media that is already a text alternative and is clearly labelled. Success Criterion 1.2.4 covers live audio at Level AA. Those are conformance requirements in a technical standard; they are not, by themselves, a statement of every law in every country.",
        "Legal requirements vary, and this article is not legal advice. What the guidance does make clear is that captions need to carry more than dialogue when sounds matter. The W3C WAI captions page also notes that automatic captions are not sufficient unless they are fully accurate, which is why a review pass matters. If accessibility is the goal, start with the [accessibility guide](/guides/subtitles-for-accessibility) and then choose the container."
      ]
    }
  ],
  faqs: [
    {
      question: "What is the difference between captions and subtitles?",
      answer:
        "Captions are designed for viewers who cannot hear the audio and usually include speaker identification and meaningful sounds. Subtitles are often a translation for viewers who can hear the audio but do not understand the language. The terms overlap by region, so check the file's content rather than trusting the label."
    },
    {
      question: "Are closed captions always better than subtitles?",
      answer:
        "No. Closed captions are better when accessibility is the goal because they carry sound information and can be turned on or off. Translated subtitles are better when the audience can hear the original audio and needs a different language. Many projects need both versions."
    },
    {
      question: "What does SDH mean in subtitles?",
      answer:
        "SDH means subtitles for Deaf and hard-of-hearing viewers. An SDH file is usually in the same language as the audio and includes speaker labels, meaningful sound descriptions and sometimes music cues. It functions as an accessibility track even when a platform calls it a subtitle."
    },
    {
      question: "Should I burn captions into the video?",
      answer:
        "Burn them in only when the destination cannot display a separate track reliably. Burned-in captions cannot be turned off, restyled or corrected without a new export. Keep an editable SRT or WebVTT master and burn a copy for platforms that require it."
    },
    {
      question: "Do YouTube and social platforms support caption files?",
      answer:
        "Support varies by platform and changes over time. Some accept SRT or WebVTT uploads, while others expect text entered in their own editor or captions burned into the picture. Check the current help page for the destination before you choose a delivery format."
    },
    {
      question: "Are captions required by law?",
      answer:
        "WCAG defines accessibility success criteria, but it is a technical standard rather than a complete statement of law. Legal obligations differ by country, sector and organization. Treat WCAG as the published baseline and seek qualified advice for a specific legal question."
    }
  ],
  workedExample: {
    title: "Worked example: the same clip as captions and as translated subtitles",
    intro:
      "The SRT below is an English caption track for a short station scene. It identifies the speakers and includes a phone buzzing because that sound interrupts the conversation. A translated subtitle version for viewers who can hear the scene might keep the dialogue and speaker names but drop the sound description, since the audience already hears it.",
    srt: `1
00:00:01,000 --> 00:00:03,200
MAYA: The train leaves at six.

2
00:00:03,400 --> 00:00:05,000
[phone buzzes]

3
00:00:05,200 --> 00:00:08,000
MAYA: I will bring the blue folder.

4
00:00:08,300 --> 00:00:10,500
LEO: Meet me by the gate.`,
    note: "The caption version carries the speaker names and the interrupting sound. A translated subtitle file would carry the target-language dialogue, would usually keep the speaker names for clarity, and could omit the phone if the audience can hear it. The timing and two-line discipline still apply to both versions."
  },
  sources: [
    {
      label: "W3C WAI — Captions/Subtitles",
      url: "https://www.w3.org/WAI/media/av/captions/"
    },
    {
      label: "W3C WAI — Understanding SC 1.2.2: Captions (Prerecorded)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html"
    },
    {
      label: "Netflix Partner Help — Timed Text Style Guide: General Requirements",
      url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617-Timed-Text-Style-Guide-General-Requirements"
    },
    {
      label: "YouTube Help — Add subtitles and captions",
      url: "https://support.google.com/youtube/answer/2734698"
    }
  ],
  relatedGuides: [
    "subtitles-for-accessibility",
    "srt-vs-vtt",
    "subtitle-best-practices",
    "subtitle-glossary"
  ],
  keywords: [
    { keyword: "closed captions vs subtitles", role: "primary" },
    { keyword: "open vs closed captions", role: "secondary", headingLevel: 2 },
    { keyword: "closed captions", role: "secondary", headingLevel: 2 },
    { keyword: "sdh subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "translated subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "same-language captions", role: "secondary", headingLevel: 2 },
    { keyword: "What is the difference between captions and subtitles?", role: "faq" }
  ]
};
