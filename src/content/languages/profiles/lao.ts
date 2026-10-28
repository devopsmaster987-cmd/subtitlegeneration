import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "lo",
  summary:
    "Lao is a tonal language written in its own script, with vowel signs placed before, after, above or below consonants, and with tone marks as part of the spelling. Words are not separated by spaces in the usual way, and modern text often uses Latin punctuation. Punctuation should stay consistent across the file. VoiceToTextFree drafts Lao cues locally, then you review vowels, tone marks and names before export. Vowel placement and tone marks are the main review points. Regional speech varies, and Lao is low-resource for speech models.",
  scriptNote:
    "Lao is written left to right in the Lao script. Vowel signs can appear before, after, above or below a consonant, and tone marks are part of the spelling. Words are not normally separated by spaces; spaces mark phrase boundaries. Lao digits ໐–໙ appear alongside Western digits, and modern text often uses Latin punctuation.",
  pitfalls: [
    "Vowel signs can be dropped or attached to the wrong consonant, which changes the syllable and sometimes the word. Check each syllable against the audio.",
    "Tone marks are easy to omit, and a missing mark can make a correctly spelled word read incorrectly.",
    "The model may insert spaces inside words or fail to separate phrases, because Lao does not mark every word boundary. Phrase boundaries change the reading.",
    "Lao and Thai share many loanwords and similar sounds, so the draft may choose a Thai-like spelling.",
    "Names, place names and organisation names have variable transliterations, and digits may mix Lao and Western forms."
  ],
  tips: [
    "Check vowel placement around each consonant, especially in long or unfamiliar words.",
    "Restore tone marks where the source uses them, and do not add marks that the speaker did not say; check each occurrence.",
    "Review phrase boundaries instead of assuming every space the model inserted is correct.",
    "Keep a glossary of names and technical terms, and decide whether loanwords stay in Lao script, and keep the chosen form.",
    "Choose Lao or Western digits for the whole file and test dates, prices and phone numbers.",
    "Break cues at phrase boundaries and avoid leaving one short word alone on a second line. Avoid splitting a phrase mid-clause."
  ],
  lineLengthNote:
    "Lao letters and vowel signs can stack above and below the baseline, so a short cue may still need extra height. Keep captions to two lines, break at phrase boundaries and allow room for tone marks. Test the longest cue at phone size before publishing. Avoid three-line captions.",
  useCases:
    "Useful for Lao news clips, community and health videos, school material, documentary interviews and YouTube channels that mix Lao with Thai or English. Editors can draft locally, then correct vowels and tone marks before publishing a reviewed Lao caption track. They also serve bilingual community archives.",
  accuracyNote:
    "No reviewed Lao sample has been recorded, so this page is excluded from search while the editorial content is checked. Vowel placement, tone marks, word boundaries, Thai-like spellings and mixed digits are weak areas, and Lao is low-resource for speech data. We do not claim tested accuracy; results are uneven and need editing, so a fluent Lao reviewer should check every cue.",
  example: {
    native: "ສະບາຍດີ. ສົບສະບາຍດີບໍ? ການປະຊຸມຈະເລີ່ມເວລາເກົ້າໂມງ.",
    translation: "Hello. How are you? The meeting will begin at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
ສະບາຍດີ. ສົບສະບາຍດີບໍ?

2
00:00:04,200 --> 00:00:08,000
ການປະຊຸມຈະເລີ່ມເວລາເກົ້າໂມງ.`
  },
  faqs: [
    {
      question: "Is Lao written with the same script as Thai?",
      answer:
        "No. Lao has its own script, although the two languages share loanwords and some similar letters. Whisper may produce a Thai-like spelling for a Lao word, so a Lao reviewer should check doubtful forms rather than treating the scripts as interchangeable."
    },
    {
      question: "Why are Lao words not separated by spaces?",
      answer:
        "Lao normally writes words together and uses spaces between phrases. The model may insert spaces at inconsistent points, so review phrase boundaries and do not assume every gap is a word break."
    },
    {
      question: "Does Whisper include Lao tone marks?",
      answer:
        "Not reliably. Tone marks are part of Lao spelling, but the model may omit them or place them inconsistently. Restore marks from the audio or a trusted source, and avoid guessing where the tone is unclear."
    },
    {
      question: "Should Lao subtitles use Lao or Western digits?",
      answer:
        "Both appear in modern material. Lao digits ໐–໙ are traditional, while Western digits are common online and in technical text. Choose one convention for the file and check dates, prices and phone numbers in the player."
    },
    {
      question: "Can I export Lao captions for YouTube?",
      answer:
        "Yes. Export SRT or VTT, test on a private upload, and check that vowel signs and tone marks render correctly. Watch for clipped marks and crowded two-line cues on a phone."
    },
    {
      question: "How accurate is Lao transcription?",
      answer:
        "We have not recorded a reviewed Lao sample, so this page does not claim a tested accuracy level. Accent, audio quality, tone and code-switching affect results, and the page remains excluded from search until review is complete."
    }
  ],
  sources: [
    { label: "Unicode — Lao chart", url: "https://www.unicode.org/charts/PDF/U0E80.pdf" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
