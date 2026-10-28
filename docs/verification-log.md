# Verification log

Every technical claim in the content should trace to one of these checks. Record the date, source, method and expected versus actual result. Do not replace missing evidence with an estimate.

## Language list — 99 codes

- Claim: the picker supports the 99 languages in the multilingual Whisper tokenizer used by transformers.js.
- Source: https://huggingface.co/onnx-community/whisper-tiny/resolve/main/tokenizer.json
- Method: compared the language-code map with the model tokenizer and vendored the code list in `src/data/whisper-language-codes.json`; `tests/languages.test.ts` checks the application catalogue against that file.
- Expected: 99 unique codes. Actual: 99 unique codes, 99 unique slugs.
- Date: 2026-10-28.

## Model download sizes

- Claim: Fast/Balanced/Accurate download approximately 41/77/249 MB on WASM and 76/146/485 MB on WebGPU-fp16.
- Source: https://huggingface.co/api/models/onnx-community/whisper-tiny?blobs=true and the equivalent `whisper-base` and `whisper-small` metadata.
- Method: summed the encoder and decoder ONNX files used by transformers.js for each model and rounded the total to the nearest MB. Sizes are download sizes, not memory use.
- Expected: three ordered model sizes. Actual: tiny 41/76 MB, base 77/146 MB, small 249/485 MB.
- Date: 2026-10-28.

## SRT and WebVTT formatting

- Claim: SRT uses numbered cues, comma-separated millisecond timestamps and a blank line between cues; WebVTT uses a `WEBVTT` header and dot-separated timestamps.
- Source: https://www.w3.org/TR/webvtt1/ for WebVTT; SRT is a de facto format without a W3C specification, so the writer follows the widely parsed comma/arrow convention.
- Method: generated output from `src/lib/subtitles.ts` and parsed it back with the same parser; verified timestamp formatting, cue numbering and round-trip conversion in unit tests.
- Expected: lossless round trip for valid cues. Actual: generated fixtures parse back to the same cue count and text; malformed cues are reported by the validator.
- Date: 2026-10-28.

## Browser media pipeline

- Claim: media stays in the browser; ffmpeg.wasm extracts audio and Whisper runs locally.
- Source: https://ffmpegwasm.netlify.app/ and https://huggingface.co/docs/transformers.js/
- Method: inspected the worker code and network requests during a local build; no request contains the selected file. ffmpeg core is copied to `public/ffmpeg/`.
- Expected: no upload endpoint. Actual: no API route or upload request exists; model files are downloaded from Hugging Face and cached.
- Date: 2026-10-28.

## Platform guidance

- Claim: platform caption and subtitle steps are described from the vendor's current help pages, with menus that can change.
- Sources: linked per guide, including YouTube Help, TikTok Help, Instagram Help, Adobe, Blackmagic Design, Apple and CapCut documentation.
- Method: content review against the linked vendor pages. Platform menus are not treated as permanent; each guide tells the reader to verify the current version.
- Date: 2026-10-28.

## End-to-end browser pipeline

- Claim: ffmpeg extracts 16 kHz mono audio and Whisper transcribes it locally without an upload endpoint.
- Method: served the production `out/` build, used Chrome (system channel) on Windows, loaded a 2-second silent 16 kHz WAV, selected the Fast/tiny model and WASM, and waited for the transcription stage to finish. The app moved through extracting, model download, transcribing and finished with one cue. A separate Playwright check covers ffmpeg extraction and cancellation before model inference.
- Expected: no upload request and a completed local pipeline. Actual: extraction and inference completed; console showed no application errors and the internal-link/RSC prefetch 404s were fixed by flattening the Windows export payloads.
- Date: 2026-10-28.

## Accuracy testing

- Claim: language pages are noindex until a real sample is checked.
- Method: none yet. No reviewed language sample has been recorded, so `accuracyTested` remains false for all 99 languages and all language pages are noindex.
- Required for future entries: language, device, browser, model, clip length, source/licence of the clip, reference transcript, how the result was judged and the date.
- Status: open.

## Build and environment

- Claim: the site builds as static HTML and does not need a server runtime.
- Method: `npx next build --webpack`; output inspected in `out/`.
- Actual: static export completed with 157 generated pages and 153 audited internal routes. `npm run build` also runs the content gate.
- Automated checks: `npm run check:all` passed all content, keyword, word-count, AEO, token, email, verification-log, feature, link, ad, format, typecheck, lint and 34 unit tests. `npm run test:e2e` passed 10 Playwright tests against the built `out/` directory. A separate 320 px sweep checked all 53 sitemap URLs for horizontal overflow. The build output audit confirmed matching canonical, Open Graph and Twitter metadata on all 53 sitemap pages.
- Known environment issue: `npm install` requires `--ignore-scripts` because `onnxruntime-node` postinstall fails on this Windows machine; ffmpeg core is copied separately.
- Date: 2026-10-28.

## Robots.txt crawler tokens

- Claim: the robots policy names current search, ads and AI citation crawlers with their documented user-agent tokens.
- Sources: https://developers.openai.com/api/docs/bots, https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler, https://docs.perplexity.ai/docs/resources/perplexity-crawlers, https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers, https://developers.google.com/crawling/docs/crawlers-fetchers/google-special-case-crawlers and https://support.google.com/adsense/answer/99376?hl=en.
- Method: compared each token in `app/robots.ts` with the vendor documentation on 2026-10-28. Googlebot, Googlebot-Image, Bingbot, Mediapartners-Google, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-SearchBot, Claude-User, GPTBot, ClaudeBot, Google-Extended and Applebot-Extended are listed. Training crawlers stay allowed by default through `site.allowTrainingCrawlers`; change that only after owner confirmation.
- Expected: no invented crawler names and no accidental block of search or ads crawlers. Actual: tokens matched the cited documentation; `/studio` is the only disallowed path. Status: VERIFY again at the annual review because vendor names can change.
- Date: 2026-10-28.
