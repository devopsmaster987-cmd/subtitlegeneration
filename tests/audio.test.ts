import { describe, expect, it } from "vitest";
import {
  CHUNK_SECONDS,
  TARGET_SAMPLE_RATE,
  chunkAudio,
  decodeWav,
  estimateRemainingSeconds,
  mergeChunkResults,
  resampleTo16k,
  shiftChunkSegments
} from "@/lib/audio";
import { createSegment } from "@/lib/subtitles";

function pcm16Wav(values: number[]): ArrayBuffer {
  const data = new Int16Array(values);
  const buffer = new ArrayBuffer(44 + data.byteLength);
  const view = new DataView(buffer);
  const write = (offset: number, text: string) => {
    for (let index = 0; index < text.length; index += 1) {
      view.setUint8(offset + index, text.charCodeAt(index));
    }
  };
  write(0, "RIFF");
  view.setUint32(4, 36 + data.byteLength, true);
  write(8, "WAVE");
  write(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, TARGET_SAMPLE_RATE, true);
  view.setUint32(28, TARGET_SAMPLE_RATE * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  write(36, "data");
  view.setUint32(40, data.byteLength, true);
  new Int16Array(buffer, 44, data.length).set(data);
  return buffer;
}

describe("audio chunks", () => {
  it("returns no chunks for empty audio", () => {
    expect(chunkAudio(new Float32Array())).toEqual([]);
  });

  it("uses the documented target rate and overlap", () => {
    const samples = new Float32Array(TARGET_SAMPLE_RATE * 35);
    const chunks = chunkAudio(samples);
    expect(chunks).toHaveLength(2);
    expect(chunks[0]?.offset).toBe(0);
    expect(chunks[1]?.offset).toBe(CHUNK_SECONDS - 2);
    expect(chunks[1]?.isLast).toBe(true);
  });

  it("decodes 16-bit PCM wav audio", () => {
    const { samples, sampleRate } = decodeWav(pcm16Wav([0, 16384, -32768]));
    expect(sampleRate).toBe(TARGET_SAMPLE_RATE);
    expect(Array.from(samples)).toEqual([0, 0.5, -1]);
  });

  it("resamples linearly", () => {
    const output = resampleTo16k(new Float32Array([0, 1, 0, -1]), 8_000);
    expect(output.length).toBe(8);
    expect(output[0]).toBe(0);
  });

  it("merges overlapping duplicate words", () => {
    const previous = [createSegment(0, 2_000, "the quick brown fox")];
    const next = [createSegment(0, 1_500, "brown fox jumps")];
    const merged = mergeChunkResults(previous, next);
    expect(merged.at(-1)?.text).toBe("jumps");
  });

  it("keeps a single shared word", () => {
    const previous = [createSegment(0, 2_000, "hello world")];
    const next = [createSegment(0, 1_500, "world peace")];
    const merged = mergeChunkResults(previous, next);
    expect(merged.at(-1)?.text).toBe("world peace");
  });

  it("shifts and estimates", () => {
    expect(shiftChunkSegments([createSegment(0, 1_000, "A")], 2)[0]?.start).toBe(2_000);
    expect(estimateRemainingSeconds(2, 4, 10)).toBe(10);
  });
});
