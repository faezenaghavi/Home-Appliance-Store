"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShieldCheck, Truck, ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";

export default function AboutPreviewSection() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const features = [
    { icon: Sparkles, text: isRTL ? "ضمانت اصالت و کیفیت کالا" : "Guaranteed authenticity & quality" },
    { icon: ShieldCheck, text: isRTL ? "گارانتی معتبر و خدمات پس از فروش" : "Valid warranty & after-sales service" },
    { icon: Truck, text: isRTL ? "ارسال سریع و امن به سراسر کشور" : "Fast & secure delivery nationwide" },
  ];

  const stats = [
    { value: "+15", label: isRTL ? "سال تجربه" : "Years" },
    { value: "+50K", label: isRTL ? "مشتری" : "Customers" },
    { value: "4.9", label: isRTL ? "امتیاز" : "Rating" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#faf8f5] overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Novira Lifestyle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/30 to-transparent" />
            </div>

            <div
              className={`absolute -bottom-5 ${isRTL ? "right-6" : "left-6"} bg-white px-5 py-4 rounded-2xl shadow-lg border border-[#1a1a1a]/5 flex items-center gap-3`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#808080]/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#808080]" />
              </div>
              <div>
                <p className="text-xl font-bold text-[#1a1a1a] leading-none">+15</p>
                <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "سال تجربه" : "Years Experience"}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[#808080] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              {isRTL ? "داستان ما" : "Our Story"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5 leading-tight font-display">
              {isRTL ? "زیبایی و کارایی در کنار هم" : "Where Beauty Meets Functionality"}
            </h2>
            <p className="text-[#8a8577] text-base leading-relaxed mb-7">
              {isRTL
                ? "در نوویرا باور داریم لوازم خانگی بخشی از سبک زندگی شماست. بهترین برندهای جهان را با طراحی مدرن و تکنولوژی روز گرد هم آورده‌ایم تا آرامش و لوکس بودن را به خانه شما هدیه دهیم."
                : "At Novira, home appliances are part of your lifestyle. We bring together the world's best brands with modern design and latest technology to gift your home peace and luxury."}
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <feat.icon className="w-3.5 h-3.5 text-[#808080]" />
                  </div>
                  <span className="text-sm font-medium text-[#1a1a1a]">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-[#1a1a1a]/5">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-[#808080]">{s.value}</p>
                  <p className="text-xs text-[#8a8577]">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/about`}
              prefetch
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-semibold hover:bg-[#808080] transition-colors duration-200 active:scale-[0.98]"
            >
              {isRTL ? "بیشتر درباره ما" : "Learn More About Us"}
              <Arrow className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
