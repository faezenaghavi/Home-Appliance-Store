"use client";

import { useI18n } from "@/app/i18n/Provider";
import { ShieldCheck, Award, HeartHandshake, Clock, Home, ChevronRight, ChevronLeft, Check, Sparkles, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function AboutContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";

  const features = [
    { icon: ShieldCheck, title: t("hero.warranty"), desc: isRTL ? "تضمین کیفیت و خدمات پس از فروش بی‌نظیر برای تمامی محصولات." : "Unmatched quality assurance and after-sales service." },
    { icon: Award, title: isRTL ? "طراحی برتر" : "Award Winning", desc: isRTL ? "حائز دریافت جوایز بین‌المللی برای طراحی و نوآوری." : "Internationally recognized for design and innovation." },
    { icon: HeartHandshake, title: t("footer.support"), desc: isRTL ? "تیم پشتیبانی اختصاصی، همواره در کنار شما." : "Dedicated support team, always by your side." },
    { icon: Clock, title: t("hero.returns"), desc: isRTL ? "امکان بازگشت آسان و سریع کالا تا ۷ روز." : "Easy and fast returns up to 7 days." },
  ];

  const stats = [
    { value: "+15", label: isRTL ? "سال تجربه" : "Years Experience" },
    { value: "+50k", label: isRTL ? "مشتری راضی" : "Happy Customers" },
    { value: "+120", label: isRTL ? "محصول نوین" : "Unique Products" },
  ];

  const checklist = isRTL 
    ? ["تکنولوژی پیشرفته و صرفه‌جویی در مصرف انرژی", "طراحی مینیمال و هماهنگ با دکوراسیون مدرن", "متریال‌های درجه یک و دوام بالا"]
    : ["Advanced technology with energy efficiency", "Minimalist design fitting modern decor", "Premium materials and high durability"];

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5] pt-24 sm:pt-28">
      
      {/* Breadcrumb with Bottom Border */}
      <div className="border-b border-[#1a1a1a]/5">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto py-6">
          <div className="text-sm text-[#8a8577] flex items-center gap-2">
            <Link href={`/${locale}`} className="hover:text-[#c4a882] transition-colors flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5" />{isRTL ? "خانه" : "Home"}
            </Link>
            {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <span className="text-[#1a1a1a] font-medium">{isRTL ? "درباره ما" : "About Us"}</span>
          </div>
        </div>
      </div>

      {/* Hero Section (Light Background with subtle accents) */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute top-0 start-1/4 w-96 h-96 bg-[#c4a882]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-[#1a1a1a]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#c4a882]/20 text-[#c4a882] text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            {t("nav.about")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight tracking-tight">
            {t("brand.name")}
          </h1>
          <p className="text-[#8a8577] text-lg sm:text-xl leading-relaxed">
            {t("brand.description")}
          </p>
        </div>
      </section>

      {/* Dark Premium Section (Vision & Image) */}
      <section className="relative bg-[#1a1a1a] text-white rounded-t-[2.5rem] sm:rounded-t-[40rem] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Side */}
            <div className={`space-y-8 ${isRTL ? "md:order-1" : "md:order-2"}`}>
              <span className="text-sm font-bold text-[#c4a882] uppercase tracking-widest">
                {t("hero.eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                {isRTL ? "تعهد ما به تعالی و نوآوری" : "Our Commitment to Excellence"}
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                {t("hero.subtitle")}
              </p>
              
              {/* Checklist */}
              <ul className="space-y-4 pt-2">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/90">
                    <span className="w-7 h-7 rounded-full bg-[#c4a882]/20 flex items-center justify-center flex-shrink-0 border border-[#c4a882]/30">
                      <Check className="w-4 h-4 text-[#c4a882]" />
                    </span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Side with Stats Overlay */}
            <div className={`relative ${isRTL ? "md:order-2" : "md:order-1"}`}>
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden flex items-center justify-center">
                <ImageIcon className="w-20 h-20 text-white/10" />
              </div>
              
              {/* Floating Stats Glassmorphism Card */}
              <div className="absolute -bottom-9 start-1 -translate-x-1/2 w-[85%] bg-[#faf8f5] text-[#1a1a1a] rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-4 border border-white/10">
                {stats.map((stat, i) => (
                  <div key={i} className={`text-center ${i !== stats.length - 1 ? 'border-e border-[#1a1a1a]/10' : ''}`}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#c4a882] mb-1">{stat.value}</h3>
                    <p className="text-[10px] sm:text-xs text-[#8a8577] font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section (Clean List Layout) */}
      <section className="bg-[#faf8f5] py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
              {isRTL ? "چرا نوویرا؟" : "Why Novira?"}
            </h2>
            <div className="w-16 h-1 bg-[#c4a882] mx-auto rounded-full"></div>
          </div>

          {/* Features Grid - Unified Rows */}
          <div className="bg-white rounded-3xl border border-[#1a1a1a]/5 shadow-sm overflow-hidden divide-y divide-[#1a1a1a]/5 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {features.map((feat, i) => (
              <div key={i} className="p-8 flex flex-col items-start hover:bg-[#faf8f5] transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-5 group-hover:bg-[#c4a882] transition-colors duration-300">
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#8a8577] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-16">
            <Link 
              href={`/${locale}/products`} 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-full hover:bg-[#c4a882] hover:text-[#1a1a1a] transition-colors duration-300"
            >
              {isRTL ? "مشاهده محصولات" : "Explore Products"}
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}