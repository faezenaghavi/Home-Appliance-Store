"use client";

import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/app/types";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="bg-white rounded-3xl p-8 shadow-soft h-full flex flex-col">
        <Quote className="w-8 h-8 text-weave-accent/30 mb-4" />

        <p className="text-weave-dark text-sm leading-relaxed mb-6 flex-grow">
          &ldquo;{testimonial.comment}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-weave-accent/10 flex items-center justify-center">
            <span className="font-display text-weave-accent font-semibold text-sm">
              {testimonial.avatar}
            </span>
          </div>
          <div>
            <h4 className="font-medium text-weave-dark text-sm">{testimonial.name}</h4>
            <p className="text-weave-muted text-xs">{testimonial.role}</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-weave-accent text-weave-accent" />
            <span className="text-weave-dark text-sm font-medium">{testimonial.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
