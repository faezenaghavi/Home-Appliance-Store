"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { appliances } from "@/app/data/appliances"; 
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { useToast } from "@/app/context/Toastcontext";

function ProductCardItem({ product, index = 0 }: { product: typeof appliances[0]; index?: number }) {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const router = useRouter();
  const { ref, isVisible } = useScrollAnimation(0.1);

  // دریافت توابع از کانتکست‌ها
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();

  const formatPrice = (price: number) => {
    return price.toLocaleString(isRTL ? "fa-IR" : "en-US");
  };

  const productName = isRTL ? (product.nameFa || product.name) : product.name;
  const productImage = Array.isArray(product.images) ? product.images[0] : "";

  const liked = isWishlisted(product.id);

  const goToProduct = () => {
    router.push(`/${locale}/products/${product.id}`);
  };

  // اکشن افزودن به سبد خرید
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // انتخاب رنگ پیش‌فرض (اولین رنگ) برای افزودن سریع به سبد
    const defaultColor = product.colors[0] || { name: "Default", nameFa: "پیش‌فرض", hex: "#000000" };
    addItem(product, defaultColor, 1);
    
    showToast({
      title: isRTL ? "به سبد خرید اضافه شد" : "Added to Cart",
      description: productName,
      variant: "cart"
    });
  };

  // اکشن افزودن به علاقه‌مندی‌ها
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isAdded = toggleWishlist(product);
    
    showToast({
      title: isAdded 
        ? (isRTL ? "به علاقه‌مندی‌ها اضافه شد" : "Added to Wishlist") 
        : (isRTL ? "از علاقه‌مندی‌ها حذف شد" : "Removed from Wishlist"),
      description: productName,
      variant: isAdded ? "wishlist" : "info"
    });
  };

  return (
    <div
      ref={ref}
      dir={direction}
      className={`group transition-all duration-700 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onClick={goToProduct}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 28,
          aspectRatio: "3/4.2",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={productImage} 
          alt={productName}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0) 65%)",
          }}
        />

        {product.isNew && (
          <div className="absolute top-4 right-4 z-10 bg-white/95 rounded-full py-1.5 px-3.5">
            <span className="text-[#1a1a1a] text-[11px] font-semibold tracking-wide">
              {isRTL ? "محصول جدید" : "New"}
            </span>
          </div>
        )}
        {product.isBestseller && (
          <div className="absolute top-4 right-4 z-10 bg-white/95 rounded-full py-1.5 px-3.5">
            <span className="text-[#1a1a1a] text-[11px] font-semibold tracking-wide">
              {isRTL ? "پرفروش" : "Bestseller"}
            </span>
          </div>
        )}

        {/* دکمه علاقه‌مندی با قابلیت Toast و اتصال به Context */}
        <button
          onClick={handleToggleWishlist}
          className="absolute top-4 left-4 z-10 flex items-center justify-center transition-all hover:scale-110 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border-none cursor-pointer"
        >
          <Heart
            className="w-4 h-4 transition-colors"
            style={{
              color: liked ? "#ef4444" : "#ffffff",
              fill: liked ? "#ef4444" : "none",
            }}
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-5 z-10" style={{ direction }}>
          <h3
            style={{
              color: "#ffffff",
              fontSize: 17,
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: 24,
              fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', sans-serif",
            }}
          >
            {productName}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 700,
                  fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', sans-serif",
                }}
              >
                {formatPrice(product.price)}
              </span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 500 }}>
                {isRTL ? "تومان" : "IRR"}
              </span>
              {product.originalPrice && (
                <span
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 12,
                    textDecoration: "line-through",
                    marginRight: isRTL ? 8 : 0,
                    marginLeft: isRTL ? 0 : 8,
                  }}
                >
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* دکمه افزودن به سبد خرید با قابلیت Toast */}
            <button
              onClick={handleAddToCart}
              className="cta-btn"
              style={{
                border: "1.5px solid rgba(255,255,255,0.6)",
                borderRadius: 999,
                padding: "8px 18px",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: 0.3,
                fontFamily: "var(--font-body), 'Vazirmatn', 'Tahoma', sans-serif",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#1a1a1a";
                e.currentTarget.style.borderColor = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
              }}
            >
              {isRTL ? "افزودن به سبد" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const { ref, isVisible } = useScrollAnimation(0.1);

  const featuredItems = appliances.slice(0, 4);

  return (
    <section
      id="products"
      dir={direction}
      style={{ backgroundColor: "#f5f0eb" }}
      className="py-24 md:py-32"
    >
      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className={isRTL ? "text-right" : "text-left"}>
            <span
              style={{ color: "#c4a882", letterSpacing: "0.2em" }}
              className="text-xs font-semibold uppercase mb-4 block"
            >
              {isRTL ? "محصولات ویژه" : "Featured Products"}
            </span>
            <h2
              style={{
                color: "#1a1a1a",
                fontFamily: "var(--font-display), 'Playfair Display', serif",
              }}
              className="text-4xl md:text-5xl font-bold"
            >
              {isRTL ? "جدیدترین لوازم خانگی" : "Latest Home Appliances"}
            </h2>
          </div>
          <p style={{ color: "#8a8577" }} className="text-sm max-w-md leading-relaxed">
            {isRTL
              ? "مجموعه‌ای از بهترین و جدیدترین لوازم خانگی با کیفیت بالا و گارانتی معتبر"
              : "A curated collection of the best and newest home appliances with high quality and valid warranty"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((product, index) => (
            <ProductCardItem key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* انیمیشن Toast در صورت عدم وجود در گلوبال css */}
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </section>
  );
}