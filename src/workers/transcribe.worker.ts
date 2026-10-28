/// <reference lib="webworker" />

export type TranscribeRequest =
  | {
      type: "init";
      model: string;
      language: string | null;
      task: "transcribe" | "translate";
      device: "webgpu" | "wasm";
    }
  | { type: "transcribe"; audio: Float32Array; offset: number; index: number }
  | { type: "dispose" };

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
  | { type: "error"; message: string; recoverable: boolean }
  | { type: "done" };

const scope = self as unknown as DedicatedWorkerGlobalScope;
let transcriber: any = null;
let currentKey = "";
let currentLanguage: string | null = null;
let currentTask: "transcribe" | "translate" = "transcribe";
let cancelled = false;

function post(message: TranscribeResponse, transfer?: Transferable[]) {
  scope.postMessage(message, transfer ?? []);
}

async function init(request: Extract<TranscribeRequest, { type: "init" }>) {
  const key = `${request.model}|${request.device}`;
  currentLanguage = request.language;
  currentTask = request.task;
  if (transcriber && key === currentKey) {
    post({ type: "ready", device: request.device });
    return;
  }
  transcriber = null;
  currentKey = key;
  post({ type: "status", status: "loading", message: "Loading Whisper in your browser" });

  const { pipeline, env } = await import("@huggingface/transformers");
  env.allowLocalModels = false;
  env.useBrowserCache = true;

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
        post({
          type: "model-progress",
          file: event.file,
          progress: Math.max(0, Math.min(100, event.progress ?? 0)),
          loaded: event.loaded ?? 0,
          total: event.total ?? 0
        });
      }
    }
  };

  try {
    transcriber = await pipeline("automatic-speech-recognition", request.model, options);
  } catch (error) {
    if (request.device === "webgpu") {
      post({
        type: "status",
        status: "fallback",
        message: "WebGPU was unavailable for this model; falling back to WASM."
      });
      transcriber = await pipeline("automatic-speech-recognition", request.model, {
        ...options,
        device: "wasm"
      });
    } else {
      throw error;
    }
  }

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
      await init(request);
    } else if (request.type === "transcribe") {
      await transcribe(request);
    } else if (request.type === "dispose") {
      cancelled = true;
      transcriber = null;
      currentKey = "";
      post({ type: "done" });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    post({ type: "error", message, recoverable: true });
  }
};

export {};
