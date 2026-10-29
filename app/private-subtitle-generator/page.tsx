import type { Metadata } from "next";
import {
  MergedRoutePage,
  mergedRouteMetadata,
  type MergedRoute
} from "@/components/MergedRoutePage";

const route: MergedRoute = {
  from: "/private-subtitle-generator",
  to: "/",
  title: "Subtitle generator"
};

export const metadata: Metadata = mergedRouteMetadata(route);

export default function Page() {
  return <MergedRoutePage route={route} />;
}
