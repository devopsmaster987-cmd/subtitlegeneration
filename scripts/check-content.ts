import { contentProblems, keywordProblems } from "./lib/audit";

const problems = [...contentProblems(), ...keywordProblems()];
if (problems.length) {
  console.error(`Content audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(` - ${problem}`);
  process.exitCode = 1;
} else {
  console.log("Content audit passed.");
}
