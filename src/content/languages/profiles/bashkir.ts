import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "ba",
  summary:
    "Bashkir is a Turkic language of Bashkortostan in Russia, written in Cyrillic with a distinctive set of extra letters. VoiceToTextFree runs Whisper locally in your browser, drafts Cyrillic Bashkir and lets you correct suffixes, names and numbers before exporting SRT or VTT. Russian code-switching is common, and the model does not promise a Latin transliteration.",
  scriptNote:
    "Bashkir Cyrillic adds ә, ө, ү, ҫ, ҙ, ң, һ, ғ and ҡ. Vowel harmony and agglutinative endings shape most words, and a stem can take several suffixes in a row. Russian remains a frequent source of loanwords and may appear in Russian spelling, so a cue can mix two orthographies.",
  pitfalls: [
    "Vowel harmony and rounded-vowel distinctions can be lost in suffix selection, and the wrong ending may still read smoothly.",
    "The letters ҫ, ҙ, ң, һ, ғ and ҡ are visually close to other Cyrillic letters and easy to misread in names.",
    "Russian code-switching may be transcribed in Russian rather than Bashkir spelling, and the model may leave Russian syntax intact.",
    "Long case and possessive chains can be truncated by the model, especially when the speaker is fast or the audio is noisy.",
    "Names and place names have both Russian and Bashkir forms, and eastern, southern and northwestern varieties can differ in vocabulary."
  ],
  tips: [
    "Check suffix chains against the audio and restore any dropped case or possessive ending before you publish.",
    "Confirm the nine extra letters in a short word list, and test how the chosen font displays them.",
    "Decide how Russian insertions should look and keep that rule across the file instead of mixing conventions.",
    "Use a Bashkir dictionary for official terms and local place names, including the republic's administrative vocabulary.",
    "Ask a native reviewer to check a formal or literary passage where suffix errors are most visible.",
    "Keep a glossary of recurring names and institutions, since Russian and Bashkir forms may differ."
  ],
  lineLengthNote:
    "Bashkir Cyrillic is wide, so 28 to 36 characters per line is a practical target. Agglutinated words and Russian insertions can make a cue dense; keep to two lines and break between phrases. Never split a suffix from its stem, and check the font on a phone. Test a cue with ҫ, ҙ and ҡ together.",
  useCases:
    "Suits Bashkortostan radio, community and mosque recordings, classroom material, interviews and family videos. It also helps translators who need a rough Cyrillic draft before a native editor checks vowel harmony and Russian mixing, and it keeps the recording local while the draft is prepared.",
  accuracyNote:
    "No reviewed Bashkir sample has been recorded, so this page is excluded from search. Vowel harmony, the extra Cyrillic letters, dialect variation and Russian code-switching are the least certain areas. Bashkir is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; every draft needs a native review.",
  example: {
    native: "Беҙ иртәгә иртән осрашырбыҙ. 402-се бүлмә дүртенсе ҡатта.",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Беҙ иртәгә иртән осрашырбыҙ.

2
00:00:04,200 --> 00:00:08,000
402-се бүлмә дүртенсе ҡатта.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Bashkir?",
      answer:
        "Bashkir is included in the multilingual Whisper tokenizer used here, so it can be selected and transcribed in the browser. This page has no reviewed sample, so accuracy is not claimed and the draft still needs a native review."
    },
    {
      question: "Which letters does Bashkir Cyrillic add?",
      answer:
        "Bashkir adds ә, ө, ү, ҫ, ҙ, ң, һ, ғ and ҡ. They distinguish sounds that Russian does not write separately, so check them in names and technical terms rather than assuming a Russian lookalike is correct."
    },
    {
      question: "What is vowel harmony in Bashkir?",
      answer:
        "Suffix vowels usually follow the front or back quality of the stem, and rounded vowels can add another contrast. If the model chooses the wrong variant, a case or possessive ending may look plausible but be wrong, so compare it with the audio."
    },
    {
      question: "How should I handle Russian words in Bashkir audio?",
      answer:
        "Russian insertions may keep Russian spelling inside a Bashkir cue. Decide whether the audience expects that or an adapted form, then apply one rule. Do not assume the model will separate the two languages cleanly."
    },
    {
      question: "Can I export Bashkir subtitles as SRT?",
      answer:
        "Yes. Edit the cues and download SRT, VTT or TXT as UTF-8. Check that the nine extra Cyrillic letters render correctly in the target player, because fallback fonts can substitute similar-looking glyphs."
    },
    {
      question: "How accurate is Bashkir transcription?",
      answer:
        "No reviewed Bashkir sample has been recorded, so this page makes no tested accuracy claim. Vowel harmony, extra letters, Russian mixing, audio quality and model size all affect the result, so treat the draft as a first pass."
    }
  ],
  sources: [
    { label: "Unicode CLDR — locale data", url: "https://cldr.unicode.org/" },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
