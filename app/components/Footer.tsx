// app/components/Footer.tsx
"use client";

import { Instagram, Twitter, Youtube, Facebook, ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";

export default function Footer() {
  const { t, locale } = useI18n();
  const isRTL = locale === "fa";

  const quickLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.products"), href: "#products" },
    { label: t("nav.categories"), href: "#categories" },
    { label: t("nav.blog"), href: "#blog" },
  ];

  const supportLinks = [
    { label: t("footer.contact"), href: "#contact" },
    { label: t("footer.faq"), href: "#faq" },
    { label: t("footer.shipping"), href: "#shipping" },
    { label: t("footer.returns"), href: "#returns" },
  ];

  return (
    <footer className="bg-weave-dark text-white pt-20 pb-8">
      <div className="section-padding">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-weave-accent rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                {t("brand.name")}
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.brandDesc")}
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-weave-accent hover:border-weave-accent hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">{t("footer.links")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label as string}>
                  <a href={item.href} className="text-white/60 text-sm hover:text-weave-accent transition-colors flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">{t("footer.support")}</h4>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.label as string}>
                  <a href={item.href} className="text-white/60 text-sm hover:text-weave-accent transition-colors flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              {locale === "fa" ? "تماس با ما" : "Contact Us"}
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className="w-4 h-4 text-weave-accent mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  {locale === "fa" ? "تهران، خیابان ولیعصر، مرکز تجاری ویو" : "Tehran, Valiasr St, WEAVE Commercial Center"}
                </span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Phone className="w-4 h-4 text-weave-accent shrink-0" />
                <span className="text-white/60 text-sm">۰۲۱-۸۸۷۷۶۶۵۵</span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Mail className="w-4 h-4 text-weave-accent shrink-0" />
                <span className="text-white/60 text-sm">support@weave.ir</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 {t("brand.name")}. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-white/80 transition-colors">
              {locale === "fa" ? "حریم خصوصی" : "Privacy Policy"}
            </a>
            <a href="#" className="text-white/40 text-xs hover:text-white/80 transition-colors">
              {locale === "fa" ? "شرایط استفاده" : "Terms of Service"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}