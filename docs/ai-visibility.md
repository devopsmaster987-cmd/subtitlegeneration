# AI and answer-engine visibility

VoiceToTextFree is designed to be quoted and cited accurately, not to game chatbots.

## Principles

- Every page opens with a self-contained answer capsule.
- Claims are tied to sources or measured checks.
- Each page has one clear purpose and one primary keyword.
- FAQs use the reader's question, followed by a direct answer.
- The tool pages say what the tool does and does not do, including English-only translation, cue-level timing and no word-level timestamps.

## Technical choices

- Server-rendered/static HTML contains the full article, not a client-only shell.
- `Article`, `FAQPage`, `WebApplication` and `SoftwareApplication` JSON-LD are emitted from the same content data as the visible page.
- `robots.ts` allows normal search, `Mediapartners-Google` and citation-oriented AI crawlers. Training crawlers are allowed by default; change `allowTrainingCrawlers` only after an explicit decision.
- `public/llms.txt` lists canonical pages and explains the language noindex policy.
- Sitemap excludes noindex pages and includes only indexable URLs.

## What not to do

- Do not add hidden text, fabricated expert quotes, fake reviews or invented statistics.
- Do not create dozens of near-duplicate language pages.
- Do not promise accuracy percentages that were not measured on a named device and sample.
- Do not block Googlebot or Mediapartners while allowing answer engines; that breaks both search and ads.

## Measurement

Track Search Console queries, impressions and pages, not just traffic. Inspect which pages earn citations or AI referrals manually. Record any content change that follows a query gap in `CHANGELOG.md`.
