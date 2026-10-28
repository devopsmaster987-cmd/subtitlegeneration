"use client";

import { useEffect, useRef, useState } from "react";
import { useToolStore } from "@/lib/store";
import { downloadText, toPlainTimedText, toSrt, toTxt, toVtt } from "@/lib/subtitles";
import type { MediaRequest, MediaResponse } from "@/workers/media.worker";

function baseName(name: string): string {
  return (name.replace(/\.[^.]+$/, "") || "subtitles")
    .replace(/[^\p{L}\p{N}_-]+/gu, "-")
    .slice(0, 60);
}

function exportSrt(): void {
  const state = useToolStore.getState();
  if (!state.file || state.segments.length === 0) return;
  downloadText(`${baseName(state.file.name)}.srt`, toSrt(state.segments), "application/x-subrip");
}

export function ExportBar() {
  const segments = useToolStore((state) => state.segments);
  const file = useToolStore((state) => state.file);
  const mediaUrl = useToolStore((state) => state.mediaUrl);
  const burnedUrl = useToolStore((state) => state.burnedUrl);
  const setBurnedUrl = useToolStore((state) => state.setBurnedUrl);
  const [burning, setBurning] = useState(false);
  const [burnProgress, setBurnProgress] = useState(0);
  const [burnError, setBurnError] = useState<string | null>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        exportSrt();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  if (!file || segments.length === 0) return null;
  const name = baseName(file.name);

  async function burn() {
    if (!mediaUrl || !file?.isVideo) return;
    setBurnError(null);
    setBurning(true);
    setBurnProgress(0);
    const worker = new Worker(new URL("../workers/media.worker.ts", import.meta.url), {
      type: "module"
    });
    workerRef.current = worker;
    worker.onmessage = (event: MessageEvent<MediaResponse>) => {
      const message = event.data;
      if (message.type === "progress") setBurnProgress(message.progress);
      else if (message.type === "burned") {
        const blob = new Blob([message.buffer], {
          type: message.extension === "webm" ? "video/webm" : "video/mp4"
        });
        setBurnedUrl(URL.createObjectURL(blob));
        setBurning(false);
        setBurnProgress(100);
        worker.terminate();
        workerRef.current = null;
      } else if (message.type === "error") {
        setBurnError(message.message);
        setBurning(false);
        worker.terminate();
        workerRef.current = null;
      }
    };
    try {
      const buffer = await (await fetch(mediaUrl)).arrayBuffer();
      const request: MediaRequest = {
        type: "burn",
        buffer,
        extension: file.extension,
        subtitles: toSrt(segments),
        fontSize: 22,
        marginBottom: 32
      };
      worker.postMessage(request, [buffer]);
    } catch (error) {
      setBurnError(error instanceof Error ? error.message : String(error));
      setBurning(false);
    }
  }

  return (
    <section aria-labelledby="export-heading" className="space-y-3">
      <h2 id="export-heading" className="text-base font-bold">
        Export
      </h2>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => downloadText(`${name}.srt`, toSrt(segments), "application/x-subrip")}
          className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Download SRT
        </button>
        <button
          type="button"
          onClick={() => downloadText(`${name}.vtt`, toVtt(segments), "text/vtt")}
          className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold hover:bg-[var(--panel)]"
        >
          Download VTT
        </button>
        <button
          type="button"
          onClick={() => downloadText(`${name}.txt`, toTxt(segments), "text/plain")}
          className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold hover:bg-[var(--panel)]"
        >
          Download TXT
        </button>
        <button
          type="button"
          onClick={() =>
            downloadText(`${name}-timed.txt`, toPlainTimedText(segments), "text/plain")
          }
          className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold hover:bg-[var(--panel)]"
        >
          TXT with timestamps
        </button>
      </div>
      <p className="text-xs text-[var(--muted)]">Keyboard shortcut: Ctrl/Cmd + S downloads SRT.</p>

      {file.isVideo ? (
        <div className="rounded-lg border border-[var(--line)] p-3">
          <h3 className="text-sm font-bold">Burn subtitles into the video</h3>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Optional. Re-encodes the video in your browser with ffmpeg.wasm, so a long clip can take
            a while and use a lot of memory. The rest of the page still works if your device cannot
            finish this step.
          </p>
          <button
            type="button"
            onClick={burn}
            disabled={burning}
            className="mt-2 rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold hover:bg-[var(--panel)] disabled:opacity-60"
          >
            {burning
              ? `Burning… ${Math.round(burnProgress)}%`
              : "Create video with burned-in subtitles"}
          </button>
          {burnError ? (
            <p className="mt-2 text-sm text-red-700 dark:text-red-300">
              Burn-in failed: {burnError}
            </p>
          ) : null}
          {burnedUrl ? (
            <p className="mt-2 text-sm">
              <a
                href={burnedUrl}
                download={`${name}-subtitled.mp4`}
                className="font-semibold text-brand-600 underline dark:text-brand-100"
              >
                Download the subtitled video
              </a>
            </p>
          ) : null}
        </div>
      ) : (
        <p className="text-xs text-[var(--muted)]">
          Burn-in needs a video file. For audio, download the SRT and pair it with the video in your
          editor.
        </p>
      )}
    </section>
  );
}
