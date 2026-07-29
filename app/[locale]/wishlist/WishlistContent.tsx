"use client";

import { useI18n } from "@/app/i18n/Provider";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { useToast } from "@/app/context/Toastcontext";
import { Heart, Trash2, ArrowUpRight, ArrowUpLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function WishlistContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const formatPrice = (price: number) => {
    return price.toLocaleString(isRTL ? "fa-IR" : "en-US");
  };

  const handleAddToCart = (product: (typeof items)[0]) => {
    const defaultColor = product.colors?.[0] ?? {
      name: "Default",
      nameFa: "پیش‌فرض",
      hex: "#808080",
    };
    addItem(product, defaultColor, 1);
    showToast({
      title: t("common.addedToCart") as string,
      description: isRTL && product.nameFa ? product.nameFa : product.name,
      variant: "cart",
    });
  };

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pt-24 sm:pt-28 pb-16">
        <Breadcrumb items={[{ label: t("wishlist.title") as string }]} className="mb-8" />

        <div className="mb-10">
          <span className="inline-block px-4 py-1.5 bg-[#808080]/10 text-[#808080] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            <Heart className="w-3.5 h-3.5 inline mr-1.5" />
            {t("wishlist.title")}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            {t("wishlist.title")}
          </h1>
          <p className="text-[#8a8577] text-base">
            {items.length > 0
              ? isRTL
                ? `${items.length} محصول در لیست علاقه‌مندی‌های شما قرار دارد`
                : `${items.length} items in your wishlist`
              : t("wishlist.emptyDesc")}
          </p>
          <div className="w-20 h-1 bg-[#808080] rounded-full mt-6" />
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#1a1a1a]/5">
            <Heart className="w-16 h-16 text-[#808080]/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1a1a1a]">{t("wishlist.empty")}</h3>
            <p className="text-[#8a8577] mt-2 text-sm mb-6">{t("wishlist.emptyDesc")}</p>
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#808080] transition-colors"
            >
              {t("cart.continueShopping")}
              {isRTL ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => {
              const productName = isRTL && product.nameFa ? product.nameFa : product.name;
              const imageSrc = product.images?.[0];

              return (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl border border-[#1a1a1a]/5 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <Link
                    href={`/${locale}/products/${product.id}`}
                    className="relative aspect-square bg-[#faf8f5] overflow-hidden flex items-center justify-center"
                  >
                    {imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imageSrc}
                        alt={productName}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <span className="text-[#808080] text-5xl font-bold opacity-20">
                        {productName.charAt(0)}
                      </span>
                    )}
                  </Link>

                  <button
                    onClick={() => removeItem(product.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
                    aria-label={t("wishlist.removeFromWishlist") as string}
                  />

                  <div className="p-4 flex flex-col flex-1">
                    <Link href={`/${locale}/products/${product.id}`}>
                      <h3 className="font-display text-base font-semibold text-[#1a1a1a] truncate hover:text-[#808080] transition-colors">
                        {productName}
                      </h3>
                    </Link>
                    <p className="text-[#808080] font-bold mt-2 mb-4">
                      {formatPrice(product.price)} {t("common.currency")}
                    </p>

                    <div className="mt-auto flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-xl hover:bg-[#808080] transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        {t("product.addToCart")}
                      </button>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#1a1a1a]/10 text-red-400 hover:bg-red-50 hover:border-red-200 transition-colors"
                        aria-label={t("wishlist.removeFromWishlist") as string}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
