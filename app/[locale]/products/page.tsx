"use client";

import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useWishlist } from "@/app/context/WishlistContext";
import ProductCard from "@/app/components/ProductCard";
import PageHero from "@/app/components/PageHero";

export default function WishlistPage() {
  const { locale, t } = useI18n();
  const { items } = useWishlist();

  return (
    <main className="min-h-screen bg-weave-cream">
      <PageHero
        title={t("wishlist.title") as string}
        subtitle={t("wishlist.subtitle") as string}
        crumbLabel={t("nav.wishlist") as string}
      />

      <section className="section-padding py-12 sm:py-16">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-weave-light flex items-center justify-center mx-auto mb-6">
              <Heart className="w-9 h-9 text-weave-muted" />
            </div>
            <h2 className="font-display text-xl font-semibold text-weave-dark mb-2">
              {t("wishlist.emptyTitle")}
            </h2>
            <p className="text-weave-muted mb-8">{t("wishlist.emptyBody")}</p>
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-weave-dark text-white rounded-full text-sm font-semibold hover:bg-weave-accent transition-colors"
            >
              {t("wishlist.emptyCta")}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
