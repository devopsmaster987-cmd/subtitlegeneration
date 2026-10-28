# AdSense checklist

## Before applying

- [x] Use the working contact address `ihsanaslamm@gmail.com` and real author details for Abdul Samad.
- [ ] Replace the remaining `.example` site URL with the live domain.
- [ ] Publish at least 25 substantive pages, including the home page, guides, tool pages and policies.
- [ ] Confirm every indexable page has a unique title, meta description, canonical and visible "last updated" date.
- [ ] Confirm the tool works on desktop and mobile without an account or upload.
- [ ] Confirm `/privacy-policy`, `/cookie-policy`, `/about`, `/contact`, `/terms`, `/disclaimer` and `/corrections` are linked in the footer.
- [ ] Confirm there are no empty pages, auto-generated doorway pages or keyword-stuffed pages.
- [ ] Confirm no ad code is present while `NEXT_PUBLIC_ADS_ENABLED=false`.
- [ ] Run `npm run check:all` and `npm run build`; fix every failure.
- [ ] Check `out/` for broken internal links and missing assets.
- [ ] Read the AdSense Program Policies and Google Publisher Policies again.

## After approval

- [ ] Set `NEXT_PUBLIC_ADS_ENABLED=true` and `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-...`.
- [ ] Create one ad unit per placement and set all four slot IDs.
- [ ] Update `public/ads.txt` with the real publisher ID and verify it returns HTTP 200.
- [ ] Confirm ads load only after consent; check accept, reject and manage flows.
- [ ] Plug in a Google-certified CMP for EEA/UK/Swiss traffic and confirm it updates Consent Mode v2 before AdSense loads.
- [ ] Confirm no ad appears inside the tool controls, on `/studio`, or on a noindex page.
- [ ] Check CLS at mobile and desktop widths. Ad containers reserve space only when ads are enabled.
- [ ] Check the site in the EEA, UK and Switzerland consent flow, or the region you serve.
- [ ] Monitor Policy Centre messages and fix violations rather than hiding them.
- [ ] Re-check ad placement after any layout change.

## Never

- Click your own ads or ask others to do so.
- Place ads on error pages, empty pages, or pages with copied content.
- Use pop-unders, auto-refresh or ads that interfere with the tool.
- Add site-wide COOP/COEP; it breaks AdSense.
