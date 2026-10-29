#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const env = { ...process.env, NEXT_PUBLIC_FFMPEG_CDN: "1" };

function run(command, args, useShell = false) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    env,
    shell: useShell
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

for (const script of [
  "check:content",
  "verify:keywords",
  "verify:wordcount",
  "verify:aeo",
  "verify:tokens"
]) {
  run(npm, ["run", script], process.platform === "win32");
}

run(process.execPath, [require.resolve("next/dist/bin/next"), "build", "--webpack"]);
