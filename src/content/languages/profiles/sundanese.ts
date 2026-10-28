import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "su",
  summary:
    "Sundanese is an Austronesian language of West Java and Banten, written mainly in the Latin alphabet and spoken with distinct speech levels. VoiceToTextFree runs Whisper locally in your browser, drafts Latin-script Sundanese and lets you correct cues before exporting SRT or VTT. The draft may not match the speaker's lemes or loma register, and it does not promise romanized output for mixed Sundanese and Indonesian speech.",
  scriptNote:
    "Modern Sundanese uses the Latin alphabet, including the digraph eu for a central vowel and occasional é. The revived Aksara Sunda script appears on signage and in cultural projects but is not what Whisper returns. Register, rather than spelling, is the main editorial decision.",
  pitfalls: [
    "Speech levels such as lemes and loma are easy to confuse, especially in pronouns, verbs and greetings that change with the audience.",
    "The eu vowel can be misheard as e or u, changing the word, and the model may normalise it to a nearby Latin spelling.",
    "Indonesian code-switching is common, and the draft may use Indonesian vocabulary without marking the switch for the reviewer.",
    "Banten, Priangan and Cirebon varieties differ in sound and word choice, and the model may drift toward one regional standard.",
    "Personal and place names often have variant spellings, and a model cannot check which form the family or community prefers."
  ],
  tips: [
    "Identify the register early and check pronouns, verbs and greetings against it before you edit individual words.",
    "Listen for eu and confirm words where e, eu and u would all be plausible, especially in short cues with little context.",
    "Keep Indonesian insertions explicit rather than silently replacing them, because the audience may expect the original wording.",
    "Keep a glossary of local names, foods and cultural terms, and apply one spelling throughout the file.",
    "Ask a native reviewer to check a formal or ceremonial passage where the wrong register would be conspicuous.",
    "Test a cue with the eu digraph in the target player, since font fallback and encoding can affect how it appears. Compare digits with number words such as hiji and dua, because Indonesian numerals often replace Sundanese ones in speech."
  ],
  lineLengthNote:
    "Sundanese reads well at about 32 to 40 characters per line, with two lines as the practical maximum. The eu digraph and code-switched Indonesian can make a line look longer than its word count suggests. Break at phrase boundaries and keep register markers together. Test a cue with eu and a code-switched word in the player.",
  useCases:
    "Suits cultural documentation, local radio, vlogs, school recordings and family videos from West Java. It also helps translators who need a rough Sundanese draft before a native speaker checks register and dialect, and it keeps the recording local while the draft is prepared.",
  accuracyNote:
    "No reviewed Sundanese sample has been recorded, so this page is excluded from search. Register, the eu vowel, dialect variation and Indonesian code-switching are the least certain areas. Sundanese is thinly resourced in speech data compared with major languages, and we do not claim tested accuracy; every draft needs a human pass before publication.",
  example: {
    native: "Isuk-isuk urang papanggih di dieu. Kamar 402 aya di lantai opat.",
    translation: "Tomorrow morning we will meet here. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Isuk-isuk urang papanggih di dieu.

2
00:00:04,200 --> 00:00:08,000
Kamar 402 aya di lantai opat.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Sundanese?",
      answer:
        "Sundanese is present in the multilingual Whisper tokenizer used here, so it can be selected and transcribed in the browser. This page has no reviewed sample, so accuracy is not claimed and a native reviewer should still check register."
    },
    {
      question: "Does Whisper output the Aksara Sunda script?",
      answer:
        "No. Whisper normally returns Latin-script Sundanese. Aksara Sunda is a revived traditional script used in cultural contexts, but the model does not convert to it, and no romanization or script conversion is promised."
    },
    {
      question: "What is the difference between lemes and loma?",
      answer:
        "Lemes is the polite register and loma is the informal one, with different pronouns, verbs and greetings. A transcript can flatten the difference, so decide which register the video uses and check the cues against it."
    },
    {
      question: "Why does the eu vowel cause errors?",
      answer:
        "The eu digraph represents a central vowel that can sound close to e or u to a model trained on other languages. Confirm words where the choice changes meaning, and keep the spelling consistent once you decide."
    },
    {
      question: "Can I export Sundanese subtitles as SRT?",
      answer:
        "Yes. After editing, download SRT, VTT or TXT as UTF-8. Check that é and the eu digraph render correctly, and test a cue with Indonesian code-switching in the target player."
    },
    {
      question: "How accurate is Sundanese transcription?",
      answer:
        "No reviewed Sundanese sample has been recorded, so this page makes no tested accuracy claim. Register, dialect, the eu vowel, audio quality and model size can all affect the result, so treat the draft as a first pass."
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
