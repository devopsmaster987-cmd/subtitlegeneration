import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

type Problem = { url: string; message: string };

function outputFile(url: string): string {
  const pathname = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
  return join("out", pathname, "index.html");
}

function metaContent(html: string, attribute: string, key: string): string | null {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`<meta[^>]+${attribute}="${escaped}"[^>]+content="([^"]*)"`),
    new RegExp(`<meta[^>]+content="([^"]*)"[^>]+${attribute}="${escaped}"`)
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(html);
    if (match?.[1]) return match[1];
  }
  return null;
}

const sitemap = readFileSync(join("out", "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]!);
const problems: Problem[] = [];

if (urls.length === 0) {
  problems.push({ url: "out/sitemap.xml", message: "contains no URLs" });
}

for (const url of urls) {
  const file = outputFile(url);
  if (!existsSync(file)) {
    problems.push({ url, message: `missing ${file}` });
    continue;
  }
  const html = readFileSync(file, "utf8");
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (canonical !== url) {
    problems.push({ url, message: `canonical is ${canonical ?? "missing"}` });
  }
  const ogUrl = metaContent(html, "property", "og:url");
  if (ogUrl !== url) {
    problems.push({ url, message: `og:url is ${ogUrl ?? "missing"}` });
  }
  for (const [attribute, key] of [
    ["property", "og:title"],
    ["property", "og:description"],
    ["name", "twitter:title"],
    ["name", "twitter:description"]
  ] as const) {
    if (!metaContent(html, attribute, key)) {
      problems.push({ url, message: `${key} is missing` });
    }
  }
  if (metaContent(html, "name", "robots")?.includes("noindex")) {
    problems.push({ url, message: "is noindex but appears in the sitemap" });
  }
}

if (problems.length > 0) {
  for (const problem of problems) console.error(`FAIL ${problem.url}: ${problem.message}`);
  process.exit(1);
}

console.log(
  `Output audit passed: ${urls.length} sitemap pages have matching canonical, Open Graph and Twitter metadata.`
);
