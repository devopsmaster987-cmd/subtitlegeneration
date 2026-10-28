# VoiceToTextFree

VoiceToTextFree is a static Next.js site with a working browser-based subtitle generator. It extracts audio with ffmpeg.wasm, transcribes with Whisper through transformers.js, and lets the user edit cues and export SRT, VTT or TXT. There is no upload endpoint, account or paid API.

## Requirements

- Node.js 20 or newer (tested with Node 24.18.0)
- npm 10 or newer
- A Chromium-based browser with WebGPU for the fastest runs; WebAssembly works without WebGPU.

## Install

```bash
npm install --ignore-scripts --no-audit --no-fund
node scripts/copy-ffmpeg.mjs
```

`--ignore-scripts` is required on this Windows machine because the optional `onnxruntime-node` postinstall fails with `0xC0000142`/`EPERM`. The copy step places the single-thread UMD ffmpeg core under `public/ffmpeg/`, which is intentionally not committed. The UMD build is required because the bundled ffmpeg worker is created as a classic worker.

## Develop and build

```bash
npm run dev          # next dev --webpack
npm run build        # content checks + next build --webpack + output metadata audit
npm run typecheck
npm run lint
npm test
```

Turbopack is not used: it fails to resolve the dynamic worker URL in `@ffmpeg/ffmpeg`. The production output is in `out/`. On Windows, `scripts/flatten-rsc.mjs` corrects a Next.js 16 static-export path bug that would otherwise make RSC prefetch requests 404; this is a build-time workaround for [next.js#85374](https://github.com/vercel/next.js/issues/85374).

## How the model loads

The first transcription downloads ONNX model files from Hugging Face and caches them in the browser. Fast uses about 41 MB on WASM and 76 MB on WebGPU-fp16; Balanced uses 77/146 MB; Accurate uses 249/485 MB. The worker requests WebGPU fp16 when available and falls back to WASM q8. Audio is decoded at 16 kHz mono, split into 30-second chunks with a 2-second overlap, and overlapping text is de-duplicated.

## Languages and honest limits

The picker lists 99 languages from the multilingual Whisper tokenizer. The list is tested against a vendored tokenizer map. Support is not equal accuracy: low-resource languages and heavy code-switching need more editing. Weak areas include Pashto, Sindhi, Assamese, Lingala, Breton and other low-resource languages. All 99 language pages are currently `noindex` because no reviewed accuracy samples have been recorded; see `docs/verification-log.md`. Tier 1 and Tier 2 editorial pages exist, but the index switch stays off until the sample rule is met.

## Offline use

The built site registers `public/sw.js`. After one online visit, the service worker caches the app shell and the browser caches the Whisper model. A later reload can start without a connection, and transcription then runs from the cached model. The first visit, a cleared cache, or a private window still needs the network. The Playwright suite includes an offline-reload smoke test.

## Limits

- 500 MB per file, set by browser memory, not a server quota.
- Long files take longer and can exhaust memory on phones.
- The tool does not download media from YouTube, TikTok or other platforms.
- Translation is Whisper's translate-to-English task, not a general subtitle translator.
- Burn-in re-encodes video and is slower than exporting a sidecar file.
- Word-level timestamps are not exported; cues are timed phrases.

## Ads and COOP/COEP

Ads are off by default. `AdSlot` emits no markup when `NEXT_PUBLIC_ADS_ENABLED` is not `true`. When enabled, AdSense loads only after consent, Consent Mode v2 defaults to denied, and each placement needs its own slot ID. Do not add site-wide COOP/COEP headers: they block AdSense. The optional `/studio` route is ad-free and noindex; if multi-thread ffmpeg is enabled there, scope isolation headers to that path only in `netlify.toml` and `vercel.json`.

To enable ads, set the variables in `.env.example`, replace the placeholder line in `public/ads.txt`, rebuild, and complete `ADSENSE_CHECKLIST.md`.

### Consent and a Google-certified CMP

The built-in banner is a lightweight Consent Mode v2 implementation, not a Google-certified CMP. EEA, UK and Swiss traffic needs a certified CMP before AdSense is enabled. The integration point is the `voicetotextfree:consent-changed` event plus the `voicetotextfree-consent-ads` localStorage key that `AdUnit` reads. Use Google Funding Choices or another certified CMP, and have it update those values (or call the same handler) after the visitor chooses. Keep the default `ad_storage`, `ad_user_data` and `ad_personalization` values denied until consent, then call `gtag("consent", "update", ...)`. Do not load the AdSense script before consent.

## Deploy

The production URL defaults to `https://voicetotextfree.top`; set `NEXT_PUBLIC_SITE_URL` only when deploying to a different origin. The contact address and author defaults are already Abdul Samad; override `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_AUTHOR_NAME` and `NEXT_PUBLIC_AUTHOR_BIO` only if they change. Build with `npm run build` and publish `out/` to any static host. Netlify and Vercel configurations are included. HTTPS is required for WebGPU, service workers and clipboard features.

## Verification

`npm run check:all` runs the content, keyword, word-count, AEO, token, email, log, feature, link and ad audits, then format, typecheck, lint and unit tests. `npm run test:e2e` runs 10 Playwright tests against the built `out/` directory through `scripts/serve.mjs`; run `npm run build` first. The Playwright project uses the system Chrome channel because bundled Chromium could not reach the network in this environment. Install Google Chrome or change `channel` in `playwright.config.ts`. Accuracy testing and the verification log are separate manual gates.

## Known maintenance items

- Record at least one reviewed sample per language before removing `noindex`.
- Re-check platform subtitle instructions, Whisper language list and model sizes each year.
- Re-run the content audit after editing any content file.
