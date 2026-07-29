"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Package } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { brands, appliances } from "@/app/data/appliances";

export default function BrandShowcase() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Get real product count per brand from appliances data
  const getProductCount = (brandName: string) =>
    appliances.filter((p) => p.brand === brandName).length;

  // Get top-rated (or bestseller) product for the brand
  const getTopProduct = (brandName: string) => {
    const list = appliances.filter((p) => p.brand === brandName);
    if (!list.length) return undefined;
    return list
      .slice()
      .sort((a, b) => {
        // Bestsellers first, then by rating
        if (Number(!!b.isBestseller) !== Number(!!a.isBestseller)) {
          return Number(!!b.isBestseller) - Number(!!a.isBestseller);
        }
        return b.rating - a.rating;
      })[0];
  };

  // Average rating for the brand
  const getAvgRating = (brandName: string) => {
    const list = appliances.filter((p) => p.brand === brandName);
    if (!list.length) return "0.0";
    return (list.reduce((s, p) => s + p.rating, 0) / list.length).toFixed(1);
  };

  return (
    <section 
      dir={isRTL ? "rtl" : "ltr"}
      style={{ backgroundColor: "#f5f0eb" }}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Subtle Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#808080]/[0.05] rounded-full blur-[120px]" />

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className={`text-center sm:text-${isRTL ? "right" : "left"}`}>
            <span 
              style={{ color: "#808080", letterSpacing: "0.2em" }} 
              className="text-[11px] sm:text-xs font-semibold uppercase mb-3 sm:mb-4 block"
            >
              {isRTL ? "برندهای معتبر" : "Trusted Brands"}
            </span>
            <h2 
              style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              {isRTL ? "بهترین برندهای جهانی" : "World's Best Brands"}
            </h2>
          </div>

          <Link
            href={`/${locale}/brands`}
            className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#808080]/10 border border-[#808080]/30 text-[#808080] rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#808080] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(128,128,128,0.2)] active:scale-95"
          >
            {isRTL ? "مشاهده همه برندها" : "View All Brands"}
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Brands Grid — Horizontal Mini Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {brands.slice(0, 8).map((brand, index) => {
            const count = getProductCount(brand.name);
            const topProduct = getTopProduct(brand.name);
            const avgRating = getAvgRating(brand.name);

            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/${locale}/brands`} 
                  className="group block"
                >
                  <div className="relative bg-white border border-[#e5dfd6] hover:border-[#808080]/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] flex flex-row items-center p-4 sm:p-5 gap-4">

                    {/* Brand Logo */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#808080]/15 to-[#808080]/5 border border-[#808080]/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(128,128,128,0.15)] transition-all duration-500">
                      <span className="font-display text-xl sm:text-2xl font-bold text-[#808080]">
                        {brand.name.charAt(0)}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] truncate group-hover:text-[#808080] transition-colors duration-300">
                        {isRTL ? brand.nameFa : brand.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#8a8577]">
                          <Package className="w-3 h-3 text-[#808080]" />
                          <span className="font-semibold text-[#1a1a1a]">{count}</span>
                          <span>{isRTL ? "محصول" : "products"}</span>
                        </div>
                        {topProduct && (
                          <>
                            <span className="w-px h-3 bg-black/10" />
                            <div className="flex items-center gap-0.5 text-[10px] sm:text-[11px] text-[#8a8577]">
                              <Star className="w-3 h-3 text-[#808080] fill-[#808080]" />
                              <span className="font-semibold text-[#1a1a1a]">{avgRating}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8a8577]/40 group-hover:text-[#808080] transition-all duration-300 shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}