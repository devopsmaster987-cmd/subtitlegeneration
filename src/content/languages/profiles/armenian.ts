import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "hy",
  summary:
    "Armenian is an Indo-European language written in its own alphabet and spoken in Armenia and a wide diaspora. VoiceToTextFree runs Whisper locally in the browser, drafts Armenian script and lets you edit cues before exporting SRT or VTT. Eastern and Western Armenian differ in pronunciation and spelling, so the model may produce a mixture that needs a reviewer's correction before publication.",
  scriptNote:
    "The Armenian alphabet has upper- and lower-case letters and its own punctuation, including the full stop ։ and the question mark ՞. Eastern Armenian is standard in Armenia, while Western Armenian is common in the diaspora. Loanwords from Russian, Persian, Turkish and English may appear in adapted or source spelling.",
  pitfalls: [
    "Eastern and Western Armenian forms can be mixed within one transcript, especially in diaspora recordings with several speakers.",
    "Armenian punctuation marks are often replaced by Western full stops and commas, which changes the look of a finished file.",
    "Russian and English loanwords may be written in the source script, and the model may not mark the language switch.",
    "Long agglutinated forms and compound names can be split or shortened, especially when the speaker is fast.",
    "Diaspora names often have several accepted spellings, and no single transliteration rule covers every family or church."
  ],
  tips: [
    "Choose Eastern or Western Armenian before editing and keep vocabulary consistent across the whole file.",
    "Apply Armenian punctuation deliberately, especially the full stop ։ and question mark ՞, and check it in the player.",
    "Keep a glossary of names, places and church terms in their usual spelling, with one entry per person or place.",
    "Check loanwords against the audience's convention rather than a single rule, since Russian and English terms vary.",
    "Ask a native reviewer to check a formal or liturgical passage where the wrong variety is most noticeable.",
    "Test the Armenian alphabet and punctuation in the target player, because an incomplete font can show boxes."
  ],
  lineLengthNote:
    "Armenian letters are fairly compact, so 32 to 40 characters per line can work. Two lines are the practical maximum, and long names or compound words can still crowd a cue. Break at phrase boundaries and check that Armenian punctuation does not sit alone at the start of a line. Test a formal cue.",
  useCases:
    "Suits Armenian interviews, diaspora family videos, church recordings, documentary footage and classroom material. It also helps translators who need a rough Armenian draft before a native reviewer chooses Eastern or Western conventions, and it keeps the recording local while the draft is prepared.",
  accuracyNote:
    "No reviewed Armenian sample has been recorded, so this page is excluded from search. Eastern versus Western variation, dialect differences, punctuation and loanword spelling are the least certain areas. Armenian is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; every draft needs a human pass.",
  example: {
    native: "Վաղը առավոտյան կհանդիպենք։ 402 սենյակը չորրորդ հարկում է։",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Վաղը առավոտյան կհանդիպենք։

2
00:00:04,200 --> 00:00:08,000
402 սենյակը չորրորդ հարկում է։`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Armenian?",
      answer:
        "Armenian is in the multilingual Whisper tokenizer used here, so it can be selected and transcribed in the browser. This page has no reviewed sample, so accuracy is not claimed and a native reviewer should check the result."
    },
    {
      question: "Does Whisper choose Eastern or Western Armenian?",
      answer:
        "The model does not reliably distinguish the two standards. It may produce a mixture of Eastern and Western forms, especially in diaspora audio. Choose the variety the audience expects, then correct vocabulary and spelling throughout the file."
    },
    {
      question: "Should Armenian subtitles use Armenian punctuation?",
      answer:
        "Armenian has its own full stop ։ and question mark ՞, and using them signals a properly edited file. Whisper may insert Western punctuation instead. Pick a convention, apply it consistently, and check that the player font renders the marks."
    },
    {
      question: "Can I export Armenian subtitles as SRT?",
      answer:
        "Yes. Edit the cues and download SRT, VTT or TXT as UTF-8. Test the Armenian letters and punctuation in the target player, because an incomplete font can show boxes or substitute a different glyph."
    },
    {
      question: "How do I handle names in the Armenian diaspora?",
      answer:
        "Diaspora names are often transliterated differently by family, church and official records. Ask the speaker or use an official source, then keep one spelling in the glossary. The model may choose a phonetic variant that is not the preferred form."
    },
    {
      question: "How accurate is Armenian transcription?",
      answer:
        "No reviewed Armenian sample has been recorded, so this page makes no tested accuracy claim. Eastern versus Western speech, punctuation, loanwords, audio quality and model size affect the result, so treat the draft as a first pass."
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
