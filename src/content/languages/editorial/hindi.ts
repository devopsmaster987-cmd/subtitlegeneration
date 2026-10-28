import type { LanguagePageContent } from "../../types";

export const languagePage: LanguagePageContent = {
  kind: "language",
  code: "hi",
  slug: "hindi",
  nativeName: "हिन्दी",
  path: "/subtitle-generator/hindi",
  h1: "Hindi subtitle generator: video to text and SRT in the browser",
  title: "Hindi subtitle generator: private video to text and SRT",
  metaDescription:
    "Use this Hindi subtitle generator to turn Hindi video to text and SRT in your browser. Whisper drafts Devanagari locally, then you review and export SRT or VTT.",
  primaryKeyword: "hindi subtitle generator",
  capsule:
    "This Hindi subtitle generator runs Whisper locally in your browser, so Hindi audio stays on your device and you can export SRT, VTT or text. The draft is written in Devanagari, not a promised Roman transliteration, so every cue still needs a careful review before publishing.",
  published: "2026-02-01",
  updated: "2026-10-28",
  author: "Abdul Samad",
  accuracyNote:
    "No reviewed Hindi sample has been recorded yet, so this page is excluded from search while the editorial content is still being checked. The tool itself still works: you can select Hindi, transcribe locally and export SRT or VTT. We do not claim tested accuracy for Hindi.",
  noindex: true,
  keyFacts: [
    { label: "Language code", value: "hi" },
    { label: "Native name", value: "हिन्दी" },
    { label: "Script", value: "Devanagari" },
    { label: "Direction", value: "Left to right" },
    { label: "Region", value: "South Asia" },
    { label: "Sentence mark", value: "Danda (।), with Western punctuation also common" },
    { label: "Output", value: "SRT, VTT and TXT" }
  ],
  sections: [
    {
      heading: "Start with a Hindi subtitle generator that keeps audio on your device",
      paragraphs: [
        "A Hindi subtitle generator has to deal with a language that is written in Devanagari and spoken across a very large area. VoiceToTextFree runs a Whisper model in the browser, so the audio is processed on your own machine instead of being uploaded to a transcription service. That helps with confidential interviews, classroom recordings and family videos. You select Hindi in the picker, let the model draft the cues, then review the text before exporting SRT, VTT or plain text.",
        "The draft is not a finished subtitle track. Whisper usually returns Hindi in Devanagari, and it does not promise a romanized transliteration for mixed or unclear speech. Expect to correct spelling, vowel signs, punctuation and line breaks. The review pass is where most of the quality comes from, and it is where you catch the names and numbers a model cannot know."
      ]
    },
    {
      heading: "Hindi video to text: Devanagari output, not Roman script",
      paragraphs: [
        "Hindi video to text is often requested as Hinglish or Roman Hindi, but a speech model normally writes the language it detects in its own script. Whisper returns Devanagari, with Latin letters appearing mainly for English words, brand names and technical terms. If your audience expects Roman Hindi, plan for a separate transliteration step rather than assuming the transcript will arrive that way.",
        "The plain text export is useful for search, notes and subtitling drafts, but it is not automatically a caption file. Text without timestamps cannot be uploaded as a caption track. Use the SRT or VTT export when timing matters, and keep the plain text as a working document for editors and reviewers."
      ]
    },
    {
      heading: "Hindi subtitles and Devanagari shaping",
      paragraphs: [
        "Hindi subtitles are written in Devanagari, a script in which consonants and vowel signs combine into clusters. A font with incomplete coverage can show dotted circles, missing vowel marks or disconnected pieces. Choose a font that supports Devanagari and test a real cue with conjuncts, matras and a nasal mark rather than a simple pangram.",
        "Devanagari also needs more vertical room than Latin text because vowel signs sit above and below the baseline. A two-line Hindi cue can look crowded even when the character count is low. Give the caption block room, keep the text inside the safe area, and check the rendered result on a phone where the fallback font may differ."
      ]
    },
    {
      heading: "Hindi audio to SRT: cues, timing and line breaks",
      paragraphs: [
        "When you export Hindi audio to SRT, you get numbered cues with start and end timestamps and Devanagari text saved as UTF-8. Keep the file in UTF-8 so the script survives the trip to an editor or a player. An SRT cue is short by design, so a long sentence may become two or three cues even when the speaker does not pause.",
        "Break lines at a clause boundary, not at an arbitrary word count. Do not separate a postposition from the noun it follows, or split a name across lines. Two short lines are easier to scan than one very long line, but a break in the wrong place can be worse than a slightly longer line. Test the exported file rather than trusting the editor preview."
      ]
    },
    {
      heading: "Punctuation and the danda in Hindi captions",
      paragraphs: [
        "Traditional Hindi uses the danda (।) to mark the end of a sentence and the double danda (॥) for verse. Modern web and broadcast text also uses the Western full stop, comma and question mark, sometimes in the same document. Pick one convention for the file and apply it consistently, especially when the video mixes formal narration with casual conversation.",
        "Punctuation in a transcript is partly a guess: Whisper inserts marks based on pauses, and those guesses do not always match the speaker's intent. Rewrite a cue if an inserted mark changes the sense of a sentence, and remove punctuation where the speaker did not pause. Do not let a word processor replace the marks with smart punctuation that the player renders differently."
      ]
    },
    {
      heading: "Code-switched Hindi and English speech",
      paragraphs: [
        "Many Hindi speakers switch between Hindi and English inside a sentence, and technical, academic and urban content is full of English nouns. Whisper tends to output the script of the language it detects, so a heavily code-switched clip can produce a mixture of Devanagari and Latin words. That is normal, but it needs review: the model may write an English term in Devanagari or leave a Hindi word in Latin spelling.",
        "We do not promise romanized output. For captions, decide how the mixed-language lines should look and keep that choice consistent across the whole file. If a term is usually written in Latin in your audience's context, keep it in Latin. If it is normally written in Devanagari, write it there and check the spelling."
      ]
    },
    {
      heading: "Names, numbers and honorifics in Hindi",
      paragraphs: [
        "Hindi text can use Devanagari numerals (०१२३४५६७८९) or Western digits (0123456789), and both appear in real broadcasts. Choose the set that matches your audience and apply it everywhere. Test a cue with a phone number, a price, a date range or a room number, because digits can look inconsistent when a font mixes the two sets.",
        "Names and honorifics are another common correction. A model may spell a local name phonetically or choose a different but plausible spelling, and it may drop words such as जी or श्रीमान. Confirm the spelling with the speaker or an official source, and keep a short glossary for recurring names, organisations and technical terms."
      ]
    },
    {
      heading: "Accents, dialects and regional variation",
      paragraphs: [
        "Hindi is spoken across North and Central India and in diaspora communities, and accent, speed and recording quality vary widely. A model trained on broad multilingual data may struggle with a strong regional accent, a noisy street interview or overlapping speakers. Punctuation and word choice are also guesses, and the draft may drift toward a standard register that does not match the speaker.",
        "Do not treat the draft as proof of exactly what was said. If a word sounds odd, listen to the segment again and compare it with the surrounding sentence. If two people talk at once, split the audio or accept that the transcript will be incomplete. Honest captions mark uncertainty rather than inventing words."
      ]
    },
    {
      heading: "Review workflow, privacy and accessibility",
      paragraphs: [
        "A practical review workflow has three passes: listen once with the draft visible, correct script and names, then watch the exported file in the target player. Check the first cue, the longest cue, a cue with a number and a cue with English mixed in. Confirm the file is UTF-8 before you publish, and make sure each cue is on screen long enough to read.",
        "Good captions also help viewers who are deaf or hard of hearing, so add meaningful non-speech information where it matters and keep speaker changes clear. Because transcription runs in the browser, the audio does not need to leave your device for this step. That reduces exposure for private recordings, but it does not remove the need for consent or for human review."
      ]
    }
  ],
  faqs: [
    {
      question: "Does this Hindi subtitle generator upload my audio?",
      answer:
        "No. The model runs in the browser for this workflow, so the audio is processed on your device rather than sent to a transcription server. You should still check your browser and device settings, and get consent before transcribing someone else's private recording."
    },
    {
      question: "Does Whisper output Hindi in Roman letters?",
      answer:
        "Whisper normally returns Hindi in Devanagari. It does not promise a romanized transliteration, and code-switched speech can produce a mixture of scripts. If you need Roman Hindi, transliterate it as a separate editorial step."
    },
    {
      question: "Does YouTube accept Hindi SRT captions?",
      answer:
        "Yes. Export SRT or VTT, then upload it as a caption track on a private copy of the video first. YouTube uses its own font stack and may reflow the text, so check the Devanagari shaping and line breaks on desktop and on a phone before publishing."
    },
    {
      question: "Should I use the danda or a full stop?",
      answer:
        "Either can work if you are consistent. Traditional Hindi uses the danda (।), while modern web and broadcast text often uses the Western full stop. Pick the convention that matches the video and the audience, then apply it throughout the file."
    },
    {
      question: "Why do some Hindi letters look broken?",
      answer:
        "Broken letters usually mean the font or renderer lacks complete Devanagari coverage. Choose a font that supports conjuncts and vowel signs, then test a real cue with matras and a nasal mark in the target player rather than relying on the editor preview."
    },
    {
      question: "How accurate is Hindi transcription?",
      answer:
        "We have not recorded a reviewed Hindi sample, so this page does not claim a tested accuracy level. Recognition varies with accent, audio quality, background noise and model size. Treat every draft as a first pass that still needs a human review."
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
  relatedGuides: ["how-to-improve-whisper-accuracy", "subtitles-for-accessibility"],
  workedExample: {
    title: "Illustrative Hindi cues with an English translation note",
    intro:
      "This short sample shows how a Hindi draft might look in an SRT file. It is illustrative only, not a benchmark or a measured accuracy result.",
    srt: `1
00:00:01,000 --> 00:00:04,000
हम कल सुबह नौ बजे मिलेंगे।

2
00:00:04,200 --> 00:00:08,000
कमरा नंबर 402 चौथी मंज़िल पर है।`,
    note: "English meaning: We will meet tomorrow at nine in the morning. Room number 402 is on the fourth floor. The translation is for review only and would not appear in the delivered file. This sample is illustrative, not a benchmark."
  },
  keywords: [
    { keyword: "hindi subtitle generator", role: "primary" },
    { keyword: "hindi video to text", role: "secondary", headingLevel: 2 },
    { keyword: "hindi subtitles", role: "secondary", headingLevel: 2 },
    { keyword: "hindi audio to srt", role: "secondary", headingLevel: 2 },
    { keyword: "hindi captions", role: "secondary", headingLevel: 2 },
    { keyword: "hindi transcription", role: "synonym" },
    { keyword: "hindi srt", role: "synonym" },
    { keyword: "Does Whisper output Hindi in Roman letters?", role: "faq" },
    { keyword: "Does YouTube accept Hindi SRT captions?", role: "faq" }
  ]
};
