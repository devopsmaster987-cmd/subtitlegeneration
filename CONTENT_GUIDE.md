# VoiceToTextFree content guide

## Voice

Write as a working subtitle editor explaining a decision to a colleague. Prefer concrete examples, measured values and explicit trade-offs. Do not invent accuracy percentages, speed numbers, WER or file limits. Use British spelling unless a product name requires otherwise.

## Page structure

1. H1 with the primary keyword used naturally.
2. 40–60-word answer capsule that can stand alone.
3. Key facts table: 5–7 short, factual rows.
4. Six to ten H2/H3 sections. Use steps or a table where it helps.
5. Worked example with a real SRT or code block where relevant.
6. Six visible FAQs; the FAQ keyword must match a visible question.
7. Two to four primary sources with real URLs.
8. Author byline, published date, last updated date and related links.

## Minimums

- Home: 1,000 body words.
- Guide: 1,200 body words.
- Tool page: 700 body words.
- Tier 1 language page: 700 body words.
- Tier 2 language profile: 350 body words.
- Answer capsule: 40–60 words.
- FAQs: 6 visible questions.

Body words exclude navigation, tables, code samples and FAQs. Do not pad.

## Keywords

- One primary keyword per page; use it in H1, title, meta description, first 40 words and slug.
- At most four primary mentions in body text.
- Secondary keywords must appear as H2/H3 headings.
- FAQ keywords must be visible questions.
- No keyword may be owned by two pages.
- No literal year in a keyword.
- Excluded and parked terms live in `src/data/keywords.ts`.

## Language pages

- Use the language name, native name, script and direction accurately.
- Do not promise romanized output.
- Explain punctuation, diacritics, line breaking, numerals, code-switching and review limits.
- Keep the page noindex until a real sample is recorded in `docs/verification-log.md`.
- Low-resource languages must say that results can be weak.

## Review checklist

- [ ] Every factual claim has a source or a measured run.
- [ ] No fabricated statistics, reviews, awards or user counts.
- [ ] No competitor disparagement.
- [ ] Internal links use descriptive anchors and resolve.
- [ ] Primary keyword is not stuffed.
- [ ] Title and meta description are unique and within length.
- [ ] FAQ answers are direct and do not repeat the question.
- [ ] The file passes `npx tsx scripts/count-page.ts <file>` or the registry audit.
