import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "yo",
  summary:
    "Yoruba is a tonal language written in a Latin alphabet with subdots and tone marks, and those marks can change both pronunciation and meaning. VoiceToTextFree drafts Yoruba cues locally in the browser, so you can review spelling, tone and names before exporting SRT, VTT or TXT. The draft is a first pass for a human editor, not a measured or publish-ready transcript. Tone and vowel length deserve particular attention.",
  scriptNote:
    "Yoruba uses Latin letters plus ẹ, ọ and ṣ and tone marks such as á, à and the optional macron. The digraphs gb and kp act as single sounds. Many writers omit tone marks online, but the marks distinguish words, so restore them where meaning matters. Subdots and tone marks can appear on the same vowel. Punctuation follows Latin conventions.",
  pitfalls: [
    "Tone marks and subdots are often dropped or attached to the wrong vowel, which can change a word's meaning. Tone is lexical in Yoruba, not decorative.",
    "Personal names and place names have several accepted spellings, and the model may choose one that differs from your source, so confirm names with the speaker.",
    "English-Yoruba code-switching can leave English terms in Latin spelling beside Yoruba words, sometimes inside the same cue.",
    "Numbers may appear as Western digits or as spelled-out Yoruba words such as mẹ́ta, so check both forms and choose one convention.",
    "Regional and orthographic variation, including omitted diacritics, makes a single spelling standard difficult to apply."
  ],
  tips: [
    "Keep a glossary of recurring personal names, towns and organisations with the exact diacritics you use, and keep it consistent.",
    "Restore tone marks and subdots on words whose meaning depends on them rather than marking every syllable.",
    "Read each cue aloud to check tone and vowel length against what the speaker actually says, then recheck the rendered result.",
    "Keep established English loanwords in their usual spelling and do not force them into Yoruba orthography.",
    "Apply one digit convention throughout the file and test dates, prices and phone numbers in the player.",
    "Split cues at natural pauses; Yoruba sentences can be long even when the word count looks small. Never split a word."
  ],
  lineLengthNote:
    "Yoruba words can be long, and diacritics add visual height without adding characters. Keep captions to about two lines, break at clause boundaries, and allow extra line spacing so stacked marks do not collide. Test the longest cue at phone size and confirm that tone marks render in the player's font. Avoid three-line captions.",
  useCases:
    "Useful for church and community videos, YouTube interviews, school lessons, oral-history archives and diaspora family recordings that mix Yoruba with English. Editors can draft cues locally, then correct tone marks and names before publishing a Yoruba-only or bilingual track. They also suit family and community archives.",
  accuracyNote:
    "No reviewed Yoruba sample has been recorded, so this page is excluded from search while the editorial content is checked. Tone marks, subdots, name spellings and English code-switching are the weakest areas, and Yoruba is low-resource in speech data. We do not claim tested accuracy; treat every draft as a first pass that still needs editing by a fluent reviewer.",
  example: {
    native: "Ẹ káàrọ̀, ṣé àlàáfíà ni? Àpéjọ yóò bẹ̀rẹ̀ ní aago mẹ́sàn-án.",
    translation: "Good morning, are you well? The meeting will begin at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Ẹ káàrọ̀, ṣé àlàáfíà ni?

2
00:00:04,200 --> 00:00:08,000
Àpéjọ yóò bẹ̀rẹ̀ ní aago mẹ́sàn-án.`
  },
  faqs: [
    {
      question: "Does this Yoruba subtitle generator upload my audio?",
      answer:
        "No. The Whisper model runs in the browser for this workflow, so the audio is processed on your device rather than sent to a transcription server. Check your browser settings and get consent before transcribing someone else's recording."
    },
    {
      question: "Does Whisper write Yoruba tone marks correctly?",
      answer:
        "Not reliably. The model often returns Yoruba without tone marks or subdots, or places marks on the wrong vowel. Treat diacritics as an editorial task and restore them from the audio or a trusted source."
    },
    {
      question: "What script does the Yoruba output use?",
      answer:
        "Whisper normally returns Yoruba in the Latin alphabet. It does not promise a romanized conversion because Yoruba is already written in Latin script, and mixed English speech may appear in the same cue."
    },
    {
      question: "Can I export Yoruba subtitles for YouTube?",
      answer:
        "Yes. Export SRT or VTT, upload it to a private copy of the video first, and check the rendered captions on desktop and phone. YouTube uses its own font stack, so diacritics may look different from your editor."
    },
    {
      question: "How should I handle Yoruba names and places?",
      answer:
        "Confirm spellings with the speaker or an official source and keep a glossary. Yoruba names often carry tone marks and subdots that the model may omit, and a consistent spelling is easier for viewers to recognise."
    },
    {
      question: "How accurate is Yoruba transcription?",
      answer:
        "We have not recorded a reviewed Yoruba sample, so this page does not claim a tested accuracy level. Results vary with accent, audio quality, background noise and model size, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode CLDR — Yoruba locale data", url: "https://cldr.unicode.org/" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
