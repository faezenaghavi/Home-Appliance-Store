"use client";

import {
  Instagram, Twitter, Youtube, Send, MapPin, Phone, Mail,
  Clock, ShieldCheck, Truck, Headphones, CreditCard, ChevronRight,
  Star, BadgeCheck
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";

export default function Footer() {
  const { locale } = useI18n();
  const isRTL = locale === "fa";

  const quickLinks = [
    { labelFa: "درباره نویرا", labelEn: "About Novira", href: `/${locale}/about` },
    { labelFa: "محصولات ویژه", labelEn: "Featured Products", href: `/${locale}/featured` },
    { labelFa: "تخفیف‌دارها", labelEn: "Special Offers", href: "#offers" },
    { labelFa: "جدیدترین‌ها", labelEn: "New Arrivals", href: "#new" },
    { labelFa: "بلاگ", labelEn: "Blog", href: "#blog" },
  ];

  const categories = [
    { labelFa: "یخچال و فریزر", labelEn: "Refrigerators", href: "#refrigerator" },
    { labelFa: "ماشین لباسشویی", labelEn: "Washing Machines", href: "#laundry" },
    { labelFa: "جاروبرقی و نظافت", labelEn: "Vacuums & Cleaning", href: "#cleaning" },
    { labelFa: "فر و مایکروویو", labelEn: "Ovens & Microwaves", href: "#kitchen" },
    { labelFa: "سرمایش و گرمایش", labelEn: "HVAC", href: "#hvac" },
    { labelFa: "تلویزیون و صوتی", labelEn: "TV & Audio", href: "#tv" },
  ];

  const support = [
    { labelFa: "راهنمای خرید", labelEn: "Buying Guide", href: "#guide" },
    { labelFa: "شرایط گارانتی", labelEn: "Warranty Terms", href: "#warranty" },
    { labelFa: "روش‌های ارسال", labelEn: "Shipping Methods", href: "#shipping" },
    { labelFa: "سوالات متداول", labelEn: "FAQ", href: "#faq" },
    { labelFa: "بازگشت کالا", labelEn: "Returns", href: "#returns" },
  ];

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  const getLabel = (item: { labelFa: string; labelEn: string }) =>
    isRTL ? item.labelFa : item.labelEn;

  return (
    <footer dir={isRTL ? "rtl" : "ltr"} className="relative pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 overflow-hidden bg-[#0f0f0f]">
      {/* ─── Background matching Hero ─── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#141210] to-[#1a1815]" />

      {/* Subtle gray texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23808080' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#808080]/4 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#808080]/2 rounded-full blur-[100px]" />

      <div className="px-4 sm:px-6 lg:px-12 xl:px-24 max-w-[1400px] mx-auto relative z-10">

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-10 md:mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-[#808080] transition-all duration-300 hover:shadow-[0_0_20px_rgba(128,128,128,0.3)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight block text-[#f5f0e8]">
                  NOVIRA
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase block mt-0.5 text-[#a8a095]/50">
                  {isRTL ? "لوازم خانگی لوکس" : "Luxury Appliances"}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-[#a8a095]/70">
              {isRTL
                ? "نویرا، مرجع تخصصی لوازم خانگی لوکس با بیش از ۱۰ سال سابقه. ارائه‌دهنده برترین برندهای جهانی با گارانتی معتبر و خدمات پس از فروش ویژه."
                : "Novira, the premier destination for luxury home appliances with over 10 years of experience. Offering top global brands with valid warranty and exclusive after-sales service."}
            </p>

            <div className="flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.06] text-[#a8a095]/50 transition-all duration-300 hover:scale-110 hover:border-[#808080]/30 hover:text-[#808080] hover:bg-[#808080]/8 active:scale-95"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.15em] mb-4 sm:mb-5 text-[#808080]">
              {isRTL ? "دسترسی سریع" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.labelFa}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#a8a095]/60 hover:text-[#808080] transition-colors duration-300"
                  >
                    {getLabel(link)}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.15em] mb-4 sm:mb-5 text-[#808080]">
              {isRTL ? "دسته‌بندی محصولات" : "Product Categories"}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {categories.map((cat) => (
                <li key={cat.labelFa}>
                  <a
                    href={cat.href}
                    className="group flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#a8a095]/60 hover:text-[#808080] transition-colors duration-300"
                  >
                    {getLabel(cat)}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.15em] mb-4 sm:mb-5 text-[#808080]">
              {isRTL ? "پشتیبانی و تماس" : "Support & Contact"}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {support.map((item) => (
                <li key={item.labelFa}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#a8a095]/60 hover:text-[#808080] transition-colors duration-300"
                  >
                    {getLabel(item)}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Contact Details Card ─── */}
        <div className="rounded-2xl p-4 sm:p-6 border border-white/[0.04] bg-[#141210]/60 backdrop-blur-sm mb-10 md:mb-12 hover:border-[#808080]/10 transition-all duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

            <a href="tel:02188776655" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#808080]/10 transition-colors group-hover:bg-[#808080]/20">
                <Phone className="w-3.5 h-3.5 text-[#808080]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] text-[#a8a095]/40">{isRTL ? "تلفن پشتیبانی" : "Support Hotline"}</p>
                <p className="text-sm font-semibold text-[#f5f0e8]">۰۲۱-۸۸۷۷۶۶۵۵</p>
              </div>
            </a>

            <a href="mailto:support@novira.ir" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#808080]/10 transition-colors group-hover:bg-[#808080]/20">
                <Mail className="w-3.5 h-3.5 text-[#808080]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] text-[#a8a095]/40">{isRTL ? "ایمیل" : "Email"}</p>
                <p className="text-sm font-semibold text-[#f5f0e8]">support@novira.ir</p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#808080]/10">
                <Clock className="w-3.5 h-3.5 text-[#808080]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] text-[#a8a095]/40">{isRTL ? "ساعات پاسخگویی" : "Working Hours"}</p>
                <p className="text-sm font-semibold text-[#f5f0e8]">
                  {isRTL ? "شنبه تا پنجشنبه ۹ صبح تا ۹ شب" : "Sat-Thu 9AM - 9PM"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[#808080]/10">
                <MapPin className="w-3.5 h-3.5 text-[#808080]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] text-[#a8a095]/40">{isRTL ? "آدرس فروشگاه" : "Store Address"}</p>
                <p className="text-sm font-medium leading-relaxed text-[#f5f0e8]/90">
                  {isRTL
                    ? "تهران، سعادت‌آباد، بلوار پاک‌نژاد، مرکز تجاری نویرا، طبقه ۳"
                    : "Tehran, Saadat Abad, Paknejad Blvd, Novira Commercial Center, 3rd Floor"}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-white/[0.04]">
          <div className="flex items-center gap-3">
            <p className="text-[10px] sm:text-[11px] text-[#a8a095]/30">
              &copy; 2026 NOVIRA. {isRTL ? "تمامی حقوق محفوظ است." : "All rights reserved."}
            </p>
            <span className="w-1 h-1 rounded-full bg-[#a8a095]/20" />
            <div className="flex items-center gap-1">
              <BadgeCheck className="w-3 h-3 text-[#808080]" />
              <span className="text-[10px] sm:text-[11px] text-[#a8a095]/30">
                {isRTL ? "نماد اعتماد الکترونیک" : "E-Trust Badge"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="#" className="text-[10px] sm:text-[11px] text-[#a8a095]/30 hover:text-[#808080] transition-colors duration-300">
              {isRTL ? "حریم خصوصی" : "Privacy"}
            </a>
            <a href="#" className="text-[10px] sm:text-[11px] text-[#a8a095]/30 hover:text-[#808080] transition-colors duration-300">
              {isRTL ? "شرایط استفاده" : "Terms"}
            </a>
            <a href="#" className="text-[10px] sm:text-[11px] text-[#a8a095]/30 hover:text-[#808080] transition-colors duration-300">
              {isRTL ? "کوکی‌ها" : "Cookies"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}