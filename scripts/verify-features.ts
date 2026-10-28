import { readFileSync } from "node:fs";

const checks: [string, string, RegExp][] = [
  ["src/components/Tool.tsx", "language picker", /LanguageCombobox/],
  ["src/components/Tool.tsx", "privacy message", /No upload|does not upload/],
  ["src/components/Tool.tsx", "progress panel", /ProgressPanel/],
  ["src/components/Tool.tsx", "error state", /role="alert"/],
  ["src/components/Tool.tsx", "editor", /SegmentEditor/],
  ["src/components/ExportBar.tsx", "SRT export", /SRT/],
  ["src/components/ExportBar.tsx", "VTT export", /VTT/],
  ["src/components/ExportBar.tsx", "TXT export", /TXT/],
  ["src/components/SubtitleWorkbench.tsx", "workbench modes", /subtitle-validator/],
  ["src/components/AdSlot.tsx", "ads disabled guard", /if \(!site\.ads\.enabled\) return null/],
  ["app/studio/page.tsx", "studio route", /Studio/]
];

const problems: string[] = [];
for (const [file, label, pattern] of checks) {
  const text = readFileSync(file, "utf8");
  if (!pattern.test(text)) problems.push(`${file}: missing ${label}`);
}
if (problems.length) {
  console.error(`Feature audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(` - ${problem}`);
  process.exitCode = 1;
} else {
  console.log(
    "Feature audit passed: picker, privacy, progress, errors, editor and exports are present."
  );
}
