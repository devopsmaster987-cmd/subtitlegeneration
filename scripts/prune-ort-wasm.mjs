#!/usr/bin/env node
/**
 * The worker loads onnxruntime from the gzipped copy in public/ort. Remove the
 * unused raw wasm that webpack emits so static hosts do not upload 26 MiB.
 */
import { existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const directory = join("out", "_next", "static", "media");
if (!existsSync(directory)) process.exit(0);

let removed = 0;
for (const file of readdirSync(directory)) {
  if (/^ort-wasm-simd-threaded\.asyncify\..*\.wasm$/.test(file)) {
    rmSync(join(directory, file), { force: true });
    removed += 1;
  }
}

console.log(`[prune-ort-wasm] removed ${removed} unused wasm file(s)`);
