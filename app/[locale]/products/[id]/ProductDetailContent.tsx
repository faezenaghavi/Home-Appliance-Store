"use client";

import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { appliances } from "@/app/data/appliances";
import { Home, ChevronRight, ChevronLeft, Heart, ShoppingBag, Share2, Star, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailContent({ id }: { id: string }) {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<"desc" | "specs">("desc");

  const product = appliances.find((p) => p.id === id);

  // اگر محصول پیدا نشد
  if (!product) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center text-[#8a8577] gap-4">
        <p>{t("common.error")}</p>
        <Link href={`/${locale}/products`} className="text-[#c4a882] hover:underline">
          {isRTL ? "بازگشت به فروشگاه" : "Back to Shop"}
        </Link>
      </div>
    );
  }

  // استفاده از مقادیر پیش‌فرض برای جلوگیری از خطاهای احتمالی در صورت خالی بودن دیتا
  const selectedColor = product.colors?.[0] || { name: "Default", nameFa: "پیش‌فرض", hex: "#1a1a1a" };
  const productName = isRTL && product.nameFa ? product.nameFa : product.name;

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pt-24 sm:pt-28 pb-16">
        
        {/* Breadcrumb */}
        <div className="text-sm text-[#8a8577] flex items-center gap-2 mb-8">
          <Link href={`/${locale}`} scroll={true} className="hover:text-[#c4a882] transition-colors flex items-center gap-1.5">
  <Home className="w-3.5 h-3.5" />{isRTL ? "خانه" : "Home"}
</Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <Link href={`/${locale}/products`} className="hover:text-[#c4a882]">
            {t("products.title")}
          </Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <span className="text-[#1a1a1a] font-medium truncate max-w-[200px]">{productName}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Image Placeholder */}
          <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 aspect-square flex items-center justify-center shadow-sm">
            <span className="text-[#c4a882] text-8xl font-bold opacity-10">
              {product.name?.charAt(0) || "N"}
            </span>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              {product.brand && (
                <span className="px-3 py-1 bg-[#1a1a1a] text-white text-[10px] font-bold rounded-full">
                  {isRTL && product.brandFa ? product.brandFa : product.brand}
                </span>
              )}
              {product.isNew && (
                <span className="px-3 py-1 bg-[#c4a882]/10 text-[#c4a882] text-[10px] font-bold rounded-full">
                  {isRTL ? "جدید" : "New"}
                </span>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 leading-tight">
              {productName}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 text-[#c4a882]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#c4a882]" />)}
              </div>
              <span className="text-sm text-[#8a8577]">
                {product.rating || "0"} ({product.reviews || "0"} {isRTL ? "نظر" : "reviews"})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-bold text-[#1a1a1a]">
                {new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(product.price || 0)} {t("common.currency")}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-[#8a8577] line-through">
                  {new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <p className="text-sm font-medium text-[#1a1a1a] mb-3">{t("product.color")}</p>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, idx) => (
                    <button 
                      key={idx} 
                      className="w-8 h-8 rounded-full border-2 border-transparent hover:border-[#c4a882] transition-colors shadow-sm" 
                      style={{ backgroundColor: color.hex }} 
                      title={isRTL ? color.nameFa : color.name} 
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button 
                onClick={() => addItem(product, selectedColor, 1)}
                className="flex-1 py-4 bg-[#1a1a1a] text-white rounded-xl font-bold hover:bg-[#c4a882] transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                {t("product.addToCart")}
              </button>
              <button className="w-14 h-14 rounded-xl border border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a]/70 hover:border-[#c4a882] hover:text-[#c4a882] transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-14 h-14 rounded-xl border border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a]/70 hover:border-[#c4a882] hover:text-[#c4a882] transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-[#8a8577]"><Check className="w-4 h-4 text-[#c4a882]" />{t("hero.warranty")}</div>
              <div className="flex items-center gap-2 text-sm text-[#8a8577]"><ShoppingBag className="w-4 h-4 text-[#c4a882]" />{t("products.freeShipping")}</div>
              <div className="flex items-center gap-2 text-sm text-[#8a8577]"><Heart className="w-4 h-4 text-[#c4a882]" />{t("hero.returns")}</div>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#1a1a1a]/10 mb-6">
              <div className="flex gap-6">
                <button 
                  onClick={() => setActiveTab("desc")} 
                  className={`pb-3 text-sm font-medium transition-colors ${activeTab === "desc" ? "text-[#1a1a1a] border-b-2 border-[#c4a882]" : "text-[#8a8577] hover:text-[#1a1a1a]"}`}
                >
                  {t("product.description")}
                </button>
                <button 
                  onClick={() => setActiveTab("specs")} 
                  className={`pb-3 text-sm font-medium transition-colors ${activeTab === "specs" ? "text-[#1a1a1a] border-b-2 border-[#c4a882]" : "text-[#8a8577] hover:text-[#1a1a1a]"}`}
                >
                  {t("product.specifications")}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "desc" && (
              <p className="text-[#8a8577] text-sm leading-relaxed">
                {isRTL && product.descriptionFa ? product.descriptionFa : (product.description || (isRTL ? "توضیحات موجود نیست." : "No description available."))}
              </p>
            )}
            
            {activeTab === "specs" && (
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {product.specs ? (
                  Object.entries(isRTL && product.specsFa ? product.specsFa : product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm border-b border-[#1a1a1a]/5 pb-2">
                      <span className="text-[#8a8577]">{key}</span>
                      <span className="text-[#1a1a1a] font-medium">{value}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-[#8a8577] text-sm col-span-2">{isRTL ? "مشخصات فنی موجود نیست." : "No specifications available."}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}