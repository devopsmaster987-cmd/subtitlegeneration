import type { Metadata } from "next";
import Link from "next/link";
import { languages, popularLanguages } from "@/config/languages";
import { languagePageBySlug } from "@/content/languages";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdSlot } from "@/components/AdSlot";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Subtitle generator languages: all 99 Whisper languages",
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
    url: "/languages"
  },
  twitter: {
    card: "summary",
    title: `All 99 Whisper subtitle languages | ${site.name}`,
    description:
      "Every language in the multilingual Whisper tokenizer, with script, region and tool links."
  }
};

export default function LanguagesPage() {
  const tested = languages.filter((language) => language.accuracyTested);
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
        {tested.length} language{tested.length === 1 ? " has" : "s have"} a recorded accuracy test
        and can be indexed. Pages without a test stay noindex while remaining fully usable.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Popular languages</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {popularLanguages.map((language) => {
            const entry = languagePageBySlug.get(language.slug);
            return (
              <li key={language.code} className="rounded-lg border border-[var(--line)] p-3">
                <Link
                  href={`/subtitle-generator/${language.slug}`}
                  className="font-semibold underline"
                >
                  {language.name} subtitle generator
                </Link>
                <p className="text-sm text-[var(--muted)]" dir={language.rtl ? "rtl" : "ltr"}>
                  {language.nativeName} · {language.script}
                  {entry?.content.noindex ? " · accuracy not yet logged" : ""}
                </p>
              </li>
            );
          })}
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
    </div>
  );
}
