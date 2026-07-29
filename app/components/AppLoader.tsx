"use client";

import { createContext, useContext, useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/app/i18n/Provider";
import {
  MOTION_EASE,
  SPLASH_MIN_MS,
  SPLASH_FADE_MS,
  heroEnter,
  heroGray,
} from "@/app/lib/motion";

const SplashReadyContext = createContext(false);

export function useSplashReady() {
  return useContext(SplashReadyContext);
}

const copy = {
  fa: {
    label: "لوازم خانگی لوکس",
    title: "لوازم خانگی با کیفیت",
    desc: "برندهای معتبر · گارانتی معتبر · ارسال سریع",
    loading: "در حال بارگذاری…",
  },
  en: {
    label: "Luxury Home Appliances",
    title: "Quality Home Appliances",
    desc: "Trusted brands · Valid warranty · Fast delivery",
    loading: "Loading…",
  },
};

function SplashScreen({
  fadeOut,
  text,
  direction,
}: {
  fadeOut: boolean;
  text: (typeof copy)["fa"];
  direction: "rtl" | "ltr";
}) {
  return (
    <motion.div
      dir={direction}
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: SPLASH_FADE_MS / 1000, ease: MOTION_EASE }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: heroGray.base }}
      role="status"
      aria-live="polite"
      aria-busy={!fadeOut}
    >
      <div className="absolute inset-0" style={{ background: heroGray.gradient }} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23808080'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#808080]/5 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={heroEnter(0)}
        className="relative z-10 flex flex-col items-center text-center max-w-sm"
      >
        <div className="w-14 h-14 rounded-2xl bg-[#808080]/15 border border-[#808080]/30 flex items-center justify-center mb-5">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke={heroGray.accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        <p
          className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-2"
          style={{ color: heroGray.label }}
        >
          {text.label}
        </p>
        <h1
          className="font-display text-2xl sm:text-3xl font-bold mb-3 tracking-wide"
          style={{ color: heroGray.text }}
        >
          NOVIRA
        </h1>
        <p className="text-base font-medium mb-2" style={{ color: heroGray.text }}>
          {text.title}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: heroGray.textMuted }}>
          {text.desc}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={heroEnter(0.25)}
        className="absolute bottom-12 inset-x-0 flex flex-col items-center gap-3 z-10"
      >
        <div className="w-32 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-[#808080]"
            initial={{ width: "0%" }}
            animate={{ width: fadeOut ? "100%" : "85%" }}
            transition={{ duration: SPLASH_MIN_MS / 1000, ease: MOTION_EASE }}
          />
        </div>
        <span className="text-[11px]" style={{ color: heroGray.textMuted }}>
          {text.loading}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const { locale, direction } = useI18n();
  const lang = locale === "fa" ? "fa" : "en";
  const text = copy[lang];

  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.classList.add("splash-pending");

    const start = Date.now();

    const finish = () => {
      const wait = Math.max(0, SPLASH_MIN_MS - (Date.now() - start));
      window.setTimeout(() => {
        setFadeOut(true);
        setHeroReady(true);
        window.setTimeout(() => {
          setShowSplash(false);
          document.documentElement.classList.remove("splash-pending");
        }, SPLASH_FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      finish();
    } else {
      document.addEventListener("DOMContentLoaded", finish, { once: true });
    }

    return () => {
      document.documentElement.classList.remove("splash-pending");
    };
  }, []);

  return (
    <SplashReadyContext.Provider value={heroReady}>
      <AnimatePresence>{showSplash && <SplashScreen fadeOut={fadeOut} text={text} direction={direction} />}</AnimatePresence>

      <div
        aria-hidden={showSplash && !fadeOut}
        className={`splash-app-shell${showSplash && !fadeOut ? " pointer-events-none opacity-0" : ""}`}
      >
        {children}
      </div>
    </SplashReadyContext.Provider>
  );
}
