// app/sections/NewArrivals.tsx
"use client";

import { ArrowRight, Heart, Star, Zap } from "lucide-react";
import { appliances } from "@/app/data/appliances";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useState } from "react";

export default function NewArrivals() {
  const { t, locale } = useI18n();
  const isRTL = locale === "fa";
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const newProducts = appliances.filter((p) => p.isNew).slice(0, 4);

  const toggleLike = (id: string) => {
    setLikedProducts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const formatPrice = (price: number) => {
    if (locale === "fa") {
      return new Intl.NumberFormat("fa-IR").format(price);
    }
    return new Intl.NumberFormat("en-US").format(price);
  };

  return (
    <section className="py-24 md:py-32 bg-weave-cream">
      <div className="section-padding">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-weave-accent" />
              <span className="text-weave-accent text-xs font-semibold uppercase tracking-widest">
                {locale === "fa" ? "تازه رسیده" : "Just Arrived"}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-weave-dark">
              {t("products.newArrivals")}
            </h2>
          </div>
          <a href="#new-arrivals" className="btn-outline text-xs">
            {t("common.seeAll")}
            <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
          </a>
        </div>

        {/* Products Grid - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex flex-col sm:flex-row ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                {/* Image Side */}
                <div className="relative sm:w-1/2 aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={locale === "fa" && product.nameFa ? product.nameFa : product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-weave-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {t("common.new")}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-soft hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-4 h-4 ${likedProducts.has(product.id) ? "fill-red-500 text-red-500" : "text-weave-dark"}`}
                    />
                  </button>
                </div>

                {/* Content Side */}
                <div className="sm:w-1/2 p-6 flex flex-col justify-center">
                  <p className="text-weave-muted text-[10px] font-medium uppercase tracking-wider mb-2">
                    {locale === "fa" && product.categoryFa ? product.categoryFa : product.category}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-weave-dark mb-3 line-clamp-2">
                    {locale === "fa" && product.nameFa ? product.nameFa : product.name}
                  </h3>

                  {/* Features Preview */}
                  <div className="space-y-1.5 mb-4">
                    {(locale === "fa" && product.featuresFa ? product.featuresFa : product.features)
                      .slice(0, 3)
                      .map((feature, i) => (
                        <div key={i} className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                          <div className="w-1 h-1 rounded-full bg-weave-accent" />
                          <span className="text-weave-muted text-xs">{feature}</span>
                        </div>
                      ))}
                  </div>

                  {/* Rating */}
                  <div className={`flex items-center gap-2 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-weave-accent text-weave-accent" : "text-weave-border"}`}
                        />
                      ))}
                    </div>
                    <span className="text-weave-muted text-xs">({product.reviews.toLocaleString()})</span>
                  </div>

                  {/* Price & CTA */}
                  <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`flex items-baseline gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="font-display text-xl font-bold text-weave-dark">
                        {formatPrice(product.price)} {locale === "fa" ? t("common.toman") : "$"}
                      </span>
                      {product.originalPrice && (
                        <span className="text-weave-muted text-xs line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="mt-4 w-full py-3 bg-weave-dark text-white rounded-xl text-xs font-semibold hover:bg-weave-accent transition-colors">
                    {t("products.addToCart")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}