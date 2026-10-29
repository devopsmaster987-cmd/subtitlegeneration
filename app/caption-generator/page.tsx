import type { Metadata } from "next";
import {
  MergedRoutePage,
  mergedRouteMetadata,
  type MergedRoute
} from "@/components/MergedRoutePage";

const route: MergedRoute = {
  from: "/caption-generator",
  to: "/video-to-srt",
  title: "Video to SRT"
};

export const metadata: Metadata = mergedRouteMetadata(route);

export default function Page() {
  return <MergedRoutePage route={route} />;
}
