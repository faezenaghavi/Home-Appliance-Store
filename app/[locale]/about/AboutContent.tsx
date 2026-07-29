"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Clock,
  Check,
  Sparkles,
  Target,
  Eye,
  Users,
  ArrowUpRight,
  ArrowUpLeft,
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function AboutContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const stats = [
    { value: "+15", label: isRTL ? "سال تجربه" : "Years Experience" },
    { value: "+50K", label: isRTL ? "مشتری راضی" : "Happy Customers" },
    { value: "+120", label: isRTL ? "محصول نوین" : "Unique Products" },
    { value: "98%", label: isRTL ? "رضایت مشتری" : "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: Target,
      title: isRTL ? "ماموریت ما" : "Our Mission",
      desc: isRTL
        ? "ارائه لوازم خانگی باکیفیت با تجربه خرید لوکس، ساده و مطمئن برای هر خانه ایرانی."
        : "Deliver premium home appliances with a luxurious, simple, and trustworthy shopping experience.",
    },
    {
      icon: Eye,
      title: isRTL ? "چشم‌انداز ما" : "Our Vision",
      desc: isRTL
        ? "تبدیل شدن به مرجع اول انتخاب خانواده‌هایی که کیفیت، زیبایی و تکنولوژی را کنار هم می‌خواهند."
        : "Become the first choice for families who value quality, design, and technology together.",
    },
    {
      icon: Users,
      title: isRTL ? "ارزش‌های ما" : "Our Values",
      desc: isRTL
        ? "صداقت در فروش، پشتیبانی واقعی، قیمت‌گذاری شفاف و احترام به زمان و اعتماد مشتری."
        : "Honest sales, real support, transparent pricing, and respect for customer trust.",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: t("hero.warranty"),
      desc: isRTL
        ? "تضمین کیفیت و خدمات پس از فروش برای تمام محصولات."
        : "Quality assurance and after-sales service on every product.",
    },
    {
      icon: Award,
      title: isRTL ? "طراحی برتر" : "Award Winning",
      desc: isRTL
        ? "همکاری با برندهای معتبر جهانی با طراحی مدرن."
        : "Partnerships with globally trusted brands and modern design.",
    },
    {
      icon: HeartHandshake,
      title: t("footer.support"),
      desc: isRTL
        ? "پشتیبانی اختصاصی قبل و بعد از خرید."
        : "Dedicated support before and after your purchase.",
    },
    {
      icon: Clock,
      title: t("hero.returns"),
      desc: isRTL
        ? "مرجوعی آسان تا ۷ روز پس از تحویل."
        : "Easy returns within 7 days of delivery.",
    },
  ];

  const milestones = isRTL
    ? [
        { year: "۱۳۸۹", text: "شروع فعالیت نوویرا با تمرکز بر لوازم خانگی باکیفیت" },
        { year: "۱۳۹۵", text: "گسترش فروش آنلاین و همکاری با برندهای بین‌المللی" },
        { year: "۱۴۰۰", text: "راه‌اندازی سیستم پشتیبانی ۲۴ ساعته و ارسال سراسری" },
        { year: "۱۴۰۴", text: "تبدیل به یکی از مراجع خرید لوازم خانگی لوکس در ایران" },
      ]
    : [
        { year: "2010", text: "Novira founded with a focus on premium home appliances" },
        { year: "2016", text: "Expanded online sales and global brand partnerships" },
        { year: "2021", text: "Launched 24/7 support and nationwide delivery" },
        { year: "2025", text: "Recognized as a leading luxury appliance retailer" },
      ];

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-[#1a1a1a]/5">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: t("nav.about") as string }]} className="mb-10" />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#808080]/10 text-[#808080] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                {t("nav.about")}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-5">
                {isRTL ? "خانه‌ای لوکس‌تر با نوویرا" : "A More Luxurious Home with Novira"}
              </h1>
              <p className="text-[#8a8577] text-lg leading-relaxed mb-8">
                {t("brand.description")}
              </p>
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a1a1a] text-white font-semibold rounded-full hover:bg-[#808080] transition-colors duration-200"
              >
                {isRTL ? "مشاهده محصولات" : "Explore Products"}
                <Arrow className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
                alt={isRTL ? "آشپزخانه مدرن" : "Modern kitchen"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-14 bg-[#1a1a1a]">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#808080] mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 sm:py-24">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
              {isRTL ? "آنچه نوویرا را متفاوت می‌کند" : "What Sets Novira Apart"}
            </h2>
            <p className="text-[#8a8577]">
              {isRTL
                ? "ما فقط محصول نمی‌فروشیم؛ تجربه‌ای کامل از انتخاب تا پشتیبانی ارائه می‌دهیم."
                : "We don't just sell products — we deliver a complete experience from selection to support."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-7 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#808080]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#808080]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-sm text-[#8a8577] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#1a1a1a]/5">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#808080] mb-4 block">
                {isRTL ? "داستان ما" : "Our Story"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                {isRTL ? "از یک ایده ساده تا برند مورد اعتماد" : "From a Simple Idea to a Trusted Brand"}
              </h2>
              <p className="text-[#8a8577] leading-relaxed mb-6">
                {t("hero.subtitle")}
              </p>
              <ul className="space-y-3">
                {(isRTL
                  ? [
                      "تکنولوژی پیشرفته و صرفه‌جویی در مصرف انرژی",
                      "طراحی مینیمال و هماهنگ با دکوراسیون مدرن",
                      "متریال درجه یک و دوام بالا",
                    ]
                  : [
                      "Advanced technology with energy efficiency",
                      "Minimalist design for modern interiors",
                      "Premium materials built to last",
                    ]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#1a1a1a]">
                    <span className="w-6 h-6 rounded-full bg-[#808080]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#808080]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#808080] shrink-0 mt-1.5" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-[#808080]/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="text-sm font-bold text-[#808080] mb-1">{m.year}</p>
                    <p className="text-[#1a1a1a] text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Novira */}
      <section className="py-16 sm:py-24">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              {isRTL ? "چرا نوویرا؟" : "Why Novira?"}
            </h2>
            <div className="w-14 h-1 bg-[#808080] mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 hover:border-[#808080]/30 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4">
                  <feat.icon className="w-5 h-5 text-[#808080]" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#8a8577] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
            >
              {isRTL ? "تماس با ما" : "Contact Us"}
              <Arrow className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
