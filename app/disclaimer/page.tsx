import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  description:
    "VoiceToTextFree's automatic transcripts are drafts. Read the accuracy, professional-advice and platform-rule limitations before relying on an export.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="2026-10-28">
      <p>
        The information and tools on {site.name} are provided for general use. They are not a
        substitute for professional captioning, legal transcription, medical transcription or any
        service that requires certification.
      </p>

      <h2>Accuracy</h2>
      <p>
        Automatic speech recognition makes mistakes. Whisper can mishear names, numbers, accents and
        technical terms, and it can add punctuation that changes meaning. A generated file is a
        draft. Always listen to the recording and correct the transcript before publishing it,
        submitting it as evidence or using it to make a decision.
      </p>

      <h2>No professional advice</h2>
      <p>
        Nothing on this site is legal, medical, financial or accessibility-certification advice. If
        you need a compliant caption file for a regulated context, consult a qualified professional
        and the relevant standard.
      </p>

      <h2>Platform rules change</h2>
      <p>
        Guides may describe how a platform's subtitle upload worked at the time of writing.
        Platforms change menus, limits and supported formats. Check the platform&apos;s current help
        page before a large delivery. The <Link href="/guides">guides</Link> link to primary sources
        where a claim depends on one.
      </p>

      <h2>External links</h2>
      <p>
        Links to third-party sites are provided for reference. We do not control those sites and are
        not responsible for their content or privacy practices.
      </p>

      <h2>Media rights</h2>
      <p>
        Use the tool only with media you own or have permission to transcribe. You are responsible
        for copyright, consent and any platform terms that apply to the recording or the resulting
        subtitles.
      </p>

      <p>
        See the <Link href="/terms">terms of use</Link> and{" "}
        <Link href="/privacy-policy">privacy policy</Link>. Contact:{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
