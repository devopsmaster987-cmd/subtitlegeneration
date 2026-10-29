"use client";

import { useEffect, useRef, useState } from "react";
import { chunkAudio, decodeWav, estimateRemainingSeconds, shiftChunkSegments } from "@/lib/audio";
import { mergeChunkResults } from "@/lib/audio";
import type { Segment } from "@/lib/subtitles";
import { useToolStore } from "@/lib/store";
import { modelRepos } from "@/data/models";
import { languageByCode } from "@/config/languages";
import type { MediaRequest, MediaResponse } from "@/workers/media.worker";
import type { TranscribeRequest, TranscribeResponse } from "@/workers/transcribe.worker";
import { FileDropzone, describeFile } from "./FileDropzone";
import { LanguageCombobox } from "./LanguageCombobox";
import { ModelSelect } from "./ModelSelect";
import { ProgressPanel } from "./ProgressPanel";
import { PreviewPlayer } from "./PreviewPlayer";
import { SegmentEditor } from "./SegmentEditor";
import { ExportBar } from "./ExportBar";

interface PendingResult {
  resolve: (value: Extract<TranscribeResponse, { type: "result" }>) => void;
  reject: (reason: Error) => void;
}

export interface ToolProps {
  initialLanguage?: string | null;
  preset?:
    | "main"
    | "video-to-text"
    | "video-to-srt"
    | "audio-to-srt"
    | "speech-to-text"
    | "caption-generator"
    | "transcript-generator"
    | "offline-subtitle-generator"
    | "private-subtitle-generator";
}

export function Tool({ preset = "main", initialLanguage = null }: ToolProps) {
  const stage = useToolStore((state) => state.stage);
  const statusMessage = useToolStore((state) => state.statusMessage);
  const error = useToolStore((state) => state.error);
  const file = useToolStore((state) => state.file);
  const language = useToolStore((state) => state.language);
  const task = useToolStore((state) => state.task);
  const model = useToolStore((state) => state.model);
  const device = useToolStore((state) => state.device);
  const progress = useToolStore((state) => state.progress);
  const segments = useToolStore((state) => state.segments);
  const setStage = useToolStore((state) => state.setStage);
  const setError = useToolStore((state) => state.setError);
  const setFile = useToolStore((state) => state.setFile);
  const clearFile = useToolStore((state) => state.clearFile);
  const setLanguage = useToolStore((state) => state.setLanguage);
  const setTask = useToolStore((state) => state.setTask);
  const setModel = useToolStore((state) => state.setModel);
  const setDevice = useToolStore((state) => state.setDevice);
  const setProgress = useToolStore((state) => state.setProgress);
  const setSegments = useToolStore((state) => state.setSegments);

  const [webgpu, setWebgpu] = useState(false);
  const sourceFileRef = useRef<File | null>(null);
  const mediaWorkerRef = useRef<Worker | null>(null);
  const transcribeWorkerRef = useRef<Worker | null>(null);
  const transcriberKeyRef = useRef("");
  const transcriberReadyRef = useRef<Promise<void> | null>(null);
  const warmupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingRef = useRef(new Map<number, PendingResult>());
  const readyRef = useRef<{ resolve: () => void; reject: (error: Error) => void } | null>(null);
  const cancelRef = useRef(false);

  const rtl = language ? (languageByCode.get(language)?.rtl ?? false) : false;
  const busy = stage === "extracting" || stage === "loading" || stage === "transcribing";

  useEffect(() => {
    if (initialLanguage) setLanguage(initialLanguage);
  }, [initialLanguage, setLanguage]);

  useEffect(() => {
    setWebgpu(Boolean((navigator as Navigator & { gpu?: unknown }).gpu));
    return () => {
      mediaWorkerRef.current?.terminate();
      resetTranscriber();
    };
  }, []);

  useEffect(() => {
    if (!file || busy) return;
    if (typeof navigator === "undefined" || navigator.onLine === false) return;
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "")) return;
    if (warmupTimerRef.current) clearTimeout(warmupTimerRef.current);
    warmupTimerRef.current = setTimeout(() => {
      warmupTimerRef.current = null;
      ensureTranscriber(resolveDevice()).catch(() => undefined);
    }, 500);
    return () => {
      if (warmupTimerRef.current) {
        clearTimeout(warmupTimerRef.current);
        warmupTimerRef.current = null;
      }
    };
  }, [file, model, device, webgpu, language, task]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.code !== "Space" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(target.tagName)) return;
      if (!useToolStore.getState().mediaUrl) return;
      event.preventDefault();
      window.dispatchEvent(new Event("voicetotextfree:toggle-play"));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function rejectEverything(message: string) {
    for (const pending of pendingRef.current.values()) pending.reject(new Error(message));
    pendingRef.current.clear();
    readyRef.current?.reject(new Error(message));
    readyRef.current = null;
  }

  function resolveDevice(): "webgpu" | "wasm" {
    return device === "auto" ? (webgpu ? "webgpu" : "wasm") : device;
  }

  function resetTranscriber() {
    transcribeWorkerRef.current?.terminate();
    transcribeWorkerRef.current = null;
    transcriberKeyRef.current = "";
    transcriberReadyRef.current = null;
    readyRef.current = null;
  }

  function handleTranscriberFailure(message: string) {
    const state = useToolStore.getState();
    const wasBusy =
      state.stage === "extracting" || state.stage === "loading" || state.stage === "transcribing";
    rejectEverything(message);
    resetTranscriber();
    if (wasBusy) setError(message);
  }

  function runMediaWorker(request: MediaRequest, transfer: Transferable[]): Promise<ArrayBuffer> {
    const worker = new Worker(new URL("../workers/media.worker.ts", import.meta.url), {
      type: "module"
    });
    mediaWorkerRef.current = worker;
    return new Promise<ArrayBuffer>((resolve, reject) => {
      worker.onmessage = (event: MessageEvent<MediaResponse>) => {
        const message = event.data;
        if (message.type === "status") {
          setStage("extracting", message.message);
        } else if (message.type === "progress") {
          setProgress({ extraction: message.progress });
        } else if (message.type === "extracted") {
          worker.terminate();
          resolve(message.buffer);
        } else if (message.type === "error") {
          worker.terminate();
          reject(new Error(message.message));
        }
      };
      worker.onerror = (event) => reject(new Error(event.message || "The audio engine crashed."));
      worker.postMessage(request, transfer);
    });
  }

  function ensureTranscriber(resolvedDevice: "webgpu" | "wasm"): Promise<void> {
    const key = `${model}|${resolvedDevice}`;
    const existing = transcribeWorkerRef.current;
    if (existing && transcriberKeyRef.current === key && transcriberReadyRef.current) {
      const request: TranscribeRequest = {
        type: "init",
        model: modelRepos[model],
        language,
        task,
        device: resolvedDevice
      };
      existing.postMessage(request);
      return transcriberReadyRef.current;
    }

    resetTranscriber();
    transcriberKeyRef.current = key;

    const worker = new Worker(new URL("../workers/transcribe.worker.ts", import.meta.url), {
      type: "module"
    });
    transcribeWorkerRef.current = worker;
    worker.onmessage = (event: MessageEvent<TranscribeResponse>) => {
      const message = event.data;
      if (message.type === "status") {
        const currentStage = useToolStore.getState().stage;
        const active =
          currentStage === "extracting" ||
          currentStage === "loading" ||
          currentStage === "transcribing";
        if (message.status === "fallback" && active && currentStage !== "extracting") {
          setStage("loading", message.message);
        }
      } else if (message.type === "model-progress") {
        setProgress({ model: message.progress, modelFile: message.file });
      } else if (message.type === "ready") {
        setProgress({ model: 100 });
        readyRef.current?.resolve();
        readyRef.current = null;
      } else if (message.type === "result") {
        const pending = pendingRef.current.get(message.index);
        pendingRef.current.delete(message.index);
        pending?.resolve(message);
      } else if (message.type === "error") {
        handleTranscriberFailure(message.message);
      }
    };
    worker.onerror = (event) => {
      handleTranscriberFailure(event.message || "The transcription worker crashed.");
    };

    const promise = new Promise<void>((resolve, reject) => {
      readyRef.current = { resolve, reject };
      const request: TranscribeRequest = {
        type: "init",
        model: modelRepos[model],
        language,
        task,
        device: resolvedDevice
      };
      worker.postMessage(request);
    });
    transcriberReadyRef.current = promise;
    return promise;
  }

  function transcribeChunk(
    samples: Float32Array,
    offset: number,
    index: number
  ): Promise<Extract<TranscribeResponse, { type: "result" }>> {
    const worker = transcribeWorkerRef.current;
    if (!worker) return Promise.reject(new Error("The transcription worker is not running."));
    return new Promise((resolve, reject) => {
      pendingRef.current.set(index, { resolve, reject });
      const copy = samples.slice();
      const request: TranscribeRequest = { type: "transcribe", audio: copy, offset, index };
      worker.postMessage(request, [copy.buffer]);
    });
  }

  async function generate() {
    const source = sourceFileRef.current;
    if (!source) {
      setError("Choose a video or audio file first.");
      return;
    }
    cancelRef.current = false;
    if (warmupTimerRef.current) {
      clearTimeout(warmupTimerRef.current);
      warmupTimerRef.current = null;
    }
    setError(null);
    setSegments([]);
    pendingRef.current.clear();
    setProgress({ extraction: 0, model: 0, modelFile: "", transcription: 0, etaSeconds: 0 });

    try {
      setStage("extracting", "Extracting audio while the model loads in parallel.");
      const modelPromise = ensureTranscriber(resolveDevice());
      void modelPromise.catch(() => undefined);
      const buffer = await source.arrayBuffer();
      const wav = await runMediaWorker(
        { type: "extract", buffer, extension: describeFile(source).extension },
        [buffer]
      );
      if (cancelRef.current) return;
      setProgress({ extraction: 100 });
      const { samples } = decodeWav(wav);
      if (samples.length === 0) throw new Error("No audio was found in that file.");
      const chunks = chunkAudio(samples);
      if (chunks.length === 0) throw new Error("No audio was found in that file.");

      setStage("loading", "Finishing model setup. The audio is already extracted.");
      await modelPromise;
      if (cancelRef.current) return;

      setStage("transcribing", "Transcribing locally in your browser.");
      let accumulated: Segment[] = [];
      const started = performance.now();
      for (let index = 0; index < chunks.length; index += 1) {
        if (cancelRef.current) return;
        const chunk = chunks[index];
        if (!chunk) continue;
        const result = await transcribeChunk(chunk.samples, chunk.offset, index);
        if (cancelRef.current) return;
        const shifted = shiftChunkSegments(
          result.segments.map((segment, position) => ({
            id: `seg-${index}-${position + 1}`,
            start: segment.start,
            end: segment.end,
            text: segment.text
          })),
          result.offset
        );
        accumulated = mergeChunkResults(accumulated, shifted);
        setSegments(accumulated);
        const done = index + 1;
        const elapsed = (performance.now() - started) / 1000;
        setProgress({
          transcription: (done / chunks.length) * 100,
          etaSeconds: estimateRemainingSeconds(done, chunks.length, elapsed)
        });
      }

      if (!cancelRef.current) {
        setStage(
          "done",
          accumulated.length > 0
            ? "Finished. Review the cues, fix names, then export SRT, VTT or TXT."
            : "The model returned no speech. Try a larger model or check that the file has audible speech."
        );
      }
    } catch (caught) {
      if (cancelRef.current) return;
      const message = caught instanceof Error ? caught.message : String(caught);
      const friendly = /memory|allocation|out of bounds/i.test(message)
        ? "The browser ran out of memory while processing this file. Try a shorter clip, the Fast model, or a desktop browser."
        : /webgpu/i.test(message)
          ? "WebGPU failed on this device. Switch Device to WASM and try again."
          : message;
      setError(friendly);
    } finally {
      mediaWorkerRef.current?.terminate();
      mediaWorkerRef.current = null;
      pendingRef.current.clear();
    }
  }

  function cancel() {
    cancelRef.current = true;
    if (warmupTimerRef.current) {
      clearTimeout(warmupTimerRef.current);
      warmupTimerRef.current = null;
    }
    rejectEverything("Cancelled");
    mediaWorkerRef.current?.terminate();
    mediaWorkerRef.current = null;
    resetTranscriber();
    setProgress({ extraction: 0, model: 0, transcription: 0, etaSeconds: 0 });
    setStage("ready", "Cancelled. Your file is still loaded.");
  }

  function handleFile(next: File) {
    sourceFileRef.current = next;
    const url = URL.createObjectURL(next);
    setFile(describeFile(next), url, 0);
  }

  function handleClear() {
    sourceFileRef.current = null;
    clearFile();
  }

  const heading =
    preset === "video-to-text"
      ? "Turn video into text"
      : preset === "audio-to-srt"
        ? "Turn audio into SRT"
        : preset === "video-to-srt"
          ? "Turn video into SRT"
          : preset === "speech-to-text"
            ? "Speech to text, locally"
            : preset === "caption-generator"
              ? "Generate captions"
              : preset === "transcript-generator"
                ? "Generate a transcript"
                : "Generate subtitles";

  return (
    <section id="tool" aria-labelledby="tool-heading" className="scroll-mt-20">
      <div className="tool-frame rounded-2xl p-4 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 id="tool-heading" className="text-2xl font-bold">
              {heading}
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Runs Whisper in your browser. No upload, no account, no credit card.
            </p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100">
            Local-only processing
          </span>
        </div>

        <div className="mt-4 space-y-4">
          {!file ? (
            <FileDropzone onFile={handleFile} onError={setError} disabled={busy} />
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-3">
              <div className="min-w-0">
                <p className="truncate font-semibold">{file.name}</p>
                <p className="text-xs text-[var(--muted)]">
                  {(file.size / 1024 / 1024).toFixed(1)} MB · {file.extension.toUpperCase()} ·{" "}
                  {file.isVideo ? "video" : "audio"}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClear}
                disabled={busy}
                className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-semibold hover:bg-[var(--page)] disabled:opacity-50"
              >
                Choose another file
              </button>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <LanguageCombobox value={language} onChange={setLanguage} />
            <label className="block text-sm">
              <span className="mb-1 block font-semibold">Device</span>
              <select
                value={device}
                onChange={(event) => setDevice(event.target.value as "auto" | "webgpu" | "wasm")}
                className="w-full rounded-md border border-[var(--line)] bg-[var(--page)] px-3 py-2"
              >
                <option value="auto">Auto (WebGPU when available)</option>
                <option value="webgpu">WebGPU</option>
                <option value="wasm">WASM (most compatible)</option>
              </select>
              <span className="mt-1 block text-xs text-[var(--muted)]">
                {webgpu
                  ? "WebGPU is available in this browser."
                  : "This browser does not expose WebGPU; WASM will be used."}
              </span>
            </label>
          </div>

          <ModelSelect value={model} onChange={setModel} />

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={task === "translate"}
              onChange={(event) => setTask(event.target.checked ? "translate" : "transcribe")}
              className="mt-1"
            />
            <span>
              <strong>Translate speech to English</strong> — Whisper&apos;s translate task outputs
              English text. It is not a general subtitle translator.
            </span>
          </label>

          {error ? (
            <p
              role="alert"
              className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-100"
            >
              {error}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={generate}
              disabled={!file || busy}
              className="rounded-md bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {busy
                ? "Working locally…"
                : segments.length > 0
                  ? "Generate again"
                  : "Generate subtitles"}
            </button>
            {segments.length > 0 ? (
              <span className="text-sm text-[var(--muted)]">
                {segments.length} cues ready to edit and export.
              </span>
            ) : null}
          </div>

          <ProgressPanel
            stage={stage}
            message={statusMessage}
            model={progress.model}
            modelFile={progress.modelFile}
            extraction={progress.extraction}
            transcription={progress.transcription}
            etaSeconds={progress.etaSeconds}
            onCancel={cancel}
          />
        </div>
      </div>

      {file ? (
        <div className="output-frame mt-6 rounded-3xl p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-100">
                Output workspace
              </p>
              <p className="text-xs text-[var(--muted)]">
                Preview, edit and export without leaving this tab.
              </p>
            </div>
            <span className="rounded-full border border-[var(--line)] bg-[var(--page)] px-3 py-1 text-xs font-semibold">
              {segments.length > 0 ? `${segments.length} cues ready` : "Ready to transcribe"}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <PreviewPlayer rtl={rtl} />
            <div className="space-y-6">
              <SegmentEditor rtl={rtl} />
              <ExportBar />
            </div>
          </div>
        </div>
      ) : null}

      <p className="mt-4 text-xs text-[var(--muted)]">
        Limits: 500 MB per file; speech must be audible; Whisper can struggle with music,
        overlapping voices and very noisy recordings. VoiceToTextFree does not upload files or send
        audio to a paid API.
      </p>
    </section>
  );
}
