"use client";

import { ArrowRight, Timer, Heart, Star, ShoppingCart } from "lucide-react";
import { appliances } from "@/app/data/appliances";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { useToast } from "@/app/context/Toastcontext";
import { getProductDisplayImage } from "@/app/lib/categoryImages";

// ─── Optimized Countdown (isolated, no full re-renders) ───
const CountdownTimer = memo(function CountdownTimer({ locale }: { locale: string }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const frameRef = useRef<number>(0);
  const lastUpdate = useRef(Date.now());

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      if (now - lastUpdate.current >= 1000) {
        lastUpdate.current = now;
        setTimeLeft((prev) => {
          if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
          if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          return prev;
        });
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== 0) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");
  const isRTL = locale === "fa";

  const units = [
    { value: timeLeft.hours, label: isRTL ? "ساعت" : "Hrs" },
    { value: timeLeft.minutes, label: isRTL ? "دقیقه" : "Min" },
    { value: timeLeft.seconds, label: isRTL ? "ثانیه" : "Sec" },
  ];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
      {units.map((item, i) => (
        <div key={i} className="text-center group">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center mb-1 transition-all duration-300 group-hover:border-[#808080]/20 group-hover:bg-white/[0.08]">
            <span className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8] tabular-nums">
              {formatTime(item.value)}
            </span>
          </div>
          <span className="text-[#a8a095]/60 text-[9px] sm:text-[10px]">{item.label}</span>
        </div>
      ))}
    </div>
  );
});
CountdownTimer.displayName = "CountdownTimer";

// ─── Offer Card ───
const OfferCard = memo(function OfferCard({
  product,
  index,
  locale,
  isVisible,
  t,
}: {
  product: (typeof appliances)[0];
  index: number;
  locale: string;
  isVisible: boolean;
  t: (key: string) => string;
}) {
  const isRTL = locale === "fa";
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();
  const liked = isWishlisted(product.id);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(isRTL ? "fa-IR" : "en-US").format(price);

  const productName = isRTL && product.nameFa ? product.nameFa : product.name;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const color = product.colors[0] || { name: "Default", nameFa: "پیش‌فرض", hex: "#808080" };
    addItem(product, color, 1);
    showToast({
      title: isRTL ? "به سبد خرید اضافه شد" : "Added to Cart",
      description: productName,
      variant: "cart",
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isAdded = toggleWishlist(product);
    showToast({
      title: isAdded
        ? (isRTL ? "به علاقه‌مندی‌ها اضافه شد" : "Added to Wishlist")
        : (isRTL ? "از علاقه‌مندی‌ها حذف شد" : "Removed from Wishlist"),
      description: productName,
      variant: isAdded ? "wishlist" : "info",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-[#141210]/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.06] hover:border-[#808080]/20 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:bg-[#141210]/95"
    >
      {/* Image — now links to the product detail page */}
      <Link href={`/${locale}/products/${product.id}`} className="relative aspect-[4/3] overflow-hidden block">
        <img
          src={getProductDisplayImage(product)}
          alt={isRTL && product.nameFa ? product.nameFa : product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading={index === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-red-500/90 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm shadow-lg">
            {discount}% {t("common.off")}
          </span>
        </div>

        <button
          type="button"
          onClick={handleWishlist}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.08] backdrop-blur-sm flex items-center justify-center hover:bg-white/[0.15] transition-all duration-300 hover:scale-110 active:scale-95 border border-white/[0.06]"
        >
          <Heart
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors"
            style={{
              color: liked ? "#ef4444" : "#f5f0e8",
              fill: liked ? "#ef4444" : "none",
            }}
          />
        </button>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <p className="text-[#a8a095]/60 text-[10px] font-medium uppercase tracking-wider mb-2">
          {isRTL && product.categoryFa ? product.categoryFa : product.category}
        </p>
        <Link href={`/${locale}/products/${product.id}`}>
          <h3 className="font-display text-sm sm:text-base font-semibold text-[#f5f0e8] mb-2 line-clamp-1 group-hover:text-[#808080] transition-colors duration-300">
            {isRTL && product.nameFa ? product.nameFa : product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className={`flex items-center gap-2 mb-3 sm:mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3"
                style={{
                  color: i < Math.floor(product.rating) ? "#808080" : "rgba(245,240,232,0.1)",
                  fill: i < Math.floor(product.rating) ? "#808080" : "none",
                }}
              />
            ))}
          </div>
          <span className="text-[#a8a095]/50 text-[11px]">
            ({product.reviews.toLocaleString(isRTL ? "fa-IR" : "en-US")})
          </span>
        </div>

        {/* Price */}
        <div className={`flex items-baseline gap-2 sm:gap-3 mb-4 sm:mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
          <span className="font-display text-xl sm:text-2xl font-bold text-[#808080]">
            {formatPrice(product.price)} {isRTL ? t("common.toman") : "$"}
          </span>
          {product.originalPrice && (
            <span className="text-[#a8a095]/30 text-xs sm:text-sm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-4 sm:mb-5">
          <div className={`flex items-center justify-between text-[10px] mb-1.5 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="text-[#a8a095]/50">
              {isRTL ? "فروخته‌شده: ۷۸٪" : "Sold: 78%"}
            </span>
            <span className="text-[#808080]">
              {isRTL ? "۵ عدد باقیمانده" : "5 left"}
            </span>
          </div>
          <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-gradient-to-r from-[#808080] to-[#959595] rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 animate-shimmer" />
            </div>
          </div>
        </div>

        {/* CTA — links to the product detail page */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-[#808080] text-white rounded-xl text-[11px] sm:text-xs font-semibold hover:bg-[#959595] transition-all duration-300 hover:shadow-[0_0_20px_rgba(128,128,128,0.3)] active:scale-[0.98]"
        >
          <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          {t("products.addToCart")}
        </button>
      </div>
    </motion.div>
  );
});
OfferCard.displayName = "OfferCard";

export default function SpecialOffers() {
  const { t, locale } = useI18n();
  const isRTL = locale === "fa";
  const { ref, isVisible } = useScrollAnimation(0.1);
  const offers = appliances.filter((p) => p.originalPrice).slice(0, 3);

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 text-white relative overflow-hidden bg-[#0f0f0f]">
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
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#808080] animate-pulse" />
              <span className="text-[#808080] text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
                {isRTL ? "محدود" : "Limited Time"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0e8] leading-tight">
              {t("products.specialOffers")}
            </h2>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <CountdownTimer locale={locale} />
            {/* Was missing entirely — now links to the offers-filtered products page */}
            <Link
              href={`/${locale}/products?offers=true`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#808080]/30 text-[#808080] text-xs font-semibold hover:bg-[#808080] hover:text-[#1a1a1a] transition-all duration-300"
            >
              {isRTL ? "مشاهده همه تخفیف‌ها" : "View All Offers"}
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {offers.map((product, index) => (
            <OfferCard
              key={product.id}
              product={product}
              index={index}
              locale={locale}
              isVisible={isVisible}
              t={t}
            />
          ))}
        </div>
      </div>

      {/* Shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}