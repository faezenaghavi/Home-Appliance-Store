"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Search,
  ShoppingBag,
  Heart,
  User,
  ChevronDown,
  Globe,
  LogOut,
  Package,
  Settings,
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { Locale, localeLabels } from "@/app/i18n/config";
import { applianceCategories } from "@/app/data/appliances";

interface NavbarProps {
  cartCount?: number;
  wishlistCount?: number;
}

export default function Navbar({ cartCount = 0, wishlistCount = 0 }: NavbarProps) {
  const { locale, direction, setLocale, t } = useI18n();
  const isRTL = direction === "rtl";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) setIsCategoryOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setIsLangOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setIsUserOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { key: "nav.home", href: "#", isActive: true },
    { key: "nav.categories", href: "#categories", hasDropdown: true },
    { key: "nav.shop", href: "#products" },
    { key: "nav.about", href: "#about" },
  ];

  const userMenuItems = [
    { icon: User, label: t("nav.account") as string, href: "#account" },
    { icon: Package, label: t("nav.orders") as string, href: "#orders" },
    { icon: Heart, label: t("nav.wishlist") as string, href: "#wishlist" },
    { icon: Settings, label: t("common.save") as string, href: "#settings" },
  ];

  return (
    <>
      <nav
        dir={direction}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#faf8f5]/95 backdrop-blur-xl shadow-soft py-3"
            : "bg-white/10 backdrop-blur-xl py-5 border-b border-white/10"
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div
                className={`w-10 h-10 rounded-[8px] flex items-center justify-center border transition-all duration-500 ${
                  isScrolled
                    ? "bg-[#c4a882] border-[#c4a882]"
                    : "bg-white/10 border-white/20 backdrop-blur-[10px]"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className={`font-display text-lg font-bold tracking-tight transition-colors ${isScrolled ? "text-[#1a1a1a]" : "text-white"}`}>
                NOVIRA
              </span>
            </a>

            {/* Desktop Nav Links + Inline Search Box */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <div key={link.key} ref={link.hasDropdown ? categoryRef : undefined} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => { if (link.hasDropdown) { e.preventDefault(); setIsCategoryOpen(!isCategoryOpen); } }}
                    className={`text-[12px] font-medium tracking-[2px] uppercase transition-colors ${
                      isScrolled
                        ? "text-[#1a1a1a]/80 hover:text-[#1a1a1a]"
                        : "text-white/80 hover:text-white"
                    } ${link.isActive ? (isScrolled ? "text-[#1a1a1a]" : "text-white") : ""}`}
                  >
                    {t(link.key)}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3 h-3 inline-block transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""} ${isRTL ? "mr-1" : "ml-1"}`} />
                    )}
                  </a>

                  {link.hasDropdown && isCategoryOpen && (
                    <div className={`absolute top-full mt-2 w-72 bg-white rounded-2xl shadow-elevated border border-[#1a1a1a]/10 overflow-hidden animate-fade-in ${isRTL ? "right-0" : "left-0"}`}>
                      <div className="p-2">
                        {applianceCategories.map((cat) => (
                          <a key={cat.id} href={`#${cat.id}`} onClick={() => setIsCategoryOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#faf8f5] transition-colors group">
                            <div className="w-10 h-10 rounded-lg bg-[#c4a882]/10 flex items-center justify-center shrink-0">
                              <span className="text-[#c4a882] text-xs font-bold">{cat.name.charAt(0)}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[#1a1a1a] text-sm font-medium truncate">{locale === "fa" && cat.nameFa ? cat.nameFa : cat.name}</p>
                              <p className="text-[#8a8577] text-xs">{cat.productCount} {locale === "fa" ? "محصول" : "products"}</p>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-[#8a8577] group-hover:text-[#c4a882] transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Inline Glassmorphism Search Box */}
              <div className={`relative flex items-center h-10 rounded-[10px] px-3 backdrop-blur-[4px] border transition-all w-[220px] ${
                isScrolled
                  ? "bg-[#1a1a1a]/5 border-[#1a1a1a]/10"
                  : "bg-white/10 border-white/20"
              }`}>
                <Search className={`w-4 h-4 transition-colors ${isScrolled ? "text-[#1a1a1a]/50" : "text-white/60"}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={locale === "fa" ? "جستجو..." : "Search..."}
                  className={`bg-transparent border-none outline-none text-[12px] tracking-[1px] w-full transition-colors placeholder:tracking-[1px] ${
                    isRTL ? "pr-2" : "pl-2"
                  } ${
                    isScrolled
                      ? "text-[#1a1a1a] placeholder:text-[#1a1a1a]/50"
                      : "text-white placeholder:text-white/50"
                  }`}
                />
              </div>
            </div>

            {/* Right Icon Boxes */}
            <div className="flex items-center gap-4">

              {/* Wishlist */}
              <a href="#wishlist" className={`relative w-10 h-10 rounded-[10px] flex items-center justify-center border backdrop-blur-[10px] transition-all ${
                isScrolled ? "bg-[#1a1a1a]/5 border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/10 hover:border-[#1a1a1a]/20" : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
              }`}>
                <Heart className={`w-[18px] h-[18px] transition-colors ${isScrolled ? "text-[#1a1a1a]" : "text-white"}`} />
                {wishlistCount > 0 && (
                  <span className={`absolute -top-1 w-4 h-4 bg-[#c4a882] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm ${isRTL ? "-left-1" : "-right-1"}`}>{wishlistCount}</span>
                )}
              </a>

              {/* Cart */}
              <a href="#cart" className={`relative w-10 h-10 rounded-[10px] flex items-center justify-center border backdrop-blur-[10px] transition-all ${
                isScrolled ? "bg-[#1a1a1a]/5 border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/10 hover:border-[#1a1a1a]/20" : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
              }`}>
                <ShoppingBag className={`w-[18px] h-[18px] transition-colors ${isScrolled ? "text-[#1a1a1a]" : "text-white"}`} />
                {cartCount > 0 && (
                  <span className={`absolute -top-1 w-4 h-4 bg-[#c4a882] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm ${isRTL ? "-left-1" : "-right-1"}`}>{cartCount}</span>
                )}
              </a>

              {/* Language */}
              <div ref={langRef} className="relative hidden sm:block">
                <button onClick={() => setIsLangOpen(!isLangOpen)} className={`w-10 h-10 rounded-[10px] flex items-center justify-center border backdrop-blur-[10px] transition-all ${
                  isScrolled ? "bg-[#1a1a1a]/5 border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/10 hover:border-[#1a1a1a]/20" : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
                }`}>
                  <Globe className={`w-[18px] h-[18px] transition-colors ${isScrolled ? "text-[#1a1a1a]" : "text-white"}`} />
                </button>
                {isLangOpen && (
                  <div className={`absolute top-full mt-2 w-36 bg-white rounded-2xl shadow-elevated border border-[#1a1a1a]/10 overflow-hidden animate-fade-in ${isRTL ? "left-0" : "right-0"}`}>
                    {(["fa", "en"] as Locale[]).map((l) => (
                      <button key={l} onClick={() => { setLocale(l); setIsLangOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${locale === l ? "bg-[#c4a882]/10 text-[#c4a882] font-medium" : "text-[#1a1a1a] hover:bg-[#faf8f5]"}`}>
                        <span className={`w-2 h-2 rounded-full ${locale === l ? "bg-[#c4a882]" : "bg-[#1a1a1a]/20"}`} />
                        {localeLabels[l]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* User */}
              <div ref={userRef} className="relative hidden md:block">
                <button onClick={() => setIsUserOpen(!isUserOpen)} className={`w-10 h-10 rounded-[10px] flex items-center justify-center border backdrop-blur-[10px] transition-all ${
                  isScrolled ? "bg-[#1a1a1a]/5 border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/10 hover:border-[#1a1a1a]/20" : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
                }`}>
                  <User className={`w-[18px] h-[18px] transition-colors ${isScrolled ? "text-[#1a1a1a]" : "text-white"}`} />
                </button>
                {isUserOpen && (
                  <div className={`absolute top-full mt-2 w-52 bg-white rounded-2xl shadow-elevated border border-[#1a1a1a]/10 overflow-hidden animate-fade-in ${isRTL ? "left-0" : "right-0"}`}>
                    <div className="p-2">
                      {userMenuItems.map((item) => (
                        <a key={item.label} href={item.href} onClick={() => setIsUserOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-[#1a1a1a] hover:bg-[#faf8f5] transition-colors">
                          <item.icon className="w-4 h-4 text-[#8a8577]" />
                          {item.label}
                        </a>
                      ))}
                      <div className="border-t border-[#1a1a1a]/10 mt-1 pt-1">
                        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors">
                          <LogOut className="w-4 h-4" />
                          {locale === "fa" ? "خروج" : "Sign Out"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Toggle */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden w-10 h-10 rounded-[10px] flex items-center justify-center border backdrop-blur-[10px] transition-all ${
                isScrolled ? "bg-[#1a1a1a]/5 border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/10 hover:border-[#1a1a1a]/20" : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
              }`}>
                {isMobileMenuOpen ? <X className={`w-5 h-5 transition-colors ${isScrolled ? "text-[#1a1a1a]" : "text-white"}`} /> : <Menu className={`w-5 h-5 transition-colors ${isScrolled ? "text-[#1a1a1a]" : "text-white"}`} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div dir={direction} className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute inset-0 bg-[#1a1a1a]/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 h-full w-[85vw] max-w-sm bg-[#faf8f5] shadow-2xl transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? (isRTL ? "translate-x-0 right-0" : "translate-x-0 left-0") : (isRTL ? "translate-x-full right-0" : "-translate-x-full left-0")
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-[#1a1a1a]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-[#c4a882] rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-display text-lg font-bold text-[#1a1a1a]">NOVIRA</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-9 h-9 rounded-full bg-[#1a1a1a]/5 flex items-center justify-center text-[#1a1a1a]">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 border-b border-[#1a1a1a]/10">
              <div className="relative flex items-center h-12 bg-[#1a1a1a]/5 rounded-xl px-3">
                <Search className={`w-4 h-4 text-[#1a1a1a]/50 absolute ${isRTL ? "right-3" : "left-3"}`} />
                <input type="text" placeholder={t("nav.search") as string} className={`bg-transparent w-full text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/50 outline-none ${isRTL ? "pr-10" : "pl-10"}`} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
              {navLinks.map((link) => (
                <div key={link.key}>
                  <a href={link.href} onClick={(e) => { if (link.hasDropdown) e.preventDefault(); else setIsMobileMenuOpen(false); }} className="flex items-center justify-between px-5 py-3.5 text-[#1a1a1a] text-sm font-medium hover:bg-[#1a1a1a]/5 transition-colors">
                    {t(link.key)}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-[#1a1a1a]/50" />}
                  </a>
                  {link.hasDropdown && (
                    <div className="px-5 pb-2">
                      {applianceCategories.map((cat) => (
                        <a key={cat.id} href={`#${cat.id}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2.5 text-[#1a1a1a]/70 text-sm hover:text-[#c4a882] transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a]/5 flex items-center justify-center">
                            <span className="text-xs font-bold text-[#c4a882]">{cat.name.charAt(0)}</span>
                          </div>
                          {locale === "fa" && cat.nameFa ? cat.nameFa : cat.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-[#1a1a1a]/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[#1a1a1a]/70 text-sm">{locale === "fa" ? "زبان" : "Language"}</span>
                <div className="flex gap-2">
                  {(["fa", "en"] as Locale[]).map((l) => (
                    <button key={l} onClick={() => setLocale(l)} className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${locale === l ? "bg-[#c4a882] text-white" : "bg-[#1a1a1a]/5 text-[#1a1a1a] hover:bg-[#1a1a1a]/10"}`}>
                      {localeLabels[l]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}