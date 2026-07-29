"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { appliances } from "@/app/data/appliances";
import ProductCard from "@/app/components/ProductCard";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useI18n } from "@/app/i18n/Provider";
import Link from "next/link";

export default function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";

  // فیلتر کردن 4 محصول ویژه برای نمایش در صفحه اصلی
  const featuredProducts = appliances
    .filter((p) => p.isBestseller || p.isNew || p.badge)
    .slice(0, 4);

  return (
    <section id="products" dir={direction} className="py-24 md:py-32 bg-[#faf8f5]">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="text-[#808080] text-xs font-semibold uppercase tracking-widest mb-4 block">
              {t("products.featured")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
              {t("products.title")}
            </h2>
          </div>
          <p className="text-[#8a8577] text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            {t("products.subtitle")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link 
            href={`/${locale}/featured`} 
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a1a] text-[#1a1a1a] rounded-xl font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 group"
          >
            <span>{t("categories.viewAll")}</span>
            {isRTL ? (
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}