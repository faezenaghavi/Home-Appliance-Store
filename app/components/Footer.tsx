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
    { labelFa: "درباره نویرا", labelEn: "About Novira", href: "#about" },
    { labelFa: "محصولات ویژه", labelEn: "Featured Products", href: "#featured" },
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
    <footer dir={isRTL ? "rtl" : "ltr"} className="bg-[#1a1a1a] pt-20 pb-8">
      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#c4a882]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight block text-white">
                  NOVIRA
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase block mt-0.5 text-white/35">
                  {isRTL ? "لوازم خانگی لوکس" : "Luxury Appliances"}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-white/50">
              {isRTL
                ? "نویرا، مرجع تخصصی لوازم خانگی لوکس با بیش از ۱۰ سال سابقه. ارائه‌دهنده برترین برندهای جهانی با گارانتی معتبر و خدمات پس از فروش ویژه."
                : "Novira, the premier destination for luxury home appliances with over 10 years of experience. Offering top global brands with valid warranty and exclusive after-sales service."}
            </p>
            
            {/* Border changed to subtle brand color */}
            <div className="flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#c4a882]/10 text-white/40 transition-all duration-300 hover:scale-110 hover:border-[#c4a882]/40 hover:text-[#c4a882] hover:bg-[#c4a882]/8"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] mb-5 text-[#c4a882]">
              {isRTL ? "دسترسی سریع" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.labelFa}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-[13px] text-white/45 hover:text-[#c4a882] transition-colors duration-300"
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
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] mb-5 text-[#c4a882]">
              {isRTL ? "دسته‌بندی محصولات" : "Product Categories"}
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.labelFa}>
                  <a
                    href={cat.href}
                    className="group flex items-center gap-1.5 text-[13px] text-white/45 hover:text-[#c4a882] transition-colors duration-300"
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
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] mb-5 text-[#c4a882]">
              {isRTL ? "پشتیبانی و تماس" : "Support & Contact"}
            </h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.labelFa}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[13px] text-white/45 hover:text-[#c4a882] transition-colors duration-300"
                  >
                    {getLabel(item)}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Contact Details Card (Border changed to dark warm gray) ─── */}
        <div className="rounded-2xl p-6 border bg-white/[0.02] border-[#2a2a2a] mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <a href="tel:02188776655" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#c4a882]/12">
                <Phone className="w-3.5 h-3.5 text-[#c4a882]" />
              </div>
              <div>
                <p className="text-[11px] text-white/35">{isRTL ? "تلفن پشتیبانی" : "Support Hotline"}</p>
                <p className="text-sm font-semibold text-white">۰۲۱-۸۸۷۷۶۶۵۵</p>
              </div>
            </a>

            <a href="mailto:support@novira.ir" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#c4a882]/12">
                <Mail className="w-3.5 h-3.5 text-[#c4a882]" />
              </div>
              <div>
                <p className="text-[11px] text-white/35">{isRTL ? "ایمیل" : "Email"}</p>
                <p className="text-sm font-semibold text-white">support@novira.ir</p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#c4a882]/12">
                <Clock className="w-3.5 h-3.5 text-[#c4a882]" />
              </div>
              <div>
                <p className="text-[11px] text-white/35">{isRTL ? "ساعات پاسخگویی" : "Working Hours"}</p>
                <p className="text-sm font-semibold text-white">
                  {isRTL ? "شنبه تا پنجشنبه ۹ صبح تا ۹ شب" : "Sat-Thu 9AM - 9PM"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[#c4a882]/12">
                <MapPin className="w-3.5 h-3.5 text-[#c4a882]" />
              </div>
              <div>
                <p className="text-[11px] text-white/35">{isRTL ? "آدرس فروشگاه" : "Store Address"}</p>
                <p className="text-sm font-medium leading-relaxed text-white">
                  {isRTL
                    ? "تهران، سعادت‌آباد، بلوار پاک‌نژاد، مرکز تجاری نویرا، طبقه ۳"
                    : "Tehran, Saadat Abad, Paknejad Blvd, Novira Commercial Center, 3rd Floor"}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ─── Bottom Bar (Border changed to dark warm gray) ─── */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            <p className="text-[11px] text-white/25">
              &copy; 2026 NOVIRA. {isRTL ? "تمامی حقوق محفوظ است." : "All rights reserved."}
            </p>
            <span className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
            <div className="flex items-center gap-1">
              <BadgeCheck className="w-3 h-3 text-[#c4a882]" />
              <span className="text-[11px] text-white/25">
                {isRTL ? "نماد اعتماد الکترونیک" : "E-Trust Badge"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[11px] text-white/25 hover:text-[#c4a882] transition-colors duration-300">
              {isRTL ? "حریم خصوصی" : "Privacy"}
            </a>
            <a href="#" className="text-[11px] text-white/25 hover:text-[#c4a882] transition-colors duration-300">
              {isRTL ? "شرایط استفاده" : "Terms"}
            </a>
            <a href="#" className="text-[11px] text-white/25 hover:text-[#c4a882] transition-colors duration-300">
              {isRTL ? "کوکی‌ها" : "Cookies"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}