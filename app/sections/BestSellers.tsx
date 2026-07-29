"use client";

import { useState, useEffect, useCallback } from "react";
import { Heart, ShoppingBag, ArrowLeft, TrendingUp, Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/app/components/ScrollReveal";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { useToast } from "@/app/context/Toastcontext";
import type { Product as StoreProduct } from "@/app/types";

const bestsellers = [
  {
    id: "1",
    name: "Samsung Family Hub Side-by-Side Refrigerator",
    nameFa: "یخچال ساید بای ساید سامسونگ Family Hub",
    description: "21-inch smart touchscreen, internal camera, dual cooling system. This fridge offers unparalleled AI features for food management.",
    descriptionFa: "صفحه نمایش هوشمند ۲۱ اینچ، دوربین داخلی، سیستم خنک‌کننده دوگانه. این یخچال با تکنولوژی هوش مصنوعی امکانات بی‌نظیری را برای مدیریت مواد غذایی فراهم می‌کند.",
    price: 85000000,
    originalPrice: 98000000,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=600&q=80",
    rating: 4.9,
    reviews: 128,
    rank: 1,
  },
  {
    id: "2",
    name: "LG 9kg Washing Machine",
    nameFa: "ماشین لباسشویی ال‌جی ۹ کیلویی",
    description: "Direct drive inverter motor, 14 wash programs, A+++ energy consumption. Unique design with reduced noise and vibration for complete peace at home.",
    descriptionFa: "موتور اینورتر دایرکت درایو، ۱۴ برنامه شستشو، مصرف انرژی A+++. طراحی بی‌نظیر با کاهش نویز و لرزش برای آرامش کامل در خانه.",
    price: 32000000,
    image: "https://images.unsplash.com/photo-1626806775351-538068a21838?w=600&q=80",
    rating: 4.8,
    reviews: 96,
    rank: 2,
  },
  {
    id: "3",
    name: "Dyson V15 Detect Cordless Vacuum",
    nameFa: "جاروبرقی بی‌سیم دایسون V15 Detect",
    description: "Laser dust sensor, 60-minute battery, HEPA filter. Incredible suction power with digital display of suspended particles.",
    descriptionFa: "سنسور لیزری گرد و غبار، باتری ۶۰ دقیقه‌ای، فیلتر HEPA. قدرت مکش فوق‌العاده با نمایش ذرات معلق روی صفحه نمایش دیجیتال.",
    price: 28000000,
    originalPrice: 35000000,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80",
    rating: 4.9,
    reviews: 215,
    rank: 3,
  },
  {
    id: "4",
    name: "Bosch Series 8 Built-in Oven",
    nameFa: "فر توکار بوش سری ۸",
    description: "71-liter capacity, 15 cooking programs, catalytic cleaning. Luxury design and touch display for professional cooking.",
    descriptionFa: "ظرفیت ۷۱ لیتر، ۱۵ برنامه پخت، تمیزشویی کاتالیزی. طراحی لوکس و صفحه نمایش لمسی برای پخت حرفه‌ای غذا.",
    price: 45000000,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
    rating: 4.7,
    reviews: 84,
    rank: 4,
  },
];

interface Product {
  id: string;
  name: string;
  nameFa: string;
  description: string;
  descriptionFa: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  rank: number;
}

function toStoreProduct(product: Product): StoreProduct {
  return {
    id: product.id,
    name: product.name,
    nameFa: product.nameFa,
    category: "bestsellers",
    categoryFa: "پرفروش‌ترین‌ها",
    price: product.price,
    originalPrice: product.originalPrice,
    description: product.description,
    descriptionFa: product.descriptionFa,
    features: [],
    featuresFa: [],
    specs: {},
    specsFa: {},
    images: [product.image],
    colors: [{ name: "Default", nameFa: "پیش‌فرض", hex: "#808080" }],
    rating: product.rating,
    reviews: product.reviews,
    isBestseller: true,
  };
}

function ProductCard({ product, index, onCardClick }: { product: Product; index: number; onCardClick: () => void }) {
  const { locale, direction, t } = useI18n();
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();
  const isRTL = direction === "rtl";

  const storeProduct = toStoreProduct(product);
  const liked = isWishlisted(product.id);

  const formatPrice = (price: number) => price.toLocaleString(isRTL ? "fa-IR" : "en-US");
  const isEven = index % 2 === 0;

  const name = isRTL ? product.nameFa : product.name;
  const desc = isRTL ? product.descriptionFa : product.description;

  return (
    <ScrollReveal animation="fade-up" delay={index * 150} duration={700}>
      <div
        onClick={onCardClick}
        className="group relative flex flex-col md:flex-row overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer border border-white/[0.06] hover:border-[#808080]/20 bg-[#141210]/80 backdrop-blur-sm"
        style={{ borderRadius: 24, minHeight: 280 }}
        dir={direction}
      >
        {/* Rank Number */}
        <div
          className="absolute top-4 right-6 z-20 font-bold select-none pointer-events-none"
          style={{
            fontSize: 72,
            color: "rgba(128,128,128,0.06)",
            lineHeight: 1,
            fontFamily: "var(--font-display), 'Playfair Display', serif",
          }}
        >
          {product.rank}
        </div>

        {/* Image Side */}
        <div
          className={`relative md:w-2/5 overflow-hidden ${isEven ? "md:order-2" : "md:order-1"}`}
          style={{ minHeight: 220 }}
        >
          <img
            src={product.image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: isEven
                ? "linear-gradient(to left, rgba(20,18,16,0.85) 0%, transparent 60%)"
                : "linear-gradient(to right, rgba(20,18,16,0.85) 0%, transparent 60%)",
            }}
          />

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const isAdded = toggleWishlist(storeProduct);
              showToast({
                title: isAdded
                  ? (t("common.addedToWishlist") as string)
                  : (t("common.removedFromWishlist") as string),
                description: name,
                variant: isAdded ? "wishlist" : "info",
              });
            }}
            className="absolute top-4 left-4 z-10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.06)",
              cursor: "pointer",
            }}
          >
            <Heart
              className="w-4 h-4 transition-colors"
              style={{
                color: liked ? "#ef4444" : "#ffffff",
                fill: liked ? "#ef4444" : "none",
              }}
            />
          </button>

          {/* Trending Badge */}
          <div
            className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(128,128,128,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(128,128,128,0.1)" }}
          >
            <TrendingUp className="w-3 h-3" style={{ color: "#808080" }} />
            <span style={{ color: "#808080", fontSize: 10, fontWeight: 600 }}>
              {isRTL ? "پرفروش" : "Bestseller"}
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`flex-1 p-6 md:p-8 flex flex-col justify-center ${isEven ? "md:order-1" : "md:order-2"}`}
        >
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5"
                  style={{
                    color: i < Math.floor(product.rating) ? "#808080" : "rgba(255,255,255,0.1)",
                    fill: i < Math.floor(product.rating) ? "#808080" : "none",
                  }}
                />
              ))}
            </div>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
              {product.rating} ({product.reviews.toLocaleString(isRTL ? "fa-IR" : "en-US")} {isRTL ? "نظر" : "reviews"})
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-bold mb-3 leading-relaxed"
            style={{
              color: "#f5f0e8",
              fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', sans-serif",
            }}
          >
            {name}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6 line-clamp-2"
            style={{ color: "rgba(245,240,232,0.45)" }}
          >
            {desc}
          </p>

          {/* Price & CTA */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-baseline gap-2">
              <span
                className="text-xl font-bold"
                style={{
                  color: "#808080",
                  fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', sans-serif",
                }}
              >
                {formatPrice(product.price)}
              </span>
              <span style={{ color: "rgba(245,240,232,0.4)", fontSize: 12 }}>
                {isRTL ? "تومان" : "IRR"}
              </span>
              {product.originalPrice && (
                <span
                  className="text-sm mr-2"
                  style={{ color: "rgba(245,240,232,0.25)", textDecoration: "line-through" }}
                >
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const defaultColor = storeProduct.colors[0];
                addItem(storeProduct, defaultColor, 1);
                showToast({
                  title: t("common.addedToCart") as string,
                  description: name,
                  variant: "cart",
                });
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(128,128,128,0.3)]"
              style={{
                backgroundColor: "#808080",
                color: "#1a1a1a",
                cursor: "pointer",
              }}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{isRTL ? "افزودن به سبد" : "Add to Cart"}</span>
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { locale, direction, t } = useI18n();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const isRTL = direction === "rtl";

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProduct]);

  return (
    <>
      <section
        dir={direction}
        className="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden bg-[#0f0f0f]"
      >
        {/* ─── Background matching Hero ─── */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#141210] to-[#1a1815]" />

        {/* Subtle gray texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23808080' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Accent glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#808080]/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#808080]/3 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#808080]/[0.02] rounded-full blur-[150px]" />

        <div className="px-4 sm:px-6 lg:px-12 xl:px-24 max-w-[1400px] mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
            <ScrollReveal animation="fade-right" duration={800}>
              <div className={isRTL ? "text-right" : "text-left"}>
                <span className="text-[#808080] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3 sm:mb-4 block">
                  {isRTL ? "پرفروش‌ترین‌ها" : "Bestsellers"}
                </span>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0e8] leading-tight"
                  style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
                >
                  {isRTL ? "محبوب‌ترین انتخاب‌ها" : "Most Popular Choices"}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} duration={800}>
              <p className="text-[#a8a095] text-sm max-w-md leading-relaxed text-right md:text-left">
                {isRTL 
                  ? "محصولاتی که بیشترین خرید را داشته‌اند و رضایت مشتریان را جلب کرده‌اند" 
                  : "Products with the highest sales and customer satisfaction"}
              </p>
            </ScrollReveal>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
                onCardClick={() => setSelectedProduct(product)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick View Modal ─── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            dir={direction}
            onClick={() => setSelectedProduct(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#141210] border border-white/[0.06] rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all border border-white/10 active:scale-95"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Image Side */}
              <div className="relative md:w-1/2 aspect-square md:aspect-auto overflow-hidden bg-[#0f0f0f]">
                <img
                  src={selectedProduct.image}
                  alt={isRTL ? selectedProduct.nameFa : selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/60 to-transparent" />
                {selectedProduct.originalPrice && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-red-500/90 text-white text-[10px] sm:text-xs font-bold rounded-full backdrop-blur-sm">
                    {isRTL ? "تخفیف ویژه" : "Special Offer"}
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        style={{
                          color: i < Math.floor(selectedProduct.rating) ? "#808080" : "rgba(255,255,255,0.1)",
                          fill: i < Math.floor(selectedProduct.rating) ? "#808080" : "none",
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-white/40 text-[11px] sm:text-xs">
                    {selectedProduct.rating} ({selectedProduct.reviews.toLocaleString(isRTL ? "fa-IR" : "en-US")} {isRTL ? "نظر" : "reviews"})
                  </span>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-relaxed text-[#f5f0e8]"
                  style={{ fontFamily: "var(--font-display), 'Vazirmatn', sans-serif" }}
                >
                  {isRTL ? selectedProduct.nameFa : selectedProduct.name}
                </h3>

                <p className="text-sm leading-relaxed mb-5 sm:mb-6 text-[#a8a095]">
                  {isRTL ? selectedProduct.descriptionFa : selectedProduct.description}
                </p>

                <div className="mt-auto pt-4 sm:pt-5 border-t border-white/[0.06]">
                  <div className="flex items-baseline gap-2 mb-5 sm:mb-6">
                    <span
                      className="text-2xl sm:text-3xl font-bold text-[#808080]"
                      style={{ fontFamily: "var(--font-display), sans-serif" }}
                    >
                      {selectedProduct.price.toLocaleString(isRTL ? "fa-IR" : "en-US")}
                    </span>
                    <span className="text-[#a8a095]/60 text-sm">
                      {isRTL ? "تومان" : "IRR"}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-sm text-white/20 line-through">
                        {selectedProduct.originalPrice.toLocaleString(isRTL ? "fa-IR" : "en-US")}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      const storeProduct = toStoreProduct(selectedProduct);
                      addItem(storeProduct, storeProduct.colors[0], 1);
                      showToast({
                        title: t("common.addedToCart") as string,
                        description: isRTL ? selectedProduct.nameFa : selectedProduct.name,
                        variant: "cart",
                      });
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_30px_rgba(128,128,128,0.2)]"
                    style={{ backgroundColor: "#808080", color: "#1a1a1a" }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {isRTL ? "افزودن به سبد خرید" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}