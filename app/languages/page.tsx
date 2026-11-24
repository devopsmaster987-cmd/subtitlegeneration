import type { Metadata } from "next";
import Link from "next/link";
import { languages, popularLanguages } from "@/config/languages";
import { languagePages } from "@/content/languages";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageSchema } from "@/lib/schema";
import { ogImage, twitterImage } from "@/lib/og-image";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "All 99 subtitle generator languages",
  description:
    "Browse every language supported by the multilingual Whisper tokenizer, see which ones have editorial notes, and open a language-specific subtitle generator page.",
  alternates: { canonical: "/languages" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en",
    title: `All 99 Whisper subtitle languages | ${site.name}`,
    description:
      "Every language in the multilingual Whisper tokenizer, with script, region and tool links.",
    url: "/languages",
    images: [ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: `All 99 Whisper subtitle languages | ${site.name}`,
    description:
      "Every language in the multilingual Whisper tokenizer, with script, region and tool links.",
    images: [twitterImage]
  }
};

export default function LanguagesPage() {
  const tested = languages.filter((language) => language.accuracyTested);
  const searchablePages = languagePages.filter(({ content }) => !content.noindex);
  const searchable = searchablePages.length;
  const byRegion = new Map<string, typeof languages>();
  for (const language of [...languages].sort((a, b) => a.name.localeCompare(b.name))) {
    const list = byRegion.get(language.region) ?? [];
    list.push(language);
    byRegion.set(language.region, list);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Languages", href: "/languages" }]} />
      <h1 className="text-3xl font-extrabold sm:text-4xl">Subtitle generator languages</h1>
      <p className="mt-3 max-w-3xl text-lg">
        The picker contains all {languages.length} languages in the multilingual Whisper tokenizer.
        The list is generated from the model tokenizer and verified by a unit test, so a language is
        not added by guessing. Accuracy varies: open a language page for script notes, common
        pitfalls and an honest accuracy statement.
      </p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        All {searchable} language pages are open to search. Editorial depth varies by tier: some
        pages carry full script and accuracy notes, others are tool-only pages with a short guide.
        Accuracy is still being verified — {tested.length} language
        {tested.length === 1 ? " has" : "s have"} a recorded accuracy test so far, so treat any
        transcript as a draft and review it before publishing.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Popular languages</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {popularLanguages.map((language) => (
            <li key={language.code} className="rounded-lg border border-[var(--line)] p-3">
              <Link
                href={`/subtitle-generator/${language.slug}`}
                className="font-semibold underline"
              >
                {language.name} subtitle generator
              </Link>
              <p className="text-sm text-[var(--muted)]" dir={language.rtl ? "rtl" : "ltr"}>
                {language.nativeName} · {language.script}
                {language.accuracyTested ? "" : " · accuracy not yet logged"}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">All languages A–Z</h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Grouped by region. Every link opens a working generator page; editorial depth varies by
          tier.
        </p>
        {[...byRegion.entries()].map(([region, list]) => (
          <div key={region} className="mt-6">
            <h3 className="text-lg font-bold">{region}</h3>
            <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {list.map((language) => (
                <li key={language.code}>
                  <Link href={`/subtitle-generator/${language.slug}`} className="underline">
                    {language.name}
                  </Link>{" "}
                  <span className="text-[var(--muted)]" dir={language.rtl ? "rtl" : "ltr"}>
                    {language.nativeName}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <AdSlot placement="article-end" />
      <JsonLd
        data={[
          collectionPageSchema({
            path: "/languages",
            name: "Subtitle generator languages",
            description:
              "Every language in the multilingual Whisper tokenizer, with editorial subtitle generator pages for the languages that have full notes.",
            listName: "Searchable language subtitle generator pages",
            items: searchablePages.map(({ content }) => ({
              name: content.h1,
              path: content.path
            }))
          })
        ]}
      />
    </div>
  );
}
