import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/content/guides";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdSlot } from "@/components/AdSlot";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Subtitle guides: formats, timing, accessibility and workflow",
  description:
    "Original, practical guides to subtitle formats, timing, accuracy, platform uploads and accessibility, written for people who actually make subtitles.",
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en",
    title: `Subtitle guides | ${site.name}`,
    description:
      "Practical guides to SRT, VTT, timing, Whisper accuracy, platform captions and accessibility.",
    url: "/guides"
  },
  twitter: {
    card: "summary",
    title: `Subtitle guides | ${site.name}`,
    description:
      "Practical guides to SRT, VTT, timing, Whisper accuracy, platform captions and accessibility."
  }
};

export default function GuidesIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <h1 className="text-3xl font-extrabold sm:text-4xl">Subtitle guides</h1>
      <p className="mt-3 max-w-3xl text-lg">
        Each guide solves one concrete problem: choosing a format, fixing timing, understanding
        Whisper accuracy, uploading to a platform or making captions accessible. The guides are
        written and maintained by the VoiceToTextFree team and link to primary sources where a
        factual claim depends on one.
      </p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Start with{" "}
        <Link className="underline" href="/guides/srt-vs-vtt">
          SRT vs VTT
        </Link>{" "}
        if you only need a file format, or{" "}
        <Link className="underline" href="/guides/how-to-improve-whisper-accuracy">
          how to improve Whisper accuracy
        </Link>{" "}
        if the transcript needs work.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {guides.map((guide) => (
          <article key={guide.path} className="rounded-xl border border-[var(--line)] p-4">
            <h2 className="text-lg font-bold">
              <Link href={guide.path} className="hover:underline">
                {guide.h1}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{guide.metaDescription}</p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              {guide.readingMinutes} min read · Updated {guide.updated}
            </p>
          </article>
        ))}
      </div>

      <AdSlot placement="article-end" />
    </div>
  );
}
