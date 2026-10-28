import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "tt",
  summary:
    "Tatar is a Turkic language spoken in Tatarstan and across Russia, written in Cyrillic with extra letters for its sounds. VoiceToTextFree runs Whisper in the browser, drafts Cyrillic Tatar locally and lets you edit names, suffixes and numbers before exporting SRT or VTT. The model may mix in Russian and does not promise a Latin transliteration, so plan a separate conversion if your audience needs Latin.",
  scriptNote:
    "Tatar Cyrillic adds ә, ө, ү, җ, ң and һ to the Russian alphabet. Vowel harmony and agglutinative case suffixes mean a single stem can carry several endings. Latin script is used online and in diaspora contexts, but Whisper normally returns Cyrillic, and Russian loanwords may appear in Russian spelling.",
  pitfalls: [
    "Vowel harmony can be broken when the model chooses the wrong suffix variant, and the result may still look plausible to a non-speaker.",
    "Case endings and possessive suffixes may be dropped or duplicated in fast speech, especially in long noun phrases.",
    "Russian code-switching often appears in Cyrillic but with Russian spelling and stress, and the model may not mark the boundary.",
    "The letters ә, ө, ү, җ, ң and һ are sometimes confused with Russian lookalikes, especially in names and technical terms.",
    "Names may follow Russian transliteration rather than Tatar conventions, and Kazan, Mishar and Siberian varieties can differ in vocabulary and sound."
  ],
  tips: [
    "Check stem-plus-suffix forms against the audio, especially for case and possession, rather than trusting a familiar-looking ending.",
    "Keep Russian insertions in their original spelling unless the audience expects otherwise, and apply that rule to every cue.",
    "Confirm the six extra Cyrillic letters in a word list before publishing, because fonts can make them hard to spot.",
    "Decide whether to keep or normalise Russian-style names, then apply one rule across the whole file.",
    "Use a Tatar dictionary for formal or literary vocabulary rather than guessing from Russian or from the model's output.",
    "Ask a native reviewer to check a passage with several suffixes, where a small ending error can change the meaning. Check digits and number words such as бер and ике, since Russian numerals often appear in the same sentence."
  ],
  lineLengthNote:
    "Cyrillic Tatar needs more horizontal room than Latin, so aim for about 30 to 38 characters per line. Long agglutinated words can fill a cue quickly, and two lines are usually the maximum. Break between words or clauses, never inside a suffix, and test the font on a phone. Test a cue with long words.",
  useCases:
    "Useful for Tatarstan media, interviews, classroom recordings, mosque and community talks, and family archives. It also helps translators who need a rough Cyrillic draft before a native editor checks suffixes and Russian mixing, and it keeps the recording local during the draft stage.",
  accuracyNote:
    "No reviewed Tatar sample has been recorded, so this page is excluded from search. Vowel harmony, case suffixes, dialect variation and Russian code-switching are the weakest areas. Tatar is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; treat the draft as an unreviewed first pass for a native speaker.",
  example: {
    native: "Без иртәгә иртән очрашырбыз. 402 нче бүлмә дүртенче катта.",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Без иртәгә иртән очрашырбыз.

2
00:00:04,200 --> 00:00:08,000
402 нче бүлмә дүртенче катта.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Tatar?",
      answer:
        "Tatar is in the multilingual Whisper tokenizer used by this site, so it can be selected and transcribed in the browser. This page has no reviewed sample, so accuracy is not claimed and a native reviewer should check the draft."
    },
    {
      question: "Does Whisper output Tatar in Latin script?",
      answer:
        "No. Whisper normally returns Cyrillic Tatar, which is the official script in Tatarstan. Latin script exists online and in diaspora use, but the model does not promise a transliteration, so plan a separate conversion if you need Latin."
    },
    {
      question: "What is vowel harmony in Tatar?",
      answer:
        "Suffix vowels usually match the front or back vowels of the stem. If the model picks the wrong variant, a case or possessive ending can look plausible but be incorrect. Check the ending against the word and the audio."
    },
    {
      question: "How should I handle Russian words in Tatar audio?",
      answer:
        "Russian insertions may keep Russian spelling even inside a Tatar cue. Decide whether the audience expects Russian spelling or an adapted form, then apply that choice consistently instead of mixing conventions."
    },
    {
      question: "Can I export Tatar subtitles as SRT?",
      answer:
        "Yes. Edit the cues and download SRT, VTT or TXT as UTF-8. Check that ә, ө, ү, җ, ң and һ render correctly in the target player, since an incomplete font can show fallback glyphs."
    },
    {
      question: "How accurate is Tatar transcription?",
      answer:
        "We have not recorded a reviewed Tatar sample, so this page does not claim a tested accuracy level. Recognition varies with accent, Russian mixing, audio quality and model size, and agglutinative endings usually need a careful review."
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
