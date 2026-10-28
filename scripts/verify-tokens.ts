import { readFileSync, existsSync } from "node:fs";
import { site } from "../src/config/site";

const problems: string[] = [];
const notes: string[] = [];

if (!site.url || !/^https:\/\//.test(site.url))
  problems.push("site.url must be an absolute HTTPS URL");
if (site.url.includes(".example"))
  notes.push(
    "site.url is still the local .example fallback; set NEXT_PUBLIC_SITE_URL before launch"
  );
if (!site.contactEmail || !site.contactEmail.includes("@"))
  problems.push("contact email is empty or invalid");
if (site.ads.enabled) {
  if (!site.ads.clientId) problems.push("ADS_ENABLED is true but ADSENSE_CLIENT_ID is empty");
  for (const [placement, id] of Object.entries(site.ads.slots)) {
    if (!id) problems.push(`ADS_ENABLED is true but the ${placement} slot ID is empty`);
  }
}
if (site.ads.enabled && existsSync("public/ads.txt")) {
  const ads = readFileSync("public/ads.txt", "utf8");
  const publisher = site.ads.clientId.replace(/^ca-/, "");
  if (publisher && !ads.includes(publisher))
    problems.push("public/ads.txt does not contain the configured publisher ID");
}
for (const [name, value] of Object.entries(site.verification)) {
  if (value && !value.trim()) problems.push(`${name} verification tag is present but empty`);
}
for (const file of ["public/llms.txt", "public/ads.txt", "src/config/site.ts"]) {
  if (!existsSync(file)) {
    problems.push(`required file missing: ${file}`);
    continue;
  }
  const text = readFileSync(file, "utf8").toLocaleLowerCase();
  for (const marker of ["lorem ipsum", "todo", "fixme", "tbd"]) {
    if (text.includes(marker)) problems.push(`${file} contains placeholder text "${marker}"`);
  }
}
if (existsSync("src/components/AdUnit.tsx")) {
  const adUnit = readFileSync("src/components/AdUnit.tsx", "utf8");
  if (adUnit.includes('data-ad-slot=""'))
    problems.push("AdUnit still has an empty data-ad-slot attribute");
}
for (const note of notes) console.warn(`note: ${note}`);
if (problems.length) {
  console.error(`Token audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(` - ${problem}`);
  process.exitCode = 1;
} else {
  console.log("Token audit passed: required config is non-empty and no placeholders ship.");
}
