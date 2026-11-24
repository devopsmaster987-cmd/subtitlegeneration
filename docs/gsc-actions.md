# Google Search Console actions

Manual follow-up after the canonical, noindex, sitemap and internal-link fixes.

## 1. Replace the sitemap

1. Open Search Console → **Indexing → Sitemaps**.
2. Remove the old `sitemap.xml` entry (it stays available for legacy clients but is no longer the source of truth).
3. Submit `https://voicetotextfree.top/sitemap-index.xml`.
4. Confirm the three children are discovered:
   - `https://voicetotextfree.top/sitemap-tools.xml`
   - `https://voicetotextfree.top/sitemap-guides.xml`
   - `https://voicetotextfree.top/sitemap-legal.xml`
5. Check **robots.txt** returns `Sitemap: https://voicetotextfree.top/sitemap-index.xml`.

## 2. Request indexing (priority URLs)

Use **URL Inspection → Test live URL → Request indexing** for:

- Top 10 languages: English, Chinese, Spanish, Hindi, Arabic, Portuguese, French, German, Japanese, Korean.
- Top 10 guides: `srt-vs-vtt`, `how-to-improve-whisper-accuracy`, `how-to-sync-subtitles`, `subtitle-best-practices`, `what-is-an-srt-file`, `what-is-a-vtt-file`, `how-to-add-captions-to-reels`, `how-to-add-subtitles-to-tiktok`, `subtitle-timing-guidelines`, `subtitle-glossary`.
- Any URL still listed under **Discovered – currently not indexed** that was previously orphaned.

## 3. Close out the five issue buckets

Wait 1–2 weeks after validation, then click **Done fixing?** on each bucket:

- [ ] Excluded by 'noindex' tag — `/subtitle-generator/*` now emits `index, follow`.
- [ ] Page with redirect — single https + apex + trailing-slash origin, 301s.
- [ ] Alternate page with proper canonical — http/www/slash variants 301 to the canonical URL.
- [ ] Crawled – currently not indexed — expanded guides/tools with JSON-LD and internal links.
- [ ] Discovered – currently not indexed — every URL linked from the guides index, language index, footer or a sibling page.

## 4. Expected timeline

| Bucket                                   | Expected resolution                       |
| ---------------------------------------- | ----------------------------------------- |
| Page with redirect / alternate canonical | 1–2 weeks                                 |
| Excluded by noindex                      | 1–3 weeks after recrawl                   |
| Crawled – currently not indexed          | 4–8 weeks after content upgrades          |
| Discovered – currently not indexed       | 2–6 weeks as internal links are recrawled |

## 5. Validation commands

```bash
# Canonical redirect matrix
curl -sI http://voicetotextfree.top/guides/srt-vs-vtt | grep -i location
# https://voicetotextfree.top/guides/srt-vs-vtt/
curl -sI https://voicetotextfree.top/guides/srt-vs-vtt | grep -i location
# https://voicetotextfree.top/guides/srt-vs-vtt/
curl -sI https://www.voicetotextfree.top/about/ | grep -i location
# https://voicetotextfree.top/about/

# Language pages are indexable
curl -s https://voicetotextfree.top/subtitle-generator/japanese/ | grep -i 'name="robots"'
# <meta name="robots" content="index, follow"/>

# Sitemap index + children
curl -s https://voicetotextfree.top/sitemap-index.xml
curl -s https://voicetotextfree.top/sitemap-tools.xml | grep -E 'http://|www\.'
# (no output)
```

## Rollback

- Redirect layer: revert `worker.ts`, `wrangler.jsonc`, `vercel.json`. Do not add a Netlify-style `public/_redirects`: Cloudflare Workers static assets parses that file and rejects absolute-URL rules, which fails the deploy. Cloudflare redirects are handled in `worker.ts`, and `public/.assetsignore` excludes `_redirects`/`_headers` so a cached copy cannot fail the deploy.
- noindex: restore `noindex: !language.accuracyTested` in `src/content/languages/index.ts`.
- Sitemaps: revert `app/sitemap*.xml/route.ts`, `src/lib/sitemap.ts`, `app/robots.ts`, `scripts/verify-output.ts`.
