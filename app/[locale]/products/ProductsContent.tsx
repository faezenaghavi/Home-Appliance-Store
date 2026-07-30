"use client";

import { useSearchParams } from "next/navigation";
import { useI18n } from "@/app/i18n/Provider";
import { applianceCategories } from "@/app/data/appliances";
import { searchCatalogProducts, getAllCatalogProducts } from "@/app/data/catalog";
import ProductCard from "@/app/components/ProductCard";
import { useMemo } from "react";
import { X, ChevronRight, ChevronLeft, Home } from "lucide-react";
import Link from "next/link";

export default function ProductsContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const isOffers = searchParams.get("offers") === "true";
  const isFeatured = searchParams.get("featured") === "true";
  const searchQuery = searchParams.get("search");

  const filteredProducts = useMemo(() => {
    let products = searchQuery ? searchCatalogProducts(searchQuery) : getAllCatalogProducts();

    if (category) {
      const catObj = applianceCategories.find((c) => c.id === category);
      if (catObj) {
        products = products.filter(
          (p) => p.category === catObj.name || p.categoryFa === catObj.nameFa
        );
      } else {
        products = [];
      }
    }

    if (brand) {
      products = products.filter(
        (p) =>
          (p.brand && p.brand.toLowerCase() === brand.toLowerCase()) ||
          (p.brandFa && p.brandFa === brand)
      );
    }

    if (isOffers) {
      products = products.filter(
        (p) => p.originalPrice != null && p.originalPrice > p.price
      );
    }

    if (isFeatured) {
      products = products.filter((p) => p.isBestseller || p.isNew || p.badge);
    }

    return products;
  }, [category, brand, isOffers, isFeatured, searchQuery]);

  // استخراج نام فارسی و انگلیسی برای نمایش در هدر و برد کرامب
  const currentBrandFa = isRTL && brand ? getAllCatalogProducts().find(p => p.brand?.toLowerCase() === brand.toLowerCase())?.brandFa || brand : brand;
  const currentCategoryObj = category ? applianceCategories.find(c => c.id === category) : null;
  const currentCategoryName = currentCategoryObj ? (isRTL ? currentCategoryObj.nameFa : currentCategoryObj.name) : "";

  const renderHeader = () => {
    if (searchQuery) {
      return (
        <div className="mb-12 text-center">
          <span style={{ color: "#808080", letterSpacing: "0.2em" }} className="text-xs font-semibold uppercase mb-4 block">
            {isRTL ? "جستجو" : "Search"}
          </span>
          <h1 style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {isRTL ? `نتایج «${searchQuery}»` : `Results for “${searchQuery}”`}
          </h1>
          <p style={{ color: "#8a8577" }} className="text-sm max-w-md mx-auto leading-relaxed mb-8">
            {isRTL
              ? "محصولات مرتبط با عبارت جستجو شده"
              : "Products matching your search term"}
          </p>
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#808080] to-transparent mx-auto rounded-full" />
        </div>
      );
    }
    if (isOffers) {
      return (
        <div className="mb-12 text-center">
          <span style={{ color: "#dc2626", letterSpacing: "0.2em" }} className="text-xs font-semibold uppercase mb-4 block">
            {isRTL ? "تخفیف‌ها" : "Special Offers"}
          </span>
          <h1 style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {isRTL ? "تخفیف‌های ویژه" : "Special Offers"}
          </h1>
          <p style={{ color: "#8a8577" }} className="text-sm max-w-md mx-auto leading-relaxed mb-8">
            {isRTL ? "بهترین فرصت‌ها برای خرید لوازم خانگی با بالاترین تخفیف" : "Best opportunities to buy home appliances with the highest discount"}
          </p>
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full" />
        </div>
      );
    }
    if (isFeatured) {
      return (
        <div className="mb-12 text-center">
          <span style={{ color: "#808080", letterSpacing: "0.2em" }} className="text-xs font-semibold uppercase mb-4 block">
            {isRTL ? "محصولات ویژه" : "Featured"}
          </span>
          <h1 style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {isRTL ? "پرفروش‌ترین‌ها و جدیدترین‌ها" : "Bestsellers & New Arrivals"}
          </h1>
          <p style={{ color: "#8a8577" }} className="text-sm max-w-md mx-auto leading-relaxed mb-8">
            {isRTL ? "محبوب‌ترین محصولات از نگاه مشتریان ما را کشف کنید" : "Discover the most popular products chosen by our customers"}
          </p>
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#808080] to-transparent mx-auto rounded-full" />
        </div>
      );
    }
    if (brand) {
      return (
        <div className="mb-12 text-center">
          <span style={{ color: "#808080", letterSpacing: "0.2em" }} className="text-xs font-semibold uppercase mb-4 block">
            {isRTL ? "برند" : "Brand"}
          </span>
          <h1 style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {currentBrandFa}
          </h1>
          <p style={{ color: "#8a8577" }} className="text-sm max-w-md mx-auto leading-relaxed mb-8">
            {isRTL ? `مشاهده تمام محصولات مربوط به برند ${currentBrandFa}` : `Browse all products from ${currentBrandFa}`}
          </p>
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#808080] to-transparent mx-auto rounded-full" />
        </div>
      );
    }
    if (category) {
      return (
        <div className="mb-12 text-center">
          <span style={{ color: "#808080", letterSpacing: "0.2em" }} className="text-xs font-semibold uppercase mb-4 block">
            {isRTL ? "دسته‌بندی" : "Category"}
          </span>
          <h1 style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {currentCategoryName}
          </h1>
          <p style={{ color: "#8a8577" }} className="text-sm max-w-md mx-auto leading-relaxed mb-8">
            {currentCategoryObj ? (isRTL ? currentCategoryObj.descriptionFa : currentCategoryObj.description) : ""}
          </p>
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#808080] to-transparent mx-auto rounded-full" />
        </div>
      );
    }
    return (
      <div className="mb-12 text-center">
        <span style={{ color: "#808080", letterSpacing: "0.2em" }} className="text-xs font-semibold uppercase mb-4 block">
          {isRTL ? "محصولات" : "Products"}
        </span>
        <h1 style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {isRTL ? "همه لوازم خانگی" : "All Home Appliances"}
        </h1>
        <p style={{ color: "#8a8577" }} className="text-sm max-w-md mx-auto leading-relaxed mb-8">
          {isRTL ? "مجموعه کاملی از لوازم خانگی مدرن و باکیفیت" : "A complete collection of modern and high-quality home appliances"}
        </p>
        <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#808080] to-transparent mx-auto rounded-full" />
      </div>
    );
  };

  return (
    <div 
      dir={direction} 
      className="min-h-screen relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#f5f0eb" }}
    >
      {/* Background Subtle Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#808080]/[0.05] rounded-full blur-[120px]" />

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto relative z-10">
        
        {/* Breadcrumb یکپارچه شده */}
        <div className="mb-12 text-sm text-[#8a8577] flex items-center gap-2 flex-wrap">
          <Link href={`/${locale}`} scroll={true} className="hover:text-[#808080] transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            {isRTL ? "خانه" : "Home"}
          </Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <Link href={`/${locale}/products`} className="hover:text-[#808080] transition-colors">
            {isRTL ? "محصولات" : "Products"}
          </Link>
          
          {searchQuery && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">{searchQuery}</span>
            </>
          )}
          {isOffers && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">{isRTL ? "تخفیف‌های ویژه" : "Special Offers"}</span>
            </>
          )}
          {isFeatured && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">{isRTL ? "محصولات ویژه" : "Featured"}</span>
            </>
          )}
          {brand && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">{currentBrandFa}</span>
            </>
          )}
          {category && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">{currentCategoryName}</span>
            </>
          )}
        </div>

        {/* Header */}
        {renderHeader()}

        {/* Results Count */}
        <p style={{ color: "#8a8577" }} className="text-sm text-center mb-10">
          {filteredProducts.length} {isRTL ? "محصول یافت شد" : "products found"}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <X className="w-16 h-16 text-[#1a1a1a]/10 mb-4" />
            <h3 style={{ color: "#1a1a1a" }} className="text-xl font-semibold">{t("products.noResults")}</h3>
            <p style={{ color: "#8a8577" }} className="mt-2 text-sm">{t("products.noResultsDesc")}</p>
          </div>
        )}
      </div>
    </div>
  );
}