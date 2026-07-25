"use client";

import AnimatedCounter from "@/app/components/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="py-20 bg-weave-cream border-y border-weave-border">
      <div className="section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter end={99} suffix="%" label="Pollutant Removal" />
          <AnimatedCounter end={12} suffix="K+" label="Happy Customers" />
          <AnimatedCounter end={20} suffix="dB" label="Quiet Operation" />
          <AnimatedCounter end={3} suffix="yr" label="Warranty" />
        </div>
      </div>
    </section>
  );
}
