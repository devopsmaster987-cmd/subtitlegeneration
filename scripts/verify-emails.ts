import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { site } from "../src/config/site";

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = ["src", "app", "public/llms.txt", "public/ads.txt"]
  .flatMap((path) => (statSync(path).isDirectory() ? walk(path) : [path]))
  .filter((path) => /\.(ts|tsx|txt)$/.test(path));
const emails = new Set<string>();
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g))
    emails.add(match[0]);
}
const unexpected = [...emails].filter((email) => email !== site.contactEmail);
if (unexpected.length) {
  console.error(`Email audit failed. Unexpected addresses: ${unexpected.join(", ")}`);
  console.error(`Allowed address: ${site.contactEmail}`);
  process.exitCode = 1;
} else {
  console.log(`Email audit passed: only ${site.contactEmail} appears in source content.`);
}
