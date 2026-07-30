"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Share2,
  Star,
  Check,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { useToast } from "@/app/context/Toastcontext";
import Breadcrumb from "@/app/components/Breadcrumb";
import ProductCard from "@/app/components/ProductCard";
import { getProductById, getAllCatalogProducts } from "@/app/data/catalog";
import { getProductDisplayImages } from "@/app/lib/categoryImages";

type Tab = "desc" | "specs" | "features";

export default function ProductDetailContent({ id }: { id: string }) {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();

  const product = getProductById(id);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>("desc");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return getAllCatalogProducts()
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center text-[#8a8577] gap-4">
        <p>{isRTL ? "محصول یافت نشد." : "Product not found."}</p>
        <Link href={`/${locale}/products`} className="text-[#808080] hover:underline">
          {t("product.backToProducts")}
        </Link>
      </div>
    );
  }

  const selectedColor = product.colors?.[selectedColorIdx] ?? {
    name: "Default",
    nameFa: "پیش‌فرض",
    hex: "#808080",
  };
  const productName = isRTL && product.nameFa ? product.nameFa : product.name;
  const productDesc =
    isRTL && product.descriptionFa ? product.descriptionFa : product.description;
  const features = isRTL && product.featuresFa?.length ? product.featuresFa : product.features;
  const specs = isRTL && product.specsFa ? product.specsFa : product.specs;
  const liked = isWishlisted(product.id);

  const images = getProductDisplayImages(product);

  const formatPrice = (price: number) =>
    price.toLocaleString(isRTL ? "fa-IR" : "en-US");

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity);
    showToast({
      title: t("common.addedToCart") as string,
      description: productName,
      variant: "cart",
    });
  };

  const handleWishlist = () => {
    const isAdded = toggleWishlist(product);
    showToast({
      title: isAdded
        ? (t("common.addedToWishlist") as string)
        : (t("common.removedFromWishlist") as string),
      description: productName,
      variant: isAdded ? "wishlist" : "info",
    });
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      showToast({
        variant: "success",
        title: isRTL ? "لینک کپی شد" : "Link copied",
      });
    } catch {
      showToast({ variant: "error", title: isRTL ? "کپی نشد" : "Could not copy" });
    }
  };

  return (
    <main dir={direction} className="min-h-screen bg-[#f5f0eb] relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#808080]/[0.05] rounded-full blur-[120px]" />

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto relative z-10 pt-24 sm:pt-28 pb-16">
        <Breadcrumb
          items={[
            { label: isRTL ? "محصولات" : "Products", href: `/${locale}/products` },
            { label: productName },
          ]}
          className="mb-8 sm:mb-10"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative aspect-square bg-white rounded-3xl border border-[#1a1a1a]/8 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              {!imageErrors[activeImage] && images[activeImage] ? (
                <Image
                  src={images[activeImage]}
                  alt={productName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  onError={() =>
                    setImageErrors((prev) => ({ ...prev, [activeImage]: true }))
                  }
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#faf8f5] to-[#ede8e0]">
                  <span className="font-display text-[120px] font-bold text-[#808080]/15 select-none">
                    {productName.charAt(0)}
                  </span>
                </div>
              )}

              {discountPercent > 0 && (
                <span className="absolute top-5 start-5 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {discountPercent}% {isRTL ? "تخفیف" : "OFF"}
                </span>
              )}

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1))
                    }
                    className="absolute top-1/2 start-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-white shadow-sm transition-colors"
                  >
                    {isRTL ? (
                      <ChevronRight className="w-5 h-5 text-[#1a1a1a]/70" />
                    ) : (
                      <ChevronLeft className="w-5 h-5 text-[#1a1a1a]/70" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((i) => (i === images.length - 1 ? 0 : i + 1))
                    }
                    className="absolute top-1/2 end-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-white shadow-sm transition-colors"
                  >
                    {isRTL ? (
                      <ChevronLeft className="w-5 h-5 text-[#1a1a1a]/70" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-[#1a1a1a]/70" />
                    )}
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === idx
                        ? "border-[#808080] shadow-md"
                        : "border-[#1a1a1a]/10 hover:border-[#808080]/50"
                    }`}
                  >
                    {!imageErrors[idx] && img ? (
                      <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                    ) : (
                      <div className="absolute inset-0 bg-[#faf8f5] flex items-center justify-center text-[#808080]/40 font-bold">
                        {idx + 1}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                {isRTL && product.brandFa ? product.brandFa : product.brand}
              </span>
              {product.isNew && (
                <span className="px-3 py-1 bg-[#808080]/15 text-[#808080] text-[10px] font-bold rounded-full">
                  {t("common.new")}
                </span>
              )}
              {product.isBestseller && (
                <span className="px-3 py-1 bg-[#808080]/15 text-[#808080] text-[10px] font-bold rounded-full">
                  {isRTL ? "پرفروش" : "Bestseller"}
                </span>
              )}
              <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
                {t("product.inStock")}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] leading-tight mb-4">
              {productName}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#808080] text-[#808080]"
                        : "text-[#1a1a1a]/15"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8a8577]">
                {product.rating.toLocaleString(isRTL ? "fa-IR" : "en-US")} ·{" "}
                {product.reviews.toLocaleString(isRTL ? "fa-IR" : "en-US")}{" "}
                {isRTL ? "نظر" : "reviews"}
              </span>
            </div>

            <div className="flex items-end gap-4 mb-8 pb-8 border-b border-[#1a1a1a]/10">
              <span className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
                {formatPrice(product.price)} {t("common.currency")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-[#8a8577] line-through mb-1">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="mb-1 px-2 py-0.5 bg-red-50 text-red-600 text-xs font-bold rounded-lg flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {discountPercent}%
                  </span>
                </>
              )}
            </div>

            <p className="text-[#8a8577] text-sm leading-relaxed mb-8 line-clamp-3">
              {productDesc}
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-xs">
              <div className="p-3 bg-white rounded-xl border border-[#1a1a1a]/8">
                <span className="text-[#8a8577] block mb-1">{t("product.model")}</span>
                <span className="font-semibold text-[#1a1a1a]">{product.model}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#1a1a1a]/8">
                <span className="text-[#8a8577] block mb-1">{t("product.sku")}</span>
                <span className="font-semibold text-[#1a1a1a] font-mono">{product.id.toUpperCase()}</span>
              </div>
            </div>

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#1a1a1a] mb-3">
                  {t("product.color")}:{" "}
                  <span className="font-normal text-[#8a8577]">
                    {isRTL && selectedColor.nameFa ? selectedColor.nameFa : selectedColor.name}
                  </span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
                        selectedColorIdx === idx
                          ? "border-[#808080] bg-[#808080]/5 shadow-sm"
                          : "border-[#1a1a1a]/10 hover:border-[#808080]/40 bg-white"
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-[#1a1a1a]/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-medium text-[#1a1a1a]">
                        {isRTL && color.nameFa ? color.nameFa : color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#1a1a1a] mb-3">{t("product.quantity")}</p>
              <div className="inline-flex items-center border border-[#1a1a1a]/10 rounded-xl bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-[#1a1a1a] hover:bg-[#faf8f5] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold text-[#1a1a1a]">
                  {quantity.toLocaleString(isRTL ? "fa-IR" : "en-US")}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-[#1a1a1a] hover:bg-[#faf8f5] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-[#1a1a1a] text-white rounded-2xl font-bold hover:bg-[#808080] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <ShoppingBag className="w-5 h-5" />
                {t("product.addToCart")}
              </button>
              <button
                type="button"
                onClick={handleWishlist}
                className={`w-full sm:w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 active:scale-95 ${
                  liked
                    ? "border-red-200 bg-red-50 text-red-500"
                    : "border-[#1a1a1a]/10 bg-white text-[#1a1a1a]/70 hover:border-[#808080] hover:text-[#808080]"
                }`}
                aria-label={t("product.addToWishlist") as string}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-red-500" : ""}`} />
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="w-full sm:w-14 h-14 rounded-2xl border border-[#1a1a1a]/10 bg-white flex items-center justify-center text-[#1a1a1a]/70 hover:border-[#808080] hover:text-[#808080] transition-all active:scale-95"
                aria-label={t("product.share") as string}
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust */}
            <div className="grid sm:grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-[#1a1a1a]/8">
              <div className="flex items-center gap-2.5 text-xs text-[#8a8577]">
                <Shield className="w-4 h-4 text-[#808080] shrink-0" />
                {t("product.warranty")}
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#8a8577]">
                <Truck className="w-4 h-4 text-[#808080] shrink-0" />
                {t("products.freeShipping")}
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#8a8577]">
                <RotateCcw className="w-4 h-4 text-[#808080] shrink-0" />
                {t("product.return")}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16 sm:mt-20">
          <div className="flex gap-1 p-1 bg-white rounded-2xl border border-[#1a1a1a]/8 w-fit max-w-full overflow-x-auto mb-8">
            {(
              [
                { key: "desc" as Tab, label: t("product.description") },
                { key: "specs" as Tab, label: t("product.specifications") },
                { key: "features" as Tab, label: isRTL ? "ویژگی‌ها" : "Features" },
              ] as const
            ).map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === key
                    ? "bg-[#1a1a1a] text-white shadow-sm"
                    : "text-[#8a8577] hover:text-[#1a1a1a]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-[#1a1a1a]/8 p-6 sm:p-10 shadow-sm">
            {activeTab === "desc" && (
              <p className="text-[#8a8577] text-sm sm:text-base leading-[1.9] max-w-3xl">
                {productDesc}
              </p>
            )}

            {activeTab === "specs" && (
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
                {specs && Object.keys(specs).length > 0 ? (
                  Object.entries(specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between gap-4 py-4 border-b border-[#1a1a1a]/6 text-sm last:border-0"
                    >
                      <span className="text-[#8a8577]">{key}</span>
                      <span className="text-[#1a1a1a] font-medium text-end">{value}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-[#8a8577] text-sm col-span-2">
                    {isRTL ? "مشخصات فنی موجود نیست." : "No specifications available."}
                  </p>
                )}
              </div>
            )}

            {activeTab === "features" && (
              <ul className="grid sm:grid-cols-2 gap-3">
                {features?.length > 0 ? (
                  features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 bg-[#faf8f5] rounded-xl text-sm text-[#1a1a1a]"
                    >
                      <Check className="w-4 h-4 text-[#808080] shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))
                ) : (
                  <p className="text-[#8a8577] text-sm col-span-2">
                    {isRTL ? "ویژگی‌ای ثبت نشده." : "No features listed."}
                  </p>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <div className="text-center mb-10">
              <span
                style={{ color: "#808080", letterSpacing: "0.2em" }}
                className="text-[11px] font-bold uppercase mb-4 block"
              >
                {t("product.related")}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
                {isRTL ? "محصولات مشابه" : "You May Also Like"}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
