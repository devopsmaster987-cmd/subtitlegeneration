import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "ha",
  summary:
    "Hausa is a major West African language usually written in the Latin-based Boko alphabet, with hooked letters ɓ, ɗ, ƙ and ƴ. An Arabic-based Ajami tradition also exists, but the browser draft normally returns Boko. VoiceToTextFree transcribes Hausa locally, then you review names, loanwords and hooked letters before exporting SRT, VTT or TXT. Hooked letters and loanword spellings are the main review points.",
  scriptNote:
    "Hausa's Boko alphabet uses hooked consonants ɓ, ɗ, ƙ and ƴ, plus digraphs such as sh and ts. Tone and vowel length are rarely marked in everyday writing, so the model usually returns unmarked text. Ajami is a separate Arabic-based writing tradition and is not the default output. Everyday spelling also varies between markets and publishers.",
  pitfalls: [
    "Hooked letters are frequently normalised to plain b, d, k or y, which changes the word on screen. The hooks are meaningful, not decorative.",
    "Ajami Arabic-script text is not the default output, so a source written in Ajami will not match the draft.",
    "Arabic and English loanwords may be spelled several ways, and the model can choose a different convention.",
    "Personal names, towns and titles have variable spellings, especially when English transliteration is involved, so keep a glossary.",
    "Tone and vowel length are unmarked, so a reviewer must infer meaning from context and audio."
  ],
  tips: [
    "Restore the hooked letters ɓ, ɗ, ƙ and ƴ wherever the source uses Boko orthography.",
    "Keep a glossary of recurring names, religious terms and place names with one agreed spelling, and do not mix variants.",
    "Leave established Arabic and English loanwords in the form your audience expects or translate them deliberately.",
    "Do not invent tone marks; standard Hausa writing usually leaves them out.",
    "Choose Western digits or spelled-out numbers consistently, then test prices and dates in the player.",
    "Break cues at clause boundaries and split any cue that mixes Hausa with a long English phrase. Never split a word."
  ],
  lineLengthNote:
    "Hausa captions use a Latin alphabet, but hooked letters and loanwords can make a cue look denser than its character count suggests. Keep to two lines, break at natural pauses, and give the text enough vertical room for descenders. Check the longest cue on a phone before publishing. Long names can force an early break.",
  useCases:
    "Useful for radio and television clips, health and agriculture explainers, religious teaching, school materials and YouTube interviews that mix Hausa with English. A local draft helps editors produce a searchable transcript or a reviewed Hausa caption track without uploading private audio. They also suit community radio archives.",
  accuracyNote:
    "No reviewed Hausa sample has been recorded, so this page is excluded from search while the editorial content is checked. Hooked letters, Ajami sources, loanword spellings and English code-switching are uncertain areas, and Hausa is low-resource in speech data. We do not claim tested accuracy; results need editing, and a fluent Hausa reviewer should check every cue.",
  example: {
    native: "Barka da safiya, yaya kake? Taron zai fara da ƙarfe tara.",
    translation: "Good morning, how are you? The meeting will start at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Barka da safiya, yaya kake?

2
00:00:04,200 --> 00:00:08,000
Taron zai fara da ƙarfe tara.`
  },
  faqs: [
    {
      question: "Does Whisper output Hausa in Ajami?",
      answer:
        "No. The default output is the Latin-based Boko alphabet, not Ajami. If your source uses Ajami, treat the draft as a phonetic starting point and have a reader convert it rather than assuming the script will match."
    },
    {
      question: "Why are Hausa hooked letters missing from my subtitles?",
      answer:
        "Models often normalise ɓ, ɗ, ƙ and ƴ to plain Latin letters because those forms are less common in training text. Restore the hooks during review so the spelling matches standard Boko usage."
    },
    {
      question: "Can I use the exported Hausa file on YouTube?",
      answer:
        "Yes. Export SRT or VTT and test it on a private upload first. Check hooked letters, loanwords and any cue that mixes Hausa with English, because the platform's font and line layout may differ from your editor."
    },
    {
      question: "Does Hausa use tone marks in subtitles?",
      answer:
        "Standard Hausa writing usually leaves tone and vowel length unmarked, so the draft will normally be plain. Do not add marks unless your publication style requires them, and never guess a mark that changes the meaning."
    },
    {
      question: "How should I handle English and Arabic loanwords?",
      answer:
        "Keep the spelling your audience already recognises and apply it consistently. Some loanwords have competing Hausa and English forms, so a short glossary prevents the same term appearing two ways in one file."
    },
    {
      question: "How accurate is Hausa transcription?",
      answer:
        "We have not recorded a reviewed Hausa sample, so this page does not claim a tested accuracy level. Accent, recording quality and code-switching all affect the result, and the page stays excluded from search until a review is recorded."
    }
  ],
  sources: [
    { label: "Unicode CLDR — Hausa locale data", url: "https://cldr.unicode.org/" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
