"use client";

import { ArrowRight } from "lucide-react";
import { products } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="products" className="py-24 md:py-32 bg-weave-cream">
      <div className="section-padding">
        {/* Section Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="text-weave-accent text-xs font-semibold uppercase tracking-widest mb-4 block">
              Products
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-weave-dark">
              WEAVE<br />Air Purifier
            </h2>
          </div>
          <p className="text-weave-muted text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Engineered with cutting-edge technology and designed for modern living. 
            Weave brings you the perfect blend of functionality and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a href="#" className="btn-outline">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
