import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "mg",
  summary:
    "Malagasy is the Austronesian language of Madagascar, written in the Latin alphabet and spoken in several regional varieties. VoiceToTextFree runs Whisper locally in your browser, drafts Malagasy cues on your device and lets you edit them before exporting SRT or VTT. The model returns ordinary Latin-script Malagasy, not a romanized conversion, and it cannot resolve dialect, register or French code-switching choices for you.",
  scriptNote:
    "Malagasy uses a 21-letter Latin alphabet without c, q, u, w or x. Accents are rare and mostly appear in French loans or older texts, so most cues need no diacritics. The language is verb-initial and agglutinative, with long words built from prefixes and suffixes that a model can truncate.",
  pitfalls: [
    "Verb-initial word order and long agglutinated forms can be split, shortened or reshaped by the model, especially when the speaker is fast.",
    "Regional vocabulary differs sharply, and the draft may drift toward the Merina standard used in schools and official broadcasting.",
    "French loanwords and French-Malagasy code-switching may be written with French spelling, and the model can leave French syntax in place.",
    "Place names often contain the prefixes Ra- or Andria- and have variant spellings that a model cannot check against local usage.",
    "Numbers may appear as digits or Malagasy words such as iray and roa, and mixed styles are common in informal speech and interviews."
  ],
  tips: [
    "Choose the regional variety you need and keep vocabulary consistent instead of mixing words from several areas in one file.",
    "Check long verb forms against the audio and restore any prefix or suffix the model dropped, since the stem alone can change the sense.",
    "Keep a glossary of place names, personal names and administrative terms in the spelling your audience recognises.",
    "Mark French insertions deliberately and decide whether they stay in French spelling or are adapted to Malagasy.",
    "Test numbers, dates and prices in a separate cue before publishing, because digit and word forms can look inconsistent.",
    "Ask a Malagasy speaker to check a sample when the topic is technical, legal or tied to a particular region."
  ],
  lineLengthNote:
    "Malagasy words are often long, so a 32 to 38 character line can hold only a few of them. Keep cues to two lines, break between phrases rather than inside an agglutinated verb, and allow extra room on mobile. If a line looks dense, shorten the wording instead of shrinking the font, and test the result on a phone.",
  useCases:
    "Suits NGO and church recordings, radio interviews, family and travel videos, and fieldwork in Madagascar. It also helps translators who want a rough Malagasy draft before a human review, especially when the audio is clear and single-speaker and the reviewer can hear the original recording.",
  accuracyNote:
    "No reviewed Malagasy sample has been recorded, so this page is excluded from search. Regional vocabulary, long verb morphology and French code-switching are the least certain areas. Malagasy is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; every draft needs a human pass before it is published.",
  example: {
    native: "Hifanena isika rahampitso maraina. Efitra 402 dia ao amin'ny rihana fahefatra.",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Hifanena isika rahampitso maraina.

2
00:00:04,200 --> 00:00:08,000
Efitra 402 dia ao amin'ny rihana fahefatra.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Malagasy?",
      answer:
        "Malagasy is included in the multilingual Whisper tokenizer used here, so you can select it and transcribe locally in the browser. The page has no reviewed sample, so accuracy is not claimed and the draft still needs editing."
    },
    {
      question: "What script does Malagasy output use?",
      answer:
        "Whisper normally returns Malagasy in the Latin alphabet, which is the standard modern script. There is no separate romanization step, but French insertions may keep French spelling and still need review."
    },
    {
      question: "Which Malagasy variety should I choose?",
      answer:
        "The official standard leans on Merina, while regional varieties differ in vocabulary and pronunciation. Pick the variety your audience expects, then keep its words consistent. The picker selects the language, not a specific regional variety."
    },
    {
      question: "Can I export Malagasy subtitles as SRT?",
      answer:
        "Yes. Edit the cues, then download SRT, VTT or TXT as UTF-8. Check that apostrophes in forms such as amin'ny and any French loanwords render correctly in the target player."
    },
    {
      question: "Why does the transcript split long Malagasy words?",
      answer:
        "Malagasy builds words with prefixes and suffixes, and a speech model can lose part of a long form or treat it as two words. Compare the cue with the audio and restore the full stem before you publish."
    },
    {
      question: "How accurate is Malagasy transcription?",
      answer:
        "No reviewed Malagasy sample has been recorded, so this page makes no tested accuracy claim. Accent, dialect, background noise and model size all affect the result, and low-resource languages usually need a careful human pass."
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
