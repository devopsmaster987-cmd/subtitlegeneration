import { readFileSync } from "node:fs";

const log = readFileSync("docs/verification-log.md", "utf8");
const required = [
  "Language list",
  "Model download sizes",
  "SRT and WebVTT formatting",
  "Browser media pipeline",
  "Platform guidance",
  "Accuracy testing"
];
const problems = required
  .filter((entry) => !log.includes(entry))
  .map((entry) => `missing log section: ${entry}`);
for (const marker of ["TBD", "TODO", "FIXME"]) {
  if (log.includes(marker)) problems.push(`log contains unfinished marker: ${marker}`);
}
if (!log.includes("https://huggingface.co/"))
  problems.push("language/model log entries need source URLs");
if (!log.includes("Date: 2026-10-28")) problems.push("log entries need a date");
if (problems.length) {
  console.error(`Verification-log audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(` - ${problem}`);
  process.exitCode = 1;
} else {
  console.log("Verification-log audit passed: required claim categories and dates are present.");
}
