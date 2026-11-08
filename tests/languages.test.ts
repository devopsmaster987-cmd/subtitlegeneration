import { describe, expect, it } from "vitest";
import codes from "@/data/whisper-language-codes.json";
import { languages } from "@/config/languages";
import { languagePages } from "@/content/languages";

describe("Whisper language catalogue", () => {
  it("has 99 unique codes matching the vendored tokenizer list", () => {
    expect(languages).toHaveLength(99);
    expect(new Set(languages.map((language) => language.code)).size).toBe(99);
    expect(languages.map((language) => language.code).sort()).toEqual([...codes.codes].sort());
  });

  it("has unique slugs and valid native names", () => {
    expect(new Set(languages.map((language) => language.slug)).size).toBe(99);
    for (const language of languages) {
      expect(language.name.length).toBeGreaterThan(1);
      expect(language.nativeName.length).toBeGreaterThan(0);
      expect([1, 2, 3]).toContain(language.tier);
      expect([1, 2, 3]).toContain(language.wave);
    }
  });

  it("indexes editorial pages and keeps untested tool-only pages noindex", () => {
    for (const { language, content } of languagePages) {
      const editorial = content.sections.length > 1;
      if (editorial) expect(content.noindex).toBe(false);
      else expect(content.noindex).toBe(!language.accuracyTested);
    }
  });

  it("builds a page for every language", () => {
    expect(languagePages).toHaveLength(99);
    expect(languagePages.every(({ content }) => content.kind === "language")).toBe(true);
  });
});
