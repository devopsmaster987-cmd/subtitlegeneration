import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "so",
  summary:
    "Somali is written in a Latin alphabet introduced in 1972, with distinctive letters such as c, q and x and doubled vowels that mark length. It is spoken across the Horn of Africa and in a large diaspora, where Italian, English and Arabic influence appears in everyday speech. VoiceToTextFree drafts Somali cues locally, then you review spelling, vowel length and names before export. Names and code-switching also need a careful review.",
  scriptNote:
    "Somali uses a Latin alphabet introduced in 1972. It includes the letters c, dh, kh, q, sh and x, and doubled vowels mark length; tone is not normally written. Punctuation follows Latin practice. Arabic script and the historical Osmanya script are not the default Whisper output. Loanwords keep their source spelling.",
  pitfalls: [
    "The letters c, q and x stand for sounds that English does not have, and the model may replace them with k or other letters. These letters are meaningful, not decorative.",
    "Vowel length is written by doubling, but the model can collapse aa, ee, ii, oo and uu into a single vowel. Length is part of the word.",
    "Somali names and clan names have variable spellings, especially when transliterated through Italian or English.",
    "Arabic, Italian and English loanwords may appear in several forms, and code-switching is common, so keep one form consistently.",
    "Dialect differences between northern, central and southern varieties affect vocabulary even when the script is standard."
  ],
  tips: [
    "Restore c, q, x, dh, kh and sh where the speaker uses them, rather than accepting an English-like substitute.",
    "Check doubled vowels carefully because length can distinguish words, and compare each one with the audio.",
    "Keep a glossary of personal, clan, town and organisation names with one agreed spelling and confirm them locally.",
    "Leave established loanwords in the form your audience uses, apply it consistently, and check each occurrence.",
    "Verify numbers, times and dates; Somali broadcast speech often mixes digits with spelled-out forms.",
    "Break cues at clause boundaries and avoid splitting a long word across two captions. A split word is hard to read."
  ],
  lineLengthNote:
    "Somali words can be long, and doubled vowels make them visually distinctive but not shorter. Keep captions to two lines, break at natural clause boundaries and avoid splitting a word. Test the longest cue on a phone and check that the player's font shows doubled vowels clearly. Never split a doubled vowel.",
  useCases:
    "Useful for diaspora news videos, humanitarian and health briefings, religious teaching, school material and YouTube interviews that mix Somali with English or Arabic. Editors can draft locally, then correct vowel length and names before publishing a reviewed caption track. They also suit diaspora community archives.",
  accuracyNote:
    "No reviewed Somali sample has been recorded, so this page is excluded from search while the editorial content is checked. The letters c, q and x, vowel length, dialect vocabulary and code-switching are weak areas, and Somali is low-resource in speech data. We do not claim tested accuracy; results need editing, and a fluent reviewer should check every cue.",
  example: {
    native: "Subax wanaagsan, sidee tahay? Shirku wuxuu bilaabanayaa saacadda sagaal.",
    translation: "Good morning, how are you? The meeting will begin at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Subax wanaagsan, sidee tahay?

2
00:00:04,200 --> 00:00:08,000
Shirku wuxuu bilaabanayaa saacadda sagaal.`
  },
  faqs: [
    {
      question: "Does Whisper use the Somali Latin alphabet?",
      answer:
        "Yes, the normal output is the Latin alphabet introduced in 1972. It does not promise a romanized conversion because Somali is already written in Latin, but it may still substitute English-like letters for c, q or x."
    },
    {
      question: "Why are Somali doubled vowels missing in my subtitles?",
      answer:
        "The model may shorten aa, ee, ii, oo or uu to a single vowel, even though length can change a word. Compare doubtful words with the audio and restore the doubling during review."
    },
    {
      question: "Should I use Arabic script for Somali subtitles?",
      answer:
        "Not unless your audience specifically expects it. The standard output and most online Somali text use the Latin alphabet. Arabic-script Somali is a separate editorial decision and would require a deliberate conversion."
    },
    {
      question: "Can I export Somali subtitles as SRT or VTT?",
      answer:
        "Yes. Edit the cues, then download SRT, VTT or TXT. Check names, vowel length and any mixed English or Arabic lines in the player before publishing."
    },
    {
      question: "How do I handle Somali dialect differences?",
      answer:
        "Choose the variety your audience expects and keep vocabulary consistent. A northern speaker, a southern speaker and a diaspora speaker may use different words for the same idea, so a reviewer should confirm local usage."
    },
    {
      question: "How accurate is Somali transcription?",
      answer:
        "We have not recorded a reviewed Somali sample, so this page does not claim a tested accuracy level. Accent, dialect, audio quality and code-switching affect results, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode CLDR — Somali locale data", url: "https://cldr.unicode.org/" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
