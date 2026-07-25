"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/app/types";

interface FAQItemProps {
  faq: FAQ;
  index: number;
  isActive: boolean;
  onToggle: () => void;
}

export default function FAQItem({ faq, index, isActive, onToggle }: FAQItemProps) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isActive
          ? "border-weave-accent bg-weave-accent/5"
          : "border-weave-border bg-white hover:border-weave-accent/30"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-weave-accent font-display text-sm font-semibold">
            /{String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-medium text-weave-dark text-sm">
            {faq.question}
          </span>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive
              ? "bg-weave-accent text-white rotate-0"
              : "bg-weave-light text-weave-dark"
          }`}
        >
          {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pl-14">
          <p className="text-weave-muted text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
