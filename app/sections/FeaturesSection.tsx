"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { appliances } from "@/app/data/appliances"; // ایمپورت دیتابیس اصلی

function ProductCardItem({ product, index = 0 }: { product: typeof appliances[0]; index?: number }) {
  const [isLiked, setIsLiked] = useState(false);
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const router = useRouter();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const formatPrice = (price: number) => {
    return price.toLocaleString(isRTL ? "fa-IR" : "en-US");
  };

  const productName = isRTL ? (product.nameFa || product.name) : product.name;
  const productDesc = isRTL ? (product.descriptionFa || product.description) : product.description;

  const goToProduct = () => {
    router.push(`/${locale}/products/${product.id}`);
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
          src={product.images?.[0] || product.images}
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
          <div
            className="absolute top-4 right-4 z-10"
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              borderRadius: 999,
              padding: "6px 14px",
            }}
          >
            <span
              style={{
                color: "#1a1a1a",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              {isRTL ? "محصول جدید" : "New"}
            </span>
          </div>
        )}
        {product.isBestseller && (
          <div
            className="absolute top-4 right-4 z-10"
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              borderRadius: 999,
              padding: "6px 14px",
            }}
          >
            <span
              style={{
                color: "#1a1a1a",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              {isRTL ? "پرفروش" : "Bestseller"}
            </span>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 left-4 z-10 flex items-center justify-center transition-all hover:scale-110"
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Heart
            className="w-4 h-4 transition-colors"
            style={{
              color: isLiked ? "#ef4444" : "#ffffff",
              fill: isLiked ? "#ef4444" : "none",
            }}
          />
        </button>

        <div
          className="absolute bottom-0 left-0 right-0 p-5 z-10"
          style={{ direction: direction }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: 17,
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: 8,
              fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', sans-serif",
            }}
          >
            {productName}
          </h3>

          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 12,
              lineHeight: 1.7,
              marginBottom: 16,
              fontFamily: "var(--font-body), 'Vazirmatn', 'Tahoma', sans-serif",
            }}
          >
            {productDesc}
          </p>

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
              <span
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 11,
                  fontWeight: 500,
                }}
              >
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

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToProduct();
              }}
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
                const btn = e.currentTarget;
                btn.style.backgroundColor = "#ffffff";
                btn.style.color = "#1a1a1a";
                btn.style.borderColor = "#ffffff";
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.style.backgroundColor = "transparent";
                btn.style.color = "#ffffff";
                btn.style.borderColor = "rgba(255,255,255,0.6)";
              }}
            >
              {isRTL ? "مشاهده و خرید" : "View & Buy"}
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

  // انتخاب 4 محصول اول از دیتابیس اصلی
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
          <p
            style={{ color: "#8a8577" }}
            className="text-sm max-w-md leading-relaxed"
          >
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
    </section>
  );
}