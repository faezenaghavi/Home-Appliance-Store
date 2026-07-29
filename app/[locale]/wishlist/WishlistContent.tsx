"use client";

import { useI18n } from "@/app/i18n/Provider";
import { useWishlist } from "@/app/context/WishlistContext";
import { Home, ChevronRight, ChevronLeft, Heart, Trash2, ArrowUpRight, ArrowUpLeft } from "lucide-react";
import Link from "next/link";

export default function WishlistContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const { items, removeItem } = useWishlist(); // دریافت محصولات از Context

  const formatPrice = (price: number) => {
    return price.toLocaleString(isRTL ? "fa-IR" : "en-US");
  };

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pt-24 sm:pt-28 pb-16">
        
        {/* Breadcrumb */}
        <div className="text-sm text-[#8a8577] flex items-center gap-2 mb-8">
          <Link href={`/${locale}`} className="hover:text-[#c4a882] transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />{isRTL ? "خانه" : "Home"}
          </Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <span className="text-[#1a1a1a] font-medium">{t("wishlist.title")}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block px-4 py-1.5 bg-[#c4a882]/10 text-[#c4a882] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            <Heart className="w-3.5 h-3.5 inline mr-1.5" />{t("wishlist.title")}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">{t("wishlist.title")}</h1>
          <p className="text-[#8a8577] text-base">
            {items.length > 0 
              ? (isRTL ? `${items.length} محصول در لیست علاقه‌مندی‌های شما قرار دارد` : `${items.length} items in your wishlist`) 
              : t("wishlist.emptyDesc")
            }
          </p>
          <div className="w-20 h-1 bg-[#c4a882] rounded-full mt-6"></div>
        </div>

        {/* Grid */}
        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#1a1a1a]/5">
            <Heart className="w-16 h-16 text-[#c4a882]/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1a1a1a]">{t("wishlist.empty")}</h3>
            <p className="text-[#8a8577] mt-2 text-sm mb-6">{t("wishlist.emptyDesc")}</p>
            <Link href={`/${locale}/products`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#c4a882] transition-colors">
              {t("cart.continueShopping")}
              {isRTL ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl border border-[#1a1a1a]/5 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square bg-[#faf8f5] overflow-hidden flex items-center justify-center">
                  <span className="text-[#c4a882] text-5xl font-bold opacity-20">{product.name.charAt(0)}</span>
                  <button 
                    onClick={() => removeItem(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
                    aria-label={t("wishlist.removeFromWishlist")}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-[#1a1a1a] truncate">
                    {isRTL ? product.nameFa : product.name}
                  </h3>
                  <p className="text-[#c4a882] font-bold mt-2">
                    {formatPrice(product.price)} {t("common.currency")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}