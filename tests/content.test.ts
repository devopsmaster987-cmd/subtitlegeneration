import { describe, expect, it } from "vitest";
import { guides } from "@/content/guides";
import { toolPages } from "@/content/tools";
import { homeContent } from "@/content/home";
import { languagePages } from "@/content/languages";
import { contentProblems, keywordProblems } from "../scripts/lib/audit";
import sitemap from "../app/sitemap";

describe("content registry", () => {
  it("has 28 guides, 14 tools and 99 language pages", () => {
    expect(guides).toHaveLength(28);
    expect(toolPages).toHaveLength(14);
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
  it("excludes noindex language pages and uses canonical trailing slashes", () => {
    const entries = sitemap();
    expect(entries.some((entry) => entry.url.includes("/subtitle-generator/"))).toBe(false);
    expect(entries.every((entry) => entry.url.endsWith("/"))).toBe(true);
  });
});
