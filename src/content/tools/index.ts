import type { ToolPageContent } from "../types";
import { videoToSrt } from "./video-to-srt";
import { tool as videoToText } from "./video-to-text";
import { tool as audioToSrt } from "./audio-to-srt";
import { tool as speechToText } from "./speech-to-text";
import { tool as captionGenerator } from "./caption-generator";
import { tool as transcriptGenerator } from "./transcript-generator";
import { tool as offlineSubtitleGenerator } from "./offline-subtitle-generator";
import { tool as privateSubtitleGenerator } from "./private-subtitle-generator";
import { tool as srtEditor } from "./srt-editor";
import { tool as subtitleTimingEditor } from "./subtitle-timing-editor";
import { tool as mergeSplitSrt } from "./merge-split-srt";
import { tool as convertSrtToVtt } from "./convert-srt-to-vtt";
import { tool as subtitleReadingSpeedChecker } from "./subtitle-reading-speed-checker";
import { tool as subtitleValidator } from "./subtitle-validator";

const toolList: ToolPageContent[] = [
  videoToSrt,
  videoToText,
  audioToSrt,
  speechToText,
  captionGenerator,
  transcriptGenerator,
  offlineSubtitleGenerator,
  privateSubtitleGenerator,
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
  { href: "/video-to-text", label: "Video to text" },
  { href: "/speech-to-text", label: "Speech to text" },
  { href: "/caption-generator", label: "Caption generator" },
  { href: "/transcript-generator", label: "Transcript generator" },
  { href: "/srt-editor", label: "SRT editor" },
  { href: "/subtitle-validator", label: "Subtitle validator" },
  { href: "/convert-srt-to-vtt", label: "Convert SRT to VTT" },
  { href: "/subtitle-timing-editor", label: "Timing editor" },
  { href: "/merge-split-srt", label: "Merge/split SRT" },
  { href: "/subtitle-reading-speed-checker", label: "Reading speed checker" },
  { href: "/offline-subtitle-generator", label: "Offline subtitle generator" },
  { href: "/private-subtitle-generator", label: "Private subtitle generator" }
];
