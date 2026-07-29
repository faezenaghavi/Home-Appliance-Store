// app/[locale]/HomePageContent.tsx
"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/app/sections/HeroSection";

const CategorySection = dynamic(() => import("@/app/sections/CategoriesSection"));
const FeaturedProducts = dynamic(() => import("@/app/sections/FeaturesSection"));
const AboutPreviewSection = dynamic(() => import("@/app/sections/AboutPreviewSection"));
const BestSellers = dynamic(() => import("@/app/sections/BestSellers"));
const NewArrivals = dynamic(() => import("@/app/sections/NewArrivals"));
const SpecialOffers = dynamic(() => import("@/app/sections/SpecialOffers"));
const BrandShowcase = dynamic(() => import("@/app/sections/BrandShowcase"));
const TestimonialsSection = dynamic(() => import("@/app/sections/TestimonialsSection"));

export default function HomePageContent() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <AboutPreviewSection />
      <BestSellers />
      <NewArrivals />
      <SpecialOffers />
      <BrandShowcase />
      <TestimonialsSection />
    </>
  );
}
