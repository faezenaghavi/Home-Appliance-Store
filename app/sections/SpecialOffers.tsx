// app/sections/SpecialOffers.tsx
"use client";

import { ArrowRight, Timer, Heart, Star, ShoppingCart } from "lucide-react";
import { appliances } from "@/app/data/appliances";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export default function SpecialOffers() {
  const { t, locale } = useI18n();
  const isRTL = locale === "fa";
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  const offers = appliances.filter((p) => p.originalPrice).slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price: number) => {
    if (locale === "fa") {
      return new Intl.NumberFormat("fa-IR").format(price);
    }
    return new Intl.NumberFormat("en-US").format(price);
  };

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="py-24 md:py-32 bg-weave-dark text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-weave-dark via-[#2a2a2a] to-weave-dark" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-weave-accent/5 to-transparent" />

      <div className="section-padding relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Timer className="w-4 h-4 text-weave-accent" />
              <span className="text-weave-accent text-xs font-semibold uppercase tracking-widest">
                {locale === "fa" ? "محدود" : "Limited Time"}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              {t("products.specialOffers")}
            </h2>
          </div>

          {/* Countdown */}
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            {[
              { value: timeLeft.hours, label: locale === "fa" ? "ساعت" : "Hrs" },
              { value: timeLeft.minutes, label: locale === "fa" ? "دقیقه" : "Min" },
              { value: timeLeft.seconds, label: locale === "fa" ? "ثانیه" : "Sec" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-1">
                  <span className="font-display text-xl font-bold">{formatTime(item.value)}</span>
                </div>
                <span className="text-white/40 text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((product, index) => {
            const discount = product.originalPrice
              ? Math.round((1 - product.price / product.originalPrice) * 100)
              : 0;

            return (
              <div
                key={product.id}
                className={`group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-weave-accent/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={locale === "fa" && product.nameFa ? product.nameFa : product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {discount}% {t("common.off")}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-white/40 text-[10px] font-medium uppercase tracking-wider mb-2">
                    {locale === "fa" && product.categoryFa ? product.categoryFa : product.category}
                  </p>
                  <h3 className="font-display text-base font-semibold text-white mb-2 line-clamp-1">
                    {locale === "fa" && product.nameFa ? product.nameFa : product.name}
                  </h3>

                  {/* Rating */}
                  <div className={`flex items-center gap-2 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-weave-accent text-weave-accent" : "text-white/20"}`}
                        />
                      ))}
                    </div>
                    <span className="text-white/40 text-xs">({product.reviews.toLocaleString()})</span>
                  </div>

                  {/* Price */}
                  <div className={`flex items-baseline gap-3 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span className="font-display text-2xl font-bold text-white">
                      {formatPrice(product.price)} {locale === "fa" ? t("common.toman") : "$"}
                    </span>
                    {product.originalPrice && (
                      <span className="text-white/30 text-sm line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className={`flex items-center justify-between text-[10px] mb-1.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="text-white/40">
                        {locale === "fa" ? "فروخته‌شده: ۷۸٪" : "Sold: 78%"}
                      </span>
                      <span className="text-weave-accent">
                        {locale === "fa" ? "۵ عدد باقیمانده" : "5 left"}
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-weave-accent to-weave-accent-light rounded-full" />
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full flex items-center justify-center gap-2 py-3 bg-weave-accent text-white rounded-xl text-xs font-semibold hover:bg-weave-accent-light transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    {t("products.addToCart")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}