import type { ToolPageContent } from "../types";

export const tool: ToolPageContent = {
  kind: "tool",
  path: "/private-subtitle-generator",
  preset: "private-subtitle-generator",
  h1: "Private subtitle generator: keep the recording on your device",
  title: "Private subtitle generator — no upload, no account, no queue",
  metaDescription:
    "Use a private subtitle generator that runs Whisper in the browser. Check the network panel, keep audio on your device, and export SRT or VTT without an account.",
  primaryKeyword: "private subtitle generator",
  capsule:
    "A private subtitle generator should be verifiable, not just advertised. VoiceToTextFree runs Whisper inside the browser, keeps the audio on your device, and lets you confirm the absence of an upload in the developer tools network panel before you export SRT or VTT.",
  published: "2026-02-05",
  updated: "2026-10-28",
  author: "Abdul Samad",
  keyFacts: [
    { label: "Processing", value: "Whisper inference runs in a browser worker on your device" },
    { label: "Upload", value: "The audio or video file is never sent to a server" },
    { label: "Account", value: "No signup, no login and no payment details" },
    { label: "Network use", value: "Static page assets and model files, cached after first load" },
    { label: "Verification", value: "Developer tools network panel shows requests during a run" },
    { label: "Output", value: "SRT, VTT or TXT written locally by the browser" }
  ],
  sections: [
    {
      heading: "What local processing changes about privacy",
      paragraphs: [
        "Most online subtitle tools ask you to upload a file, wait for a server to process it, then download the result. That design creates copies in places you cannot inspect: an object store, a worker's temporary disk, a logging pipeline. Local processing removes that whole chain. The file is opened by the browser, decoded in the tab, and transcribed by a model that is already on the machine.",
        "This does not make the tool magic. The browser still runs code, the model still comes from somewhere, and the transcript still ends up as a file on your disk. The claim is narrower and more useful: your media is not transmitted to the site operator or to a transcription API. You can test that claim instead of taking it on trust."
      ]
    },
    {
      heading: "Subtitle generator without uploading: check the network panel",
      paragraphs: [
        "Open the page in a desktop browser and press F12, or use the browser menu to open developer tools. Select the Network tab, clear the existing list, and start a transcription. Watch the requests as the job runs. You will see the page assets, possibly a model file from a public repository, and nothing that contains your recording.",
        "Filter the list by Fetch/XHR, then by Media. A request that carries your file would have to appear as a POST or PUT with a large body, or as a media upload stream. Instead, the requests are ordinary GETs for static files. The [MDN Network Monitor guide](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor) explains the panel controls if the interface is unfamiliar."
      ]
    },
    {
      heading: "Transcribe video without uploading: hosting and model requests",
      paragraphs: [
        "The site is served as static files. When you open a page, the host records a GET for the HTML, scripts, styles and fonts. When the model is not cached, the browser fetches weights from a public model repository. Those requests reveal that someone loaded the page and which model was used. They do not reveal the audio, because the audio is never part of a request.",
        "Hosting logs can therefore show a visit, a user agent and a coarse IP address, just like any website. They cannot show the contents of a file that stayed on your device. If you need to avoid even that metadata, host the built site yourself or run it from a local copy. The [offline subtitle generator](/offline-subtitle-generator) page explains how the cached model enables work without a connection."
      ]
    },
    {
      heading: "Threat model: what stays local and what does not",
      paragraphs: [
        "The media and the transcript stay on the device during processing. What does not stay private automatically: the exported SRT, the browser cache, the screen, and any sync or backup service that copies files from your disk. A shared computer, a remote support session or a browser extension with broad page access can observe more than the site itself.",
        "The model download is a normal file transfer and can be inspected by a network administrator. The page code is public and can be audited. If the device is compromised, local processing offers no protection against a keylogger or a malicious extension. Privacy here means no transmission to a transcription service, not immunity from local threats."
      ]
    },
    {
      heading: "No signup, no account and no card details",
      paragraphs: [
        "There is no signup form, no login and no credit card field. That removes a common source of risk: an account database holding an email address, a password hash and a billing record linked to your uploads. It also means there is no usage dashboard, no saved project history and no cloud copy to recover if you lose the exported file.",
        "A browser based workflow keeps the whole job in one place. You choose the file, review the cues, and download the result. If you move to another computer, you start fresh, including the model download. That is less convenient than an account, but it is also less data left behind on someone else's infrastructure."
      ]
    },
    {
      heading: "Browser permissions, extensions and shared machines",
      paragraphs: [
        "The page reads a file only after you choose it in the file picker. It does not request microphone or camera access, because it processes saved recordings rather than live input. It does need storage for the cached model and JavaScript execution for the transcription worker. A browser that blocks workers or storage will fail before any subtitle is produced.",
        "On a shared machine, use a private window for a one-off sensitive file, then close it. Private windows usually discard the cache when closed, so the next run needs another download. Extensions are the bigger concern: an extension that can read page content may be able to see file names or transcript text. Disable unnecessary extensions, or use a separate browser profile for confidential work."
      ]
    },
    {
      heading: "Verification checklist and export",
      paragraphs: [
        "Before trusting the setup, run a short test file with the network panel open. Confirm that no request carries the file, that the model request is a static download, and that the transcript appears while the network is disconnected after the model is cached. Repeat the test on the machine and browser you actually plan to use, because storage and extension behaviour differ.",
        "Then clean the cues and export. Use the [SRT editor](/srt-editor) for timing and text changes, and the [subtitle validator](/subtitle-validator) for line length and reading speed. If the file is a video, start from [video to SRT](/video-to-srt); for a voice recording, use [audio to SRT](/audio-to-srt). The homepage at [VoiceToTextFree](/) lists the other local tools. Keep [these verification steps](/private-subtitle-generator) handy when you repeat the check on another machine."
      ]
    }
  ],
  faqs: [
    {
      question: "How can I tell if my video is uploaded?",
      answer:
        "Open the developer tools network panel, clear the list, and start a transcription. Look for requests that carry your file as a body or media stream. In a local run you see static page and model requests, not an upload of the recording."
    },
    {
      question: "Do I need an account or a credit card?",
      answer:
        "No. There is no signup, login or payment form. The trade-off is that there is no saved project history or cloud copy, so keep your exported files somewhere you control."
    },
    {
      question: "Does the tool work without an internet connection?",
      answer:
        "Only after the page and model have been cached during an earlier visit. The first run needs a connection to fetch them. Clearing site data removes the cache and requires another download."
    },
    {
      question: "What does the server see when I use it?",
      answer:
        "A static host sees a request for the page and, if the model is not cached, requests for model files. It does not receive the audio. Normal hosting logs may still record a visit time, user agent and IP address."
    },
    {
      question: "Is it safe for confidential interviews?",
      answer:
        "It avoids sending the recording to a transcription service, which removes a major exposure path. It cannot protect against a compromised device, a malicious extension or an insecure place where you store the exported transcript. Assess those local risks separately."
    },
    {
      question: "Can I use it on a shared computer?",
      answer:
        "Yes, but use a private window for a one-off sensitive file and close it afterwards. Private windows usually discard the cached model, so the next run will download it again. Disable extensions that can read page content."
    }
  ],
  workedExample: {
    title: "SRT exported after a verified local run",
    intro:
      "The network panel was open for the whole job. The only large request was the cached model file; the recording itself never appeared as a request body.",
    srt: `1
00:00:01,500 --> 00:00:04,800
The file picker is the only time the page reads the video.

2
00:00:05,200 --> 00:00:08,600
After that, the audio is decoded inside the tab.

3
00:00:09,100 --> 00:00:12,400
You can watch the request list and see that for yourself.`,
    note: "Save the SRT somewhere you control. A local transcript can still be copied by a sync client, a backup tool or another person using the same device."
  },
  sources: [
    {
      label: "MDN — Network Monitor",
      url: "https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor"
    },
    { label: "MDN — Cache API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Cache" },
    { label: "OpenAI Whisper repository", url: "https://github.com/openai/whisper" },
    {
      label: "Hugging Face — whisper-base ONNX model card",
      url: "https://huggingface.co/onnx-community/whisper-base"
    }
  ],
  relatedGuides: [
    "is-browser-transcription-private",
    "subtitle-and-captioning-workflow",
    "how-to-improve-whisper-accuracy",
    "how-to-create-and-edit-an-srt-file"
  ],
  keywords: [
    { keyword: "private subtitle generator", role: "primary" },
    { keyword: "subtitle generator without uploading", role: "secondary", headingLevel: 2 },
    { keyword: "transcribe video without uploading", role: "secondary", headingLevel: 2 },
    { keyword: "subtitle generator no upload", role: "synonym" },
    { keyword: "browser based subtitle generator", role: "synonym" },
    { keyword: "local transcription in browser", role: "synonym" },
    { keyword: "subtitle generator no signup", role: "synonym" },
    { keyword: "subtitle generator no account", role: "synonym" },
    { keyword: "subtitle generator no credit card", role: "synonym" },
    { keyword: "How can I tell if my video is uploaded?", role: "faq" },
    { keyword: "Do I need an account or a credit card?", role: "faq" },
    { keyword: "Does the tool work without an internet connection?", role: "faq" },
    { keyword: "What does the server see when I use it?", role: "faq" },
    { keyword: "Is it safe for confidential interviews?", role: "faq" },
    { keyword: "Can I use it on a shared computer?", role: "faq" }
  ]
};
