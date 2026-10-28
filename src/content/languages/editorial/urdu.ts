import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "ur",
  slug: "urdu",
  nativeName: "اردو",
  path: "/subtitle-generator/urdu",
  h1: "Urdu subtitle generator: audio to SRT with local Whisper",
  title: "Urdu subtitle generator: private audio to SRT in the browser",
  metaDescription:
    "Use this Urdu subtitle generator to turn Urdu audio to SRT in your browser. Whisper drafts Perso-Arabic text locally, then you review the cues and export SRT or VTT.",
  primaryKeyword: "urdu subtitle generator",
  capsule:
    "This Urdu subtitle generator runs Whisper locally in your browser, so Urdu audio stays on your device while you create an SRT or VTT file. You get Perso-Arabic script, not a promised romanized version, and every cue needs a human review pass before publishing.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Urdu sample has been recorded yet, so this page is excluded from search while the editorial content is still being checked. The tool itself still works: you can select Urdu, transcribe locally and export SRT or VTT. We do not claim tested accuracy for Urdu.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "ur" },
    { label: "Native name", value: "اردو" },
    { label: "Script", value: "Perso-Arabic, usually set in Nastaliq" },
    { label: "Direction", value: "Right to left" },
    { label: "Region", value: "South Asia" },
    { label: "Common digits", value: "Eastern Arabic-Indic ۰۱۲۳۴۵۶۷۸۹ or Western 0123456789" },
    { label: "Output", value: "SRT, VTT and TXT" }
  ],
  sections: [
    {
      heading: "Start with an Urdu subtitle generator that keeps audio on your device",
      paragraphs: [
        "An Urdu subtitle generator is only useful if it fits the way Urdu is actually spoken. VoiceToTextFree runs a Whisper model in the browser, so the audio is decoded on your own machine instead of being uploaded to a server. That matters for family recordings, client interviews and unpublished lectures. You choose Urdu in the language picker, let the model draft the cues, then review the text before you download an SRT, VTT or plain text file.",
        "The draft is a starting point, not a finished subtitle track. Whisper usually returns Urdu in Perso-Arabic script, and it does not promise a romanized transliteration for mixed or unclear speech. Expect to correct spelling, punctuation and line breaks. The review pass is where most of the quality comes from, and it is also where you catch the errors a model cannot know about."
      ]
    },
    {
      heading: "Urdu audio to SRT: what the file actually contains",
      paragraphs: [
        "When you export Urdu audio to SRT, you get numbered cues with start and end timestamps and the Urdu text saved as UTF-8. The file does not store a direction flag. Players infer right-to-left layout from the characters through the Unicode bidirectional algorithm, which is why the same file can look different in two players. Keep the characters in logical order and never reverse a line by hand.",
        "An SRT cue is short by design. A sentence that runs for twelve seconds may become two or three cues so the viewer can read at a comfortable pace. The exporter preserves the text you approve in the editor, so fix words before you export rather than editing the SRT afterwards in a tool that may change the encoding."
      ]
    },
    {
      heading: "Script, punctuation and Nastaliq in Urdu captions",
      paragraphs: [
        "Urdu captions are written in the Perso-Arabic script, and the usual screen and book style is Nastaliq. Nastaliq has a sloping baseline, deep descenders and stacked marks, so a two-line cue can look crowded even when the character count is low. Use a font that explicitly supports Urdu and give the text more vertical room than a Latin caption would need.",
        "Urdu punctuation includes the Arabic full stop (۔), the Arabic comma (،) and the question mark (؟). Many writers also use Latin commas and question marks, especially online. Pick one convention for the file and keep it consistent. Do not let a word processor replace the marks with smart punctuation that the player renders differently."
      ]
    },
    {
      heading: "Urdu subtitles for YouTube: line length, timing and review",
      paragraphs: [
        "For Urdu subtitles for YouTube, the caption box is often narrower than the source video, and viewers watch on phones where the safe area is tight. Keep each line short, avoid more than two lines per cue, and break at a natural pause rather than at an arbitrary character count. A long Urdu word can carry several joined letters, so a line that looks short in a text editor can still be visually heavy.",
        "Check reading speed in the player at normal speed. If a cue disappears before the sentence is finished, split it or shorten the wording. Upload the SRT to a private copy of the video first and inspect the rendered captions, because YouTube applies its own font stack and may not honour the font you tested locally."
      ]
    },
    {
      heading: "Urdu audio to text for interviews, lectures and archives",
      paragraphs: [
        "Urdu audio to text is useful well beyond video captions. Researchers, journalists and students often need a searchable transcript of an interview or a lecture. The same local model that produces cues can produce a plain text file, but a transcript has different needs: speaker turns, filler words and timestamps may matter more than two-line caption limits.",
        "Decide before you start whether you need a verbatim record or a readable transcript. Verbatim text keeps repetitions and false starts, which helps analysis but reads poorly as a caption. A cleaned transcript is easier to search but loses evidence. Keep the raw export as an archive and make a separate edited copy for publication."
      ]
    },
    {
      heading: "Mixed Urdu and English speech and Roman Urdu",
      paragraphs: [
        "Many Urdu speakers switch between Urdu and English inside a sentence, and some type Urdu in Latin letters as Roman Urdu. Whisper tends to output the script of the language it detects, so a heavily code-switched clip can produce a mixture of Perso-Arabic and Latin words. That is normal, but it needs review: the model may write an English term in Urdu letters or leave an Urdu word in Latin spelling.",
        "We do not promise romanized output. If you need Roman Urdu, treat it as a separate editorial task and transliterate deliberately rather than assuming the model will do it. For captions, keep the script your audience expects and make the mixed-language lines consistent across the whole file."
      ]
    },
    {
      heading: "Names, numbers and dates in Urdu",
      paragraphs: [
        "Urdu text may use Western digits (0123456789) or Eastern Arabic-Indic digits (۰۱۲۳۴۵۶۷۸۹), and both appear in real broadcasts. Choose the set that matches your audience and apply it everywhere. Numbers can reorder visually beside right-to-left text, so test a cue with a phone number, a date range or a room number in the target player.",
        "Names are another common correction. A model may spell a local name phonetically or choose a different but plausible spelling. Confirm the spelling with the speaker or an official source. Keep a short glossary for recurring names, organisations and technical terms, then apply it consistently through the review pass."
      ]
    },
    {
      heading: "Accents, dialects and the limits of punctuation",
      paragraphs: [
        "Urdu is spoken across South Asia and in diaspora communities, and accent, speed and recording quality vary widely. A model trained on broad multilingual data may struggle with a strong regional accent, a noisy street interview or overlapping speakers. Punctuation is also a guess: Whisper inserts commas and full stops based on pauses, and those guesses do not always match the speaker's intent.",
        "Do not treat punctuation as proof of meaning. Rewrite a cue if an inserted comma changes the sense of a sentence, and remove punctuation where the speaker did not pause. If two people talk at once, split the audio or accept that the transcript will be incomplete. Honest captions mark uncertainty rather than inventing words."
      ]
    },
    {
      heading: "Review workflow and privacy for Urdu files",
      paragraphs: [
        "A practical review workflow has three passes: listen once with the draft visible, correct script and names, then watch the exported file in the target player. Check the first cue, the longest cue, a cue with a number and a cue with English mixed in. Confirm the file is UTF-8 before you publish.",
        "Because transcription runs in the browser, the audio does not need to leave your device for this step. That reduces exposure for private interviews, medical conversations and unreleased content. It does not remove the need for consent, and it does not make an unreviewed transcript publishable. Treat the local model as a fast first draft and keep the human review in the loop."
      ]
    }
  ],
  faqs: [
    {
      question: "Does this Urdu subtitle generator upload my audio?",
      answer:
        "No. The model runs in the browser for this workflow, so the audio is processed on your device rather than sent to a transcription server. You should still check your browser and device settings, and get consent before transcribing someone else's private recording."
    },
    {
      question: "Does Whisper output Urdu in Roman letters?",
      answer:
        "Whisper normally returns Urdu in Perso-Arabic script. It does not promise a romanized transliteration, and code-switched speech can produce a mixture of scripts. If you need Roman Urdu, transliterate it as a separate editorial step."
    },
    {
      question: "Can I use the Urdu SRT export on YouTube?",
      answer:
        "Yes. Export SRT or VTT, then upload it as a caption track on a private copy of the video first. YouTube uses its own font stack and may reflow the text, so check the rendered captions on desktop and on a phone before publishing."
    },
    {
      question: "Why is my Urdu punctuation on the wrong side?",
      answer:
        "Punctuation can attach to the wrong directional run when a cue mixes Urdu with Latin text or numbers. Place the mark at the logical end of the sentence, keep numbers in one run and test the exact cue in the player. Do not reverse the characters by hand."
    },
    {
      question: "How accurate is Urdu transcription?",
      answer:
        "We have not recorded a reviewed Urdu sample, so this page does not claim a tested accuracy level. Recognition varies with accent, audio quality, background noise and model size. Treat every draft as a first pass that still needs a human review."
    },
    {
      question: "Which script and digits should I use?",
      answer:
        "Use Perso-Arabic script and choose either Western digits or Eastern Arabic-Indic digits to match your audience. Keep the choice consistent across the file, and test any cue that contains a phone number, date or price in the target player."
    }
  ],
  sources: [
    {
      label: "Unicode CLDR — locale data",
      url: "https://cldr.unicode.org/"
    },
    {
      label: "W3C — WebVTT: The Web Video Text Tracks Format",
      url: "https://www.w3.org/TR/webvtt1/"
    },
    {
      label: "OpenAI Whisper repository",
      url: "https://github.com/openai/whisper"
    }
  ],
  relatedGuides: ["how-to-improve-whisper-accuracy", "rtl-and-non-latin-subtitles"],
  workedExample: {
    title: "Illustrative Urdu cues with an English translation note",
    intro:
      "This short sample shows how an Urdu draft might look in an SRT file. It is illustrative only, not a benchmark or a measured accuracy result.",
    srt: `1
00:00:01,000 --> 00:00:04,000
ہم کل صبح نو بجے ملیں گے۔

2
00:00:04,200 --> 00:00:08,000
کمرہ نمبر 402 چوتھی منزل پر ہے۔`,
    note: "English meaning: We will meet tomorrow at nine in the morning. Room number 402 is on the fourth floor. The translation is for review only and would not appear in the delivered file. This sample is illustrative, not a benchmark."
  },
  keywords: [
    { keyword: "urdu subtitle generator", role: "primary" },
    { keyword: "urdu audio to srt", role: "secondary", headingLevel: 2 },
    { keyword: "urdu subtitles for youtube", role: "secondary", headingLevel: 2 },
    { keyword: "urdu captions", role: "secondary", headingLevel: 2 },
    { keyword: "urdu audio to text", role: "secondary", headingLevel: 2 },
    { keyword: "urdu subtitles", role: "synonym" },
    { keyword: "urdu transcription", role: "synonym" },
    { keyword: "Does Whisper output Urdu in Roman letters?", role: "faq" },
    { keyword: "Can I use the Urdu SRT export on YouTube?", role: "faq" }
  ]
};
