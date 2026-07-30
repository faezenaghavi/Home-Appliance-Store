"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, ArrowUpLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import Breadcrumb from "@/app/components/Breadcrumb";
import { getBlogImage } from "@/app/lib/categoryImages";
import { blogPosts, getBlogPost, type BlogPostData } from "@/app/data/blogPosts";

function localizePost(post: BlogPostData, isRTL: boolean) {
  return {
    title: isRTL ? post.titleFa : post.titleEn,
    excerpt: isRTL ? post.excerptFa : post.excerptEn,
    content: isRTL ? post.contentFa : post.contentEn,
    category: isRTL ? post.categoryFa : post.categoryEn,
    date: isRTL ? post.dateFa : post.dateEn,
    image: getBlogImage(post.imageIndex),
  };
}

export default function BlogPostContent({ id }: { id: string }) {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const post = getBlogPost(id);
  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;
  const BackIcon = isRTL ? ChevronRight : ChevronLeft;

  if (!post) {
    return (
      <main dir={direction} className="min-h-screen pt-28 pb-16 px-4 text-center" style={{ backgroundColor: "#f5f0eb" }}>
        <p className="text-[#8a8577] mb-4">{isRTL ? "مقاله یافت نشد." : "Article not found."}</p>
        <Link href={`/${locale}/blog`} className="text-[#808080] hover:underline">
          {isRTL ? "بازگشت به بلاگ" : "Back to blog"}
        </Link>
      </main>
    );
  }

  const localized = localizePost(post, isRTL);
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main dir={direction} className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20" style={{ backgroundColor: "#f5f0eb" }}>
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: t("nav.blog") as string, href: `/${locale}/blog` },
            { label: localized.title },
          ]}
          className="mb-8 sm:mb-10"
        />

        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-1.5 text-sm text-[#808080] hover:text-[#1a1a1a] transition-colors mb-8"
        >
          <BackIcon className="w-4 h-4" />
          {isRTL ? "بازگشت به بلاگ" : "Back to blog"}
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-[#808080]/15 text-[#808080] text-xs font-semibold rounded-full mb-4">
            {localized.category}
          </span>

          <h1
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-5"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            {localized.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[#8a8577] text-sm mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {localized.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} {isRTL ? "دقیقه مطالعه" : "min read"}
            </span>
          </div>

          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src={localized.image}
              alt={localized.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/30 to-transparent" />
          </div>

          <p className="text-lg sm:text-xl text-[#8a8577] leading-relaxed mb-8 font-medium">
            {localized.excerpt}
          </p>

          <div className="space-y-5 sm:space-y-6">
            {localized.content.map((paragraph, index) => (
              <p key={index} className="text-[#1a1a1a]/85 text-base sm:text-lg leading-[1.9]">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>

        {related.length > 0 && (
          <section className="mt-14 sm:mt-20 pt-10 border-t border-[#1a1a1a]/10">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-6">
              {isRTL ? "مقالات مرتبط" : "Related Articles"}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {related.map((item) => {
                const rel = localizePost(item, isRTL);
                return (
                  <Link
                    key={item.id}
                    href={`/${locale}/blog/${item.id}`}
                    className="group bg-white rounded-2xl border border-[#e5dfd6] p-4 hover:border-[#808080]/40 hover:shadow-md transition-all"
                  >
                    <p className="text-[10px] text-[#808080] font-semibold mb-2">{rel.category}</p>
                    <h3 className="text-sm font-semibold text-[#1a1a1a] line-clamp-2 group-hover:text-[#808080] transition-colors mb-2">
                      {rel.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs text-[#808080] font-semibold">
                      {t("common.more")}
                      <ArrowIcon className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
