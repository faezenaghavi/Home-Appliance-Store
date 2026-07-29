"use client";

import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbLabel: string;
}

export default function PageHero({ eyebrow, title, subtitle, crumbLabel }: PageHeroProps) {
  return (
    <div className="pt-24 sm:pt-28 pb-10 section-padding bg-[#f5f0eb] relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#808080]/[0.05] rounded-full blur-[120px]" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <Breadcrumb items={[{ label: crumbLabel }]} className="mb-8" />
        {eyebrow && (
          <span className="inline-block px-4 py-1.5 bg-[#808080]/10 text-[#808080] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#8a8577] text-base max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        <div className="w-20 h-1 bg-[#808080] rounded-full mt-6" />
      </div>
    </div>
  );
}
