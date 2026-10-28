"use client";

import { useMemo, useRef, useState } from "react";
import { formatSrtTimestamp, parseTimestamp } from "@/lib/subtitles";
import { useToolStore } from "@/lib/store";
import type { Segment } from "@/lib/subtitles";

interface RowProps {
  segment: Segment;
  index: number;
  rtl: boolean;
}

function TimestampInput({
  label,
  value,
  onChange
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const [draft, setDraft] = useState(formatSrtTimestamp(value));
  const [error, setError] = useState(false);

  function commit() {
    try {
      const parsed = parseTimestamp(draft);
      setError(false);
      onChange(parsed);
    } catch {
      setError(true);
      setDraft(formatSrtTimestamp(value));
    }
  }

  return (
    <label className="block text-xs">
      <span className="mb-0.5 block font-medium text-[var(--muted)]">{label}</span>
      <input
        type="text"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onBlur={commit}
        onKeyDown={(event) => {
          if (event.key === "Enter") commit();
        }}
        className={`w-full rounded border bg-[var(--page)] px-2 py-1 font-mono text-xs ${
          error ? "border-red-500" : "border-[var(--line)]"
        }`}
        aria-invalid={error}
        aria-label={`${label} timestamp`}
        spellCheck={false}
      />
    </label>
  );
}

function SegmentRow({ segment, index, rtl }: RowProps) {
  const updateSegment = useToolStore((state) => state.updateSegment);
  const deleteSegment = useToolStore((state) => state.deleteSegment);
  const splitAt = useToolStore((state) => state.splitAt);
  const mergeWithNext = useToolStore((state) => state.mergeWithNext);
  const activeSegmentId = useToolStore((state) => state.activeSegmentId);
  const [cursor, setCursor] = useState(0);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const active = activeSegmentId === segment.id;

  return (
    <div
      className={`grid gap-2 rounded-lg border p-2 sm:grid-cols-[150px_1fr] ${
        active ? "border-brand-500 bg-brand-50/50 dark:bg-brand-900/20" : "border-[var(--line)]"
      }`}
      data-segment-index={index}
    >
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-1">
          <span className="text-xs font-semibold text-[var(--muted)]">Cue {index + 1}</span>
          <button
            type="button"
            className="rounded px-1.5 py-0.5 text-xs font-semibold text-brand-600 hover:bg-brand-50 dark:text-brand-100 dark:hover:bg-brand-900/40"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("voicetotextfree:seek", { detail: segment.start })
              )
            }
            aria-label={`Play from cue ${index + 1}`}
          >
            ▶ {formatSrtTimestamp(segment.start).slice(3, 8)}
          </button>
        </div>
        <TimestampInput
          label="Start"
          value={segment.start}
          onChange={(value) => updateSegment(segment.id, { start: value })}
        />
        <TimestampInput
          label="End"
          value={segment.end}
          onChange={(value) => updateSegment(segment.id, { end: value })}
        />
      </div>
      <div className="space-y-1">
        <label className="block text-xs">
          <span className="mb-0.5 block font-medium text-[var(--muted)]">Text</span>
          <textarea
            ref={textRef}
            value={segment.text}
            dir={rtl ? "rtl" : "ltr"}
            className={`min-h-16 w-full resize-y rounded border border-[var(--line)] bg-[var(--page)] px-2 py-1 text-base ${
              rtl ? "rtl-text" : ""
            }`}
            onChange={(event) => {
              updateSegment(segment.id, { text: event.target.value });
              setCursor(event.target.selectionStart);
            }}
            onSelect={(event) => setCursor(event.currentTarget.selectionStart)}
          />
        </label>
        <div className="flex flex-wrap gap-1">
          <button
            type="button"
            onClick={() => splitAt(segment.id, cursor)}
            className="rounded border border-[var(--line)] px-2 py-1 text-xs font-medium hover:bg-[var(--panel)]"
          >
            Split at cursor
          </button>
          <button
            type="button"
            onClick={() => mergeWithNext(segment.id)}
            className="rounded border border-[var(--line)] px-2 py-1 text-xs font-medium hover:bg-[var(--panel)]"
          >
            Merge next
          </button>
          <button
            type="button"
            onClick={() => deleteSegment(segment.id)}
            className="rounded border border-red-300 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-950"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const ROW_HEIGHT = 168;

export function SegmentEditor({ rtl }: { rtl: boolean }) {
  const segments = useToolStore((state) => state.segments);
  const addSegment = useToolStore((state) => state.addSegment);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const virtual = segments.length > 500;

  const windowed = useMemo(() => {
    if (!virtual) return { start: 0, end: segments.length };
    const visible = Math.ceil(560 / ROW_HEIGHT) + 4;
    const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 2);
    return { start, end: Math.min(segments.length, start + visible) };
  }, [scrollTop, segments.length, virtual]);

  if (segments.length === 0) return null;

  const rows = segments.slice(windowed.start, windowed.end);

  return (
    <section aria-labelledby="editor-heading" className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="editor-heading" className="text-base font-bold">
          Edit transcript ({segments.length} cues)
        </h2>
        <button
          type="button"
          onClick={addSegment}
          className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-semibold hover:bg-[var(--panel)]"
        >
          Add cue
        </button>
      </div>
      <p className="text-xs text-[var(--muted)]">
        Edit any text or timestamp. Tab moves between fields; changes are kept locally in this tab.
        {virtual ? " Large files use a windowed list; use the scrollbar to reach every cue." : ""}
      </p>
      {virtual ? (
        <div
          ref={scrollRef}
          className="h-[560px] overflow-auto rounded-lg border border-[var(--line)] p-2"
          onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
          role="region"
          aria-label="Transcript cues, virtualized"
        >
          <div style={{ height: segments.length * ROW_HEIGHT, position: "relative" }}>
            {rows.map((segment, offset) => (
              <div
                key={segment.id}
                style={{
                  position: "absolute",
                  top: (windowed.start + offset) * ROW_HEIGHT,
                  left: 0,
                  right: 0,
                  height: ROW_HEIGHT
                }}
                className="pr-1"
              >
                <SegmentRow segment={segment} index={windowed.start + offset} rtl={rtl} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {rows.map((segment, offset) => (
            <SegmentRow key={segment.id} segment={segment} index={offset} rtl={rtl} />
          ))}
        </div>
      )}
    </section>
  );
}
