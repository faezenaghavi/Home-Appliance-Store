"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Star,
  ShoppingBag,
  Heart,
  ArrowUpRight,
  ArrowUpLeft,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { useToast } from "@/app/context/Toastcontext";
import Breadcrumb from "@/app/components/Breadcrumb";
import { brands, appliances } from "@/app/data/appliances";
import type { ApplianceProduct } from "@/app/data/appliances";

const PRODUCTS_PER_BRAND = 5;

function pickTopProducts(list: ApplianceProduct[]) {
  return list
    .slice()
    .sort((a, b) => {
      if (Number(!!b.isBestseller) !== Number(!!a.isBestseller)) {
        return Number(!!b.isBestseller) - Number(!!a.isBestseller);
      }
      if (Number(!!b.isNew) !== Number(!!a.isNew)) {
        return Number(!!b.isNew) - Number(!!a.isNew);
      }
      return b.rating - a.rating;
    })
    .slice(0, PRODUCTS_PER_BRAND);
}

function FeaturedCard({
  product,
  index,
}: {
  product: ApplianceProduct;
  index: number;
}) {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();

  const name = isRTL && product.nameFa ? product.nameFa : product.name;
  const category = isRTL && product.categoryFa ? product.categoryFa : product.category;
  const liked = isWishlisted(product.id);
  const image = product.images?.[0];
  const defaultColor = product.colors?.[0] ?? {
    name: "Default",
    nameFa: "پیش‌فرض",
    hex: "#808080",
  };

  const formatPrice = (price: number) =>
    price.toLocaleString(isRTL ? "fa-IR" : "en-US");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, defaultColor, 1);
    showToast({
      title: t("common.addedToCart") as string,
      description: name,
      variant: "cart",
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isAdded = toggleWishlist(product);
    showToast({
      title: isAdded
        ? (t("common.addedToWishlist") as string)
        : (t("common.removedFromWishlist") as string),
      description: name,
      variant: isAdded ? "wishlist" : "info",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <Link
        href={`/${locale}/products/${product.id}`}
        className="group flex flex-col h-full bg-white rounded-2xl border border-[#1a1a1a]/5 overflow-hidden hover:border-[#808080]/30 hover:shadow-lg transition-all duration-200"
      >
        <div className="relative aspect-[4/5] bg-[#f0eeea] overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 20vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#808080]/25 text-4xl font-bold">
              {name.charAt(0)}
            </div>
          )}

          <div className="absolute top-3 start-3 flex flex-col gap-1.5">
            {product.isBestseller && (
              <span className="px-2.5 py-1 rounded-full bg-[#1a1a1a] text-white text-[10px] font-bold">
                {isRTL ? "پرفروش" : "Bestseller"}
              </span>
            )}
            {product.isNew && (
              <span className="px-2.5 py-1 rounded-full bg-[#808080] text-[#1a1a1a] text-[10px] font-bold">
                {isRTL ? "جدید" : "New"}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleWishlist}
            className="absolute top-3 end-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-150"
            aria-label={t("product.addToWishlist") as string}
          >
            <Heart
              className="w-4 h-4 transition-colors"
              style={{
                color: liked ? "#ef4444" : "#8a8577",
                fill: liked ? "#ef4444" : "none",
              }}
            />
          </button>
        </div>

        <div className="p-4 flex flex-col flex-1 gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#808080] font-semibold mb-1">
              {category}
            </p>
            <h3 className="text-sm font-semibold text-[#1a1a1a] leading-snug line-clamp-2 group-hover:text-[#808080] transition-colors">
              {name}
            </h3>
          </div>

          <div className="flex items-center gap-1 text-[#8a8577]">
            <Star className="w-3.5 h-3.5 fill-[#808080] text-[#808080]" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-[#8a8577]/60">
              ({product.reviews.toLocaleString(isRTL ? "fa-IR" : "en-US")})
            </span>
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 pt-2 border-t border-[#1a1a1a]/5">
            <div>
              <p className="text-base font-bold text-[#1a1a1a]">
                {formatPrice(product.price)}
              </p>
              <p className="text-[10px] text-[#8a8577]">{t("common.currency")}</p>
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#1a1a1a] text-white text-xs font-semibold rounded-xl hover:bg-[#808080] transition-colors duration-150 active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {t("product.addToCart")}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedContent() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const [activeBrand, setActiveBrand] = useState<string>("all");

  const brandSections = useMemo(
    () =>
      brands.map((brand) => ({
        brand,
        products: pickTopProducts(appliances.filter((p) => p.brand === brand.name)),
      })),
    []
  );

  const filteredSections =
    activeBrand === "all"
      ? brandSections
      : brandSections.filter((s) => s.brand.name === activeBrand);

  const totalFeatured = brandSections.reduce((n, s) => n + s.products.length, 0);

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-[#1a1a1a]/5 bg-gradient-to-b from-[#f0eeea] to-[#faf8f5]">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <Breadcrumb
            items={[{ label: isRTL ? "محصولات ویژه" : "Featured Products" }]}
            className="mb-8"
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#808080]/10 text-[#808080] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                {isRTL ? "محصولات ویژه" : "Featured Products"}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
                {isRTL ? "برترین انتخاب‌ها از هر برند" : "Top Picks from Every Brand"}
              </h1>
              <p className="text-[#8a8577] text-base sm:text-lg leading-relaxed max-w-xl">
                {isRTL
                  ? "۵ محصول برتر از هر برند معتبر — بر اساس امتیاز، محبوبیت و کیفیت انتخاب شده‌اند."
                  : "Five standout products from each trusted brand — selected by rating, popularity, and quality."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <div className="px-5 py-4 bg-white rounded-2xl border border-[#1a1a1a]/5 text-center min-w-[100px]">
                <p className="text-2xl font-bold text-[#808080]">{brands.length}</p>
                <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "برند" : "Brands"}</p>
              </div>
              <div className="px-5 py-4 bg-white rounded-2xl border border-[#1a1a1a]/5 text-center min-w-[100px]">
                <p className="text-2xl font-bold text-[#808080]">{totalFeatured}</p>
                <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "محصول ویژه" : "Featured"}</p>
              </div>
              <div className="px-5 py-4 bg-white rounded-2xl border border-[#1a1a1a]/5 text-center min-w-[100px]">
                <p className="text-2xl font-bold text-[#808080]">{PRODUCTS_PER_BRAND}</p>
                <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "در هر برند" : "Per Brand"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand filter */}
      <section className="sticky top-[60px] sm:top-[68px] z-30 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#1a1a1a]/5">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              type="button"
              onClick={() => setActiveBrand("all")}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                activeBrand === "all"
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-[#8a8577] border border-[#1a1a1a]/8 hover:border-[#808080]/40"
              }`}
            >
              {isRTL ? "همه برندها" : "All Brands"}
            </button>
            {brands.map((brand) => (
              <button
                key={brand.name}
                type="button"
                onClick={() => setActiveBrand(brand.name)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  activeBrand === brand.name
                    ? "bg-[#808080] text-[#1a1a1a]"
                    : "bg-white text-[#8a8577] border border-[#1a1a1a]/8 hover:border-[#808080]/40"
                }`}
              >
                {isRTL && brand.nameFa ? brand.nameFa : brand.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brand sections */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto space-y-16 sm:space-y-20">
          {filteredSections.map(({ brand, products: brandProducts }, sectionIdx) => (
            <div key={brand.name}>
              {/* Brand header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#1a1a1a]/5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#808080] mb-2">
                    {isRTL ? `برند ${sectionIdx + 1}` : `Brand ${sectionIdx + 1}`}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
                    {isRTL && brand.nameFa ? brand.nameFa : brand.name}
                  </h2>
                  <p className="text-sm text-[#8a8577] mt-1 flex items-center gap-1.5">
                    <span>{brand.country}</span>
                    <span className="text-[#808080]/40">·</span>
                    <span>
                      {brandProducts.length} {isRTL ? "محصول ویژه" : "featured items"}
                    </span>
                  </p>
                </div>
                <Link
                  href={`/${locale}/products?brand=${encodeURIComponent(brand.name)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#808080] hover:text-[#1a1a1a] transition-colors group"
                >
                  {isRTL ? "همه محصولات" : "All Products"}
                  {isRTL ? (
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                  ) : (
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </Link>
              </div>

              {/* 5 products grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
                {brandProducts.map((product, idx) => (
                  <FeaturedCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-24">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-3xl px-8 py-10 sm:px-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {isRTL ? "به دنبال محصول خاصی هستید؟" : "Looking for something specific?"}
              </h3>
              <p className="text-white/50 text-sm">
                {isRTL
                  ? "تمام محصولات را با فیلتر برند و دسته‌بندی مرور کنید."
                  : "Browse our full catalog with brand and category filters."}
              </p>
            </div>
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#808080] text-[#1a1a1a] font-semibold rounded-full hover:bg-[#959595] transition-colors duration-200 shrink-0"
            >
              {isRTL ? "مشاهده همه محصولات" : "Browse All Products"}
              <Arrow className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
