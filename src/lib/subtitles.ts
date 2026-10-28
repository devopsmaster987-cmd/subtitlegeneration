export interface Segment {
  id: string;
  start: number;
  end: number;
  text: string;
}

export interface SubtitleIssue {
  code:
    | "overlap"
    | "negative-time"
    | "end-before-start"
    | "bad-timestamp"
    | "missing-number"
    | "long-line"
    | "too-many-lines"
    | "reading-speed"
    | "empty-text"
    | "duplicate-index";
  severity: "error" | "warning";
  message: string;
  segmentId?: string;
  cueIndex?: number;
}

export interface ValidationOptions {
  maxLineLength?: number;
  maxLines?: number;
  maxCps?: number;
  minDurationMs?: number;
}

const DEFAULT_OPTIONS: Required<ValidationOptions> = {
  maxLineLength: 42,
  maxLines: 2,
  maxCps: 20,
  minDurationMs: 700
};

function pad(value: number, size = 2): string {
  return String(Math.trunc(value)).padStart(size, "0");
}

function splitTime(ms: number): { h: number; m: number; s: number; ms: number } {
  const safe = Math.max(0, Math.round(ms));
  return {
    h: Math.floor(safe / 3_600_000),
    m: Math.floor((safe % 3_600_000) / 60_000),
    s: Math.floor((safe % 60_000) / 1000),
    ms: safe % 1000
  };
}

/** Format milliseconds as an SRT timestamp (HH:MM:SS,mmm). */
export function formatSrtTimestamp(ms: number): string {
  const t = splitTime(ms);
  return `${pad(t.h)}:${pad(t.m)}:${pad(t.s)},${pad(t.ms, 3)}`;
}

/** Format milliseconds as a WebVTT timestamp (HH:MM:SS.mmm). */
export function formatVttTimestamp(ms: number): string {
  const t = splitTime(ms);
  return `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}.${pad(t.ms, 3)}`;
}

/**
 * Parse an SRT or VTT timestamp into milliseconds. Accepts both comma and dot
 * separators, optional hours, and any text after the timestamp (VTT settings).
 */
export function parseTimestamp(value: string): number {
  const match = value.trim().match(/^(?:(\d{1,3}):)?(\d{1,2}):(\d{1,2})[,.](\d{1,3})(?:\s+.*)?$/);
  if (!match) throw new Error(`Invalid timestamp: ${value}`);
  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2]);
  const seconds = Number(match[3]);
  const fraction = match[4] ?? "0";
  const ms = Number(fraction.padEnd(3, "0").slice(0, 3));
  if (minutes > 59 || seconds > 59) throw new Error(`Invalid timestamp: ${value}`);
  return hours * 3_600_000 + minutes * 60_000 + seconds * 1000 + ms;
}

export function normalizeText(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

let fallbackId = 0;
function makeId(prefix = "seg"): string {
  fallbackId += 1;
  return `${prefix}-${Date.now().toString(36)}-${fallbackId.toString(36)}`;
}

export function createSegment(start = 0, end = 2000, text = ""): Segment {
  return { id: makeId(), start, end, text };
}

export function toSrt(segments: readonly Segment[]): string {
  return segments
    .map((segment, index) => {
      const text = normalizeText(segment.text) || " ";
      return `${index + 1}\n${formatSrtTimestamp(segment.start)} --> ${formatSrtTimestamp(
        segment.end
      )}\n${text}`;
    })
    .join("\n\n")
    .concat(segments.length > 0 ? "\n" : "");
}

export function toVtt(segments: readonly Segment[], includeIds = false): string {
  const cues = segments.map((segment, index) => {
    const id = includeIds ? `${index + 1}\n` : "";
    const text = normalizeText(segment.text) || " ";
    return `${id}${formatVttTimestamp(segment.start)} --> ${formatVttTimestamp(segment.end)}\n${text}`;
  });
  return `WEBVTT\n\n${cues.join("\n\n")}${segments.length > 0 ? "\n" : ""}`;
}

export function toTxt(segments: readonly Segment[]): string {
  return segments
    .map((segment) => normalizeText(segment.text))
    .filter(Boolean)
    .join("\n");
}

export function toPlainTimedText(segments: readonly Segment[]): string {
  return segments
    .map((segment) => `[${formatSrtTimestamp(segment.start)}] ${normalizeText(segment.text)}`)
    .join("\n");
}

/**
 * Parse SRT or WebVTT text. The parser is deliberately forgiving: it accepts
 * missing cue numbers, BOM, CRLF, VTT NOTE/STYLE blocks and VTT cue settings.
 */
export function parseSubtitles(input: string): Segment[] {
  const text = input.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const blocks = text.split(/\n{2,}/);
  const segments: Segment[] = [];

  for (const rawBlock of blocks) {
    const block = rawBlock.trim();
    if (!block) continue;
    if (/^WEBVTT/.test(block)) continue;
    if (/^(NOTE|STYLE|REGION)\b/.test(block)) continue;
    const lines = block.split("\n");
    let timingIndex = lines.findIndex((line) => line.includes("-->"));
    if (timingIndex === -1) continue;
    let cueNumber: string | undefined;
    if (timingIndex > 0) {
      const first = lines[0]?.trim() ?? "";
      if (/^\d+$/.test(first)) {
        cueNumber = first;
        timingIndex = 1;
      }
    }
    const timingLine = lines[timingIndex]?.trim();
    if (!timingLine) continue;
    const [startRaw, endRaw] = timingLine.split("-->");
    if (!startRaw || !endRaw) continue;
    let start: number;
    let end: number;
    try {
      start = parseTimestamp(startRaw);
      end = parseTimestamp(endRaw);
    } catch {
      continue;
    }
    const textLines = lines.slice(timingIndex + 1);
    const content = normalizeText(textLines.join("\n"));
    const id = cueNumber ? `cue-${cueNumber}-${segments.length}` : makeId("cue");
    segments.push({ id, start, end, text: content });
  }

  return segments;
}

export const parseSrt = parseSubtitles;
export const parseVtt = parseSubtitles;

export function srtToVtt(srt: string): string {
  return toVtt(parseSubtitles(srt));
}

export function vttToSrt(vtt: string): string {
  return toSrt(parseSubtitles(vtt));
}

export function sortSegments(segments: readonly Segment[]): Segment[] {
  return [...segments].sort((a, b) => a.start - b.start || a.end - b.end);
}

export function shiftSegments(segments: readonly Segment[], offsetMs: number): Segment[] {
  return segments.map((segment) => ({
    ...segment,
    start: Math.max(0, segment.start + offsetMs),
    end: Math.max(0, segment.end + offsetMs)
  }));
}

/** Multiply timings by a factor to fix drift (for example after a frame-rate change). */
export function stretchSegments(segments: readonly Segment[], factor: number): Segment[] {
  const safe = Number.isFinite(factor) && factor > 0 ? factor : 1;
  return segments.map((segment) => ({
    ...segment,
    start: Math.round(segment.start * safe),
    end: Math.round(segment.end * safe)
  }));
}

export function mergeSegments(a: Segment, b: Segment): Segment {
  const first = a.start <= b.start ? a : b;
  const second = a.start <= b.start ? b : a;
  const text = [normalizeText(first.text), normalizeText(second.text)].filter(Boolean).join(" ");
  return {
    id: first.id,
    start: Math.min(a.start, b.start),
    end: Math.max(a.end, b.end),
    text
  };
}

/**
 * Split a cue at a character position. Timing is distributed by character count,
 * which is predictable and easy to correct. Returns one or two cues.
 */
export function splitSegment(
  segment: Segment,
  position: number
): { before: Segment; after: Segment } | null {
  const text = normalizeText(segment.text);
  if (text.length < 2) return null;
  const index = Math.max(1, Math.min(text.length - 1, Math.round(position)));
  const beforeText = text.slice(0, index).trim();
  const afterText = text.slice(index).trim();
  if (!beforeText || !afterText) return null;
  const ratio = beforeText.length / (beforeText.length + afterText.length);
  const splitAt = Math.round(segment.start + (segment.end - segment.start) * ratio);
  return {
    before: { id: segment.id, start: segment.start, end: splitAt, text: beforeText },
    after: {
      id: makeId(),
      start: splitAt,
      end: segment.end,
      text: afterText
    }
  };
}

export function splitSegmentByWords(
  segment: Segment,
  words: number
): ReturnType<typeof splitSegment> {
  const pieces = normalizeText(segment.text).split(/\s+/);
  const count = Math.max(1, Math.min(pieces.length - 1, Math.floor(words)));
  return splitSegment(segment, pieces.slice(0, count).join(" ").length);
}

export function reindexSegments(segments: readonly Segment[]): Segment[] {
  return segments.map((segment, index) => ({ ...segment, id: `seg-${index + 1}` }));
}

export function countCharacters(text: string): number {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim().length;
}

export function readingSpeed(segment: Segment): number {
  const duration = Math.max(1, segment.end - segment.start) / 1000;
  return countCharacters(segment.text) / duration;
}

export function validateSubtitles(
  segments: readonly Segment[],
  options: ValidationOptions = {}
): SubtitleIssue[] {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const issues: SubtitleIssue[] = [];
  segments.forEach((segment, index) => {
    if (segment.end < segment.start) {
      issues.push({
        code: "end-before-start",
        severity: "error",
        message: `Cue ${index + 1} ends before it starts.`,
        segmentId: segment.id,
        cueIndex: index + 1
      });
    }
    if (segment.start < 0 || segment.end < 0) {
      issues.push({
        code: "negative-time",
        severity: "error",
        message: `Cue ${index + 1} has a negative timestamp.`,
        segmentId: segment.id,
        cueIndex: index + 1
      });
    }
    if (index > 0 && segment.start < (segments[index - 1]?.end ?? 0)) {
      issues.push({
        code: "overlap",
        severity: "warning",
        message: `Cue ${index + 1} overlaps the previous cue.`,
        segmentId: segment.id,
        cueIndex: index + 1
      });
    }
    if (!segment.text.trim()) {
      issues.push({
        code: "empty-text",
        severity: "warning",
        message: `Cue ${index + 1} has no text.`,
        segmentId: segment.id,
        cueIndex: index + 1
      });
    }
    const lines = normalizeText(segment.text).split("\n");
    if (lines.length > opts.maxLines) {
      issues.push({
        code: "too-many-lines",
        severity: "warning",
        message: `Cue ${index + 1} has ${lines.length} lines (recommended maximum ${opts.maxLines}).`,
        segmentId: segment.id,
        cueIndex: index + 1
      });
    }
    lines.forEach((line) => {
      if (countCharacters(line) > opts.maxLineLength) {
        issues.push({
          code: "long-line",
          severity: "warning",
          message: `Cue ${index + 1} line is ${countCharacters(line)} characters (limit ${opts.maxLineLength}).`,
          segmentId: segment.id,
          cueIndex: index + 1
        });
      }
    });
    const cps = readingSpeed(segment);
    if (cps > opts.maxCps) {
      issues.push({
        code: "reading-speed",
        severity: "warning",
        message: `Cue ${index + 1} reads at ${cps.toFixed(1)} characters per second (limit ${opts.maxCps}).`,
        segmentId: segment.id,
        cueIndex: index + 1
      });
    }
  });
  return issues;
}

/** One-click fixes used by /subtitle-validator. */
export function autoFixSubtitles(segments: readonly Segment[]): Segment[] {
  const sorted = sortSegments(segments).map((segment, index, all) => {
    const previous = all[index - 1];
    const start = Math.max(0, Math.round(segment.start));
    const end = Math.max(start + 1, Math.round(segment.end));
    return { ...segment, start: previous ? Math.max(start, previous.start + 1) : start, end };
  });
  return sorted
    .filter((segment) => segment.text.trim())
    .map((segment, index) => ({ ...segment, id: `seg-${index + 1}` }));
}

export function downloadText(filename: string, content: string, mime = "text/plain"): void {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
