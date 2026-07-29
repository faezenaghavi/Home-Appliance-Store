"use client";

import { ArrowRight, Search } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 md:py-32 bg-weave-cream">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-weave-accent text-xs font-semibold uppercase tracking-widest mb-4 block">
              About novira
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-weave-dark mb-6 leading-tight">
              Cleaner Living<br />Environment
            </h2>
            <p className="text-weave-muted text-sm leading-relaxed mb-8 max-w-md">
              Transforming the air you breathe, providing advanced solutions for a healthier life 
              with cutting-edge air purification technology. Our mission is to make clean air accessible 
              to every home.
            </p>
            <a href="#features" className="btn-outline">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Small Gallery */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="image-reveal rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/1_Modern_White_Air_Purifier_Minimal.png"
                  alt="WEAVE in bedroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="image-reveal rounded-2xl overflow-hidden aspect-[4/3] mt-8">
                <img
                  src="/images/5_290_Air_Purifier_Product_Display.png"
                  alt="WEAVE in living room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Main Image */}
          <div
            ref={rightRef}
            className={`relative transition-all duration-1000 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-elevated">
                <img
                  src="/images/9_Cylindrical_Smart_Air_Purifier_in.png"
                  alt="WEAVE Air Purifier Lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Search Button Overlay */}
              <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-weave-dark text-white 
                               flex items-center justify-center shadow-elevated hover:bg-weave-accent 
                               transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Established Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-soft">
                <span className="text-weave-muted text-xs">Established 2024</span>
              </div>

              {/* Decorative Text */}
              <div className="absolute -bottom-8 -right-4 opacity-5 pointer-events-none">
                <span className="font-display text-[8rem] font-bold text-weave-dark leading-none">
                  AIR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
