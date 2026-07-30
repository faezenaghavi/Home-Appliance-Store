"use client";

import { ArrowRight } from "lucide-react";
import { products } from "@/app/data/products";
import { getProductDisplayImage } from "@/app/lib/categoryImages";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useState } from "react";

export default function SpecsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedColor, setSelectedColor] = useState(0);
  const mainProduct = products[0];

  const specs = Object.entries(mainProduct.specs);

  return (
    <section className="py-24 md:py-32 bg-weave-dark text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-weave-accent/5 to-transparent" />

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Specs */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-weave-accent text-xs font-semibold uppercase tracking-widest mb-4 block">
              Products
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              WEAVE<br />Air Purifier
            </h2>

            {/* Specs Table */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 mb-8">
              <div className="space-y-4">
                {specs.map(([key, value], index) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between py-3 ${
                      index !== specs.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className="text-white/60 text-sm">{key}</span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-white/60 text-sm">Color:</span>
              <div className="flex gap-2">
                {mainProduct.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === i
                        ? "border-weave-accent scale-110"
                        : "border-white/30 hover:border-white/60"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* CTA */}
            <a href="#" className="btn-accent">
              Buy Now — ${mainProduct.price}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Product Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-b from-weave-accent/10 to-transparent rounded-full blur-2xl" />
              <img
                src={getProductDisplayImage(mainProduct, selectedColor)}
                alt={mainProduct.name}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
