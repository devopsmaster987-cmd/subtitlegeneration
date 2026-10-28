import Link from "next/link";
import { site } from "@/config/site";

export function AuthorBox({ updated, published }: { updated: string; published?: string }) {
  return (
    <div className="mt-10 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 text-sm">
      <p>
        <strong>{site.author.name}</strong> — {site.author.role}.{" "}
        <Link href="/about" className="underline">
          About {site.author.name}
        </Link>
        .
      </p>
      <p className="mt-1 text-[var(--muted)]">
        Last updated <time dateTime={updated}>{formatDate(updated)}</time>
        {published ? (
          <>
            {" "}
            · Published <time dateTime={published}>{formatDate(published)}</time>
          </>
        ) : null}
      </p>
    </div>
  );
}

export function formatDate(value: string): string {
  try {
    return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(
      new Date(`${value}T12:00:00Z`)
    );
  } catch {
    return value;
  }
}
