import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "mn",
  summary:
    "Mongolian in Mongolia is written in Cyrillic, including the letters Ө/ө and Ү/ү, while the traditional Mongolian script is still used in parts of China. Spoken varieties differ, and Russian or English loanwords are common in technical and business speech. VoiceToTextFree drafts Mongolian cues locally, then you review letters, names and mixed-language lines before export. Names and script choice also need a careful review. Mongolian is comparatively low-resource for speech models, and vowel harmony shapes pronunciation.",
  scriptNote:
    "Mongolian in Mongolia is written in Cyrillic, including the letters Ө/ө and Ү/ү, which are distinct from О and У. Traditional Mongolian script is still used in parts of China but is not the default Whisper output. Punctuation follows Cyrillic and Latin conventions, and Russian or English loanwords are common. Consistency matters more than the transliteration choice.",
  pitfalls: [
    "The letters ө and ү are often replaced with о and у, which changes the word and can make it unreadable. These letters are meaningful, not decorative.",
    "Traditional Mongolian script and Cyrillic are different writing systems, so a source in one will not match the default output. Confirm which script the source uses.",
    "Russian and English loanwords may be spelled in several ways, especially in technical, mining and business content, so keep one form consistently.",
    "Names, place names and organisation names have variable transliterations from Cyrillic to Latin.",
    "Dialect differences between Khalkha, Buryat, Oirat and Inner Mongolian speech affect vocabulary and pronunciation. Match the speaker's variety."
  ],
  tips: [
    "Restore ө and ү wherever the source distinguishes them from о and у.",
    "Keep a glossary of recurring names, place names and technical terms in one Cyrillic spelling, and check the whole file.",
    "Leave established Russian and English loanwords in the form your audience uses and verify each occurrence.",
    "Decide whether numbers stay as digits or are spelled out, then apply that choice consistently and spot-check the rendered cue.",
    "Check verb endings and case suffixes in long sentences, because the model can lose agreement.",
    "Break cues at clause boundaries and avoid splitting a word across two captions. A split word is hard to read."
  ],
  lineLengthNote:
    "Mongolian Cyrillic words can be long, and case suffixes add length without adding a new idea. Keep captions to two lines, break at clause boundaries and avoid splitting a word. Test the longest cue on a phone, especially if the text mixes Cyrillic with Latin brand names or numbers. Avoid three-line captions.",
  useCases:
    "Useful for Mongolian news clips, mining and business briefings, school lessons, documentary interviews and YouTube channels that mix Mongolian with Russian or English. Editors can draft locally, then correct letters and names before publishing a reviewed caption track. They also serve bilingual business archives.",
  accuracyNote:
    "No reviewed Mongolian sample has been recorded, so this page is excluded from search while the editorial content is checked. The letters ө and ү, script choice, dialect variation and Russian or English code-switching are weak areas, and Mongolian is low-resource for speech data. We do not claim tested accuracy; results are uneven and need editing, so a fluent reviewer should check every cue.",
  example: {
    native: "Өглөөний мэнд. Сайн байна уу? Хурал есөн цагт эхэлнэ.",
    translation: "Good morning. How are you? The meeting will begin at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Өглөөний мэнд. Сайн байна уу?

2
00:00:04,200 --> 00:00:08,000
Хурал есөн цагт эхэлнэ.`
  },
  faqs: [
    {
      question: "Does Whisper use Cyrillic or traditional Mongolian script?",
      answer:
        "The default output is Cyrillic, which is the official script in Mongolia. Traditional Mongolian script is a different writing system used in parts of China, and selecting Mongolian does not promise output in that script."
    },
    {
      question: "Why are ө and ү sometimes wrong in Mongolian subtitles?",
      answer:
        "The model may substitute о and у because the letters look similar and the distinction is easy to lose. Those letters change the word, so restore ө and ү during review and check doubtful forms against a dictionary."
    },
    {
      question: "Should Mongolian subtitles keep Russian loanwords?",
      answer:
        "Keep the form your audience actually uses. Many technical and business terms are established Russian or English loans, and replacing them with an invented Mongolian word can make the caption less clear."
    },
    {
      question: "Which Mongolian dialect does Whisper transcribe?",
      answer:
        "The model does not promise one dialect. It may lean toward Khalkha Mongolian from Mongolia while reflecting Buryat, Oirat or Inner Mongolian speech in the recording. Match your audience and have a reviewer confirm local usage."
    },
    {
      question: "Can I export Mongolian captions for YouTube?",
      answer:
        "Yes. Export SRT or VTT, test on a private upload, and check that Cyrillic letters and Latin brand names render correctly. Watch for crowded cues and clipped descenders on a phone."
    },
    {
      question: "How accurate is Mongolian transcription?",
      answer:
        "We have not recorded a reviewed Mongolian sample, so this page does not claim a tested accuracy level. Accent, dialect, audio quality and code-switching affect results, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode — Cyrillic chart", url: "https://www.unicode.org/charts/PDF/U0400.pdf" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
