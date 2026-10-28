"use client";

import { site } from "@/config/site";

export function ConsentSettingsButton() {
  if (!site.ads.enabled) return null;
  return (
    <button
      type="button"
      className="hover:underline"
      onClick={() => window.dispatchEvent(new Event("voicetotextfree:open-consent"))}
    >
      Cookie settings
    </button>
  );
}
