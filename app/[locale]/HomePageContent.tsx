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

export default function HomePageContent() {
  return (
    <>
      {/* دیگه نیازی به Navbar و pt-20 نیست چون تو لایه اصلی هست */}
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <BestSellers />
      <NewArrivals />
      <SpecialOffers />
      <BrandShowcase />
      <TestimonialsSection />
    </>
  );
}