"use client";

import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { Home, ChevronRight, ChevronLeft, Lock, CreditCard } from "lucide-react";
import Link from "next/link";

export default function CheckoutContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const { items, subtotal } = useCart();

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pt-24 sm:pt-28 pb-16">
        
        {/* Breadcrumb */}
        <div className="text-sm text-[#8a8577] flex items-center gap-2 mb-8">
          <Link href={`/${locale}`} className="hover:text-[#c4a882] transition-colors flex items-center gap-1.5"><Home className="w-3.5 h-3.5" />{isRTL ? "خانه" : "Home"}</Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <Link href={`/${locale}/cart`} className="hover:text-[#c4a882]">{t("cart.title")}</Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <span className="text-[#1a1a1a] font-medium">{t("checkout.title")}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-2">{t("checkout.title")}</h1>
        <p className="text-[#8a8577] mb-8 flex items-center gap-2"><Lock className="w-4 h-4" />{t("checkout.securePayment")}</p>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Shipping & Payment Form */}
          <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-6">{t("checkout.shippingInfo")}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#8a8577] mb-2">{isRTL ? "نام و نام خانوادگی" : "Full Name"}</label>
                <input className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8a8577] mb-2">{isRTL ? "شماره موبایل" : "Phone Number"}</label>
                <input className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8a8577] mb-2">{isRTL ? "آدرس کامل" : "Full Address"}</label>
                <textarea rows={3} className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20 resize-none"></textarea>
              </div>
            </div>
          </div>

          {/* Order Summary (Dark Card) */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white shadow-lg h-fit">
            <h2 className="text-lg font-bold mb-6 text-[#c4a882]">{t("checkout.orderSummary")}</h2>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-white/70 truncate pr-2">{isRTL && item.product.nameFa ? item.product.nameFa : item.product.name}</span>
                  <span className="font-semibold">{new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(item.product.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>{t("cart.total")}</span>
                <span className="text-[#c4a882]">{new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(subtotal)} {t("common.currency")}</span>
              </div>
            </div>
            <button className="w-full py-4 bg-[#c4a882] text-[#1a1a1a] rounded-xl font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              {t("checkout.placeOrder")}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}