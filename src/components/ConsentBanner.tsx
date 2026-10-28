"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/config/site";

type Consent = "granted" | "denied" | "custom";

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem("voicetotextfree-consent");
    if (value === "granted" || value === "denied" || value === "custom") return value;
  } catch {
    /* ignore */
  }
  return null;
}

function pushConsent(ads: boolean, analytics: boolean) {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("consent", "update", {
    ad_storage: ads ? "granted" : "denied",
    ad_user_data: ads ? "granted" : "denied",
    ad_personalization: ads ? "granted" : "denied",
    analytics_storage: analytics ? "granted" : "denied"
  });
}

function save(value: Consent, ads: boolean, analytics: boolean) {
  try {
    localStorage.setItem("voicetotextfree-consent", value);
    localStorage.setItem("voicetotextfree-consent-ads", String(ads));
    localStorage.setItem("voicetotextfree-consent-analytics", String(analytics));
  } catch {
    /* ignore */
  }
  pushConsent(ads, analytics);
  window.dispatchEvent(new Event("voicetotextfree:consent-changed"));
}

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [ads, setAds] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!site.ads.enabled) return;
    if (!readConsent()) setOpen(true);
    const reopen = () => {
      setManage(true);
      setOpen(true);
    };
    window.addEventListener("voicetotextfree:open-consent", reopen);
    return () => window.removeEventListener("voicetotextfree:open-consent", reopen);
  }, []);

  if (!site.ads.enabled || !open) return null;

  function acceptAll() {
    save("granted", true, true);
    setOpen(false);
  }

  function rejectAll() {
    save("denied", false, false);
    setOpen(false);
  }

  function saveCustom() {
    save("custom", ads, analytics);
    setOpen(false);
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[var(--page)] p-4 shadow-2xl"
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="consent-title" className="text-base font-bold">
          Your privacy choices
        </h2>
        <p id="consent-description" className="mt-1 text-sm text-[var(--muted)]">
          VoiceToTextFree needs no cookies for the tool itself. If advertising is enabled, Google
          AdSense and its partners may use cookies for personalised ads. In the EEA, UK and
          Switzerland we ask before setting those cookies and default Consent Mode v2 to denied.
          Read our{" "}
          <Link href="/privacy-policy" className="underline">
            privacy policy
          </Link>{" "}
          and{" "}
          <Link href="/cookie-policy" className="underline">
            cookie policy
          </Link>
          .
        </p>

        {manage ? (
          <fieldset className="mt-3 space-y-2 text-sm">
            <legend className="font-semibold">Manage options</legend>
            <label className="flex items-start gap-2">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <strong>Strictly necessary</strong> — remembers this choice. Always on; no tracking.
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={ads}
                onChange={(event) => setAds(event.target.checked)}
                className="mt-1"
              />
              <span>
                <strong>Advertising</strong> — allows Google AdSense cookies for personalised ads.
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                className="mt-1"
              />
              <span>
                <strong>Analytics</strong> — allows aggregate usage measurement if analytics is
                enabled on this deployment.
              </span>
            </label>
          </fieldset>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {manage ? (
            <button
              type="button"
              onClick={saveCustom}
              className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Save choices
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setManage(true)}
              className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold"
            >
              Manage options
            </button>
          )}
          <button
            type="button"
            onClick={rejectAll}
            className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
