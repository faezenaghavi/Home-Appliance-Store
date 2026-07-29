"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu, X, ArrowUpRight, Search, ShoppingBag, Heart, User,
  ChevronDown, Globe, LogOut, Package, Settings, Tag, Sparkles,
  Grid3X3, Info, Newspaper, Home,
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { Locale, localeLabels } from "@/app/i18n/config";
import { applianceCategories } from "@/app/data/appliances";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";

type NavLinkItem = {
  key: string;
  labelFa: string;
  labelEn: string;
  href: string;
  icon: typeof Home;
  hasDropdown?: boolean;
};

const navLinks: NavLinkItem[] = [
  { key: "nav.home", labelFa: "خانه", labelEn: "Home", href: "", icon: Home },
  { key: "nav.offers", labelFa: "تخفیف‌دارها", labelEn: "Special Offers", href: "/products?offers=true", icon: Tag },
  { key: "nav.featured", labelFa: "محصولات ویژه", labelEn: "Featured", href: "/featured", icon: Sparkles },
  { key: "nav.categories", labelFa: "دسته‌بندی", labelEn: "Categories", href: "/products", hasDropdown: true, icon: Grid3X3 },
  { key: "nav.about", labelFa: "درباره ما", labelEn: "About Us", href: "/about", icon: Info },
  { key: "nav.blog", labelFa: "بلاگ", labelEn: "Blog", href: "/blog", icon: Newspaper },
];

const userMenuItems = [
  { icon: User, labelFa: "حساب کاربری", labelEn: "My Account", href: "/account", descFa: "مشاهده و ویرایش پروفایل", descEn: "View & edit profile" },
  { icon: Package, labelFa: "سفارشات من", labelEn: "My Orders", href: "/account?tab=orders", descFa: "پیگیری خریدهای شما", descEn: "Track your purchases" },
  { icon: Heart, labelFa: "علاقه‌مندی‌ها", labelEn: "Wishlist", href: "/wishlist", descFa: "محصولات ذخیره‌شده", descEn: "Saved items" },
  { icon: Settings, labelFa: "تنظیمات", labelEn: "Settings", href: "/account?tab=settings", descFa: "تنظیمات حساب", descEn: "Account settings" },
] as const;

const CategoryItem = memo(({ cat, locale, basePath, onClose }: {
  cat: (typeof applianceCategories)[0];
  locale: string;
  basePath: string;
  onClose: () => void;
}) => (
  <Link
    href={`${basePath}/products?category=${cat.id}`}
    prefetch
    onClick={onClose}
    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
  >
    <div className="w-9 h-9 rounded-lg bg-[#808080]/10 flex items-center justify-center shrink-0 group-hover:bg-[#808080]/20 transition-colors">
      <span className="text-[#808080] text-xs font-bold">{cat.name.charAt(0)}</span>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-white text-[13px] font-medium truncate">
        {locale === "fa" && cat.nameFa ? cat.nameFa : cat.name}
      </p>
      <p className="text-white/40 text-[11px] mt-0.5">
        {cat.productCount} {locale === "fa" ? "محصول" : "products"}
      </p>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#808080] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
  </Link>
));
CategoryItem.displayName = "CategoryItem";

export default function Navbar() {
  const { locale, direction } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const isRTL = direction === "rtl";

  const { itemCount: cartCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");

  const categoryRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const basePath = `/${locale}`;

  const formatBadgeCount = (count: number) =>
    count.toLocaleString(isRTL ? "fa-IR" : "en-US");

  const getLabel = useCallback(
    (item: { labelFa: string; labelEn: string }) =>
      locale === "fa" ? item.labelFa : item.labelEn,
    [locale]
  );

  useEffect(() => {
    setCurrentSearch(typeof window !== "undefined" ? window.location.search : "");
  }, [pathname]);

  useEffect(() => {
    const routes = [
      basePath,
      ...navLinks.map((link) => (link.href ? `${basePath}${link.href}` : basePath)),
      ...userMenuItems.map((item) => `${basePath}${item.href}`),
      `${basePath}/cart`,
      `${basePath}/wishlist`,
    ];
    routes.forEach((route) => router.prefetch(route));
  }, [basePath, router]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);
        ticking = false;
      });
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (categoryRef.current && !categoryRef.current.contains(target)) setIsCategoryOpen(false);
      if (langRef.current && !langRef.current.contains(target)) setIsLangOpen(false);
      if (userRef.current && !userRef.current.contains(target)) setIsUserOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsCategoryOpen(false);
        setIsLangOpen(false);
        setIsUserOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = useCallback(
    (href: string) => {
      const fullHref = href ? `${basePath}${href}` : basePath;
      const [path, query] = fullHref.split("?");
      const currentPath = pathname.replace(/\/$/, "") || basePath;
      const normalizedPath = path.replace(/\/$/, "") || basePath;

      if (normalizedPath !== currentPath) return false;
      if (!query) {
        if (normalizedPath === `${basePath}/products`) {
          return currentSearch === "";
        }
        return true;
      }
      const params = new URLSearchParams(query);
      const current = new URLSearchParams(currentSearch.replace(/^\?/, ""));
      for (const [key, value] of params.entries()) {
        if (current.get(key) !== value) return false;
      }
      return true;
    },
    [pathname, currentSearch, basePath]
  );

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const q = searchQuery.trim();
      if (!q) return;
      router.push(`${basePath}/products?search=${encodeURIComponent(q)}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    },
    [searchQuery, router, basePath]
  );

  const switchLocale = useCallback(
    (newLocale: Locale) => {
      setIsLangOpen(false);
      setIsMobileMenuOpen(false);
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    },
    [pathname, locale, router]
  );

  const handleNavClick = useCallback(
    (e: React.MouseEvent, link: NavLinkItem) => {
      if (link.hasDropdown && window.innerWidth >= 1024) {
        e.preventDefault();
        setIsCategoryOpen((prev) => !prev);
        return;
      }

      setIsMobileMenuOpen(false);
      setIsCategoryOpen(false);

      const fullHref = link.href ? `${basePath}${link.href}` : basePath;
      if (!link.href && (pathname === basePath || pathname === `${basePath}/`)) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (fullHref === pathname) {
        e.preventDefault();
      }
    },
    [pathname, basePath]
  );

  const iconBtn =
    "relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border bg-white/5 border-white/10 hover:border-[#808080]/40 hover:bg-[#808080]/10 active:scale-95 transition-[transform,background-color,border-color] duration-150";

  return (
    <>
      <nav
        dir={direction}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow,backdrop-filter] duration-200 ${
          isScrolled
            ? "bg-[#1a1a1a]/75 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_4px_24px_rgba(0,0,0,0.25)] py-2 sm:py-3"
            : "bg-[#1a1a1a]/92 py-3 sm:py-4"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Link href={basePath} prefetch className="flex items-center gap-2 sm:gap-3 shrink-0 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border bg-white/5 border-white/10 group-hover:border-[#808080]/50 group-hover:bg-[#808080]/10 transition-colors duration-150">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#808080]">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#808080] transition-colors duration-150 leading-none">
                  NOVIRA
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-white/50 mt-0.5">
                  {locale === "fa" ? "لوازم خانگی لوکس" : "Luxury Appliances"}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/[0.04] border border-white/10">
              {navLinks.map((link) => {
                const href = link.href ? `${basePath}${link.href}` : basePath;
                const active = isActive(link.href);

                return (
                  <div key={link.key} ref={link.hasDropdown ? categoryRef : undefined} className="relative">
                    <Link
                      href={href}
                      prefetch
                      scroll
                      onClick={(e) => handleNavClick(e, link)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] font-medium transition-colors duration-100 active:scale-[0.98] ${
                        active
                          ? "text-[#1a1a1a] bg-[#808080]"
                          : "text-white/75 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {getLabel(link)}
                      {link.hasDropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isCategoryOpen ? "rotate-180" : ""}`} />
                      )}
                    </Link>

                    {link.hasDropdown && isCategoryOpen && (
                      <div className={`absolute top-full mt-2 w-[400px] bg-[#1c1c1c] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.5)] border border-white/[0.08] overflow-hidden ${isRTL ? "right-0" : "left-0"}`}>
                        <div className="px-4 pt-3 pb-2 border-b border-white/[0.06]">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#808080]">
                            {locale === "fa" ? "دسته‌بندی محصولات" : "Product Categories"}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-0.5 p-1.5 pb-2">
                          {applianceCategories.map((cat) => (
                            <CategoryItem
                              key={cat.id}
                              cat={cat}
                              locale={locale}
                              basePath={basePath}
                              onClose={() => setIsCategoryOpen(false)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <form
                onSubmit={handleSearch}
                className="hidden md:flex items-center h-9 rounded-full px-3.5 border bg-white/5 border-white/10 focus-within:border-[#808080]/40 w-[140px] xl:w-[180px] focus-within:w-[200px] xl:focus-within:w-[240px] transition-[width,border-color] duration-200"
              >
                <Search className="w-3.5 h-3.5 shrink-0 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={locale === "fa" ? "جستجو..." : "Search..."}
                  className={`bg-transparent border-none outline-none text-[12px] w-full text-white placeholder:text-white/40 ${isRTL ? "pr-2" : "pl-2"}`}
                />
              </form>

              <span className="hidden md:inline w-px h-5 bg-white/10" />

              <Link href={`${basePath}/wishlist`} prefetch className={`${iconBtn} group`}>
                <Heart className="w-[17px] h-[17px] text-white/70 group-hover:text-[#808080] transition-colors duration-150" />
                {wishlistCount > 0 && (
                  <span className={`absolute -top-1.5 min-w-[18px] h-[18px] px-0.5 bg-[#808080] text-[#1a1a1a] text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#1a1a1a] ${isRTL ? "-left-1.5" : "-right-1.5"}`}>
                    {formatBadgeCount(wishlistCount)}
                  </span>
                )}
              </Link>

              <Link href={`${basePath}/cart`} prefetch className={`${iconBtn} group`}>
                <ShoppingBag className="w-[17px] h-[17px] text-white/70 group-hover:text-[#808080] transition-colors duration-150" />
                {cartCount > 0 && (
                  <span className={`absolute -top-1.5 min-w-[18px] h-[18px] px-0.5 bg-[#808080] text-[#1a1a1a] text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#1a1a1a] ${isRTL ? "-left-1.5" : "-right-1.5"}`}>
                    {formatBadgeCount(cartCount)}
                  </span>
                )}
              </Link>

              <div ref={langRef} className="relative hidden lg:block">
                <button
                  type="button"
                  onClick={() => setIsLangOpen((v) => !v)}
                  className={`${iconBtn} ${isLangOpen ? "bg-[#808080]/10 border-[#808080]/40" : ""}`}
                >
                  <Globe className="w-[17px] h-[17px] text-white/70" />
                </button>
                {isLangOpen && (
                  <div className={`absolute top-full mt-1.5 w-36 bg-[#1c1c1c] rounded-xl shadow-xl border border-white/[0.08] overflow-hidden ${isRTL ? "left-0" : "right-0"}`}>
                    {(["fa", "en"] as Locale[]).map((l) => (
                      <button
                        key={l}
                        type="button"
                        onClick={() => switchLocale(l)}
                        className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] transition-colors duration-150 active:scale-[0.98] ${
                          locale === l ? "bg-[#808080]/10 text-[#808080] font-semibold" : "text-white hover:bg-white/5"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${locale === l ? "bg-[#808080]" : "bg-white/25"}`} />
                        {localeLabels[l]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div ref={userRef} className="relative hidden lg:block">
                <button
                  type="button"
                  onClick={() => setIsUserOpen((v) => !v)}
                  className={`${iconBtn} ${isUserOpen ? "bg-[#808080]/10 border-[#808080]/40" : ""}`}
                >
                  <User className="w-[17px] h-[17px] text-white/70" />
                </button>
                {isUserOpen && (
                  <div className={`absolute top-full mt-1.5 w-60 bg-[#1c1c1c] rounded-xl shadow-xl border border-white/[0.08] overflow-hidden ${isRTL ? "left-0" : "right-0"}`}>
                    <div className="p-1.5">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.labelFa}
                          href={`${basePath}${item.href}`}
                          prefetch
                          onClick={() => setIsUserOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] text-white hover:bg-white/5 transition-colors duration-150"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#808080]/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-3.5 h-3.5 text-[#808080]" />
                          </div>
                          <div>
                            <p className="font-medium">{getLabel(item)}</p>
                            <p className="text-[11px] text-white/40">{locale === "fa" ? item.descFa : item.descEn}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className={`lg:hidden ${iconBtn}`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        dir={direction}
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-150 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 h-full w-[88vw] max-w-[360px] bg-[#1a1a1a] shadow-2xl transition-transform duration-150 ease-out ${
            isMobileMenuOpen
              ? "translate-x-0"
              : isRTL
                ? "translate-x-full"
                : "-translate-x-full"
          } ${isRTL ? "right-0" : "left-0"}`}
        >
          <div className="flex flex-col h-full text-white">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="font-display text-lg font-bold">NOVIRA</span>
              <button type="button" onClick={() => setIsMobileMenuOpen(false)} className={iconBtn}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSearch} className="p-4 border-b border-white/10">
              <div className="flex items-center h-11 bg-white/5 rounded-xl px-4 border border-white/10">
                <Search className="w-4 h-4 text-white/40 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={locale === "fa" ? "جستجو..." : "Search..."}
                  className={`bg-transparent w-full text-sm text-white placeholder:text-white/40 outline-none ${isRTL ? "pr-3" : "pl-3"}`}
                />
              </div>
            </form>

            <div className="flex-1 overflow-y-auto py-2">
              {navLinks.map((link) => {
                const href = link.href ? `${basePath}${link.href}` : basePath;
                const active = isActive(link.href);

                return (
                  <div key={link.key}>
                    <Link
                      href={href}
                      prefetch
                      onClick={(e) => handleNavClick(e, link)}
                      className={`flex items-center gap-3 mx-2 px-4 py-3 rounded-xl text-[14px] font-medium transition-colors duration-150 active:bg-white/10 ${
                        active ? "bg-[#808080]/10 text-[#808080]" : "text-white hover:bg-white/5"
                      }`}
                    >
                      <link.icon className="w-4 h-4 shrink-0" />
                      {getLabel(link)}
                    </Link>
                    {link.hasDropdown && (
                      <div className="px-4 pb-2">
                        {applianceCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`${basePath}/products?category=${cat.id}`}
                            prefetch
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 ps-8 text-white/60 text-[13px] hover:text-[#808080] transition-colors duration-150"
                          >
                            {locale === "fa" && cat.nameFa ? cat.nameFa : cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="border-t border-white/10 mt-2 pt-2 mx-2">
                {userMenuItems.map((item) => (
                  <Link
                    key={item.labelFa}
                    href={`${basePath}${item.href}`}
                    prefetch
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-[14px] hover:bg-white/5 rounded-xl transition-colors duration-150"
                  >
                    <item.icon className="w-4 h-4 text-[#808080]" />
                    {getLabel(item)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-white/60 text-[13px]">{locale === "fa" ? "زبان" : "Language"}</span>
              <div className="flex gap-2">
                {(["fa", "en"] as Locale[]).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => switchLocale(l)}
                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-colors duration-150 active:scale-95 ${
                      locale === l ? "bg-[#808080] text-[#1a1a1a]" : "bg-white/5 text-white"
                    }`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
