/// <reference lib="webworker" />

export type MediaRequest =
  | { type: "extract"; buffer: ArrayBuffer; extension: string }
  | {
      type: "burn";
      buffer: ArrayBuffer;
      extension: string;
      subtitles: string;
      fontSize: number;
      marginBottom: number;
    };

export type MediaResponse =
  | { type: "status"; status: string; message: string }
  | { type: "progress"; progress: number; time: number }
  | { type: "extracted"; buffer: ArrayBuffer }
  | { type: "burned"; buffer: ArrayBuffer; extension: string }
  | { type: "error"; message: string };

const scope = self as unknown as DedicatedWorkerGlobalScope;

function post(message: MediaResponse, transfer: Transferable[] = []) {
  scope.postMessage(message, transfer);
}

let ffmpegInstance: any = null;

async function getFfmpeg() {
  if (ffmpegInstance) return ffmpegInstance;
  const { FFmpeg } = await import("@ffmpeg/ffmpeg");
  const ffmpeg = new FFmpeg();
  ffmpeg.on("log", (event: { message: string }) => {
    if (/error|invalid|failed/i.test(event.message)) {
      post({ type: "status", status: "log", message: event.message });
    }
  });
  ffmpeg.on("progress", (event: { progress: number; time: number }) => {
    post({
      type: "progress",
      progress: Math.max(0, Math.min(100, event.progress * 100)),
      time: event.time
    });
  });
  post({ type: "status", status: "loading", message: "Loading the audio engine" });
  const coreRoot =
    process.env.NEXT_PUBLIC_FFMPEG_CDN === "1"
      ? "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd/"
      : new URL("/ffmpeg/", self.location.href).href;
  await ffmpeg.load({
    coreURL: `${coreRoot}ffmpeg-core.js`,
    wasmURL: `${coreRoot}ffmpeg-core.wasm`
  });
  ffmpegInstance = ffmpeg;
  return ffmpeg as any;
}

function safeExtension(extension: string): string {
  const clean = extension.replace(/[^a-z0-9]/gi, "").slice(0, 5);
  return clean || "bin";
}

async function extract(request: Extract<MediaRequest, { type: "extract" }>) {
  const ffmpeg = await getFfmpeg();
  const input = `input.${safeExtension(request.extension)}`;
  post({ type: "status", status: "extracting", message: "Extracting a 16 kHz mono audio track" });
  await ffmpeg.writeFile(input, new Uint8Array(request.buffer));
  await ffmpeg.exec([
    "-i",
    input,
    "-vn",
    "-ac",
    "1",
    "-ar",
    "16000",
    "-c:a",
    "pcm_s16le",
    "audio.wav"
  ]);
  const data = (await ffmpeg.readFile("audio.wav")) as Uint8Array;
  const copy = data.slice().buffer;
  post({ type: "extracted", buffer: copy }, [copy]);
  await ffmpeg.deleteFile(input).catch(() => undefined);
  await ffmpeg.deleteFile("audio.wav").catch(() => undefined);
}

function escapeSubtitlePath(value: string): string {
  return value.replace(/\\/g, "/").replace(/:/g, "\\:");
}

async function burn(request: Extract<MediaRequest, { type: "burn" }>) {
  const ffmpeg = await getFfmpeg();
  const extension = safeExtension(request.extension);
  const input = `input.${extension}`;
  post({ type: "status", status: "burning", message: "Burning subtitles into the video" });
  await ffmpeg.writeFile(input, new Uint8Array(request.buffer));
  await ffmpeg.writeFile("captions.srt", new TextEncoder().encode(request.subtitles));
  const style = [
    `FontSize=${Math.round(request.fontSize)}`,
    "PrimaryColour=&H00FFFFFF",
    "OutlineColour=&H80000000",
    "BorderStyle=1",
    "Outline=1.4",
    "Shadow=0",
    `MarginV=${Math.round(request.marginBottom)}`
  ].join(",");
  await ffmpeg.exec([
    "-i",
    input,
    "-vf",
    `subtitles=${escapeSubtitlePath("captions.srt")}:force_style='${style}'`,
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-crf",
    "22",
    "-c:a",
    "aac",
    "-b:a",
    "160k",
    `output.${extension === "webm" ? "webm" : "mp4"}`
  ]);
  const outputName = extension === "webm" ? "output.webm" : "output.mp4";
  const data = (await ffmpeg.readFile(outputName)) as Uint8Array;
  const copy = data.slice().buffer;
  post({ type: "burned", buffer: copy, extension: extension === "webm" ? "webm" : "mp4" }, [copy]);
  await ffmpeg.deleteFile(input).catch(() => undefined);
  await ffmpeg.deleteFile("captions.srt").catch(() => undefined);
  await ffmpeg.deleteFile(outputName).catch(() => undefined);
}

scope.onmessage = async (event: MessageEvent<MediaRequest>) => {
  try {
    if (event.data.type === "extract") await extract(event.data);
    else if (event.data.type === "burn") await burn(event.data);
  } catch (error) {
    post({ type: "error", message: error instanceof Error ? error.message : String(error) });
  }
};

export {};
