import { describe, expect, it } from "vitest";
import {
  excludedKeywords,
  keywordOwnership,
  keywords,
  parkedKeywords,
  topicKeywords
} from "@/data/keywords";
import { homeContent } from "@/content/home";
import { guides } from "@/content/guides";
import { toolPages } from "@/content/tools";
import { languagePages } from "@/content/languages";

const pages = [
  homeContent,
  ...guides,
  ...toolPages,
  ...languagePages.map(({ content }) => content)
];

describe("keyword registry", () => {
  it("has one owner for every primary, secondary, FAQ and synonym entry", () => {
    for (const [keyword, owners] of keywordOwnership) {
      expect(owners, keyword).toHaveLength(1);
    }
  });

  it("records every content keyword with the matching role and page", () => {
    const entries = keywords.filter((entry) => entry.page);
    for (const page of pages) {
      for (const use of page.keywords) {
        const found = entries.find(
          (entry) =>
            entry.page === page.path &&
            entry.keyword.toLocaleLowerCase() === use.keyword.toLocaleLowerCase()
        );
        expect(found, `${page.path} / ${use.keyword}`).toBeDefined();
        expect(found?.role).toBe(use.role);
      }
    }
  });

  it("gives each owned keyword explicit competition and wave metadata", () => {
    for (const entry of keywords) {
      expect([1, 2, 3]).toContain(entry.wave);
      if (entry.page) {
        expect(["head", "low", "medium"]).toContain(entry.competition);
      } else {
        expect(entry.competition).toBe("n/a");
        expect(["parked", "topic", "excluded"]).toContain(entry.role);
      }
    }
  });

  it("keeps parked, topic and excluded terms unassigned", () => {
    for (const list of [parkedKeywords, topicKeywords, excludedKeywords]) {
      for (const keyword of list) {
        expect(keywordOwnership.has(keyword), keyword).toBe(false);
      }
    }
  });
});
