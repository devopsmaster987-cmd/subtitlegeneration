import Link from "next/link";
import type { Language } from "@/config/languages";
import type { LanguagePageContent } from "@/content/types";
import { Tool } from "./Tool";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContentSections } from "./ContentSections";
import { FaqList } from "./FaqList";
import { KeyFacts, RelatedGuides, Sources, WorkedExample } from "./PageBlocks";
import { AuthorBox, formatDate } from "./AuthorBox";
import { AdSlot } from "./AdSlot";
import { JsonLd } from "./JsonLd";
import { faqSchema, webApplicationSchema } from "@/lib/schema";
import { languages } from "@/config/languages";

export function LanguageView({
  language,
  content,
  related
}: {
  language: Language;
  content: LanguagePageContent;
  related: Language[];
}) {
  const faq = faqSchema(content);
  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Languages", href: "/languages" },
          { label: language.name, href: content.path }
        ]}
      />
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-100">
          {language.region} · {language.script} · {language.nativeName}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{content.h1}</h1>
        <p className="mt-3 text-lg" dir={language.rtl ? "rtl" : "ltr"}>
          {content.capsule}
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          By {content.author} · Last updated{" "}
          <time dateTime={content.updated}>{formatDate(content.updated)}</time>
        </p>
      </header>

      <div className="mt-5 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-950 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100">
        <strong>Accuracy note:</strong> {content.accuracyNote}
        {content.noindex ? (
          <span className="mt-1 block">
            This language page is not in the search index until a real sample has been transcribed
            and logged. The tool still works for this language.
          </span>
        ) : null}
      </div>

      <div className="mt-6">
        <Tool initialLanguage={language.code} />
      </div>

      {content.noindex ? null : <AdSlot placement="below-tool" />}

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <KeyFacts page={content} />
          <ContentSections sections={content.sections} />
          <WorkedExample page={content} />
          <FaqList faqs={content.faqs} />
          <Sources page={content} />
          <AuthorBox updated={content.updated} published={content.published} />
          <RelatedGuides slugs={content.relatedGuides} />
          <section className="mt-8">
            <h2 className="text-xl font-bold">Other languages</h2>
            <ul className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.code}>
                  <Link className="underline" href={`/subtitle-generator/${item.slug}`}>
                    {item.name} subtitle generator
                  </Link>
                </li>
              ))}
              <li>
                <Link className="underline" href="/languages">
                  All 99 languages
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-[var(--line)] p-4 text-sm">
            <h2 className="font-bold">About this language</h2>
            <dl className="mt-2 space-y-1">
              <div>
                <dt className="font-medium">Code</dt>
                <dd>{language.code}</dd>
              </div>
              <div>
                <dt className="font-medium">Native name</dt>
                <dd>{language.nativeName}</dd>
              </div>
              <div>
                <dt className="font-medium">Script</dt>
                <dd>{language.script}</dd>
              </div>
              <div>
                <dt className="font-medium">Direction</dt>
                <dd>{language.rtl ? "RTL" : "LTR"}</dd>
              </div>
              <div>
                <dt className="font-medium">Tier</dt>
                <dd>{language.tier}</dd>
              </div>
            </dl>
          </div>
          {content.noindex ? null : <AdSlot placement="sidebar" />}
        </aside>
      </div>
      {content.noindex ? null : <AdSlot placement="article-end" />}
      <JsonLd data={[webApplicationSchema(content), ...(faq ? [faq] : [])]} />
      <p className="mt-8 text-xs text-[var(--muted)]">
        Languages in the picker: {languages.length}. The list is checked against the Whisper
        tokenizer by a unit test.
      </p>
    </article>
  );
}
