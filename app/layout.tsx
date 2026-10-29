import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ConsentBanner } from "@/components/ConsentBanner";
import { ServiceWorkerRegistration } from "@/components/ServiceWorker";
import { JsonLd } from "@/components/JsonLd";
import { organizationEntity, websiteEntity } from "@/data/entities";
import { site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — free voice to text and subtitle generator`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author.name, url: `${site.url}${site.author.urlPath}` }],
  creator: site.author.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en",
    url: site.url,
    title: `${site.name} — free voice to text and subtitle generator`,
    description: site.description
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — free voice to text and subtitle generator`,
    description: site.description
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  ...(site.verification.googleSearchConsole
    ? { verification: { google: site.verification.googleSearchConsole } }
    : {}),
  ...(site.verification.bingWebmaster
    ? { other: { "msvalidate.01": site.verification.bingWebmaster } }
    : {})
};

const themeScript = `(function(){try{var t=localStorage.getItem('voicetotextfree-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`;

const consentScript = site.ads.enabled
  ? `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`
  : "";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {consentScript ? <script dangerouslySetInnerHTML={{ __html: consentScript }} /> : null}
        <meta name="theme-color" content="#4f46e5" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://huggingface.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn-lfs.huggingface.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn-lfs-us-1.hf.co" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ConsentBanner />
        <ServiceWorkerRegistration />
        <JsonLd data={[organizationEntity, websiteEntity]} />
      </body>
    </html>
  );
}
