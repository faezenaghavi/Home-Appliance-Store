"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

function normalizeOptions(
  input?: ScrollAnimationOptions | number
): ScrollAnimationOptions {
  if (typeof input === "number") {
    return { threshold: input };
  }
  return input ?? {};
}

export function useScrollAnimation(threshold: number): { ref: React.RefObject<HTMLDivElement | null>; isVisible: boolean };
export function useScrollAnimation(options?: ScrollAnimationOptions): { ref: React.RefObject<HTMLDivElement | null>; isVisible: boolean };
export function useScrollAnimation(
  options?: ScrollAnimationOptions | number
) {
  const opts = normalizeOptions(options);

  const threshold = opts.threshold ?? 0.15;
  const rootMargin = opts.rootMargin ?? "0px 0px -60px 0px";
  const triggerOnce = opts.triggerOnce ?? true;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export function useStaggerAnimation(
  itemCount: number,
  options?: ScrollAnimationOptions | number
) {
  const opts = normalizeOptions(options);

  const threshold = opts.threshold ?? 0.1;
  const rootMargin = opts.rootMargin ?? "0px 0px -40px 0px";
  const triggerOnce = opts.triggerOnce ?? true;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  const getStaggerDelay = useCallback(
    (index: number, baseDelay: number = 100) => ({
      transitionDelay: isVisible ? `${index * baseDelay}ms` : "0ms",
    }),
    [isVisible]
  );

  return { ref, isVisible, getStaggerDelay };
}