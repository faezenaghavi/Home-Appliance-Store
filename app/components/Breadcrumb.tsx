"use client";

import Link from "next/link";
import { Home, ChevronRight, ChevronLeft } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const Chevron = isRTL ? ChevronLeft : ChevronRight;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-[#8a8577] flex items-center gap-2 flex-wrap ${className}`}
    >
      <Link
        href={`/${locale}`}
        scroll={true}
        className="hover:text-[#808080] transition-colors flex items-center gap-1.5"
      >
        <Home className="w-3.5 h-3.5" />
        {isRTL ? "خانه" : "Home"}
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <Chevron className="w-3 h-3 shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#808080] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1a1a1a] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
