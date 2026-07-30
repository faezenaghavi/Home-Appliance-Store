"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home, ChevronRight, ChevronLeft, ArrowUpRight,
  Star, Package, Award, TrendingUp, MapPin
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { brands, appliances } from "@/app/data/appliances";
import { getProductDisplayImage } from "@/app/lib/categoryImages";

export default function BrandsContent() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";

  // دیکشنری ساده برای ترجمه نام کشورها در حالت فارسی
  const countryTranslations: Record<string, string> = {
    "South Korea": "کره جنوبی",
    "Germany": "آلمان",
    "UK": "انگلستان",
    "Japan": "ژاپن",
    "Netherlands": "هلند",
    "USA": "آمریکا",
  };

  // Group products by brand (max 4 for preview)
  const brandProducts = useMemo(() => {
    const map: Record<string, typeof appliances> = {};
    brands.forEach((b) => {
      map[b.name] = appliances
        .filter((p) => p.brand === b.name)
        .sort((a, b) => Number(b.isBestseller ?? false) - Number(a.isBestseller ?? false))
        .slice(0, 4);
    });
    return map;
  }, []);

  // Brand stats from real product data
  const getBrandStats = (brandName: string) => {
    const prods = appliances.filter((p) => p.brand === brandName);
    const avgRating = prods.length
      ? (prods.reduce((s, p) => s + p.rating, 0) / prods.length).toFixed(1)
      : "0.0";
    const bestsellerCount = prods.filter((p) => p.isBestseller).length;
    const newCount = prods.filter((p) => p.isNew).length;
    return { avgRating, bestsellerCount, newCount, total: prods.length };
  };

  // Format price with locale-aware grouping + currency
  const formatPrice = (price: number) => {
    const formatted = price.toLocaleString(isRTL ? "fa-IR" : "en-US");
    return isRTL ? `${formatted} تومان` : `${formatted} Toman`;
  };

  // Format numbers (like ratings and counts) to Persian digits in RTL
  const formatNumber = (num: number | string) => {
    return Number(num).toLocaleString(isRTL ? "fa-IR" : "en-US");
  };

  return (
    <main 
      dir={direction} 
      className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 relative overflow-hidden"
      style={{ backgroundColor: "#f5f0eb" }}
    >
      {/* Background Subtle Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#808080]/[0.05] rounded-full blur-[120px]" />

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-[#8a8577] flex items-center gap-2 mb-8 sm:mb-10"
        >
          <Link href={`/${locale}`} scroll={true} className="hover:text-[#808080] transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            {isRTL ? "خانه" : "Home"}
          </Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <span className="text-[#1a1a1a] font-medium">{isRTL ? "برندها" : "Brands"}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span 
            style={{ color: "#808080", letterSpacing: "0.2em" }} 
            className="inline-block text-[11px] font-bold uppercase mb-5 block"
          >
            {isRTL ? "دسته‌بندی برندها" : "Brand Directory"}
          </span>
          <h1 
            style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5"
          >
            {isRTL ? "بهترین برندهای جهانی لوازم خانگی" : "World's Best Home Appliance Brands"}
          </h1>
          <p style={{ color: "#8a8577" }} className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? "با کیفیت‌ترین و معتبرترین برندهای دنیا را در یک مجموعه گرد آورده‌ایم تا بهترین انتخاب را داشته باشید."
              : "We have gathered the highest quality and most reputable global brands in one collection for the best choice."}
          </p>
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#808080] to-transparent mx-auto rounded-full mt-6 sm:mt-8" />
        </motion.div>

        {/* Brands Grid — Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {brands.map((brand, index) => {
            const prods = brandProducts[brand.name] || [];
            const stats = getBrandStats(brand.name);
            const isLarge = index === 0 || index === 3; // Alternate large cards

            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative ${isLarge ? "lg:col-span-2" : ""}`}
              >
                <Link
                  href={`/${locale}/products?brand=${encodeURIComponent(brand.name)}`}
                  className="block"
                >
                  <div className="relative bg-white border border-[#e5dfd6] hover:border-[#808080]/40 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col sm:flex-row">

                    {/* ─── Left: Brand Identity ─── */}
                    <div className={`relative ${isLarge ? "sm:w-2/5 lg:w-1/3" : "sm:w-2/5"} p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[260px]`}>
                      {/* Gradient bg */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#808080]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Logo */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#808080]/15 to-[#808080]/5 border border-[#808080]/20 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(128,128,128,0.15)] transition-all duration-500">
                          <span className="font-display text-2xl sm:text-3xl font-bold text-[#808080]">
                            {isRTL ? brand.nameFa.charAt(0) : brand.name.charAt(0)}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-1 group-hover:text-[#808080] transition-colors duration-300">
                          {isRTL ? brand.nameFa : brand.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#8a8577] uppercase tracking-wider">
                          <MapPin className="w-3 h-3 text-[#808080]/80" />
                          <span>{isRTL ? (countryTranslations[brand.country] || brand.country) : brand.country}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="relative z-10 flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6 flex-wrap">
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#8a8577]">
                          <Package className="w-3.5 h-3.5 text-[#808080]" />
                          <span className="font-semibold text-[#1a1a1a]">{formatNumber(stats.total)}</span>
                          <span>{isRTL ? "محصول" : "products"}</span>
                        </div>
                        <div className="w-px h-4 bg-black/10" />
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#8a8577]">
                          <Star className="w-3.5 h-3.5 text-[#808080] fill-[#808080]" />
                          <span className="font-semibold text-[#1a1a1a]">{formatNumber(stats.avgRating)}</span>
                        </div>
                        {stats.bestsellerCount > 0 && (
                          <>
                            <div className="w-px h-4 bg-black/10" />
                            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#8a8577]">
                              <TrendingUp className="w-3.5 h-3.5 text-[#808080]" />
                              <span className="font-semibold text-[#1a1a1a]">{formatNumber(stats.bestsellerCount)}</span>
                              <span>{isRTL ? "پرفروش" : "bestsellers"}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* ─── Right: Products Preview ─── */}
                    <div className={`flex-1 p-4 sm:p-6 ${isLarge ? "lg:p-8" : ""} border-t sm:border-t-0 ${isRTL ? "sm:border-r" : "sm:border-l"} border-[#e5dfd6] bg-[#faf8f5]/40`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#8a8577]/80 font-semibold">
                          {isRTL ? "محصولات برجسته" : "Featured Products"}
                        </span>
                        <div className="flex items-center gap-1 text-[#808080] text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                          {isRTL ? "مشاهده همه" : "View All"}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Product mini cards */}
                      <div className={`grid gap-2 sm:gap-3 ${isLarge ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"}`}>
                        {prods.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white border border-[#e5dfd6] hover:border-[#808080]/40 hover:bg-[#faf8f5] transition-all duration-300 group/item"
                          >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-[#f5f0eb] shrink-0 ring-1 ring-black/[0.04] relative">
                              <Image
                                src={getProductDisplayImage(product)}
                                alt={isRTL ? product.nameFa : product.name}
                                fill
                                sizes="56px"
                                className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[11px] sm:text-xs font-medium text-[#1a1a1a] truncate group-hover/item:text-[#808080] transition-colors">
                                {isRTL ? product.nameFa : product.name}
                              </p>
                              <div className="flex items-center gap-1.5 mt-1">
                                <Star className="w-3 h-3 text-[#808080] fill-[#808080]" />
                                <span className="text-[10px] text-[#8a8577]">{formatNumber(product.rating)}</span>
                                <span className="text-[10px] text-[#808080] font-mono truncate">
                                  {formatPrice(product.price)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Empty state filler */}
                        {prods.length === 0 && (
                          <div className="col-span-full py-8 text-center">
                            <Package className="w-8 h-8 text-[#8a8577]/20 mx-auto mb-2" />
                            <p className="text-xs text-[#8a8577]">
                              {isRTL ? "به زودی..." : "Coming soon..."}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* CTA for large cards */}
                      {isLarge && (
                        <div className="mt-4 sm:mt-6 flex justify-end">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#808080]/10 border border-[#808080]/30 text-[#808080] text-xs font-semibold group-hover:bg-[#808080] group-hover:text-white transition-all duration-300">
                            {isRTL ? "مشاهده کل مجموعه" : "Browse Collection"}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#e5dfd6] backdrop-blur-sm">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#808080]" />
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1">
                {isRTL ? "به دنبال برند خاصی هستید؟" : "Looking for a specific brand?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#8a8577]">
                {isRTL
                  ? "تیم پشتیبانی ما آماده است تا هر برندی را که نیاز دارید، برای شما فراهم کند."
                  : "Our support team is ready to source any brand you need."}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="shrink-0 px-6 py-3 bg-[#808080] text-white rounded-xl text-xs font-bold hover:bg-[#959595] transition-all duration-300 hover:shadow-[0_0_30px_rgba(128,128,128,0.3)] active:scale-95"
            >
              {isRTL ? "تماس با ما" : "Contact Us"}
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}