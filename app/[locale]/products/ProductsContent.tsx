"use client";

import { useSearchParams } from "next/navigation";
import { useI18n } from "@/app/i18n/Provider";
import { appliances, applianceCategories } from "@/app/data/appliances";
import ProductCard from "@/app/components/ProductCard";
import { useMemo } from "react";
import { X, ChevronRight, ChevronLeft, Home, Tag, Sparkles, Award } from "lucide-react";
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
    let products = appliances;
    
    // فیلتر بر اساس دسته‌بندی
    if (category) {
      const catObj = applianceCategories.find((c) => c.id === category);
      if (catObj) products = products.filter((p) => p.category === catObj.name || p.categoryFa === catObj.nameFa);
      else products = [];
    }
    
    // فیلتر بر اساس برند (بدون حساسیت به حروف بزرگ و کوچک)
    if (brand) {
      products = products.filter((p) => 
        (p.brand && p.brand.toLowerCase() === brand.toLowerCase()) || 
        (p.brandFa && p.brandFa === brand)
      );
    }
    
    // فیلتر تخفیف‌دارها
    if (isOffers) products = products.filter((p) => p.originalPrice != null && p.originalPrice > p.price);
    
    // فیلتر محصولات ویژه
    if (isFeatured) products = products.filter((p) => p.isBestseller || p.isNew || p.badge);
    
    // فیلتر جستجو
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      products = products.filter((p) => 
        p.name.toLowerCase().includes(lowerQuery) || 
        (p.nameFa && p.nameFa.includes(searchQuery))
      );
    }
    
    return products;
  }, [category, brand, isOffers, isFeatured, searchQuery]);

  // تابع رندر هدر صفحه
  const renderHeader = () => {
    if (isOffers) {
      return (
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest rounded-full mb-5 mx-auto">
            <Tag className="w-3.5 h-3.5" />
            {t("products.specialOffers")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">{t("products.specialOffers")}</h1>
          <p className="text-[#8a8577] text-base max-w-xl mx-auto leading-relaxed mb-8">{t("products.specialOffersSubtitle")}</p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      );
    }
    if (isFeatured) {
      return (
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#c4a882]/10 text-[#c4a882] text-xs font-bold uppercase tracking-widest rounded-full mb-5 mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            {t("products.featured")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">{t("products.bestsellers")}</h1>
          <p className="text-[#8a8577] text-base max-w-xl mx-auto leading-relaxed mb-8">{t("products.bestsellersSubtitle")}</p>
          <div className="w-24 h-1 bg-[#c4a882] mx-auto rounded-full"></div>
        </div>
      );
    }
    if (brand) {
      return (
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#c4a882]/10 text-[#c4a882] text-xs font-bold uppercase tracking-widest rounded-full mb-5 mx-auto">
            <Award className="w-3.5 h-3.5" />
            {isRTL ? "برند" : "Brand"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">{brand}</h1>
          <p className="text-[#8a8577] text-base max-w-xl mx-auto leading-relaxed mb-8">
            {isRTL ? `مشاهده تمام محصولات مربوط به برند ${brand}` : `Browse all products from ${brand}`}
          </p>
          <div className="w-24 h-1 bg-[#c4a882] mx-auto rounded-full"></div>
        </div>
      );
    }
    return (
      <div className="mb-10 text-center">
        <span className="inline-block px-4 py-1.5 bg-[#c4a882]/10 text-[#c4a882] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
          {t("categories.title")}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">{t("products.title")}</h1>
        <p className="text-[#8a8577] text-base max-w-xl mx-auto leading-relaxed mb-8">{t("products.subtitle")}</p>
        <div className="w-24 h-1 bg-[#c4a882] mx-auto rounded-full"></div>
      </div>
    );
  };

  return (
    <div dir={direction} className="min-h-screen bg-[#faf8f5] py-12">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        
        {/* Breadcrumb یکپارچه شده */}
        <div className="mb-8 text-sm text-[#8a8577] flex items-center gap-2 flex-wrap">
          <Link href={`/${locale}`} scroll={true} className="hover:text-[#c4a882] transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            {isRTL ? "خانه" : "Home"}
          </Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <Link href={`/${locale}/products`} className="hover:text-[#c4a882] transition-colors">
            {t("products.title")}
          </Link>
          
          {isOffers && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">{t("products.specialOffers")}</span>
            </>
          )}
          {isFeatured && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">{t("products.featured")}</span>
            </>
          )}
          {brand && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">{brand}</span>
            </>
          )}
          {category && (
            <>
              {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="text-[#1a1a1a] font-medium">
                {applianceCategories.find(c => c.id === category) ? (isRTL ? applianceCategories.find(c => c.id === category)?.nameFa : applianceCategories.find(c => c.id === category)?.name) : ""}
              </span>
            </>
          )}
        </div>

        {/* Header */}
        {renderHeader()}

        {/* Results Count */}
        <p className="text-[#8a8577] text-sm text-center mb-10">
          {filteredProducts.length} {t("products.resultsCount")}
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
            <h3 className="text-xl font-semibold text-[#1a1a1a]">{t("products.noResults")}</h3>
            <p className="text-[#8a8577] mt-2 text-sm">{t("products.noResultsDesc")}</p>
          </div>
        )}
      </div>
    </div>
  );
}