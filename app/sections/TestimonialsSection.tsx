"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Star, Quote, ChevronLeft, ChevronRight, BadgeCheck,
  ThumbsUp, Calendar, Package, Pause, User
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/app/i18n/Provider";
import ScrollReveal from "@/app/components/ScrollReveal";

const reviews = [
  {
    id: 1,
    name: "سارا محمدی",
    nameEn: "Sara Mohammadi",
    role: "خریدار یخچال سامسونگ Family Hub",
    roleEn: "Samsung Family Hub Buyer",
    rating: 5,
    date: "۲۵ تیر ۱۴۰۵",
    dateEn: "July 16, 2026",
    product: "یخچال ساید بای ساید سامسونگ",
    productEn: "Samsung Side-by-Side Refrigerator",
    comment: "بعد از ۳ ماه استفاده، واقعاً راضی‌ام. صفحه نمایش هوشمندش خیلی کاربردیه و دوربین داخلیش وقتی سوپرمارکت‌م بهم یادآوری می‌کنه چی تموم شده. مصرف برقش هم نسبت به یخچال قبلی‌ام نصف شده.",
    commentEn: "After 3 months of use, I'm truly satisfied. The smart screen is very practical and the internal camera reminds me what's running out when I'm at the supermarket. Power consumption is half of my previous fridge.",
    helpful: 34,
    verified: true,
  },
  {
    id: 2,
    name: "علی رضایی",
    nameEn: "Ali Rezaei",
    role: "خریدار جاروبرقی دایسون V15",
    roleEn: "Dyson V15 Buyer",
    rating: 5,
    date: "۱۸ تیر ۱۴۰۵",
    dateEn: "July 9, 2026",
    product: "جاروبرقی بی‌سیم دایسون V15 Detect",
    productEn: "Dyson V15 Detect Vacuum",
    comment: "سنسور لیزریش واقعاً کار می‌کنه! گرد و خاک‌هایی رو نشون می‌ده که چشم نمی‌بینه. باتریش کل خونه ۱۸۰ متری رو با یه بار شارژ جارو می‌کنه. قیمتش بالاست ولی ارزش داره.",
    commentEn: "The laser sensor actually works! It shows dust particles invisible to the eye. The battery covers my entire 180 sqm home on a single charge. Pricey but worth it.",
    helpful: 52,
    verified: true,
  },
  {
    id: 3,
    name: "مریم کریمی",
    nameEn: "Maryam Karimi",
    role: "خریدار ست آشپزخانه بوش",
    roleEn: "Bosch Kitchen Set Buyer",
    rating: 5,
    date: "۱۰ تیر ۱۴۰۵",
    dateEn: "July 1, 2026",
    product: "ست کامل آشپزخانه بوش سری ۸",
    productEn: "Bosch Series 8 Kitchen Set",
    comment: "نصاب‌های نویرا خیلی حرفه‌ای بودن. فر و ماشین ظرفشویی رو توی ۲ ساعت نصب و تست کردن. گارانتی ۵ ساله‌اش هم اعتمادم رو جلب کرد. پیشنهاد می‌کنم حتماً ست بخرید.",
    commentEn: "Novira's installers were very professional. They installed and tested the oven and dishwasher in 2 hours. The 5-year warranty gave me confidence. Definitely recommend buying the set.",
    helpful: 41,
    verified: true,
  },
  {
    id: 4,
    name: "حسن نوری",
    nameEn: "Hassan Nouri",
    role: "خریدار ماشین لباسشویی ال‌جی",
    roleEn: "LG Washing Machine Buyer",
    rating: 4,
    date: "۵ تیر ۱۴۰۵",
    dateEn: "June 26, 2026",
    product: "ماشین لباسشویی ۹ کیلویی ال‌جی",
    productEn: "LG 9kg Washing Machine",
    comment: "صداش خیلی کمه، تقریباً بی‌صداست. برنامه شستشوی سریع ۱۵ دقیقه‌ای برای لباس‌های کم‌کثیف عالیه. فقط دفترچه راهنماش انگلیسی بود که پشتیبانی نویرا نسخه فارسی‌ش رو برام ایمیل کرد.",
    commentEn: "Very quiet, almost silent. The 15-minute quick wash for lightly soiled clothes is great. The manual was only in English but Novira support emailed me the Persian version.",
    helpful: 27,
    verified: true,
  },
];

// ─── Swipe Hook ───
function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void, threshold = 50) {
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;
    if (isLeftSwipe) onSwipeLeft();
    if (isRightSwipe) onSwipeRight();
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}

export default function TestimonialsSection() {
  const { locale } = useI18n();
  const isRTL = locale === "fa";
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = reviews[active];

  const goTo = useCallback((index: number) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const next = useCallback(() => {
    setDirection(1);
    setActive((p) => (p + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((p) => (p - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Swipe
  const swipeHandlers = useSwipe(next, prev, 60);

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.97,
    }),
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-[#faf8f5] select-none"
    >
      <div className="px-4 sm:px-6 lg:px-12 xl:px-24 max-w-[1400px] mx-auto">
        {/* ─── Header ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-14 gap-6 lg:gap-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <div className={isRTL ? "text-right" : "text-left"}>
              <span className="text-[#c4a882] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3 sm:mb-4 block">
                {isRTL ? "نظرات واقعی مشتریان" : "Real Customer Reviews"}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#1a1a1a] leading-tight"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}>
                {isRTL ? "مشتریان ما چه می‌گویند" : "What Our Customers Say"}
              </h2>
              <p className="text-[#8a8577] text-sm max-w-lg leading-relaxed">
                {isRTL
                  ? "بیش از ۲,۴۰۰ مشتری راضی به نویرا اعتماد کرده‌اند. هر نظر توسط تیم ما بررسی و تأیید شده است."
                  : "Over 2,400 satisfied customers have trusted Novira. Every review is verified by our team."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={200} duration={800}>
            <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
              {[
                { value: "۴.۹", label: isRTL ? "میانگین امتیاز" : "Average Rating", icon: Star },
                { value: "۲,۴۵۰+", label: isRTL ? "نظر ثبت‌شده" : "Reviews", icon: null },
                { value: "۹۸٪", label: isRTL ? "خرید مجدد" : "Buy Again", icon: null },
              ].map((stat, i) => (
                <div key={i} className="text-center flex-1 sm:flex-none">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {stat.icon && <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#c4a882] text-[#c4a882]" />}
                    <span className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">{stat.value}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#8a8577]">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ─── Main Slider ─── */}
        <ScrollReveal animation="fade-up" delay={100} duration={900}>
          <div
            ref={containerRef}
            className="max-w-4xl mx-auto relative"
            {...swipeHandlers}
          >
            {/* Pause indicator */}
            <AnimatePresence>
              {isPaused && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#1a1a1a]/80 text-white backdrop-blur-sm"
                >
                  <Pause className="w-3 h-3" />
                  {isRTL ? "متوقف شده" : "Paused"}
                </motion.div>
              )}
            </AnimatePresence>

            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#1a1a1a]/[0.04] shadow-[0_4px_40px_rgba(0,0,0,0.06)] cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 sm:p-8 md:p-10 lg:p-12"
                >
                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-4 sm:mb-6 flex-wrap">
                    <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#c4a882]/10 text-[#c4a882]">
                      <Package className="w-3 h-3" />
                      <span className="truncate max-w-[180px] sm:max-w-none">
                        {isRTL ? current.product : current.productEn}
                      </span>
                    </div>
                    {current.verified && (
                      <span className="inline-flex items-center gap-0.5 px-2 py-1 rounded-full text-[10px] font-semibold bg-green-50 text-green-600">
                        <BadgeCheck className="w-3 h-3" />
                        {isRTL ? "خرید تأییدشده" : "Verified"}
                      </span>
                    )}
                  </div>

                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-[#c4a882]" strokeWidth={1.5} />

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed mb-6 sm:mb-8 text-[#1a1a1a]"
                    style={{ fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', serif" }}>
                    &ldquo;{isRTL ? current.comment : current.commentEn}&rdquo;
                  </p>

                  <div className="h-px w-full mb-5 sm:mb-6 bg-[#1a1a1a]/[0.06]" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[#c4a882]/30 bg-[#f5f0e8] flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4a882]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm font-bold block text-[#1a1a1a] truncate">
                          {isRTL ? current.name : current.nameEn}
                        </span>
                        <p className="text-[11px] sm:text-[12px] text-[#8a8577] truncate">
                          {isRTL ? current.role : current.roleEn}
                        </p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                            style={{
                              color: i < current.rating ? "#c4a882" : "rgba(26,26,26,0.1)",
                              fill: i < current.rating ? "#c4a882" : "none",
                            }}
                          />
                        ))}
                      </div>

                      <span className="text-[11px] sm:text-[12px] flex items-center gap-1 text-[#8a8577]">
                        <Calendar className="w-3 h-3" />
                        {isRTL ? current.date : current.dateEn}
                      </span>

                      <button
                        onClick={() => toggleLike(current.id)}
                        className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-[12px] font-medium transition-all duration-300 active:scale-95"
                        style={{
                          backgroundColor: liked.has(current.id) ? "rgba(196,168,130,0.1)" : "rgba(26,26,26,0.04)",
                          color: liked.has(current.id) ? "#c4a882" : "#8a8577",
                          border: liked.has(current.id) ? "1px solid rgba(196,168,130,0.3)" : "1px solid transparent",
                        }}
                      >
                        <ThumbsUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="hidden sm:inline">{isRTL ? "مفید بود" : "Helpful"}</span>
                        <span>({current.helpful + (liked.has(current.id) ? 1 : 0)})</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile swipe hint */}
            <p className="text-center text-[10px] text-[#8a8577]/60 mt-3 sm:hidden">
              {isRTL ? "برای تغییر نظر، چپ یا راست بکشید" : "Swipe left or right to navigate"}
            </p>
          </div>
        </ScrollReveal>

        {/* ─── Thumbnails ─── */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              onClick={() => goTo(index)}
              className="relative transition-all duration-300 focus:outline-none"
              aria-label={`Go to review ${index + 1}`}
            >
              <div
                className={`
                  w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden transition-all duration-300
                  flex items-center justify-center bg-[#f5f0e8] ring-2
                  ${active === index 
                    ? "ring-[#c4a882] scale-110 shadow-md" 
                    : "ring-transparent opacity-50 hover:opacity-80"
                  }
                `}
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#c4a882]" />
              </div>
              {active === index && (
                <motion.div
                  layoutId="activeThumb"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c4a882]"
                />
              )}
            </button>
          ))}
        </div>

        {/* ─── Navigation ─── */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center transition-all duration-300 text-[#1a1a1a] hover:border-[#c4a882] hover:text-[#c4a882] hover:scale-105 active:scale-95"
            aria-label="Previous review"
          >
            {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-1.5 rounded-full transition-all duration-500 focus:outline-none"
                style={{
                  width: active === i ? 24 : 6,
                  backgroundColor: active === i ? "#c4a882" : "rgba(26,26,26,0.1)",
                }}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center transition-all duration-300 text-[#1a1a1a] hover:border-[#c4a882] hover:text-[#c4a882] hover:scale-105 active:scale-95"
            aria-label="Next review"
          >
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}