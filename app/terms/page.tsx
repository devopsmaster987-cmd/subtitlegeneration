import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of use",
  description:
    "The terms that apply when you use VoiceToTextFree: acceptable use, content rights, accuracy, availability and limitation of liability.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="2026-10-28">
      <p>
        By using {site.name}, you agree to these terms. If you do not agree, do not use the site.
        These terms apply to the website and the browser-based tools it provides. The site is
        operated by {site.author.name}.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Use the tool only for media you own or have permission to transcribe.</li>
        <li>
          Do not use the site to infringe copyright, violate privacy, harass people or break the
          law.
        </li>
        <li>
          Do not attempt to disrupt the site, bypass security controls, scrape it at scale or
          misrepresent it as your own service.
        </li>
        <li>
          Do not upload or process content that is illegal in your jurisdiction, including child
          sexual abuse material or content that violates another person&apos;s privacy.
        </li>
      </ul>
      <p>
        The site does not provide a video downloader and does not authorise downloading media from
        other platforms. You are responsible for following each platform&apos;s terms and copyright
        rules.
      </p>

      <h2>No warranty on accuracy</h2>
      <p>
        Automatic transcription is probabilistic. Output may contain errors, omissions, wrong
        timestamps, incorrect punctuation or invented text. The site is provided “as is” and “as
        available”, without warranties of accuracy, fitness for a particular purpose,
        non-infringement or uninterrupted availability. You are responsible for reviewing every file
        before publishing or relying on it.
      </p>

      <h2>Your content and rights</h2>
      <p>
        You keep ownership of your media and transcripts. Because processing happens locally, we do
        not receive a licence to your files. You grant us no rights to your content beyond the
        technical processing that happens in your browser. You are responsible for obtaining any
        consent needed from people whose voices appear in the recording.
      </p>

      <h2>Open-source components and third-party services</h2>
      <p>
        The tool uses open-source software including Whisper, transformers.js and ffmpeg.wasm. Those
        components keep their own licences. Model files are downloaded from Hugging Face;
        advertising, if enabled, is provided by Google. We are not responsible for third-party
        services or their availability.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {site.name} and its maintainer, {site.author.name},
        are not liable for indirect, incidental, special, consequential or punitive damages, or for
        loss of data, profits, revenue or goodwill, arising from your use of the site. Where
        liability cannot be excluded, it is limited to the amount you paid to use the site, which is
        zero.
      </p>

      <h2>Changes and termination</h2>
      <p>
        Features may change or be removed. We may restrict access to protect the site or comply with
        the law. Material changes to these terms will be recorded in the{" "}
        <Link href="/corrections">corrections log</Link> and reflected in the date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        . See also the <Link href="/privacy-policy">privacy policy</Link> and{" "}
        <Link href="/disclaimer">disclaimer</Link>.
      </p>
    </LegalPage>
  );
}
