"use client";

import { useEffect, useRef } from "react";
import { useToolStore } from "@/lib/store";

export function PreviewPlayer({ rtl }: { rtl: boolean }) {
  const mediaUrl = useToolStore((state) => state.mediaUrl);
  const file = useToolStore((state) => state.file);
  const segments = useToolStore((state) => state.segments);
  const activeSegmentId = useToolStore((state) => state.activeSegmentId);
  const setCurrentTime = useToolStore((state) => state.setCurrentTime);
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);
  const active = segments.find((segment) => segment.id === activeSegmentId) ?? null;

  useEffect(() => {
    function seek(event: Event) {
      const detail = (event as CustomEvent<number>).detail;
      const media = mediaRef.current;
      if (media && Number.isFinite(detail)) {
        media.currentTime = Math.max(0, detail / 1000);
        setCurrentTime(media.currentTime);
      }
    }
    function toggle() {
      const media = mediaRef.current;
      if (!media) return;
      if (media.paused) void media.play();
      else media.pause();
    }
    window.addEventListener("voicetotextfree:seek", seek);
    window.addEventListener("voicetotextfree:toggle-play", toggle);
    return () => {
      window.removeEventListener("voicetotextfree:seek", seek);
      window.removeEventListener("voicetotextfree:toggle-play", toggle);
    };
  }, [setCurrentTime]);

  if (!mediaUrl || !file) return null;

  return (
    <section aria-labelledby="preview-heading" className="space-y-2">
      <h2 id="preview-heading" className="text-base font-bold">
        Preview
      </h2>
      <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-black">
        {file.isVideo ? (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={mediaUrl}
            controls
            playsInline
            preload="metadata"
            className="max-h-[420px] w-full"
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          >
            Your browser cannot play this video. The transcript and exports still work.
          </video>
        ) : (
          <div className="p-4">
            <audio
              ref={mediaRef as React.RefObject<HTMLAudioElement>}
              src={mediaUrl}
              controls
              preload="metadata"
              className="w-full"
              onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            >
              Your browser cannot play this audio. The transcript and exports still work.
            </audio>
          </div>
        )}
        {active ? (
          <div
            className={`pointer-events-none absolute inset-x-3 bottom-16 rounded bg-black/75 px-3 py-2 text-center text-lg font-semibold text-white ${
              rtl ? "rtl-text" : ""
            }`}
            dir={rtl ? "rtl" : "ltr"}
          >
            {active.text}
          </div>
        ) : null}
      </div>
      <p className="text-xs text-[var(--muted)]">
        Press Space to play or pause. Click a cue&apos;s time button in the editor to jump to it.
      </p>
    </section>
  );
}
