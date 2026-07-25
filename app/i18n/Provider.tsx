"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Locale, defaultLocale, localeDirections } from "./config";
import { Dictionary, getDictionary } from "./dictionary";

interface I18nContextType {
  locale: Locale;
  direction: "rtl" | "ltr";
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  initialLocale = defaultLocale,
  initialDictionary,
}: {
  children: ReactNode;
  initialLocale?: Locale;
  initialDictionary: Dictionary;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [dictionary, setDictionary] = useState<Dictionary>(initialDictionary);

  const setLocale = useCallback(async (newLocale: Locale) => {
    setLocaleState(newLocale);
    const newDict = await getDictionary(newLocale);
    setDictionary(newDict);
    document.documentElement.dir = localeDirections[newLocale];
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      let value: unknown = dictionary;
      for (const k of keys) {
        if (
          value !== null &&
          typeof value === "object" &&
          Object.prototype.hasOwnProperty.call(value, k)
        ) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      return typeof value === "string" ? value : key;
    },
    [dictionary]
  );

  return (
    <I18nContext.Provider
      value={{
        locale,
        direction: localeDirections[locale],
        dictionary,
        setLocale,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
