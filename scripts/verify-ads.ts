import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { site } from "../src/config/site";

const problems: string[] = [];
const templates = [
  ["app/page.tsx", 3],
  ["src/components/ToolPageView.tsx", 3],
  ["src/components/GuideView.tsx", 3],
  ["src/components/LanguageView.tsx", 3]
] as const;
for (const [file, max] of templates) {
  const text = readFileSync(file, "utf8");
  const count = (text.match(/<AdSlot\b/g) ?? []).length;
  if (count > max) problems.push(`${file}: ${count} AdSlot uses, maximum ${max}`);
}
if (/AdSlot/.test(readFileSync("src/components/Tool.tsx", "utf8")))
  problems.push("src/components/Tool.tsx: ad slot inside the tool widget");
if (/AdSlot/.test(readFileSync("app/studio/page.tsx", "utf8")))
  problems.push("app/studio/page.tsx: ad slot on the studio page");
if (site.ads.enabled) {
  if (!site.ads.clientId) problems.push("ads enabled without a client ID");
  for (const [name, id] of Object.entries(site.ads.slots))
    if (!id) problems.push(`ads enabled without ${name} slot ID`);
}

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

if (existsSync("out")) {
  const html = walk("out").filter((path) => path.endsWith(".html"));
  for (const file of html) {
    const text = readFileSync(file, "utf8");
    const count = (text.match(/aria-label="Advertisement"/g) ?? []).length;
    if (count > 3) problems.push(`${file}: ${count} ad slots`);
    if (file.includes("studio") && count > 0) problems.push(`${file}: ad slot on studio`);
    if (file.includes("subtitle-generator") && count > 0)
      problems.push(`${file}: ad slot on a noindex language page`);
    if (!site.ads.enabled && /adsbygoogle|pagead2\.googlesyndication/.test(text))
      problems.push(`${file}: ad script present while ads are disabled`);
  }
}
if (problems.length) {
  console.error(`Ad audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(` - ${problem}`);
  process.exitCode = 1;
} else {
  console.log(
    `Ad audit passed: ads are ${site.ads.enabled ? "enabled" : "disabled"}, slots are capped and noindex pages stay clean.`
  );
}
