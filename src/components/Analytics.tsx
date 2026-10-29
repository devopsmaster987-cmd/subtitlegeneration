"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function analyticsGranted(): boolean {
  try {
    if (localStorage.getItem("voicetotextfree-consent-analytics") === "true") return true;
    return localStorage.getItem("voicetotextfree-consent") === "granted";
  } catch {
    return false;
  }
}

/**
 * Google Analytics 4, strictly behind the consent banner. Nothing is loaded
 * and no request is sent unless a measurement ID is configured AND the visitor
 * allowed analytics. This component renders no markup.
 */
export function Analytics() {
  const enabled = Boolean(site.analytics.ga4Id);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const update = () => setGranted(analyticsGranted());
    update();
    window.addEventListener("voicetotextfree:consent-changed", update);
    return () => window.removeEventListener("voicetotextfree:consent-changed", update);
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !granted) return;
    if (!document.getElementById("ga4-script")) {
      const script = document.createElement("script");
      script.id = "ga4-script";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${site.analytics.ga4Id}`;
      document.head.appendChild(script);
    }
    window.dataLayer = window.dataLayer || [];
    const gtag = window.gtag ?? function gtag(...args: unknown[]) {
      (window.dataLayer as unknown[][]).push(args);
    };
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", site.analytics.ga4Id);
  }, [enabled, granted]);

  return null;
}
