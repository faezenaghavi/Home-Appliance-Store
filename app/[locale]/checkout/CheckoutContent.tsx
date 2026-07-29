"use client";

import { useState } from "react";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { Home, ChevronRight, ChevronLeft, Lock, CreditCard, Truck, Wallet, Banknote, MapPin, User, Phone, Building2 } from "lucide-react";
import Link from "next/link";

export default function CheckoutContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const { items, subtotal } = useCart();
  
  // استیت‌های برای مدیریت انتخاب روش ارسال و پرداخت
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("online");

  // محاسبه هزینه ارسال
  const shippingCost = shippingMethod === "express" ? 150000 : 50000;
  const total = subtotal + (items.length > 0 ? shippingCost : 0);

  // کلاس‌های مشترک برای اینپوت‌ها
  const inputClass = "w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20 transition-all";
  const labelClass = "block text-xs font-medium text-[#8a8577] mb-2";

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

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          
          {/* Left Side: Forms */}
          <div className="space-y-6">
            
            {/* ۱. اطلاعات تماس و آدرس */}
            <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#c4a882]" />
                {isRTL ? "اطلاعات تحویل" : "Shipping Information"}
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>{isRTL ? "نام و نام خانوادگی" : "Full Name"}</label>
                  <div className="relative">
                    <User className="absolute top-1/2 -translate-y-1/2 start-4 w-4 h-4 text-[#8a8577]" />
                    <input className={`${inputClass} ps-10`} placeholder={isRTL ? "مثال: علی رضایی" : "e.g., John Doe"} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{isRTL ? "شماره موبایل" : "Phone Number"}</label>
                  <div className="relative">
                    <Phone className="absolute top-1/2 -translate-y-1/2 start-4 w-4 h-4 text-[#8a8577]" />
                    <input className={`${inputClass} ps-10`} placeholder={isRTL ? "۰۹۱۲۳۴۵۶۷۸۹" : "+1 234 567 89"} />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>{isRTL ? "استان" : "Province"}</label>
                  <input className={inputClass} placeholder={isRTL ? "تهران" : "Tehran"} />
                </div>
                <div>
                  <label className={labelClass}>{isRTL ? "شهر" : "City"}</label>
                  <input className={inputClass} placeholder={isRTL ? "تهران" : "Tehran"} />
                </div>
              </div>

              <div className="mb-4">
                <label className={labelClass}>{isRTL ? "کد پستی" : "Postal Code"}</label>
                <div className="relative">
                  <Building2 className="absolute top-1/2 -translate-y-1/2 start-4 w-4 h-4 text-[#8a8577]" />
                  <input className={`${inputClass} ps-10`} placeholder={isRTL ? "۱۰ كد پستی" : "10-digit postal code"} />
                </div>
              </div>

              <div>
                <label className={labelClass}>{isRTL ? "آدرس کامل" : "Full Address"}</label>
                <textarea rows={3} className={`${inputClass} resize-none`} placeholder={isRTL ? "خیابان، کوچه، پلاک و واحد" : "Street, Alley, No, Unit"}></textarea>
              </div>
            </div>

            {/* ۲. روش ارسال */}
            <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#c4a882]" />
                {isRTL ? "روش ارسال" : "Shipping Method"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* پست عادی */}
                <div onClick={() => setShippingMethod("standard")} className={`cursor-pointer p-4 border rounded-xl flex items-center gap-4 transition-all ${shippingMethod === "standard" ? "border-[#c4a882] bg-[#c4a882]/5" : "border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${shippingMethod === "standard" ? "bg-[#c4a882] text-white" : "bg-[#faf8f5] text-[#8a8577]"}`}>
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "پست عادی" : "Standard Shipping"}</h4>
                    <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "۴ تا ۷ روز کاری" : "4-7 Business Days"}</p>
                  </div>
                  <span className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "۵۰,۰۰۰" : "50,000"}</span>
                </div>

                {/* پست پیشتاز */}
                <div onClick={() => setShippingMethod("express")} className={`cursor-pointer p-4 border rounded-xl flex items-center gap-4 transition-all ${shippingMethod === "express" ? "border-[#c4a882] bg-[#c4a882]/5" : "border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${shippingMethod === "express" ? "bg-[#c4a882] text-white" : "bg-[#faf8f5] text-[#8a8577]"}`}>
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "پست پیشتاز" : "Express Shipping"}</h4>
                    <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "۱ تا ۳ روز کاری" : "1-3 Business Days"}</p>
                  </div>
                  <span className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "۱۵۰,۰۰۰" : "150,000"}</span>
                </div>
              </div>
            </div>

            {/* ۳. روش پرداخت */}
            <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-[#c4a882]" />
                {isRTL ? "روش پرداخت" : "Payment Method"}
              </h2>
              <div className="space-y-3">
                {/* پرداخت آنلاین */}
                <div onClick={() => setPaymentMethod("online")} className={`cursor-pointer p-4 border rounded-xl flex items-center gap-4 transition-all ${paymentMethod === "online" ? "border-[#c4a882] bg-[#c4a882]/5" : "border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === "online" ? "bg-[#c4a882] text-white" : "bg-[#faf8f5] text-[#8a8577]"}`}>
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "پرداخت آنلاین" : "Online Payment"}</h4>
                    <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "پرداخت با درگاه امن بانکی" : "Secure bank gateway"}</p>
                  </div>
                </div>

                {/* پرداخت در محل */}
                <div onClick={() => setPaymentMethod("cod")} className={`cursor-pointer p-4 border rounded-xl flex items-center gap-4 transition-all ${paymentMethod === "cod" ? "border-[#c4a882] bg-[#c4a882]/5" : "border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === "cod" ? "bg-[#c4a882] text-white" : "bg-[#faf8f5] text-[#8a8577]"}`}>
                    <Banknote className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "پرداخت در محل" : "Cash on Delivery"}</h4>
                    <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "پرداخت هنگام تحویل" : "Pay upon delivery"}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Order Summary (Sticky Dark Card) */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white shadow-lg">
              <h2 className="text-lg font-bold mb-6 text-[#c4a882]">{t("checkout.orderSummary")}</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pe-2">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-xl bg-white/5 overflow-hidden flex-shrink-0">
                      <img src={item.product.images?.[0] || item.product.images} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm text-white/80 block truncate">{isRTL && item.product.nameFa ? item.product.nameFa : item.product.name}</span>
                      <span className="text-xs text-white/50">{isRTL ? "تعداد" : "Qty"}: {item.quantity}</span>
                    </div>
                    <span className="text-sm font-semibold whitespace-nowrap">
                      {new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
                
                {items.length === 0 && (
                  <p className="text-white/50 text-sm text-center py-8">{isRTL ? "سبد خرید شما خالی است" : "Your cart is empty"}</p>
                )}
              </div>

              {/* Calculations */}
              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex justify-between text-sm text-white/70">
                  <span>{isRTL ? "جمع کالاها" : "Subtotal"}</span>
                  <span>{new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-white/70">
                  <span>{isRTL ? "هزینه ارسال" : "Shipping Cost"}</span>
                  <span>{items.length > 0 ? new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(shippingCost) : "۰"}</span>
                </div>
                
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-white/10">
                  <span className="font-bold">{t("cart.total")}</span>
                  <span className="text-xl font-bold text-[#c4a882]">
                    {new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(total)} <span className="text-xs font-normal">{t("common.currency")}</span>
                  </span>
                </div>
              </div>

              <button disabled={items.length === 0} className="w-full mt-6 py-4 bg-[#c4a882] text-[#1a1a1a] rounded-xl font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <CreditCard className="w-5 h-5" />
                {t("checkout.placeOrder")}
              </button>
              
              <p className="text-[10px] text-white/40 text-center mt-4 flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3" /> 
                {isRTL ? "تراکنش‌های شما با امنیت کامل انجام می‌شود" : "Your transactions are fully secured"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}