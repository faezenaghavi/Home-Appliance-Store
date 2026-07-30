"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Monitor, Refrigerator, WashingMachine, Wind, Sparkles, ChefHat } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { applianceCategories } from "@/app/data/appliances";
import { getCategoryImage } from "@/app/lib/categoryImages";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Refrigerator,
  WashingMachine,
  Wind,
  Sparkles,
  ChefHat,
};

const gridLayout: Record<string, string> = {
  "tv-entertainment": "col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2",
  refrigerator: "col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1",
  washing: "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1",
  "air-conditioner": "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-2",
  vacuum: "col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1",
  kitchen: "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1",
};

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
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            style={{ color: "#808080", letterSpacing: "0.2em" }}
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
          <p style={{ color: "#8a8577" }} className="text-sm max-w-md mx-auto leading-relaxed">
            {isRTL
              ? "مجموعه‌ای از بهترین برندهای لوازم خانگی با کیفیت بالا و طراحی مدرن"
              : "A curated collection of premium home appliances with modern design and high quality"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[200px] sm:auto-rows-[210px] lg:auto-rows-[220px]">
          {applianceCategories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Monitor;
            const gridClass = gridLayout[cat.id] ?? "col-span-1 lg:col-span-1 lg:row-span-1";
            const isLarge = gridClass.includes("col-span-2") && gridClass.includes("row-span-2");
            const isWide = gridClass.includes("col-span-2") && gridClass.includes("row-span-1");
            const imageSrc = getCategoryImage(cat.id, cat.image);

            return (
              <Link
                key={cat.id}
                href={`/${locale}/products?category=${cat.id}`}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl min-h-[200px] ${gridClass} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={imageSrc}
                  alt={isRTL ? cat.nameFa : cat.name}
                  fill
                  sizes={
                    isLarge
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : isWide
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.5) 45%, rgba(26,26,26,0.15) 100%)",
                  }}
                />

                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                  <div className={`flex items-end justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`min-w-0 flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                      <div
                        className="rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{
                          width: isLarge ? 52 : 44,
                          height: isLarge ? 52 : 44,
                          backgroundColor: "rgba(128,128,128,0.25)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <Icon
                          className="text-[#808080]"
                          style={{ width: isLarge ? 26 : 22, height: isLarge ? 26 : 22 }}
                        />
                      </div>

                      <h3
                        style={{
                          color: "#ffffff",
                          fontFamily: "var(--font-display), 'Playfair Display', serif",
                          fontSize: isLarge ? 26 : isWide ? 22 : 18,
                        }}
                        className="font-bold mb-1 line-clamp-2"
                      >
                        {isRTL ? cat.nameFa : cat.name}
                      </h3>

                      <p
                        style={{ color: "rgba(255,255,255,0.65)" }}
                        className="text-xs mb-2 sm:mb-3 leading-relaxed max-w-[220px] line-clamp-2"
                      >
                        {isRTL ? cat.descriptionFa : cat.description}
                      </p>

                      <span style={{ color: "#808080" }} className="text-xs font-medium">
                        {cat.productCount} {isRTL ? "محصول" : "products"}
                      </span>
                    </div>

                    <div
                      className="rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0 ms-3"
                      style={{
                        width: isLarge ? 48 : 40,
                        height: isLarge ? 48 : 40,
                        backgroundColor: "rgba(128,128,128,0.3)",
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

                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ border: "2px solid rgba(128,128,128,0.4)" }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
