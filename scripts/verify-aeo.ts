import { aeoProblems } from "./lib/audit";

const problems = aeoProblems();
if (problems.length) {
  console.error(`AEO audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(` - ${problem}`);
  process.exitCode = 1;
} else {
  console.log("AEO audit passed: capsules, FAQs, sources, examples and lengths are clean.");
}
