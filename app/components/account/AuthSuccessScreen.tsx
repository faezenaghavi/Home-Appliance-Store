"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import AccountWaveBackground from "./AccountWaveBackground";

type AuthSuccessScreenProps = {
  type: "login" | "register";
  name: string;
  isRTL: boolean;
  direction: "rtl" | "ltr";
};

export default function AuthSuccessScreen({
  type,
  name,
  isRTL,
  direction,
}: AuthSuccessScreenProps) {
  const isLogin = type === "login";

  return (
    <main dir={direction} className="relative min-h-screen overflow-hidden">
      <AccountWaveBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md bg-white/85 backdrop-blur-xl border border-white/60 rounded-3xl p-8 sm:p-10 shadow-[0_24px_80px_rgba(26,26,26,0.12)] text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 16 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#808080]/15 border-2 border-[#808080]/30 flex items-center justify-center"
          >
            <CheckCircle2 className="w-10 h-10 text-[#808080]" strokeWidth={2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#808080]/10 text-[#666666] text-[11px] font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              {isRTL ? "تست موفق" : "Test Successful"}
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">
              {isLogin
                ? isRTL
                  ? "با موفقیت وارد شدید!"
                  : "You're signed in!"
                : isRTL
                  ? "ثبت‌نام با موفقیت انجام شد!"
                  : "Account created!"}
            </h1>

            <p className="text-[#8a8577] text-sm leading-relaxed mb-2">
              {isRTL ? "سلام" : "Hello"},{" "}
              <span className="font-semibold text-[#1a1a1a]">{name}</span>
            </p>
            <p className="text-[#8a8577] text-sm">
              {isRTL
                ? "در حال انتقال به پنل حساب کاربری…"
                : "Redirecting to your account panel…"}
            </p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 1.6, ease: "linear" }}
            className="h-1 bg-[#808080] rounded-full mt-8 origin-left"
          />
        </motion.div>
      </div>
    </main>
  );
}
