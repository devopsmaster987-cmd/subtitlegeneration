import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-100">
        404
      </p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">That page does not exist</h1>
      <p className="mt-3 text-lg">
        The link may be old or mistyped. The tool still works, and these pages are the usual
        destinations:
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        <li className="rounded-lg border border-[var(--line)] p-3">
          <Link className="font-semibold underline" href="/#tool">
            Subtitle generator
          </Link>
          <p className="text-sm text-[var(--muted)]">Generate and edit subtitles locally.</p>
        </li>
        <li className="rounded-lg border border-[var(--line)] p-3">
          <Link className="font-semibold underline" href="/guides">
            Subtitle guides
          </Link>
          <p className="text-sm text-[var(--muted)]">Formats, timing, accuracy and platforms.</p>
        </li>
        <li className="rounded-lg border border-[var(--line)] p-3">
          <Link className="font-semibold underline" href="/srt-editor">
            SRT editor
          </Link>
          <p className="text-sm text-[var(--muted)]">Open an existing SRT or VTT file.</p>
        </li>
        <li className="rounded-lg border border-[var(--line)] p-3">
          <Link className="font-semibold underline" href="/languages">
            Languages
          </Link>
          <p className="text-sm text-[var(--muted)]">All 99 Whisper languages.</p>
        </li>
      </ul>
    </div>
  );
}
