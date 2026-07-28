// app/[locale]/brands/BrandsContent.tsx
"use client";

import { useI18n } from "@/app/i18n/Provider";
import { brands } from "@/app/data/appliances";
import Link from "next/link";
import { Home, ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";

export default function BrandsContent() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5] pt-24 sm:pt-28 pb-16">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="text-sm text-[#8a8577] flex items-center gap-2 mb-8">
          <Link href={`/${locale}`} scroll={true} className="hover:text-[#c4a882] transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            {isRTL ? "خانه" : "Home"}
          </Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <span className="text-[#1a1a1a] font-medium">{isRTL ? "برندها" : "Brands"}</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c4a882]/10 text-[#c4a882] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            {isRTL ? "دسته‌بندی برندها" : "Brand Directory"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
            {isRTL ? "بهترین برندهای جهانی لوازم خانگی" : "World's Best Home Appliance Brands"}
          </h1>
          <p className="text-[#8a8577] text-base max-w-xl mx-auto leading-relaxed">
            {isRTL ? "با کیفیت‌ترین و معتبرترین برندهای دنیا را در یک مجموعه گرد آورده‌ایم تا بهترین انتخاب را داشته باشید." : "We have gathered the highest quality and most reputable global brands in one collection for the best choice."}
          </p>
          <div className="w-24 h-1 bg-[#c4a882] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Brands Grid (Large Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/${locale}/products?brand=${encodeURIComponent(brand.name)}`}
              className="group bg-white p-8 rounded-2xl border border-[#1a1a1a]/5 hover:border-[#c4a882]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                {/* Brand Logo Placeholder */}
                <div className="w-16 h-16 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#c4a882] transition-colors duration-300">
                  <span className="font-display text-2xl font-bold text-white">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-[#8a8577] group-hover:text-[#c4a882] transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                {isRTL && brand.nameFa ? brand.nameFa : brand.name}
              </h3>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1a1a1a]/5">
                <p className="text-sm text-[#8a8577]">
                  {isRTL ? "تعداد محصولات" : "Available Products"}
                </p>
                <span className="text-sm font-bold text-[#c4a882]">
                  {brand.productCount} {isRTL ? "محصول" : "items"}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}