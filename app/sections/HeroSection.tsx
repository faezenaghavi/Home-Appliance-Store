"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products";

const slides = [
  {
    id: "kitchenaid-artisan",
    image: "/images/2_Choose_to_live_the_luxe_life_with.png",
    hotspots: [
      { top: "18%", right: "22%", line: true, lineAngle: -20 },
      { top: "52%", right: "35%", line: false },
    ],
  },
  // اسلایدهای دیگه رو اینجا اضافه کن
];

const featuredProduct = products.find((p) => p.id === "kitchenaid-artisan");

const formatPrice = (price: number) => price.toLocaleString("fa-IR");

export default function HeroSection() {
  const { t, locale } = useI18n();
  const isRTL = locale === "fa";
  const { addItem } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredSpot, setHoveredSpot] = useState<number | null>(null);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative min-h-[100dvh] flex items-stretch overflow-hidden bg-[#0f0f0f]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh] w-full">

        {/* ─── Left Side ─── */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center p-8 lg:p-16 xl:p-24 overflow-hidden order-2 lg:order-1"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#141210] to-[#1a1815]" />

          {/* Subtle gold texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a882' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Accent glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#c4a882]/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#c4a882]/3 rounded-full blur-[100px]" />

          <div className="max-w-xl relative z-10">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#c4a882]/80 text-[11px] tracking-[5px] uppercase mb-6 font-medium"
            >
              {locale === "fa" ? "لوازم خانگی لوکس" : "LUXURY HOME APPLIANCES"}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[44px] md:text-[56px] lg:text-[68px] text-[#f5f0e8] font-light leading-[1.05] mb-6 tracking-wide"
            >
              {isRTL ? (
                <>
                  <span className="text-[#c4a882] font-normal">{t("hero.titleHighlight")}</span>
                  <br />
                  {t("hero.title")}
                </>
              ) : (
                <>
                  {t("hero.title")}
                  <br />
                  <span className="text-[#c4a882] font-normal">{t("hero.titleHighlight")}</span>
                </>
              )}
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-[1px] bg-gradient-to-r from-[#c4a882] to-transparent mb-6 origin-left"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-[#a8a095] text-[14px] leading-[1.9] max-w-[320px] mb-10 font-light"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <button className="group relative bg-[#c4a882] text-[#1a1a1a] px-8 py-3.5 rounded-xl text-[12px] tracking-[2px] uppercase font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,168,130,0.3)] active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  {locale === "fa" ? "مشاهده محصولات" : "EXPLORE COLLECTION"}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <button className="text-[#a8a095] text-[12px] tracking-wide hover:text-[#c4a882] transition-colors duration-300 flex items-center gap-2 group">
                {locale === "fa" ? "بیشتر بدانید" : "Learn More"}
                <ChevronLeft className={`w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 ${!isRTL && "rotate-180"}`} />
              </button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 flex flex-col items-center gap-2"
          >
            <span className="text-[#a8a095]/50 text-[10px] tracking-[3px] uppercase rotate-0 lg:-rotate-90 lg:origin-center whitespace-nowrap">
              {locale === "fa" ? "اسکرول کنید" : "SCROLL"}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-8 bg-gradient-to-b from-[#c4a882]/50 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* ─── Right Side ─── */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#0f0f0f] flex items-center justify-center overflow-hidden order-1 lg:order-2 min-h-[50vh] lg:min-h-full"
        >
          {/* Image with overlay gradient */}
          <div className="relative w-full h-full">
            <Image
              src={currentSlide.image}
              alt="Modern Kitchen Interior"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-[#0f0f0f]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/40 to-transparent" />

            {/* Hotspots */}
            <AnimatePresence>
              {currentSlide.hotspots.map((spot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2 + idx * 0.2, type: "spring", stiffness: 200 }}
                  className="absolute cursor-pointer"
                  style={{ top: spot.top, right: spot.right }}
                  onMouseEnter={() => setHoveredSpot(idx)}
                  onMouseLeave={() => setHoveredSpot(null)}
                >
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-[#c4a882]/30 animate-ping" />

                  {/* Button */}
                  <div className="relative w-9 h-9 bg-[#c4a882] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(196,168,130,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(196,168,130,0.6)]">
                    <Plus className="w-4 h-4 text-[#1a1a1a]" strokeWidth={2.5} />
                  </div>

                  {/* Line */}
                  {spot.line && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                      className="absolute w-[50px] h-[1px] bg-gradient-to-r from-[#c4a882] to-transparent top-1/2 origin-left"
                      style={{ 
                        right: "-40px",
                        transform: `translateY(-50%) rotate(${spot.lineAngle}deg)`,
                      }}
                    />
                  )}

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredSpot === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-[#1a1a1a]/95 backdrop-blur-xl border border-[#c4a882]/20 rounded-xl px-4 py-2.5 whitespace-nowrap shadow-xl z-20"
                      >
                        <p className="text-[#f5f0e8] text-[11px] font-medium">
                          {locale === "fa" ? "مشاهده جزئیات" : "View Details"}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Floating Product Card */}
            {featuredProduct && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-6 right-4 lg:bottom-12 lg:right-8 bg-[#1a1a1a]/90 backdrop-blur-2xl rounded-2xl p-3 flex gap-3 items-center max-w-[260px] border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[#c4a882]/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
                  <Image
                    src={featuredProduct.images[0]}
                    alt={featuredProduct.nameFa || featuredProduct.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="text-white flex-1 min-w-0">
                  <p className="text-[11px] leading-[1.4] mb-1.5 text-[#f5f0e8]/90 truncate font-medium">
                    {locale === "fa" ? featuredProduct.nameFa : featuredProduct.name}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-[#c4a882] font-mono font-medium">
                      {formatPrice(featuredProduct.price)} {locale === "fa" ? "تومان" : "USD"}
                    </span>
                    <button
                      onClick={() => addItem(featuredProduct, featuredProduct.colors[0])}
                      className="bg-[#c4a882] hover:bg-[#d4b896] text-[#1a1a1a] px-3 py-1.5 rounded-lg text-[10px] font-semibold flex items-center gap-1.5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(196,168,130,0.3)] active:scale-95"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      {locale === "fa" ? "خرید" : "Add"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={() => setActiveSlide((p) => (p === 0 ? slides.length - 1 : p - 1))}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#c4a882]/20 hover:border-[#c4a882]/30 transition-all duration-300 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 text-white/70" strokeWidth={2} />
              </button>
              <button
                onClick={() => setActiveSlide((p) => (p === slides.length - 1 ? 0 : p + 1))}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#c4a882]/20 hover:border-[#c4a882]/30 transition-all duration-300 active:scale-95"
              >
                <ChevronRight className="w-5 h-5 text-white/70" strokeWidth={2} />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeSlide
                      ? "w-6 bg-[#c4a882]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}