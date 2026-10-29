"use client";

import { formatDuration } from "@/lib/audio";
import type { ToolStage } from "@/lib/store";

interface Props {
  stage: ToolStage;
  message: string;
  model: number;
  modelFile: string;
  extraction: number;
  transcription: number;
  etaSeconds: number;
  onCancel: () => void;
  onRetry?: () => void;
}

const stageLabels: Record<ToolStage, string> = {
  idle: "Waiting for a file",
  ready: "Ready",
  extracting: "Extracting audio",
  loading: "Loading the model",
  transcribing: "Transcribing",
  done: "Finished",
  error: "Something went wrong"
};

function Bar({ label, value }: { label: string; value: number }) {
  const rounded = Math.round(value);
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span>{label}</span>
        <span>{rounded}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-[var(--line)]"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={rounded}
      >
        <div
          className="h-full rounded-full bg-brand-600 transition-[width]"
          style={{ width: `${rounded}%` }}
        />
      </div>
    </div>
  );
}

export function ProgressPanel({
  stage,
  message,
  model,
  modelFile,
  extraction,
  transcription,
  etaSeconds,
  onCancel,
  onRetry
}: Props) {
  if (stage === "idle" || stage === "ready") return null;
  const busy = stage === "extracting" || stage === "loading" || stage === "transcribing";
  const showExtraction =
    (stage === "extracting" || stage === "loading") && extraction > 0 && extraction < 100;
  const showModel =
    (stage === "extracting" || stage === "loading") &&
    (model > 0 || modelFile !== "") &&
    model < 100;
  return (
    <section
      aria-labelledby="progress-heading"
      aria-live="polite"
      className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="progress-heading" className="text-base font-bold">
          {stageLabels[stage]}
        </h2>
        {busy ? (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-semibold"
          >
            Cancel
          </button>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-[var(--muted)]">
        {message || "Working locally. You can leave this tab open; nothing is uploaded."}
      </p>
      <div className="mt-3 grid gap-3">
        {showExtraction ? <Bar label="Audio extraction" value={extraction} /> : null}
        {showModel ? (
          <>
            <Bar label="Model download" value={model} />
            {modelFile ? (
              <p className="text-xs text-[var(--muted)]">Downloading {modelFile}</p>
            ) : null}
          </>
        ) : null}
        {stage === "transcribing" ? (
          <>
            <Bar label="Transcription" value={transcription} />
            <p className="text-xs text-[var(--muted)]">
              {etaSeconds > 0
                ? `About ${formatDuration(etaSeconds)} remaining.`
                : "Estimating remaining time…"}
            </p>
          </>
        ) : null}
      </div>
      {stage === "error" ? (
        <div className="mt-3 rounded-md bg-red-50 p-3 dark:bg-red-950">
          <p className="text-sm text-red-900 dark:text-red-100">{message}</p>
          {onRetry ? (
            <button
              type="button"
              onClick={onRetry}
              className="mt-2 rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-red-700"
            >
              Retry download
            </button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
