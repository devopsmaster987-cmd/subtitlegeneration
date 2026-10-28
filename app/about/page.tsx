import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { authorEntity } from "@/data/entities";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Who maintains VoiceToTextFree, why the site exists, how browser-based Whisper works, and the limitations we do not hide.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <h1 className="text-3xl font-extrabold sm:text-4xl">About VoiceToTextFree</h1>
      <p className="mt-3 text-lg">
        VoiceToTextFree is an independent, browser-based subtitle and transcript generator
        maintained by {site.author.name}. The goal is simple: make a useful subtitle tool that does
        not require an account, an upload or a per-minute payment, and explain its limits honestly.
      </p>

      <div className="prose-content mt-6">
        <h2>Why this site exists</h2>
        <p>
          Most online subtitle generators send your recording to a server. That is a reasonable
          business model, but it is a poor fit for interviews, legal recordings, medical notes,
          student conversations and anything covered by a confidentiality agreement. Modern browsers
          can run a capable speech model locally. VoiceToTextFree is built around that capability,
          and every design decision follows from it: no backend, no file storage and no account.
        </p>
        <p>
          The site also exists because subtitle advice online is often vague. A page that says “use
          a good subtitle format” without showing the timestamp syntax, the character limits or the
          platform's current rules is not much help. The guides use worked examples, real timestamps
          and links to primary sources. Where a fact depends on a platform that changes its menus,
          we say when it was checked and link the help page.
        </p>

        <h2>How it works</h2>
        <p>
          The tool uses ONNX builds of OpenAI Whisper through transformers.js. Audio is extracted
          with ffmpeg.wasm at 16 kHz mono, split into overlapping chunks, and transcribed by a model
          running with WebGPU where the browser supports it or WebAssembly otherwise. The transcript
          is editable, and exports are generated in the same tab. The first run downloads the model;
          the browser caches it for later runs. The full technical description and the sources for
          model sizes and language coverage live in the{" "}
          <Link href="/guides/how-does-whisper-work">Whisper guide</Link> and the{" "}
          <Link href="/corrections">corrections log</Link>.
        </p>

        <h2>Who maintains the site</h2>
        <p>
          {site.author.bio} All original tooling, editorial content and maintenance work on this
          site are credited to him unless a page states otherwise. The site does not publish
          invented credentials, client lists or testimonials. If you need to know who is responsible
          for a claim, the author box on every article and this page are the record.
        </p>
        <p>
          Contact: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>

        <h2>Honest limitations</h2>
        <ul>
          <li>
            Automatic transcription is a draft, not a certified transcript. Names, numbers and
            punctuation need review.
          </li>
          <li>
            Accuracy varies by language, accent, microphone and background noise. Low-resource
            languages can be weak.
          </li>
          <li>
            Files are limited to 500 MB and processing happens in memory, so long recordings can
            exceed a phone's capacity.
          </li>
          <li>
            The tool translates only into English (Whisper's translate task). It is not a general
            subtitle translator.
          </li>
          <li>
            Offline use requires the model to have been downloaded once in the same browser profile.
          </li>
          <li>
            Video burn-in re-encodes the file and is slower than generating a sidecar subtitle file.
          </li>
        </ul>

        <h2>How to reach us</h2>
        <p>
          Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> for corrections,
          privacy requests or questions. The <Link href="/contact">contact page</Link> explains what
          to include and the expected response time. If you find a factual error, the{" "}
          <Link href="/corrections">corrections log</Link> shows how previous fixes were handled.
        </p>
      </div>
      <JsonLd data={authorEntity} />
    </article>
  );
}
