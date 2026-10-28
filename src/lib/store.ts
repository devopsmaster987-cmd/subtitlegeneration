"use client";

import { create } from "zustand";
import {
  createSegment,
  mergeSegments,
  reindexSegments,
  shiftSegments,
  splitSegment,
  type Segment
} from "./subtitles";

export type ToolStage =
  | "idle"
  | "ready"
  | "extracting"
  | "loading"
  | "transcribing"
  | "done"
  | "error";

export type ModelChoice = "tiny" | "base" | "small";

export interface FileInfo {
  name: string;
  size: number;
  type: string;
  extension: string;
  isVideo: boolean;
}

export interface ToolProgress {
  extraction: number;
  model: number;
  modelFile: string;
  transcription: number;
  etaSeconds: number;
}

interface ToolState {
  stage: ToolStage;
  statusMessage: string;
  error: string | null;
  file: FileInfo | null;
  mediaUrl: string | null;
  duration: number;
  language: string | null;
  task: "transcribe" | "translate";
  model: ModelChoice;
  device: "auto" | "webgpu" | "wasm";
  progress: ToolProgress;
  segments: Segment[];
  activeSegmentId: string | null;
  currentTime: number;
  burnedUrl: string | null;
  setStage: (stage: ToolStage, message?: string) => void;
  setError: (message: string | null) => void;
  setFile: (file: FileInfo, mediaUrl: string, duration: number) => void;
  clearFile: () => void;
  setLanguage: (language: string | null) => void;
  setTask: (task: "transcribe" | "translate") => void;
  setModel: (model: ModelChoice) => void;
  setDevice: (device: "auto" | "webgpu" | "wasm") => void;
  setProgress: (progress: Partial<ToolProgress>) => void;
  setSegments: (segments: Segment[]) => void;
  appendSegments: (segments: Segment[]) => void;
  updateSegment: (id: string, patch: Partial<Omit<Segment, "id">>) => void;
  deleteSegment: (id: string) => void;
  splitAt: (id: string, position: number) => void;
  mergeWithNext: (id: string) => void;
  addSegment: () => void;
  shiftAll: (offsetMs: number) => void;
  setActiveSegment: (id: string | null) => void;
  setCurrentTime: (time: number) => void;
  setBurnedUrl: (url: string | null) => void;
  reset: () => void;
}

const initialProgress: ToolProgress = {
  extraction: 0,
  model: 0,
  modelFile: "",
  transcription: 0,
  etaSeconds: 0
};

export const useToolStore = create<ToolState>((set, get) => ({
  stage: "idle",
  statusMessage: "",
  error: null,
  file: null,
  mediaUrl: null,
  duration: 0,
  language: null,
  task: "transcribe",
  model: "base",
  device: "auto",
  progress: initialProgress,
  segments: [],
  activeSegmentId: null,
  currentTime: 0,
  burnedUrl: null,

  setStage: (stage, message = "") =>
    set({ stage, statusMessage: message, error: stage === "error" ? get().error : null }),
  setError: (message) => set({ error: message, stage: message ? "error" : get().stage }),
  setFile: (file, mediaUrl, duration) => {
    const previous = get().mediaUrl;
    if (previous) URL.revokeObjectURL(previous);
    set({
      file,
      mediaUrl,
      duration,
      stage: "ready",
      error: null,
      statusMessage: "Ready. Choose a language and generate subtitles.",
      segments: [],
      progress: initialProgress
    });
  },
  clearFile: () => {
    const previous = get().mediaUrl;
    if (previous) URL.revokeObjectURL(previous);
    const burned = get().burnedUrl;
    if (burned) URL.revokeObjectURL(burned);
    set({
      file: null,
      mediaUrl: null,
      duration: 0,
      stage: "idle",
      statusMessage: "",
      error: null,
      segments: [],
      progress: initialProgress,
      activeSegmentId: null,
      currentTime: 0,
      burnedUrl: null
    });
  },
  setLanguage: (language) => set({ language }),
  setTask: (task) => set({ task }),
  setModel: (model) => set({ model }),
  setDevice: (device) => set({ device }),
  setProgress: (progress) => set({ progress: { ...get().progress, ...progress } }),
  setSegments: (segments) => set({ segments }),
  appendSegments: (segments) => set({ segments: [...get().segments, ...segments] }),
  updateSegment: (id, patch) =>
    set({
      segments: get().segments.map((segment) =>
        segment.id === id ? { ...segment, ...patch } : segment
      )
    }),
  deleteSegment: (id) => set({ segments: get().segments.filter((segment) => segment.id !== id) }),
  splitAt: (id, position) => {
    const segments = get().segments;
    const index = segments.findIndex((segment) => segment.id === id);
    if (index === -1) return;
    const target = segments[index];
    if (!target) return;
    const result = splitSegment(target, position);
    if (!result) return;
    const next = [...segments];
    next.splice(index, 1, result.before, result.after);
    set({ segments: reindexSegments(next) });
  },
  mergeWithNext: (id) => {
    const segments = get().segments;
    const index = segments.findIndex((segment) => segment.id === id);
    if (index === -1 || index === segments.length - 1) return;
    const current = segments[index];
    const next = segments[index + 1];
    if (!current || !next) return;
    const merged = mergeSegments(current, next);
    const list = [...segments];
    list.splice(index, 2, merged);
    set({ segments: reindexSegments(list) });
  },
  addSegment: () => {
    const segments = get().segments;
    const last = segments[segments.length - 1];
    const start = last ? last.end + 200 : 0;
    set({ segments: [...segments, createSegment(start, start + 2000, "New cue")] });
  },
  shiftAll: (offsetMs) => set({ segments: shiftSegments(get().segments, offsetMs) }),
  setActiveSegment: (id) => set({ activeSegmentId: id }),
  setCurrentTime: (time) => {
    const segment = get().segments.find(
      (cue) => time >= cue.start / 1000 && time <= cue.end / 1000
    );
    if (segment?.id !== get().activeSegmentId) {
      set({ currentTime: time, activeSegmentId: segment?.id ?? get().activeSegmentId });
    } else {
      set({ currentTime: time });
    }
  },
  setBurnedUrl: (url) => {
    const previous = get().burnedUrl;
    if (previous && previous !== url) URL.revokeObjectURL(previous);
    set({ burnedUrl: url });
  },
  reset: () => {
    get().clearFile();
    set({ stage: "idle", statusMessage: "", error: null });
  }
}));
