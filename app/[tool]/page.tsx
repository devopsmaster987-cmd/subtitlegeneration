import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolPage, toolPages } from "@/content/tools";
import { ToolPageView } from "@/components/ToolPageView";
import { ogImage, twitterImage } from "@/lib/og-image";
import { site } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return toolPages
    .filter((page) => page.path !== "/video-to-srt")
    .map((page) => ({ tool: page.path.replace(/^\//, "") }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;
  const page = getToolPage(`/${tool}`);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en",
      title: `${page.title} | ${site.name}`,
      description: page.metaDescription,
      url: page.path,
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${site.name}`,
      description: page.metaDescription,
      images: [twitterImage]
    }
  };
}

export default async function ToolRoute({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  const page = getToolPage(`/${tool}`);
  if (!page) notFound();
  return <ToolPageView page={page} />;
}
