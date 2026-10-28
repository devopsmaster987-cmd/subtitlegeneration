import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/rtl-and-non-latin-subtitles",
  h1: "Right to left subtitles and non-Latin scripts: a practical guide",
  title: "Right to left subtitles and non-Latin scripts: a practical guide",
  metaDescription:
    "Right to left subtitles need UTF-8, bidirectional text, correct punctuation, suitable fonts and player testing. A practical guide to RTL SRT and WebVTT.",
  primaryKeyword: "right to left subtitles",
  capsule:
    "Right to left subtitles are plain Unicode text, but they fail in specific ways: punctuation lands on the wrong side, numbers reorder, fonts substitute, and a left-to-right preview hides the problem. This guide covers UTF-8, bidi, Urdu Nastaliq and Arabic Naskh, SRT and VTT behavior, editor direction and the player tests that catch real errors.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 11,
  keyFacts: [
    { label: "Encoding", value: "UTF-8 for both SRT and WebVTT" },
    {
      label: "RTL languages in the catalogue",
      value: "Arabic, Urdu, Persian, Hebrew, Sindhi, Pashto and Yiddish"
    },
    {
      label: "Direction source",
      value:
        "The Unicode bidirectional algorithm and the first strong character, not an SRT direction field"
    },
    {
      label: "WebVTT alignment",
      value: "align:start and align:end follow the base direction of the cue text"
    },
    {
      label: "Urdu font",
      value: "Nastaliq is the usual style; it needs more line height than Naskh"
    },
    { label: "Arabic font", value: "Naskh is the usual book and screen style" },
    {
      label: "Numerals",
      value: "Arabic-Indic ٠١٢٣ and Eastern Arabic-Indic ۰۱۲۳ are different sets; keep one style"
    }
  ],
  sections: [
    {
      heading: "RTL subtitle support starts with Unicode, not alignment",
      paragraphs: [
        "A right-to-left subtitle is not stored backwards. The characters are saved in logical order, the same order in which they are read, and the player applies the Unicode bidirectional algorithm to display them from right to left. If you reverse the text by hand, the player will reverse it again and the line will look wrong in a different way.",
        "That is why encoding is the first requirement. Save the file as UTF-8. A legacy Windows code page can turn Arabic, Urdu, Hebrew or Persian into question marks before the player sees the script. The [VoiceToTextFree](/) exporter writes UTF-8, but an old editor or spreadsheet export may not. Open the exported file and confirm the letters.",
        "Alignment is separate from direction. Centred captions work for many mixed-script videos because text grows from the centre either way. If you align to an edge, use start and end rather than left and right so the anchor follows the script. A left-aligned Urdu cue is not automatically wrong, but it often looks disconnected from the reading flow."
      ]
    },
    {
      heading: "Urdu Nastaliq subtitles: font, line height and shaping",
      paragraphs: [
        "Urdu is written in a Perso-Arabic script, and the dominant book and screen style is Nastaliq. Nastaliq has sloping baselines, deep descenders and stacked marks. A font designed for [Arabic](/subtitle-generator/arabic) Naskh can display Urdu letters, but the result may look wrong to a reader and may need more vertical room than the caption safe area allows.",
        "Choose a font that explicitly supports Urdu, then test joined forms, diacritics and a wide ligature. Noto Nastaliq Urdu is one common open option, but the important test is whether the player shapes the text correctly at the delivered size. Disconnected letters or colliding marks mean the font or renderer is not handling the script.",
        "Urdu subtitles often need more line height than Latin captions, and Nastaliq's diagonals can make a two-line cue look crowded. Give the text room and check it at phone size. The [Urdu subtitle generator](/subtitle-generator/urdu) page covers the language-specific starting point."
      ]
    },
    {
      heading: "Non latin script subtitles: Hindi, Tamil and Chinese",
      paragraphs: [
        "Non latin script subtitles are not all right-to-left. Hindi uses Devanagari, Tamil uses Tamil script, and Chinese uses Han characters. They read left to right, but they bring their own shaping, line-breaking and font-fallback problems. A caption that works in English can still fail because the player picked a font with only partial coverage.",
        "Devanagari and Tamil need complex shaping: consonants, vowel signs and ligatures must render as a unit. An incomplete fallback font can produce dotted circles, missing vowel marks or disconnected pieces. Chinese needs careful line breaking because a line can break between characters; avoid leaving closing punctuation at the start of a line.",
        "The practical test is the same for every script: render a real cue, not a pangram, in the target player at the target size. Check the conjuncts in Hindi, the vowel signs in Tamil and the punctuation in Chinese, then repeat on a phone where the fallback font may differ."
      ]
    },
    {
      heading: "Bidirectional text and punctuation placement",
      paragraphs: [
        "Bidirectional text appears whenever a right-to-left cue contains a Latin name, a URL, a number or a quoted phrase. The Unicode algorithm resolves the runs, but neutral characters such as commas, full stops, brackets and hyphens sit between directions and can attach to the wrong side. The W3C internationalization guidance calls these opposite-direction phrases and recommends isolating them rather than relying on luck.",
        "In HTML, the fix is a dir attribute or an isolate. In plain SRT or VTT you have fewer tools: place punctuation at the logical end, avoid ambiguous punctuation between runs, and use Unicode isolates only if the player supports them. Do not reverse the punctuation manually. Test the cue in the player, not an editor that may apply a different base direction.",
        "A typical failure is an Arabic sentence followed by an English brand name and a full stop. The stop may appear left of the Latin name instead of right of the Arabic sentence. Move it so it belongs to the Arabic run, or isolate the Latin phrase, then re-check."
      ]
    },
    {
      heading: "Numerals, dates and mixed-direction lines",
      paragraphs: [
        "Arabic and Urdu use different numeral sets. Arabic-Indic digits ٠١٢٣٤٥٦٧٨٩ are common in Arabic text, while Urdu often uses Eastern Arabic-Indic digits ۰۱۲۳۴۵۶۷۸۹. Western digits 0123456789 also appear in both, especially in technical, medical and sports content. Pick the convention that matches the audience and keep it consistent across the file.",
        "Numbers can reorder visually beside right-to-left text. A phone number, date range, score or room number may look correct in one player and wrong in another. Keep the number in a single run, avoid punctuation inside it, and test the exact cue. If a range uses a dash, check whether the dash sits between the correct values.",
        "Mixed lines are hardest. A line with Arabic, an English product name and a number has three directional runs and several neutral characters. Shorten it, or split it into two cues so each has one dominant direction. A shorter cue is easier to read and less likely to produce a bidi surprise."
      ]
    },
    {
      heading: "SRT and WebVTT behavior for RTL",
      paragraphs: [
        "SRT has no formal direction field, no standard alignment and no bidi metadata. The player decides the base direction from the text, usually the first strong character, then applies its own font and layout. That is why the same SRT can look acceptable in one player and wrong in another. Keep the file simple, use UTF-8 and avoid manual reversal.",
        "WebVTT is more explicit about alignment but still has no per-cue direction property. Its align:start and align:end values follow the base direction: for right-to-left text, start is the right side. This helps positioned captions in a player that supports cue settings. Unicode characters can travel in cue text, but support varies.",
        "If you need precise positioning, VTT is the better container because it has a formal cue-setting model. For maximum compatibility with editors and older players, SRT is still the safer exchange format. Neither format guarantees that a television will shape Nastaliq correctly; the file carries characters and timing, and the renderer does the rest."
      ]
    },
    {
      heading: "Aligning RTL cues without breaking LTR text",
      paragraphs: [
        "Alignment is not the same as direction. A centre-aligned cue can contain a right-to-left sentence, a left-to-right name and a number, and each run still flows in its own direction. If you force the whole cue to a left edge, the right-to-left line may look detached; if you force a right edge, a mostly English cue may look odd.",
        "For mixed-language videos, centre alignment is often least surprising. For a single-language Arabic or Urdu video, start alignment in the script's direction is natural. In WebVTT, use align:start rather than align:left when the cue should follow the script. In SRT, alignment is player-dependent.",
        "Do not use alignment to fix a bidi problem. If punctuation is on the wrong side, moving the box will not change character order. Fix the text or isolate the run first, then decide on alignment."
      ]
    },
    {
      heading: "Editor setup with dir=rtl and a real preview",
      paragraphs: [
        "When you edit in an HTML-based tool, set dir=rtl on the caption container and lang to the language code, such as ur or ar. The dir attribute gives the editor the correct base direction, and lang helps the browser choose a font and helps assistive technology pronounce the text. A text area without dir can put the cursor and punctuation in confusing positions.",
        "A browser preview is still not enough. The editor may use a different font, and the player may apply a different bidi base direction. Export the file, open it in the actual player and watch at normal speed. If the file will be burned in, check the burned result too, because the renderer has its own font fallback.",
        "Keep the text in a plain UTF-8 file. Do not let a word processor add a byte-order mark or convert punctuation. A BOM at the start of a WebVTT file can prevent the player from recognizing the WEBVTT signature, and smart quotes can change a cue."
      ]
    },
    {
      heading: "Player testing on phones, browsers and televisions",
      paragraphs: [
        "Test at least three places: a desktop browser, a phone and the device that will actually show the video. A television or set-top box may have an older font stack, a different bidi implementation and a smaller safe area. A phone may use a different fallback font even when both run the same browser engine.",
        "Check the first cue, a cue with a number, a cue with a Latin name and the longest cue. Look for boxes, disconnected letters, wrong-side punctuation, clipping and overlap. Then watch a full minute without pausing. The [sync guide](/guides/how-to-sync-subtitles) covers drift, and the [accessibility guide](/guides/subtitles-for-accessibility) covers the track itself.",
        "If the video goes to a platform, upload a private copy and check the platform renderer. A file that is correct locally can be re-encoded, restyled or stripped of cue settings. Keep the original SRT as the master."
      ]
    }
  ],
  faqs: [
    {
      question: "Does Whisper work with RTL languages?",
      answer:
        "Yes, the multilingual Whisper models can transcribe right-to-left languages such as Arabic, Urdu, Persian, Hebrew, Sindhi, Pashto and Yiddish. Accuracy varies by language, accent, audio quality and model size, so review the transcript before publishing. Translation is a separate limitation: Whisper's translate task outputs English."
    },
    {
      question: "Should I use SRT or VTT for right-to-left subtitles?",
      answer:
        "SRT is more portable and is the safer exchange format for editors and older players. WebVTT has formal cue settings and direction-aware start and end alignment, which helps when you need positioning. Neither format stores a per-cue direction field, so test the rendered result in the target player."
    },
    {
      question: "Why does my Arabic subtitle punctuation appear on the wrong side?",
      answer:
        "Neutral punctuation can attach to the wrong directional run when a cue mixes Arabic with Latin text or numbers. Place the punctuation at the logical end of the sentence and isolate any opposite-direction phrase if the player supports it. Do not reverse the characters by hand."
    },
    {
      question: "Which font should I use for Urdu subtitles?",
      answer:
        "Use a font that explicitly supports Urdu Nastaliq, and test joined forms, diacritics and line height in the target player. A generic Arabic Naskh font may show the letters but not the style Urdu readers expect. If the font is missing, the player's fallback may shape the text incorrectly."
    },
    {
      question: "How do I test RTL subtitles in a browser?",
      answer:
        "Load the actual SRT or VTT beside the video and watch it in the browser, not only in an editor preview. Check punctuation, numbers, Latin names and the longest cue. Then repeat on a phone and on the presentation device, because font fallback and bidi handling can differ."
    },
    {
      question: "Do I need to change the text direction in the SRT file?",
      answer:
        "No. SRT has no standard direction field, and the characters should stay in logical order. Reversing the text or adding manual direction marks can make the player display it incorrectly. Fix the font, punctuation and player setup instead."
    }
  ],
  workedExample: {
    title: "Worked example: Urdu and Arabic cues with translations",
    intro:
      "These four cues come from a bilingual office induction video. The Urdu lines use Nastaliq-friendly spelling and the Arabic lines use Naskh-friendly spelling. The timestamps are in milliseconds, and the translations are provided for review, not for display.",
    srt: `1
00:00:01,200 --> 00:00:04,000
ہم کل صبح نو بجے ملیں گے۔
(We will meet tomorrow at nine in the morning.)

2
00:00:04,200 --> 00:00:07,600
کمرہ نمبر 402 چوتھی منزل پر ہے۔
(Room number 402 is on the fourth floor.)

3
00:00:07,800 --> 00:00:11,000
الاجتماع يبدأ الساعة التاسعة صباحًا.
(The meeting starts at nine in the morning.)

4
00:00:11,200 --> 00:00:15,000
يرجى إحضار التقرير الأزرق إلى الغرفة 402.
(Please bring the blue report to room 402.)`,
    note: "The parenthetical translations are for this guide only and would be removed from the delivered file. Cue 2 and cue 4 both contain the number 402; check that it stays in one run and does not jump to the other side of the line. Cue 3 ends with an Arabic full stop, while cue 4 mixes Arabic with a numeral, which is the case most likely to expose a bidi or font problem."
  },
  sources: [
    {
      label: "W3C — Inline markup and bidirectional text in HTML",
      url: "https://www.w3.org/International/articles/inline-bidi-markup/"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "MDN — WebVTT API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
    },
    {
      label: "OpenAI Whisper — README (languages and translation)",
      url: "https://github.com/openai/whisper"
    }
  ],
  relatedGuides: [
    "how-to-translate-subtitles-into-another-language",
    "subtitle-line-length",
    "subtitles-for-accessibility",
    "how-to-sync-subtitles"
  ],
  keywords: [
    { keyword: "right to left subtitles", role: "primary" },
    { keyword: "rtl subtitle support", role: "secondary", headingLevel: 2 },
    { keyword: "urdu nastaliq subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "non latin script subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "bidirectional text and punctuation", role: "secondary", headingLevel: 2 },
    { keyword: "srt and webvtt behavior", role: "secondary", headingLevel: 2 },
    { keyword: "Does Whisper work with RTL languages?", role: "faq" },
    { keyword: "Should I use SRT or VTT for right-to-left subtitles?", role: "faq" }
  ]
};
