import { site } from "@/config/site";
import { guides } from "@/content/guides";
import { toolPages } from "@/content/tools";
import { languagePages } from "@/content/languages";

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

export interface SitemapChild {
  loc: string;
  lastModified: string;
}

/** Always emit the final canonical form: https + apex host + trailing slash. */
export function absoluteUrl(path: string): string {
  const normalized = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  return `${site.url}${normalized}`;
}

/** Absolute URL for a file such as a child sitemap (no trailing slash). */
export function fileUrl(path: string): string {
  return `${site.url}/${path.replace(/^\/+/, "")}`;
}

function entry(
  path: string,
  lastModified: string,
  changeFrequency: ChangeFrequency,
  priority: number
): SitemapEntry {
  return { url: absoluteUrl(path), lastModified, changeFrequency, priority };
}

/** Home, tool pages, the language index and every language page. */
export function toolSitemapEntries(): SitemapEntry[] {
  return [
    entry("/", site.contentUpdated, "weekly", 1),
    entry("/languages", site.contentUpdated, "monthly", 0.7),
    entry("/html-sitemap", site.contentUpdated, "monthly", 0.3),
    ...toolPages.map((page) => entry(page.path, page.updated, "monthly", 0.9)),
    ...languagePages.map(({ content }) =>
      entry(`/subtitle-generator/${content.slug}`, content.updated, "monthly", 0.7)
    )
  ];
}

/** Guide index and every guide. */
export function guideSitemapEntries(): SitemapEntry[] {
  return [
    entry("/guides", site.contentUpdated, "weekly", 0.8),
    ...guides.map((guide) => entry(guide.path, guide.updated, "monthly", 0.8))
  ];
}

/** Legal, utility and policy pages. */
export function legalSitemapEntries(): SitemapEntry[] {
  return [
    entry("/about", site.contentUpdated, "yearly", 0.4),
    entry("/contact", site.contentUpdated, "yearly", 0.3),
    entry("/privacy-policy", site.contentUpdated, "yearly", 0.3),
    entry("/cookie-policy", site.contentUpdated, "yearly", 0.3),
    entry("/terms", site.contentUpdated, "yearly", 0.3),
    entry("/disclaimer", site.contentUpdated, "yearly", 0.3),
    entry("/corrections", site.contentUpdated, "monthly", 0.4)
  ];
}

export function allSitemapEntries(): SitemapEntry[] {
  return [...toolSitemapEntries(), ...guideSitemapEntries(), ...legalSitemapEntries()];
}

export function sitemapIndexChildren(): SitemapChild[] {
  return [
    { loc: fileUrl("sitemap-tools.xml"), lastModified: site.contentUpdated },
    { loc: fileUrl("sitemap-guides.xml"), lastModified: site.contentUpdated },
    { loc: fileUrl("sitemap-legal.xml"), lastModified: site.contentUpdated }
  ];
}

export function renderUrlset(entries: SitemapEntry[]): string {
  const body = entries
    .map((item) =>
      [
        "  <url>",
        `    <loc>${item.url}</loc>`,
        `    <lastmod>${item.lastModified}</lastmod>`,
        `    <changefreq>${item.changeFrequency}</changefreq>`,
        `    <priority>${item.priority.toFixed(1)}</priority>`,
        "  </url>"
      ].join("\n")
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function renderSitemapIndex(children: SitemapChild[]): string {
  const body = children
    .map((child) =>
      [
        "  <sitemap>",
        `    <loc>${child.loc}</loc>`,
        `    <lastmod>${child.lastModified}</lastmod>`,
        "  </sitemap>"
      ].join("\n")
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

export const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600"
} as const;
