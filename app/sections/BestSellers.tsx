"use client";

import { useState, useEffect } from "react";
import { Heart, ShoppingBag, ArrowLeft, TrendingUp, Star, X } from "lucide-react";
import ScrollReveal from "@/app/components/ScrollReveal";
import { useI18n } from "@/app/i18n/Provider"; // ایمپورت هوک زبان

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

function ProductCard({ product, index, onCardClick }: { product: Product; index: number; onCardClick: () => void }) {
  const [liked, setLiked] = useState(false);
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  
  const formatPrice = (price: number) => price.toLocaleString(isRTL ? "fa-IR" : "en-US");
  const isEven = index % 2 === 0;
  
  const name = isRTL ? product.nameFa : product.name;
  const desc = isRTL ? product.descriptionFa : product.description;

  return (
    <ScrollReveal animation="fade-up" delay={index * 150} duration={700}>
      <div
        onClick={onCardClick}
        className="group relative flex flex-col md:flex-row overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer"
        style={{
          borderRadius: 24,
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          minHeight: 280,
        }}
        dir={direction}
      >
        {/* Rank Number */}
        <div
          className="absolute top-4 right-6 z-20 font-bold select-none pointer-events-none"
          style={{
            fontSize: 72,
            color: "rgba(196,168,130,0.08)",
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
                ? "linear-gradient(to left, rgba(26,26,26,0.6) 0%, transparent 60%)"
                : "linear-gradient(to right, rgba(26,26,26,0.6) 0%, transparent 60%)",
            }}
          />

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="absolute top-4 left-4 z-10 flex items-center justify-center transition-all hover:scale-110"
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              backgroundColor: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              border: "none",
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
            style={{ backgroundColor: "rgba(196,168,130,0.2)", backdropFilter: "blur(8px)" }}
          >
            <TrendingUp className="w-3 h-3" style={{ color: "#c4a882" }} />
            <span style={{ color: "#c4a882", fontSize: 10, fontWeight: 600 }}>
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
                    color: i < Math.floor(product.rating) ? "#c4a882" : "rgba(255,255,255,0.15)",
                    fill: i < Math.floor(product.rating) ? "#c4a882" : "none",
                  }}
                />
              ))}
            </div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
              {product.rating} ({product.reviews.toLocaleString(isRTL ? "fa-IR" : "en-US")} {isRTL ? "نظر" : "reviews"})
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-bold mb-3 leading-relaxed"
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', sans-serif",
            }}
          >
            {name}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6 line-clamp-2"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {desc}
          </p>

          {/* Price & CTA */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-baseline gap-2">
              <span
                className="text-xl font-bold"
                style={{
                  color: "#c4a882",
                  fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', sans-serif",
                }}
              >
                {formatPrice(product.price)}
              </span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                {isRTL ? "تومان" : "IRR"}
              </span>
              {product.originalPrice && (
                <span
                  className="text-sm mr-2"
                  style={{ color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}
                >
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                alert(`${name} ${isRTL ? "به سبد اضافه شد!" : "added to cart!"}`);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#c4a882",
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
  const { locale, direction } = useI18n();
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
        style={{ backgroundColor: "#1a1a1a" }}
        className="py-24 md:py-32 relative overflow-hidden"
      >
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background: "linear-gradient(to left, rgba(196,168,130,0.06) 0%, transparent 100%)",
          }}
        />

        <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <ScrollReveal animation="fade-right" duration={800}>
              <div className={`text-${isRTL ? "right" : "left"}`}>
                <span
                  style={{ color: "#c4a882", letterSpacing: "0.2em" }}
                  className="text-xs font-semibold uppercase mb-4 block"
                >
                  {isRTL ? "پرفروش‌ترین‌ها" : "Bestsellers"}
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold"
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-display), 'Playfair Display', serif",
                  }}
                >
                  {isRTL ? "محبوب‌ترین انتخاب‌ها" : "Most Popular Choices"}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} duration={800}>
              <p
                style={{ color: "rgba(255,255,255,0.5)" }}
                className={`text-sm max-w-md leading-relaxed text-${isRTL ? "right" : "left"}`}
              >
                {isRTL 
                  ? "محصولاتی که بیشترین خرید را داشته‌اند و رضایت مشتریان را جلب کرده‌اند" 
                  : "Products with the highest sales and customer satisfaction"}
              </p>
            </ScrollReveal>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
                onCardClick={() => setSelectedProduct(product)} 
              />
            ))}
          </div>

          {/* View All */}
          <ScrollReveal animation="fade-up" delay={600} duration={700}>
            <div className="text-center mt-14">
              <a
                href="#bestsellers"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                style={{ color: "#c4a882" }}
              >
                <span>{isRTL ? "مشاهده همه پرفروش‌ترین‌ها" : "View All Bestsellers"}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4 rotate-180" />}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
          dir={direction}
          onClick={() => setSelectedProduct(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 left-4 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Side */}
            <div className="relative md:w-1/2 aspect-square md:aspect-auto overflow-hidden bg-[#111]">
              <img
                src={selectedProduct.image}
                alt={isRTL ? selectedProduct.nameFa : selectedProduct.name}
                className="w-full h-full object-cover"
              />
              {selectedProduct.originalPrice && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  {isRTL ? "تخفیف ویژه" : "Special Offer"}
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{
                        color: i < Math.floor(selectedProduct.rating) ? "#c4a882" : "rgba(255,255,255,0.15)",
                        fill: i < Math.floor(selectedProduct.rating) ? "#c4a882" : "none",
                      }}
                    />
                  ))}
                </div>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                  {selectedProduct.rating} ({selectedProduct.reviews.toLocaleString(isRTL ? "fa-IR" : "en-US")} {isRTL ? "نظر" : "reviews"})
                </span>
              </div>

              <h3
                className="text-2xl font-bold mb-4 leading-relaxed"
                style={{ color: "#ffffff", fontFamily: "var(--font-display), 'Vazirmatn', sans-serif" }}
              >
                {isRTL ? selectedProduct.nameFa : selectedProduct.name}
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                {isRTL ? selectedProduct.descriptionFa : selectedProduct.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex items-baseline gap-2 mb-6">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "#c4a882", fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {selectedProduct.price.toLocaleString(isRTL ? "fa-IR" : "en-US")}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                    {isRTL ? "تومان" : "IRR"}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span
                      className="text-sm mr-2"
                      style={{ color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}
                    >
                      {selectedProduct.originalPrice.toLocaleString(isRTL ? "fa-IR" : "en-US")}
                    </span>
                  )}
                </div>

                <button
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95"
                  style={{ backgroundColor: "#c4a882", color: "#1a1a1a" }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  {isRTL ? "افزودن به سبد خرید" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}