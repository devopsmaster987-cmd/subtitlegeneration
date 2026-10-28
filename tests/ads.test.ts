import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { AdSlot } from "@/components/AdSlot";
import { site } from "@/config/site";

describe("ad safety", () => {
  it("ships no ad markup or script while ads are disabled", () => {
    const adSlot = readFileSync("src/components/AdSlot.tsx", "utf8");
    expect(adSlot).toContain("if (!site.ads.enabled) return null");
    if (!site.ads.enabled)
      expect(readFileSync("src/components/AdUnit.tsx", "utf8")).toContain(
        "if (!site.ads.clientId || !slotId) return null"
      );
  });

  it("renders no ad markup when ads are disabled", () => {
    expect(site.ads.enabled).toBe(false);
    expect(renderToStaticMarkup(createElement(AdSlot, { placement: "below-tool" }))).toBe("");
  });

  it("has no ad slot in the tool widget or studio", () => {
    expect(readFileSync("src/components/Tool.tsx", "utf8")).not.toMatch(/AdSlot/);
    expect(readFileSync("app/studio/page.tsx", "utf8")).not.toMatch(/AdSlot/);
  });
});
