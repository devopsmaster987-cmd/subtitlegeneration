import type { Metadata } from "next";
import Link from "next/link";
import { Tool } from "@/components/Tool";
import { ContentSections } from "@/components/ContentSections";
import { FaqList } from "@/components/FaqList";
import { KeyFacts, Sources, WorkedExample } from "@/components/PageBlocks";
import { AuthorBox, formatDate } from "@/components/AuthorBox";
import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { homeContent } from "@/content/home";
import { faqSchema, softwareApplicationSchema } from "@/lib/schema";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: homeContent.title,
  description: homeContent.metaDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en",
    title: `${homeContent.h1} | ${site.name}`,
    description: homeContent.metaDescription,
    url: "/"
  },
  twitter: {
    card: "summary",
    title: `${homeContent.h1} | ${site.name}`,
    description: homeContent.metaDescription
  }
};

export default function HomePage() {
  const page = homeContent;
  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-100">
          Free · Private · Browser-based
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 text-lg text-[var(--ink)]">{page.capsule}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Works with 99 languages. Nothing is uploaded. Updated{" "}
          <time dateTime={page.updated}>{formatDate(page.updated)}</time>.
        </p>
      </header>

      <div className="mt-6">
        <Tool />
      </div>

      <AdSlot placement="below-tool" />

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <KeyFacts page={page} />
          <ContentSections sections={page.sections.slice(0, 4)} />
          <AdSlot placement="in-content" />
          <ContentSections sections={page.sections.slice(4)} />
          <WorkedExample page={page} />
          <FaqList faqs={page.faqs} />
          <Sources page={page} />
          <AuthorBox updated={page.updated} published={page.published} />
          <section className="mt-8 rounded-xl border border-[var(--line)] p-4">
            <h2 className="text-lg font-bold">Popular tools</h2>
            <ul className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link className="underline" href="/video-to-srt">
                  Video to SRT
                </Link>
              </li>
              <li>
                <Link className="underline" href="/audio-to-srt">
                  Audio to SRT
                </Link>
              </li>
              <li>
                <Link className="underline" href="/convert-srt-to-vtt">
                  Convert SRT to VTT
                </Link>
              </li>
              <li>
                <Link className="underline" href="/subtitle-timing-editor">
                  Timing editor
                </Link>
              </li>
              <li>
                <Link className="underline" href="/srt-editor">
                  SRT editor
                </Link>
              </li>
              <li>
                <Link className="underline" href="/subtitle-validator">
                  Subtitle validator
                </Link>
              </li>
              <li>
                <Link className="underline" href="/merge-split-srt">
                  Merge or split SRT
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-[var(--line)] p-4">
            <h2 className="text-lg font-bold">New here?</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Read the{" "}
              <Link className="underline" href="/guides/how-to-improve-whisper-accuracy">
                step-by-step guide
              </Link>{" "}
              or start with a short clip and the Fast model.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="underline" href="/guides/srt-vs-vtt">
                  SRT vs VTT
                </Link>
              </li>
              <li>
                <Link className="underline" href="/guides/subtitle-best-practices">
                  Subtitle best practices
                </Link>
              </li>
              <li>
                <Link className="underline" href="/languages">
                  All 99 languages
                </Link>
              </li>
            </ul>
          </div>
          <AdSlot placement="sidebar" />
        </aside>
      </div>

      <JsonLd
        data={
          [softwareApplicationSchema(), faqSchema(page)].filter(Boolean) as Record<
            string,
            unknown
          >[]
        }
      />
    </article>
  );
}
