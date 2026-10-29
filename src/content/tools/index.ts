import type { ToolPageContent } from "../types";
import { videoToSrt } from "./video-to-srt";
import { tool as audioToSrt } from "./audio-to-srt";
import { tool as srtEditor } from "./srt-editor";
import { tool as subtitleTimingEditor } from "./subtitle-timing-editor";
import { tool as mergeSplitSrt } from "./merge-split-srt";
import { tool as convertSrtToVtt } from "./convert-srt-to-vtt";
import { tool as subtitleReadingSpeedChecker } from "./subtitle-reading-speed-checker";
import { tool as subtitleValidator } from "./subtitle-validator";

const toolList: ToolPageContent[] = [
  videoToSrt,
  audioToSrt,
  srtEditor,
  subtitleTimingEditor,
  mergeSplitSrt,
  convertSrtToVtt,
  subtitleReadingSpeedChecker,
  subtitleValidator
];

export const toolPages = [...toolList].sort((a, b) => a.path.localeCompare(b.path));

export const toolByPath = new Map(toolPages.map((page) => [page.path, page]));

export function getToolPage(path: string): ToolPageContent | undefined {
  return toolByPath.get(path);
}

export const relatedToolLinks = [
  { href: "/video-to-srt", label: "Video to SRT" },
  { href: "/audio-to-srt", label: "Audio to SRT" },
  { href: "/srt-editor", label: "SRT editor" },
  { href: "/subtitle-validator", label: "Subtitle validator" },
  { href: "/convert-srt-to-vtt", label: "Convert SRT to VTT" },
  { href: "/subtitle-timing-editor", label: "Timing editor" },
  { href: "/merge-split-srt", label: "Merge/split SRT" },
  { href: "/subtitle-reading-speed-checker", label: "Reading speed checker" }
];
