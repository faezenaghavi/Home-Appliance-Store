"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, ArrowUpRight, Heart } from "lucide-react";
import { Product } from "@/app/types";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useI18n } from "@/app/i18n/Provider"; // ایمپورت useI18n برای دریافت زبان

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const { locale } = useI18n(); // دریافت زبان فعلی
  const router = useRouter(); // هوک ناوبری

  // تابع هدایت به صفحه جزئیات محصول
  const goToProduct = () => {
    router.push(`/${locale}/products/${product.id}`);
  };

  return (
    <div
      ref={ref}
      onClick={goToProduct} // با کلیک روی کل کارت، به صفحه محصول می‌رود
      className={`group transition-all duration-700 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-soft card-hover">
        {/* Image Area */}
        <div className="relative aspect-square overflow-hidden bg-weave-light">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
            {product.isNew && (
              <span className="px-3 py-1 bg-weave-accent text-white text-xs font-semibold rounded-full">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="px-3 py-1 bg-weave-dark text-white text-xs font-semibold rounded-full">
                Bestseller
              </span>
            )}
            {product.originalPrice && (
              <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-semibold rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // جلوگیری از انتقال کاربر به صفحه محصول
              setIsLiked(!isLiked);
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm 
                     flex items-center justify-center shadow-soft transition-all hover:scale-110 z-10"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isLiked ? "fill-red-500 text-red-500" : "text-weave-dark"
              }`}
            />
          </button>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-weave-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button 
              onClick={(e) => {
                e.stopPropagation(); // جلوگیری از اجرای دو بار
                goToProduct(); // هدایت به صفحه محصول
              }}
              className="btn-accent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              Quick View
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-weave-muted text-xs font-medium uppercase tracking-wider mb-1">
                {product.category}
              </p>
              <h3 className="font-display text-lg font-semibold text-weave-dark">
                {product.name}
              </h3>
            </div>
          </div>

          <p className="text-weave-muted text-sm line-clamp-2 mb-4">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4 pointer-events-none">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-weave-accent text-weave-accent"
                      : "text-weave-border"
                  }`}
                />
              ))}
            </div>
            <span className="text-weave-muted text-xs">
              {product.rating} ({product.reviews.toLocaleString()})
            </span>
          </div>

          {/* Color Options */}
          <div className="flex items-center gap-2 mb-4">
            {product.colors.map((color, i) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.stopPropagation(); // جلوگیری از رفتن به صفحه محصول
                  setSelectedImage(i);
                }}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedImage === i
                    ? "border-weave-accent scale-110"
                    : "border-transparent hover:border-weave-border"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-bold text-weave-dark">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-weave-muted text-sm line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                goToProduct();
              }}
              className="w-10 h-10 rounded-full bg-weave-dark text-white flex items-center justify-center
                         hover:bg-weave-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}