"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { direction } = useI18n();
  const isRTL = direction === "rtl";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={isRTL ? "بازگشت به بالا" : "Scroll to top"}
      className={`fixed bottom-6 z-50 w-11 h-11 rounded-xl bg-[#1a1a1a] text-white border border-white/10 shadow-lg shadow-black/20 flex items-center justify-center transition-all duration-300 hover:bg-[#808080] hover:scale-105 active:scale-95 ${
        isRTL ? "left-6" : "right-6"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
