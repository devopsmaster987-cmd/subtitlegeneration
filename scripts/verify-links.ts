import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { canonicalRoutes } from "./lib/audit";

const routes = canonicalRoutes();
const allowedAssets = new Set([
  "/favicon.svg",
  "/ads.txt",
  "/llms.txt",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/indexnow-key.txt"
]);
const problems: string[] = [];
const inbound = new Set<string>();
const noindex = new Set<string>();
const robotsPattern = /<meta name="robots" content="[^"]*noindex/i;

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function normalize(href: string): string | null {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  if (href.startsWith("/_next/") || href.startsWith("/ffmpeg/")) return null;
  const path = (href.split("#")[0] ?? "").split("?")[0];
  if (!path) return null;
  if (/\.(?:png|jpe?g|svg|webp|ico|css|js|wasm|txt|xml)$/.test(path))
    return allowedAssets.has(path) ? null : path;
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

if (!existsSync("out")) {
  console.error("Link audit needs a built site. Run `npx next build --webpack` first.");
  process.exitCode = 1;
} else {
  for (const file of walk("out").filter((path) => path.endsWith(".html"))) {
    const html = readFileSync(file, "utf8");
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1];
      if (!href) continue;
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("https://") ||
        href.startsWith("http://")
      )
        continue;
      const path = normalize(href);
      if (!path) continue;
      if (routes.has(path)) inbound.add(path);
      if (!routes.has(path) && !allowedAssets.has(path))
        problems.push(`${file}: broken internal link ${href}`);
    }
    const route =
      `/${relative("out", file)
        .replace(/\\/g, "/")
        .replace(/\/index\.html$/, "")
        .replace(/\.html$/, "")}`.replace(/\/$/, "") || "/";
    if (routes.has(route) && robotsPattern.test(html)) noindex.add(route);
  }
  for (const route of routes) {
    if (route === "/" || noindex.has(route)) continue;
    if (!inbound.has(route)) problems.push(`orphan page: ${route}`);
  }
  const unique = [...new Set(problems)];
  if (unique.length) {
    console.error(`Link audit failed with ${unique.length} problem(s):`);
    for (const problem of unique) console.error(` - ${problem}`);
    process.exitCode = 1;
  } else {
    console.log(`Link audit passed: all internal links resolve across ${routes.size} routes.`);
  }
}
