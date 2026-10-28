import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "az",
  summary:
    "Azerbaijani is a Turkic language spoken in Azerbaijan and Iran, with a Latin alphabet in the north and an Arabic script tradition in the south. VoiceToTextFree runs Whisper in the browser, drafts Latin-script Azerbaijani and lets you edit cues before exporting SRT or VTT. The model may mix Russian or English insertions and does not promise romanized output for mixed speech or a separate script for southern varieties.",
  scriptNote:
    "Northern Azerbaijani uses a Latin alphabet with ə, ğ, ı, ö, ş, ü and ç; the schwa ə is a full vowel, not a decoration. Southern Azerbaijani in Iran is usually written in the Arabic script. Vowel harmony and agglutinative suffixes shape words, and Russian loanwords may keep Russian spelling.",
  pitfalls: [
    "The schwa ə is often replaced by e or a, changing the word, and the error can survive a casual read.",
    "The dotless ı is confused with i, and ş with s, especially in names and official terms.",
    "Vowel harmony can be broken when the model picks the wrong suffix, and the result may still look plausible.",
    "Russian and English loanwords may appear in source spelling or script, and the model may not mark the switch.",
    "Baku, Karabakh and Shirvan speech differ in pronunciation and vocabulary, and the draft may drift toward one variety."
  ],
  tips: [
    "Check every ə, ı, ö, ü, ş, ç and ğ in names and technical terms, where a single letter can change the reading.",
    "Verify suffix vowels against vowel harmony rather than accepting the draft, especially in long words.",
    "Keep a glossary of place names and official terms in Latin spelling, and apply it throughout.",
    "Decide how Russian insertions should look and apply that rule consistently instead of mixing conventions.",
    "Ask a native reviewer to check a formal or broadcast passage where the schwa and suffix vowels are prominent.",
    "Test a cue with ə, ı and ş in the target player, because fonts can make the dotless ı hard to spot."
  ],
  lineLengthNote:
    "Azerbaijani Latin text fits about 32 to 40 characters per line. Dense suffixes and long official names can push a cue past that, so keep to two lines and break at phrase boundaries. The schwa and dotless ı must remain visible; test the font at phone size. A cue with ə, ı, ş and ç is the best check.",
  useCases:
    "Useful for Azerbaijani interviews, news clips, vlogs, classroom recordings and family videos. It also helps translators who need a rough Latin-script draft before a native editor checks vowel harmony, names and Russian mixing, and it keeps the recording local during the draft stage.",
  accuracyNote:
    "No reviewed Azerbaijani sample has been recorded, so this page is excluded from search. The schwa, vowel harmony, regional variation and Russian code-switching are the weakest areas. Azerbaijani is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; treat the draft as a first pass for a native reviewer.",
  example: {
    native: "Sabah səhər görüşəcəyik. 402 nömrəli otaq dördüncü mərtəbədədir.",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Sabah səhər görüşəcəyik.

2
00:00:04,200 --> 00:00:08,000
402 nömrəli otaq dördüncü mərtəbədədir.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Azerbaijani?",
      answer:
        "Azerbaijani is in the multilingual Whisper tokenizer used by this site, so it can be selected and transcribed in the browser. This page has no reviewed sample, so accuracy is not claimed and the draft still needs a native check."
    },
    {
      question: "What is the schwa ə and why does it matter?",
      answer:
        "In northern Azerbaijani Latin, ə is a full vowel with its own sound, not a variant of e. Whisper may replace it with e or a, which can change a word or a name. Check every ə in the final file, especially in proper nouns."
    },
    {
      question: "Can Whisper transcribe South Azerbaijani in Arabic script?",
      answer:
        "The model may detect Azerbaijani but normally returns the Latin script associated with the northern standard. Speech from Iran can also differ in vocabulary and accent, so treat the result as a draft and do not assume Arabic-script output."
    },
    {
      question: "How should I handle Russian words in Azerbaijani audio?",
      answer:
        "Russian insertions may keep Russian spelling even inside a Latin-script cue. Decide whether the audience expects that or an adapted form, then apply one rule. The model may not mark the switch reliably."
    },
    {
      question: "Can I export Azerbaijani subtitles as SRT?",
      answer:
        "Yes. Edit the cues and download SRT, VTT or TXT as UTF-8. Check that ə, ı, ö, ü, ş, ç and ğ render correctly in the target player before publishing."
    },
    {
      question: "How accurate is Azerbaijani transcription?",
      answer:
        "No reviewed Azerbaijani sample has been recorded, so this page makes no tested accuracy claim. The schwa, vowel harmony, regional accent, Russian mixing and model size all affect recognition, so review the draft carefully."
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
