import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { guides } from "@/content/guides";
import { toolPages } from "@/content/tools";
import { languages } from "@/config/languages";
import { languagePages } from "@/content/languages";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Site map",
  description:
    "Every page on VoiceToTextFree in one place: the subtitle and transcription tools, the guide library, searchable language pages and all policy pages.",
  path: "/html-sitemap"
});

export default function HtmlSitemapPage() {
  const indexableLanguages = languagePages.filter(({ content }) => !content.noindex);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Site map", href: "/html-sitemap" }]} />
      <h1 className="text-3xl font-extrabold sm:text-4xl">Site map</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        All {indexableLanguages.length} of the {languages.length} languages in the picker have a
        subtitle generator page.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Tools</h2>
        <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
          <li>
            <Link className="underline" href="/">
              Subtitle generator (home)
            </Link>
          </li>
          {toolPages.map((page) => (
            <li key={page.path}>
              <Link className="underline" href={page.path}>
                {page.h1}
              </Link>
            </li>
          ))}
          <li>
            <Link className="underline" href="/languages">
              All languages
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Guides</h2>
        <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
          <li>
            <Link className="underline" href="/guides">
              Guide index
            </Link>
          </li>
          {guides.map((guide) => (
            <li key={guide.path}>
              <Link className="underline" href={guide.path}>
                {guide.h1}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Site and policies</h2>
        <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
          <li>
            <Link className="underline" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="underline" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="underline" href="/privacy-policy">
              Privacy policy
            </Link>
          </li>
          <li>
            <Link className="underline" href="/cookie-policy">
              Cookie policy
            </Link>
          </li>
          <li>
            <Link className="underline" href="/terms">
              Terms of use
            </Link>
          </li>
          <li>
            <Link className="underline" href="/disclaimer">
              Disclaimer
            </Link>
          </li>
          <li>
            <Link className="underline" href="/corrections">
              Corrections log
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
