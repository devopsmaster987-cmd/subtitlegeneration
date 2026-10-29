import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdSlot } from "@/components/AdSlot";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Corrections and change log",
  description:
    "Public record of factual corrections, verification work and material changes to VoiceToTextFree content and tooling.",
  path: "/corrections"
});

const entries = [
  {
    date: "2026-10-29",
    title: "Duplicate tool pages merged",
    detail:
      "Six tool pages that opened the same generator with different titles (video to text, caption generator, transcript generator, speech to text, offline and private subtitle generator) were consolidated into /video-to-srt, /audio-to-srt and the home generator. Old addresses return a 308 redirect and the static pages carry a fallback redirect. The homepage also lost a repeated file-size FAQ; one answer now covers both phrasings."
  },
  {
    date: "2026-10-28",
    title: "Model download sizes re-measured",
    detail:
      "Encoder and decoder ONNX file sizes were re-read from the Hugging Face API for whisper-tiny, whisper-base and whisper-small. The UI now shows WASM sizes of about 41 MB, 77 MB and 249 MB. The source URLs and method are in docs/verification-log.md."
  },
  {
    date: "2026-10-28",
    title: "Language list checked against the tokenizer",
    detail:
      "All 99 language codes were extracted from the multilingual Whisper tokenizer and vendored in src/data/whisper-language-codes.json. A unit test fails if the site catalogue and the vendored code list diverge."
  },
  {
    date: "2026-10-28",
    title: "No site-wide COOP/COEP",
    detail:
      "Cross-Origin-Embedder-Policy breaks AdSense frames. The default tool uses the single-thread ffmpeg.wasm build, which needs no isolation. Isolation headers are scoped to /studio only, and /studio carries no ads."
  },
  {
    date: "2026-10-28",
    title: "Language pages excluded until accuracy is tested",
    detail:
      "Language pages carry noindex until a real clip in that language has been transcribed and recorded in the verification log. The visible accuracy note explains this; the tool remains usable."
  },
  {
    date: "2026-01-15",
    title: "Initial publication",
    detail:
      "VoiceToTextFree launched with the browser-based generator, SRT/VTT/TXT exports and the first subtitle guides."
  }
];

export default function CorrectionsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Corrections", href: "/corrections" }]} />
      <h1 className="text-3xl font-extrabold sm:text-4xl">Corrections and change log</h1>
      <p className="mt-3 text-lg">
        This page records factual corrections and material changes. Verification details, including
        expected versus actual values and source URLs, are kept in the project repository at{" "}
        <code>docs/verification-log.md</code>.
      </p>
      <ol className="mt-8 space-y-6">
        {entries.map((entry) => (
          <li key={`${entry.date}-${entry.title}`} className="border-l-2 border-brand-600 pl-4">
            <p className="text-sm text-[var(--muted)]">
              <time dateTime={entry.date}>{entry.date}</time>
            </p>
            <h2 className="text-lg font-bold">{entry.title}</h2>
            <p className="mt-1 text-sm">{entry.detail}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm">
        Found an error?{" "}
        <Link className="underline" href="/contact">
          Send a correction
        </Link>{" "}
        with the page URL and a primary source.
      </p>
      <AdSlot placement="article-end" />
    </article>
  );
}
