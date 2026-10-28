# Annual update checklist

Run this once a year, or whenever a major model or platform change lands.

## Models and runtime

- [ ] Re-check the current transformers.js version and ONNX model repositories.
- [ ] Re-measure model download sizes and update `src/data/models.ts`, copy and tests.
- [ ] Confirm WebGPU and WASM fallback still work in Chrome, Edge, Firefox and Safari.
- [ ] Re-test a short clip on desktop and a low-memory phone.
- [ ] Re-check ffmpeg.wasm core compatibility and the `/studio` isolation decision.

## Language support

- [ ] Re-download the Whisper tokenizer language map and compare it with `src/data/whisper-language-codes.json`.
- [ ] Update `src/config/languages.ts` if codes or names change.
- [ ] Re-run at least one reviewed sample for every indexable language.
- [ ] Review low-resource language notes for honesty.
- [ ] Keep or remove `noindex` based on the recorded evidence.

## Platforms and guidance

- [ ] Re-check YouTube, TikTok, Instagram, Premiere Pro, DaVinci Resolve, Final Cut Pro and CapCut import steps.
- [ ] Re-check Netflix timed-text guidance if the guide remains published.
- [ ] Re-check WCAG references and accessibility guidance.
- [ ] Re-check WebVTT specification links.

## Policy and ads

- [ ] Read the current Google AdSense Program Policies and Publisher Policies.
- [ ] Re-check consent requirements for the regions you serve.
- [ ] Confirm `ads.txt` is live and matches the publisher ID.
- [ ] Review ad placement, CLS and consent behaviour.
- [ ] Re-check privacy, cookie and terms pages against actual data flows.

## Content

- [ ] Run `npm run check:all`.
- [ ] Check for dead internal and external links.
- [ ] Review pages with declining impressions or outdated screenshots.
- [ ] Add the update to `CHANGELOG.md` and `docs/verification-log.md`.
