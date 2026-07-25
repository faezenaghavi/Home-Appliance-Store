"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Cpu, ShieldCheck, Leaf } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import PageHero from "@/app/components/PageHero";

const icons = [Sparkles, Cpu, ShieldCheck, Leaf];

export default function AboutPage() {
  const { locale, t, dictionary } = useI18n();
  const values = dictionary.about.values;
  const stats = dictionary.about.stats;

  return (
    <main className="min-h-screen bg-weave-cream">
      <PageHero
        eyebrow={t("about.eyebrow") as string}
        title={t("about.title") as string}
        subtitle={t("about.subtitle") as string}
        crumbLabel={t("nav.about") as string}
      />

      {/* Story */}
      <section className="section-padding py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-weave-light">
            <Image
              src="/images/2_Choose_to_live_the_luxe_life_with.png"
              alt="WEAVE"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-weave-dark mb-4">
              {t("about.storyTitle")}
            </h2>
            <p className="text-weave-muted leading-relaxed">{t("about.storyBody")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-16 sm:py-24 bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(values) &&
            values.map((v, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl border border-weave-border/60 hover:shadow-elevated transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-weave-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-weave-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-weave-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-weave-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-16 sm:py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-weave-dark text-center mb-12">
          {t("about.statsTitle")}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(stats) &&
            stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-white border border-weave-border/60">
                <p className="font-display text-3xl sm:text-4xl font-bold text-weave-accent mb-1">
                  {s.value}
                </p>
                <p className="text-weave-muted text-sm">{s.label}</p>
              </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-20 sm:pb-28">
        <div className="rounded-3xl bg-weave-dark px-8 py-14 sm:py-20 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            {t("about.ctaTitle")}
          </h2>
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-weave-accent text-white rounded-full text-sm font-semibold hover:bg-white hover:text-weave-dark transition-colors"
          >
            {t("about.ctaButton")}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
