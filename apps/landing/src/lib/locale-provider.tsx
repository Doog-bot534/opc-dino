"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dicts, type Dict, type Locale } from "@/i18n";

const STORAGE_KEY = "opcdino-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: Dict;
};

const LocaleCtx = createContext<LocaleContextValue | null>(null);

/**
 * LocaleProvider — wraps the page and supplies the active locale.
 *
 * Hydration order:
 *   1. Server reads `?lang=` and renders with that initial locale.
 *   2. Client mounts and checks localStorage — if it differs, it switches.
 *      (URL stays as the user set it last; server-passed lang loses to localStorage.)
 *   3. Subsequent toggles update both localStorage and the URL via history.replaceState.
 */
export function LocaleProvider({
  initial,
  children,
}: {
  initial: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initial);

  // Sync from localStorage on mount (overrides initial if user has a preference).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "zh") {
      if (stored !== locale) setLocaleState(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update <html lang> whenever locale changes.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, l);
    const url = new URL(window.location.href);
    if (l === "zh") {
      url.searchParams.set("lang", "zh");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", url.toString());
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "zh" : "en");
  }, [locale, setLocale]);

  const value: LocaleContextValue = {
    locale,
    setLocale,
    toggle,
    t: dicts[locale],
  };

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}
