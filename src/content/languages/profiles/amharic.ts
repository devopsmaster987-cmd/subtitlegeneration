import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "am",
  summary:
    "Amharic is written in the Ethiopic script, where each fidel represents a consonant plus a vowel, and it uses its own punctuation marks. It is a Semitic language of Ethiopia with gemination and ejective consonants that are easy to miss in writing. VoiceToTextFree drafts Amharic cues locally, then you review fidel choices, punctuation and names before export. Homophone fidel and gemination are the main review points.",
  scriptNote:
    "Amharic uses the Ethiopic script, where each fidel represents a consonant plus a vowel. Word spacing is normal, but punctuation differs: ። marks a full stop, ፣ a comma and ፧ a question mark. Western digits are common, though Ethiopic numerals exist. Gemination and vowel length are not always marked. Fidel also vary in width, which affects line breaks.",
  pitfalls: [
    "Several fidel represent the same or similar sounds, so the model may choose a different but valid-looking character. Check doubtful words against a dictionary.",
    "Gemination and ejective consonants are not consistently written, and a wrong choice can change a word.",
    "Amharic punctuation such as ። and ፣ is often replaced with Latin periods and commas. The choice matters less than consistency.",
    "English code-switching can appear inside an Amharic cue, and the model may transliterate the English word, so the English term may be hard to recognise.",
    "Personal names and place names have variable spellings, especially when Latin transliteration is involved, so confirm them with the speaker."
  ],
  tips: [
    "Keep a glossary of recurring names and terms in the exact fidel spelling your publication uses, and keep it consistent.",
    "Check homophone fidel and restore the spelling used by the speaker or an official source, not just the most familiar-looking fidel.",
    "Use Ethiopic punctuation consistently, or follow a house style that deliberately uses Latin marks.",
    "Leave established English technical terms recognisable rather than forcing an invented Amharic form or inventing a translation.",
    "Verify numbers and dates, including calendar references, before export, then spot-check the rendered cue.",
    "Split cues at sentence boundaries so a long Amharic sentence does not become one crowded caption."
  ],
  lineLengthNote:
    "Ethiopic fidel are wide and visually tall, so fewer characters fit on a line than with Latin text. Keep captions to two lines, break at sentence or clause boundaries, and allow extra line height for marks above and below the baseline. Test the longest cue at phone size. Avoid three-line captions.",
  useCases:
    "Useful for Ethiopian news clips, church and community teaching, school lessons, documentary interviews and diaspora YouTube channels that mix Amharic with English. Editors can draft locally, then correct fidel spelling and punctuation before publishing SRT or VTT. They also serve bilingual community archives.",
  accuracyNote:
    "No reviewed Amharic sample has been recorded, so this page is excluded from search while the editorial content is checked. Homophone fidel, gemination, punctuation, names and English code-switching are weak areas, and Amharic is low-resource in speech data. We do not claim tested accuracy; results need editing, and a fluent reviewer should check every cue.",
  example: {
    native: "እንደምን አደሩ። ስብሰባው በዘጠኝ ሰዓት ይጀምራል።",
    translation: "Good morning. The meeting begins at nine o'clock.",
    srt: `1
00:00:01,000 --> 00:00:04,000
እንደምን አደሩ።

2
00:00:04,200 --> 00:00:08,000
ስብሰባው በዘጠኝ ሰዓት ይጀምራል።`
  },
  faqs: [
    {
      question: "Which script does Whisper use for Amharic?",
      answer:
        "Whisper normally returns Amharic in the Ethiopic script. It does not promise a romanized transliteration, and mixed English speech may produce Latin words inside an Amharic cue. Review the script before publishing."
    },
    {
      question: "Should Amharic subtitles use Ethiopic punctuation?",
      answer:
        "Either Ethiopic punctuation or a consistent Latin house style can work, but mixing them randomly looks untidy. The marks ።, ፣ and ፧ are the traditional full stop, comma and question mark, so check what your audience and platform expect."
    },
    {
      question: "Why are Amharic fidel sometimes wrong?",
      answer:
        "Amharic has several characters that sound alike, and the model may pick a different fidel with the same pronunciation. It can also miss gemination, which is not always written. Compare doubtful words with the audio and a trusted dictionary."
    },
    {
      question: "Do Amharic subtitles use Western or Ethiopic numerals?",
      answer:
        "Western digits are common in news, education and online text, while Ethiopic numerals appear in calendars and religious material. Choose one convention for the file and check dates, prices and phone numbers in the player."
    },
    {
      question: "Can I export Amharic captions for YouTube?",
      answer:
        "Yes. Export SRT or VTT, test on a private upload, and check that the platform's font renders the fidel correctly. Watch for clipped marks and crowded two-line cues on a phone."
    },
    {
      question: "How accurate is Amharic transcription?",
      answer:
        "We have not recorded a reviewed Amharic sample, so this page does not claim a tested accuracy level. Accent, audio quality and code-switching affect results, and the page stays excluded from search until a review is recorded."
    }
  ],
  sources: [
    { label: "Unicode — Ethiopic chart", url: "https://www.unicode.org/charts/PDF/U1200.pdf" },
    { label: "W3C — WebVTT specification", url: "https://www.w3.org/TR/webvtt1/" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" }
  ]
};
