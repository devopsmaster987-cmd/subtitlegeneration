import { Breadcrumbs } from "./Breadcrumbs";
import { AuthorBox } from "./AuthorBox";

export function LegalPage({
  title,
  updated,
  children
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: title, href: "#" }]} />
      <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Last updated <time dateTime={updated}>{updated}</time>
      </p>
      <div className="prose-content mt-6">{children}</div>
      <AuthorBox updated={updated} />
    </article>
  );
}
