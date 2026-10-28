#!/usr/bin/env node
/**
 * Copies the single-thread UMD ffmpeg.wasm core into public/ffmpeg so the tool
 * works without a CDN and without Cross-Origin Isolation (which breaks AdSense).
 */
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "node_modules", "@ffmpeg", "core", "dist", "umd");
const target = join(root, "public", "ffmpeg");

if (!existsSync(source)) {
  console.warn("[copy-ffmpeg] @ffmpeg/core is not installed; skipping. Run npm install first.");
  process.exit(0);
}

mkdirSync(target, { recursive: true });
for (const file of ["ffmpeg-core.js", "ffmpeg-core.wasm"]) {
  const from = join(source, file);
  if (!existsSync(from)) {
    console.warn(`[copy-ffmpeg] missing ${from}`);
    continue;
  }
  cpSync(from, join(target, file));
}
console.log("[copy-ffmpeg] copied ffmpeg core to public/ffmpeg");
