# Changelog

## 2026-10-28

- Built the static Next.js VoiceToTextFree site and browser-only Whisper/ffmpeg workflow.
- Added SRT, VTT, TXT and timed TXT export, cue editing, validation, timing changes, merge/split, conversion, reading-speed checks and optional burn-in.
- Added the verified 99-language catalogue and language picker.
- Added 28 guides, 14 tool pages, 16 Tier 1 language pages and 22 Tier 2 language profiles.
- Added policy pages, consent management, ad slots that stay off by default, sitemap, robots and structured data.
- Added content, keyword, AEO, token, email, log, feature, link and ad checks plus 34 unit tests and 10 Playwright smoke tests.
- Added a structured keyword registry with per-entry page ownership, competition and wave metadata, plus checks for duplicate ownership, repeats, exclusions, parked and topic terms.
- Credited Abdul Samad as creator and maintainer across bylines, About, footer, Person JSON-LD and site metadata, with `ihsanaslamm@gmail.com` as the contact address.
- Added 320 px overflow coverage across all 53 sitemap pages and table/caption wrapping fixes. The build now verifies canonical, Open Graph and Twitter metadata for every sitemap page.
- Added Netlify/Vercel deployment configs, scoped `/studio` isolation headers, static preview server, offline service worker, Windows RSC export fix, regenerated `llms.txt`, IndexNow helper and cleanup of temporary scripts.
- Added gradient frames around the generator, editor and output workspace, automatic Fast-model selection when WebGPU is unavailable, parallel model loading and audio extraction, faster PCM WAV decoding and stable chunk IDs.
- Rebranded the site as VoiceToTextFree, set the production URL to `https://voicetotextfree.top`, aligned the homepage title with voice-to-text intent, and regenerated generated discovery files.
- Documented the npm install workaround, webpack build requirement, COOP/COEP and ads decision, and language noindex rule.
