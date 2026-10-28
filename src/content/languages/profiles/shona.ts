import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "sn",
  summary:
    "Shona is a Bantu language of Zimbabwe written in a Latin alphabet with digraphs such as ch, dh, dz, sv, zv and zh. Standard orthography does not mark tone, so written words can be ambiguous, and English code-switching is common in towns and media. VoiceToTextFree drafts Shona cues locally, then you review digraphs, names and mixed-language lines before export. Names and dialect vocabulary also need review. Shona is comparatively low-resource for speech models, so drafts need editing.",
  scriptNote:
    "Shona uses a Latin alphabet with digraphs such as ch, dh, dz, sv, zv and zh, and letters such as v and vh that represent distinct sounds. Standard orthography does not mark tone. Punctuation follows Latin conventions, and English loanwords are common in everyday speech and technical content. Consistency matters more than the spelling variant.",
  pitfalls: [
    "Digraphs are sometimes split or replaced with single letters, which changes the word on screen. Each digraph represents one sound.",
    "Tone is not written in standard Shona, but the model may still choose the wrong word from context. Context is the only guide.",
    "English code-switching can leave English phrases inside a Shona cue without any marker, so decide how to mark them.",
    "Names, place names and clan names have variable spellings, especially in English-language sources, so confirm them locally.",
    "Regional varieties such as Zezuru, Karanga, Manyika and Korekore differ in vocabulary and pronunciation. Match the speaker's variety."
  ],
  tips: [
    "Check digraphs such as ch, dh, dz, sv, zv and zh rather than accepting an English-like spelling, and check the whole file.",
    "Keep a glossary of recurring names and place names in one agreed spelling and confirm them locally.",
    "Leave established English loanwords in the form your audience uses, and mark or translate them deliberately.",
    "Do not invent tone marks; standard written Shona usually leaves tone unmarked.",
    "Verify numbers, times and dates, and choose digits or spelled-out forms consistently, then spot-check the rendered cue.",
    "Break cues at clause boundaries and avoid splitting a digraph or word across two captions. A split digraph is hard to read."
  ],
  lineLengthNote:
    "Shona words can be long because prefixes and suffixes attach to the root, so a modest character count can still fill a line. Keep captions to two lines, break at clause boundaries and avoid splitting a word. Test the longest cue on a phone before publishing. Avoid three-line captions.",
  useCases:
    "Useful for Zimbabwean news clips, community and health videos, school lessons, church teaching and YouTube interviews that mix Shona with English. Editors can draft locally, then correct digraphs and names before publishing a reviewed Shona caption track. They also serve bilingual community archives.",
  accuracyNote:
    "No reviewed Shona sample has been recorded, so this page is excluded from search while the editorial content is checked. Digraphs, unmarked tone, dialect vocabulary and English code-switching are weak areas, and Shona is low-resource for speech data. We do not claim tested accuracy; results are uneven and need editing, so a fluent Shona reviewer should check every cue.",
  example: {
    native: "Mangwanani, wakadini? Musangano uchatanga na9.",
    translation: "Good morning, how are you? The meeting will start at nine.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Mangwanani, wakadini?

2
00:00:04,200 --> 00:00:08,000
Musangano uchatanga na9.`
  },
  faqs: [
    {
      question: "Does Whisper write Shona with tone marks?",
      answer:
        "Standard Shona orthography does not mark tone, so the normal output is plain Latin text. The model does not promise tone marking, and adding marks by guesswork can make a cue less accurate rather than more."
    },
    {
      question: "Why are Shona digraphs sometimes wrong?",
      answer:
        "English-trained models may split ch, dh, dz, sv, zv or zh into separate letters or substitute a similar spelling. Check these combinations during review because they represent single sounds in Shona."
    },
    {
      question: "Which Shona variety should I use?",
      answer:
        "There is no single spoken variety that covers every community. Zezuru, Karanga, Manyika and Korekore differ in vocabulary, and urban speech often mixes English. Match the speaker's variety and have a reviewer confirm local usage."
    },
    {
      question: "Can I export Shona subtitles as SRT or VTT?",
      answer:
        "Yes. Edit the cues, then download SRT, VTT or TXT. Check names, digraphs and any mixed English lines in the player before publishing."
    },
    {
      question: "How should I handle English words in Shona speech?",
      answer:
        "Code-switching is normal, so decide whether to keep the English term, translate it or mark it. Apply that choice consistently, and do not leave a cue with an unexplained switch that changes the meaning."
    },
    {
      question: "How accurate is Shona transcription?",
      answer:
        "We have not recorded a reviewed Shona sample, so this page does not claim a tested accuracy level. Accent, audio quality, dialect and code-switching affect results, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode CLDR — Shona locale data", url: "https://cldr.unicode.org/" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
