import { describe, expect, it } from "vitest";
import {
  autoFixSubtitles,
  createSegment,
  formatSrtTimestamp,
  formatVttTimestamp,
  parseSubtitles,
  parseTimestamp,
  readingSpeed,
  shiftSegments,
  splitSegment,
  srtToVtt,
  stretchSegments,
  toSrt,
  toVtt,
  validateSubtitles,
  vttToSrt
} from "@/lib/subtitles";

describe("subtitle timestamps", () => {
  it("formats SRT and VTT separators", () => {
    expect(formatSrtTimestamp(3_723_045)).toBe("01:02:03,045");
    expect(formatVttTimestamp(3_723_045)).toBe("01:02:03.045");
  });

  it("parses comma, dot, short and VTT-setting timestamps", () => {
    expect(parseTimestamp("00:01:02,500")).toBe(62_500);
    expect(parseTimestamp("01:02.500")).toBe(62_500);
    expect(parseTimestamp("00:00:03.200 align:start")).toBe(3_200);
  });

  it("rejects impossible values", () => {
    expect(() => parseTimestamp("00:99:00,000")).toThrow();
  });
});

describe("subtitle round trips", () => {
  const cues = [
    createSegment(1_000, 4_000, "First line"),
    createSegment(4_500, 7_250, "Second line\nwith a break")
  ];

  it("round-trips SRT", () => {
    const parsed = parseSubtitles(toSrt(cues));
    expect(parsed.map((cue) => cue.text)).toEqual(["First line", "Second line\nwith a break"]);
    expect(parsed.map((cue) => cue.start)).toEqual([1_000, 4_500]);
  });

  it("round-trips VTT", () => {
    const parsed = parseSubtitles(toVtt(cues));
    expect(parsed).toHaveLength(2);
    expect(parsed[1]?.end).toBe(7_250);
  });

  it("converts both directions", () => {
    const vtt = srtToVtt(toSrt(cues));
    expect(vtt.startsWith("WEBVTT")).toBe(true);
    const srt = vttToSrt(vtt);
    expect(srt).toContain("00:00:01,000 --> 00:00:04,000");
  });
});

describe("timing edits", () => {
  const cues = [createSegment(1_000, 3_000, "One"), createSegment(4_000, 6_000, "Two")];

  it("shifts without going negative", () => {
    expect(shiftSegments(cues, -2_000).map((cue) => cue.start)).toEqual([0, 2_000]);
  });

  it("stretches by a positive factor", () => {
    expect(stretchSegments(cues, 1.5).map((cue) => cue.start)).toEqual([1_500, 6_000]);
  });

  it("splits a cue at a character position", () => {
    const parts = splitSegment({ ...cues[0]!, text: "One two" }, 3);
    expect(parts?.before.text).toBe("One");
    expect(parts?.after.text).toBe("two");
    expect(parts?.before.end).toBe(parts?.after.start);
  });
});

describe("validation", () => {
  it("flags overlaps and reversed timing", () => {
    const issues = validateSubtitles([
      createSegment(0, 3_000, "A"),
      createSegment(2_500, 2_000, "B")
    ]);
    expect(issues.some((issue) => issue.code === "overlap")).toBe(true);
    expect(issues.some((issue) => issue.code === "end-before-start")).toBe(true);
  });

  it("auto-fixes what it safely can", () => {
    const fixed = autoFixSubtitles([
      createSegment(0, 3_000, "A"),
      createSegment(2_500, 2_000, "B")
    ]);
    expect(fixed[1]?.end).toBeGreaterThan(fixed[1]?.start ?? 0);
  });

  it("computes characters per second", () => {
    expect(readingSpeed(createSegment(0, 2_000, "1234567890"))).toBe(5);
  });
});
