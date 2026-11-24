import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

type Problem = { url: string; message: string };

const ORIGIN = "https://voicetotextfree.top";

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

function locs(xml: string): string[] {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]!);
}

function validatePageUrl(url: string, source: string, problems: Problem[]) {
  if (!url.startsWith(`${ORIGIN}/`)) {
    problems.push({ url, message: `in ${source} is not on the canonical https origin` });
    return;
  }
  if (!url.endsWith("/")) {
    problems.push({ url, message: `in ${source} is missing a trailing slash` });
    return;
  }
  const file = outputFile(url);
  if (!existsSync(file)) {
    problems.push({ url, message: `missing ${file}` });
    return;
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

function validateUrlset(xml: string, source: string, problems: Problem[]) {
  const urls = locs(xml);
  if (urls.length === 0) problems.push({ url: source, message: "contains no URLs" });
  for (const url of urls) validatePageUrl(url, source, problems);
}

const problems: Problem[] = [];

if (existsSync(join("out", "sitemap-index.xml"))) {
  const index = readFileSync(join("out", "sitemap-index.xml"), "utf8");
  const children = locs(index);
  if (children.length === 0) {
    problems.push({ url: "out/sitemap-index.xml", message: "contains no child sitemaps" });
  }
  for (const child of children) {
    if (!child.startsWith(`${ORIGIN}/`)) {
      problems.push({ url: child, message: "child sitemap is not on the canonical origin" });
      continue;
    }
    const file = join("out", new URL(child).pathname.replace(/^\/+/, ""));
    if (!existsSync(file)) {
      problems.push({ url: child, message: `missing ${file}` });
      continue;
    }
    validateUrlset(readFileSync(file, "utf8"), child, problems);
  }
} else {
  problems.push({ url: "out/sitemap-index.xml", message: "missing sitemap index" });
}

if (existsSync(join("out", "sitemap.xml"))) {
  validateUrlset(readFileSync(join("out", "sitemap.xml"), "utf8"), "out/sitemap.xml", problems);
}

if (problems.length > 0) {
  for (const problem of problems) console.error(`FAIL ${problem.url}: ${problem.message}`);
  process.exit(1);
}

console.log(
  "Output audit passed: sitemap index, child sitemaps and legacy sitemap have matching canonical, Open Graph and Twitter metadata."
);
