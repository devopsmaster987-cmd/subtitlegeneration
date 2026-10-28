# VoiceToTextFree implementation plan

## Goal

Ship a static, browser-only subtitle generator that turns video or audio into editable SRT, VTT and TXT files with Whisper, plus original supporting content that is useful without the tool.

## Constraints

- Next.js App Router with `output: "export"`; no server runtime, API routes or upload endpoint.
- Whisper and ffmpeg run in the browser. Media never leaves the device.
- The content and the tool must be usable on a normal static host, including Netlify and Vercel.
- AdSense must be able to crawl the site; do not enable site-wide COOP/COEP.
- Language pages stay `noindex` until a real sample is transcribed and logged.

## File map

```
app/                       static routes, metadata, sitemap and robots
src/components/            tool, editor, workbench, ads, consent, page shells
src/config/languages.ts    99 verified Whisper language codes and tiers
src/content/               home, guides, tool pages, language editorial and profiles
src/data/                  site config, models, entities and keyword ownership
src/lib/                   subtitle, audio, store, schema and content helpers
src/workers/               transcription and ffmpeg workers
scripts/                   content audit, verification, llms and IndexNow
tests/                     unit and content regression tests
docs/                      verification log and maintenance notes
public/                    ads.txt, llms.txt, favicon and generated ffmpeg core
```

## Milestones

1. Foundation: Next/Tailwind scaffold, static export, model catalogue, verified language list.
2. Tool: file intake, ffmpeg audio extraction, chunked Whisper transcription, editor, exports, burn-in.
3. Trust and legal: privacy, cookies, consent, terms, corrections, about, contact, studio.
4. Content: 28 guides, 14 tool pages, 16 Tier 1 language pages, 22 Tier 2 profiles.
5. Quality gates: keyword, word-count, AEO, token, email, log, feature, link and ad audits.
6. Verification: build, typecheck, lint, unit tests, browser smoke test, accuracy log review.
7. Deployment: static host configuration, environment values, ads disabled until approval.

## Decisions

- Use webpack builds because Turbopack cannot resolve the ffmpeg.wasm worker URL used by `@ffmpeg/ffmpeg`.
- Keep ffmpeg single-threaded by default so the site does not need COOP/COEP. Scoped isolation headers for `/studio` remain optional.
- Keep ads disabled and all ad slot IDs empty until a publisher account is approved and configured.
- Keep every language page noindex until a reviewed sample exists. The editorial pages are still built so the content and route are ready.
- Use generic English-language labels for the interface; language-specific pages explain script, punctuation and review needs.
