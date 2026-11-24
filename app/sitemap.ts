import type { MetadataRoute } from "next";
import { allSitemapEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

/**
 * Legacy combined sitemap kept for clients that still request /sitemap.xml.
 * Search engines are pointed at /sitemap-index.xml from robots.txt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return allSitemapEntries().map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority
  }));
}
