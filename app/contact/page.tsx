import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact the VoiceToTextFree maintainer about corrections, privacy requests, accessibility problems or broken tools. Email only; no form data is collected.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <h1 className="text-3xl font-extrabold sm:text-4xl">Contact</h1>
      <p className="mt-3 text-lg">
        Email is the only contact channel. {site.name} is operated by {site.author.name}. There is
        no web form, because the site has no backend and we do not want to collect form data.
      </p>

      <div className="mt-6 rounded-xl border border-[var(--line)] p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Email</p>
        <p className="mt-1 text-xl font-bold">
          <a href={`mailto:${site.contactEmail}`} className="underline">
            {site.contactEmail}
          </a>
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Expected response time: within five working days. This is a small independent site, not a
          support desk.
        </p>
      </div>

      <div className="prose-content mt-6">
        <h2>What to include</h2>
        <ul>
          <li>
            <strong>Corrections:</strong> the page URL, the sentence that is wrong, and a primary
            source if you have one.
          </li>
          <li>
            <strong>Privacy or data requests:</strong> the browser and approximate date of your
            visit. Do not send recordings or identity documents.
          </li>
          <li>
            <strong>Accessibility problems:</strong> the page, the device and browser, and what
            happened.
          </li>
          <li>
            <strong>Broken tools:</strong> the file type and size, the model, and the exact error
            message. Do not attach confidential media.
          </li>
        </ul>
        <p>
          We cannot review a transcript for accuracy, provide legal advice or certify a caption
          file. For those needs, consult a qualified professional.
        </p>
      </div>
    </article>
  );
}
