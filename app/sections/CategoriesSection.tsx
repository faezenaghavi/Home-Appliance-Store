"use client";

import { ArrowUpRight, Monitor, Refrigerator, WashingMachine, Wind, Sparkles, ChefHat } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Link from "next/link"; 

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Refrigerator,
  WashingMachine,
  Wind,
  Sparkles,
  ChefHat,
};

// متون انگلیسی و فارسی اصلاح شدند
const demoCategories = [
  {
    id: "tv",
    name: "TV & Entertainment",
    nameFa: "تلویزیون و سرگرمی",
    description: "Smart TVs, soundbars, and home theater systems",
    descriptionFa: "تلویزیون‌های هوشمند، ساندبار و سیستم‌های سینمای خانگی",
    productCount: 24,
    icon: "Monitor",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    gridClass: "col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    id: "refrigerator",
    name: "Refrigerators",
    nameFa: "یخچال و فریزر",
    description: "Side-by-side, French door, and upright freezers",
    descriptionFa: "یخچال‌های ساید بای ساید، دوقلو و فریزر",
    productCount: 18,
    icon: "Refrigerator",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
    gridClass: "col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: "laundry",
    name: "Laundry",
    nameFa: "لباسشویی و خشکشویی",
    description: "Washing machines and dryers",
    descriptionFa: "ماشین‌های لباسشویی و خشک‌کن",
    productCount: 15,
    icon: "WashingMachine",
    image: "https://images.unsplash.com/photo-1626806775351-538068a21838?w=600&q=80",
    gridClass: "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "hvac",
    name: "Heating & Cooling",
    nameFa: "سرمایش و گرمایش",
    description: "Air conditioners, heaters, and air purifiers",
    descriptionFa: "کولر، بخاری و تصفیه‌کننده‌های هوا",
    productCount: 21,
    icon: "Wind",
    image: "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=600&q=80",
    gridClass: "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-2",
  },
  {
    id: "cleaning",
    name: "Cleaning",
    nameFa: "تمیزکاری",
    description: "Vacuums, steam mops, and robotic cleaners",
    descriptionFa: "جاروبرقی، بخارشو و جاروهای رباتیک",
    productCount: 12,
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
    gridClass: "col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    nameFa: "آشپزخانه",
    description: "Ovens, microwaves, and small kitchen appliances",
    descriptionFa: "فر، مایکروویو و لوازم کوچک آشپزخانه",
    productCount: 30,
    icon: "ChefHat",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
    gridClass: "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1",
  },
];

export default function CategorySection() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="categories"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ backgroundColor: "#f5f0eb" }}
      className="py-24 md:py-32"
    >
      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            style={{ color: "#c4a882", letterSpacing: "0.2em" }}
            className="text-xs font-semibold uppercase mb-4 block"
          >
            {isRTL ? "دسته‌بندی‌ها" : "Categories"}
          </span>
          <h2
            style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {isRTL ? "برندهای برتر لوازم خانگی" : "Top Appliance Categories"}
          </h2>
          <p
            style={{ color: "#8a8577" }}
            className="text-sm max-w-md mx-auto leading-relaxed"
          >
            {isRTL
              ? "مجموعه‌ای از بهترین برندهای لوازم خانگی با کیفیت بالا و طراحی مدرن"
              : "A curated collection of premium home appliances with modern design and high quality"}
          </p>
        </div>

        {/* Bento / Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[200px] lg:auto-rows-[220px]">
          {demoCategories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Monitor;
            const isLarge = cat.gridClass.includes("col-span-2") && cat.gridClass.includes("row-span-2");
            const isWide = cat.gridClass.includes("col-span-2") && cat.gridClass.includes("row-span-1");
            const isTall = cat.gridClass.includes("col-span-1") && cat.gridClass.includes("row-span-2");

            return (
              <Link
                key={cat.id}
                href={`/${locale}/products?category=${cat.id}`}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl ${cat.gridClass} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={isRTL && cat.nameFa ? cat.nameFa : cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.5) 45%, rgba(26,26,26,0.15) 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div
                    className={`flex items-end justify-between ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className={isRTL ? "text-right" : "text-left"}>
                      {/* Icon Box */}
                      <div
                        className="rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{
                          width: isLarge ? 52 : 44,
                          height: isLarge ? 52 : 44,
                          backgroundColor: "rgba(196,168,130,0.25)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <Icon
                          className="text-[#c4a882]"
                          style={{ width: isLarge ? 26 : 22, height: isLarge ? 26 : 22 }}
                        />
                      </div>

                      <h3
                        style={{
                          color: "#ffffff",
                          fontFamily: "var(--font-display), 'Playfair Display', serif",
                          fontSize: isLarge ? 26 : isWide ? 22 : 18,
                        }}
                        className="font-bold mb-1"
                      >
                        {isRTL && cat.nameFa ? cat.nameFa : cat.name}
                      </h3>

                      <p
                        style={{ color: "rgba(255,255,255,0.65)" }}
                        className="text-xs mb-3 leading-relaxed max-w-[220px]"
                      >
                        {/* نمایش توضیحات بر اساس زبان */}
                        {isRTL && cat.descriptionFa ? cat.descriptionFa : cat.description}
                      </p>

                      <span
                        style={{ color: "#c4a882" }}
                        className="text-xs font-medium"
                      >
                        {cat.productCount} {isRTL ? "محصول" : "products"}
                      </span>
                    </div>

                    {/* Arrow Circle */}
                    <div
                      className="rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0"
                      style={{
                        width: isLarge ? 48 : 40,
                        height: isLarge ? 48 : 40,
                        backgroundColor: "rgba(196,168,130,0.3)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <ArrowUpRight
                        className="text-white"
                        style={{
                          width: isLarge ? 22 : 18,
                          height: isLarge ? 22 : 18,
                          transform: isRTL ? "rotate(180deg)" : "none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: "2px solid rgba(196,168,130,0.4)",
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}