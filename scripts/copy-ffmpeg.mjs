#!/usr/bin/env node
/**
 * Copies the single-thread UMD ffmpeg.wasm core into public/ffmpeg and gzips
 * the wasm so every host, including Cloudflare Workers (25 MiB per-file limit),
 * can serve it locally. The worker decompresses it at runtime.
 */
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
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

const jsFrom = join(source, "ffmpeg-core.js");
if (existsSync(jsFrom)) {
  cpSync(jsFrom, join(target, "ffmpeg-core.js"));
} else {
  console.warn(`[copy-ffmpeg] missing ${jsFrom}`);
}

const wasmFrom = join(source, "ffmpeg-core.wasm");
if (existsSync(wasmFrom)) {
  writeFileSync(
    join(target, "ffmpeg-core.wasm.gz"),
    gzipSync(readFileSync(wasmFrom), { level: 9 })
  );
} else {
  console.warn(`[copy-ffmpeg] missing ${wasmFrom}`);
}

const raw = join(target, "ffmpeg-core.wasm");
if (existsSync(raw)) rmSync(raw, { force: true });

console.log("[copy-ffmpeg] wrote ffmpeg core to public/ffmpeg");
