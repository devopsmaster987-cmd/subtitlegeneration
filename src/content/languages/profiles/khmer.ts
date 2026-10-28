import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "km",
  summary:
    "Khmer is written in its own script, with stacked consonants and vowel signs that wrap around the main letter, and ordinary text does not put spaces between every word. Khmer digits and Western digits both appear in modern material. VoiceToTextFree drafts Khmer cues locally in the browser, then you review word boundaries, subscripts and names before exporting SRT, VTT or TXT. Names and mixed digits also need review. Regional speech varies, and Khmer is comparatively low-resource for speech models.",
  scriptNote:
    "Khmer is written left to right in a script of stacked consonants and vowel signs. Ordinary text does not put spaces between every word; spaces separate phrases. Subscript consonants and diacritics change pronunciation, and the khan ។ marks a full stop. Khmer digits ០–៩ appear alongside Western digits. Khmer text also uses Latin punctuation in modern media.",
  pitfalls: [
    "The model may insert spaces inside words or join separate phrases, because Khmer does not mark every word boundary. Khmer segmentation is genuinely ambiguous.",
    "Subscript consonants and vowel signs can be dropped or misplaced, changing the pronunciation of a syllable. Check each cluster against the audio.",
    "Khmer names and place names have several transliterations, and the Latin spelling may not match the Khmer text.",
    "French and English loanwords may be written phonetically or left in Latin script inside a Khmer cue, so keep one form consistently.",
    "Khmer digits and Western digits can appear in the same file, so number styles may be inconsistent."
  ],
  tips: [
    "Review word and phrase boundaries rather than trusting every space the model inserts, and keep the file consistent.",
    "Check stacked consonants and vowel signs on the longest and most technical words rather than only the common words.",
    "Keep a glossary of names, organisations and place names in one Khmer spelling, and confirm them locally.",
    "Decide whether loanwords stay in Khmer script or Latin script, then apply that choice consistently.",
    "Choose Khmer or Western digits for the whole file and test dates, prices and phone numbers.",
    "Break cues at phrase boundaries and avoid leaving a single short word alone on a second line. A single stray word looks untidy."
  ],
  lineLengthNote:
    "Khmer clusters are tall, and a single syllable can include a main consonant, a subscript and vowel signs above and below. Keep captions to two lines, allow extra line height and break at phrase boundaries. Test the longest cue at phone size so stacked marks are not clipped. Avoid three-line captions.",
  useCases:
    "Useful for Cambodian news clips, NGO and health explainers, school lessons, documentary interviews and YouTube channels that mix Khmer with English. Editors can draft locally, then correct word boundaries and names before publishing a reviewed Khmer subtitle track. They also serve bilingual community archives.",
  accuracyNote:
    "No reviewed Khmer sample has been recorded, so this page is excluded from search while the editorial content is checked. Word segmentation, subscript consonants, vowel signs, names and mixed digits are weak areas, and Khmer is low-resource for speech data. We do not claim tested accuracy; results are uneven and need editing, so a fluent Khmer reviewer should check every cue.",
  example: {
    native: "ជម្រាបសួរ។ សុខសប្បាយទេ? ការប្រជុំនឹងចាប់ផ្តើមនៅម៉ោងប្រាំបួន។",
    translation: "Hello. Are you well? The meeting will begin at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
ជម្រាបសួរ។ សុខសប្បាយទេ?

2
00:00:04,200 --> 00:00:08,000
ការប្រជុំនឹងចាប់ផ្តើមនៅម៉ោងប្រាំបួន។`
  },
  faqs: [
    {
      question: "Why does Khmer text have so few spaces?",
      answer:
        "Khmer normally writes words together and uses spaces between phrases, not between every word. Whisper may insert spaces at inconsistent points, so review word and phrase boundaries rather than accepting the draft layout as correct."
    },
    {
      question: "Does Whisper output Khmer in its own script?",
      answer:
        "Yes, the normal output is Khmer script. It does not promise a romanized transliteration, and English or French loanwords may appear in Latin letters inside a Khmer cue. Review the script before publishing."
    },
    {
      question: "What punctuation does Khmer use in subtitles?",
      answer:
        "The khan ។ is the traditional full stop. Modern text also uses Latin question marks, commas and quotation marks, so follow one house style consistently and check how the player renders the marks."
    },
    {
      question: "Should Khmer subtitles use Khmer or Western digits?",
      answer:
        "Both are common. Khmer digits ០–៩ appear in formal and older material, while Western digits are frequent online. Choose one style for the file and test dates, prices and phone numbers in the target player."
    },
    {
      question: "Can I export Khmer captions for YouTube?",
      answer:
        "Yes. Export SRT or VTT, test on a private upload, and check that stacked consonants and vowel signs render correctly. Watch for clipped marks and crowded two-line cues on a phone."
    },
    {
      question: "How accurate is Khmer transcription?",
      answer:
        "We have not recorded a reviewed Khmer sample, so this page does not claim a tested accuracy level. Accent, audio quality, word segmentation and code-switching affect results, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode — Khmer chart", url: "https://www.unicode.org/charts/PDF/U1780.pdf" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
