"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import PageHero from "@/app/components/PageHero";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
}

export default function BlogPage() {
  const { t, dictionary } = useI18n();
  const posts = dictionary.blog.posts as unknown as BlogPost[];
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

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
    <main className="min-h-screen bg-weave-cream">
      <PageHero
        eyebrow={t("blog.eyebrow") as string}
        title={t("blog.title") as string}
        subtitle={t("blog.subtitle") as string}
        crumbLabel={t("nav.blog") as string}
      />

      <section className="section-padding py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-weave-dark text-white"
                  : "bg-white text-weave-dark border border-weave-border/60 hover:bg-weave-light"
              }`}
            >
              {t("blog.allCategory")}
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === c
                    ? "bg-weave-dark text-white"
                    : "bg-white text-weave-dark border border-weave-border/60 hover:bg-weave-light"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-weave-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("blog.searchPlaceholder") as string}
              className="w-full ps-10 pe-4 py-2.5 bg-white border border-weave-border/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-weave-accent/20"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-weave-muted py-20">{t("blog.emptyState")}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl border border-weave-border/60 overflow-hidden card-hover cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-weave-light overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 start-3 px-3 py-1 bg-weave-dark text-white text-[10px] font-semibold tracking-wide rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-weave-muted text-xs mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} {t("blog.minRead")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-weave-dark mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-weave-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-weave-accent text-sm font-medium">
                    {t("common.readMore")}
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
