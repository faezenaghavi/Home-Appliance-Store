"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useToast } from "@/app/context/Toastcontext";

export default function NewsletterSection() {
  const { t, locale } = useI18n();
  const isRTL = locale === "fa";
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
    showToast({ variant: "success", title: t("footer.subscribed") as string });
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 2500);
  };

  return (
    <section className="py-24 md:py-28 bg-nv-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-obsidian opacity-60" aria-hidden="true" />
      <div className="section-padding relative z-10">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-nv-brass/15 border border-nv-brass/30 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-5 h-5 text-nv-brassLight" />
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-semibold text-nv-porcelain mb-3 text-balance">
            {t("footer.newsletter")}
          </h2>
          <p className="text-nv-porcelain/55 text-sm md:text-base mb-8">{t("footer.newsletterDesc")}</p>

          <form
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("footer.emailPlaceholder") as string}
              className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-nv-brass transition-colors"
            />
            <button type="submit" className="btn-accent shrink-0">
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  {t("common.success")}
                </>
              ) : (
                <>
                  {t("footer.subscribe")}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
