import { existsSync, rmSync } from "node:fs";

/**
 * Start every build from an empty export directory.
 *
 * Next.js `output: "export"` writes into `out/` but does not remove files that
 * were present from a previous (possibly cached) build. A stale
 * `out/_redirects` is fatal on Cloudflare: the Workers static-assets layer
 * parses `_redirects` and rejects Netlify-style absolute-URL rules, failing the
 * whole version upload after assets have already been staged.
 */
if (existsSync("out")) {
  rmSync("out", { recursive: true, force: true });
  console.log("[clean-output] removed stale out/ directory");
}
