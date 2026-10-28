import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/content/guides";
import { GuideView } from "@/components/GuideView";
import { site } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.path.replace("/guides/", "") }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: guide.path },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en",
      title: `${guide.title} | ${site.name}`,
      description: guide.metaDescription,
      url: guide.path,
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      authors: [guide.author]
    },
    twitter: { card: "summary", title: guide.title, description: guide.metaDescription }
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideView guide={guide} />;
}
