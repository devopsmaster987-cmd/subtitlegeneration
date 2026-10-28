import { writeFileSync } from "node:fs";
import { site } from "../src/config/site";
import { guides } from "../src/content/guides";
import { toolPages } from "../src/content/tools";
import { languagePages } from "../src/content/languages";

const lines = [
  `# ${site.name}`,
  "",
  `> ${site.description}`,
  "",
  "VoiceToTextFree runs Whisper and ffmpeg in the browser. No media is uploaded. Accuracy varies by language, and language pages remain noindex until a reviewed sample is recorded.",
  "",
  "## Tools"
];
for (const page of toolPages)
  lines.push(`- [${page.h1}](${site.url}${page.path}): ${page.capsule}`);
lines.push("", "## Guides");
for (const page of guides) lines.push(`- [${page.h1}](${site.url}${page.path}): ${page.capsule}`);
lines.push("", "## Languages");
for (const { language, content } of languagePages) {
  lines.push(
    `- [${content.h1}](${site.url}${content.path}): ${language.name} — ${content.noindex ? "noindex until tested" : "accuracy note recorded"}`
  );
}
lines.push(
  "",
  "## Policies",
  `- [About](${site.url}/about)`,
  `- [Contact](${site.url}/contact)`,
  `- [Privacy](${site.url}/privacy-policy)`,
  `- [Terms](${site.url}/terms)`,
  ""
);
writeFileSync("public/llms.txt", lines.join("\n"), "utf8");
console.log(
  `Generated public/llms.txt with ${toolPages.length} tools, ${guides.length} guides and ${languagePages.length} language pages.`
);
