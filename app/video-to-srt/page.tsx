import type { Metadata } from "next";
import { videoToSrt } from "@/content/tools/video-to-srt";
import { ToolPageView } from "@/components/ToolPageView";
import { ogImage, twitterImage } from "@/lib/og-image";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: videoToSrt.title,
  description: videoToSrt.metaDescription,
  alternates: { canonical: videoToSrt.path },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en",
    title: `${videoToSrt.title} | ${site.name}`,
    description: videoToSrt.metaDescription,
    url: videoToSrt.path,
    images: [ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: `${videoToSrt.title} | ${site.name}`,
    description: videoToSrt.metaDescription,
    images: [twitterImage]
  }
};

export default function Page() {
  return <ToolPageView page={videoToSrt} />;
}
