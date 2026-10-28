import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/whisper-model-sizes-compared",
  h1: "Whisper model sizes compared: tiny, base and small in a browser",
  title: "Whisper model sizes compared: tiny, base and small in a browser",
  metaDescription:
    "Whisper model sizes compared using measured browser downloads: tiny, base and small, their parameters, memory tradeoffs and a practical way to choose.",
  primaryKeyword: "whisper model sizes compared",
  capsule:
    "Whisper model sizes compared here are the three browser builds this site offers: tiny, base and small. Measured downloads range from 41 MB to 485 MB depending on runtime. Tiny is fastest and least accurate, base balances the two, and small handles noisy or non-English audio better but needs more memory and patience.",
  published: "2026-01-28",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 8,
  keyFacts: [
    {
      label: "Parameters, from OpenAI",
      value: "tiny 39 M, base 74 M, small 244 M"
    },
    {
      label: "Measured WASM q8 download",
      value: "tiny 41 MB, base 77 MB, small 249 MB"
    },
    {
      label: "Measured WebGPU fp16 download",
      value: "tiny 76 MB, base 146 MB, small 485 MB"
    },
    {
      label: "Why two sizes per model",
      value: "WASM uses q8 weights; WebGPU uses fp16, so the downloaded files differ"
    },
    {
      label: "Caching",
      value: "The first run stores model files in the browser cache; later runs reuse them"
    },
    {
      label: "Not a quality score",
      value: "Parameters and megabytes do not tell you how well a model handles your speaker"
    }
  ],
  sections: [
    {
      heading: "Parameters and download size are different numbers",
      paragraphs: [
        "A parameter is a learned weight inside the model. A download is a file you wait for. The two are related, but they are not the same measurement, and mixing them up makes a model decision look simpler than it is. The OpenAI repository lists tiny at 39 million parameters, base at 74 million and small at 244 million. The browser downloads in the table below are larger or smaller than a naive conversion would suggest because they include an encoder and a decoder, and because the runtime changes the numeric format.",
        "This site serves an ONNX build through Transformers.js. On WASM it uses q8 weights, an 8-bit quantized format that reduces the download. On WebGPU it uses fp16, which is larger but suits the GPU path. Those are the two numbers a visitor actually experiences: the network transfer and the memory needed while the model is open. Neither number is an accuracy rating."
      ]
    },
    {
      heading: "Whisper model sizes on Hugging Face: the measured downloads",
      paragraphs: [
        "The figures below were measured on 28 October 2026 by summing the encoder and decoder ONNX files in the onnx-community repositories used by this site. They are file sizes, not estimates from a parameter count. The [tiny card](https://huggingface.co/onnx-community/whisper-tiny), [base card](https://huggingface.co/onnx-community/whisper-base) and [small card](https://huggingface.co/onnx-community/whisper-small) document the repositories; the OpenAI README and paper document the architectures and parameter counts."
      ],
      table: {
        caption:
          "Measured browser downloads on 2026-10-28. WASM uses q8; WebGPU uses fp16. Parameters are the OpenAI published values.",
        headers: ["Model", "Parameters", "WASM q8", "WebGPU fp16", "Sensible use"],
        rows: [
          ["tiny", "39 M", "41 MB", "76 MB", "Fast drafts, short clips, low-memory phones"],
          ["base", "74 M", "77 MB", "146 MB", "Interviews, lectures and clear social video"],
          [
            "small",
            "244 M",
            "249 MB",
            "485 MB",
            "Noisy rooms and non-English speech, on a capable device"
          ]
        ]
      }
    },
    {
      heading: "Whisper tiny vs base vs small in practice",
      paragraphs: [
        "The practical difference is not a clean staircase. Tiny is the quickest way to see whether a file is usable, and on a quiet close-mic recording it can produce a solid draft. It is also the most likely to smooth over a name, drop a repeated word or invent a plausible phrase in music. Base is the middle option: still small enough for a laptop, usually steadier on punctuation and ordinary vocabulary, and a reasonable default when you do not want to think about settings.",
        "Small is the largest model this site offers. It has more capacity for accents, uncommon words and non-English speech, but it downloads more and takes longer. On a phone with limited memory it may fail or force the browser to reclaim tabs. The honest summary is that tiny, base and small are three points on a trade curve, not three grades of a product. A bigger file buys more computation, not a guarantee about your particular recording."
      ]
    },
    {
      heading: "How browser constraints change the decision",
      paragraphs: [
        "A desktop transcription script can assume a large disk and plenty of RAM. A browser tab cannot. The model has to fit alongside the page, the decoded audio, the editor state and the rest of the user's session. WebGPU support is still uneven, and this worker falls back to WASM when a WebGPU model fails to load. That fallback is useful, but it means the same device may download a different file and run at a different pace than the first attempt suggested.",
        "Mobile browsers are stricter about background tabs and memory. A small model that completes on a laptop may be terminated on an older phone, especially if the screen locks or the user switches apps. If the device is the constraint, choose tiny, keep the tab in the foreground and transcribe in shorter files. If the audio is difficult, move to a desktop before choosing small. The [privacy page](/guides/is-browser-transcription-private) explains why this local processing is still a good trade for sensitive material."
      ]
    },
    {
      heading: "How to choose a model for a specific job",
      paragraphs: [
        "Start with the job, then the device, then the audio. A quick social clip with clean speech does not need the largest model; a client interview with unfamiliar names does. A noisy field recording may benefit more from a better microphone than from another hundred million parameters. Run the same 30-second sample at two sizes and compare the edits you have to make."
      ],
      steps: [
        "Use tiny for a first listen when the file is long and you only need to find the usable sections.",
        "Use base for a normal interview, lecture or tutorial with one clear speaker.",
        "Use small when the speech is accented, non-English or recorded in a reverberant room, and the device has memory to spare.",
        "Test on a representative clip before committing an hour of audio to a slow model.",
        "Keep the model choice with the project notes so a later pass does not repeat the experiment."
      ]
    },
    {
      heading: "Why the smallest model is sometimes the better editing tool",
      paragraphs: [
        "A fast model lets you iterate. You can run a sample, fix the language setting, adjust the audio and run again while the details are fresh. That loop often produces a better final subtitle than one slow pass with a larger model, because the editor catches systematic problems early. Tiny also makes it cheap to compare two microphone positions or two noise-reduction settings.",
        "The caveat is that tiny's errors can be more fluent than obvious. A wrong name may look like a real name, and a missing clause may read smoothly. Use the small model as a second opinion on a short section when a line is important, rather than assuming that a fluent sentence is correct. The goal is a reviewable draft, not a model leaderboard."
      ]
    },
    {
      heading: "Download, cache and offline behaviour",
      paragraphs: [
        "The first run downloads the selected model and stores it in the browser cache. Later runs reuse the cached files, subject to the browser's storage policy and available space. That is why the second transcription can start much faster than the first even though the model has not changed. If the cache is cleared, the browser evicts data under pressure, or the site is opened in a private window that discards storage, the download happens again.",
        "Caching also explains the offline story. A page that is already open and a previously downloaded model can work without a network connection, but a model that was never cached cannot be fetched offline. The same applies to a model variant you have not used before. If you need a predictable offline session, load the exact model once while online, keep the browser profile, and test with the network disabled before relying on it in the field."
      ]
    },
    {
      heading: "What we do not claim about speed",
      paragraphs: [
        'There is no honest universal transcription time. A ten-minute clip can finish while you make coffee on one machine and take long enough to abandon on another. The variables include the model, the runtime, the processor, the GPU, the browser, thermal throttling, the amount of silence and whether the tab stays in the foreground. A published "minutes per hour" number from a different device would not transfer to yours.',
        "The same caution applies to memory. Parameter count gives a rough sense of scale, but the browser's overhead, the audio buffer and the decoded samples all contribute. Measure on the device you will actually use. If a run is interrupted, reduce the model or the file length before assuming the tool is broken."
      ]
    },
    {
      heading: "Test the model on your own clip",
      paragraphs: [
        "Choose a one- to two-minute excerpt with the hardest conditions in the project: the quietest speaker, the most names, the music bed or the language switch. Run tiny and base, then small if the device allows. Compare three things: how many words you must retype, how often the timing needs correction, and how long the review takes. That comparison is more useful than a parameter table alone, because it measures the work you actually do.",
        "If the results are close, keep the smaller model and spend the time on a careful review. If small is clearly better on the hard excerpt, use it for the final pass and keep tiny for the rough cut. The browser approach makes this experimentation cheap because the audio stays on the machine; start from the [main generator](/) or read the [accuracy guide](/guides/how-to-improve-whisper-accuracy) for the audio-side changes that often matter more than model size."
      ]
    }
  ],
  faqs: [
    {
      question: "Which Whisper model should I choose?",
      answer:
        "Choose tiny for a quick draft on a clear, short clip, base for most interviews and tutorials, and small for noisy or non-English audio when the device has memory to spare. Test a short excerpt first, because the best choice depends on the speaker and the recording as much as on the model."
    },
    {
      question: "Which Whisper model to use?",
      answer:
        "Use the smallest model that passes your sample test. Start with base if you have no reason to prefer another size, then move down to tiny for speed or up to small for difficult audio. There is no benefit to a larger download if the extra capacity does not reduce your editing work."
    },
    {
      question: "How long does transcription take?",
      answer:
        "It depends on the device, browser, model and file. A short clip on a fast desktop can feel quick, while the same clip on an older phone may take much longer or run out of memory. There is no universal number, so measure a representative excerpt on the device you plan to use."
    },
    {
      question: "Does a bigger model always give better subtitles?",
      answer:
        "No. A larger model often helps with noise, accents and non-English speech, but it can still mishear a name or a number, and it is slower to test. The better measure is the number of corrections a reviewer has to make on your own audio."
    },
    {
      question: "How much memory does Whisper need in a browser?",
      answer:
        "There is no single figure because the model, audio buffer, page and browser all use memory. Small is the heaviest option here at a measured 249 MB WASM or 485 MB WebGPU download, and it needs more working memory than that while running. Older phones are the most likely to struggle."
    },
    {
      question: "Can I switch models after transcription?",
      answer:
        "Yes. The text is already in the editor, so a new run with another model creates a fresh result rather than changing the old one in place. Keep the version you prefer, or compare the two on a short section before replacing a reviewed transcript."
    }
  ],
  workedExample: {
    title: "Worked example: a boundary at 00:29.800",
    intro:
      "This is the kind of seam you inspect after a 30-second chunk. The first chunk ends at 00:30.000 and the next begins with a 2-second overlap. The duplicated phrase below is deliberate: it shows what the merge step is trying to remove.",
    srt: `1
00:00:27,900 --> 00:00:29,950
The first shipment leaves on Monday.

2
00:00:29,800 --> 00:00:31,200
The first shipment leaves on Monday.

3
00:00:31,250 --> 00:00:34,600
The second one follows on Thursday.`,
    note: "The overlap should give the join enough context, but the repeated sentence can survive when the two chunks punctuate it differently. Delete cue 2, keep cue 1's timing for the sentence and confirm that Thursday is still attached to the second shipment. The measured model download does not affect this check; the seam is a chunking problem."
  },
  sources: [
    {
      label: "OpenAI Whisper repository",
      url: "https://github.com/openai/whisper"
    },
    {
      label: "Robust Speech Recognition via Large-Scale Weak Supervision",
      url: "https://arxiv.org/abs/2212.04356"
    },
    {
      label: "onnx-community/whisper-tiny model card",
      url: "https://huggingface.co/onnx-community/whisper-tiny"
    },
    {
      label: "onnx-community/whisper-base model card",
      url: "https://huggingface.co/onnx-community/whisper-base"
    }
  ],
  relatedGuides: [
    "how-to-improve-whisper-accuracy",
    "how-does-whisper-work",
    "is-browser-transcription-private"
  ],
  keywords: [
    { keyword: "whisper model sizes compared", role: "primary" },
    { keyword: "whisper model sizes", role: "secondary", headingLevel: 2 },
    { keyword: "whisper tiny vs base vs small", role: "secondary", headingLevel: 2 },
    { keyword: "which whisper model should i choose", role: "faq" },
    { keyword: "which whisper model to use", role: "faq" },
    { keyword: "how long does transcription take", role: "faq" },
    { keyword: "does a bigger model always give better subtitles", role: "faq" },
    { keyword: "how much memory does whisper need in a browser", role: "faq" },
    { keyword: "can i switch models after transcription", role: "faq" }
  ]
};
