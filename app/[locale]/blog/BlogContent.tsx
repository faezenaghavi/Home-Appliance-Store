"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowUpLeft,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import Breadcrumb from "@/app/components/Breadcrumb";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

export default function BlogContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const posts: BlogPost[] = useMemo(() => {
    if (locale === "fa") {
      return [
        {
          id: "1",
          title: "آینده خانه‌های هوشمند در سال ۱۴۰۵",
          excerpt:
            "چگونه لوازم نوویرا با هوش مصنوعی و اتوماسیون، زندگی روزمره شما را متحول می‌کنند و آینده زندگی لوکس را شکل می‌دهند.",
          category: "تکنولوژی",
          date: "۱۲ اسفند ۱۴۰۴",
          readTime: 5,
          image: "/images/blog-1.jpg",
          featured: true,
        },
        {
          id: "2",
          title: "طراحی آرام و بی‌سروصدا",
          excerpt: "ورود به دنیای مهندسی سکوت برای لوازم خانگی — چرا آرامش صوتی در خانه‌های مدرن اهمیت دارد.",
          category: "طراحی",
          date: "۵ بهمن ۱۴۰۴",
          readTime: 3,
          image: "/images/blog-2.jpg",
        },
        {
          id: "3",
          title: "نگهداری و افزایش عمر دستگاه‌ها",
          excerpt: "نکات کلیدی برای حفظ کارایی و زیبایی لوازم خانگی لوکس در طولانی‌مدت.",
          category: "نگهداری",
          date: "۲۰ دی ۱۴۰۴",
          readTime: 4,
          image: "/images/blog-3.jpg",
        },
        {
          id: "4",
          title: "راهنمای انتخاب یخچال ساید بای ساید",
          excerpt: "معیارهای مهم خرید یخچال حرفه‌ای برای آشپزخانه‌های مدرن و خانواده‌های پرجمعیت.",
          category: "راهنمای خرید",
          date: "۸ دی ۱۴۰۴",
          readTime: 6,
          image: "/images/blog-4.jpg",
        },
        {
          id: "5",
          title: "صرفه‌جویی انرژی با لوازم A+++",
          excerpt: "چگونه با انتخاب لوازم کم‌مصرف، هم به محیط زیست کمک کنید و هم هزینه برق را کاهش دهید.",
          category: "تکنولوژی",
          date: "۱ دی ۱۴۰۴",
          readTime: 4,
          image: "/images/blog-5.jpg",
        },
        {
          id: "6",
          title: "دکوراسیون آشپزخانه مینیمال",
          excerpt: "ترکیب لوازم استیل و مشکی مات برای فضایی لوکس، تمیز و کاربردی.",
          category: "طراحی",
          date: "۲۵ آذر ۱۴۰۴",
          readTime: 3,
          image: "/images/blog-6.jpg",
        },
      ];
    }

    return [
      {
        id: "1",
        title: "The Future of Smart Homes in 2026",
        excerpt:
          "How Novira appliances with AI and automation transform daily living and shape the future of luxury homes.",
        category: "Technology",
        date: "Mar 2, 2026",
        readTime: 5,
        image: "/images/blog-1.jpg",
        featured: true,
      },
      {
        id: "2",
        title: "Quiet Engineering Design",
        excerpt: "Entering the world of silence engineering — why acoustic comfort matters in modern homes.",
        category: "Design",
        date: "Jan 25, 2026",
        readTime: 3,
        image: "/images/blog-2.jpg",
      },
      {
        id: "3",
        title: "Maintenance & Longevity",
        excerpt: "Key tips for preserving the performance and beauty of luxury home appliances.",
        category: "Care",
        date: "Jan 10, 2026",
        readTime: 4,
        image: "/images/blog-3.jpg",
      },
      {
        id: "4",
        title: "Side-by-Side Refrigerator Buying Guide",
        excerpt: "Essential criteria for choosing a professional fridge for modern kitchens.",
        category: "Buying Guide",
        date: "Jan 3, 2026",
        readTime: 6,
        image: "/images/blog-4.jpg",
      },
      {
        id: "5",
        title: "Energy Savings with A+++ Appliances",
        excerpt: "How efficient appliances help the environment and reduce electricity bills.",
        category: "Technology",
        date: "Jan 1, 2026",
        readTime: 4,
        image: "/images/blog-5.jpg",
      },
      {
        id: "6",
        title: "Minimalist Kitchen Styling",
        excerpt: "Combining stainless steel and matte black for a clean, luxurious kitchen.",
        category: "Design",
        date: "Dec 15, 2025",
        readTime: 3,
        image: "/images/blog-6.jpg",
      },
    ];
  }, [locale]);

  const categories = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), [posts]);

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

  const featuredPost = filtered.find((p) => p.featured) ?? filtered[0];
  const gridPosts = filtered.filter((p) => p.id !== featuredPost?.id);
  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <main
      dir={direction}
      className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 relative overflow-hidden"
      style={{ backgroundColor: "#f5f0eb" }}
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#808080]/[0.05] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#808080]/[0.03] rounded-full blur-[100px]" />

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumb items={[{ label: t("nav.blog") as string }]} className="mb-8 sm:mb-10" />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <span
            style={{ color: "#808080", letterSpacing: "0.2em" }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase mb-5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            {isRTL ? "مجله نوویرا" : "Novira Journal"}
          </span>
          <h1
            style={{ color: "#1a1a1a", fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5"
          >
            {isRTL ? "دانش، الهام و راهنمای خرید" : "Insights, Inspiration & Guides"}
          </h1>
          <p style={{ color: "#8a8577" }} className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? "آخرین مقالات درباره تکنولوژی لوازم خانگی، طراحی داخلی و نکات نگهداری از تیم متخصص نوویرا."
              : "Latest articles on appliance technology, interior design, and care tips from the Novira team."}
          </p>
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#808080] to-transparent mx-auto rounded-full mt-6 sm:mt-8" />
        </motion.div>

        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-10 sm:mb-12">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#1a1a1a] text-white shadow-md"
                  : "bg-white text-[#1a1a1a] border border-[#1a1a1a]/10 hover:border-[#808080]/40"
              }`}
            >
              {t("categories.viewAll")}
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === c
                    ? "bg-[#808080] text-white shadow-md"
                    : "bg-white text-[#1a1a1a] border border-[#1a1a1a]/10 hover:border-[#808080]/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search
              className={`absolute w-4 h-4 text-[#8a8577] top-1/2 -translate-y-1/2 ${isRTL ? "right-4" : "left-4"}`}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("nav.searchPlaceholder") as string}
              className={`w-full py-3 bg-white border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#808080]/20 text-[#1a1a1a] placeholder:text-[#8a8577]/50 shadow-sm ${isRTL ? "pr-11 pl-4" : "pl-11 pr-4"}`}
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-[#1a1a1a]/5">
            <BookOpen className="w-12 h-12 text-[#808080]/30 mx-auto mb-4" />
            <p className="text-[#8a8577]">{t("products.noResults")}</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative mb-8 sm:mb-10 rounded-3xl overflow-hidden bg-[#1a1a1a] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#808080]/20 via-transparent to-[#1a1a1a] opacity-60" />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23808080' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[320px] sm:min-h-[380px]">
                  <div className="flex items-center justify-center p-8 sm:p-12 bg-[#141210]/50">
                    <span className="font-display text-7xl sm:text-8xl font-bold text-[#808080]/20 select-none">
                      {featuredPost.title.charAt(0)}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 bg-[#808080]/20 border border-[#808080]/30 text-[#a8a8a8] text-[10px] font-bold uppercase tracking-widest rounded-full mb-5">
                      <Sparkles className="w-3 h-3" />
                      {isRTL ? "مقاله ویژه" : "Featured"}
                    </span>
                    <span className="inline-block w-fit px-3 py-1 bg-white/10 text-white/80 text-[10px] font-semibold rounded-full mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug group-hover:text-[#a8a8a8] transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-5 text-white/50 text-xs mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime} {isRTL ? "دقیقه" : "min"}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#a8a8a8] text-sm font-semibold group-hover:text-white transition-colors">
                      {t("common.more")}
                      <ArrowIcon className="w-4 h-4 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {gridPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="group bg-white rounded-2xl sm:rounded-3xl border border-[#e5dfd6] overflow-hidden hover:border-[#808080]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[#faf8f5] to-[#f0ebe4] overflow-hidden flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-[#808080]/15 group-hover:scale-110 transition-transform duration-500">
                      {post.title.charAt(0)}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span
                      className={`absolute top-3 px-3 py-1 bg-[#1a1a1a] text-white text-[10px] font-semibold tracking-wide rounded-full ${isRTL ? "right-3" : "left-3"}`}
                    >
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
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
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1a1a1a] mb-2 leading-snug group-hover:text-[#808080] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-[#8a8577] text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#808080] text-sm font-semibold group-hover:text-[#1a1a1a] transition-colors">
                      {t("common.more")}
                      <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-20 rounded-3xl bg-[#1a1a1a] p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#808080]/10 via-transparent to-[#808080]/10" />
          <div className="relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {isRTL ? "عضویت در خبرنامه نوویرا" : "Subscribe to Novira Newsletter"}
            </h3>
            <p className="text-white/60 text-sm max-w-md mx-auto mb-6">
              {isRTL
                ? "جدیدترین مقالات، تخفیف‌ها و راهنمای خرید را مستقیم در ایمیل خود دریافت کنید."
                : "Get the latest articles, deals, and buying guides delivered to your inbox."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={isRTL ? "ایمیل شما" : "Your email"}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#808080]/40"
              />
              <button
                type="button"
                className="px-6 py-3 bg-[#808080] text-white rounded-xl text-sm font-semibold hover:bg-[#959595] transition-colors shrink-0"
              >
                {isRTL ? "عضویت" : "Subscribe"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
