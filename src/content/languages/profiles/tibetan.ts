import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "bo",
  summary:
    "Tibetan is written in its own script, with syllables separated by the tsheg mark and phrases closed by a shad, and spoken varieties differ considerably across regions. Written Tibetan does not always match everyday speech, and the language is comparatively low-resource for speech models. VoiceToTextFree drafts Tibetan cues locally, then you review syllables, punctuation and names before export. Syllable boundaries and punctuation are the main review points.",
  scriptNote:
    "Tibetan is written left to right in its own script. Syllables are separated by the tsheg ་ rather than by spaces between words, and the shad ། marks a pause or the end of a phrase. Stacked consonants and vowel signs change pronunciation. Regional spoken varieties differ, and written Tibetan does not always match the spoken form. Keep punctuation consistent.",
  pitfalls: [
    "The tsheg ་ can be dropped or replaced with an ordinary space, which breaks the expected syllable structure. The tsheg is structural, not decorative.",
    "The shad ། is often missing or replaced with a Latin full stop, so phrase boundaries look wrong. Check each phrase ending against the audio.",
    "Stacked consonants and vowel signs may be omitted or misordered, changing the pronunciation of a syllable. Check each stack against a dictionary.",
    "Spoken dialects such as Ü-Tsang, Kham and Amdo differ, and the draft may not match the speaker's variety.",
    "Chinese or English code-switching and loanwords may appear in the wrong script inside a Tibetan cue, so review the script choice."
  ],
  tips: [
    "Preserve the tsheg between syllables, do not replace it with an ordinary space, and check the whole file.",
    "Restore shad marks where the source uses them, and keep one punctuation style through the file.",
    "Check stacked consonants and vowel signs on long or unfamiliar words rather than only the common words.",
    "Keep a glossary of names, monasteries and place names in the spelling your audience expects, and confirm them locally.",
    "Verify numbers and dates, and choose Tibetan or Western digits consistently, then spot-check the rendered cue.",
    "Keep cues short and split at phrase boundaries, because Tibetan syllable clusters can be visually heavy. Avoid splitting a syllable cluster."
  ],
  lineLengthNote:
    "Tibetan syllable clusters can be tall because consonants stack and vowel signs sit above or below the baseline. Keep captions to two lines, break at phrase boundaries and allow extra line height. Test the longest cue at phone size so stacks and marks are not clipped. Avoid three-line captions.",
  useCases:
    "Useful for cultural and documentary interviews, monastic teaching, community videos, diaspora YouTube channels and oral-history archives. Editors can draft locally, then correct syllables and punctuation before publishing a reviewed Tibetan caption track or transcript. They also serve bilingual community archives.",
  accuracyNote:
    "No reviewed Tibetan sample has been recorded, so this page is excluded from search while the editorial content is checked. Dialect variation, spoken-versus-written differences, tsheg and shad punctuation, and limited training data are weak areas, and Tibetan is low-resource for speech data. We do not claim tested accuracy; results are uneven and need editing, so a fluent reviewer should check every cue.",
  example: {
    native: "བཀྲ་ཤིས་བདེ་ལེགས། ཚོགས་འདུ་ཆུ་ཚོད་དགུ་པར་འགོ་འཛུགས་རྒྱུ་རེད།",
    translation: "Tashi delek. The meeting will begin at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
བཀྲ་ཤིས་བདེ་ལེགས།

2
00:00:04,200 --> 00:00:08,000
ཚོགས་འདུ་ཆུ་ཚོད་དགུ་པར་འགོ་འཛུགས་རྒྱུ་རེད།`
  },
  faqs: [
    {
      question: "Does Whisper support Tibetan script?",
      answer:
        "Tibetan is included in the multilingual Whisper tokenizer, so it can be selected, but it is a comparatively low-resource language for speech recognition. The draft still needs a fluent reviewer and should not be treated as a finished transcript."
    },
    {
      question: "What are the tsheg and shad marks?",
      answer:
        "The tsheg ་ separates syllables, and the shad ། marks a pause or the end of a phrase. They are not decorative. Losing or replacing them changes how the text is read, so check them during review."
    },
    {
      question: "Which Tibetan dialect should I choose?",
      answer:
        "There is no single spoken standard that covers all Tibetan communities. Ü-Tsang, Kham and Amdo varieties differ, and diaspora speech may mix them. Match the speaker's variety and have a reviewer confirm local vocabulary."
    },
    {
      question: "Why does written Tibetan differ from the audio?",
      answer:
        "Written Tibetan preserves historical spellings that are not pronounced as written in every variety. A model may produce a spelling that looks plausible but does not match the speaker's pronunciation, so compare doubtful words with a trusted source."
    },
    {
      question: "Can I export Tibetan captions for YouTube?",
      answer:
        "Yes. Export SRT or VTT, test on a private upload, and check that stacked consonants and vowel signs render correctly. Watch for clipped marks and crowded cues on a phone."
    },
    {
      question: "How accurate is Tibetan transcription?",
      answer:
        "We have not recorded a reviewed Tibetan sample, so this page does not claim a tested accuracy level. Dialect, audio quality and limited training data affect results, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode — Tibetan chart", url: "https://www.unicode.org/charts/PDF/U0F00.pdf" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
