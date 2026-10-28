import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { guides } from "@/content/guides";
import { toolPages } from "@/content/tools";
import { languagePages } from "@/content/languages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/`,
      lastModified: site.contentUpdated,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${site.url}/languages/`,
      lastModified: site.contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${site.url}/guides/`,
      lastModified: site.contentUpdated,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${site.url}/about/`,
      lastModified: site.contentUpdated,
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: `${site.url}/contact/`,
      lastModified: site.contentUpdated,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${site.url}/privacy-policy/`,
      lastModified: site.contentUpdated,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${site.url}/cookie-policy/`,
      lastModified: site.contentUpdated,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${site.url}/terms/`,
      lastModified: site.contentUpdated,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${site.url}/disclaimer/`,
      lastModified: site.contentUpdated,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${site.url}/corrections/`,
      lastModified: site.contentUpdated,
      changeFrequency: "monthly",
      priority: 0.4
    },
    {
      url: `${site.url}/html-sitemap/`,
      lastModified: site.contentUpdated,
      changeFrequency: "monthly",
      priority: 0.3
    }
  ];

  const toolEntries: MetadataRoute.Sitemap = toolPages.map((page) => ({
    url: `${site.url}${page.path}/`,
    lastModified: page.updated,
    changeFrequency: "monthly",
    priority: 0.9
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${site.url}${guide.path}/`,
    lastModified: guide.updated,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const languageEntries: MetadataRoute.Sitemap = languagePages
    .filter(({ content }) => !content.noindex)
    .map(({ language, content }) => ({
      url: `${site.url}/subtitle-generator/${language.slug}/`,
      lastModified: content.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }));

  return [...staticPages, ...toolEntries, ...guideEntries, ...languageEntries];
}
