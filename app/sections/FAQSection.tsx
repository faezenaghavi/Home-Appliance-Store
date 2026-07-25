"use client";

import { useState } from "react";
import { faqs } from "@/app/data/products";
import FAQItem from "@/app/components/FAQItem";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);

  return (
    <section id="support" className="py-24 md:py-32 bg-weave-cream">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-weave-accent text-xs font-semibold uppercase tracking-widest mb-4 block">
              About WEAVE
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-weave-dark mb-6 leading-tight">
              Your Questions<br />Our Answers
            </h2>

            {/* Featured FAQ */}
            <div className="mt-12 relative">
              <div className="absolute -top-4 -left-4 text-[6rem] font-display font-bold text-weave-accent/10 leading-none">
                /03
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                <img
                  src="/images/1_Modern_White_Air_Purifier_Minimal.png"
                  alt="WEAVE in use"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-weave-dark mb-2">
                Is the Weave air purifier noisy?
              </h3>
              <p className="text-weave-muted text-sm leading-relaxed">
                The Weave air purifier operates at a whisper-quiet 20 decibels, 
                making it perfect for use in bedrooms and other quiet spaces.
              </p>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-weave-muted text-sm leading-relaxed mb-8">
              Find answers to the most frequently asked questions about its advanced features, 
              how to use and maintain it, and what makes it the perfect choice for improving 
              your indoor air quality.
            </p>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  index={index}
                  isActive={activeIndex === index}
                  onToggle={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
