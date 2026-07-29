"use client";

import { useState, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Star, ArrowUpRight, Heart } from "lucide-react";
import { Product } from "@/app/types";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useI18n } from "@/app/i18n/Provider";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = memo(function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const { locale } = useI18n();
  const router = useRouter();

  const goToProduct = useCallback(() => {
    router.push(`/${locale}/products/${product.id}`);
  }, [router, locale, product.id]);

  const handleLike = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(prev => !prev);
  }, []);

  const handleColorSelect = useCallback((e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImage(idx);
  }, []);

  const handleQuickView = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    goToProduct();
  }, [goToProduct]);

  return (
    <article
      ref={ref}
      onClick={goToProduct}
      className={`group transition-all duration-700 cursor-pointer will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${Math.min(index * 100, 500)}ms` }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-soft card-hover hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500">
        {/* Image Area */}
        <div className="relative aspect-square overflow-hidden bg-weave-light">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover transition-all duration-700 group-hover:scale-105 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)}
            priority={index < 2}
          />
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-weave-light animate-pulse" />
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none z-10">
            {product.isNew && (
              <span className="px-3 py-1 bg-weave-accent text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="px-3 py-1 bg-weave-dark text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
                Bestseller
              </span>
            )}
            {product.originalPrice && (
              <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
                Sale
              </span>
            )}
          </div>

          {/* Like Button */}
          <button
            onClick={handleLike}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm 
                     flex items-center justify-center shadow-soft transition-all duration-300 hover:scale-110 hover:shadow-lg z-20 active:scale-95"
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${
                isLiked ? "fill-red-500 text-red-500 scale-110" : "text-weave-dark"
              }`}
            />
          </button>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-weave-dark/60 via-weave-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
            <button 
              onClick={handleQuickView}
              className="btn-accent transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg"
            >
              Quick View
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <p className="text-weave-muted text-xs font-medium uppercase tracking-wider mb-1">
                {product.category}
              </p>
              <h3 className="font-display text-lg font-semibold text-weave-dark line-clamp-1 group-hover:text-weave-accent transition-colors duration-300">
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
                  className={`w-3.5 h-3.5 transition-colors duration-300 ${
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
                onClick={(e) => handleColorSelect(e, i)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  selectedImage === i
                    ? "border-weave-accent scale-110 shadow-md"
                    : "border-transparent hover:border-weave-border hover:scale-105"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Select color ${color.name}`}
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
                e.preventDefault();
                e.stopPropagation();
                goToProduct();
              }}
              className="w-10 h-10 rounded-full bg-weave-dark text-white flex items-center justify-center
                         hover:bg-weave-accent transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
              aria-label="View product"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});

export default ProductCard;