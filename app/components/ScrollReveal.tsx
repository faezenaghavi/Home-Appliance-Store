"use client";

import { ReactNode, ElementType } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "scale-down"
  | "blur-in"
  | "slide-up"
  | "none";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: ElementType;
}

const animationStyles: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-16",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-16",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-16",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-16",
    animate: "opacity-100 translate-x-0",
  },
  "scale-up": {
    initial: "opacity-0 scale-90",
    animate: "opacity-100 scale-100",
  },
  "scale-down": {
    initial: "opacity-0 scale-110",
    animate: "opacity-100 scale-100",
  },
  "blur-in": {
    initial: "opacity-0 blur-sm",
    animate: "opacity-100 blur-0",
  },
  "slide-up": {
    initial: "opacity-0 translate-y-24",
    animate: "opacity-100 translate-y-0",
  },
  none: {
    initial: "",
    animate: "",
  },
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.12,
  as: Component = "div",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const styles = animationStyles[animation];

  return (
    <Component
      ref={ref}
      className={`transition-all ease-out will-change-transform ${styles.initial} ${
        isVisible ? styles.animate : ""
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerContainer({
  children,
  className = "",
  threshold = 0.08,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  index = 0,
  animation = "fade-up",
  duration = 600,
  staggerDelay = 100,
  isVisible = false,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  animation?: AnimationType;
  duration?: number;
  staggerDelay?: number;
  isVisible?: boolean;
  className?: string;
}) {
  const styles = animationStyles[animation];

  return (
    <div
      className={`transition-all ease-out will-change-transform ${styles.initial} ${
        isVisible ? styles.animate : ""
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}