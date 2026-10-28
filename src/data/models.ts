/**
 * Model download sizes measured from the Hugging Face API on 2026-10-28 by
 * summing the encoder and decoder ONNX files used by transformers.js.
 * Source: https://huggingface.co/api/models/onnx-community/whisper-tiny?blobs=true
 * (and the base/small repositories). See docs/verification-log.md.
 */
export interface ModelOption {
  id: "tiny" | "base" | "small";
  label: string;
  repo: string;
  description: string;
  wasmDownloadMb: number;
  webgpuDownloadMb: number;
  speedNote: string;
}

export const models: ModelOption[] = [
  {
    id: "tiny",
    label: "Fast",
    repo: "onnx-community/whisper-tiny",
    description:
      "The smallest multilingual Whisper model. Best for quick drafts, short clips and low-memory phones. Accuracy drops on accents, background noise and low-resource languages.",
    wasmDownloadMb: 41,
    webgpuDownloadMb: 76,
    speedNote: "Typically the fastest option; expect the lowest accuracy of the three."
  },
  {
    id: "base",
    label: "Balanced",
    repo: "onnx-community/whisper-base",
    description:
      "A middle ground between speed and accuracy. A sensible default for interviews, lectures and social videos with clear speech.",
    wasmDownloadMb: 77,
    webgpuDownloadMb: 146,
    speedNote: "Noticeably slower than tiny, usually more accurate on names and punctuation."
  },
  {
    id: "small",
    label: "Accurate",
    repo: "onnx-community/whisper-small",
    description:
      "The largest model this site offers. Better on noisy audio and non-English speech, but the download is large and older phones may run out of memory.",
    wasmDownloadMb: 249,
    webgpuDownloadMb: 485,
    speedNote: "Slowest option. On WASM, expect several minutes for a 10-minute clip."
  }
];

export const modelById = new Map(models.map((model) => [model.id, model]));

export const modelRepos: Record<ModelOption["id"], string> = {
  tiny: "onnx-community/whisper-tiny",
  base: "onnx-community/whisper-base",
  small: "onnx-community/whisper-small"
};

export const modelNote =
  "The first run downloads the model once and stores it in your browser cache. Later runs can work offline, but only for the model and language data already cached.";
