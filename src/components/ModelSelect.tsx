"use client";

import { models } from "@/data/models";
import type { ModelChoice } from "@/lib/store";

interface Props {
  value: ModelChoice;
  onChange: (id: ModelChoice) => void;
}

export function ModelSelect({ value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="mb-1 text-sm font-semibold">Model</legend>
      <div className="grid gap-2 sm:grid-cols-3">
        {models.map((model) => {
          const checked = model.id === value;
          return (
            <label
              key={model.id}
              className={`flex h-full cursor-pointer items-start gap-3 rounded-lg border p-3 ${
                checked
                  ? "border-brand-500 bg-brand-50/60 dark:bg-brand-900/30"
                  : "border-[var(--line)]"
              }`}
            >
              <input
                type="radio"
                name="whisper-model"
                value={model.id}
                checked={checked}
                onChange={() => onChange(model.id as ModelChoice)}
                className="mt-1"
              />
              <span>
                <span className="flex flex-wrap items-baseline gap-2">
                  <span className="font-semibold">{model.label}</span>
                  <span className="text-xs text-[var(--muted)]">
                    {model.repo} · about {model.wasmDownloadMb} MB (WASM)
                  </span>
                </span>
                <span className="mt-1 block text-sm text-[var(--muted)]">{model.description}</span>
              </span>
            </label>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-[var(--muted)]">
        The first run downloads the model once and stores it in your browser cache. WebGPU uses
        larger fp16 weights; WASM uses smaller quantized weights.
      </p>
    </fieldset>
  );
}
