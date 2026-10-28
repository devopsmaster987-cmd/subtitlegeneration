import Link from "next/link";
import type { ToolPageContent } from "@/content/types";
import { Tool } from "./Tool";
import { SubtitleWorkbench } from "./SubtitleWorkbench";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContentSections } from "./ContentSections";
import { FaqList } from "./FaqList";
import { KeyFacts, RelatedGuides, Sources, WorkedExample } from "./PageBlocks";
import { AuthorBox, formatDate } from "./AuthorBox";
import { AdSlot } from "./AdSlot";
import { JsonLd } from "./JsonLd";
import { faqSchema, webApplicationSchema } from "@/lib/schema";
import { relatedToolLinks } from "@/content/tools";
import { site } from "@/config/site";

const workbenchModes = new Set([
  "srt-editor",
  "subtitle-timing-editor",
  "merge-split-srt",
  "convert-srt-to-vtt",
  "subtitle-reading-speed-checker",
  "subtitle-validator"
]);

export function ToolPageView({ page }: { page: ToolPageContent }) {
  const faq = faqSchema(page);
  const isWorkbench = workbenchModes.has(page.preset);
  const links = relatedToolLinks.filter((link) => link.href !== page.path).slice(0, 6);
  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs items={[{ label: page.h1, href: page.path }]} />
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-100">
          Free browser tool
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 text-lg">{page.capsule}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          By {page.author} · Last updated{" "}
          <time dateTime={page.updated}>{formatDate(page.updated)}</time>
        </p>
      </header>

      <div className="mt-6">
        {isWorkbench ? (
          <SubtitleWorkbench
            mode={
              page.preset as
                | "srt-editor"
                | "subtitle-timing-editor"
                | "merge-split-srt"
                | "convert-srt-to-vtt"
                | "subtitle-reading-speed-checker"
                | "subtitle-validator"
            }
          />
        ) : (
          <Tool
            preset={
              page.preset as
                | "main"
                | "video-to-text"
                | "video-to-srt"
                | "audio-to-srt"
                | "speech-to-text"
                | "caption-generator"
                | "transcript-generator"
                | "offline-subtitle-generator"
                | "private-subtitle-generator"
            }
          />
        )}
      </div>

      <AdSlot placement="below-tool" />

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <KeyFacts page={page} />
          <ContentSections sections={page.sections.slice(0, 3)} />
          <AdSlot placement="in-content" />
          <ContentSections sections={page.sections.slice(3)} />
          <WorkedExample page={page} />
          <FaqList faqs={page.faqs} />
          <Sources page={page} />
          <AuthorBox updated={page.updated} published={page.published} />
          <RelatedGuides slugs={page.relatedGuides} />
          <section className="mt-8">
            <h2 className="text-xl font-bold">Related tools</h2>
            <ul className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="underline" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-[var(--line)] p-4 text-sm">
            <h2 className="font-bold">Privacy</h2>
            <p className="mt-1 text-[var(--muted)]">
              Files are decoded and transcribed in this tab. {site.name} has no upload endpoint.
            </p>
          </div>
          <AdSlot placement="sidebar" />
        </aside>
      </div>
      <JsonLd data={[webApplicationSchema(page), ...(faq ? [faq] : [])]} />
    </article>
  );
}
