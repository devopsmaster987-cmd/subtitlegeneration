import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/offline-subtitle-generator",
  preset: "offline-subtitle-generator",
  h1: "Offline subtitle generator that runs Whisper in your browser",
  title: "Offline subtitle generator — local Whisper without a server queue",
  metaDescription:
    "Use this offline subtitle generator after the model is cached once. The first visit needs a connection; later runs transcribe locally, with no server queue.",
  primaryKeyword: "offline subtitle generator",
  capsule:
    "An offline subtitle generator is only fully offline after the Whisper model has been downloaded once. The first visit needs a network connection to load the app and model files, and clearing browser storage removes that cache, so the next run must fetch them again.",
  published: "2026-02-05",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "First visit", value: "Network required for the app, model and language files" },
    { label: "Later runs", value: "Can work offline when the browser cache still holds the model" },
    {
      label: "Model sizes",
      value: "About 41 MB, 77 MB or 249 MB for WASM, depending on the model"
    },
    {
      label: "Cache loss",
      value: "Clearing site data or using a private window forces a new download"
    },
    { label: "Queue", value: "No server queue; the job runs in the tab on your device" },
    { label: "Output", value: "SRT, VTT or TXT after local review" }
  ],
  sections: [
    {
      heading: "What happens on the first visit",
      paragraphs: [
        "This page works offline only after the Whisper model has been downloaded once. The first visit needs a network connection to fetch the app and the model files; after that, the browser cache lets you transcribe a local recording without contacting a server. Clearing site data, using a private window, or switching browsers removes that cache, and the next run must download the model again. There is no server queue, so nothing waits behind other users, but the tab must stay open while the model runs.",
        "The download is the part people underestimate. With the Fast model and the WASM backend, the weights are about 41 MB; Balanced is about 77 MB and Accurate is about 249 MB. Those figures come from the model cards used by this site, and they can change if the repositories publish new files. The progress panel names the file being fetched so a slow connection does not look like a frozen transcription."
      ]
    },
    {
      heading: "Working offline after the model is cached",
      paragraphs: [
        "Once the model is stored, disconnect the network and reload the page. A service worker can serve the app shell, and the browser serves the model from its cache. Choose a file, press Generate, and the transcription runs entirely on the device. If the page fails to load at all, the app shell was not cached; load it once more while online before relying on the offline path.",
        "Offline does not mean instant. A laptop with WebGPU is much faster than an older phone using WASM, and a long recording still takes time proportional to its length. The advantage is predictability and privacy, not raw speed. Close other memory-heavy tabs before starting, because the file, decoded audio and model all compete for the same limited pool."
      ]
    },
    {
      heading: "Whisper in browser: what runs on your device",
      paragraphs: [
        "Whisper is a speech recognition model that converts audio into text. In this setup it runs through a browser runtime rather than a native app. The page extracts a 16 kHz mono track with ffmpeg.wasm, splits it into roughly 30-second chunks with a two-second overlap, and sends each chunk to the model in a worker. The worker returns text and timings, and the page stitches the chunks back together.",
        "Nothing in that pipeline requires a remote API. The model files are static assets served from a public repository and cached by the browser. Audio frames never leave the tab. This is why the tool can keep working after the network is switched off: everything needed for inference is already on disk, assuming the cache has not been evicted."
      ]
    },
    {
      heading: "Local transcription after the first download",
      paragraphs: [
        "The second run is where the local design pays off. Open the page, load another file, and press Generate. There is no account check, no upload progress bar and no queue position. The same model and language data are reused, so the wait is mostly inference time. For a series of short clips, that makes repeated work practical without re-downloading anything.",
        "If you update the browser or clear storage to free space, the cache may be removed. The page then falls back to a download and continues once it finishes. A private or incognito window usually starts with an empty cache and discards it when closed, so it is the wrong place for offline repeat work even though it is a reasonable place for a one-off private job."
      ]
    },
    {
      heading: "On device speech to text without a server",
      paragraphs: [
        "Keeping the audio on the device changes the risk profile. There is no upload to intercept, no vendor retention policy to read and no API key to leak. The remaining risks are local: another person using the same computer, a browser extension with broad permissions, or a sync service that copies the downloaded files to a cloud folder. The transcript itself can still be exposed after export.",
        "The [private subtitle generator](/private-subtitle-generator) page describes a network-panel check that shows what the page requests. In an offline run, after the app shell and model are cached, the request list should be empty when you press Generate. That is a stronger claim than a privacy paragraph, because you can reproduce it."
      ]
    },
    {
      heading: "Cache clearing, private windows and browser updates",
      paragraphs: [
        "Browsers evict caches when storage pressure rises, when site data is cleared, and sometimes after major version updates. There is no backup copy on this site. If offline access matters for a field job, test the full flow before you leave: load the page online, run a short clip, switch to airplane mode, reload, and run another clip. If either step fails, the cache is incomplete.",
        "Private browsing is useful for a single sensitive file but not for planned offline work. Some browsers also isolate storage per profile, so a different profile behaves like a first visit. Keep one browser and one profile for repeat jobs, and avoid clearing site data until the project is finished."
      ]
    },
    {
      heading: "No server queue, device limits and repeat jobs",
      paragraphs: [
        "A server-backed service can throw more hardware at a long file. This page cannot. The model runs on the same device that holds the audio, so an old phone may take a long time or run out of memory on a large file. The trade-off is that there is no queue, no per-minute billing and no third party holding the recording. For a ten-minute interview on a modern laptop, that is usually a good exchange.",
        "Use the Fast model for drafts and the Accurate model for difficult audio, then keep the exported SRT and a clean copy of the source. The [video to SRT](/video-to-srt) and [audio to SRT](/audio-to-srt) pages describe the input-specific details. After export, the [SRT editor](/srt-editor) handles timing changes and the [subtitle validator](/subtitle-validator) checks cue overlaps, line length and reading speed before the file goes to a player. The [VoiceToTextFree](/) homepage lists the other tools; bookmark [this offline workflow](/offline-subtitle-generator) before a field recording."
      ]
    }
  ],
  faqs: [
    {
      question: "Does it work offline?",
      answer:
        "Only after the model has been downloaded once. The app and model files are cached by the browser, and a later run can transcribe a saved file without a connection. The very first visit still needs the network."
    },
    {
      question: "Does the subtitle generator work offline?",
      answer:
        "Yes, with the same condition: the model must already be cached. If you see a download progress bar, the browser is still fetching weights and the run is not fully offline yet. After that, the audio stays on the device."
    },
    {
      question: "How large is the model download?",
      answer:
        "With the WASM backend the downloads are roughly 41 MB for Fast, 77 MB for Balanced and 249 MB for Accurate. WebGPU builds can be larger. The progress panel shows the file being fetched."
    },
    {
      question: "Why does it ask for a network connection on the first visit?",
      answer:
        "The browser has to fetch the page, the transcription runtime and the model weights before it can work on its own. Those files are static assets, not an upload service. Once they are cached, the network is no longer needed for transcription."
    },
    {
      question: "What happens if I clear my browser cache?",
      answer:
        "The cached model is deleted, so the next run must download it again. Nothing else is lost unless you also cleared the exported files. Test the offline flow before relying on it for a field recording."
    },
    {
      question: "Is anything sent to a server while it runs?",
      answer:
        "No audio is sent. The page may request static app and model files when they are not cached, but the transcription itself happens in the tab. The network panel can confirm what is requested during a run."
    }
  ],
  workedExample: {
    title: "An SRT produced with the network switched off",
    intro:
      "The model had been cached during an earlier visit. The laptop was put into airplane mode before the file was loaded, and this is the start of the exported file.",
    srt: `1
00:00:02,000 --> 00:00:05,300
The cache is the part that makes this work.

2
00:00:05,800 --> 00:00:09,100
Without it, the browser has to fetch the model again.

3
00:00:09,600 --> 00:00:13,000
Test the whole flow before you leave the office.`,
    note: "If the first cue never appears and the progress panel stays on the model download, the cache was missing or incomplete. Reconnect, finish the download, and test once more."
  },
  sources: [
    { label: "MDN — Cache API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Cache" },
    {
      label: "MDN — Service Worker API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
    },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" },
    {
      label: "Hugging Face — whisper-tiny ONNX model card",
      url: "https://huggingface.co/onnx-community/whisper-tiny"
    }
  ],
  relatedGuides: [
    "is-browser-transcription-private",
    "how-to-improve-whisper-accuracy",
    "whisper-model-sizes-compared",
    "how-does-whisper-work"
  ],
  keywords: [
    { keyword: "offline subtitle generator", role: "primary" },
    { keyword: "whisper in browser", role: "secondary", headingLevel: 2 },
    { keyword: "local transcription", role: "secondary", headingLevel: 2 },
    { keyword: "on device speech to text", role: "secondary", headingLevel: 2 },
    { keyword: "Does it work offline?", role: "faq" },
    { keyword: "Does the subtitle generator work offline?", role: "faq" },
    { keyword: "How large is the model download?", role: "faq" },
    { keyword: "Why does it ask for a network connection on the first visit?", role: "faq" },
    { keyword: "What happens if I clear my browser cache?", role: "faq" },
    { keyword: "Is anything sent to a server while it runs?", role: "faq" }
  ]
};
