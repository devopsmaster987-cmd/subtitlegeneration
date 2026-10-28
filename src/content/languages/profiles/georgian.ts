import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "ka",
  summary:
    "Georgian is the Kartvelian language of Georgia, written in the Mkhedruli script and known for long consonant clusters. VoiceToTextFree runs Whisper in the browser, drafts Georgian script locally and lets you edit cues before exporting SRT or VTT. The model works from ordinary speech, not a romanized form, and it may struggle with rapid, overlapping or dialect-heavy audio.",
  scriptNote:
    "Mkhedruli is a unicameral script with no upper- and lower-case distinction, and it has its own letter shapes rather than Latin or Cyrillic. Georgian has no grammatical gender and no definite article, while verbs carry complex agreement. Punctuation is mostly Western, and loanwords may arrive in Russian or English form.",
  pitfalls: [
    "Long consonant clusters and rapid speech can produce dropped or merged syllables, and the model may invent a smoother word.",
    "Verb agreement is complex, and the model may choose the wrong subject or object form when several people are involved.",
    "Russian and English loanwords may be written in the source language rather than adapted, and the model may not mark the switch.",
    "Dialects such as Imeretian or Gurian differ from the standard used in Tbilisi, and the draft may standardise them.",
    "Names may be shortened or spelled phonetically rather than conventionally, especially in fast interviews."
  ],
  tips: [
    "Check verb endings against the audio, since agreement carries much of the meaning and a small ending can change who did what.",
    "Keep a glossary of names and places in their usual Georgian spelling, and apply it throughout the file.",
    "Review loanwords one by one instead of assuming a single adaptation rule for Russian and English terms.",
    "Do not add capital letters to mimic Latin style; Mkhedruli has no case, and capitals look like an editing error.",
    "Test the script in the target player because fallback fonts vary widely and can change spacing.",
    "Ask a Georgian reviewer to check a passage with several participants, where verb agreement is hardest."
  ],
  lineLengthNote:
    "Georgian letters are wide, so 28 to 36 characters per line is realistic. Two lines are the practical maximum, and long consonant clusters can make a cue look dense even when the word count is low. Break between words or clauses and give the block extra height. Test a cue with a long consonant cluster at phone size.",
  useCases:
    "Useful for Georgian interviews, documentary footage, church and community recordings, classroom material and family archives. It also helps teams that need a rough Georgian draft before a native speaker corrects verb agreement and names, and it keeps the recording local during the draft stage.",
  accuracyNote:
    "No reviewed Georgian sample has been recorded, so this page is excluded from search. Verb agreement, consonant clusters and dialect variation are the weakest areas. Georgian is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; treat every draft as a first pass that needs a Georgian reviewer.",
  example: {
    native: "ხვალ დილით შევხვდებით. ოთახი 402 მეოთხე სართულზეა.",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
ხვალ დილით შევხვდებით.

2
00:00:04,200 --> 00:00:08,000
ოთახი 402 მეოთხე სართულზეა.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Georgian?",
      answer:
        "Georgian is in the multilingual Whisper tokenizer used by this site, so it can be selected and transcribed in the browser. No reviewed sample has been recorded here, so accuracy is not claimed and the draft still needs a Georgian reviewer."
    },
    {
      question: "Does Georgian use capital letters?",
      answer:
        "Mkhedruli, the everyday script, is unicameral, so there is no upper- and lower-case distinction. Do not add Latin-style capitals to names or sentence starts. Other historical Georgian scripts exist, but the model returns Mkhedruli."
    },
    {
      question: "Why is Georgian verb agreement hard to check?",
      answer:
        "Georgian verbs encode subject, object and sometimes version or tense in one complex form. A model can produce a plausible-looking ending that points to the wrong participant, so compare the cue with the audio when the sentence includes several people."
    },
    {
      question: "Can I export Georgian subtitles as SRT?",
      answer:
        "Yes. Edit the cues and download SRT, VTT or TXT as UTF-8. Check the Mkhedruli glyphs in the target player and at phone size, because a fallback font can change spacing and line breaks."
    },
    {
      question: "How should I handle dialects in Georgian audio?",
      answer:
        "The model may lean toward standard Georgian even when the speaker uses Imeretian, Gurian or another variety. Decide whether the captions should standardise the text or preserve local forms, then apply that choice consistently."
    },
    {
      question: "How accurate is Georgian transcription?",
      answer:
        "No reviewed Georgian sample has been recorded, so this page makes no tested accuracy claim. Consonant clusters, fast speech, dialect and model size affect recognition, and the draft should be checked before publication."
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
