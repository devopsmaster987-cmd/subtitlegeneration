import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "jw",
  summary:
    "Javanese is an Austronesian language spoken by millions in Central and East Java, with strong speech levels and a rich literary tradition. VoiceToTextFree runs Whisper in the browser, drafts Latin-script Javanese locally and lets you edit the cues before exporting SRT or VTT. The draft may lean toward a neutral register and does not promise to reproduce the speaker's ngoko or krama choices, so a native reviewer remains important.",
  scriptNote:
    "Everyday Javanese is written in the Latin alphabet, while the traditional Hanacaraka script survives in signage, literature and ceremonies. Latin text uses digraphs such as dh and th and may mark é or è in teaching materials. Speech levels, not spelling, carry much of the social meaning, so register is the harder problem.",
  pitfalls: [
    "Speech levels are easy to flatten, and the model may write ngoko where the speaker used krama, madya or a mixed register.",
    "Indonesian code-switching is constant, and the draft may label Javanese words as Indonesian or replace one with the other.",
    "Retroflex digraphs dh and th can be reduced to d and t, changing the word, especially in names and place terms.",
    "Regional dialects such as Banyumasan or East Javanese differ in vocabulary and pronunciation from the Central Javanese standard.",
    "Names and titles may follow Indonesian spelling rather than local conventions, and the model cannot choose the preferred form."
  ],
  tips: [
    "Decide the register from the video context before editing, then check pronouns, verbs and greetings for level.",
    "Keep Indonesian insertions visible instead of silently translating them into Javanese; the audience may expect the original wording.",
    "Confirm dh and th spellings in words where the distinction matters, and test how the chosen font renders the digraphs.",
    "Build a glossary of names, places and recurring cultural terms, and keep one spelling across the whole file.",
    "Review a sample with a native speaker when the register is formal, ceremonial or aimed at an older audience.",
    "Shorten a cue instead of dropping a register marker, because the level can matter more than the missing detail. Check digits and number words such as siji and loro against the audio, since speakers often switch to Indonesian numerals."
  ],
  lineLengthNote:
    "Aim for roughly 32 to 40 characters per line and no more than two lines. Javanese words are usually short, but code-switched Indonesian and long names can crowd a cue. Break at phrase boundaries and keep the register markers together so the line still reads naturally. Test a code-switched cue in the player.",
  useCases:
    "Useful for wayang and cultural recordings, village interviews, YouTube vlogs, classroom material and family archives. It also helps teams that need a rough Javanese draft before a native reviewer adjusts register and dialect, and it keeps the recording on the device during that draft stage.",
  accuracyNote:
    "No reviewed Javanese sample has been recorded, so the page is excluded from search. Register, dialect and Indonesian code-switching are the weakest areas, and the model may choose a neutral form. Javanese is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; treat the draft as a first pass for a human reviewer.",
  example: {
    native: "Sesuk esuk aku lan kowe ketemu ing kene. Kamar 402 ana ing lantai papat.",
    translation: "Tomorrow morning you and I will meet here. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Sesuk esuk aku lan kowe ketemu ing kene.

2
00:00:04,200 --> 00:00:08,000
Kamar 402 ana ing lantai papat.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Javanese?",
      answer:
        "Javanese is in the multilingual Whisper tokenizer used by this site, so it can be selected and transcribed in the browser. The page has no reviewed sample, so accuracy is not claimed and the register still needs a human check."
    },
    {
      question: "Does Whisper output Javanese in Hanacaraka?",
      answer:
        "No. Whisper normally returns Latin-script Javanese. Hanacaraka is a traditional script used in cultural and literary contexts, but the model does not convert the transcript into it, and no romanization or script conversion is promised."
    },
    {
      question: "How do I check Javanese speech levels?",
      answer:
        "Read the draft for pronouns, verbs and greetings, which change between ngoko, madya and krama. The model may default to a neutral or informal form, so compare a few cues with the video and ask a native reviewer when the setting is formal."
    },
    {
      question: "Can I export Javanese subtitles as SRT?",
      answer:
        "Yes. Edit the cues and download SRT, VTT or TXT as UTF-8. Check any é or è marks and Indonesian insertions in the target player, because font and encoding settings can affect them."
    },
    {
      question: "Why does the transcript mix Javanese and Indonesian?",
      answer:
        "Many speakers switch between the two languages inside a sentence. Whisper detects the dominant language and may not label each word correctly. Treat the mix as code-switching, decide how each language should appear, and keep that choice consistent."
    },
    {
      question: "How accurate is Javanese transcription?",
      answer:
        "We have not recorded a reviewed Javanese sample, so this page does not claim a tested accuracy level. Recognition varies with dialect, register, audio quality and model size, and the draft may not match the speaker's social register."
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
