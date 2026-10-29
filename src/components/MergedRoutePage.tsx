import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

/**
 * Static-export fallback for merged routes. Real 301/308 redirects are served
 * by the Cloudflare Worker (worker.ts) and vercel.json; this page covers other
 * hosts and lets browsers land on the right page via meta refresh.
 */
export interface MergedRoute {
  from: string;
  to: string;
  title: string;
}

export function MergedRoutePage({ route }: { route: MergedRoute }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <meta httpEquiv="refresh" content={`0; url=${route.to}`} />
      <h1 className="text-3xl font-extrabold">This page has moved</h1>
      <p className="mt-4">
        The page at <code>{route.from}</code> was merged into{" "}
        <Link className="underline font-semibold" href={route.to}>
          {route.title}
        </Link>
        . You are being redirected; otherwise use the link above.
      </p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Go back to the{" "}
        <Link className="underline" href="/">
          subtitle generator
        </Link>
        .
      </p>
    </article>
  );
}

export function mergedRouteMetadata(route: MergedRoute): Metadata {
  return {
    title: route.title,
    description: `This page was merged and redirects to ${route.title} on ${site.name}.`,
    alternates: { canonical: route.to },
    robots: { index: false, follow: true }
  };
}
