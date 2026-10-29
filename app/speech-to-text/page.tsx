import type { Metadata } from "next";
import {
  MergedRoutePage,
  mergedRouteMetadata,
  type MergedRoute
} from "@/components/MergedRoutePage";

const route: MergedRoute = {
  from: "/speech-to-text",
  to: "/audio-to-srt",
  title: "Audio to SRT"
};

export const metadata: Metadata = mergedRouteMetadata(route);

export default function Page() {
  return <MergedRoutePage route={route} />;
}
