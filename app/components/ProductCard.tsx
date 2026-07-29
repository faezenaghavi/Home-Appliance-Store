"use client";

import { useState, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Star, ArrowUpRight, Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/app/types";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { useToast } from "@/app/context/Toastcontext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = memo(function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const { locale, direction, t } = useI18n();
  const router = useRouter();
  const isRTL = direction === "rtl";
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();

  const productName = isRTL && product.nameFa ? product.nameFa : product.name;
  const productDescription =
    isRTL && product.descriptionFa ? product.descriptionFa : product.description;
  const productCategory =
    isRTL && product.categoryFa ? product.categoryFa : product.category;

  const selectedColor = product.colors?.[selectedColorIdx] ?? {
    name: "Default",
    nameFa: "پیش‌فرض",
    hex: "#808080",
  };
  const liked = isWishlisted(product.id);
  const imageSrc = product.images?.[selectedColorIdx] ?? product.images?.[0] ?? "";

  const formatPrice = (price: number) =>
    price.toLocaleString(isRTL ? "fa-IR" : "en-US");

  const goToProduct = useCallback(() => {
    router.push(`/${locale}/products/${product.id}`);
  }, [router, locale, product.id]);

  const handleLike = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const isAdded = toggleWishlist(product);
      showToast({
        title: isAdded
          ? (t("common.addedToWishlist") as string)
          : (t("common.removedFromWishlist") as string),
        description: productName,
        variant: isAdded ? "wishlist" : "info",
      });
    },
    [toggleWishlist, product, showToast, t, productName]
  );

  const handleAddToCart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      addItem(product, selectedColor, 1);
      showToast({
        title: t("common.addedToCart") as string,
        description: productName,
        variant: "cart",
      });
    },
    [addItem, product, selectedColor, showToast, t, productName]
  );

  const handleColorSelect = useCallback((e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColorIdx(idx);
    setImageError(false);
  }, []);

  return (
    <article
      ref={ref}
      onClick={goToProduct}
      className={`group transition-all duration-700 cursor-pointer will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${Math.min(index * 100, 500)}ms` }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-soft card-hover hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500 border border-[#1a1a1a]/5">
        <div className="relative aspect-square overflow-hidden bg-[#f5f0eb]">
          {!imageError && imageSrc ? (
            <Image
              src={imageSrc}
              alt={productName}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setImageError(true)}
              priority={index < 2}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl font-bold text-[#808080]/20">
                {productName.charAt(0)}
              </span>
            </div>
          )}

          <div className="absolute top-4 start-4 flex flex-col gap-2 pointer-events-none z-10">
            {product.isNew && (
              <span className="px-3 py-1 bg-weave-accent text-white text-xs font-semibold rounded-full shadow-lg">
                {t("common.new")}
              </span>
            )}
            {product.isBestseller && (
              <span className="px-3 py-1 bg-weave-dark text-white text-xs font-semibold rounded-full shadow-lg">
                {isRTL ? "پرفروش" : "Bestseller"}
              </span>
            )}
            {product.originalPrice && (
              <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-semibold rounded-full shadow-lg">
                {t("common.sale")}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleLike}
            className="absolute top-4 end-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 z-20 active:scale-95"
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${
                liked ? "fill-red-500 text-red-500 scale-110" : "text-weave-dark"
              }`}
            />
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-weave-dark/60 via-weave-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 gap-2 px-4">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 max-w-[180px] py-2.5 px-4 bg-[#808080] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#666666] active:scale-95 shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {t("products.addToCart")}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToProduct();
              }}
              className="py-2.5 px-4 bg-white/90 text-[#1a1a1a] rounded-xl text-xs font-semibold flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:bg-white active:scale-95 shadow-lg"
            >
              {t("products.quickView")}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-weave-muted text-xs font-medium uppercase tracking-wider mb-1">
            {productCategory}
          </p>
          <h3 className="font-display text-lg font-semibold text-weave-dark line-clamp-1 group-hover:text-weave-accent transition-colors duration-300 mb-2">
            {productName}
          </h3>
          <p className="text-weave-muted text-sm line-clamp-2 mb-4">{productDescription}</p>

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
              {product.rating.toLocaleString(isRTL ? "fa-IR" : "en-US")} (
              {product.reviews.toLocaleString(isRTL ? "fa-IR" : "en-US")})
            </span>
          </div>

          {product.colors?.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              {product.colors.map((color, i) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={(e) => handleColorSelect(e, i)}
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                    selectedColorIdx === i
                      ? "border-weave-accent scale-110 shadow-md"
                      : "border-transparent hover:border-weave-border"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={isRTL && color.nameFa ? color.nameFa : color.name}
                />
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-display text-xl font-bold text-weave-dark">
                {isRTL
                  ? `${formatPrice(product.price)} ${t("common.currency")}`
                  : `${t("common.currency")}${formatPrice(product.price)}`}
              </span>
              {product.originalPrice && (
                <span className="text-weave-muted text-sm line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-10 h-10 rounded-full bg-weave-dark text-white flex items-center justify-center hover:bg-weave-accent transition-all duration-300 hover:scale-110 active:scale-95 shrink-0"
              aria-label={t("products.addToCart") as string}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});

export default ProductCard;
