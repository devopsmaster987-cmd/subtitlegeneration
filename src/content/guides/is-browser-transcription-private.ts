import type { GuideContent } from "../types";

export const guide: GuideContent = {
  kind: "guide",
  path: "/guides/is-browser-transcription-private",
  h1: "Is browser transcription private? What stays on your device",
  title: "Is browser transcription private? What stays on your device",
  metaDescription:
    "Is browser transcription private? See what runs locally, what hosting logs and model downloads still reveal, and how to verify the network behaviour yourself.",
  primaryKeyword: "is browser transcription private",
  capsule:
    "Is browser transcription private? In this tool, audio is decoded and transcribed inside the tab, so the media file is not uploaded. A static site can still receive ordinary hosting logs, and the first run downloads model files from Hugging Face. Privacy therefore depends on the device and browser context, not only on the lack of an upload button.",
  published: "2026-01-28",
  updated: "2026-10-28",
  author: "Abdul Samad",
  readingMinutes: 9,
  keyFacts: [
    {
      label: "Media handling",
      value:
        "The selected file is read in the page and decoded by FFmpeg running in a browser worker"
    },
    {
      label: "Speech recognition",
      value:
        "Whisper runs in a web worker through Transformers.js; audio is not posted for inference"
    },
    {
      label: "Model download",
      value: "The first run fetches ONNX model files from Hugging Face and caches them"
    },
    {
      label: "Ordinary web logs",
      value: "A static host may still record IP address, user agent, requested page and time"
    },
    {
      label: "Local storage",
      value: "Consent and theme preferences use localStorage; the transcript stays in page memory"
    },
    {
      label: "Not a guarantee",
      value:
        "A shared device, a malicious extension or screen recording is outside the tool's control"
    }
  ],
  sections: [
    {
      heading: "The short answer: the audio stays in the tab",
      paragraphs: [
        "When you choose a file, the browser reads it locally. FFmpeg, compiled to WebAssembly, extracts a mono 16 kHz audio track inside a worker. That audio is passed to another worker that runs Whisper. There is no API endpoint in this application that accepts your video, and no account is needed to start a transcription. The text appears in the page, and the download buttons create a file on your own machine.",
        "That is the core of the privacy claim, and it is narrower than a promise that nothing leaves the device. The page itself came from a server, the model comes from a model host, and the browser may keep logs or storage. A useful answer separates the file content from the surrounding metadata. The [private subtitle generator](/private-subtitle-generator) page describes the intended workflow; this guide examines the boundary."
      ]
    },
    {
      heading: "Browser transcription privacy starts with local processing",
      paragraphs: [
        "Local processing means the machine doing the recognition is the one displaying the page. The media worker uses the bundled FFmpeg build to decode the container and resample the audio; the transcription worker loads the selected model and processes 30-second chunks. The worker messages carry audio buffers and text results between parts of the same tab. They do not travel over the network.",
        "This design removes a whole class of risk: there is no server-side copy of the recording to breach, retain or hand to a third party. It also means the result is limited by the device. A phone that cannot hold the model will fail locally rather than quietly sending the file somewhere else. If a future change introduced a server fallback, that would be a material change to the privacy model and should be visible in the source and on the [privacy policy](/privacy-policy)."
      ]
    },
    {
      heading: "What a static site can still see",
      paragraphs: [
        "A static site is still a website. The hosting provider receives an HTTP request for the page, the JavaScript bundles, the FFmpeg core and any fonts or images. Those requests normally include an IP address, a user agent, the requested path, a referrer if the browser sends one, and a timestamp. The provider may keep access logs for security, billing or troubleshooting. None of that requires the audio file, and none of it contains the transcript.",
        "The distinction matters when someone asks whether a tool is anonymous. Local transcription can keep the content private while the visit is still attributable at the network layer. If the page is served through a CDN, the CDN also sees the request. If the site is opened through a corporate proxy or a managed browser, that layer may log more. The [privacy policy](/privacy-policy) should describe the deployment's actual providers rather than relying on a generic slogan."
      ]
    },
    {
      heading: "Hosting logs and analytics are separate from transcription",
      paragraphs: [
        "Analytics and advertising are separate scripts with their own requests. This site has a consent banner and an advertising switch; when ads are disabled, the ad component renders nothing. When analytics or ads are enabled on a deployment, those scripts may send page-level events such as the page URL, a timestamp or a browser identifier. They do not need the audio or the subtitle text, and the transcription worker does not hand either to them.",
        "Consent choices are stored in localStorage under a small set of keys, and the theme preference is stored the same way. Those values are not the transcript. The editor keeps cues in the page's memory, and the interface tells the user to download the file because nothing is saved to the site. Closing the tab without downloading can therefore lose the work. That is a data-retention property, not only a privacy one."
      ]
    },
    {
      heading: "Model download requests to Hugging Face",
      paragraphs: [
        "The first run fetches the selected ONNX model from Hugging Face. Those requests reveal that a browser at a particular IP address requested a model file, along with the usual request metadata. They do not contain the audio being transcribed. The model host does not need your media to serve a public weight file, and the inference happens after the download on your machine.",
        "The download is also cached. Transformers.js is configured to use the browser cache, so a later run can reuse the files instead of requesting them again. That is convenient, but it means the first run has a visible network dependency. If you need a fully offline session, load the exact model once while online, keep the browser profile, and test with the network disabled. An uncached model cannot appear from nowhere."
      ]
    },
    {
      heading: "Local storage, browser cache and offline limits",
      paragraphs: [
        "There are three different storage stories here, and mixing them up causes bad advice. The transcript lives in memory and is exported as a download. Preferences and consent live in localStorage. Model weights live in the browser's cache, managed by the Transformers.js runtime and subject to eviction. None of these is a server-side transcript archive, but all of them can persist on the device.",
        "Offline use works only after the required files are cached and the page is already loaded. A previously used model can run without a connection inside that tab, but a new model variant or a cleared cache needs the network. Reopening the site from scratch while offline depends on whether the browser still has the page assets. A private browsing window may discard storage when it closes. On a shared device, the next person may be able to reopen the page, but they cannot read a transcript that was never saved; they may, however, see cached model files and stored preferences."
      ]
    },
    {
      heading: "How to verify the network behaviour yourself",
      paragraphs: [
        "You do not have to take the claim on trust. Open the browser's developer tools, switch to the Network panel, clear the list, and start a short transcription. Watch the requests that appear. You should see the page assets, the FFmpeg core, and the model files. You should not see a request whose body is your video or a multipart upload containing the audio.",
        "Filter by Fetch/XHR to reduce noise, then inspect the request method, URL and payload for the largest requests. A POST with a media body would be the thing to question; model downloads are normally GET requests for static files. Repeat the test with the network set to offline after a successful run. If the cached model still transcribes, that is strong evidence that inference is local. Also check the Console for errors and the Application panel for cache and localStorage entries."
      ],
      steps: [
        "Open DevTools before selecting a file, so the first request is captured.",
        "Clear the Network log, then start a ten-second transcription.",
        "Check that model requests go to a model host and that no request carries the media bytes.",
        "After one successful run, switch the network to offline and repeat with the same model.",
        "Inspect localStorage and the cache to see what persists on the device."
      ]
    },
    {
      heading: "Threat model: shared device, extensions and screen recording",
      paragraphs: [
        "Local processing does not protect you from the device itself. A browser extension with permission to read page content can read the transcript as it appears. A person using the same unlocked computer can open the page or watch the screen. Screen-recording software, remote-support tools and a compromised operating system sit below the browser and can capture what the tab displays. The tool cannot defend against a hostile environment it does not control.",
        "There is also the question of who owns the recording. Transcribing a conversation does not by itself give you the right to record or publish it. Consent, workplace policy and local law still apply. If the material is sensitive, use a device you control, close unnecessary extensions, lock the screen when you step away and download the subtitle file to a location with appropriate access controls. [Offline use](/offline-subtitle-generator) reduces the network dependency but not the human ones."
      ]
    },
    {
      heading: "What we do not claim",
      paragraphs: [
        "We do not claim that the tool is perfectly secure, anonymous or invisible to every intermediary. We claim that the media is processed in the browser and is not uploaded for transcription. That claim can be checked in the code, in the worker messages and in the Network panel. It is a statement about the application's data flow, not a warranty about the hosting provider, the browser vendor, the model host or the device.",
        "A realistic privacy decision weighs the content, the people who can access the device and the network path. For a confidential interview, local processing removes the biggest third-party copy, but it does not remove every risk. Keep the review workflow on a trusted machine, export deliberately and delete files you no longer need. The [how Whisper works](/guides/how-does-whisper-work) guide explains why the model must be downloaded before the first run, which is the main external request you will see."
      ]
    }
  ],
  faqs: [
    {
      question: "Is my video uploaded to a server?",
      answer:
        "No. The file is read by the page and decoded in a browser worker, and the audio is passed to the local Whisper worker. There is no upload endpoint for the media. You can confirm this by watching the Network panel during a run and checking that no request carries the video bytes."
    },
    {
      question: "Is my file uploaded to a server?",
      answer:
        "The media file is not sent to the site's server. The page, scripts and model weights are downloaded to your browser, which is the opposite direction. If you use a cloud-synced folder or a browser profile that syncs downloads, the exported subtitle file may leave the device through that separate service."
    },
    {
      question: "Does browser transcription work offline?",
      answer:
        "It can, once the page is open and the selected model has been cached. A model that has never been downloaded cannot be fetched without a connection. Test the offline case in the same browser profile you plan to use, and keep the tab open because a mobile browser may discard the worker."
    },
    {
      question: "What data does the hosting provider see?",
      answer:
        "The provider can see ordinary request data such as IP address, user agent, requested URL and time. It does not receive the audio or the transcript through the transcription flow. CDNs, proxies and corporate network tools may add their own logs, so the exact answer depends on how the site is served."
    },
    {
      question: "Can browser extensions read my subtitles?",
      answer:
        "An extension with permission to access page content can read text displayed in the tab, including a transcript. That is outside the control of the site. Use a clean browser profile or disable unnecessary extensions when the material is sensitive, and treat the device as part of the privacy boundary."
    },
    {
      question: "What are the risks on a shared computer?",
      answer:
        "Someone else may see the screen, reopen the page, inspect browser storage or use the same account. The transcript is not saved to the site, but it can remain visible in the tab and in any file you export. Lock the device, use a private profile where appropriate and move downloads to protected storage."
    }
  ],
  workedExample: {
    title: "Worked example: a network timeline for a short clip",
    intro:
      "This is the order to look for in the Network panel, not a capture from a particular machine. Exact times and file names depend on the browser, cache state and model, but the separation between model traffic and media traffic is the point.",
    srt: `00:00.000  Page, scripts and styles load.
00:02.140  Model configuration and tokenizer files load.
00:02.480  Encoder and decoder weights download (measured 41 MB for tiny on WASM).
00:06.900  FFmpeg core runs; the local audio track is decoded.
00:07.400  Transcription worker starts; no media-sized POST appears.
00:18.200  Cues appear in the editor; export creates a local file.`,
    note: "A model request is a GET for a static asset. A media upload would look different: a POST with a large body, usually to an application endpoint. Inspect the largest requests and their payloads. After the model is cached, repeat the run offline; if the transcript still appears, the inference path is local, even though the first run needed the network."
  },
  sources: [
    {
      label: "MDN — Fetch API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
    },
    {
      label: "MDN — Cache",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Cache"
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
    "how-does-whisper-work",
    "whisper-model-sizes-compared",
    "how-to-improve-whisper-accuracy"
  ],
  keywords: [
    { keyword: "is browser transcription private", role: "primary" },
    { keyword: "browser transcription privacy", role: "secondary", headingLevel: 2 },
    { keyword: "hosting logs", role: "secondary", headingLevel: 2 },
    { keyword: "model download requests", role: "secondary", headingLevel: 2 },
    { keyword: "local storage", role: "secondary", headingLevel: 2 },
    { keyword: "is my video uploaded to a server", role: "faq" },
    { keyword: "is my file uploaded to a server", role: "faq" },
    { keyword: "does browser transcription work offline", role: "faq" },
    { keyword: "what data does the hosting provider see", role: "faq" },
    { keyword: "can browser extensions read my subtitles", role: "faq" },
    { keyword: "what are the risks on a shared computer", role: "faq" }
  ]
};
