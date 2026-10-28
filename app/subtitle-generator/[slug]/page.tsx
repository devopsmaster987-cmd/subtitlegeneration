import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { languages, languagePagePath } from "@/config/languages";
import { languagePages, languagePageBySlug } from "@/content/languages";
import { LanguageView } from "@/components/LanguageView";
import { site } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((language) => ({ slug: language.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = languagePageBySlug.get(slug);
  if (!entry) return {};
  const { language, content } = entry;
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: languagePagePath(language) },
    robots: content.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en",
      title: `${content.title} | ${site.name}`,
      description: content.metaDescription,
      url: content.path
    },
    twitter: {
      card: "summary",
      title: `${content.title} | ${site.name}`,
      description: content.metaDescription
    }
  };
}

export default async function LanguagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = languagePageBySlug.get(slug);
  if (!entry) notFound();
  const { language, content } = entry;
  const related = languagePages
    .map((item) => item.language)
    .filter((item) => item.code !== language.code && item.region === language.region)
    .slice(0, 10);
  return <LanguageView language={language} content={content} related={related} />;
}
