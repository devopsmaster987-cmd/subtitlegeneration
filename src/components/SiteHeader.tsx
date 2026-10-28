"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/languages", label: "Languages" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const toolLinks = [
  { href: "/video-to-srt", label: "Video to SRT" },
  { href: "/audio-to-srt", label: "Audio to SRT" },
  { href: "/srt-editor", label: "SRT editor" },
  { href: "/subtitle-validator", label: "Validator" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--page)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold"
          aria-label="VoiceToTextFree home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm text-white">
            VT
          </span>
          <span className="text-base sm:text-lg">VoiceToTextFree</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--panel)] ${
                  active ? "text-brand-600 dark:text-brand-100" : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#tool"
            className="ml-2 rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Open the tool
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-semibold"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--line)] px-4 pb-4 md:hidden"
        >
          <ul className="grid gap-1 py-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[var(--panel)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {toolLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base hover:bg-[var(--panel)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#tool"
                className="mt-1 block rounded-md bg-brand-600 px-3 py-2 text-center font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Open the tool
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
