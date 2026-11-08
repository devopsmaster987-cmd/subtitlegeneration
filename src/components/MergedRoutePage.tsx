import type { Metadata } from "next";
import Link from "next/link";
import { ogImage, twitterImage } from "@/lib/og-image";
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
  const description = `This page was merged and redirects to ${route.title} on ${site.name}.`;
  return {
    title: route.title,
    description,
    alternates: { canonical: route.to },
    robots: { index: false, follow: true },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en",
      title: `${route.title} | ${site.name}`,
      description,
      url: route.to,
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: `${route.title} | ${site.name}`,
      description,
      images: [twitterImage]
    }
  };
}
