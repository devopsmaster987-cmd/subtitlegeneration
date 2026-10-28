import type { GuideContent } from "../types";
import { srtVsVtt } from "./srt-vs-vtt";
import { guide as whatIsAnSrtFile } from "./what-is-an-srt-file";
import { guide as whatIsAVttFile } from "./what-is-a-vtt-file";
import { guide as howToOpenAnSrtFile } from "./how-to-open-an-srt-file";
import { guide as howToCreateAndEditAnSrtFile } from "./how-to-create-and-edit-an-srt-file";
import { guide as srtNotWorking } from "./srt-not-working-subtitles-not-showing";
import { guide as howToSyncSubtitles } from "./how-to-sync-subtitles";
import { guide as howToAddSubtitlesToYoutubeShorts } from "./how-to-add-subtitles-to-youtube-shorts";
import { guide as howToAddCaptionsToReels } from "./how-to-add-captions-to-reels";
import { guide as howToAddSubtitlesToTiktok } from "./how-to-add-subtitles-to-tiktok";
import { guide as importSrtIntoVideoEditors } from "./import-srt-into-video-editors";
import { guide as howToBurnSubtitlesIntoVideo } from "./how-to-burn-subtitles-into-video";
import { guide as howToImproveWhisperAccuracy } from "./how-to-improve-whisper-accuracy";
import { guide as whisperModelSizesCompared } from "./whisper-model-sizes-compared";
import { guide as howDoesWhisperWork } from "./how-does-whisper-work";
import { guide as subtitleLineLength } from "./subtitle-line-length";
import { guide as subtitleReadingSpeed } from "./subtitle-reading-speed";
import { guide as subtitleBestPractices } from "./subtitle-best-practices";
import { guide as subtitleTimingGuidelines } from "./subtitle-timing-guidelines";
import { guide as netflixSubtitleGuidelines } from "./netflix-subtitle-guidelines";
import { guide as isBrowserTranscriptionPrivate } from "./is-browser-transcription-private";
import { guide as howToTranslateSubtitles } from "./how-to-translate-subtitles-into-another-language";
import { guide as rtlAndNonLatinSubtitles } from "./rtl-and-non-latin-subtitles";
import { guide as closedCaptionsVsSubtitles } from "./closed-captions-vs-subtitles";
import { guide as subtitlesForAccessibility } from "./subtitles-for-accessibility";
import { guide as subtitleAndCaptioningWorkflow } from "./subtitle-and-captioning-workflow";
import { guide as wordAlignedAndStyledCaptions } from "./word-aligned-and-styled-captions";
import { guide as subtitleGlossary } from "./subtitle-glossary";

const guideList: GuideContent[] = [
  srtVsVtt,
  whatIsAnSrtFile,
  whatIsAVttFile,
  howToOpenAnSrtFile,
  howToCreateAndEditAnSrtFile,
  srtNotWorking,
  howToSyncSubtitles,
  howToAddSubtitlesToYoutubeShorts,
  howToAddCaptionsToReels,
  howToAddSubtitlesToTiktok,
  importSrtIntoVideoEditors,
  howToBurnSubtitlesIntoVideo,
  howToImproveWhisperAccuracy,
  whisperModelSizesCompared,
  howDoesWhisperWork,
  subtitleLineLength,
  subtitleReadingSpeed,
  subtitleBestPractices,
  subtitleTimingGuidelines,
  netflixSubtitleGuidelines,
  isBrowserTranscriptionPrivate,
  howToTranslateSubtitles,
  rtlAndNonLatinSubtitles,
  closedCaptionsVsSubtitles,
  subtitlesForAccessibility,
  subtitleAndCaptioningWorkflow,
  wordAlignedAndStyledCaptions,
  subtitleGlossary
];

export const guides = [...guideList].sort((a, b) => a.path.localeCompare(b.path));

export const guideBySlug = new Map(
  guides.map((guide) => [guide.path.replace("/guides/", ""), guide])
);

export function getGuide(slug: string): GuideContent | undefined {
  return guideBySlug.get(slug);
}
