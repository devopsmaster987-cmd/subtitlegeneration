import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Cookie policy",
  description:
    "The cookies and local storage used by VoiceToTextFree, how advertising consent works, and how to change or withdraw your choice.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie policy" updated="2026-10-29">
      <p>
        This policy describes the storage used by {site.name}, operated by {site.author.name}. It
        matches the choices in the consent banner: strictly necessary storage is always on, while
        advertising and analytics are optional and off until you allow them.
      </p>

      <h2>Strictly necessary storage</h2>
      <div className="overflow-x-auto">
        <table>
          <caption>Storage used to make the site work and remember your choice</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Purpose</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">voicetotextfree-consent</th>
              <td>localStorage</td>
              <td>Stores granted, denied or custom consent.</td>
              <td>Until you clear site data</td>
            </tr>
            <tr>
              <th scope="row">voicetotextfree-consent-ads</th>
              <td>localStorage</td>
              <td>Stores your advertising choice.</td>
              <td>Until you clear site data</td>
            </tr>
            <tr>
              <th scope="row">voicetotextfree-consent-analytics</th>
              <td>localStorage</td>
              <td>Stores your analytics choice.</td>
              <td>Until you clear site data</td>
            </tr>
            <tr>
              <th scope="row">voicetotextfree-theme</th>
              <td>localStorage</td>
              <td>Remembers light or dark mode.</td>
              <td>Until you clear site data</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Browser cache and the service worker</h2>
      <p>
        The site registers a service worker that caches the app shell (pages, scripts and the
        ffmpeg/onnx runtime files) so the tool can reload offline. Whisper model files downloaded
        from the model host are stored in the browser&apos;s Cache API by the library that runs the
        model, not by this site&apos;s cookies. Both are covered by your browser&apos;s standard
        &quot;clear browsing data&quot; controls; clearing them removes cached weights, so the next
        transcription run downloads the model again. This caching does not record or transmit your
        transcripts.
      </p>

      <h2>Advertising cookies</h2>
      <p>
        If advertising is enabled, Google AdSense may set cookies or use similar identifiers to
        serve and measure ads. Google and its partners may use these for personalised advertising
        based on visits to this and other sites. These cookies are not set until you grant
        advertising consent, and Consent Mode v2 signals are set to denied by default.
      </p>
      <p>
        Opt out of personalised advertising through{" "}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer noopener">
          Google Ads Settings
        </a>{" "}
        or{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer noopener">
          aboutads.info
        </a>
        . Google&apos;s own explanation is in{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noreferrer noopener"
        >
          How Google uses information from sites that use its services
        </a>
        .
      </p>

      <h2>Analytics</h2>
      <p>
        This release does not load an analytics script. If analytics is added, it will be listed in
        this table and will load only after analytics consent. The consent banner will be updated at
        the same time.
      </p>

      <h2>How to change your choice</h2>
      <p>
        Use the “Cookie settings” link in the footer to reopen the banner. You can accept all,
        reject non-essential storage or choose categories individually. You can also clear cookies
        and local storage in your browser settings; that removes your saved choice, so the banner
        will appear again.
      </p>
      <p>
        For more detail about personal data, see the{" "}
        <Link href="/privacy-policy">privacy policy</Link>. Questions:{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
