import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-to-improve-whisper-accuracy",
  h1: "How to improve Whisper accuracy for cleaner subtitles",
  title: "How to improve Whisper accuracy for cleaner subtitles",
  metaDescription:
    "How to improve Whisper accuracy with better audio capture, explicit language selection, measured model sizes, overlap handling and a practical human review workflow.",
  primaryKeyword: "how to improve whisper accuracy",
  capsule:
    "How to improve Whisper accuracy starts with the recording, not the model. Use a close microphone, avoid music and crosstalk, choose the spoken language instead of relying on auto-detect, size the model to the device, and review names, numbers and punctuation. Better input and a short editing pass matter more than chasing a universal accuracy number.",
  published: "2026-01-28",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Measured download sizes",
      value: "tiny 41 MB WASM q8 / 76 MB WebGPU fp16; base 77 / 146 MB; small 249 / 485 MB"
    },
    {
      label: "Audio path in this tool",
      value: "Mono 16 kHz audio, cut into 30-second chunks with a 2-second overlap"
    },
    {
      label: "Language choice",
      value: "Setting the language explicitly avoids a detection guess on short or mixed clips"
    },
    {
      label: "Translation caveat",
      value: "Whisper's translate task writes English; it is not a general subtitle translator"
    },
    {
      label: "What needs review",
      value: "Names, numbers, punctuation, crosstalk and code-switched words"
    },
    {
      label: "Honest expectation",
      value:
        "Accuracy varies by language, accent, recording and model; no universal percentage applies"
    }
  ],
  sections: [
    {
      heading: "Start with the recording, not the model",
      paragraphs: [
        "The largest gains usually come before the file reaches Whisper. Put the microphone close to the speaker, aim it away from a fan or a keyboard, and record a short level check. A phone on a table picks up room reflections and every hand movement; a lapel microphone or a headset sounds noticeably clearer. If the source is a video call, record the clean local microphone rather than the speaker output, because the speaker path adds compression and echo.",
        "Use a mono track for speech. Stereo can be fine, but this tool mixes channels to mono before resampling to 16 kHz, so a track with one silent channel or a phase problem loses useful signal. Avoid heavy noise reduction before transcription unless you can compare both versions: aggressive cleanup can remove consonants and make names harder to recognise. A modest high-pass filter and a consistent level are safer than a dramatic repair."
      ]
    },
    {
      heading: "What changes whisper transcription accuracy",
      paragraphs: [
        "Background music is the most common cause of confident nonsense. Whisper was trained on varied internet audio, but a music bed over speech gives the decoder two competing streams. Lower the music under dialogue, remove it for the transcript pass, or accept that some lines will need editing. Crosstalk is similar: when two people speak at once, the model tends to follow one voice and drop the other, and no amount of prompt text reliably recovers the missing words.",
        "Room echo, clipping and a low signal level also hurt. Check the waveform for flat-topped peaks and for long stretches that barely rise above the noise floor. If the original recording is the only copy, a gentle gain change is better than clipping. Keep a clean reference copy beside the generated subtitles so a reviewer can compare what was said, not what the model guessed."
      ]
    },
    {
      heading: "Language selection beats auto-detect on short clips",
      paragraphs: [
        "Whisper predicts a language token before it decodes text. On a long, clearly spoken recording that guess is often right. On a ten-second clip, an introduction with music, or a conversation that switches languages, the guess can drift. Select the spoken language when you know it. That removes one source of error and makes the output more consistent across chunks, because every chunk receives the same instruction.",
        "Auto-detection is still useful for unknown material. Run a short preview, read the first lines, and then restart with the detected language if it looks correct. For a bilingual interview, split the file by speaker or by language rather than asking one pass to handle both. Whisper can write some code-switched speech, but it does not expose separate language tracks, so a deliberate split produces cleaner subtitles and a simpler review."
      ]
    },
    {
      heading: "Improve whisper accuracy by choosing the right model",
      paragraphs: [
        "Model size is a trade between download, memory and the kind of errors you can tolerate. The measured browser downloads in this project are 41 MB for tiny on WASM and 76 MB on WebGPU, 77 MB for base on WASM and 146 MB on WebGPU, and 249 MB for small on WASM and 485 MB on WebGPU. Those figures come from summing the encoder and decoder ONNX files in the onnx-community repositories; they are measurements, not marketing estimates.",
        "Tiny is the right first pass for a clear, short clip on a phone. Base is a sensible default for interviews and lectures. Small is worth the wait for noisy rooms and non-English speech, but it can exhaust memory on older devices. A bigger model is not automatically better for every file: it can still mishear a name, and its slower run makes repeated experiments expensive. Read the full [model size comparison](/guides/whisper-model-sizes-compared) before committing to a large download."
      ]
    },
    {
      heading: "The 30-second window and the 2-second overlap",
      paragraphs: [
        "Whisper is trained on 30-second audio segments and cannot consume an hour-long file in one pass. This site slices the audio into 30-second chunks with a 2-second overlap, transcribes each chunk, shifts the timestamps by the chunk offset, and removes repeated words at the seam. The overlap gives the model context on both sides of a boundary, but it is not a guarantee. A sentence that begins at 29.8 seconds can appear twice or lose its first word.",
        "Review every boundary when timing matters. Look for a duplicated phrase near a multiple of roughly 30 seconds, and listen across the join rather than only reading the text. If a whole sentence is missing, the likely cause is a chunk edge or a very quiet passage, not a punctuation problem. Keeping the source audio beside the editor makes this check fast."
      ]
    },
    {
      heading: "Punctuation, names, numbers and formatting",
      paragraphs: [
        "Whisper produces natural-looking text, but it is still predicting. It may add a full stop in the middle of a sentence, turn a year into a different year, or spell a person's name the way it appeared most often in training data. Treat every proper noun and every number as unverified. Compare bank names, product codes, addresses, dates and measurements against a written source, and normalise formatting after the content is correct.",
        "Punctuation affects subtitle timing as well as readability. A long unbroken line may be technically accurate but hard to read, so split cues at clause boundaries and keep each line short. Do not rewrite so heavily that the captions stop matching the audio. The goal is a faithful transcript that a viewer can follow, not a polished article. If you need a final timing and line-length check, use the site's subtitle tools after the text edit."
      ]
    },
    {
      heading: "Code-switching, accents and low-resource languages",
      paragraphs: [
        "Whisper's training data is uneven. The model card says performance is lower on low-resource and low-discoverability languages, and the paper shows that the amount of training data for a language predicts zero-shot performance. That is a general finding, not a score for your file. A speaker with an accent, a regional dialect or a mix of two languages may get a useful draft and still need substantial correction.",
        "Do not trust a percentage copied from a blog, and do not assume that a language with a large population is well served. Test a two-minute sample from the actual speaker before transcribing an hour. Our language pages remain noindex until a native reviewer has checked real output, because a generated page is not evidence of quality. For Urdu, Hindi, Arabic or any other language, judge the sample yourself and keep a human review step.",
        "Roman Urdu, Hinglish and Tanglish are not separate Whisper output modes. When the audio is chiefly Urdu, Hindi or Tamil, the model normally writes the detected language in its own script, while English words and brand names may stay in Latin letters. A request for romanized captions is therefore a transliteration and editing job, not a language setting. This site does not promise romanized output; use the native-script transcript as the source and transliterate deliberately if your audience needs it.",
        "Code-switched speech needs a written convention before you edit. Decide whether an English term stays in Latin script, whether a name follows the speaker's spelling, and how a sentence that changes language should be punctuated. Apply that convention across the whole file. If the mix is heavy or the speakers alternate for long stretches, split the recording by language or speaker and transcribe each part with an explicit language. That is slower than one pass, but it gives you a reviewable transcript instead of a script mixture that changes from cue to cue."
      ]
    },
    {
      heading: "Translation to English is a different task",
      paragraphs: [
        "Whisper can transcribe speech in the spoken language or translate it into English. The translate task is useful for understanding a foreign clip, but it is not a subtitle translator for every target language. If you need French captions for an English video, or Urdu captions for an Arabic interview, run transcription first and translate the resulting text with a reviewed translation workflow.",
        "Translation also changes the timing problem. A translated line may be shorter or longer than the original, so the cue boundaries that fit the source may not fit the target. Keep the source transcript as the timing master, then adapt the translation to the reading speed of the audience. Do not present machine-translated captions as verified without a speaker or translator checking names, idiom and tone."
      ]
    },
    {
      heading: "A practical editing loop",
      paragraphs: [
        "A repeatable loop beats a single heroic pass. It also makes it easier to see whether a change actually helped."
      ],
      steps: [
        "Listen to the first minute and write down the difficult words: names, acronyms, numbers and any second language.",
        "Run a short sample with an explicit language and a model that fits the device.",
        "Compare the transcript with the audio at the chunk boundaries and at every number.",
        "Fix content first, then punctuation, then line length and timing.",
        "Re-run only when the audio or language setting was wrong; do not re-run just to chase a different wording."
      ]
    },
    {
      heading: "Measure your own results",
      paragraphs: [
        "A useful test set is five to ten short clips that represent your real material: one clean speaker, one noisy room, one accented speaker, one clip with music, and one with the names and numbers you care about. Count the errors you actually have to fix, or time the review pass. That gives you a comparison between models or microphone setups without pretending there is a universal accuracy figure.",
        "Keep the winning settings with the project. If a client sends a new recording from the same room and the same speaker, start from the settings that worked and spend the saved time on review. The browser tool runs locally, so you can test a private sample through the [offline subtitle generator](/offline-subtitle-generator) and read more about the [privacy model](/guides/is-browser-transcription-private) before uploading anything to a different service."
      ]
    }
  ],
  faqs: [
    {
      question: "How accurate is Whisper transcription?",
      answer:
        "It varies with the recording, the language, the accent and the model size. Clean, close speech in a well-supported language is usually usable after a light review; noisy rooms, music and low-resource languages need more correction. There is no single percentage that applies to every file, so test a sample from your own material."
    },
    {
      question: "How accurate are automatic subtitles?",
      answer:
        "Automatic subtitles are a draft, not a verified transcript. They can mishear names and numbers, drop a speaker in crosstalk, and place punctuation in the wrong clause. The practical measure is how long a human needs to correct them, which depends on the source audio and the review standard."
    },
    {
      question: "How accurate is Whisper for Urdu?",
      answer:
        "Urdu is supported, but quality depends on the speaker, dialect, recording and model size. The training data is uneven across languages, so a clean sample may work well while a noisy interview needs substantial editing. Test a short clip with the intended speaker and keep a native reviewer in the workflow."
    },
    {
      question: "How accurate is Whisper for low resource languages?",
      answer:
        "Expect more variation than in high-resource languages. OpenAI's model card warns about lower accuracy on low-resource and low-discoverability languages, and the paper links performance to the amount of training data. A short human-checked sample is the only reliable guide for a particular language and recording."
    },
    {
      question: "Does a larger Whisper model always improve accuracy?",
      answer:
        "No. A larger model often handles noise and non-English speech better, but it costs more download time and memory, and it can still make the same name or number mistake. Choose the smallest model that passes your own sample test, then spend the remaining effort on review."
    },
    {
      question: "Can Whisper transcribe two languages in one clip?",
      answer:
        "It can produce text for code-switched speech, but it does not give you separate language tracks or reliable per-word language labels. For bilingual interviews, split the audio by speaker or language and transcribe each part with an explicit language setting."
    }
  ],
  workedExample: {
    title: "Worked example: reviewing a 14-second clip",
    intro:
      "This illustrative clip has a name, a number and a date in one sentence. The timestamps are real cue positions for a 14-second recording; the point is the review, not a claim about what any particular model will output.",
    srt: `1
00:00:01,200 --> 00:00:04,800
We sent 240 units to the Lahore office.

2
00:00:05,100 --> 00:00:08,600
The delivery arrived on 3 May.

3
00:00:09,000 --> 00:00:13,400
Please confirm the invoice number by Friday.`,
    note: "Check 240 against the order sheet, confirm that Lahore is spelled the way the client writes it, and listen again at 3 May. A generated draft may write 2140, 2400 or a different date. The cue text is corrected; the timing is unchanged, and the 0.4-second tail added by the worker keeps the last line on screen long enough to read."
  },
  sources: [
    {
      label: "OpenAI Whisper repository and model card",
      url: "https://github.com/openai/whisper"
    },
    {
      label: "Robust Speech Recognition via Large-Scale Weak Supervision",
      url: "https://arxiv.org/abs/2212.04356"
    },
    {
      label: "Transformers.js documentation",
      url: "https://huggingface.co/docs/transformers.js"
    },
    {
      label: "onnx-community/whisper-tiny model card",
      url: "https://huggingface.co/onnx-community/whisper-tiny"
    }
  ],
  relatedGuides: [
    "whisper-model-sizes-compared",
    "is-browser-transcription-private",
    "how-to-sync-subtitles",
    "subtitle-best-practices"
  ],
  keywords: [
    { keyword: "how to improve whisper accuracy", role: "primary" },
    { keyword: "whisper transcription accuracy", role: "secondary", headingLevel: 2 },
    { keyword: "whisper accuracy", role: "secondary", headingLevel: 2 },
    { keyword: "how accurate is whisper transcription", role: "faq" },
    { keyword: "how accurate are automatic subtitles", role: "faq" },
    { keyword: "how accurate is whisper for urdu", role: "faq" },
    { keyword: "how accurate is whisper for low resource languages", role: "faq" },
    { keyword: "does a larger whisper model always improve accuracy", role: "faq" },
    { keyword: "can whisper transcribe two languages in one clip", role: "faq" }
  ]
};
