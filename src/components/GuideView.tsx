import type { GuideContent } from "@/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContentSections } from "./ContentSections";
import { FaqList } from "./FaqList";
import { KeyFacts, RelatedGuides, Sources, ToolCta, WorkedExample } from "./PageBlocks";
import { AuthorBox, formatDate } from "./AuthorBox";
import { AdSlot } from "./AdSlot";
import { JsonLd } from "./JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";

export function GuideView({ guide }: { guide: GuideContent }) {
  const faq = faqSchema(guide);
  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: guide.h1, href: guide.path }
        ]}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <header>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-100">
              Guide · {guide.readingMinutes} min read
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{guide.h1}</h1>
            <p className="mt-3 text-lg">{guide.capsule}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              By {guide.author} · Last updated{" "}
              <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
            </p>
          </header>

          <div className="prose-content mt-4">
            <KeyFacts page={guide} />
          </div>
          <ToolCta label="Generate subtitles from your own clip" />
          <ContentSections sections={guide.sections.slice(0, 2)} />
          <AdSlot placement="in-content" />
          <ContentSections sections={guide.sections.slice(2)} />
          <WorkedExample page={guide} />
          <FaqList faqs={guide.faqs} />
          <Sources page={guide} />
          <AuthorBox updated={guide.updated} published={guide.published} />
          <RelatedGuides slugs={guide.relatedGuides} />
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-[var(--line)] p-4 text-sm">
            <h2 className="font-bold">In this guide</h2>
            <ul className="mt-2 space-y-1">
              {guide.sections.map((section) => (
                <li key={section.heading}>{section.heading}</li>
              ))}
            </ul>
          </div>
          <AdSlot placement="sidebar" />
        </aside>
      </div>
      <AdSlot placement="article-end" />
      <JsonLd data={[articleSchema(guide), ...(faq ? [faq] : [])]} />
    </article>
  );
}
