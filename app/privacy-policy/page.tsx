import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How VoiceToTextFree processes files locally, what cookies and local storage are used, how Google AdSense is handled, and how to exercise GDPR or CCPA rights.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy policy" updated="2026-10-28">
      <p>
        This policy explains what happens to your files and data when you use {site.name} at{" "}
        <strong>{site.url}</strong>. The site is operated by {site.author.name}. The short version:
        your media is processed in your browser and is not uploaded to us. We have no backend, no
        user accounts and no database of transcripts.
      </p>

      <h2>Files and transcripts</h2>
      <p>
        When you choose a video or audio file, the browser reads it locally. ffmpeg.wasm extracts an
        audio track in memory, and the Whisper model transcribes it on your device. Neither the file
        nor the extracted audio is sent to {site.name} or to a transcription API. Transcripts and
        edits stay in the browser tab until you close it or download a file.
      </p>
      <p>
        The model files are downloaded from Hugging Face and cached by your browser. That request
        tells Hugging Face your IP address and user agent, as any web request does, but it does not
        include your media. Review{" "}
        <a href="https://huggingface.co/privacy" target="_blank" rel="noreferrer noopener">
          Hugging Face&apos;s privacy policy
        </a>{" "}
        for details.
      </p>

      <h2>What we collect</h2>
      <p>
        The static site does not require an account and does not create a transcript history. Our
        hosting provider may keep ordinary server logs (IP address, timestamp, requested URL, user
        agent) for security and operations. If analytics is enabled on a deployment, Google
        Analytics 4 traffic data is collected only after you choose analytics in the consent
        banner; the tool itself never sends your media or transcripts anywhere.
      </p>
      <p>
        If you email us, we receive your email address and whatever you include in the message. We
        use it only to answer you and keep the correspondence for as long as needed to resolve the
        issue.
      </p>

      <h2>Cookies, local storage and advertising</h2>
      <p>
        Strictly necessary local storage stores your theme choice and your consent decision. It is
        not used to track you across sites.
      </p>
      <p>
        If advertising is enabled, {site.name} uses Google AdSense. Google and its partners may use
        cookies or similar technologies to serve ads based on your prior visits to this and other
        websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads
        to you based on your visits to this site and/or other sites on the internet. You can opt out
        of personalised advertising by visiting{" "}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer noopener">
          Google Ads Settings
        </a>{" "}
        or{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer noopener">
          aboutads.info
        </a>
        . More information is available in{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noreferrer noopener"
        >
          Google&apos;s partner-sites policy
        </a>
        .
      </p>
      <p>
        For visitors in the EEA, UK and Switzerland, advertising and analytics consent is denied by
        default using Google Consent Mode v2. The banner offers accept, reject and manage options
        with equal prominence. You can change your choice at any time using the “Cookie settings”
        link in the footer. The <Link href="/cookie-policy">cookie policy</Link> lists the storage
        keys.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete or restrict
        the processing of personal data, to object to processing, or to withdraw consent. Because we
        do not hold transcripts or accounts, most requests concern server logs or email
        correspondence. Send requests to{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we will respond within
        the period required by applicable law.
      </p>
      <p>
        California residents may request disclosure or deletion of personal information and may opt
        out of the sale or sharing of personal information. We do not sell personal information. Ad
        personalisation is controlled through the consent banner and Google&apos;s settings linked
        above.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        {site.name} is not directed at children under 13, and we do not knowingly collect personal
        information from children. If you believe a child has sent us personal information, contact
        us and we will delete it.
      </p>

      <h2>Security and retention</h2>
      <p>
        The site is served over HTTPS. Local processing reduces the amount of data that leaves your
        device, but it does not make your device itself secure. Clear site data after sensitive work
        if other people use the same browser profile. Server logs are kept only as long as needed
        for security and operations; email is kept as long as needed to handle the request.
      </p>

      <h2>Changes and contact</h2>
      <p>
        Material changes will be recorded in the <Link href="/corrections">corrections log</Link>{" "}
        and the date at the top of this page will change. Questions or requests:{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
