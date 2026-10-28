import { auditedPages, similarityProblems } from "./lib/audit";
import { pageWordCount } from "../src/lib/content-utils";

const rows = auditedPages().map(({ page, minimum, label }) => ({
  path: page.path,
  label,
  words: pageWordCount(page),
  minimum,
  ok: pageWordCount(page) >= minimum
}));
for (const row of rows.sort((a, b) => b.words - a.words)) {
  console.log(
    `${row.ok ? "ok  " : "FAIL"} ${String(row.words).padStart(5)} / ${row.minimum}  ${row.label.padEnd(14)} ${row.path}`
  );
}
const failed = rows.filter((row) => !row.ok);
const similarity = similarityProblems();
if (failed.length) {
  console.error(`
${failed.length} page(s) below the word minimum.`);
  process.exitCode = 1;
}
if (similarity.length) {
  console.error(`
${similarity.length} similarity problem(s):`);
  for (const problem of similarity) console.error(` - ${problem}`);
  process.exitCode = 1;
}
if (!failed.length && !similarity.length) {
  console.log(
    `
All ${rows.length} checked pages meet their word minimum with no near-duplicate sentences.`
  );
}
