"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { languages, languageByCode, popularLanguages, type Language } from "@/config/languages";

interface Props {
  value: string | null;
  onChange: (code: string | null) => void;
  id?: string;
}

interface Option {
  code: string | null;
  label: string;
  native: string;
  group: "Auto" | "Popular" | "All languages";
}

const autoOption: Option = {
  code: null,
  label: "Auto-detect language",
  native: "Whisper detects the spoken language",
  group: "Auto"
};

export function LanguageCombobox({ value, onChange, id }: Props) {
  const generatedId = useId();
  const inputId = id ?? `language-${generatedId}`;
  const listboxId = `${inputId}-listbox`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selected = value ? languageByCode.get(value) : null;
  const selectedLabel = selected
    ? `${selected.name} — ${selected.nativeName}`
    : "Auto-detect language";

  const options = useMemo<Option[]>(() => {
    const normalized = query.trim().toLocaleLowerCase();
    const matches = (language: Language) =>
      !normalized ||
      language.name.toLocaleLowerCase().includes(normalized) ||
      language.nativeName.toLocaleLowerCase().includes(normalized) ||
      language.code.toLocaleLowerCase().includes(normalized);

    const popular = popularLanguages.filter(matches).map<Option>((language) => ({
      code: language.code,
      label: language.name,
      native: language.nativeName,
      group: "Popular"
    }));
    const all = [...languages]
      .filter(matches)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map<Option>((language) => ({
        code: language.code,
        label: language.name,
        native: language.nativeName,
        group: "All languages"
      }));
    return [autoOption, ...popular, ...all];
  }, [query]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    setActiveIndex(0);
  }, [open, query]);

  function select(option: Option) {
    onChange(option.code);
    setOpen(false);
    setQuery("");
    inputRef.current?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) setOpen(true);
      else setActiveIndex((index) => Math.min(options.length - 1, index + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(0, index - 1));
    } else if (event.key === "Enter") {
      if (open) {
        event.preventDefault();
        const option = options[activeIndex];
        if (option) select(option);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
      setQuery("");
    } else if (event.key === "Home") {
      if (open) {
        event.preventDefault();
        setActiveIndex(0);
      }
    } else if (event.key === "End") {
      if (open) {
        event.preventDefault();
        setActiveIndex(options.length - 1);
      }
    }
  }

  const activeOption = options[activeIndex];

  return (
    <div ref={wrapperRef} className="relative">
      <label htmlFor={inputId} className="mb-1 block text-sm font-semibold">
        Spoken language
      </label>
      <input
        ref={inputRef}
        id={inputId}
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          open && activeOption ? `${listboxId}-option-${activeIndex}` : undefined
        }
        autoComplete="off"
        className="w-full rounded-md border border-[var(--line)] bg-[var(--page)] px-3 py-2 text-base"
        value={open ? query : selectedLabel}
        placeholder="Search 99 languages, for example Urdu or العربية"
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          setQuery("");
          setOpen(true);
        }}
        onKeyDown={onKeyDown}
      />
      <p className="mt-1 text-xs text-[var(--muted)]">
        Auto-detect works for clear speech; choosing the language is faster and safer for accents.
      </p>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Whisper languages"
          className="absolute z-30 mt-1 max-h-72 w-full overflow-auto rounded-md border border-[var(--line)] bg-[var(--page)] py-1 shadow-xl"
        >
          {options.map((option, index) => {
            const previous = options[index - 1];
            const showGroup = !previous || previous.group !== option.group;
            const isSelected = option.code === (value ?? null);
            return (
              <li key={`${option.group}-${option.code ?? "auto"}`} role="presentation">
                {showGroup ? (
                  <div className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
                    {option.group}
                  </div>
                ) : null}
                <div
                  id={`${listboxId}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  className={`cursor-pointer px-3 py-2 text-sm ${
                    index === activeIndex ? "bg-brand-50 dark:bg-brand-900/40" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => select(option)}
                >
                  <span className="font-medium">{option.label}</span>
                  {option.code ? (
                    <span
                      className="ml-2 text-[var(--muted)]"
                      dir={languageByCode.get(option.code)?.rtl ? "rtl" : "ltr"}
                    >
                      {option.native}
                    </span>
                  ) : (
                    <span className="ml-2 text-[var(--muted)]">{option.native}</span>
                  )}
                </div>
              </li>
            );
          })}
          {options.length === 1 ? (
            <li className="px-3 py-3 text-sm text-[var(--muted)]">
              No language matches that search.
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
}
