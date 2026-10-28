import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "uz",
  summary:
    "Uzbek is a Turkic language of Uzbekistan and neighbouring regions, written in Latin today with Cyrillic still in use. VoiceToTextFree runs Whisper in the browser, drafts Latin-script Uzbek and lets you edit cues before exporting SRT or VTT. The model may mix Russian or English insertions and does not promise romanized output for mixed speech or a consistent script when the source is bilingual.",
  scriptNote:
    "Uzbek Latin uses the letter oʻ and the digraph gʻ, often typed with an apostrophe or a turned comma, plus sh and ch. Cyrillic Uzbek remains common in older texts and some media. Unlike many Turkic languages, standard Uzbek has largely lost vowel harmony, so suffixes are more predictable but still need checking.",
  pitfalls: [
    "The okina in oʻ and gʻ is typed inconsistently as an apostrophe or omitted, and the error is easy to miss in a long file.",
    "Cyrillic and Latin Uzbek may be mixed when the source or speaker switches, especially in older media and official contexts.",
    "Russian loanwords and code-switching may appear in Russian spelling, and the model may not mark the switch.",
    "Names and places have both Latin and Cyrillic forms, sometimes with different spellings that the model cannot reconcile.",
    "Fast speech can drop suffixes, and the model may not restore them even when the surrounding sentence implies them."
  ],
  tips: [
    "Pick one okina character and use it for every oʻ and gʻ in the file, then check it in the player.",
    "Decide whether the file is Latin or Cyrillic before editing, then avoid mixing scripts within a cue.",
    "Keep a glossary of names and official terms in the chosen script, with one form per entry.",
    "Check Russian insertions against the audience's convention and apply the same rule throughout.",
    "Review numbers, dates and prices in a separate cue, since digit and word forms can look inconsistent.",
    "Ask an Uzbek reviewer to check a passage with oʻ and gʻ, where a missing okina changes the reading."
  ],
  lineLengthNote:
    "Latin Uzbek fits about 32 to 40 characters per line. The okina adds width, and Russian insertions can make a line look dense, so keep to two lines and break at phrase boundaries. Confirm that the player renders the okina rather than a question mark or a blank box. Test a cue with oʻ and gʻ.",
  useCases:
    "Useful for Uzbek interviews, vlogs, news clips, classroom recordings and family videos. It also helps translators who need a rough Latin or Cyrillic draft before a native editor checks names, script choice and Russian mixing, and it keeps the recording local during the draft stage.",
  accuracyNote:
    "No reviewed Uzbek sample has been recorded, so this page is excluded from search. Uzbek speech data is limited compared with major languages, and okina handling, script mixing and Russian code-switching are the weakest areas. We do not claim tested accuracy; treat every draft as a first pass for a human reviewer and editor.",
  example: {
    native: "Ertaga ertalab uchrashamiz. 402-xona toʻrtinchi qavatda.",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Ertaga ertalab uchrashamiz.

2
00:00:04,200 --> 00:00:08,000
402-xona toʻrtinchi qavatda.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Uzbek?",
      answer:
        "Uzbek is in the multilingual Whisper tokenizer used by this site, so it can be selected and transcribed in the browser. This page has no reviewed sample, so accuracy is not claimed and the draft still needs a human review."
    },
    {
      question: "Does Whisper output Uzbek in Latin or Cyrillic?",
      answer:
        "Whisper normally returns Latin-script Uzbek, but it may produce Cyrillic when the audio or context points that way. It does not promise a transliteration between the two, so decide which script you need and check the whole file."
    },
    {
      question: "What is the correct character for oʻ and gʻ?",
      answer:
        "Uzbek Latin uses a modifier letter, often called an okina, rather than a plain apostrophe. Typing conventions vary, so choose one Unicode character and use it consistently. Check that the player and font display it correctly."
    },
    {
      question: "Does Uzbek have vowel harmony?",
      answer:
        "Standard Uzbek has largely lost the vowel harmony found in many other Turkic languages, so suffixes are less variable. That does not make every ending predictable, and the model can still drop or mix a suffix in fast speech."
    },
    {
      question: "Can I export Uzbek subtitles as SRT?",
      answer:
        "Yes. Edit the cues and download SRT, VTT or TXT as UTF-8. Test the okina and any Cyrillic insertions in the target player, because an encoding or font problem can turn the character into a box."
    },
    {
      question: "How accurate is Uzbek transcription?",
      answer:
        "No reviewed Uzbek sample has been recorded, so this page makes no tested accuracy claim. Okina handling, script mixing, Russian code-switching, audio quality and model size affect the result, so treat the draft as a first pass."
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
