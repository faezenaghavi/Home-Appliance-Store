import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { en } from "./en";
import { fa } from "./fa";

export type Language = "en" | "fa";

const translations = { en, fa };

export function useTranslation(lang: Language) {
  return translations[lang];
}

export type TranslationType = typeof en;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationType;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  }, []);

  const t = translations[lang];
  const isRTL = lang === "fa";

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isRTL }}>
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
