import type { Segment } from "./subtitles";

export const TARGET_SAMPLE_RATE = 16_000;
export const CHUNK_SECONDS = 30;
export const OVERLAP_SECONDS = 2;

export interface AudioChunk {
  samples: Float32Array;
  /** Offset of this chunk in the original recording, in seconds. */
  offset: number;
  index: number;
  isLast: boolean;
}

/**
 * Slice mono float samples into ~30 s chunks with a 2 s overlap. The overlap
 * gives Whisper context at the boundary; mergeChunkResults removes the repeated
 * words afterwards.
 */
export function chunkAudio(
  samples: Float32Array,
  sampleRate = TARGET_SAMPLE_RATE,
  chunkSeconds = CHUNK_SECONDS,
  overlapSeconds = OVERLAP_SECONDS
): AudioChunk[] {
  if (samples.length === 0) return [];
  const chunkSize = Math.max(1, Math.round(chunkSeconds * sampleRate));
  const overlapSize = Math.max(0, Math.min(chunkSize - 1, Math.round(overlapSeconds * sampleRate)));
  const step = chunkSize - overlapSize;
  const chunks: AudioChunk[] = [];
  let index = 0;
  for (let start = 0; start < samples.length; start += step) {
    const end = Math.min(samples.length, start + chunkSize);
    chunks.push({
      samples: samples.slice(start, end),
      offset: start / sampleRate,
      index,
      isLast: end >= samples.length
    });
    index += 1;
    if (end >= samples.length) break;
  }
  return chunks;
}

export function resampleTo16k(samples: Float32Array, sampleRate: number): Float32Array {
  if (sampleRate === TARGET_SAMPLE_RATE) return samples;
  const ratio = TARGET_SAMPLE_RATE / sampleRate;
  const length = Math.max(1, Math.round(samples.length * ratio));
  const output = new Float32Array(length);
  for (let i = 0; i < length; i += 1) {
    const position = i / ratio;
    const floor = Math.floor(position);
    const ceil = Math.min(samples.length - 1, floor + 1);
    const weight = position - floor;
    output[i] = (samples[floor] ?? 0) * (1 - weight) + (samples[ceil] ?? 0) * weight;
  }
  return output;
}

/** Decode a PCM WAV produced by ffmpeg (16-bit or 32-bit float, mono or stereo). */
export function decodeWav(buffer: ArrayBuffer): { samples: Float32Array; sampleRate: number } {
  const view = new DataView(buffer);
  const riff = String.fromCharCode(...new Uint8Array(buffer, 0, 4));
  const wave = String.fromCharCode(...new Uint8Array(buffer, 8, 4));
  if (riff !== "RIFF" || wave !== "WAVE") throw new Error("The extracted audio is not a WAV file.");

  let offset = 12;
  let format = 1;
  let channels = 1;
  let sampleRate = TARGET_SAMPLE_RATE;
  let bits = 16;
  let dataOffset = -1;
  let dataLength = 0;

  while (offset + 8 <= buffer.byteLength) {
    const id = String.fromCharCode(...new Uint8Array(buffer, offset, 4));
    const size = view.getUint32(offset + 4, true);
    const body = offset + 8;
    if (id === "fmt ") {
      format = view.getUint16(body, true);
      channels = Math.max(1, view.getUint16(body + 2, true));
      sampleRate = view.getUint32(body + 4, true);
      bits = view.getUint16(body + 14, true);
      if (format === 0xfffe && size >= 26) {
        format = view.getUint16(body + 24, true);
      }
    } else if (id === "data") {
      dataOffset = body;
      dataLength = Math.min(size, buffer.byteLength - body);
      break;
    }
    offset = body + size + (size % 2);
  }

  if (dataOffset < 0) throw new Error("The WAV file has no data chunk.");
  const bytesPerSample = Math.max(1, Math.round(bits / 8));
  const frameCount = Math.floor(dataLength / (bytesPerSample * channels));
  const samples = new Float32Array(frameCount);

  if (format === 1 && bits === 16 && dataOffset % 2 === 0) {
    const pcm = new Int16Array(buffer, dataOffset, frameCount * channels);
    for (let frame = 0; frame < frameCount; frame += 1) {
      let sum = 0;
      for (let channel = 0; channel < channels; channel += 1) {
        sum += pcm[frame * channels + channel]! / 32768;
      }
      samples[frame] = sum / channels;
    }
  } else if (format === 3 && bits === 32 && dataOffset % 4 === 0) {
    const pcm = new Float32Array(buffer, dataOffset, frameCount * channels);
    for (let frame = 0; frame < frameCount; frame += 1) {
      let sum = 0;
      for (let channel = 0; channel < channels; channel += 1) {
        sum += pcm[frame * channels + channel]!;
      }
      samples[frame] = sum / channels;
    }
  } else {
    for (let frame = 0; frame < frameCount; frame += 1) {
      let sum = 0;
      for (let channel = 0; channel < channels; channel += 1) {
        const index = dataOffset + (frame * channels + channel) * bytesPerSample;
        let value = 0;
        if (format === 3 && bits === 32) {
          value = view.getFloat32(index, true);
        } else if (bits === 16) {
          value = view.getInt16(index, true) / 32768;
        } else if (bits === 24) {
          const low = view.getUint8(index);
          const mid = view.getUint8(index + 1);
          const high = view.getInt8(index + 2);
          value = ((high << 16) | (mid << 8) | low) / 8388608;
        } else if (bits === 32) {
          value = view.getInt32(index, true) / 2147483648;
        } else if (bits === 8) {
          value = (view.getUint8(index) - 128) / 128;
        }
        sum += value;
      }
      samples[frame] = sum / channels;
    }
  }

  return { samples: resampleTo16k(samples, sampleRate), sampleRate: TARGET_SAMPLE_RATE };
}

function normalizeWord(word: string): string {
  return word
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "")
    .trim();
}

/**
 * Join per-chunk segments and delete text repeated in the overlap. We compare
 * normalized word suffixes of the previous result with prefixes of the new one,
 * keeping the longest match (maximum 12 words). Timings are shifted by the
 * chunk offset before this function is called.
 */
export function mergeChunkResults(previous: Segment[], next: Segment[]): Segment[] {
  if (previous.length === 0) return [...next];
  if (next.length === 0) return [...previous];
  const left = previous[previous.length - 1];
  const right = next[0];
  if (!left || !right) return [...previous, ...next];

  const leftWords = left.text.split(/\s+/).filter(Boolean);
  const rightWords = right.text.split(/\s+/).filter(Boolean);
  let match = 0;
  const max = Math.min(12, leftWords.length, rightWords.length);
  // Require at least two words: a single shared word at a boundary is often
  // real speech, not an artifact of the overlap.
  for (let size = max; size >= 2; size -= 1) {
    const suffix = leftWords.slice(-size).map(normalizeWord).join(" ");
    const prefix = rightWords.slice(0, size).map(normalizeWord).join(" ");
    if (suffix && suffix === prefix) {
      match = size;
      break;
    }
  }

  if (match === 0) return [...previous, ...next];

  const remaining = rightWords.slice(match);
  const merged = [...previous];
  if (remaining.length === 0) {
    merged[merged.length - 1] = {
      ...left,
      end: Math.max(left.end, right.end)
    };
  } else {
    merged.push({ ...right, text: remaining.join(" ") });
  }
  return [...merged, ...next.slice(1)];
}

export function shiftChunkSegments(segments: Segment[], offsetSeconds: number): Segment[] {
  const offsetMs = Math.round(offsetSeconds * 1000);
  return segments.map((segment) => ({
    ...segment,
    start: segment.start + offsetMs,
    end: segment.end + offsetMs
  }));
}

export function estimateRemainingSeconds(
  completed: number,
  total: number,
  elapsedSeconds: number
): number {
  if (completed <= 0 || total <= 0) return 0;
  const perUnit = elapsedSeconds / completed;
  return Math.max(0, Math.round(perUnit * (total - completed)));
}

export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  if (hours > 0)
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}
