"use client";

import { useRef, useState } from "react";
import type { FileInfo } from "@/lib/store";

const MAX_BYTES = 500 * 1024 * 1024;
const VIDEO_EXTENSIONS = ["mp4", "mov", "webm", "m4v", "ogv", "mkv"];
const AUDIO_EXTENSIONS = ["mp3", "wav", "m4a", "aac", "ogg", "oga", "flac", "opus", "wma"];

export function extensionOf(name: string): string {
  const match = name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return match?.[1] ?? "";
}

export function describeFile(file: File): FileInfo {
  const extension = extensionOf(file.name);
  const isVideo = file.type.startsWith("video/") || VIDEO_EXTENSIONS.includes(extension);
  return { name: file.name, size: file.size, type: file.type, extension, isVideo };
}

interface Props {
  onFile: (file: File) => void;
  onError: (message: string) => void;
  disabled?: boolean;
}

export function FileDropzone({ onFile, onError, disabled }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function validate(file: File): boolean {
    const extension = extensionOf(file.name);
    const supported = [...VIDEO_EXTENSIONS, ...AUDIO_EXTENSIONS].includes(extension);
    if (!supported) {
      onError(
        `“${file.name}” is not a supported file type. Use MP4, MOV, WEBM, MP3, WAV or M4A (other common audio and video containers usually work too).`
      );
      return false;
    }
    if (file.size > MAX_BYTES) {
      onError(
        `“${file.name}” is ${(file.size / 1024 / 1024).toFixed(0)} MB. The browser version is limited to 500 MB; trim or compress the file first.`
      );
      return false;
    }
    if (file.size === 0) {
      onError("That file is empty. Choose a file that contains audio.");
      return false;
    }
    return true;
  }

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    if (!validate(file)) return;
    onFile(file);
  }

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Choose or drop a video or audio file"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          if (!disabled) handleFiles(event.dataTransfer.files);
        }}
        className={`rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
          dragging ? "border-brand-500 bg-brand-50/60 dark:bg-brand-900/30" : "border-[var(--line)]"
        } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:border-brand-500"}`}
      >
        <p className="text-base font-semibold">Choose a video or audio file</p>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Drop it here, or click to browse. MP4, MOV, WEBM, MP3, WAV, M4A and similar formats.
        </p>
        <p className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100">
          Your file never leaves your device
        </p>
        <p className="mt-2 text-xs text-[var(--muted)]">
          Up to 500 MB. Files over 100 MB can be slow on phones.
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="video/*,audio/*,.mkv,.m4a,.m4v,.oga,.opus,.wma"
          className="sr-only"
          disabled={disabled}
          onChange={(event) => {
            handleFiles(event.target.files);
            event.target.value = "";
          }}
        />
      </div>
      <p className="mt-2 text-xs text-[var(--muted)]">
        Only transcribe media you own or have permission to use. VoiceToTextFree does not download
        media from other sites.
      </p>
    </div>
  );
}
