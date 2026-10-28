"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function consentGranted(): boolean {
  try {
    if (localStorage.getItem("voicetotextfree-consent-ads") === "true") return true;
    return localStorage.getItem("voicetotextfree-consent") === "granted";
  } catch {
    return false;
  }
}

const slotIds = {
  "below-tool": site.ads.slots.belowTool,
  "in-content": site.ads.slots.inContent,
  sidebar: site.ads.slots.sidebar,
  "article-end": site.ads.slots.articleEnd
} as const;

type Placement = keyof typeof slotIds;

export function AdUnit({ placement }: { placement: Placement }) {
  const ref = useRef<HTMLModElement>(null);
  const slotId = slotIds[placement];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!site.ads.enabled || !site.ads.clientId || !slotId) return;
    const update = () => setVisible(consentGranted());
    update();
    window.addEventListener("voicetotextfree:consent-changed", update);
    return () => window.removeEventListener("voicetotextfree:consent-changed", update);
  }, []);

  useEffect(() => {
    if (!visible || !site.ads.clientId || !slotId) return;
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${site.ads.clientId}`;
      document.head.appendChild(script);
    }
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* AdSense can reject a duplicate push; the slot stays reserved. */
    }
  }, [visible, slotId]);

  if (!site.ads.clientId || !slotId) return null;

  return (
    <div className="ad-slot" data-placement={placement}>
      {visible ? (
        <ins
          ref={ref}
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={site.ads.clientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : null}
    </div>
  );
}
