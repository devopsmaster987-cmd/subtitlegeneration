import { describe, expect, it } from "vitest";
import { guides } from "@/content/guides";
import { toolPages } from "@/content/tools";
import { homeContent } from "@/content/home";
import { languagePages } from "@/content/languages";
import { contentProblems, keywordProblems } from "../scripts/lib/audit";
import sitemap from "../app/sitemap";

describe("content registry", () => {
  it("has 31 guides, 8 tools and 99 language pages", () => {
    expect(guides).toHaveLength(31);
    expect(toolPages).toHaveLength(8);
    expect(languagePages).toHaveLength(99);
  });

  it("has unique paths and canonical primary keys", () => {
    const paths = [
      homeContent,
      ...guides,
      ...toolPages,
      ...languagePages.map(({ content }) => content)
    ].map((page) => page.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("passes the content and keyword audits", () => {
    expect(contentProblems()).toEqual([]);
    expect(keywordProblems()).toEqual([]);
  });
});

describe("sitemap", () => {
  it("lists exactly the indexable language pages with trailing slashes", () => {
    const entries = sitemap();
    for (const { content } of languagePages) {
      const inSitemap = entries.some((entry) => entry.url.includes(`${content.path}/`));
      expect(inSitemap).toBe(!content.noindex);
    }
    expect(entries.every((entry) => entry.url.endsWith("/"))).toBe(true);
  });
});
