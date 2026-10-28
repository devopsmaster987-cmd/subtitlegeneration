import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const citationCrawlers = [
    "Googlebot",
    "Googlebot-Image",
    "Bingbot",
    "Mediapartners-Google",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "Perplexity-User",
    "Claude-SearchBot",
    "Claude-User"
  ];
  const trainingCrawlers = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/studio"] },
      { userAgent: citationCrawlers, allow: "/", disallow: ["/studio"] },
      {
        userAgent: trainingCrawlers,
        ...(site.allowTrainingCrawlers ? { allow: "/", disallow: ["/studio"] } : { disallow: "/" })
      }
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  };
}
