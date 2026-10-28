import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "ln",
  summary:
    "Lingala is a Bantu language spoken in Kinshasa, Brazzaville and along the Congo River, where it often mixes with French. VoiceToTextFree runs Whisper in your browser, drafts Latin-script Lingala locally and lets you correct cues before exporting SRT or VTT. The draft is a starting point: tone is rarely marked, everyday spelling conventions vary, and the model does not promise romanized output for mixed speech or a clean split between Lingala and French.",
  scriptNote:
    "Lingala uses the Latin alphabet with accented vowels such as á and é in many teaching texts, while everyday writing often drops accents. The letters ɛ and ɔ appear in some orthographies but are commonly written e and o. Tone distinguishes words, yet tone marks are unusual outside dictionaries, so context carries much of the meaning.",
  pitfalls: [
    "Tone is barely written outside dictionaries, so short homographs can be misread when the surrounding sentence does not make the meaning clear.",
    "Noun-class and verb prefixes change shape across agreement, and the model may blend classes, drop a prefix or attach the wrong subject marker.",
    "French loanwords and Franco-Lingala code-switching often arrive in French spelling or Latin script, sometimes with French grammar left in place.",
    "Congolese personal and place names have several accepted spellings, and a model cannot verify which form the speaker or family prefers.",
    "Numbers may appear as digits or as Lingala words such as moko and mibale, and the two styles can mix inside one cue without warning."
  ],
  tips: [
    "Keep a short glossary of recurring names, places and job titles, and apply one spelling throughout the file instead of accepting each variant the model offers.",
    "Decide whether accents will be written and whether ɛ and ɔ will be used, then follow that choice consistently across every cue.",
    "Listen again to short homographs and use the surrounding sentence, not the isolated word, to confirm the intended meaning.",
    "Mark French or English insertions deliberately instead of assuming the transcript will separate them; the model often does not.",
    "Check digits against the audio, especially prices, dates, phone numbers and room numbers, where a wrong number is costly.",
    "Ask a Lingala speaker to review a sample when the recording is formal, religious or intended for publication beyond a small group."
  ],
  lineLengthNote:
    "Lingala cues read comfortably at about 32 to 42 characters per line, but the right limit depends on the player and font. Keep two lines at most, break at a clause boundary and avoid splitting a noun-class prefix from its stem. Kinshasa speech can be fast, so shorten cues rather than crowding them.",
  useCases:
    "Useful for community radio, church and NGO recordings, interviews with Kinshasa or Brazzaville speakers, family videos and language documentation. It also suits teams that need a rough Lingala draft before a human translator or reviewer checks the file, and it keeps the audio local during that first pass.",
  accuracyNote:
    "No reviewed Lingala sample has been recorded for this page, so it is excluded from search. Tone, regional spelling, dialect variation and Franco-Lingala switching are the weakest areas, and loanwords may appear in French spelling. Lingala is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; treat every draft as an unreviewed first pass.",
  example: {
    native: "Tokomonana lobi na ntongo. Chambre 402 ezali na etage ya minei.",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Tokomonana lobi na ntongo.

2
00:00:04,200 --> 00:00:08,000
Chambre 402 ezali na etage ya minei.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Lingala?",
      answer:
        "Lingala is present in the multilingual Whisper tokenizer used by this site, so it can be selected in the language picker and transcribed in the browser. Accuracy has not been independently tested on this page, and the draft still needs a reviewer."
    },
    {
      question: "Does Whisper write Lingala in a special script?",
      answer:
        "No. Lingala normally appears in the Latin alphabet, so there is no separate script conversion. Whisper may leave French insertions in French spelling and does not promise a different romanized form for mixed speech."
    },
    {
      question: "Why does Lingala spelling vary so much?",
      answer:
        "Lingala has several written conventions, and accents, the letters ɛ and ɔ, and regional vocabulary are handled differently. Everyday writing often simplifies these choices, so pick one convention for the file and apply it consistently."
    },
    {
      question: "Can I export Lingala subtitles as SRT?",
      answer:
        "Yes. After transcribing, edit the cues and download SRT, VTT or TXT. Files are written as UTF-8; check that accented vowels and any French loanwords survive in your target player before publishing."
    },
    {
      question: "How should I handle French words in Lingala audio?",
      answer:
        "Treat them as code-switching. Decide whether French terms stay in French spelling or are adapted to Lingala, and make that choice consistently. Whisper may not distinguish the two languages cleanly, so review the mixed cues by ear."
    },
    {
      question: "How accurate is Lingala transcription?",
      answer:
        "We have not recorded a reviewed Lingala sample, so this page does not claim a tested accuracy level. Recognition varies with accent, noise, speech rate and model size, and low-resource languages often need more correction than widely spoken ones."
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
