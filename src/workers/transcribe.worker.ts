/// <reference lib="webworker" />

import { fetchGzipped, wasmBlobUrl } from "./wasm";

export type TranscribeRequest =
  | {
      type: "init";
      model: string;
      language: string | null;
      task: "transcribe" | "translate";
      device: "webgpu" | "wasm";
    }
  | { type: "transcribe"; audio: Float32Array; offset: number; index: number }
  | { type: "dispose" }
  | { type: "retry" };

export type TranscribeResponse =
  | { type: "status"; status: string; message?: string }
  | { type: "model-progress"; file: string; progress: number; loaded: number; total: number }
  | { type: "ready"; device: string }
  | {
      type: "result";
      index: number;
      offset: number;
      segments: { start: number; end: number; text: string }[];
    }
  | { type: "error"; message: string; recoverable: boolean; errorKind?: string }
  | { type: "done" };

const scope = self as unknown as DedicatedWorkerGlobalScope;
let lastFailedUrl = "";
const nativeFetch = self.fetch.bind(self);
try {
  self.fetch = ((input: RequestInfo | URL, init?: RequestInit) =>
    nativeFetch(input, init).catch((error) => {
      lastFailedUrl =
        typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
      throw error;
    })) as typeof fetch;
} catch {
  // Some browsers expose fetch as read-only; the error still surfaces without the URL.
}

let transcriber: any = null;
let currentKey = "";
let currentLanguage: string | null = null;
let currentTask: "transcribe" | "translate" = "transcribe";
let cancelled = false;
let initInFlight: Promise<void> | null = null;
let wasmPathsPromise: Promise<{ mjs: string; wasm: string } | null> | null = null;
let wasmObjectUrl: string | null = null;
let lastInitRequest: Extract<TranscribeRequest, { type: "init" }> | null = null;

function post(message: TranscribeResponse, transfer?: Transferable[]) {
  scope.postMessage(message, transfer ?? []);
}

async function localWasmPaths() {
  if (!wasmPathsPromise) {
    wasmPathsPromise = (async () => {
      try {
        const buffer = await fetchGzipped("/ort/ort-wasm-simd-threaded.asyncify.wasm.gz");
        if (!buffer) return null;
        if (wasmObjectUrl) URL.revokeObjectURL(wasmObjectUrl);
        const url = wasmBlobUrl(buffer);
        wasmObjectUrl = url;
        return { mjs: "/ort/ort-wasm-simd-threaded.asyncify.mjs", wasm: url };
      } catch {
        return null;
      }
    })();
  }
  return wasmPathsPromise;
}

/** Classify an error for the UI. */
function classifyError(message: string): { friendly: string; kind: string } {
  if (/could not locate file|failed to fetch|networkerror|load failed|net::/i.test(message)) {
    return {
      kind: "network",
      friendly:
        "Could not download the model files. This is usually caused by a network block, firewall, or connectivity issue. Click 'Retry download' to try again."
    };
  }
  if (/memory|allocation|out of bounds|oom/i.test(message)) {
    return {
      kind: "memory",
      friendly:
        "The browser ran out of memory loading this model. Try the Fast (tiny) model, close other tabs, or use a desktop browser."
    };
  }
  if (/webgpu|adapter|gpu/i.test(message)) {
    return {
      kind: "webgpu",
      friendly:
        "WebGPU is not available or failed on this device. Switch the Device setting to WASM and try again."
    };
  }
  if (/wasm|ort-wasm|runtime/i.test(message)) {
    return {
      kind: "runtime",
      friendly:
        "The WebAssembly runtime failed to load. Your browser may not support the required features. Try Chrome, Edge, or Firefox on desktop."
    };
  }
  if (/unsupported|not supported/i.test(message)) {
    return {
      kind: "unsupported",
      friendly:
        "This browser does not support the required features for model inference. Please use a recent version of Chrome, Edge, or Firefox."
    };
  }
  return { kind: "unknown", friendly: message };
}

/** Sleep for the given number of milliseconds. */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Try loading the pipeline with retries and a fallback remote host.
 * 1. Same-origin proxy (location.origin + /models/...)
 * 2. hf-mirror.com as fallback
 * 3. 3 retries per host with exponential backoff
 */
async function loadPipelineWithFallback(request: Extract<TranscribeRequest, { type: "init" }>) {
  const { pipeline, env } = await import("@huggingface/transformers");

  // Common env settings
  env.allowLocalModels = false;
  env.useBrowserCache = true;

  // ONNX WASM paths — try local first, then CDN
  const localWasm = await localWasmPaths();
  const onnx = env.backends.onnx as unknown as {
    versions?: { common?: string; web?: string };
    wasm?: { wasmPaths?: unknown };
  };
  const usingLocal = Boolean(localWasm && onnx.wasm);
  if (usingLocal && localWasm && onnx.wasm) {
    onnx.wasm.wasmPaths = localWasm;
  } else {
    const version = onnx.versions?.web ?? onnx.versions?.common;
    if (version && onnx.wasm) {
      const base = `https://cdn.jsdelivr.net/npm/onnxruntime-web@${version}/dist/`;
      onnx.wasm.wasmPaths = {
        mjs: `${base}ort-wasm-simd-threaded.asyncify.mjs`,
        wasm: `${base}ort-wasm-simd-threaded.asyncify.wasm`
      };
    }
  }

  const options: Record<string, unknown> = {
    device: request.device,
    dtype: request.device === "webgpu" ? "fp16" : "q8",
    progress_callback: (event: {
      status?: string;
      file?: string;
      progress?: number;
      loaded?: number;
      total?: number;
    }) => {
      if (event.status === "progress" && event.file) {
        const loadedMb = ((event.loaded ?? 0) / 1024 / 1024).toFixed(1);
        const totalMb = ((event.total ?? 0) / 1024 / 1024).toFixed(1);
        post({
          type: "model-progress",
          file: `${event.file} (${loadedMb} / ${totalMb} MB)`,
          progress: Math.max(0, Math.min(100, event.progress ?? 0)),
          loaded: event.loaded ?? 0,
          total: event.total ?? 0
        });
      }
    }
  };

  // Host configurations to try in order
  const hosts = [
    {
      name: "same-origin proxy",
      setup: () => {
        env.remoteHost = self.location.origin;
        env.remotePathTemplate = "/models/{model}/resolve/{revision}/";
      }
    },
    {
      name: "hf-mirror.com",
      setup: () => {
        env.remoteHost = "https://hf-mirror.com";
        env.remotePathTemplate = "{model}/resolve/{revision}/";
      }
    },
    {
      name: "huggingface.co",
      setup: () => {
        env.remoteHost = "https://huggingface.co";
        env.remotePathTemplate = "{model}/resolve/{revision}/";
      }
    }
  ];

  const MAX_RETRIES = 3;
  let lastError: unknown = null;

  for (const host of hosts) {
    host.setup();

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        post({
          type: "status",
          status: "loading",
          message:
            attempt === 1
              ? `Downloading model via ${host.name}…`
              : `Retry ${attempt}/${MAX_RETRIES} via ${host.name}…`
        });

        const result = await pipeline("automatic-speech-recognition", request.model, {
          ...options,
          device: request.device
        });
        return result;
      } catch (error) {
        lastError = error;
        const msg = error instanceof Error ? error.message : String(error);

        // Don't retry non-network errors. transformers.js wraps missing 404
        // responses as "Could not locate file ...", which is still a network
        // problem here (the host or path does not serve model files).
        if (!/could not locate file|failed to fetch|networkerror|load failed|net::/i.test(msg)) {
          throw error;
        }

        if (attempt < MAX_RETRIES) {
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 8000);
          post({
            type: "status",
            status: "loading",
            message: `Download failed, retrying in ${delay / 1000}s… (attempt ${attempt}/${MAX_RETRIES})`
          });
          await sleep(delay);
        }
      }
    }
  }

  // If all hosts failed and we were trying WebGPU, fall back to WASM
  if (request.device === "webgpu") {
    post({
      type: "status",
      status: "fallback",
      message: "WebGPU download failed; trying WASM with quantized weights."
    });
    // Keep whichever remote host the loop last configured; it is the best
    // candidate because the proxy list already ended with the plain default.
    try {
      return await pipeline("automatic-speech-recognition", request.model, {
        ...options,
        device: "wasm",
        dtype: "q8"
      });
    } catch {
      // Fall through to throw the original error
    }
  }

  throw lastError;
}

async function init(request: Extract<TranscribeRequest, { type: "init" }>) {
  const key = `${request.model}|${request.device}`;
  currentLanguage = request.language;
  currentTask = request.task;
  lastInitRequest = request;
  if (transcriber && key === currentKey) {
    post({ type: "ready", device: request.device });
    return;
  }
  transcriber = null;
  currentKey = key;
  post({ type: "status", status: "loading", message: "Loading Whisper in your browser" });

  transcriber = await loadPipelineWithFallback(request);
  post({ type: "ready", device: request.device });
}

async function transcribe(request: Extract<TranscribeRequest, { type: "transcribe" }>) {
  if (!transcriber) throw new Error("The model is not loaded yet.");
  if (cancelled) return;
  post({
    type: "status",
    status: "transcribing",
    message: `Transcribing chunk ${request.index + 1}`
  });
  const options: Record<string, unknown> = {
    return_timestamps: true,
    chunk_length_s: 30,
    stride_length_s: 0,
    task: currentTask
  };
  if (currentLanguage) options.language = currentLanguage;
  const result = await transcriber(request.audio, options);
  if (cancelled) return;

  const chunks: { timestamp: [number, number | null]; text: string }[] = Array.isArray(
    result?.chunks
  )
    ? result.chunks
    : [];
  const segments =
    chunks.length > 0
      ? chunks.map((chunk) => ({
          start: Math.round((chunk.timestamp[0] ?? 0) * 1000),
          end: Math.round(((chunk.timestamp[1] ?? chunk.timestamp[0] ?? 0) + 0.4) * 1000),
          text: chunk.text.trim()
        }))
      : [
          {
            start: 0,
            end: Math.max(1000, Math.round(request.audio.length / 16)),
            text: String(result?.text ?? "").trim()
          }
        ];

  post({ type: "result", index: request.index, offset: request.offset, segments });
}

scope.onmessage = async (event: MessageEvent<TranscribeRequest>) => {
  const request = event.data;
  try {
    if (request.type === "init") {
      cancelled = false;
      const run = (initInFlight ?? Promise.resolve())
        .catch(() => undefined)
        .then(() => init(request));
      initInFlight = run;
      try {
        await run;
      } finally {
        if (initInFlight === run) initInFlight = null;
      }
    } else if (request.type === "transcribe") {
      await transcribe(request);
    } else if (request.type === "retry") {
      // Retry the last init request
      if (lastInitRequest) {
        cancelled = false;
        transcriber = null;
        currentKey = "";
        const run = (initInFlight ?? Promise.resolve())
          .catch(() => undefined)
          .then(() => init(lastInitRequest!));
        initInFlight = run;
        try {
          await run;
        } finally {
          if (initInFlight === run) initInFlight = null;
        }
      }
    } else if (request.type === "dispose") {
      cancelled = true;
      transcriber = null;
      currentKey = "";
      if (wasmObjectUrl) {
        URL.revokeObjectURL(wasmObjectUrl);
        wasmObjectUrl = null;
      }
      wasmPathsPromise = null;
      post({ type: "done" });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const detail = lastFailedUrl ? ` Failed URL: ${lastFailedUrl.slice(0, 240)}` : "";
    const { friendly, kind } = classifyError(message);
    post({
      type: "error",
      message: detail ? `${friendly}${detail}` : friendly,
      recoverable: true,
      errorKind: kind
    });
  }
};

export {};
