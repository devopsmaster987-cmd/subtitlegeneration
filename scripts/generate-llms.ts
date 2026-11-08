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
  "VoiceToTextFree runs Whisper and ffmpeg in the browser. No media is uploaded. Accuracy varies by language: every language page states whether a reviewed sample has been recorded, and no tested accuracy is claimed without one.",
  "",
  "## Tools"
];
for (const page of toolPages)
  lines.push(`- [${page.h1}](${site.url}${page.path}): ${page.capsule}`);
lines.push("", "## Guides");
for (const page of guides) lines.push(`- [${page.h1}](${site.url}${page.path}): ${page.capsule}`);
lines.push("", "## Languages");
const searchableLanguages = languagePages.filter(({ content }) => !content.noindex);
for (const { language, content } of searchableLanguages) {
  lines.push(
    `- [${content.h1}](${site.url}${content.path}): ${language.name} — editorial page with an honest accuracy note`
  );
}
const hiddenLanguages = languagePages.length - searchableLanguages.length;
if (hiddenLanguages > 0)
  lines.push(
    `- ${hiddenLanguages} further tool-only language routes exist but stay out of the search index until a reviewed sample is recorded.`
  );
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
  `Generated public/llms.txt with ${toolPages.length} tools, ${guides.length} guides and ${searchableLanguages.length} searchable language pages.`
);
