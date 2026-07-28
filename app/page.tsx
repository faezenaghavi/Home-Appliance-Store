// app/page.tsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/sections/HeroSection";
import CategorySection from "@/app/sections/CategoriesSection";
import FeaturedProducts from "@/app/sections/FeaturesSection";
import BestSellers from "@/app/sections/BestSellers";
import NewArrivals from "@/app/sections/NewArrivals";
import SpecialOffers from "@/app/sections/SpecialOffers";
import BrandShowcase from "@/app/sections/BrandShowcase";
import TestimonialsSection from "@/app/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Navbar */}
      <Navbar cartCount={2} wishlistCount={5} />
      
      
      <main className="pt-20 sm:pt-24">
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <BestSellers />
        <NewArrivals />
        <SpecialOffers />
        <BrandShowcase />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
}