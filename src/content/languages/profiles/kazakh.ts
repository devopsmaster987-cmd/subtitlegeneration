import type { LanguageProfile } from "../profile-types";

export const profile: LanguageProfile = {
  code: "kk",
  summary:
    "Kazakh is a Turkic language of Kazakhstan, written in Cyrillic today while a Latin reform is still being introduced. VoiceToTextFree runs Whisper in the browser, drafts Cyrillic Kazakh locally and lets you correct cues before exporting SRT or VTT. Russian code-switching is common, and the model does not promise a Latin transliteration, so a separate conversion is needed if the audience expects Latin.",
  scriptNote:
    "Kazakh Cyrillic adds ә, ғ, қ, ң, ө, ұ, ү, һ and і. Vowel harmony and agglutinative endings are central, and Russian loanwords may keep Russian spelling. A Latin alphabet has been adopted on paper, but everyday publishing and Whisper output still favour Cyrillic, so do not expect a Latin draft.",
  pitfalls: [
    "Vowel harmony can fail, producing a suffix from the wrong series, and the word may still look plausible.",
    "The letters ә, ғ, қ, ң, ө, ұ, ү, һ and і are easily confused with Russian lookalikes, especially in names.",
    "Russian code-switching may be transcribed in Russian spelling and syntax, and the model may not mark the boundary.",
    "Long case and possessive chains can be shortened by the model, especially in fast speech or noisy recordings.",
    "Names may follow Russian transliteration instead of Kazakh conventions, and northern, southern and western speech can differ in vocabulary."
  ],
  tips: [
    "Check suffix vowels for harmony and restore any dropped case ending before publishing.",
    "Confirm the nine extra Cyrillic letters in names and technical terms, and test the font.",
    "Decide whether Russian insertions stay in Russian or are adapted, then be consistent across the file.",
    "Keep a glossary of places, institutions and public figures in the spelling your audience expects.",
    "Do not assume the Latin reform is reflected in the transcript, and do not promise a Latin version.",
    "Ask a Kazakh reviewer to check a passage with long suffix chains, where harmony errors are easiest to miss."
  ],
  lineLengthNote:
    "Cyrillic Kazakh is wide, so 28 to 36 characters per line is a sensible target. Agglutinated words and Russian insertions fill a cue quickly; keep two lines and break between phrases. Never split a suffix, and test the font on a phone before publishing. A cue with ө, ұ and қ is a useful check.",
  useCases:
    "Suits Kazakh interviews, news and documentary footage, classroom recordings, community videos and family archives. It also helps translators who need a rough Cyrillic draft before a native editor checks harmony and Russian mixing, and it keeps the recording local while the draft is prepared.",
  accuracyNote:
    "No reviewed Kazakh sample has been recorded, so this page is excluded from search. Kazakh speech data is limited compared with major languages, and vowel harmony, the extra Cyrillic letters and Russian code-switching are the least certain areas. We do not claim tested accuracy; every draft needs a native review and editing.",
  example: {
    native: "Біз ертең таңертең кездесеміз. 402-ші бөлме төртінші қабатта.",
    translation: "We will meet tomorrow morning. Room 402 is on the fourth floor.",
    srt: `1
00:00:01,000 --> 00:00:04,000
Біз ертең таңертең кездесеміз.

2
00:00:04,200 --> 00:00:08,000
402-ші бөлме төртінші қабатта.`
  },
  faqs: [
    {
      question: "Does VoiceToTextFree support Kazakh?",
      answer:
        "Kazakh is in the multilingual Whisper tokenizer used by this site, so it can be selected and transcribed in the browser. This page has no reviewed sample, so accuracy is not claimed and the draft still needs a native reviewer."
    },
    {
      question: "Does Whisper output Kazakh in the new Latin alphabet?",
      answer:
        "No. Whisper normally returns Cyrillic Kazakh, which remains the practical script for most publishing. The Latin reform is still being rolled out, so treat a Latin version as a separate conversion rather than an expected model output."
    },
    {
      question: "What is vowel harmony in Kazakh?",
      answer:
        "Suffix vowels usually match the front or back vowels of the stem, with additional rounding contrasts. If the model chooses the wrong series, a case or possessive ending can look plausible but be incorrect. Check the ending against the audio."
    },
    {
      question: "How should I handle Russian words in Kazakh audio?",
      answer:
        "Russian insertions may keep Russian spelling and even Russian syntax inside a Kazakh cue. Decide whether the audience expects that or an adapted form, then apply one rule instead of mixing conventions."
    },
    {
      question: "Can I export Kazakh subtitles as SRT?",
      answer:
        "Yes. Edit the cues and download SRT, VTT or TXT as UTF-8. Check that ә, ғ, қ, ң, ө, ұ, ү, һ and і render correctly in the target player, since fonts can vary."
    },
    {
      question: "How accurate is Kazakh transcription?",
      answer:
        "No reviewed Kazakh sample has been recorded, so this page makes no tested accuracy claim. Vowel harmony, extra letters, Russian mixing, audio quality and model size all affect recognition, so treat the draft as a first pass."
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
