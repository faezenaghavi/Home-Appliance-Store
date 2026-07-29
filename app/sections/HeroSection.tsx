"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Plus, ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { useToast } from "@/app/context/Toastcontext";
import { getProductById } from "@/app/data/catalog";
import type { Product } from "@/app/types";
import { useSplashReady } from "@/app/components/AppLoader";
import { heroEnter, heroGray } from "@/app/lib/motion";

const slides = [
  {
    id: "kitchen-hero",
    image: "/images/2_Choose_to_live_the_luxe_life_with.png",
    featuredProductId: "kitchenaid-artisan",
    hotspots: [
      {
        top: "18%",
        right: "22%",
        line: true,
        lineAngle: -20,
        productId: "samsung-bespoke-fridge",
      },
      {
        top: "52%",
        right: "35%",
        productId: "kitchenaid-artisan",
      },
    ],
  },
];

export default function HeroSection() {
  const { t, locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const router = useRouter();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const currentSlide = slides[activeSlide];
  const featuredProduct = getProductById(currentSlide.featuredProductId);

  const formatPrice = useCallback(
    (price: number) => price.toLocaleString(isRTL ? "fa-IR" : "en-US"),
    [isRTL]
  );

  const getProductName = (product: Product) =>
    isRTL && product.nameFa ? product.nameFa : product.name;

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const color = product.colors?.[0] ?? {
      name: "Default",
      nameFa: "پیش‌فرض",
      hex: "#808080",
    };
    addItem(product, color, 1);
    showToast({
      title: t("common.addedToCart") as string,
      description: getProductName(product),
      variant: "cart",
    });
  };

  const goToProduct = (productId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveHotspot(null);
    router.push(`/${locale}/products/${productId}`);
  };

  const toggleHotspot = (idx: number) => {
    setActiveHotspot((prev) => (prev === idx ? null : idx));
  };

  const ready = useSplashReady();
  const hiddenX = isRTL ? 50 : -50;
  const hiddenSlideX = isRTL ? 36 : -36;

  return (
    <section
      className="relative min-h-[100dvh] flex items-stretch overflow-hidden"
      style={{ backgroundColor: heroGray.base }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh] w-full">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: hiddenSlideX }}
          animate={{ opacity: ready ? 1 : 0, x: ready ? 0 : hiddenSlideX }}
          transition={heroEnter(0, 1)}
          className="relative flex items-center justify-center p-8 lg:p-16 xl:p-24 overflow-hidden order-2 lg:order-1"
        >
          <div className="absolute inset-0" style={{ background: heroGray.gradient }} />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23808080' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#808080]/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#808080]/3 rounded-full blur-[100px]" />

          <div className="max-w-xl relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 16 }}
              transition={heroEnter(0.15)}
              className="text-[#a8a8a8] text-[11px] tracking-[5px] uppercase mb-6 font-medium"
            >
              {isRTL ? "لوازم خانگی لوکس" : "LUXURY HOME APPLIANCES"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 28 }}
              transition={heroEnter(0.25, 0.95)}
              className="font-display text-[44px] md:text-[56px] lg:text-[68px] text-[#eceae6] font-light leading-[1.05] mb-6 tracking-wide"
            >
              {isRTL ? (
                <>
                  <span className="text-[#b0b0b0] font-normal">{t("hero.titleHighlight")}</span>
                  <br />
                  {t("hero.title")}
                </>
              ) : (
                <>
                  {t("hero.title")}
                  <br />
                  <span className="text-[#b0b0b0] font-normal">{t("hero.titleHighlight")}</span>
                </>
              )}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: ready ? 1 : 0, opacity: ready ? 1 : 0 }}
              transition={heroEnter(0.4)}
              className="w-16 h-[1px] bg-gradient-to-r from-[#808080] to-transparent mb-6 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 18 }}
              transition={heroEnter(0.5)}
              className="text-[#a8a4a0] text-[14px] leading-[1.9] max-w-[320px] mb-10 font-light"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 18 }}
              transition={heroEnter(0.6)}
              className="flex items-center gap-4"
            >
              <Link
                href={`/${locale}/products`}
                prefetch
                className="group relative bg-[#808080] text-white px-8 py-3.5 rounded-xl text-[12px] tracking-[2px] uppercase font-semibold overflow-hidden transition-all duration-200 hover:shadow-[0_0_30px_rgba(128,128,128,0.25)] active:scale-95"
              >
                <span className="relative z-10">
                  {isRTL ? "مشاهده محصولات" : "EXPLORE COLLECTION"}
                </span>
                <div className="absolute inset-0 bg-[#666666]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              </Link>

              <Link
                href={`/${locale}/about`}
                prefetch
                className="text-[#a8a4a0] text-[12px] tracking-wide hover:text-[#c8c4c0] transition-colors duration-150 flex items-center gap-2 group"
              >
                {isRTL ? "بیشتر بدانید" : "Learn More"}
                <ChevronLeft
                  className={`w-4 h-4 transition-transform duration-150 group-hover:-translate-x-1 ${!isRTL && "rotate-180"}`}
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={heroEnter(1.2)}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 flex flex-col items-center gap-2"
          >
            <span className="text-[#a8a4a0]/50 text-[10px] tracking-[3px] uppercase whitespace-nowrap">
              {isRTL ? "اسکرول کنید" : "SCROLL"}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-8 bg-gradient-to-b from-[#808080]/50 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: hiddenX }}
          animate={{ opacity: ready ? 1 : 0, x: ready ? 0 : hiddenX }}
          transition={heroEnter(0.2, 1)}
          className="relative bg-[#353535] flex items-center justify-center overflow-hidden order-1 lg:order-2 min-h-[50vh] lg:min-h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={currentSlide.image}
              alt="Modern Kitchen Interior"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3a3a3a]/50 via-transparent to-[#454545]/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3a3a3a]/35 to-transparent" />

            {/* Hotspots */}
            {currentSlide.hotspots.map((spot, idx) => {
              const product = getProductById(spot.productId);
              if (!product) return null;
              const isOpen = activeHotspot === idx;

              return (
                <motion.div
                  key={spot.productId}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: ready ? 1 : 0, opacity: ready ? 1 : 0 }}
                  transition={{
                    delay: ready ? 0.85 + idx * 0.18 : 0,
                    type: "spring",
                    stiffness: 200,
                    damping: 16,
                  }}
                  className="absolute z-20"
                  style={{ top: spot.top, right: spot.right }}
                >
                  <button
                    type="button"
                    aria-label={isRTL ? "مشاهده محصول" : "View product"}
                    aria-expanded={isOpen}
                    onClick={() => toggleHotspot(idx)}
                    className="relative cursor-pointer group"
                  >
                    <div
                      className={`absolute inset-0 rounded-full bg-[#808080]/30 ${isOpen ? "" : "animate-ping"}`}
                    />
                    <div
                      className={`relative w-9 h-9 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(128,128,128,0.4)] transition-all duration-150 active:scale-95 ${
                        isOpen
                          ? "bg-[#666666] rotate-45"
                          : "bg-[#808080] group-hover:scale-110"
                      }`}
                    >
                      {isOpen ? (
                        <X className="w-4 h-4 text-white" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {"line" in spot && spot.line && (
                    <div
                      className="absolute w-[50px] h-[1px] bg-gradient-to-r from-[#808080] to-transparent top-1/2 origin-left pointer-events-none"
                      style={{
                        right: "-40px",
                        transform: `translateY(-50%) rotate(${spot.lineAngle ?? 0}deg)`,
                      }}
                    />
                  )}

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[220px] bg-[#454545]/98 backdrop-blur-xl border border-[#808080]/25 rounded-2xl p-3 shadow-2xl z-30"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="text-[#eceae6] text-[12px] font-semibold leading-snug mb-1 line-clamp-2">
                          {getProductName(product)}
                        </p>
                        <p className="text-[#b0b0b0] text-[11px] font-medium mb-3">
                          {formatPrice(product.price)} {t("common.currency")}
                        </p>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={(e) => goToProduct(product.id, e)}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white/10 hover:bg-white/15 text-white text-[10px] font-semibold rounded-lg transition-colors duration-150 active:scale-95"
                          >
                            <Eye className="w-3 h-3" />
                            {isRTL ? "جزئیات" : "Details"}
                          </button>
                          <button
                            type="button"
                            onClick={(e) => handleAddToCart(product, e)}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#808080] hover:bg-[#666666] text-white text-[10px] font-semibold rounded-lg transition-colors duration-150 active:scale-95"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            {isRTL ? "خرید" : "Add"}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Floating Product Card */}
            {featuredProduct && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 30 }}
                transition={heroEnter(1.05, 0.75)}
                className="absolute bottom-6 right-4 lg:bottom-12 lg:right-8 bg-[#454545]/90 backdrop-blur-xl rounded-2xl p-3 flex gap-3 items-center max-w-[280px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:border-[#808080]/30 transition-all duration-200 group z-10"
              >
                <button
                  type="button"
                  onClick={() => goToProduct(featuredProduct.id)}
                  className="flex gap-3 items-center flex-1 min-w-0 text-start"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10 bg-[#353535] flex items-center justify-center">
                    {featuredProduct.images?.[0] ? (
                      <Image
                        src={featuredProduct.images[0]}
                        alt={getProductName(featuredProduct)}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                    ) : (
                      <span className="text-[#808080] text-lg font-bold">
                        {getProductName(featuredProduct).charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="text-[#eceae6] flex-1 min-w-0">
                    <p className="text-[11px] leading-[1.4] mb-1 text-[#eceae6]/90 truncate font-medium group-hover:text-[#808080] transition-colors">
                      {getProductName(featuredProduct)}
                    </p>
                    <span className="text-[11px] text-[#b0b0b0] font-medium">
                      {formatPrice(featuredProduct.price)} {t("common.currency")}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleAddToCart(featuredProduct, e)}
                  className="shrink-0 bg-[#808080] hover:bg-[#666666] text-white px-3 py-2 rounded-lg text-[10px] font-semibold flex items-center gap-1.5 transition-all duration-150 active:scale-95"
                  aria-label={t("product.addToCart") as string}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  {isRTL ? "خرید" : "Add"}
                </button>
              </motion.div>
            )}

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                type="button"
                onClick={() => {
                  setActiveHotspot(null);
                  setActiveSlide((p) => (p === 0 ? slides.length - 1 : p - 1));
                }}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center hover:bg-[#808080]/25 hover:border-[#808080]/35 transition-all duration-150 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 text-white/75" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveHotspot(null);
                  setActiveSlide((p) => (p === slides.length - 1 ? 0 : p + 1));
                }}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center hover:bg-[#808080]/25 hover:border-[#808080]/35 transition-all duration-150 active:scale-95"
              >
                <ChevronRight className="w-5 h-5 text-white/75" strokeWidth={2} />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setActiveHotspot(null);
                    setActiveSlide(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === activeSlide ? "w-6 bg-[#808080]" : "w-1.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Close hotspot panel when clicking backdrop */}
      {activeHotspot !== null && (
        <button
          type="button"
          aria-label="Close"
          className="fixed inset-0 z-[5] lg:z-[15] bg-transparent"
          onClick={() => setActiveHotspot(null)}
        />
      )}
    </section>
  );
}
