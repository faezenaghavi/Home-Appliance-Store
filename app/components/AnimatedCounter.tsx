"use client";

import { useCountUp } from "@/app/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const { ref, count } = useCountUp(end, duration);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-weave-dark mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-weave-muted text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}
