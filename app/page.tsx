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
import NewsletterSection from "@/app/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar cartCount={2} wishlistCount={5} />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <BestSellers />
      <NewArrivals />
      <SpecialOffers />
      <BrandShowcase />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}