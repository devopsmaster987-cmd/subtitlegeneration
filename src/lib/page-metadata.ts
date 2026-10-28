import type { Metadata } from "next";
import { site } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  noindex = false
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: site.name,
      locale: "en",
      title: socialTitle,
      description,
      url: path
    },
    twitter: { card: "summary", title: socialTitle, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {})
  };
}
