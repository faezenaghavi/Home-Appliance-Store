// app/sections/BrandShowcase.tsx
"use client";

import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { brands } from "@/app/data/appliances";

export default function BrandShowcase() {
  const { locale } = useI18n();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-weave-cream border-y border-weave-border">
      <div className="section-padding">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-weave-accent text-xs font-semibold uppercase tracking-widest mb-4 block">
            {locale === "fa" ? "برندهای معتبر" : "Trusted Brands"}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-weave-dark">
            {locale === "fa" ? "بهترین برندهای جهانی" : "World's Best Brands"}
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-weave-border/50 hover:border-weave-accent/30 hover:shadow-soft transition-all duration-500 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-weave-light flex items-center justify-center group-hover:bg-weave-accent/10 transition-colors">
                <span className="font-display text-xl font-bold text-weave-dark group-hover:text-weave-accent transition-colors">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <div className="text-center">
                <p className="text-weave-dark text-xs font-semibold">
                  {locale === "fa" && brand.nameFa ? brand.nameFa : brand.name}
                </p>
                <p className="text-weave-muted text-[10px] mt-0.5">
                  {brand.productCount} {locale === "fa" ? "محصول" : "products"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}