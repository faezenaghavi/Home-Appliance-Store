// app/[locale]/HomePageContent.tsx
"use client";

import HeroSection from "@/app/sections/HeroSection";
import CategorySection from "@/app/sections/CategoriesSection";
import FeaturedProducts from "@/app/sections/FeaturesSection";
import BestSellers from "@/app/sections/BestSellers";
import NewArrivals from "@/app/sections/NewArrivals";
import SpecialOffers from "@/app/sections/SpecialOffers";
import BrandShowcase from "@/app/sections/BrandShowcase";
import TestimonialsSection from "@/app/sections/TestimonialsSection";
import AboutPreviewSection from "@/app/sections/AboutPreviewSection";

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