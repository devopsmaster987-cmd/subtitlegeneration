import type { Metadata } from "next";
import Link from "next/link";
import { Tool } from "@/components/Tool";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Studio: ad-free subtitle generator",
  description: "An ad-free version of the VoiceToTextFree tool for focused editing.",
  path: "/studio",
  noindex: true
});

export default function StudioPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Studio: ad-free generator</h1>
      <p className="mt-2 max-w-3xl">
        This route carries no advertising and no ad script. It uses the same local Whisper pipeline
        as the main tool. Isolation headers for multi-thread ffmpeg are scoped to this path in the
        deployment config; the single-thread build remains the default so the tool works on hosts
        without isolation.
      </p>
      <div className="mt-6">
        <Tool />
      </div>
      <p className="mt-6 text-sm text-[var(--muted)]">
        Back to the{" "}
        <Link className="underline" href="/">
          main generator
        </Link>{" "}
        or the{" "}
        <Link className="underline" href="/guides">
          guides
        </Link>
        .
      </p>
    </div>
  );
}
