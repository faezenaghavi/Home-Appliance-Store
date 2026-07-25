"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products";

const featuredProduct = products.find((p) => p.id === "kitchenaid-artisan");
const formatPrice = (price: number) => price.toLocaleString("fa-IR");

export default function HeroSection() {
  const { t, locale } = useI18n();
  const isRTL = locale === "fa";
  const { addItem } = useCart();

  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen w-full">
        
        {/* Left Side - Deep Gold/Accent Editorial Block */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // تغییر رنگ سبز به رنگ طلایی (Accent) شما
          className="bg-gradient-to-br from-[#c4a882] via-[#a88c66] to-[#c4a882] relative flex items-center justify-center p-8 lg:p-16 xl:p-24 overflow-hidden"
        >
          <div className="max-w-xl relative z-10">
            {/* Label - Black text for contrast on Gold */}
            <p className="text-[#1a1a1a]/90 text-[13px] tracking-[4px] uppercase mb-2 font-medium">
              {locale === "fa" ? "لوازم خانگی" : "HOME APPLIANCES"}
            </p>

            {/* Title - Black text with White highlight for luxury */}
            <h1 className="font-display text-[52px] md:text-[60px] lg:text-[72px] text-[#1a1a1a] font-normal leading-[1.1] mb-5 tracking-[1px]">
              {isRTL ? (
                <>
                  <span className="text-white">{t("hero.titleHighlight")}</span>
                  <br />
                  {t("hero.title")}
                </>
              ) : (
                <>
                  {t("hero.title")}
                  <br />
                  <span className="text-white">{t("hero.titleHighlight")}</span>
                </>
              )}
            </h1>

            {/* Description - Dark text */}
            <p className="text-[#1a1a1a]/85 text-[13px] leading-[1.8] max-w-[280px] mb-7">
              {t("hero.subtitle")}
            </p>

            {/* CTA Button - Dark Glassmorphism Style */}
            <button className="bg-[#1a1a1a]/15 border border-[#1a1a1a]/30 text-[#1a1a1a] px-8 py-3 rounded-lg text-xs tracking-[2px] uppercase cursor-pointer transition-all backdrop-blur-[4px] hover:bg-[#1a1a1a]/25 font-medium inline-flex items-center gap-2">
              {locale === "fa" ? "کشف کنید" : "EXPLORE MORE"}
            </button>
          </div>
        </motion.div>

        {/* Right Side - Image & Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#e8e4df] flex items-center justify-center overflow-hidden"
        >
          {/* Kitchen Image */}
          <div className="relative w-full h-full">
            <img
              src="/images/2_Choose_to_live_the_luxe_life_with.png"
              alt="Modern Kitchen Interior"
              className="w-full h-full object-cover"
            />

            {/* Hotspot 1 (Top Right) - Uses your Accent color */}
            <div className="absolute top-[18%] right-[22%] flex items-center justify-center cursor-pointer group">
              <div className="w-8 h-8 bg-[#c4a882] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Plus className="w-4 h-4 text-[#1a1a1a]" strokeWidth={3} />
              </div>
              {/* Line */}
              <div className="absolute w-[60px] h-[2px] bg-white -right-[50px] top-1/2 -translate-y-1/2 rotate-[-20deg] origin-left"></div>
            </div>

            {/* Hotspot 2 (Middle) */}
            <div className="absolute top-[52%] right-[35%] flex items-center justify-center cursor-pointer group">
              <div className="w-8 h-8 bg-[#c4a882] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Plus className="w-4 h-4 text-[#1a1a1a]" strokeWidth={3} />
              </div>
            </div>

            {/* Floating Product Card - Dark Glass (مشکی روی تصویر) */}
            {featuredProduct && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                // تغییر از سبز تیره به مشکی تیره سایت شما
                className="absolute bottom-[60px] right-[20px] bg-[#1a1a1a]/92 backdrop-blur-[10px] rounded-xl p-2.5 flex gap-2.5 items-center max-w-[240px] shadow-xl"
              >
                {/* Product Image */}
                <div className="w-[50px] h-[50px] rounded-lg overflow-hidden shrink-0">
                  <img 
                    src={featuredProduct.images[0]} 
                    alt={featuredProduct.nameFa} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* Product Info */}
                <div className="text-white flex-1 min-w-0">
                  <p className="text-[10px] leading-[1.4] mb-1.5 opacity-90 truncate">
                    {locale === "fa" ? featuredProduct.nameFa : featuredProduct.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] opacity-70 font-mono">
                      {formatPrice(featuredProduct.price)} تومان
                    </span>
                    <button 
                      onClick={() => addItem(featuredProduct, featuredProduct.colors[0])}
                      // دکمه خرید به رنگ طلایی شما
                      className="bg-[#c4a882] hover:bg-[#d4c4a8] text-[#1a1a1a] px-2 py-1 rounded text-[9px] flex items-center gap-1 transition-colors shrink-0"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      {locale === "fa" ? "خرید" : "Add"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Arrow Buttons */}
            <button className="absolute top-1/2 -translate-y-1/2 -left-[18px] w-9 h-9 rounded-full bg-white/15 backdrop-blur-[4px] flex items-center justify-center hover:bg-white/30 transition-colors border-none cursor-pointer">
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
            <button className="absolute top-1/2 -translate-y-1/2 right-[12px] w-9 h-9 rounded-full bg-white/15 backdrop-blur-[4px] flex items-center justify-center hover:bg-white/30 transition-colors border-none cursor-pointer">
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <div className="w-2 h-2 rounded-full bg-white/80 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-white/30 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-white/30 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-white/30 cursor-pointer"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}