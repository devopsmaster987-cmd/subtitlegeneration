import { existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Defensive guard: Cloudflare Workers static assets auto-parse a `_redirects`
 * file in the deployed asset directory. This site redirects in worker.ts, so a
 * `_redirects` file must never ship. If one appears (for example from a cached
 * build directory or a copied Netlify file), remove it before `wrangler deploy`.
 */
const OUT = "out";

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const stale = walk(OUT).filter((file) => file.split(/[\\/]/).pop() === "_redirects");

if (!existsSync(OUT)) {
  console.error("[check-output] out/ is missing; run the build before deploying.");
  process.exit(1);
}

for (const file of stale) {
  rmSync(file, { force: true });
  console.warn(
    `[check-output] removed ${file}: Cloudflare rejects Netlify-style _redirects during deploy.`
  );
}

console.log(
  `[check-output] deploy assets clean${stale.length ? ` (${stale.length} removed)` : ""}.`
);
