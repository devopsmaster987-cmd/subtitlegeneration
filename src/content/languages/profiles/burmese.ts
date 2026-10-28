import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "my",
  summary:
    "Burmese is written in the Myanmar script, with circular letters, stacked consonants and vowel signs that surround the base character. Words are usually run together, and spaces mark phrases or clauses rather than every word. VoiceToTextFree drafts Burmese cues locally, then you review stacked consonants, word boundaries and names before exporting SRT, VTT or TXT. Names and encoding also need a careful review. Regional speech varies, and Burmese is comparatively low-resource for speech models. Tone is not marked in the script, so context and audio decide the reading.",
  scriptNote:
    "Burmese uses the Myanmar script, written left to right with circular letters and stacked consonants. Words are usually run together, with spaces marking phrases or clauses. Burmese digits ၀–၉ are common, and ။ marks a full stop while ၊ marks a comma. Older Zawgyi text looks similar but is encoded differently from Unicode. Encoding matters more than the font choice.",
  pitfalls: [
    "The model may insert spaces inside words or join separate clauses, because Burmese does not mark every word boundary. Burmese segmentation is genuinely ambiguous.",
    "Stacked consonants and medial signs can be dropped or misordered, changing the sound of a syllable. Check each cluster against the audio.",
    "Zawgyi and Unicode text can look alike but are stored differently, so a mis-encoded file may display incorrectly. Confirm the encoding before publishing.",
    "English loanwords and code-switching can appear in Latin letters inside a Burmese cue.",
    "Names, place names and titles have variable transliterations, and digits may mix Burmese and Western forms, so keep one convention."
  ],
  tips: [
    "Confirm that the exported text is Unicode rather than Zawgyi before you publish, and check the whole file.",
    "Review stacked consonants and medial signs on long and technical words rather than only the common words.",
    "Check phrase boundaries instead of accepting every space the model inserted.",
    "Keep a glossary of names, titles and organisations in one agreed Burmese spelling and confirm them locally.",
    "Choose Burmese or Western digits for the whole file and test dates, prices and phone numbers, then spot-check the rendered cue.",
    "Break cues at clause boundaries and avoid leaving one short syllable alone on a second line. A single stray syllable looks untidy."
  ],
  lineLengthNote:
    "Myanmar letters are round and wide, and stacked consonants add height above and below the baseline. Keep captions to two lines, break at clause boundaries and allow extra line height. Test the longest cue at phone size so stacked signs and vowel marks are not clipped. Avoid three-line captions.",
  useCases:
    "Useful for Burmese news clips, community and health videos, school lessons, documentary interviews and diaspora YouTube channels that mix Burmese with English. Editors can draft locally, then correct word boundaries and stacked consonants before publishing a reviewed caption track. They also serve bilingual community archives.",
  accuracyNote:
    "No reviewed Burmese sample has been recorded, so this page is excluded from search while the editorial content is checked. Word segmentation, stacked consonants, Zawgyi versus Unicode, names and code-switching are weak areas, and Burmese is low-resource for speech data. We do not claim tested accuracy; results are uneven and need editing, so a fluent Burmese reviewer should check every cue.",
  example: {
    native: "မင်္ဂလာပါ။ နေကောင်းလား။ အစည်းအဝေးက ကိုးနာရီမှာ စမယ်။",
    translation: "Hello. Are you well? The meeting will start at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
မင်္ဂလာပါ။ နေကောင်းလား။

2
00:00:04,200 --> 00:00:08,000
အစည်းအဝေးက ကိုးနာရီမှာ စမယ်။`
  },
  faqs: [
    {
      question: "Does Whisper output Burmese in Unicode or Zawgyi?",
      answer:
        "The normal output is Unicode Myanmar text, not the older Zawgyi encoding. The two can look similar, so confirm that your editor and player treat the file as Unicode before publishing."
    },
    {
      question: "Why are Burmese words not separated by spaces?",
      answer:
        "Burmese normally writes words together and uses spaces between phrases or clauses. The model may insert spaces at inconsistent points, so review phrase boundaries rather than assuming every gap is a word break."
    },
    {
      question: "What punctuation does Burmese use?",
      answer:
        "The mark ။ is a full stop and ၊ is a comma. Modern text also uses Latin punctuation, so pick one house style and check how the target player renders the marks."
    },
    {
      question: "Should Burmese subtitles use Burmese or Western digits?",
      answer:
        "Burmese digits ၀–၉ are common, while Western digits appear in technical and online text. Choose one convention for the file and test dates, prices and phone numbers in the player."
    },
    {
      question: "Can I export Burmese captions for YouTube?",
      answer:
        "Yes. Export SRT or VTT, test on a private upload, and check that stacked consonants and vowel signs render correctly. Watch for clipped signs and crowded two-line cues on a phone."
    },
    {
      question: "How accurate is Burmese transcription?",
      answer:
        "We have not recorded a reviewed Burmese sample, so this page does not claim a tested accuracy level. Accent, audio quality, word segmentation and code-switching affect results, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode — Myanmar chart", url: "https://www.unicode.org/charts/PDF/U1000.pdf" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
