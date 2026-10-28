import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-translate-subtitles-into-another-language",
  h1: "How to translate subtitles into another language: an honest workflow",
  title: "How to translate subtitles into another language: an honest workflow",
  metaDescription:
    "How to translate subtitles into another language when Whisper only translates to English: export SRT, edit cue by cue, protect timing and review idioms.",
  primaryKeyword: "how to translate subtitles into another language",
  capsule:
    "How to translate subtitles into another language depends on direction. Whisper can translate speech to English, but this browser tool is not a general translator. For French, Spanish, Urdu or any other target, transcribe the source, export the SRT, translate cue by cue with review, keep the timestamps and test the result before publishing.",
  published: "2026-02-03",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 10,
  keyFacts: [
    { label: "Built-in translate task", value: "Whisper translation produces English text" },
    {
      label: "Other target languages",
      value: "Require an external translation and review workflow"
    },
    {
      label: "Source languages",
      value: "The model supports multilingual transcription; pick the spoken language when known"
    },
    { label: "Exports", value: "SRT, VTT, plain TXT and TXT with timestamps" },
    { label: "Timing rule", value: "Edit the text only; do not move the cue timestamps" },
    { label: "Review focus", value: "Names, idioms, numbers, line length and reading speed" },
    { label: "RTL targets", value: "Check direction, punctuation and font shaping before delivery" }
  ],
  sections: [
    {
      heading: "The honest limit: Whisper translation to English",
      paragraphs: [
        "Whisper is a multilingual speech model, but its translation task is not a general translation engine. The OpenAI model card describes the translate task as translating speech into English. The project README is explicit: use a multilingual model with --task translate to translate non-English speech into English, and do not expect the turbo model to translate at all.",
        "This browser tool exposes the same task. When you choose the translate option in the [VoiceToTextFree transcriber](/), the model receives the audio plus a translate instruction and returns English text, not French, Spanish, Arabic or Urdu. That is a model capability limit, not a hidden menu.",
        "The consequence is simple. English is the one target the model can produce directly. Every other direction needs a second stage outside the model: a human translator, a translation service, or a language model with a reviewed prompt. The rest of this guide treats that second stage as part of the work."
      ]
    },
    {
      heading: "What the browser tool can and cannot do",
      paragraphs: [
        "The tool can transcribe speech in the languages exposed by the model, export plain timed cues as SRT or VTT, and burn those cues into a video. It can also run the English translation task and export the English result. Those are useful pieces, but they are pieces of a translation workflow, not the whole workflow.",
        "It cannot import a finished SRT and replace each cue with an arbitrary target in one automatic step. It does not store a glossary or enforce a per-cue character limit. If you need those controls, use a subtitle editor or translation tool that supports them, then return the finished SRT to the video.",
        "It can still save time. Transcribing the source gives you a timed cue list, which is the tedious part to build by hand. Exporting it as SRT gives a translator a stable grid; the translator changes words, not timecodes."
      ]
    },
    {
      heading: "Subtitle translation workflow from source to target",
      paragraphs: [
        "A reliable subtitle translation workflow separates four things: the audio, the source text, the timing and the target text. The audio and timing should not change during translation. The source text should be preserved as a reference. The target text is the only part that a translator rewrites.",
        "Start by transcribing in the spoken language. Use the language selector when you know it; automatic detection can mislabel short or noisy clips. Review the source before translating. A translation of a wrong transcript is still wrong, and misheard names stay wrong in the target.",
        "Then export the SRT and make a copy for the target. Keep the source untouched. Translate each cue against its timestamp, not a flowing paragraph, because the cue boundaries are what the viewer sees. A sentence that crosses two cues may need redistributing, but the total time should still match the speech."
      ],
      bullets: [
        "Source pass: transcribe and correct the spoken language.",
        "Timing pass: confirm the cues follow the audio.",
        "Translation pass: rewrite each cue in the target language.",
        "Review pass: read the target at playback speed and fix overflow."
      ]
    },
    {
      heading: "Step by step: export the SRT and translate cue by cue",
      paragraphs: [
        "The following sequence works for a target language that the model cannot produce directly. It also works for English when you want a human review of the model's output."
      ],
      steps: [
        "Open the [VoiceToTextFree home page](/) and load the audio or video.",
        "Choose the spoken language and transcribe. If English is the target, you can use the translate task instead of a separate translation stage.",
        "Correct the source cues: names, numbers, punctuation and obvious recognition errors.",
        "Download the SRT. This is the timed source grid and the file you will duplicate.",
        "Create a target SRT with the same cue numbers and timestamps. Translate one cue at a time.",
        "Read each target cue aloud at normal speed. Shorten it if it cannot be read before the next cue.",
        "Re-import the target SRT beside the video, watch the full clip and fix anything that drifts or overflows."
      ]
    },
    {
      heading: "Machine translation review: names, idioms and numbers",
      paragraphs: [
        "Machine translation is useful for a first draft, especially for descriptive speech. It is weakest where subtitles are least forgiving: names, forms of address, idioms, humor, overlapping speech and short cues with no context. A translator who sees one cue at a time can miss a pronoun established two lines earlier.",
        "Build a small glossary before the review. Decide how names are spelled, whether titles are localized, how units are converted and whether numbers stay in digits. If a character is called Doctor in one cue, do not switch to Dr. in the next unless the style guide says so.",
        "Idioms need a meaning-first rewrite. A literal translation can be grammatical and still sound wrong, and it often takes more characters. When a line cannot fit, cut a redundant word rather than speeding up the cue.",
        "Numbers deserve a separate pass. Phone numbers, room numbers, dates, ranges and prices transpose easily, and bidirectional text can reorder them visually. Compare the target with the source and the audio."
      ]
    },
    {
      heading: "Keep timing, line length and reading speed",
      paragraphs: [
        "The safest translation changes only the text inside each cue. Keep the start and end times, keep the cue count where possible, and keep the order. If the target language needs more space, split a cue at a natural pause rather than extending it into the next speaker's line. If it needs less space, you can merge cues, but re-check the reading speed after merging.",
        "Line length changes with language. German compounds and Spanish reflexives can run longer than the English source, while Chinese can be shorter in characters but still need careful breaks. Do not assume the source line breaks fit the target. Re-wrap each cue and keep it to two lines where the platform allows.",
        "Reading speed is the practical limit. An accurate cue that cannot be read in the available time is still a bad subtitle. Run the file through a [reading speed checker](/subtitle-reading-speed-checker), then watch without pausing. The [subtitle timing guide](/guides/how-to-sync-subtitles) explains how to adjust timing without creating overlaps."
      ]
    },
    {
      heading: "Right to left subtitle checks before you re-import",
      paragraphs: [
        "Arabic, Urdu, Persian, Hebrew, Sindhi, Pashto and Yiddish are right-to-left in the model catalogue. A translated SRT for one of them is still plain text, but display depends on the player's bidirectional algorithm, the font and the punctuation. A cue that looks right in a left-to-right editor can render with the full stop at the wrong end or a number out of place.",
        "Check punctuation at the logical end of the sentence, not the visual left. Keep Latin names and URLs isolated if the player supports it, and test phone numbers in context. Use a font that contains the script; Urdu Nastaliq and Arabic Naskh have different shapes and line-height needs. The [Urdu subtitle generator](/subtitle-generator/urdu) and [Arabic subtitle generator](/subtitle-generator/arabic) pages cover language-specific starting points.",
        "Re-import with the same player as the audience. A browser preview, a phone and a television can disagree about direction and fallback fonts. For more detail, see the guide to [right-to-left and non-Latin subtitles](/guides/rtl-and-non-latin-subtitles)."
      ]
    },
    {
      heading: "Re-import, validate and spot-check",
      paragraphs: [
        "Import the translated SRT into the video editor or player and watch the whole clip. Do not rely on a static subtitle list. The errors that matter appear at playback speed: a cue that starts before the speaker, a line that covers a face, a translation that arrives after the action it describes.",
        "Check the structure as well as the words. Cue numbers should be sequential, timestamps should not overlap unless the source deliberately did, and the file should be UTF-8. If the target uses a non-Latin script, confirm the player is not showing boxes or disconnected letters.",
        "Spot-check where translation usually fails: the first minute, the last minute, every name, every number and any rapid dialogue. Compare those cues with the source and the audio. If the target is for [accessibility](/guides/subtitles-for-accessibility), keep a sidecar file rather than burning the only copy."
      ]
    },
    {
      heading: "When English is not the target: external options",
      paragraphs: [
        "For a non-English target, choose the workflow that matches the risk. A human translator with subtitle experience is the safest choice for broadcast, legal, medical and brand-sensitive material. A translation service can handle volume, but it still needs a subtitle-aware review pass. A general language model can draft quickly, but it needs a glossary, the full context and a human check.",
        "Whatever the tool, give the translator the source SRT, the video, a glossary and a style note. Ask for the target SRT with the original timestamps, not a plain text document. Then run the review steps above. The browser tool's role is to produce the timed source and, when English is the target, to produce a first English draft; it is not a substitute for the target-language review."
      ]
    }
  ],
  faqs: [
    {
      question: "Does Whisper translate subtitles into any language?",
      answer:
        "No. Whisper's translation task translates speech into English. It does not output an arbitrary target language. For French, Spanish, Arabic or any other target, transcribe the source and translate the resulting cues with a separate reviewed workflow."
    },
    {
      question: "Can I translate an SRT file in the browser?",
      answer:
        "This tool does not import an SRT and translate it into an arbitrary language. It transcribes audio, can translate speech to English, and exports timed SRT or VTT. For an existing SRT in another target language, use a subtitle editor or a translation workflow outside the tool."
    },
    {
      question: "How do I keep subtitles in sync after translation?",
      answer:
        "Change only the text inside each cue and leave the timestamps alone. If a target line needs more time, split the cue at a pause or shorten the wording rather than moving the next cue. Re-import the file and watch it at normal speed to catch drift."
    },
    {
      question: "Should I translate cue by cue or the whole transcript?",
      answer:
        "Translate with the whole transcript visible for context, but deliver the text cue by cue so the timing stays intact. A translator who sees only isolated lines can miss pronouns and running jokes. A translator who ignores cue boundaries can produce lines that cannot be read in time."
    },
    {
      question: "What happens to names and idioms in machine translation?",
      answer:
        "Names are often transliterated inconsistently, and idioms may be translated literally. Build a glossary for names and recurring terms, then rewrite idioms by meaning. Check every number, date and unit against the source rather than trusting the draft."
    },
    {
      question: "How do I review right-to-left subtitle translations?",
      answer:
        "Watch the translated cues in the target player on a phone and a desktop. Check punctuation at the logical end, numbers in context, and font shaping for Arabic or Urdu. Keep Latin names isolated if the player supports it, and avoid assuming that a left-to-right editor preview is accurate."
    }
  ],
  workedExample: {
    title: "Worked example: Spanish source, English target, unchanged timestamps",
    intro:
      "This two-cue clip is a room booking. The Spanish source was transcribed first, then the English target was produced with the model's translate task. The timestamps are identical, so the target can replace the source in the same player without re-timing.",
    srt: `SOURCE — Spanish

1
00:00:02,100 --> 00:00:05,400
La reunión empieza a las nueve de la mañana.

2
00:00:05,600 --> 00:00:09,200
Trae el informe azul a la sala 402.

TARGET — English

1
00:00:02,100 --> 00:00:05,400
The meeting starts at nine in the morning.

2
00:00:05,600 --> 00:00:09,200
Bring the blue report to room 402.`,
    note: "Only the text changed. The 2.1-second start, the 3.3-second first cue and the 3.6-second second cue are unchanged. If the target were French or Urdu, the same grid would go to an external translator, and the returned SRT would be checked at playback speed before re-import."
  },
  sources: [
    {
      label: "OpenAI Whisper — README (translation into English)",
      url: "https://github.com/openai/whisper"
    },
    {
      label: "Hugging Face — Whisper model documentation",
      url: "https://huggingface.co/docs/transformers/en/model_doc/whisper"
    },
    {
      label: "W3C WAI — Captions/Subtitles",
      url: "https://www.w3.org/WAI/media/av/captions/"
    }
  ],
  relatedGuides: [
    "how-to-improve-whisper-accuracy",
    "rtl-and-non-latin-subtitles",
    "subtitle-line-length",
    "subtitle-reading-speed"
  ],
  keywords: [
    { keyword: "how to translate subtitles into another language", role: "primary" },
    { keyword: "whisper translation to english", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle translation workflow", role: "secondary", headingLevel: 2 },
    { keyword: "translate cue by cue", role: "secondary", headingLevel: 2 },
    { keyword: "machine translation review", role: "secondary", headingLevel: 2 },
    { keyword: "right to left subtitle checks", role: "secondary", headingLevel: 2 },
    { keyword: "Does Whisper translate subtitles into any language?", role: "faq" },
    { keyword: "Can I translate an SRT file in the browser?", role: "faq" }
  ]
};
