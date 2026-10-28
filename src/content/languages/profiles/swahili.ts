import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "sw",
  summary:
    "Swahili, or Kiswahili, is a Bantu lingua franca of East Africa written in a Latin alphabet with regular noun-class agreement. Standard Kiswahili draws on the Zanzibar variety and includes many Arabic and English loanwords. VoiceToTextFree drafts cues locally in the browser, then you correct agreement, names and mixed-language lines before exporting SRT, VTT or TXT. Names and mixed-language lines also need review.",
  scriptNote:
    "Standard Swahili uses the Latin alphabet without tone marks or diacritics. Punctuation follows Latin conventions, and Arabic loanwords keep established spellings that may not match English habits. Apostrophes are rare in formal writing. The model returns ordinary Latin text, not a phonetic or romanized transcription. Loanwords are written as ordinary Swahili words.",
  pitfalls: [
    "Noun-class prefixes and verb agreement can be wrong even when individual words are recognised correctly. Agreement is part of the grammar, not an optional polish.",
    "Kenyan, Tanzanian, coastal and Congolese varieties differ in vocabulary and accent, and the draft may mix them. Match the recording rather than a generic textbook.",
    "English code-switching is common, so a single cue may contain Swahili and English without any marker.",
    "Place names, personal names and organisation names often have several accepted spellings, so confirm them with local sources.",
    "Arabic loanwords may be written in a Swahili form, an English form or an Arabic-influenced form."
  ],
  tips: [
    "Choose the variety or standard your audience expects, apply its vocabulary consistently, and keep the file consistent.",
    "Check subject, object and tense prefixes when a verb looks plausible but the sentence sounds wrong, then rewrite the cue if it sounds unnatural.",
    "Keep a glossary of names and technical terms, including the English forms used in the recording.",
    "Leave established loanwords in their usual Swahili spelling rather than translating them mid-cue, and check each occurrence.",
    "Remember that saa tatu means nine o'clock in Swahili time, not three o'clock, and verify clock expressions.",
    "Split long agglutinative words across cues only at clause boundaries, never inside a word. A split verb is hard to read."
  ],
  lineLengthNote:
    "Swahili words are often long because prefixes and suffixes attach to the root, so a modest character count can still fill a line. Keep cues to two lines, break at clause boundaries and avoid splitting a verb. Test the longest cue on a phone and check that the line does not crowd the safe area. Avoid three-line captions.",
  useCases:
    "Useful for news and current-affairs clips, NGO and health explainers, tourism videos, classroom material and YouTube interviews with English or Arabic mixing. Editors can draft a local transcript, then review agreement and terminology before publishing a Swahili caption track. They also support bilingual tourism material.",
  accuracyNote:
    "No reviewed Swahili sample has been recorded, so this page is excluded from search while the editorial content is checked. Dialect mixing, noun-class agreement, English code-switching and loanword spellings are uncertain areas, and Swahili is low-resource in speech data. We do not claim tested accuracy; results need editing, and a fluent reviewer should check every cue.",
  example: {
    native: "Habari za asubuhi, hujambo? Mkutano utaanza saa tatu asubuhi.",
    translation: "Good morning, how are you? The meeting will begin at nine in the morning.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Habari za asubuhi, hujambo?

2
00:00:04,200 --> 00:00:08,000
Mkutano utaanza saa tatu asubuhi.`
  },
  faqs: [
    {
      question: "Which Swahili variety does Whisper transcribe?",
      answer:
        "The model is trained on broad multilingual audio, so it does not promise one variety. Output may lean toward standard Kiswahili while reflecting Kenyan, Tanzanian or Congolese vocabulary from the recording. Choose your target variety and review the draft against it."
    },
    {
      question: "Does Swahili use tone marks or diacritics?",
      answer:
        "Standard Swahili orthography does not mark tone, and it normally uses no diacritics. The draft will therefore be plain Latin text. Do not add accents unless a specific publication style requires them."
    },
    {
      question: "Why does my Swahili cue contain English words?",
      answer:
        "Code-switching between Swahili and English is common in East African speech. Whisper may keep the English words in Latin spelling inside a Swahili cue. Decide whether to keep, translate or mark them, then apply that choice consistently."
    },
    {
      question: "Can I export Swahili subtitles as SRT or VTT?",
      answer:
        "Yes. After transcription, edit the cues and download SRT, VTT or TXT. The file is UTF-8, but you should still check names, loanwords and line breaks in the player that will show the video."
    },
    {
      question: "How do I handle Swahili clock times?",
      answer:
        "Swahili time counts from sunrise and sunset, so saa tatu is about nine in the morning. A literal translation into three o'clock would be wrong. Verify every time expression with the speaker or the surrounding context."
    },
    {
      question: "How accurate is Swahili transcription?",
      answer:
        "We have not recorded a reviewed Swahili sample, so this page does not claim a tested accuracy level. Accent, dialect, background noise and code-switching affect results, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode CLDR — Swahili locale data", url: "https://cldr.unicode.org/" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
