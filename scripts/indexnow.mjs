#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

for (const file of [".env.local", ".env"]) {
  try {
    process.loadEnvFile(file);
  } catch {
    // The variables may already be exported by the shell or CI.
  }
}

const key = process.env.INDEXNOW_KEY?.trim();
const host = (process.env.NEXT_PUBLIC_SITE_URL || "https://voicetotextfree.top")
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");
if (!key) {
  console.error("INDEXNOW_KEY is not set. Add it to the environment before pinging.");
  process.exit(1);
}
let xml;
try {
  xml = readFileSync("out/sitemap.xml", "utf8");
} catch {
  console.error("out/sitemap.xml not found. Run `npm run build` first.");
  process.exit(1);
}
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!urls.length) {
  console.error("No URLs found in the sitemap.");
  process.exit(1);
}
writeFileSync(`out/${key}.txt`, key);
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls })
});
console.log(`IndexNow submitted ${urls.length} URLs: HTTP ${response.status}`);
if (!response.ok) process.exitCode = 1;
