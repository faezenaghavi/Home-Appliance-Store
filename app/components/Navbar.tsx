"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Menu, X, ArrowUpRight, Search, ShoppingBag, Heart, User,
  ChevronDown, Globe, LogOut, Package, Settings, Tag, Sparkles,
  Grid3X3, Info, Newspaper, Phone, MapPin, Home
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isRTL = direction === "rtl";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const categoryRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const basePath = `/${locale}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { key: "nav.home", labelFa: "خانه", labelEn: "Home", href: basePath, icon: Home },
    { key: "nav.offers", labelFa: "تخفیف‌دارها", labelEn: "Special Offers", href: `${basePath}/products?offers=true`, icon: Tag },
    { key: "nav.featured", labelFa: "محصولات ویژه", labelEn: "Featured", href: `${basePath}/products?featured=true`, icon: Sparkles },
    { key: "nav.categories", labelFa: "دسته‌بندی", labelEn: "Categories", href: `${basePath}/products`, hasDropdown: true, icon: Grid3X3 },
    { key: "nav.about", labelFa: "درباره ما", labelEn: "About Us", href: `${basePath}/about`, icon: Info },
    { key: "nav.blog", labelFa: "بلاگ", labelEn: "Blog", href: `${basePath}/blog`, icon: Newspaper },
  ];

  const userMenuItems = [
    { icon: User, labelFa: "حساب کاربری", labelEn: "My Account", href: `${basePath}/account`, descFa: "مشاهده و ویرایش پروفایل", descEn: "View & edit profile" },
    { icon: Package, labelFa: "سفارشات من", labelEn: "My Orders", href: `${basePath}/account?tab=orders`, descFa: "پیگیری خریدهای شما", descEn: "Track your purchases" },
    { icon: Heart, labelFa: "علاقه‌مندی‌ها", labelEn: "Wishlist", href: `${basePath}/wishlist`, descFa: "محصولات ذخیره‌شده", descEn: "Saved items" },
    { icon: Settings, labelFa: "تنظیمات", labelEn: "Settings", href: `${basePath}/account?tab=settings`, descFa: "تنظیمات حساب", descEn: "Account settings" },
  ];

  const getLabel = (item: { labelFa: string; labelEn: string }) =>
    locale === "fa" ? item.labelFa : item.labelEn;

  // تابع اصلاح شده برای تشخیص دقیق صفحه فعال
  const isActive = (href: string) => {
    const [path, query] = href.split("?");
    const currentPath = pathname === `${basePath}/` ? basePath : pathname;

    if (path !== currentPath) return false;

    if (!query) {
      if (path === `${basePath}/products`) {
        return !searchParams.get("offers") && !searchParams.get("featured") && !searchParams.get("category") && !searchParams.get("search");
      }
      return true;
    }

    const params = new URLSearchParams(query);
    for (const [key, value] of params.entries()) {
      if (searchParams.get(key) !== value) return false;
    }
    return true;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`${basePath}/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  const switchLocale = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    setLocale(newLocale);
    router.push(newPath);
    setIsLangOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.hasDropdown) {
      e.preventDefault();
      setIsCategoryOpen(!isCategoryOpen);
      return;
    }
    setIsMobileMenuOpen(false);
    if (link.href === basePath && (pathname === basePath || pathname === `${basePath}/`)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        dir={direction}
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isMobileMenuOpen ? "z-[45]" : "z-50"
        } ${
          isScrolled
            ? "bg-[#faf8f5]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-2 sm:py-3"
            : "bg-[#faf8f5]/60 backdrop-blur-md py-3 sm:py-5" 
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo */}
            <Link href={basePath} scroll={true} className="flex items-center gap-2 sm:gap-3 shrink-0 group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-500 bg-[#1a1a1a] border-[#1a1a1a]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c4a882]">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight transition-colors leading-none text-[#1a1a1a]">
                  NOVIRA
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-colors mt-0.5 text-[#8a8577]">
                  {locale === "fa" ? "لوازم خانگی لوکس" : "Luxury Appliances"}
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const isHovered = hoveredLink === link.key;
                return (
                  <div key={link.key} ref={link.hasDropdown ? categoryRef : undefined} className="relative">
                    <Link
                      href={link.href}
                      scroll={true}
                      onClick={(e) => handleNavClick(e, link)}
                      onMouseEnter={() => setHoveredLink(link.key)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 z-10 ${
                        active 
                          ? "text-[#c4a882] bg-[#c4a882]/10" 
                          : "text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:bg-[#1a1a1a]/5"
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        {getLabel(link)}
                        {link.hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`} />}
                      </span>
                    </Link>

                    {link.hasDropdown && isCategoryOpen && (
                      <div className={`absolute top-full mt-3 w-[420px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[#1a1a1a]/5 overflow-hidden animate-fade-in ${isRTL ? "right-0" : "left-0"}`}>
                        <div className="p-1">
                          <div className="px-4 pt-3 pb-2">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8577]">{locale === "fa" ? "دسته‌بندی محصولات" : "Product Categories"}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-1 p-1">
                            {applianceCategories.map((cat) => (
                              <Link key={cat.id} href={`${basePath}/products?category=${cat.id}`} onClick={() => setIsCategoryOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#faf8f5] transition-all duration-200 group">
                                <div className="w-10 h-10 rounded-lg bg-[#c4a882]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c4a882]/20 transition-colors">
                                  <span className="text-[#c4a882] text-xs font-bold">{cat.name.charAt(0)}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[#1a1a1a] text-[13px] font-medium truncate">{locale === "fa" && cat.nameFa ? cat.nameFa : cat.name}</p>
                                  <p className="text-[#8a8577] text-[11px] mt-0.5">{cat.productCount} {locale === "fa" ? "محصول" : "products"}</p>
                                </div>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#8a8577] group-hover:text-[#c4a882] transition-colors opacity-0 group-hover:opacity-100" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center h-9 sm:h-10 rounded-full px-4 border transition-all duration-300 w-[140px] sm:w-[160px] xl:w-[200px] bg-[#1a1a1a]/[0.03] border-[#1a1a1a]/10 focus-within:border-[#c4a882]/40 focus-within:bg-[#c4a882]/[0.03] focus-within:w-[180px] sm:focus-within:w-[200px] xl:focus-within:w-[260px]">
                <Search className="w-3.5 h-3.5 shrink-0 transition-colors text-[#1a1a1a]/30" />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={locale === "fa" ? "جستجو..." : "Search..."} className={`bg-transparent border-none outline-none text-[12px] w-full transition-all ${isRTL ? "pr-2.5" : "pl-2.5"} text-[#1a1a1a] placeholder:text-[#1a1a1a]/35`} />
              </form>

              <span className="hidden md:inline w-px h-5 sm:h-6 transition-colors bg-[#1a1a1a]/10" />

              {/* Wishlist */}
              <Link href={`${basePath}/wishlist`} className="group relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all duration-300 bg-transparent border-[#1a1a1a]/10 hover:border-[#c4a882]/40 hover:bg-[#c4a882]/5">
                <Heart className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] transition-all duration-300 group-hover:scale-110 text-[#1a1a1a]/70 group-hover:text-[#c4a882]" />
                {wishlistCount > 0 && <span className={`absolute -top-1.5 w-[18px] h-[18px] bg-[#c4a882] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm border-2 border-[#faf8f5] ${isRTL ? "-left-1.5" : "-right-1.5"}`}>{wishlistCount}</span>}
              </Link>

              {/* Cart */}
              <Link href={`${basePath}/cart`} className="group relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all duration-300 bg-transparent border-[#1a1a1a]/10 hover:border-[#c4a882]/40 hover:bg-[#c4a882]/5">
                <ShoppingBag className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] transition-all duration-300 group-hover:scale-110 text-[#1a1a1a]/70 group-hover:text-[#c4a882]" />
                {cartCount > 0 && <span className={`absolute -top-1.5 w-[18px] h-[18px] bg-[#c4a882] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm border-2 border-[#faf8f5] ${isRTL ? "-left-1.5" : "-right-1.5"}`}>{cartCount}</span>}
              </Link>

              {/* Language */}
              <div ref={langRef} className="relative hidden lg:block">
                <button onClick={() => setIsLangOpen(!isLangOpen)} className={`group w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${isLangOpen ? "bg-[#c4a882]/10 border-[#c4a882]/40 text-[#c4a882]" : "bg-transparent border-[#1a1a1a]/10 hover:border-[#c4a882]/40 hover:bg-[#c4a882]/5"}`}>
                  <Globe className="w-[18px] h-[18px] transition-all duration-300 group-hover:scale-110 text-[#1a1a1a]/70 group-hover:text-[#c4a882]" />
                </button>
                {isLangOpen && (
                  <div className={`absolute top-full mt-2 w-40 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-[#1a1a1a]/5 overflow-hidden animate-fade-in ${isRTL ? "left-0" : "right-0"}`}>
                    <div className="p-1.5">
                      {(["fa", "en"] as Locale[]).map((l) => (
                        <button key={l} onClick={() => switchLocale(l)} className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] transition-all ${locale === l ? "bg-[#c4a882]/10 text-[#c4a882] font-semibold" : "text-[#1a1a1a] hover:bg-[#faf8f5]"}`}>
                          <span className={`w-2 h-2 rounded-full ${locale === l ? "bg-[#c4a882]" : "bg-[#1a1a1a]/15"}`} />
                          {localeLabels[l]}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User */}
              <div ref={userRef} className="relative hidden lg:block">
                <button onClick={() => setIsUserOpen(!isUserOpen)} className={`group w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${isUserOpen ? "bg-[#c4a882]/10 border-[#c4a882]/40 text-[#c4a882]" : "bg-transparent border-[#1a1a1a]/10 hover:border-[#c4a882]/40 hover:bg-[#c4a882]/5"}`}>
                  <User className="w-[18px] h-[18px] transition-all duration-300 group-hover:scale-110 text-[#1a1a1a]/70 group-hover:text-[#c4a882]" />
                </button>
                {isUserOpen && (
                  <div className={`absolute top-full mt-2 w-64 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-[#1a1a1a]/5 overflow-hidden animate-fade-in ${isRTL ? "left-0" : "right-0"}`}>
                    <div className="p-2">
                      <div className="px-3 pt-2 pb-1"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8577]">{locale === "fa" ? "حساب کاربری" : "My Account"}</p></div>
                      {userMenuItems.map((item) => (
                        <Link key={item.labelFa} href={item.href} onClick={() => setIsUserOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] text-[#1a1a1a] hover:bg-[#faf8f5] transition-all group">
                          <div className="w-8 h-8 rounded-lg bg-[#c4a882]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c4a882]/20 transition-colors"><item.icon className="w-3.5 h-3.5 text-[#c4a882]" /></div>
                          <div className="flex-1"><p className="font-medium">{getLabel(item)}</p><p className="text-[11px] text-[#8a8577] mt-0.5">{locale === "fa" ? item.descFa : item.descEn}</p></div>
                        </Link>
                      ))}
                      <div className="border-t border-[#1a1a1a]/8 mt-1 pt-1">
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] text-red-500 hover:bg-red-50 transition-colors"><LogOut className="w-3.5 h-3.5" />{locale === "fa" ? "خروج از حساب" : "Sign Out"}</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Toggle */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all duration-300 bg-transparent border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5">
                {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 transition-colors text-[#1a1a1a]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 transition-colors text-[#1a1a1a]" />}
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Mobile Menu Overlay */}
      <div dir={direction} className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute inset-0 bg-[#1a1a1a]/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 h-full w-[85vw] max-w-[380px] bg-[#faf8f5] shadow-2xl transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? (isRTL ? "translate-x-0 right-0" : "translate-x-0 left-0") : (isRTL ? "translate-x-full right-0" : "-translate-x-full left-0")
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1a1a1a]/8 shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c4a882]">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-[#1a1a1a] leading-none">NOVIRA</span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#8a8577] mt-0.5">
                    {locale === "fa" ? "لوازم خانگی لوکس" : "Luxury Appliances"}
                  </span>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1a1a1a]/5 flex items-center justify-center text-[#1a1a1a] hover:bg-[#c4a882]/10 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-[#1a1a1a]/8 shrink-0">
              <form onSubmit={handleSearch} className="relative flex items-center h-11 sm:h-12 bg-[#1a1a1a]/[0.04] rounded-xl px-4 border border-[#1a1a1a]/8 focus-within:border-[#c4a882]/30 transition-colors">
                <Search className="w-4 h-4 text-[#1a1a1a]/40 absolute right-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={locale === "fa" ? "جستجو در محصولات..." : "Search products..."}
                  className="bg-transparent w-full text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 outline-none pr-10"
                />
              </form>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 overflow-y-auto py-2 overscroll-contain">
              <div className="px-4 pt-2 pb-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8577]">
                  {locale === "fa" ? "منوی اصلی" : "Main Menu"}
                </p>
              </div>
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <div key={link.key}>
                    <Link
                      href={link.href}
                      scroll={true}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`flex items-center justify-between mx-2 px-4 py-3.5 rounded-xl text-[14px] font-medium transition-all ${
                        active
                          ? "bg-[#c4a882]/10 text-[#c4a882]"
                          : "text-[#1a1a1a] hover:bg-[#1a1a1a]/[0.03]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${active ? "bg-[#c4a882]/15" : "bg-[#1a1a1a]/5"}`}>
                          <link.icon className={`w-4 h-4 ${active ? "text-[#c4a882]" : "text-[#8a8577]"}`} />
                        </div>
                        {getLabel(link)}
                      </span>
                      {link.hasDropdown && <ChevronDown className="w-4 h-4 text-[#1a1a1a]/40" />}
                    </Link>
                    {link.hasDropdown && (
                      <div className="px-6 pb-2">
                        {applianceCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`${basePath}/products?category=${cat.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 text-[#1a1a1a]/70 text-[13px] hover:text-[#c4a882] transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882]/40" />
                            {locale === "fa" && cat.nameFa ? cat.nameFa : cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile User Menu */}
              <div className="border-t border-[#1a1a1a]/8 mt-3 pt-3 mx-2">
                <div className="px-3 pt-1 pb-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8577]">
                    {locale === "fa" ? "حساب کاربری" : "Account"}
                  </p>
                </div>
                {userMenuItems.map((item) => (
                  <Link key={item.labelFa} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-[#1a1a1a] text-[14px] hover:bg-[#1a1a1a]/[0.03] rounded-xl transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#c4a882]/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-[#c4a882]" />
                    </div>
                    <div>
                      <p className="font-medium">{getLabel(item)}</p>
                      <p className="text-[11px] text-[#8a8577] mt-0.5">{locale === "fa" ? item.descFa : item.descEn}</p>
                    </div>
                  </Link>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-3 mt-1 text-[14px] text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                  <LogOut className="w-4 h-4" />
                  {locale === "fa" ? "خروج از حساب" : "Sign Out"}
                </button>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-4 sm:p-5 border-t border-[#1a1a1a]/8 space-y-4 shrink-0 bg-[#faf8f5]">
              <div className="flex items-center justify-between">
                <span className="text-[#1a1a1a]/60 text-[13px] font-medium">{locale === "fa" ? "زبان" : "Language"}</span>
                <div className="flex gap-2">
                  {(["fa", "en"] as Locale[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { switchLocale(l); setIsMobileMenuOpen(false); }}
                      className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all ${
                        locale === l
                          ? "bg-[#1a1a1a] text-white"
                          : "bg-[#1a1a1a]/5 text-[#1a1a1a] hover:bg-[#1a1a1a]/10"
                      }`}
                    >
                      {localeLabels[l]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-[11px] text-[#8a8577]">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  ۰۲۱-۸۸۷۷۶۶۵۵
                </span>
                <span className="w-px h-3 bg-[#1a1a1a]/10" />
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {locale === "fa" ? "تهران، سعادت‌آباد" : "Tehran, Saadat Abad"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 