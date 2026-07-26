"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Star, Quote, ChevronLeft, ChevronRight, BadgeCheck,
  ThumbsUp, Calendar, Package, Pause, User
} from "lucide-react";
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

export default function TestimonialsSection() {
  const { locale } = useI18n();
  const isRTL = locale === "fa";
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const current = reviews[active];

  const goTo = useCallback((index: number) => {
    if (index === active || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      requestAnimationFrame(() => setIsAnimating(false));
    }, 300);
  }, [active, isAnimating]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goTo((active + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active, isPaused, goTo]);

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleHoldStart = () => setIsPaused(true);
  const handleHoldEnd = () => setIsPaused(false);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      style={{ backgroundColor: "#faf8f5" }}
      className="py-24 md:py-32 select-none"
    >
      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <ScrollReveal animation="fade-right" duration={800}>
            <div className={isRTL ? "text-right" : "text-left"}>
              <span
                style={{ color: "#c4a882", letterSpacing: "0.2em" }}
                className="text-xs font-semibold uppercase mb-4 block"
              >
                {isRTL ? "نظرات واقعی مشتریان" : "Real Customer Reviews"}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  color: "#1a1a1a",
                  fontFamily: "var(--font-display), 'Playfair Display', serif",
                }}
              >
                {isRTL ? "مشتریان ما چه می‌گویند" : "What Our Customers Say"}
              </h2>
              <p style={{ color: "#8a8577" }} className="text-sm max-w-lg leading-relaxed">
                {isRTL
                  ? "بیش از ۲,۴۰۰ مشتری راضی به نویرا اعتماد کرده‌اند. هر نظر توسط تیم ما بررسی و تأیید شده است."
                  : "Over 2,400 satisfied customers have trusted Novira. Every review is verified by our team."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={200} duration={800}>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="w-5 h-5 fill-[#c4a882] text-[#c4a882]" />
                  <span className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>۴.۹</span>
                </div>
                <p className="text-[11px]" style={{ color: "#8a8577" }}>{isRTL ? "میانگین امتیاز" : "Average Rating"}</p>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: "rgba(26,26,26,0.08)" }} />
              <div className="text-center">
                <span className="text-2xl font-bold block" style={{ color: "#1a1a1a" }}>۲,۴۵۰+</span>
                <p className="text-[11px]" style={{ color: "#8a8577" }}>{isRTL ? "نظر ثبت‌شده" : "Reviews"}</p>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: "rgba(26,26,26,0.08)" }} />
              <div className="text-center">
                <span className="text-2xl font-bold block" style={{ color: "#1a1a1a" }}>۹۸٪</span>
                <p className="text-[11px]" style={{ color: "#8a8577" }}>{isRTL ? "خرید مجدد" : "Buy Again"}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Main Slider */}
        <ScrollReveal animation="fade-up" delay={100} duration={900}>
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
                border: "1px solid rgba(26,26,26,0.04)",
              }}
              onMouseDown={handleHoldStart}
              onMouseUp={handleHoldEnd}
              onMouseLeave={handleHoldEnd}
              onTouchStart={handleHoldStart}
              onTouchEnd={handleHoldEnd}
            >
              {isPaused && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium bg-[rgba(26,26,26,0.8)] text-white backdrop-blur-sm">
                  <Pause className="w-3 h-3" />
                  {isRTL ? "متوقف شده" : "Paused"}
                </div>
              )}

              <div
                className="p-8 md:p-12 transition-all duration-300 ease-out"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? "translateY(12px)" : "translateY(0)",
                }}
              >
                {/* Tags */}
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
                    style={{ backgroundColor: "rgba(196,168,130,0.1)", color: "#c4a882" }}
                  >
                    <Package className="w-3 h-3" />
                    {isRTL ? current.product : current.productEn}
                  </div>
                  {current.verified && (
                    <span className="inline-flex items-center gap-0.5 px-2 py-1 rounded-full text-[10px] font-semibold bg-green-50 text-green-600">
                      <BadgeCheck className="w-3 h-3" />
                      {isRTL ? "خرید تأییدشده" : "Verified Purchase"}
                    </span>
                  )}
                </div>

                <Quote className="w-8 h-8 mb-4" style={{ color: "#c4a882" }} strokeWidth={1.5} />

                <p
                  className="text-xl md:text-2xl leading-relaxed mb-8"
                  style={{
                    color: "#1a1a1a",
                    fontFamily: "var(--font-display), 'Vazirmatn', 'Tahoma', serif",
                  }}
                >
                  &ldquo;{isRTL ? current.comment : current.commentEn}&rdquo;
                </p>

                <div className="h-px w-full mb-6" style={{ backgroundColor: "rgba(26,26,26,0.06)" }} />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Author with Icon Avatar */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[rgba(196,168,130,0.3)] bg-[#f5f0e8] flex items-center justify-center shrink-0">
                      <User className="w-6 h-6" style={{ color: "#c4a882" }} />
                    </div>
                    <div>
                      <span className="text-sm font-bold block" style={{ color: "#1a1a1a" }}>
                        {isRTL ? current.name : current.nameEn}
                      </span>
                      <p className="text-[12px]" style={{ color: "#8a8577" }}>
                        {isRTL ? current.role : current.roleEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          style={{
                            color: i < current.rating ? "#c4a882" : "rgba(26,26,26,0.1)",
                            fill: i < current.rating ? "#c4a882" : "none",
                          }}
                        />
                      ))}
                    </div>

                    <span className="text-[12px] flex items-center gap-1" style={{ color: "#8a8577" }}>
                      <Calendar className="w-3 h-3" />
                      {isRTL ? current.date : current.dateEn}
                    </span>

                    <button
                      onClick={() => toggleLike(current.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all"
                      style={{
                        backgroundColor: liked.has(current.id) ? "rgba(196,168,130,0.1)" : "rgba(26,26,26,0.04)",
                        color: liked.has(current.id) ? "#c4a882" : "#8a8577",
                        border: liked.has(current.id) ? "1px solid rgba(196,168,130,0.3)" : "1px solid transparent",
                      }}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      {isRTL ? "مفید بود" : "Helpful"} ({current.helpful + (liked.has(current.id) ? 1 : 0)})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Thumbnail Avatars */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              onClick={() => goTo(index)}
              className="transition-all duration-300"
            >
              <div
                className={`
                  w-10 h-10 rounded-full overflow-hidden transition-all duration-300
                  flex items-center justify-center bg-[#f5f0e8]
                  ${active === index ? "ring-2 ring-[#c4a882] scale-110" : "opacity-50 hover:opacity-80"}
                `}
              >
                <User className="w-5 h-5" style={{ color: "#c4a882" }} />
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => goTo((active - 1 + reviews.length) % reviews.length)}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 hover:border-[#c4a882] hover:text-[#c4a882]"
            style={{ borderColor: "rgba(26,26,26,0.1)", color: "#1a1a1a" }}
          >
            {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: active === i ? 24 : 6,
                  backgroundColor: active === i ? "#c4a882" : "rgba(26,26,26,0.1)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo((active + 1) % reviews.length)}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 hover:border-[#c4a882] hover:text-[#c4a882]"
            style={{ borderColor: "rgba(26,26,26,0.1)", color: "#1a1a1a" }}
          >
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}