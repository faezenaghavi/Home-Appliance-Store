"use client";

import { useState } from "react";
import { Heart, ShoppingBag, ArrowLeft, TrendingUp, Star } from "lucide-react";
import ScrollReveal from "@/app/components/ScrollReveal";

const bestsellers = [
  {
    id: "1",
    name: "یخچال ساید بای ساید سامسونگ Family Hub",
    nameFa: "یخچال ساید بای ساید سامسونگ Family Hub",
    description: "صفحه نمایش هوشمند ۲۱ اینچ، دوربین داخلی، سیستم خنک‌کننده دوگانه",
    price: 85000000,
    originalPrice: 98000000,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=600&q=80",
    rating: 4.9,
    reviews: 128,
    rank: 1,
  },
  {
    id: "2",
    name: "ماشین لباسشویی ال‌جی ۹ کیلویی",
    nameFa: "ماشین لباسشویی ال‌جی ۹ کیلویی",
    description: "موتور اینورتر دایرکت درایو، ۱۴ برنامه شستشو، مصرف انرژی A+++",
    price: 32000000,
    image: "https://images.unsplash.com/photo-1626806775351-538068a21838?w=600&q=80",
    rating: 4.8,
    reviews: 96,
    rank: 2,
  },
  {
    id: "3",
    name: "جاروبرقی بی‌سیم دایسون V15 Detect",
    nameFa: "جاروبرقی بی‌سیم دایسون V15 Detect",
    description: "سنسور لیزری گرد و غبار، باتری ۶۰ دقیقه‌ای، فیلتر HEPA",
    price: 28000000,
    originalPrice: 35000000,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80",
    rating: 4.9,
    reviews: 215,
    rank: 3,
  },
  {
    id: "4",
    name: "فر توکار بوش سری ۸",
    nameFa: "فر توکار بوش سری ۸",
    description: "ظرفیت ۷۱ لیتر، ۱۵ برنامه پخت، تمیزشویی کاتالیزی",
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
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  rank: number;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [liked, setLiked] = useState(false);
  const formatPrice = (price: number) => price.toLocaleString("fa-IR");
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal animation="fade-up" delay={index * 150} duration={700}>
      <div
        className="group relative flex flex-col md:flex-row overflow-hidden transition-all duration-500 hover:shadow-2xl"
        style={{
          borderRadius: 24,
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          minHeight: 280,
        }}
        dir="rtl"
      >
        {/* Rank Number — Large decorative */}
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
            alt={product.nameFa}
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

          {/* Like Button on Image */}
          <button
            onClick={() => setLiked(!liked)}
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
            <span style={{ color: "#c4a882", fontSize: 10, fontWeight: 600 }}>پرفروش</span>
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
              {product.rating} ({product.reviews.toLocaleString("fa-IR")} نظر)
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
            {product.nameFa}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {product.description}
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
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>تومان</span>
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#c4a882",
                color: "#1a1a1a",
                cursor: "pointer",
              }}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>افزودن به سبد</span>
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function BestSellers() {
  return (
    <section
      dir="rtl"
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
            <div className="text-right">
              <span
                style={{ color: "#c4a882", letterSpacing: "0.2em" }}
                className="text-xs font-semibold uppercase mb-4 block"
              >
                پرفروش‌ترین‌ها
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-display), 'Playfair Display', serif",
                }}
              >
                محبوب‌ترین انتخاب‌ها
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={200} duration={800}>
            <p
              style={{ color: "rgba(255,255,255,0.5)" }}
              className="text-sm max-w-md leading-relaxed text-right"
            >
              محصولاتی که بیشترین خرید را داشته‌اند و رضایت مشتریان را جلب کرده‌اند
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Cards — alternating layout */}
        <div className="flex flex-col gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
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
              <span>مشاهده همه پرفروش‌ترین‌ها</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}