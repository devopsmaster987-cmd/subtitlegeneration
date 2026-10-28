import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "ta",
  slug: "tamil",
  nativeName: "தமிழ்",
  path: "/subtitle-generator/tamil",
  h1: "Tamil subtitle generator",
  title: "Tamil subtitle generator — private, browser-based Whisper",
  metaDescription:
    "Use the Tamil subtitle generator to transcribe தமிழ் audio locally in your browser, review Tamil script, names and numerals, then export SRT, VTT or TXT.",
  primaryKeyword: "tamil subtitle generator",
  capsule:
    "Use this Tamil subtitle generator to transcribe தமிழ் audio locally in your browser, then review the Tamil script, punctuation, names and numerals before exporting SRT, VTT or TXT. No upload or account is required. No reviewed Tamil sample has been recorded yet, so no accuracy is claimed and this page stays out of search.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Tamil sample has been recorded for VoiceToTextFree. This page is therefore excluded from search with noindex, and no tested accuracy is claimed. The browser-based tool still works: select Tamil, transcribe locally and review every cue before export.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "ta" },
    { label: "Native name", value: "தமிழ்" },
    { label: "Script", value: "Tamil (Unicode U+0B80–U+0BFF)" },
    { label: "Script type", value: "Abugida (alphasyllabary)" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia" },
    { label: "Output", value: "SRT, VTT and TXT" }
  ],
  sections: [
    {
      heading: "What the Tamil subtitle generator does",
      paragraphs: [
        "VoiceToTextFree runs a multilingual Whisper model on your device in the browser. Tamil is present in the model's language tokenizer, so you can select ta and transcribe Tamil audio without sending the recording to a transcription server. The first run may download model files; after that, the audio and the transcript stay on the machine.",
        "The page is a working tool, not a claim of measured accuracy. No reviewed Tamil sample has been logged for VoiceToTextFree, so the page carries noindex and makes no accuracy promise. Choose Tamil, generate a draft, then listen again and correct the script, spelling, names, numbers and cue breaks before export. The output is SRT, VTT or TXT."
      ]
    },
    {
      heading: "Tamil script and punctuation",
      paragraphs: [
        "Tamil uses its own left-to-right script, an abugida in which each consonant carries an inherent vowel. Traditional grammar describes 12 vowels, 18 consonants and 216 combinable vowel-consonant letters. The pulli, a dot above a consonant, removes the inherent vowel, and the aytham is a separate Tamil letter. Letters such as ஜ, ஷ, ஸ and ஹ are Grantha forms used in loanwords.",
        "Tamil has no uppercase and lowercase, so a transcript will not capitalise names or sentence openings. Modern publishing generally uses the Western full stop, comma, question mark and quotation marks; older Tamil punctuation exists but is not standard in contemporary subtitles. Check spaces around punctuation and keep every base letter with its vowel sign and pulli."
      ]
    },
    {
      heading: "Long compounds and Tamil agglutination",
      paragraphs: [
        "Tamil is agglutinative: case, number, person, tense and negation can be expressed with suffixes attached to a root. A single verb may contain several morphemes, as in படித்துக்கொண்டிருக்கிறான், roughly 'he is studying'. The written word is one unit, so breaking it between two subtitle lines or two cues makes the line harder to read and can change the apparent meaning.",
        "Spoken Tamil and formal written Tamil also differ. A speaker may use a short colloquial verb form while a model produces a fuller literary form, or the reverse. Do not 'correct' a form merely because it sounds different from the textbook: compare it with the audio and the intended register. When a word is too long for the line, reflow the sentence at a clause boundary rather than inserting a space inside the word."
      ]
    },
    {
      heading: "Names, numbers and loanwords in Tamil",
      paragraphs: [
        "Tamil personal names often use initials, patronymics or a family name whose position varies by community and region. Transliteration into Latin letters is not fixed, so a name may appear in several forms. Whisper normally returns Tamil script for Tamil speech, but a name or an English word may come back in Latin letters. The tool does not promise a romanized transcript, and you should not assume one.",
        "Modern Tamil text uses Western digits 0-9 for most numbers, although the historical Tamil numerals ௦ to ௯ still appear in specialised contexts. Spoken numbers may be written as words or digits, and dates, prices in rupees, phone numbers and room numbers all need a consistent style. Keep a number and its unit in one run, then check the same cue in the player."
      ]
    },
    {
      heading: "Code-switching between Tamil and English",
      paragraphs: [
        "Tamil speech frequently mixes English words and phrases, especially in technology, education and urban conversation. Informal romanized Tamil, often called Tanglish, is common in messages but is not a standard subtitle script. The model may keep an English term in Latin letters inside an otherwise Tamil cue. That can be accurate to the audio, yet it looks inconsistent if the same term is transliterated elsewhere.",
        "Choose a house rule before editing: keep established English terms in Latin script, or transliterate them into Tamil script, but apply the rule consistently. Do not use Whisper's translate task to make Tamil subtitles, because that task outputs English. For a Tamil track, transcribe in Tamil and translate separately if a second-language version is needed."
      ]
    },
    {
      heading: "Dialects and accents Tamil ASR may miss",
      paragraphs: [
        "Tamil is spoken in Tamil Nadu, Sri Lanka, Singapore, Malaysia and elsewhere, and regional speech differs in vocabulary, pronunciation and rhythm. Sri Lankan Tamil and Indian Tamil varieties are not identical, and formal and colloquial registers diverge sharply. A transcript that looks fluent in one variety may use a word or ending that does not fit the speaker.",
        "Background music, overlapping speakers, rapid delivery and heavy code-switching all make the first draft less reliable. Because no reviewed Tamil sample has been recorded for this page, treat the transcript as a draft rather than a measurement. Listen to the difficult passages at reduced speed and correct dialect words with a speaker or a trusted reference."
      ]
    },
    {
      heading: "Line length and cue timing for Tamil",
      paragraphs: [
        "Tamil grapheme clusters can combine a consonant, a vowel sign and a pulli, and a line break inside one cluster can leave a detached mark or an unreadable fragment. Keep each cluster intact. Two lines per cue is the usual maximum; the 42-character Latin convention is only a starting point because Tamil glyph widths and cluster counts differ. Measure the rendered width in the target player.",
        "Aim for a comfortable reading speed and let the cue follow the spoken phrase. The common 15-20 characters-per-second figure comes from English-language guidance and does not transfer directly to Tamil, so use it as a rough ceiling, not a rule. Break at a clause or sentence boundary, keep a name with its title, and avoid splitting a long agglutinated verb merely to satisfy a character count."
      ]
    },
    {
      heading: "Review workflow and privacy for Tamil subtitles",
      paragraphs: [
        "Transcribe a short section first, then compare it with the audio before running a long file. Check names, numbers, negation, tense and any word that changes the meaning of a sentence. Correct the Tamil script in the editor, adjust cue boundaries, and export UTF-8 SRT, VTT or TXT. Open the exported file in the player that will show the video and confirm that the Tamil font renders every cluster.",
        "The model runs locally, so the recording is not uploaded to a transcription service, but the browser still needs the model files and your normal network access for the first load. Keep sensitive recordings on your own device and review the transcript before sharing it. This page remains out of search until a reviewed sample is recorded; the local tool remains available in the meantime."
      ]
    }
  ],
  faqs: [
    {
      question: "Is there a Tamil subtitle generator that works without uploading audio?",
      answer:
        "Yes. VoiceToTextFree runs the multilingual Whisper model in the browser on your device. Select Tamil, transcribe the local file and review the draft before export. Model files may need to download on the first run, but the recording is not sent to a transcription server."
    },
    {
      question: "Does the Tamil subtitle generator output Tamil script or romanized Tamil?",
      answer:
        "Whisper normally returns Tamil script for Tamil speech. It does not guarantee a romanized or transliterated transcript, and mixed English words may appear in Latin letters. Review the cue and choose one spelling convention rather than assuming the model will romanise everything."
    },
    {
      question: "Why does my Tamil transcript mix Tamil and English?",
      answer:
        "Tamil speech often code-switches into English, and the model may preserve an English word in Latin script inside a Tamil cue. That can match the audio. Decide whether established English terms should stay in Latin letters or be written in Tamil script, then apply the same rule throughout the file."
    },
    {
      question: "How should I handle long Tamil words in subtitles?",
      answer:
        "Keep an agglutinated Tamil word together. Do not insert a space or split it across lines to meet a character count. Reflow the sentence at a clause boundary, shorten an adjacent phrase, or widen the cue by giving it more time on screen."
    },
    {
      question: "Can I export Tamil subtitles as SRT or VTT?",
      answer:
        "Yes. After transcription and review, download SRT, VTT or TXT. The exporter writes UTF-8, but you should still open the file in the target player and check that Tamil vowel signs, pulli marks and Grantha letters render correctly."
    },
    {
      question: "Why is this Tamil page noindex?",
      answer:
        "No reviewed Tamil sample has been recorded for VoiceToTextFree, so there is no honest accuracy result to publish. The page is excluded from search until that review exists. The browser-based tool still works, and this page explains how to use it."
    }
  ],
  workedExample: {
    title: "Illustrative Tamil cues with an English translation",
    intro:
      "This short sample is illustrative only, not a benchmark. It shows the kind of Tamil script the editor handles. The English lines are translation notes for review and would be removed from the delivered subtitle file.",
    srt: `1
00:00:01,000 --> 00:00:04,500
நாளை காலை ஒன்பது மணிக்கு சந்திப்போம்.
(We will meet tomorrow at nine in the morning.)

2
00:00:04,800 --> 00:00:08,000
அறிக்கையை மூன்றாம் மாடிக்கு கொண்டு வாருங்கள்.
(Please bring the report to the third floor.)`,
    note: "The parenthetical English is a translation note, not a second subtitle line. Cue 2 contains a number word and a case suffix, and both cues show why a Tamil word should stay on one line. This pair is illustrative and has not been scored for accuracy."
  },
  sources: [
    {
      label: "Unicode CLDR — language and script data",
      url: "https://cldr.unicode.org/"
    },
    {
      label: "Unicode script chart — Tamil (U+0B80–U+0BFF)",
      url: "https://www.unicode.org/charts/PDF/U0B80.pdf"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "OpenAI Whisper — repository and language notes",
      url: "https://github.com/openai/whisper"
    }
  ],
  relatedGuides: [
    "how-to-improve-whisper-accuracy",
    "subtitle-line-length",
    "subtitles-for-accessibility"
  ],
  keywords: [
    { keyword: "tamil subtitle generator", role: "primary" },
    { keyword: "tamil captions", role: "synonym" },
    { keyword: "tamil audio to text", role: "synonym" },
    { keyword: "tamil transcript", role: "synonym" }
  ]
};
