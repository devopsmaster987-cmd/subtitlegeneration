/**
 * Single source of truth for site configuration.
 * Build-time environment variables are read here so no empty verification
 * tags or placeholder contact addresses ship by accident.
 */

const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://voicetotextfree.top",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "ihsanaslamm@gmail.com",
  authorName: process.env.NEXT_PUBLIC_AUTHOR_NAME?.trim() || "Abdul Samad",
  authorBio:
    process.env.NEXT_PUBLIC_AUTHOR_BIO?.trim() ||
    "Abdul Samad is the creator and maintainer of VoiceToTextFree and is responsible for the site's browser-based tool, subtitle guides and corrections.",
  adsenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim() || "",
  adsEnabledEnv: process.env.NEXT_PUBLIC_ADS_ENABLED?.trim().toLowerCase() === "true",
  slots: {
    belowTool: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_TOOL?.trim() || "",
    inContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT?.trim() || "",
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR?.trim() || "",
    articleEnd: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_END?.trim() || ""
  }
};

export const site = {
  name: "VoiceToTextFree",
  tagline: "Free voice to text and subtitles, generated privately in your browser",
  description:
    "VoiceToTextFree turns video and audio into editable SRT, VTT and TXT subtitles or transcripts using Whisper entirely in your browser. No uploads, no account, no paid API.",
  url: env.siteUrl.replace(/\/$/, ""),
  locale: "en",
  contactEmail: env.contactEmail,
  author: {
    name: env.authorName,
    role: "Creator and maintainer",
    bio: env.authorBio,
    urlPath: "/about"
  },
  publisher: {
    name: "VoiceToTextFree",
    urlPath: "/"
  },
  ads: {
    enabled: env.adsEnabledEnv,
    clientId: env.adsenseClientId,
    consentMode: true,
    slots: env.slots
  },
  verification: {
    googleSearchConsole: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION?.trim() || "",
    bingWebmaster: process.env.NEXT_PUBLIC_BING_VERIFICATION?.trim() || ""
  },
  indexNow: {
    key: process.env.INDEXNOW_KEY?.trim() || ""
  },
  /** Training crawlers are allowed by default; ask the owner before changing. */
  allowTrainingCrawlers: true,
  launchDate: "2026-01-15",
  contentUpdated: "2026-10-28"
} as const;

export const buildEnv = env;
