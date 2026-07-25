"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/app/data/products";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function TestimonialsSection() {
  const { locale, t } = useI18n();
  const isRTL = locale === "fa";
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [active, setActive] = useState(0);

  const current = testimonials[active];
  const name = locale === "fa" && current.nameFa ? current.nameFa : current.name;
  const role = locale === "fa" && current.roleFa ? current.roleFa : current.role;
  const comment = locale === "fa" && current.commentFa ? current.commentFa : current.comment;

  const next = () => setActive((i) => (i + 1) % testimonials.length);
  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-nv-porcelain">
      <div className="section-padding">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Quote className="w-9 h-9 text-nv-brass mx-auto mb-8" strokeWidth={1.5} />

          <p className="font-display text-xl md:text-3xl leading-snug text-nv-ink text-balance mb-8">
            &ldquo;{comment}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-nv-brass text-nv-brass" />
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-nv-obsidian text-white flex items-center justify-center font-display text-sm font-semibold">
              {current.avatar}
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <p className="text-nv-ink text-sm font-semibold">{name}</p>
              <p className="text-nv-mist text-xs">{role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={isRTL ? next : prev}
              aria-label={locale === "fa" ? "??? ????" : "Previous testimonial"}
              className="w-10 h-10 rounded-full border border-nv-ink/15 flex items-center justify-center text-nv-ink hover:bg-nv-ink hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`${t("common.view")} ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-nv-brass" : "w-1.5 bg-nv-ink/15"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={isRTL ? prev : next}
              aria-label={locale === "fa" ? "??? ????" : "Next testimonial"}
              className="w-10 h-10 rounded-full border border-nv-ink/15 flex items-center justify-center text-nv-ink hover:bg-nv-ink hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
