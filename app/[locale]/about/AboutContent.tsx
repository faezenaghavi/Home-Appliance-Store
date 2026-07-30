"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
import { MOTION_EASE } from "@/app/lib/motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.65, ease: MOTION_EASE },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: MOTION_EASE } },
};

export default function AboutContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

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
    <main dir={direction} className="min-h-screen bg-[#faf8f5] overflow-x-hidden">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-[#1a1a1a]/5 relative">
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 bg-[#808080]/8 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto relative">
          <motion.div {...fadeUp(0)}>
            <Breadcrumb items={[{ label: t("nav.about") as string }]} className="mb-10" />
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: MOTION_EASE }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#808080]/10 text-[#808080] text-xs font-bold uppercase tracking-widest rounded-full mb-6"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t("nav.about")}
              </motion.span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-5">
                {isRTL ? "خانه‌ای لوکس‌تر با نوویرا" : "A More Luxurious Home with Novira"}
              </h1>
              <p className="text-[#8a8577] text-lg leading-relaxed mb-8">
                {t("brand.description")}
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`/${locale}/products`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a1a1a] text-white font-semibold rounded-full hover:bg-[#808080] transition-colors duration-200"
                >
                  {isRTL ? "مشاهده محصولات" : "Explore Products"}
                  <Arrow className="w-4 h-4" />
                </Link>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-12 sm:py-14 bg-[#1a1a1a] overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={statsInView ? "show" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={item} className="text-center">
                <motion.p
                  className="text-3xl sm:text-4xl font-bold text-[#808080] mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 16 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 sm:py-24">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
              {isRTL ? "آنچه نوویرا را متفاوت می‌کند" : "What Sets Novira Apart"}
            </h2>
            <p className="text-[#8a8577]">
              {isRTL
                ? "ما فقط محصول نمی‌فروشیم؛ تجربه‌ای کامل از انتخاب تا پشتیبانی ارائه می‌دهیم."
                : "We don't just sell products — we deliver a complete experience from selection to support."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {values.map((val, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(26,26,26,0.08)" }}
                className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-7 transition-colors duration-200"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.45 }}
                  className="w-11 h-11 rounded-xl bg-[#808080]/10 flex items-center justify-center mb-5"
                >
                  <val.icon className="w-5 h-5 text-[#808080]" />
                </motion.div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{val.title}</h3>
                <p className="text-sm text-[#8a8577] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#1a1a1a]/5">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div {...fadeUp(0)}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#808080] mb-4 block">
                {isRTL ? "داستان ما" : "Our Story"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                {isRTL ? "از یک ایده ساده تا برند مورد اعتماد" : "From a Simple Idea to a Trusted Brand"}
              </h2>
              <p className="text-[#8a8577] leading-relaxed mb-6">{t("hero.subtitle")}</p>
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
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
                ).map((point, i) => (
                  <motion.li key={i} variants={item} className="flex items-center gap-3 text-sm text-[#1a1a1a]">
                    <span className="w-6 h-6 rounded-full bg-[#808080]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#808080]" />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="space-y-0"
            >
              {milestones.map((m, i) => (
                <motion.div key={i} variants={item} className="flex gap-5 pb-8 last:pb-0 group">
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.4 }}
                      className="w-3 h-3 rounded-full bg-[#808080] shrink-0 mt-1.5 group-hover:shadow-[0_0_12px_rgba(128,128,128,0.6)]"
                    />
                    {i < milestones.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.1, duration: 0.5 }}
                        className="w-px flex-1 bg-[#808080]/20 mt-2 origin-top"
                      />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="text-sm font-bold text-[#808080] mb-1">{m.year}</p>
                    <p className="text-[#1a1a1a] text-sm leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Novira */}
      <section className="py-16 sm:py-24">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              {isRTL ? "چرا نوویرا؟" : "Why Novira?"}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: MOTION_EASE }}
              className="h-1 bg-[#808080] mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4, borderColor: "rgba(128,128,128,0.4)" }}
                className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 transition-colors duration-200"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-11 h-11 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4"
                >
                  <feat.icon className="w-5 h-5 text-[#808080]" />
                </motion.div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#8a8577] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="text-center mt-14">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
              >
                {isRTL ? "تماس با ما" : "Contact Us"}
                <Arrow className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
