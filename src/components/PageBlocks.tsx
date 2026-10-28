import Link from "next/link";
import type { BasePageContent } from "@/content/types";
import { getGuide } from "@/content/guides";
import { JsonLd } from "./JsonLd";
import { InlineText } from "./InlineText";
import { AdSlot } from "./AdSlot";

export function KeyFacts({ page }: { page: BasePageContent }) {
  if (page.keyFacts.length === 0) return null;
  return (
    <section aria-labelledby="key-facts-heading" className="my-6">
      <h2 id="key-facts-heading" className="mb-2 text-lg font-bold">
        Key facts
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">Key facts about {page.h1}</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="border border-[var(--line)] bg-[var(--panel)] p-2 text-left"
              >
                Item
              </th>
              <th
                scope="col"
                className="border border-[var(--line)] bg-[var(--panel)] p-2 text-left"
              >
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {page.keyFacts.map((fact) => (
              <tr key={fact.label}>
                <th scope="row" className="border border-[var(--line)] p-2 text-left align-top">
                  {fact.label}
                </th>
                <td className="border border-[var(--line)] p-2 align-top">{fact.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function WorkedExample({ page }: { page: BasePageContent }) {
  if (!page.workedExample) return null;
  return (
    <section aria-labelledby="example-heading" className="my-8">
      <h2 id="example-heading" className="text-2xl font-bold">
        {page.workedExample.title}
      </h2>
      <p className="mt-2">
        <InlineText text={page.workedExample.intro} />
      </p>
      {page.workedExample.srt ? (
        <figure className="mt-3">
          <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
            <code>{page.workedExample.srt}</code>
          </pre>
          <figcaption className="mt-1 break-words text-xs text-[var(--muted)]">
            {page.workedExample.note ?? "A worked example you can copy into a subtitle editor."}
          </figcaption>
        </figure>
      ) : page.workedExample.note ? (
        <p className="mt-2 break-words text-sm text-[var(--muted)]">{page.workedExample.note}</p>
      ) : null}
    </section>
  );
}

export function Sources({ page }: { page: BasePageContent }) {
  if (page.sources.length === 0) return null;
  return (
    <section aria-labelledby="sources-heading" className="mt-10">
      <h2 id="sources-heading" className="text-xl font-bold">
        Sources and further reading
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {page.sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer noopener" className="underline">
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RelatedGuides({ slugs }: { slugs: string[] }) {
  const guides = slugs.map((slug) => getGuide(slug)).filter((guide) => Boolean(guide));
  if (guides.length === 0) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-10">
      <h2 id="related-heading" className="text-xl font-bold">
        Related guides
      </h2>
      <ul className="mt-2 grid gap-2 sm:grid-cols-2">
        {guides.map((guide) => (
          <li key={guide!.path}>
            <Link
              href={guide!.path}
              className="block rounded-lg border border-[var(--line)] p-3 hover:bg-[var(--panel)]"
            >
              <span className="font-semibold">{guide!.h1}</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">
                {guide!.metaDescription}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ToolCta({ label = "Open the subtitle generator" }: { label?: string }) {
  return (
    <div className="my-6 rounded-xl border border-brand-200 bg-brand-50 p-4 dark:border-brand-900 dark:bg-brand-900/20">
      <p className="font-semibold">Try it with your own clip</p>
      <p className="mt-1 text-sm text-[var(--muted)]">
        The generator runs locally and exports SRT, VTT or TXT. Nothing is uploaded.
      </p>
      <Link
        href="/#tool"
        className="mt-3 inline-block rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
      >
        {label}
      </Link>
    </div>
  );
}

export function ArticleStructuredData({
  page,
  type
}: {
  page: BasePageContent;
  type: "Article" | "WebApplication";
}) {
  const schemas: Record<string, unknown>[] = [];
  if (type === "Article") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      description: page.metaDescription,
      datePublished: page.published,
      dateModified: page.updated,
      author: { "@type": "Person", name: page.author },
      publisher: { "@type": "Organization", name: "VoiceToTextFree" },
      mainEntityOfPage: page.path
    });
  } else {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: page.h1,
      description: page.metaDescription,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any modern browser",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    });
  }
  if (page.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    });
  }
  return <JsonLd data={schemas} />;
}

export function AdAfterFirstSection({ page }: { page: BasePageContent }) {
  return <AdSlot placement="in-content" label={`Advertisement — after ${page.h1}`} />;
}
