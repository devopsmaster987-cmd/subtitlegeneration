"use client";

import { useMemo, useRef, useState } from "react";
import {
  autoFixSubtitles,
  downloadText,
  formatSrtTimestamp,
  mergeSegments,
  parseTimestamp,
  parseSubtitles,
  readingSpeed,
  shiftSegments,
  splitSegment,
  stretchSegments,
  toSrt,
  toTxt,
  toVtt,
  validateSubtitles,
  type Segment
} from "@/lib/subtitles";

export type WorkbenchMode =
  | "srt-editor"
  | "subtitle-timing-editor"
  | "merge-split-srt"
  | "convert-srt-to-vtt"
  | "subtitle-reading-speed-checker"
  | "subtitle-validator";

const SAMPLE = `1
00:00:01,000 --> 00:00:03,200
The first draft had seven scenes.

2
00:00:03,800 --> 00:00:06,900
We cut three of them before lunch.

3
00:00:07,400 --> 00:00:10,100
The remaining four needed new music.`;

function TimestampField({
  label,
  value,
  onChange
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const [draft, setDraft] = useState(formatSrtTimestamp(value));
  function commit() {
    try {
      onChange(parseTimestamp(draft));
    } catch {
      setDraft(formatSrtTimestamp(value));
    }
  }
  return (
    <label className="block text-xs">
      <span className="mb-0.5 block font-medium text-[var(--muted)]">{label}</span>
      <input
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onBlur={commit}
        onKeyDown={(event) => {
          if (event.key === "Enter") commit();
        }}
        className="w-full rounded border border-[var(--line)] bg-[var(--page)] px-2 py-1 font-mono text-xs"
        spellCheck={false}
      />
    </label>
  );
}

function CueRow({
  segment,
  index,
  mode,
  onUpdate,
  onDelete,
  onMerge,
  onSplit
}: {
  segment: Segment;
  index: number;
  mode: WorkbenchMode;
  onUpdate: (patch: Partial<Segment>) => void;
  onDelete: () => void;
  onMerge: () => void;
  onSplit: (position: number) => void;
}) {
  const [cursor, setCursor] = useState(0);
  const cps = readingSpeed(segment);
  return (
    <tr>
      <td className="border border-[var(--line)] p-2 align-top text-xs text-[var(--muted)]">
        {index + 1}
      </td>
      <td className="border border-[var(--line)] p-2 align-top">
        <div className="grid gap-1">
          <TimestampField
            label="Start"
            value={segment.start}
            onChange={(start) => onUpdate({ start })}
          />
          <TimestampField label="End" value={segment.end} onChange={(end) => onUpdate({ end })} />
          <span className="text-xs text-[var(--muted)]">{cps.toFixed(1)} CPS</span>
        </div>
      </td>
      <td className="border border-[var(--line)] p-2 align-top">
        <textarea
          value={segment.text}
          onChange={(event) => {
            onUpdate({ text: event.target.value });
            setCursor(event.target.selectionStart);
          }}
          onSelect={(event) => setCursor(event.currentTarget.selectionStart)}
          className="min-h-16 w-full rounded border border-[var(--line)] bg-[var(--page)] px-2 py-1"
        />
        <div className="mt-1 flex flex-wrap gap-1">
          {mode === "merge-split-srt" || mode === "srt-editor" ? (
            <button
              type="button"
              onClick={() => onSplit(cursor)}
              className="rounded border border-[var(--line)] px-2 py-1 text-xs"
            >
              Split at cursor
            </button>
          ) : null}
          {mode === "merge-split-srt" || mode === "srt-editor" ? (
            <button
              type="button"
              onClick={onMerge}
              className="rounded border border-[var(--line)] px-2 py-1 text-xs"
            >
              Merge next
            </button>
          ) : null}
          <button
            type="button"
            onClick={onDelete}
            className="rounded border border-red-300 px-2 py-1 text-xs text-red-700 dark:border-red-900 dark:text-red-300"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export function SubtitleWorkbench({ mode }: { mode: WorkbenchMode }) {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sourceName, setSourceName] = useState("subtitles");
  const [paste, setPaste] = useState("");
  const [offset, setOffset] = useState("0.5");
  const [factor, setFactor] = useState("1.000");
  const [maxCps, setMaxCps] = useState("20");
  const [maxLine, setMaxLine] = useState("42");
  const originalRef = useRef<Segment[]>([]);

  const issues = useMemo(
    () =>
      validateSubtitles(segments, {
        maxCps: Number(maxCps) || 20,
        maxLineLength: Number(maxLine) || 42
      }),
    [segments, maxCps, maxLine]
  );

  function loadText(text: string, name: string) {
    try {
      const parsed = parseSubtitles(text);
      if (parsed.length === 0) {
        setError("No cues were found. Check that the file contains start --> end timestamps.");
        return;
      }
      const ordered = [...parsed].sort((a, b) => a.start - b.start);
      originalRef.current = ordered;
      setSegments(ordered);
      setSourceName(name.replace(/\.[^.]+$/, "") || "subtitles");
      setError(null);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
    }
  }

  async function onFile(file: File | undefined) {
    if (!file) return;
    const text = await file.text();
    loadText(text, file.name);
  }

  function update(index: number, patch: Partial<Segment>) {
    setSegments((current) =>
      current.map((segment, position) => (position === index ? { ...segment, ...patch } : segment))
    );
  }

  function remove(index: number) {
    setSegments((current) => current.filter((_, position) => position !== index));
  }

  function merge(index: number) {
    setSegments((current) => {
      const a = current[index];
      const b = current[index + 1];
      if (!a || !b) return current;
      const next = [...current];
      next.splice(index, 2, mergeSegments(a, b));
      return next;
    });
  }

  function split(index: number, position: number) {
    setSegments((current) => {
      const target = current[index];
      if (!target) return current;
      const result = splitSegment(target, position);
      if (!result) return current;
      const next = [...current];
      next.splice(index, 1, result.before, result.after);
      return next;
    });
  }

  function applyOffset() {
    const ms = Math.round((Number(offset) || 0) * 1000);
    setSegments((current) => shiftSegments(current, ms));
  }

  function applyStretch() {
    setSegments((current) => stretchSegments(current, Number(factor) || 1));
  }

  function applyAutoFix() {
    setSegments((current) => autoFixSubtitles(current));
  }

  function resetTiming() {
    setSegments(originalRef.current.map((segment) => ({ ...segment })));
  }

  function exportFile(kind: "srt" | "vtt" | "txt") {
    if (segments.length === 0) return;
    if (kind === "srt") downloadText(`${sourceName}.srt`, toSrt(segments), "application/x-subrip");
    else if (kind === "vtt") downloadText(`${sourceName}.vtt`, toVtt(segments), "text/vtt");
    else downloadText(`${sourceName}.txt`, toTxt(segments), "text/plain");
  }

  const titles: Record<WorkbenchMode, string> = {
    "srt-editor": "Edit an SRT or VTT file",
    "subtitle-timing-editor": "Adjust subtitle timing",
    "merge-split-srt": "Merge or split subtitle cues",
    "convert-srt-to-vtt": "Convert SRT to VTT",
    "subtitle-reading-speed-checker": "Check subtitle reading speed",
    "subtitle-validator": "Validate a subtitle file"
  };

  return (
    <section id="tool" aria-labelledby="workbench-heading" className="scroll-mt-20">
      <div className="tool-frame rounded-2xl p-4 sm:p-6">
        <h2 id="workbench-heading" className="text-2xl font-bold">
          {titles[mode]}
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Runs locally in this tab. Import an SRT or VTT file, or paste the text. Nothing is
          uploaded.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold" htmlFor="subtitle-file">
              Import a subtitle file
            </label>
            <input
              id="subtitle-file"
              type="file"
              accept=".srt,.vtt,.txt,text/plain,text/vtt,application/x-subrip"
              onChange={(event) => void onFile(event.target.files?.[0])}
              className="mt-1 block w-full rounded-md border border-[var(--line)] p-2 text-sm"
            />
            <button
              type="button"
              onClick={() => loadText(SAMPLE, "sample.srt")}
              className="mt-2 rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-semibold hover:bg-[var(--panel)]"
            >
              Load a sample SRT
            </button>
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="subtitle-paste">
              Or paste subtitle text
            </label>
            <textarea
              id="subtitle-paste"
              value={paste}
              onChange={(event) => setPaste(event.target.value)}
              className="mt-1 min-h-24 w-full rounded-md border border-[var(--line)] bg-[var(--page)] p-2 font-mono text-sm"
              placeholder={"1\n00:00:01,000 --> 00:00:03,000\nHello"}
            />
            <button
              type="button"
              onClick={() => loadText(paste, "pasted")}
              className="mt-2 rounded-md bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Use pasted text
            </button>
          </div>
        </div>

        {error ? (
          <p
            role="alert"
            className="mt-3 rounded-md bg-red-50 p-3 text-sm text-red-900 dark:bg-red-950 dark:text-red-100"
          >
            {error}
          </p>
        ) : null}

        {segments.length > 0 ? (
          <div className="output-frame mt-6 space-y-4 rounded-3xl p-3 sm:p-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => exportFile("srt")}
                className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Download SRT
              </button>
              <button
                type="button"
                onClick={() => exportFile("vtt")}
                className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold hover:bg-[var(--panel)]"
              >
                Download VTT
              </button>
              <button
                type="button"
                onClick={() => exportFile("txt")}
                className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold hover:bg-[var(--panel)]"
              >
                Download TXT
              </button>
            </div>

            {mode === "subtitle-timing-editor" ? (
              <div className="flex flex-wrap items-end gap-3 rounded-lg border border-[var(--line)] p-3">
                <label className="text-sm">
                  <span className="mb-1 block font-semibold">Offset (seconds)</span>
                  <input
                    value={offset}
                    onChange={(event) => setOffset(event.target.value)}
                    inputMode="decimal"
                    className="w-28 rounded border border-[var(--line)] bg-[var(--page)] px-2 py-1"
                  />
                </label>
                <button
                  type="button"
                  onClick={applyOffset}
                  className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-semibold"
                >
                  Apply offset
                </button>
                <label className="text-sm">
                  <span className="mb-1 block font-semibold">Stretch factor</span>
                  <input
                    value={factor}
                    onChange={(event) => setFactor(event.target.value)}
                    inputMode="decimal"
                    className="w-28 rounded border border-[var(--line)] bg-[var(--page)] px-2 py-1"
                  />
                </label>
                <button
                  type="button"
                  onClick={applyStretch}
                  className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-semibold"
                >
                  Apply stretch
                </button>
                <button
                  type="button"
                  onClick={resetTiming}
                  className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-semibold"
                >
                  Reset timing
                </button>
              </div>
            ) : null}

            {mode === "subtitle-reading-speed-checker" || mode === "subtitle-validator" ? (
              <div className="flex flex-wrap items-end gap-3 rounded-lg border border-[var(--line)] p-3">
                <label className="text-sm">
                  <span className="mb-1 block font-semibold">Maximum CPS</span>
                  <input
                    value={maxCps}
                    onChange={(event) => setMaxCps(event.target.value)}
                    inputMode="numeric"
                    className="w-24 rounded border border-[var(--line)] bg-[var(--page)] px-2 py-1"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block font-semibold">Maximum line length</span>
                  <input
                    value={maxLine}
                    onChange={(event) => setMaxLine(event.target.value)}
                    inputMode="numeric"
                    className="w-24 rounded border border-[var(--line)] bg-[var(--page)] px-2 py-1"
                  />
                </label>
                {mode === "subtitle-validator" ? (
                  <button
                    type="button"
                    onClick={applyAutoFix}
                    className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white"
                  >
                    Apply safe fixes
                  </button>
                ) : null}
              </div>
            ) : null}

            {mode === "subtitle-reading-speed-checker" || mode === "subtitle-validator" ? (
              <div className="rounded-lg border border-[var(--line)] p-3">
                <h3 className="font-bold">
                  {issues.length === 0
                    ? "No issues found at these limits"
                    : `${issues.length} issue${issues.length === 1 ? "" : "s"} found`}
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  {issues.slice(0, 100).map((issue, index) => (
                    <li key={`${issue.code}-${issue.cueIndex ?? index}`}>
                      <span
                        className={
                          issue.severity === "error"
                            ? "font-semibold text-red-700 dark:text-red-300"
                            : "text-amber-700 dark:text-amber-300"
                        }
                      >
                        {issue.severity === "error" ? "Error" : "Warning"}:
                      </span>{" "}
                      {issue.message}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {mode === "convert-srt-to-vtt" ? (
              <div className="rounded-lg border border-[var(--line)] p-3">
                <h3 className="font-bold">Conversion preview</h3>
                <pre className="mt-2 max-h-64 overflow-auto rounded bg-slate-950 p-3 text-xs text-slate-100">
                  <code>{toVtt(segments)}</code>
                </pre>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Cue settings and comments from a VTT source are not represented in SRT. Timings
                  and text convert without rounding.
                </p>
              </div>
            ) : null}

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <caption className="sr-only">Editable subtitle cues</caption>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border border-[var(--line)] bg-[var(--panel)] p-2 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="border border-[var(--line)] bg-[var(--panel)] p-2 text-left"
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      className="border border-[var(--line)] bg-[var(--panel)] p-2 text-left"
                    >
                      Text
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {segments.map((segment, index) => (
                    <CueRow
                      key={segment.id}
                      segment={segment}
                      index={index}
                      mode={mode}
                      onUpdate={(patch) => update(index, patch)}
                      onDelete={() => remove(index)}
                      onMerge={() => merge(index)}
                      onSplit={(position) => split(index, position)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted)]">
              {segments.length} cues loaded. Nothing is saved to this site; download the file before
              closing the tab.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
