"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
}

export default function BlogContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // ایجاد دیتای موقت برای بلاگ (چون در dictionary.ts تعریف نشده بود)
  const posts: BlogPost[] = useMemo(() => {
    if (locale === "fa") {
      return [
        { id: "1", title: "آینده خانه‌های هوشمند", excerpt: "چگونه لوازم نوویرا زندگی روزمره شما را متحول می‌کنند.", category: "تکنولوژی", date: "۱۲ اسفند ۱۴۰۴", readTime: 5, image: "/images/blog-1.jpg" },
        { id: "2", title: "طراحی آرام و بی‌سروصدا", excerpt: "ورود به دنیای مهندسی سکوت برای لوازم خانگی.", category: "طراحی", date: "۵ بهمن ۱۴۰۴", readTime: 3, image: "/images/blog-2.jpg" },
        { id: "3", title: "نگهداری و افزایش عمر دستگاه‌ها", excerpt: "نکات کلیدی برای حفظ کارایی لوازم خانگی لوکس.", category: "نگهداری", date: "۲۰ دی ۱۴۰۴", readTime: 4, image: "/images/blog-3.jpg" },
      ];
    } else {
      return [
        { id: "1", title: "The Future of Smart Homes", excerpt: "How Novira appliances transform your daily living experience.", category: "Technology", date: "Mar 2, 2026", readTime: 5, image: "/images/blog-1.jpg" },
        { id: "2", title: "Quiet Engineering Design", excerpt: "Entering the world of silence engineering for home appliances.", category: "Design", date: "Jan 25, 2026", readTime: 3, image: "/images/blog-2.jpg" },
        { id: "3", title: "Maintenance & Longevity", excerpt: "Key tips for preserving the efficiency of luxury home appliances.", category: "Care", date: "Jan 10, 2026", readTime: 4, image: "/images/blog-3.jpg" },
      ];
    }
  }, [locale]);

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return Array.from(set);
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesQuery =
        !query.trim() ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, activeCategory, query]);

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      
      {/* Custom Novira Header */}
      <div className="text-center py-16 sm:py-24 px-4">
        <span className="inline-block px-4 py-1.5 bg-[#c4a882]/10 text-[#c4a882] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
          {t("nav.blog")}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
          {t("nav.blog")}
        </h1>
        <p className="text-[#8a8577] text-base max-w-xl mx-auto leading-relaxed mb-8">
          {t("brand.slogan")}
        </p>
        <div className="w-24 h-1 bg-[#c4a882] mx-auto rounded-full"></div>
      </div>

      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto pb-16 sm:pb-24">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-[#1a1a1a] border border-[#1a1a1a]/10 hover:bg-[#faf8f5]"
              }`}
            >
              {t("categories.viewAll")}
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === c
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-white text-[#1a1a1a] border border-[#1a1a1a]/10 hover:bg-[#faf8f5]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className={`absolute w-4 h-4 text-[#8a8577] top-1/2 -translate-y-1/2 ${isRTL ? "right-3" : "left-3"}`} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("nav.searchPlaceholder") as string}
              className={`w-full py-2.5 bg-white border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20 text-[#1a1a1a] placeholder:text-[#8a8577]/50 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"}`}
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-[#8a8577] py-20">{t("products.noResults")}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl border border-[#1a1a1a]/5 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-[#faf8f5] overflow-hidden flex items-center justify-center">
                  {/* استفاده از یک جایگزین برای تصویر اگر فایلها موجود نیستند */}
                  <span className="text-[#c4a882] text-4xl font-bold">{post.title.charAt(0)}</span>
                  <span className={`absolute top-3 px-3 py-1 bg-[#1a1a1a] text-white text-[10px] font-semibold tracking-wide rounded-full ${isRTL ? "right-3" : "left-3"}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-[#8a8577] text-xs mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} {isRTL ? "دقیقه" : "min"}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#1a1a1a] mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#8a8577] text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#c4a882] text-sm font-medium hover:text-[#1a1a1a] transition-colors">
                    {t("common.more")}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}