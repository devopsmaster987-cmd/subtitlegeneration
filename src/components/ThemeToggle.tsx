"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem("voicetotextfree-theme", theme);
  } catch {
    /* storage may be unavailable in private mode */
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (() => {
      try {
        return localStorage.getItem("voicetotextfree-theme") as Theme | null;
      } catch {
        return null;
      }
    })();
    const initial =
      stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    setMounted(true);
    applyTheme(initial);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-medium hover:bg-[var(--panel)]"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      suppressHydrationWarning
    >
      <span aria-hidden="true">{mounted && theme === "dark" ? "Light" : "Dark"}</span>
      <span className="sr-only"> mode</span>
    </button>
  );
}
