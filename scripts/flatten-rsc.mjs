#!/usr/bin/env node
/**
 * Next.js 16 on Windows writes RSC segment payloads as nested directories
 * (`__next.page/__PAGE__.txt`) while the client requests the flat name
 * (`__next.page.__PAGE__.txt`). Flatten them after export so static hosting
 * does not return 404s for prefetch requests. Remove once the upstream fix is
 * available in the stable release used here.
 */
import { existsSync, readdirSync, renameSync, rmSync, statSync } from "node:fs";
import { basename, dirname, join, relative, sep } from "node:path";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const segmentDirs = new Set();
let moved = 0;
for (const file of walk("out")) {
  if (!file.endsWith(".txt")) continue;
  const parts = relative("out", file).split(sep);
  const index = parts.findIndex((part) => part.startsWith("__next."));
  if (index === -1 || index === parts.length - 1) continue;
  const segmentDir = join("out", ...parts.slice(0, index + 1));
  if (!statSync(segmentDir).isDirectory()) continue;
  const pageDir = dirname(segmentDir);
  const inner = parts.slice(index + 1).join(".");
  const flat = join(pageDir, `${basename(segmentDir)}.${inner}`);
  renameSync(file, flat);
  segmentDirs.add(segmentDir);
  moved += 1;
}

for (const directory of segmentDirs) {
  if (existsSync(directory)) rmSync(directory, { recursive: true, force: true });
}

console.log(`[flatten-rsc] flattened ${moved} RSC payload files`);
