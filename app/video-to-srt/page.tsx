import type { Metadata } from "next";
import { videoToSrt } from "@/content/tools/video-to-srt";
import { ToolPageView } from "@/components/ToolPageView";
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
    url: videoToSrt.path
  },
  twitter: {
    card: "summary",
    title: `${videoToSrt.title} | ${site.name}`,
    description: videoToSrt.metaDescription
  }
};

export default function Page() {
  return <ToolPageView page={videoToSrt} />;
}
