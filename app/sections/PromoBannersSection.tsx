"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tag, Sparkles, Zap, Percent, ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const SLIDE_PAUSE_MS = 5000;
const SLIDE_TRANSITION_S = 0.45;

/** تصاویر موجود در public/images */
const BANNER_IMAGES = {
  airPurifierMinimal: "/images/1_Modern_White_Air_Purifier_Minimal.png",
  luxeLife: "/images/2_Choose_to_live_the_luxe_life_with.png",
  headphones: "/images/3_White_overhead_wireless_headphones.png",
  smartPurifier: "/images/4_Modern_White_Smart_Air_Purifier_Touch.png",
  purifierDisplay: "/images/5_290_Air_Purifier_Product_Display.png",
  modernAppliances: "/images/6_5_Modern_Home_Appliances_that_Will.png",
  rogPremium: "/images/7_Redefining_premium_Meet_the_new_ROG.png",
  lifestyleRoyalty: "/images/8_198_344_Lifestyle_Appliances_Royalty.png",
  cylindricalPurifier: "/images/9_Cylindrical_Smart_Air_Purifier_in.png",
  catAirConditioner: "/images/cat-air-conditioner.png",
  catKitchen: "/images/cat-kitchen.png",
  catRefrigerator: "/images/cat-refrigerator.png",
  featured: "/images/Featured.png",
} as const;

type PromoBanner = {
  id: string;
  href: string;
  image: string;
  badgeFa: string;
  badgeEn: string;
  titleFa: string;
  titleEn: string;
  subtitleFa: string;
  subtitleEn: string;
  accent: string;
};

export type PromoBannersVariant = "top" | "default";

function buildSplitBanners(locale: string): PromoBanner[] {
  return [
    {
      id: "split-offers",
      href: `/${locale}/products?offers=true`,
      image: BANNER_IMAGES.luxeLife,
      badgeFa: "حراج ویژه",
      badgeEn: "Exclusive Sale",
      titleFa: "زندگی لوکس، قیمت هوشمند",
      titleEn: "Luxury Living, Smart Price",
      subtitleFa: "تخفیف‌های استثنایی روی مجموعه پریمیوم",
      subtitleEn: "Exceptional savings on premium collections",
      accent: "#1a1a1a",
    },
    {
      id: "split-smart",
      href: `/${locale}/products?category=air-conditioner`,
      image: BANNER_IMAGES.lifestyleRoyalty,
      badgeFa: "سبک زندگی",
      badgeEn: "Lifestyle",
      titleFa: "خانه‌ای مدرن و هوشمند",
      titleEn: "A Modern Smart Home",
      subtitleFa: "لوازم خانگی با طراحی ممتاز و عملکرد بالا",
      subtitleEn: "Appliances with premium design and performance",
      accent: "#808080",
    },
  ];
}

function buildTopBanners(locale: string): PromoBanner[] {
  return [
    {
      id: "top-new",
      href: `/${locale}/featured`,
      image: BANNER_IMAGES.featured,
      badgeFa: "جدید",
      badgeEn: "New In",
      titleFa: "جدیدترین محصولات",
      titleEn: "Latest Products",
      subtitleFa: "اولین نفری باشید که مدل‌های تازه را می‌بیند",
      subtitleEn: "Be first to explore our newest models",
      accent: "#666666",
    },
    {
      id: "top-tv",
      href: `/${locale}/products?category=tv-entertainment`,
      image: BANNER_IMAGES.rogPremium,
      badgeFa: "تلویزیون",
      badgeEn: "TV",
      titleFa: "سرگرمی خانگی",
      titleEn: "Home Entertainment",
      subtitleFa: "تلویزیون‌های هوشمند و سینمای خانگی",
      subtitleEn: "Smart TVs and home theater systems",
      accent: "#1a1a1a",
    },
    {
      id: "top-offers",
      href: `/${locale}/products?offers=true`,
      image: BANNER_IMAGES.catAirConditioner,
      badgeFa: "تخفیف",
      badgeEn: "Deals",
      titleFa: "پیشنهادهای داغ",
      titleEn: "Hot Deals",
      subtitleFa: "تخفیف‌های ویژه برای مدت محدود",
      subtitleEn: "Limited-time special discounts",
      accent: "#808080",
    },
    {
      id: "top-fridge",
      href: `/${locale}/products?category=refrigerator`,
      image: BANNER_IMAGES.catRefrigerator,
      badgeFa: "یخچال",
      badgeEn: "Fridge",
      titleFa: "یخچال و فریزر",
      titleEn: "Refrigerators",
      subtitleFa: "طراحی مدرن، مصرف بهینه انرژی",
      subtitleEn: "Modern design, energy efficient",
      accent: "#808080",
    },
    {
      id: "top-featured",
      href: `/${locale}/featured`,
      image: BANNER_IMAGES.cylindricalPurifier,
      badgeFa: "ویژه",
      badgeEn: "Featured",
      titleFa: "انتخاب‌های برتر",
      titleEn: "Top Picks",
      subtitleFa: "محصولات منتخب با بالاترین امتیاز",
      subtitleEn: "Highest-rated curated products",
      accent: "#666666",
    },
    {
      id: "top-entertainment",
      href: `/${locale}/products?category=tv-entertainment`,
      image: BANNER_IMAGES.headphones,
      badgeFa: "صوتی",
      badgeEn: "Audio",
      titleFa: "تجربه صوتی پریمیوم",
      titleEn: "Premium Audio",
      subtitleFa: "هدفون و تجهیزات صوتی با کیفیت بالا",
      subtitleEn: "High-quality headphones and audio gear",
      accent: "#808080",
    },
    {
      id: "top-kitchen",
      href: `/${locale}/products?category=kitchen`,
      image: BANNER_IMAGES.catKitchen,
      badgeFa: "آشپزخانه",
      badgeEn: "Kitchen",
      titleFa: "مجموعه آشپزخانه",
      titleEn: "Kitchen Collection",
      subtitleFa: "لوازم آشپزخانه برای خانه مدرن",
      subtitleEn: "Kitchen appliances for a modern home",
      accent: "#808080",
    },
  ];
}

const badgeIcons = [Tag, Sparkles, Zap, Percent];

const variantConfig = {
  top: {
    buildBanners: buildTopBanners,
    eyebrowFa: "کشف کنید",
    eyebrowEn: "Discover",
    titleFa: "پیشنهادهای ویژه",
    titleEn: "Special Highlights",
    sectionClass: "py-10 md:py-14 bg-white relative overflow-hidden border-b border-[#1a1a1a]/5",
    slideMinH: "min-h-[160px] sm:min-h-[200px] md:min-h-[260px] lg:min-h-[300px]",
    titleClass: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    subtitleClass: "text-xs sm:text-sm md:text-base",
    contentPad: "p-4 pb-10 sm:p-8 sm:pb-12 lg:p-12",
    badgePad: "top-4 sm:top-6 start-4 sm:start-8 lg:start-12",
    dotsBottom: "bottom-3 sm:bottom-5",
    initialSlide: 0,
  },
  default: {
    buildBanners: buildSplitBanners,
    eyebrowFa: "منتخب",
    eyebrowEn: "Curated",
    titleFa: "پیشنهادهای منتخب",
    titleEn: "Curated Offers",
    sectionClass:
      "py-10 sm:py-14 md:py-16 bg-[#f0eeeb] relative overflow-hidden border-t-2 border-b border-[#808080]/30",
    slideAspect: "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/3]",
    slideMinH: "min-h-[180px] sm:min-h-[220px]",
    titleClass: "text-base sm:text-xl md:text-2xl lg:text-3xl",
    subtitleClass: "text-[11px] sm:text-xs md:text-sm lg:text-base",
    contentPad: "p-3.5 sm:p-5 md:p-7 lg:p-9",
    badgePad: "top-3 start-3 sm:top-4 sm:start-4 md:top-5 md:start-6",
    dotsBottom: "",
    initialSlide: 0,
  },
} as const;

function SplitBannerPanel({
  banner,
  isRTL,
  index,
  panelStyle,
}: {
  banner: PromoBanner;
  isRTL: boolean;
  index: number;
  panelStyle: "primary" | "secondary";
}) {
  const config = variantConfig.default;
  const BadgeIcon = badgeIcons[index % badgeIcons.length];
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const panelClass =
    panelStyle === "primary"
      ? "rounded-xl sm:rounded-2xl border border-[#1a1a1a]/20 sm:border-2 shadow-[0_8px_24px_rgba(26,26,26,0.1)] sm:shadow-[0_16px_48px_rgba(26,26,26,0.12)] ring-1 ring-[#808080]/15"
      : "rounded-xl lg:rounded-none border border-dashed border-[#808080]/40 sm:border-2 sm:border-dashed sm:border-[#808080]/50 bg-[#1a1a1a]/[0.02]";

  return (
    <Link
      href={banner.href}
      className={`group relative block w-full max-w-full min-w-0 overflow-hidden ${config.slideAspect} ${config.slideMinH} ${panelClass}`}
    >
      <Image
        src={banner.image}
        alt={isRTL ? banner.titleFa : banner.titleEn}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/92 via-[#1a1a1a]/45 to-[#1a1a1a]/10" />
      {panelStyle === "secondary" && (
        <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-white/20 pointer-events-none hidden sm:block" />
      )}

      <div className={`absolute ${config.badgePad} max-w-[calc(100%-1.5rem)]`}>
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 sm:gap-1.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm truncate max-w-full"
          style={{ backgroundColor: `${banner.accent}cc` }}
        >
          <BadgeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span className="truncate">{isRTL ? banner.badgeFa : banner.badgeEn}</span>
        </span>
      </div>

      <div className={`absolute bottom-0 inset-x-0 ${config.contentPad}`}>
        <h3
          className={`font-display font-bold text-white mb-1 sm:mb-1.5 md:mb-2 line-clamp-2 ${config.titleClass}`}
        >
          {isRTL ? banner.titleFa : banner.titleEn}
        </h3>
        <p className={`text-white/75 mb-2 sm:mb-3 md:mb-4 line-clamp-2 ${config.subtitleClass}`}>
          {isRTL ? banner.subtitleFa : banner.subtitleEn}
        </p>
        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-semibold text-[#d4d4d4] group-hover:text-white transition-colors">
          {isRTL ? "مشاهده" : "Explore"}
          <Arrow className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

function BannerSlide({
  banner,
  isRTL,
  index,
  variant,
}: {
  banner: PromoBanner;
  isRTL: boolean;
  index: number;
  variant: PromoBannersVariant;
}) {
  const config = variantConfig[variant];
  const BadgeIcon = badgeIcons[index % badgeIcons.length];
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <Link
      href={banner.href}
      className={`group relative block w-full h-full ${config.slideMinH}`}
    >
      <Image
        src={banner.image}
        alt={isRTL ? banner.titleFa : banner.titleEn}
        fill
        priority={index === 0}
        sizes="100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-[#1a1a1a]/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/30 to-transparent" />

      <div className={`absolute ${config.badgePad} max-w-[calc(100%-1.5rem)]`}>
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 sm:gap-1.5 sm:px-3 sm:py-1 md:px-3.5 md:py-1.5 rounded-full text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm truncate max-w-full"
          style={{ backgroundColor: `${banner.accent}cc` }}
        >
          <BadgeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span className="truncate">{isRTL ? banner.badgeFa : banner.badgeEn}</span>
        </span>
      </div>

      <div className={`absolute bottom-0 inset-x-0 ${config.contentPad}`}>
        <h3
          className={`font-display font-bold text-white mb-1 sm:mb-1.5 md:mb-3 line-clamp-2 sm:line-clamp-none max-w-3xl ${config.titleClass}`}
        >
          {isRTL ? banner.titleFa : banner.titleEn}
        </h3>
        <p
          className={`text-white/75 max-w-xl mb-2 sm:mb-3 md:mb-6 line-clamp-2 sm:line-clamp-none ${config.subtitleClass}`}
        >
          {isRTL ? banner.subtitleFa : banner.subtitleEn}
        </p>
        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-semibold text-[#d4d4d4] group-hover:text-white transition-colors">
          {isRTL ? "مشاهده" : "Explore"}
          <Arrow className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

type PromoBannersSectionProps = {
  variant?: PromoBannersVariant;
};

export default function PromoBannersSection({ variant = "default" }: PromoBannersSectionProps) {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const { ref, isVisible } = useScrollAnimation(0.1);
  const config = variantConfig[variant];
  const banners = config.buildBanners(locale);

  if (variant === "default") {
    const [primary, secondary] = banners;

    return (
      <section dir={direction} className={config.sectionClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(128,128,128,0.06),transparent_55%)] pointer-events-none" />

        <div className="relative z-10 mb-5 sm:mb-8">
          <div
            ref={ref}
            className={`px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#808080] text-[10px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-2 block">
              {isRTL ? config.eyebrowFa : config.eyebrowEn}
            </span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a]">
              {isRTL ? config.titleFa : config.titleEn}
            </h2>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto w-full min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 min-w-0">
            {primary && (
              <div className="min-w-0 w-full">
                <SplitBannerPanel
                  banner={primary}
                  isRTL={isRTL}
                  index={0}
                  panelStyle="primary"
                />
              </div>
            )}
            {secondary && (
              <div className="min-w-0 w-full">
                <SplitBannerPanel
                  banner={secondary}
                  isRTL={isRTL}
                  index={1}
                  panelStyle="secondary"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <PromoCarouselSection
      banners={banners}
      config={variantConfig.top}
      isRTL={isRTL}
      direction={direction}
      headerRef={ref}
      isVisible={isVisible}
    />
  );
}

function PromoCarouselSection({
  banners,
  config,
  isRTL,
  direction,
  headerRef,
  isVisible,
}: {
  banners: PromoBanner[];
  config: (typeof variantConfig)["top"];
  isRTL: boolean;
  direction: string;
  headerRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}) {
  const [active, setActive] = useState<number>(config.initialSlide);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + banners.length) % banners.length);
    },
    [banners.length]
  );

  const next = useCallback(() => {
    goTo(active + 1);
  }, [active, goTo]);

  useEffect(() => {
    if (paused || banners.length <= 1) return;

    const timer = setInterval(next, SLIDE_PAUSE_MS);
    return () => clearInterval(timer);
  }, [paused, next, banners.length, active]);

  const slideOffset = isRTL ? `${active * 100}%` : `-${active * 100}%`;

  return (
    <section dir={direction} className={config.sectionClass}>
      <div className="relative z-10 mb-6 sm:mb-8">
        <div
          ref={headerRef}
          className={`px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#808080] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-2 sm:mb-3 block">
            {isRTL ? config.eyebrowFa : config.eyebrowEn}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            {isRTL ? config.titleFa : config.titleEn}
          </h2>
        </div>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex"
            animate={{ x: slideOffset }}
            transition={{
              duration: SLIDE_TRANSITION_S,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {banners.map((banner, i) => (
              <div key={banner.id} className="min-w-full w-full shrink-0 grow-0">
                <BannerSlide banner={banner} isRTL={isRTL} index={i} variant="top" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#1a1a1a]/15">
          <div
            key={active}
            className={`promo-progress-bar h-full bg-[#808080] ${isRTL ? "is-rtl" : ""} ${
              paused ? "is-paused" : ""
            }`}
          />
        </div>

        <div
          className={`absolute ${config.dotsBottom} inset-x-0 flex flex-wrap justify-center gap-1.5 sm:gap-2 px-3 sm:px-4`}
        >
          {banners.map((banner, i) => (
            <button
              key={banner.id}
              type="button"
              aria-label={isRTL ? banner.titleFa : banner.titleEn}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
              className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 sm:w-8 md:w-10 bg-white"
                  : "w-1.5 sm:w-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
