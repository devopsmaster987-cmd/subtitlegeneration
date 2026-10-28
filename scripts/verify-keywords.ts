import { contentProblems, keywordProblems } from "./lib/audit";
import { excludedKeywords, keywords, parkedKeywords, topicKeywords } from "../src/data/keywords";
import { homeContent } from "../src/content/home";
import { guides } from "../src/content/guides";
import { toolPages } from "../src/content/tools";
import { languagePages } from "../src/content/languages";
import { allPageText, countKeyword } from "../src/lib/content-utils";

const pages = [
  homeContent,
  ...guides,
  ...toolPages,
  ...languagePages.map(({ content }) => content)
];

const problems = [
  ...contentProblems().filter((problem) => /primary|keyword|FAQ|secondary|slug/.test(problem)),
  ...keywordProblems()
];
for (const page of pages) {
  for (const keyword of excludedKeywords) {
    if (countKeyword(allPageText(page), keyword) > 0)
      problems.push(`${page.path}: excluded keyword appears on the page: "${keyword}"`);
  }
}
if (problems.length) {
  console.error(`Keyword audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(` - ${problem}`);
  process.exitCode = 1;
} else {
  console.log(
    `Keyword audit passed: ${keywords.length} entries, placement, ownership, ${excludedKeywords.length} exclusions, ${parkedKeywords.length} parked terms and ${topicKeywords.length} topics are clean.`
  );
}
