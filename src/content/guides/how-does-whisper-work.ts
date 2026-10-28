import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/how-does-whisper-work",
  h1: "How does Whisper work? The model behind browser subtitles",
  title: "How does Whisper work? The model behind browser subtitles",
  metaDescription:
    "How does Whisper work? Follow audio through a log-Mel spectrogram, an encoder-decoder Transformer and 30-second windows, then see how it runs on WebGPU or WASM.",
  primaryKeyword: "how does whisper work",
  capsule:
    "How does Whisper work? It turns audio into a log-Mel spectrogram, encodes that representation with a Transformer, and decodes text tokens one at a time. A browser build runs the same encoder and decoder through ONNX and Transformers.js, using WebGPU or WASM, in 30-second windows with timestamps.",
  published: "2026-01-28",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Input audio",
      value: "Resampled to 16 kHz, then converted to an 80-channel log-magnitude Mel spectrogram"
    },
    {
      label: "Window",
      value: "25 ms analysis windows with a 10 ms stride, grouped into 30-second model inputs"
    },
    {
      label: "Architecture",
      value: "An encoder-decoder Transformer with tied text input and output token representations"
    },
    {
      label: "Language tokens",
      value: "A special token identifies one of 99 languages before the text is decoded"
    },
    {
      label: "Timestamps",
      value: "Predicted alongside text at a native resolution of 20 milliseconds"
    },
    {
      label: "Browser path",
      value: "ONNX weights run through Transformers.js on WebGPU fp16 or WASM q8"
    }
  ],
  sections: [
    {
      heading: "The short version: an encoder and a decoder",
      paragraphs: [
        "Whisper is a sequence-to-sequence model. The encoder reads a fixed representation of the audio and builds a context-rich internal state. The decoder then writes text one token at a time, using that state and the tokens it has already produced. The same model can transcribe speech, translate speech into English, identify the spoken language and mark voice activity because those jobs are expressed as special tokens rather than as separate models.",
        "The OpenAI paper describes a fairly conventional Transformer design: an encoder and a decoder of equal width and depth, with pre-activation residual blocks and a final layer normalisation on the encoder side. Tiny uses four layers, base uses six and small uses twelve, with widths of 384, 512 and 768 respectively. That is why a larger model downloads more and runs more slowly: there is more computation between the spectrogram and each predicted word."
      ]
    },
    {
      heading: "From sound to numbers: the log-Mel spectrogram",
      paragraphs: [
        "The model never sees a waveform directly. Audio is resampled to 16 kHz and converted into an 80-channel log-magnitude Mel spectrogram. The paper specifies 25-millisecond analysis windows with a stride of 10 milliseconds. This representation compresses the raw samples into a time-frequency picture that emphasises the bands useful for speech while discarding some fine detail the model does not need.",
        "Two convolution layers form a small stem that processes the spectrogram before the Transformer blocks. A 30-second window becomes a sequence of frames; that length is fixed by the model, not by the length of the upload. A short clip is padded to 30 seconds, while a long recording is split into windows. This is the fundamental reason a browser cannot simply hand an hour-long file to Whisper in one call."
      ]
    },
    {
      heading: "Special tokens choose the language and the task",
      paragraphs: [
        "Decoding starts with a start-of-transcript token. The next token identifies the spoken language, chosen from 99 language tokens in the model's training format. Then comes a task token: transcribe or translate. A timestamp mode token tells the decoder whether to emit time markers, and a no-speech token covers silence. Only after those decisions does the model begin producing the words.",
        "This token interface explains several behaviours that look like quirks. If the language token is wrong, the text may be confidently wrong in the wrong language. If the audio is ambiguous, the decoder can produce a fluent phrase that was never spoken, because it is predicting language as well as matching sound. If the clip is short or starts with music, the language guess has very little evidence to work with. Setting the language explicitly removes that uncertainty."
      ]
    },
    {
      heading: "Whisper subtitle generator: from audio to timed cues",
      paragraphs: [
        "A subtitle needs more than a transcript; it needs a start and an end for each line. Whisper predicts timestamps in 20-millisecond units and interleaves them with text tokens. In a browser tool, those predictions are turned into cue objects and then into SRT or WebVTT. This site's worker asks for timestamps, reads the returned chunks, rounds the start and end to milliseconds and adds a short 0.4-second tail to each cue so the line does not vanish the instant the last phoneme ends.",
        "Long files add another layer. The application cuts audio into 30-second chunks with a 2-second overlap, transcribes each chunk, shifts the timestamps by the chunk's offset, and merges neighbouring results. The overlap is there to give the model context at the seam, but repeated words still need review. The [subtitle generator](/) is therefore a pipeline of audio decoding, chunking, model inference, timestamp conversion and text merging, not a single magical step."
      ]
    },
    {
      heading: "Whisper on WebGPU: what changes in the browser",
      paragraphs: [
        "The original Whisper runs in PyTorch. A browser cannot load that stack directly, so the model is converted to ONNX and executed by ONNX Runtime Web through Transformers.js. Transformers.js loads the encoder and decoder, runs the preprocessing and exposes an automatic-speech-recognition pipeline. The weights come from an onnx-community repository derived from the OpenAI checkpoint.",
        "WebGPU lets that pipeline use the device's GPU. The worker requests fp16 weights for WebGPU and q8 weights for WASM, which is why the measured download sizes differ: tiny is 41 MB on WASM and 76 MB on WebGPU, base is 77 MB and 146 MB, and small is 249 MB and 485 MB. WebGPU support is still uneven, so the worker falls back to WASM when a WebGPU model fails. The GPU path can be faster on suitable hardware, but it is not a guarantee on every browser or driver."
      ]
    },
    {
      heading: "Does whisper work on mobile?",
      paragraphs: [
        "Yes, with qualifications. The model can run in a mobile browser, but the tab has less memory to work with and the operating system may suspend it when the screen locks or the user switches apps. Tiny is the realistic starting point. Base may work on a recent phone with a clear clip. Small is more likely to exhaust the tab, especially on older devices.",
        "Mobile also changes the practical workflow. Keep the page in the foreground, use a short file for the first test, and avoid opening many other tabs. If the browser does not expose WebGPU, the WASM path still runs but may be slower. A failed run is usually a memory or tab-lifecycle problem rather than a sign that the audio is unsupported. Test the exact phone and browser you plan to use before promising a client a mobile turnaround."
      ]
    },
    {
      heading: "Long audio is stitched from 30-second windows",
      paragraphs: [
        "Whisper was trained on 30-second segments and cannot attend to an hour of audio at once. The paper's long-form strategy transcribes consecutive windows and shifts the window according to predicted timestamps, with beam search and temperature scheduling to reduce repetition. This implementation takes a simpler, explicit route: fixed 30-second chunks with a 2-second overlap and a merge step that removes duplicated words at the boundary.",
        "Both approaches have edge cases. A speaker who starts a sentence just before a boundary may be cut off, and a noisy passage may produce a repeated phrase. The model can also hallucinate during long silence or music, because the decoder is still trying to predict plausible text. Review the joins, keep the source audio nearby and treat a suspiciously fluent line in a silent section as a warning rather than a transcript."
      ]
    },
    {
      heading: "Why the first run downloads a model",
      paragraphs: [
        "The weights are not part of the page's initial JavaScript bundle. On the first transcription, Transformers.js requests the selected ONNX files from Hugging Face and stores them in the browser cache. That is why the progress indicator shows individual files and why the first run feels different from later ones. The request is for model data, not for the user's audio.",
        "Once the files are cached, later runs can reuse them, subject to the browser's storage limits. A private window, a cleared cache or storage pressure can remove the copy, forcing another download. Offline use is possible only for a model that has already been cached; an uncached variant cannot be fetched without a network. The [model size comparison](/guides/whisper-model-sizes-compared) covers the tradeoff between download size and capability."
      ]
    },
    {
      heading: "What Whisper does not do",
      paragraphs: [
        "Whisper is not a speaker diarisation system. It does not reliably label who said which line, and the model card warns that it should not be used for subjective classification or high-risk decisions. It does not produce a second-language translation on demand; the translate task writes English. It does not guarantee punctuation, consistent names or correct numbers, and it is not a real-time streaming API out of the box.",
        "Those limits are not defects to hide; they define the review workflow. Use the model for the heavy lifting, then check the parts that matter: names, figures, legal or medical terms, and any line where the audio is unclear. The [accuracy guide](/guides/how-to-improve-whisper-accuracy) turns those limits into a practical checklist, and the [privacy guide](/guides/is-browser-transcription-private) explains what local execution does and does not protect."
      ]
    }
  ],
  faqs: [
    {
      question: "Does Whisper support Urdu?",
      answer:
        "Yes, Urdu is among the languages represented in Whisper's multilingual models. Quality depends on the speaker, recording and model size, and the training data is uneven across languages. Test a short sample with the intended speaker and keep a native reviewer involved. The [language pages](/languages) list what has been checked."
    },
    {
      question: "Does Whisper support Hindi?",
      answer:
        "Yes, Hindi is supported by the multilingual checkpoints. A clean recording with a larger model is more likely to produce a useful draft than a noisy phone clip with tiny. As with any language, check names, numbers and code-switched English words rather than assuming the transcript is ready to publish."
    },
    {
      question: "Does Whisper support low resource languages?",
      answer:
        "Many are represented, but OpenAI's model card warns that accuracy is lower for low-resource and low-discoverability languages. The paper also links performance to the amount of training data available for a language. Treat the output as a draft, test a real sample and avoid publishing unreviewed captions, especially where the language has few speakers or limited written material."
    },
    {
      question: "What languages does Whisper support?",
      answer:
        "The model format has 99 language tokens, and OpenAI's training data covers dozens of languages beyond English. The exact quality varies widely, so the token list is not a promise of usable output. Check the language pages and your own sample rather than reading the count as a quality score."
    },
    {
      question: "Can Whisper run without an internet connection?",
      answer:
        "Yes, once the page is open and the model has been downloaded and cached. A previously cached model can run offline in that tab, but a model variant that has never been loaded cannot be fetched without a connection. Test the offline path in the exact browser profile you plan to use."
    },
    {
      question: "Does Whisper identify speakers?",
      answer:
        "No, not reliably. Whisper transcribes speech; it does not produce dependable speaker labels or diarisation. Some workflows add a separate diarisation step, but the transcript alone should not be treated as proof of who spoke. Label speakers manually when the distinction matters."
    }
  ],
  workedExample: {
    title: "Worked example: one 30-second window in SRT",
    intro:
      "Here is a three-cue result for a short window. Whisper predicts times in 20-millisecond units; the application rounds them to milliseconds and extends the end of each cue by 0.4 seconds so the text remains readable.",
    srt: `1
00:00:00,000 --> 00:00:03,120
The meeting starts at nine.

2
00:00:03,500 --> 00:00:07,840
Bring the printed agenda and the blue folder.

3
00:00:08,000 --> 00:00:11,360
We will review the budget first.`,
    note: "The first cue starts at zero because the chunk offset is zero. The worker adds 0.4 seconds to the end of each cue, not to the start, so a segment the model ends at 2.720 appears here as 3.120. The 20 ms source resolution is finer than a viewer can perceive, but the chunk offset still has to be added correctly or every cue after the first window will drift."
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
    "how-to-improve-whisper-accuracy",
    "is-browser-transcription-private"
  ],
  keywords: [
    { keyword: "how does whisper work", role: "primary" },
    { keyword: "whisper subtitle generator", role: "secondary", headingLevel: 2 },
    { keyword: "whisper on webgpu", role: "secondary", headingLevel: 2 },
    { keyword: "does whisper work on mobile", role: "secondary", headingLevel: 2 },
    { keyword: "does whisper support urdu", role: "faq" },
    { keyword: "does whisper support hindi", role: "faq" },
    { keyword: "does whisper support low resource languages", role: "faq" },
    { keyword: "what languages does whisper support", role: "faq" },
    { keyword: "can whisper run without an internet connection", role: "faq" },
    { keyword: "does whisper identify speakers", role: "faq" }
  ]
};
