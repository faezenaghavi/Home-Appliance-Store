// app/sections/AboutPreviewSection.tsx
"use client";

import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight, Sparkles, ShieldCheck, Truck } from "lucide-react";

export default function AboutPreviewSection() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const { ref, isVisible } = useScrollAnimation(0.15);

  const features = [
    { icon: Sparkles, text: isRTL ? "ضمانت اصالت و کیفیت کالا" : "Guaranteed authenticity & quality" },
    { icon: ShieldCheck, text: isRTL ? "گارانتی معتبر و خدمات پس از فروش" : "Valid warranty & after-sales service" },
    { icon: Truck, text: isRTL ? "ارسال سریع و امن به سراسر کشور" : "Fast & secure delivery nationwide" },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#faf8f5] overflow-hidden">
      <div ref={ref} className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side with Floating Effect */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : isRTL ? "translate-x-20" : "-translate-x-20"}`}>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" 
                alt="Novira Lifestyle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/30 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className={`absolute bottom-10 ${isRTL ? "right-10" : "left-10"} bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow`}>
              <div className="w-12 h-12 rounded-xl bg-[#c4a882]/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#c4a882]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1a1a1a]">+15</h4>
                <p className="text-xs text-[#8a8577]">{isRTL ? "سال تجربه" : "Years Experience"}</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span style={{ color: "#c4a882", letterSpacing: "0.2em" }} className="text-xs font-semibold uppercase mb-4 block">
              {isRTL ? "داستان ما" : "Our Story"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight" style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}>
              {isRTL ? "زیبایی و کارایی در کنار هم" : "Where Beauty Meets Functionality"}
            </h2>
            <p className="text-[#8a8577] text-base leading-relaxed mb-8">
              {isRTL 
                ? "ما در نوویرا باور داریم که لوازم خانگی فقط ابزار نیستند، بلکه بخشی از سبک زندگی شما هستند. ما بهترین برندهای جهانی را با طراحی‌های مدرن و تکنولوژی‌های روز گرد هم آورده‌ایم تا آرامش و لوکس بودن را به خانه شما هدیه دهیم."
                : "At Novira, we believe home appliances are not just tools, but part of your lifestyle. We bring together the world's best brands with modern designs and latest technologies to gift your home peace and luxury."}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <feat.icon className="w-4 h-4 text-[#c4a882]" />
                  </div>
                  <span className="text-sm font-medium text-[#1a1a1a]">{feat.text}</span>
                </div>
              ))}
            </div>

            <Link 
              href={`/${locale}/about`} 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-semibold hover:bg-[#c4a882] transition-colors group"
            >
              {isRTL ? "بیشتر درباره ما بدانید" : "Learn More About Us"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}