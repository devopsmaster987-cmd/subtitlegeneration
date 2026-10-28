import Link from "next/link";
import { site } from "@/config/site";
import { ConsentSettingsButton } from "./ConsentSettingsButton";

const columns = [
  {
    title: "Tool",
    links: [
      { href: "/", label: "Subtitle generator" },
      { href: "/video-to-srt", label: "Video to SRT" },
      { href: "/audio-to-srt", label: "Audio to SRT" },
      { href: "/video-to-text", label: "Video to text" },
      { href: "/speech-to-text", label: "Speech to text" },
      { href: "/caption-generator", label: "Caption generator" },
      { href: "/transcript-generator", label: "Transcript generator" }
    ]
  },
  {
    title: "Edit subtitles",
    links: [
      { href: "/srt-editor", label: "SRT editor" },
      { href: "/subtitle-timing-editor", label: "Timing editor" },
      { href: "/merge-split-srt", label: "Merge or split SRT" },
      { href: "/convert-srt-to-vtt", label: "Convert SRT to VTT" },
      { href: "/subtitle-reading-speed-checker", label: "Reading speed checker" },
      { href: "/subtitle-validator", label: "Subtitle validator" },
      { href: "/offline-subtitle-generator", label: "Offline generator" },
      { href: "/private-subtitle-generator", label: "Private generator" }
    ]
  },
  {
    title: "Learn",
    links: [
      { href: "/guides", label: "All guides" },
      { href: "/guides/srt-vs-vtt", label: "SRT vs VTT" },
      { href: "/guides/how-to-sync-subtitles", label: "Sync subtitles" },
      { href: "/guides/subtitle-best-practices", label: "Best practices" },
      { href: "/guides/subtitle-glossary", label: "Subtitle glossary" },
      { href: "/languages", label: "All languages" },
      { href: "/html-sitemap", label: "Site map" }
    ]
  },
  {
    title: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/cookie-policy", label: "Cookie policy" },
      { href: "/terms", label: "Terms of use" },
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/corrections", label: "Corrections log" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => (
          <section
            key={column.title}
            aria-labelledby={`footer-${column.title.replace(/\s+/g, "-")}`}
          >
            <h2
              id={`footer-${column.title.replace(/\s+/g, "-")}`}
              className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--muted)]"
            >
              {column.title}
            </h2>
            <ul className="space-y-1.5 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.name} processes audio in your browser. Only transcribe media you have the right to
            use.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ConsentSettingsButton />
            <a href={`mailto:${site.contactEmail}`} className="hover:underline">
              {site.contactEmail}
            </a>
            <span>
              © {new Date().getFullYear()} {site.name} ·{" "}
              <Link href="/about" className="hover:underline">
                Built and maintained by {site.author.name}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
