"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import ProductCard from "@/app/components/ProductCard";

type Tab = "description" | "features" | "specs" | "reviews";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id } = use(params);
  const { locale, direction, t } = useI18n();
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  const product = products.find((p) => p.id === id);
  const related = useMemo(
    () => products.filter((p) => p.id !== id && p.category === product?.category).slice(0, 3),
    [id, product]
  );

  const [activeImage, setActiveImage] = useState(0);
  const [tab, setTab] = useState<Tab>("description");
  const [added, setAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  if (!product) {
    return (
      <main className="min-h-screen bg-weave-cream flex items-center justify-center py-32">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-weave-dark mb-3">
            {t("product.notFoundTitle")}
          </h1>
          <p className="text-weave-muted mb-6">{t("product.notFoundBody")}</p>
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-weave-dark text-white rounded-full text-sm font-semibold hover:bg-weave-accent transition-colors"
          >
            {t("product.backToProducts")}
          </Link>
        </div>
      </main>
    );
  }

  const name = locale === "fa" && product.nameFa ? product.nameFa : product.name;
  const category = locale === "fa" && product.categoryFa ? product.categoryFa : product.category;
  const description = locale === "fa" && product.descriptionFa ? product.descriptionFa : product.description;
  const features = locale === "fa" && product.featuresFa ? product.featuresFa : product.features;
  const specs = locale === "fa" && product.specsFa ? product.specsFa : product.specs;
  const inWishlist = isInWishlist(product.id);
  const Chevron = direction === "rtl" ? ChevronLeft : ChevronRight;

  const handleAddToCart = () => {
    if (!selectedColor) return;
    addItem(product, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "description", label: t("product.tabs.description") as string },
    { key: "features", label: t("product.tabs.features") as string },
    { key: "specs", label: t("product.tabs.specs") as string },
    { key: "reviews", label: t("product.tabs.reviews") as string },
  ];

  return (
    <main className="min-h-screen bg-weave-cream pt-28 sm:pt-32 pb-20">
      <div className="section-padding">
        <div className="flex items-center gap-2 text-xs text-weave-muted mb-8">
          <Link href={`/${locale}`} className="hover:text-weave-dark transition-colors">
            {t("breadcrumb.home")}
          </Link>
          <Chevron className="w-3.5 h-3.5" />
          <Link href={`/${locale}/products`} className="hover:text-weave-dark transition-colors">
            {t("nav.products")}
          </Link>
          <Chevron className="w-3.5 h-3.5" />
          <span className="text-weave-dark">{name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden mb-4 border border-weave-border/50">
              <Image
                src={product.images[activeImage]}
                alt={name}
                fill
                className="object-contain p-10"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={img + i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                      activeImage === i ? "border-weave-accent" : "border-weave-border/60"
                    }`}
                  >
                    <Image src={img} alt={`${name} ${i + 1}`} fill className="object-contain p-2 bg-white" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-weave-accent text-xs font-semibold tracking-widest uppercase mb-2">
              {category}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-weave-dark mb-3">
              {name}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating) ? "fill-weave-accent text-weave-accent" : "text-weave-border"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-weave-dark font-medium">{product.rating}</span>
              <span className="text-sm text-weave-muted">
                ({product.reviews} {t("common.reviews")})
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-weave-dark">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-weave-muted line-through text-lg">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="px-2.5 py-1 bg-red-50 text-red-500 text-xs font-semibold rounded-full">
                    {t("product.discountBadge")}
                  </span>
                </>
              )}
            </div>

            <p className="text-weave-muted leading-relaxed mb-8">{description}</p>

            {product.colors.length > 0 && (
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-weave-muted mb-3">
                  {t("product.colorLabel")}: {locale === "fa" && selectedColor?.nameFa ? selectedColor.nameFa : selectedColor?.name}
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor?.name === color.name
                          ? "border-weave-accent scale-110"
                          : "border-weave-border/60"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-weave-dark text-white rounded-full text-sm font-semibold hover:bg-weave-accent transition-colors"
              >
                {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                {added ? t("product.addedToCart") : t("product.addToCart")}
              </button>
              <button
                onClick={() => toggleItem(product)}
                className={`w-14 h-14 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                  inWishlist
                    ? "bg-weave-accent border-weave-accent text-white"
                    : "border-weave-border text-weave-dark hover:bg-weave-light"
                }`}
                aria-label={t("product.addToWishlist") as string}
              >
                <Heart className="w-5 h-5" fill={inWishlist ? "currentColor" : "none"} />
              </button>
            </div>

            <p className="text-xs text-weave-muted">
              {t("product.inStock")} · {product.brand} {product.model}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-20">
          <div className="flex gap-2 border-b border-weave-border/60 mb-8 overflow-x-auto">
            {tabs.map((tb) => (
              <button
                key={tb.key}
                onClick={() => setTab(tb.key)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  tab === tb.key
                    ? "border-weave-accent text-weave-dark"
                    : "border-transparent text-weave-muted hover:text-weave-dark"
                }`}
              >
                {tb.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl">
            {tab === "description" && <p className="text-weave-muted leading-relaxed">{description}</p>}
            {tab === "features" && (
              <ul className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-weave-dark">
                    <Check className="w-4 h-4 text-weave-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
            {tab === "specs" && (
              <dl className="divide-y divide-weave-border/60">
                {Object.entries(specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between py-3 text-sm">
                    <dt className="text-weave-muted">{k}</dt>
                    <dd className="text-weave-dark font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            )}
            {tab === "reviews" && (
              <p className="text-weave-muted text-sm">
                {product.reviews} {t("common.reviews")} · {product.rating}/5 {t("common.rating")}
              </p>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-weave-dark mb-6">
              {t("product.relatedTitle")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
