"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import PageHero from "@/app/components/PageHero";

const formatPrice = (price: number) => price.toLocaleString("fa-IR");

export default function CartPage() {
  const { locale, t } = useI18n();
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const [promo, setPromo] = useState("");

  const shippingCost = subtotal > 5000000 || subtotal === 0 ? 0 : 150000;
  const total = subtotal + shippingCost;

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <PageHero title={t("cart.title") as string} crumbLabel={t("nav.cart") as string} />
        <div className="section-padding py-24 text-center">
          <div className="w-20 h-20 rounded-full bg-nv-porcelainDim flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-9 h-9 text-nv-mist" />
          </div>
          <h2 className="font-display text-xl font-semibold text-nv-ink mb-2">
            {t("cart.emptyTitle")}
          </h2>
          <p className="text-nv-mist mb-8">{t("cart.emptyBody")}</p>
          <Link
            href={`/${locale}/products`}
            className="btn-primary" /* از کلاس‌های globals.css استفاده کردم */
          >
            {t("cart.emptyCta")}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <PageHero
        title={t("cart.title") as string}
        subtitle={t("cart.subtitle") as string}
        crumbLabel={t("nav.cart") as string}
      />

      <section className="section-padding py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-lg font-semibold text-nv-ink mb-2">
              {t("cart.itemsTitle")} ({items.length})
            </h2>
            {items.map((item) => {
              const name = locale === "fa" && item.product.nameFa ? item.product.nameFa : item.product.name;
              const colorName = locale === "fa" && item.selectedColor.nameFa ? item.selectedColor.nameFa : item.selectedColor.name;
              return (
                <div
                  key={item.product.id + item.selectedColor.name}
                  className="flex gap-4 bg-nv-porcelain rounded-2xl border border-nv-obsidian/10 p-4"
                >
                  <div className="relative w-24 h-24 rounded-xl bg-nv-porcelainDim overflow-hidden shrink-0">
                    <Image src={item.product.images[0]} alt={name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/${locale}/products/${item.product.id}`}
                          className="font-display text-base font-semibold text-nv-ink hover:text-nv-brass transition-colors"
                        >
                          {name}
                        </Link>
                        <p className="text-xs text-nv-mist mt-1">{colorName}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedColor.name)}
                        className="text-nv-mist hover:text-red-500 transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1 border border-nv-obsidian/10 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor.name, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-nv-ink hover:bg-nv-porcelainDim rounded-full"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-mono">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor.name, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-nv-ink hover:bg-nv-porcelainDim rounded-full"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-display font-semibold text-nv-ink font-mono">
                        {formatPrice(item.product.price * item.quantity)} تومان
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <div className="sticky top-28 bg-nv-porcelain rounded-2xl border border-nv-obsidian/10 p-6">
              <h2 className="font-display text-lg font-semibold text-nv-ink mb-5">
                {t("cart.summaryTitle")}
              </h2>
              <div className="flex gap-2 mb-5">
                <input
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder={t("cart.promoPlaceholder") as string}
                  className="flex-1 px-4 py-2.5 bg-nv-porcelainDim rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nv-brass/20"
                />
                <button className="px-4 py-2.5 bg-nv-obsidian text-nv-porcelain rounded-xl text-sm font-medium hover:bg-nv-brass transition-colors">
                  {t("cart.promoApply")}
                </button>
              </div>

              <div className="space-y-3 text-sm border-t border-nv-obsidian/10 pt-4">
                <div className="flex justify-between text-nv-mist">
                  <span>{t("common.subtotal")}</span>
                  <span className="text-nv-ink font-mono">{formatPrice(subtotal)} تومان</span>
                </div>
                <div className="flex justify-between text-nv-mist">
                  <span>{t("common.shipping")}</span>
                  <span className="text-nv-ink font-mono">
                    {shippingCost === 0 ? t("common.free") : `${formatPrice(shippingCost)} تومان`}
                  </span>
                </div>
                <div className="flex justify-between font-display text-base font-bold text-nv-ink border-t border-nv-obsidian/10 pt-3">
                  <span>{t("common.total")}</span>
                  <span className="font-mono">{formatPrice(total)} تومان</span>
                </div>
              </div>

              <Link
                href={`/${locale}/checkout`}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-nv-brass text-nv-obsidian rounded-full text-sm font-semibold hover:bg-nv-brassLight hover:shadow-brass transition-all"
              >
                {t("cart.checkoutButton")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}