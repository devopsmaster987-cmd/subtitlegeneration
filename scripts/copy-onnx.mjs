#!/usr/bin/env node
/**
 * Copies the onnxruntime wasm loader into public/ort and gzips the wasm so it
 * fits Cloudflare Workers' 25 MiB per-file limit. The worker decompresses it.
 */
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, "public", "ort");

let wasmFrom;
let mjsFrom;
try {
  wasmFrom = require.resolve("onnxruntime-web/ort-wasm-simd-threaded.asyncify.wasm");
  mjsFrom = require.resolve("onnxruntime-web/ort-wasm-simd-threaded.asyncify.mjs");
} catch {
  console.warn("[copy-onnx] onnxruntime-web is not installed; skipping. Run npm install first.");
  process.exit(0);
}

mkdirSync(target, { recursive: true });

cpSync(mjsFrom, join(target, "ort-wasm-simd-threaded.asyncify.mjs"));
writeFileSync(
  join(target, "ort-wasm-simd-threaded.asyncify.wasm.gz"),
  gzipSync(readFileSync(wasmFrom), { level: 9 })
);

const raw = join(target, "ort-wasm-simd-threaded.asyncify.wasm");
if (existsSync(raw)) rmSync(raw, { force: true });

console.log("[copy-onnx] wrote onnxruntime wasm to public/ort");
