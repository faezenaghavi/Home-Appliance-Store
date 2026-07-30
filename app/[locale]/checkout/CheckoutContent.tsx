"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { useAccount } from "@/app/context/AccountContext";
import { useToast } from "@/app/context/Toastcontext";
import { Home, ChevronRight, ChevronLeft, Lock, CreditCard, Truck, Wallet, Banknote, MapPin, User, Phone, Building2 } from "lucide-react";
import Link from "next/link";
import { getProductDisplayImage } from "@/app/lib/categoryImages";

export default function CheckoutContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const router = useRouter();
  const { showToast } = useToast();
  const { items, subtotal, clearCart } = useCart();
  const { isLoggedIn, user, addresses, placeOrder } = useAccount();

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shippingForm, setShippingForm] = useState({
    name: "",
    phone: "",
    province: "",
    city: "",
    postalCode: "",
    address: "",
  });

  useEffect(() => {
    if (!user) return;
    const defaultAddress = addresses.find((a) => a.isDefault) ?? addresses[0];
    setShippingForm((prev) => ({
      ...prev,
      name: user.name || prev.name,
      phone: user.phone || prev.phone,
      province: defaultAddress?.province || prev.province,
      city: defaultAddress?.city || prev.city,
      postalCode: defaultAddress?.postalCode || prev.postalCode,
      address: defaultAddress?.details || prev.address,
    }));
  }, [user, addresses]);

  // محاسبه هزینه ارسال
  const shippingCost = shippingMethod === "express" ? 150000 : 50000;
  const total = subtotal + (items.length > 0 ? shippingCost : 0);

  const inputClass = "w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#808080]/20 transition-all";
  const labelClass = "block text-xs font-medium text-[#8a8577] mb-2";

  const handlePlaceOrder = () => {
    if (!isLoggedIn) {
      showToast({
        variant: "info",
        title: isRTL ? "ابتدا وارد حساب شوید" : "Please sign in first",
        description: isRTL
          ? "برای ثبت سفارش باید وارد حساب کاربری شوید."
          : "You need to sign in to place an order.",
      });
      router.push(`/${locale}/account`);
      return;
    }

    if (items.length === 0) return;

    if (!shippingForm.name.trim() || !shippingForm.phone.trim() || !shippingForm.address.trim()) {
      showToast({
        variant: "error",
        title: isRTL ? "اطلاعات تحویل ناقص است" : "Incomplete shipping info",
        description: isRTL
          ? "نام، موبایل و آدرس را کامل کنید."
          : "Please fill in name, phone, and address.",
      });
      return;
    }

    setIsSubmitting(true);
    const shippingAddress = [
      shippingForm.province,
      shippingForm.city,
      shippingForm.postalCode,
      shippingForm.address,
    ]
      .filter(Boolean)
      .join("، ");

    const order = placeOrder({
      items,
      subtotal,
      shippingCost,
      total,
      shippingAddress,
      shippingMethod:
        shippingMethod === "express"
          ? isRTL
            ? "پست پیشتاز"
            : "Express Shipping"
          : isRTL
            ? "پست عادی"
            : "Standard Shipping",
      paymentMethod:
        paymentMethod === "cod"
          ? isRTL
            ? "پرداخت در محل"
            : "Cash on Delivery"
          : isRTL
            ? "پرداخت آنلاین"
            : "Online Payment",
    });

    if (order) {
      clearCart();
      showToast({
        variant: "success",
        title: isRTL ? "سفارش ثبت شد" : "Order placed",
        description: isRTL
          ? `شماره سفارش: ${order.id}`
          : `Order ID: ${order.id}`,
      });
      router.push(`/${locale}/account?tab=orders`);
    }
    setIsSubmitting(false);
  };

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pt-24 sm:pt-28 pb-16">
        
        {/* Breadcrumb */}
        <div className="text-sm text-[#8a8577] flex items-center gap-2 mb-8">
          <Link href={`/${locale}`} className="hover:text-[#808080] transition-colors flex items-center gap-1.5"><Home className="w-3.5 h-3.5" />{isRTL ? "خانه" : "Home"}</Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <Link href={`/${locale}/cart`} className="hover:text-[#808080]">{t("cart.title")}</Link>
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
                <MapPin className="w-5 h-5 text-[#808080]" />
                {isRTL ? "اطلاعات تحویل" : "Shipping Information"}
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>{isRTL ? "نام و نام خانوادگی" : "Full Name"}</label>
                  <div className="relative">
                    <User className="absolute top-1/2 -translate-y-1/2 start-4 w-4 h-4 text-[#8a8577]" />
                    <input
                      className={`${inputClass} ps-10`}
                      placeholder={isRTL ? "مثال: علی رضایی" : "e.g., John Doe"}
                      value={shippingForm.name}
                      onChange={(e) => setShippingForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{isRTL ? "شماره موبایل" : "Phone Number"}</label>
                  <div className="relative">
                    <Phone className="absolute top-1/2 -translate-y-1/2 start-4 w-4 h-4 text-[#8a8577]" />
                    <input
                      className={`${inputClass} ps-10`}
                      placeholder={isRTL ? "۰۹۱۲۳۴۵۶۷۸۹" : "+1 234 567 89"}
                      value={shippingForm.phone}
                      onChange={(e) => setShippingForm((f) => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>{isRTL ? "استان" : "Province"}</label>
                  <input
                    className={inputClass}
                    placeholder={isRTL ? "تهران" : "Tehran"}
                    value={shippingForm.province}
                    onChange={(e) => setShippingForm((f) => ({ ...f, province: e.target.value }))}
                  />
                </div>
                <div>
                  <label className={labelClass}>{isRTL ? "شهر" : "City"}</label>
                  <input
                    className={inputClass}
                    placeholder={isRTL ? "تهران" : "Tehran"}
                    value={shippingForm.city}
                    onChange={(e) => setShippingForm((f) => ({ ...f, city: e.target.value }))}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className={labelClass}>{isRTL ? "کد پستی" : "Postal Code"}</label>
                <div className="relative">
                  <Building2 className="absolute top-1/2 -translate-y-1/2 start-4 w-4 h-4 text-[#8a8577]" />
                  <input
                    className={`${inputClass} ps-10`}
                    placeholder={isRTL ? "۱۰ كد پستی" : "10-digit postal code"}
                    value={shippingForm.postalCode}
                    onChange={(e) => setShippingForm((f) => ({ ...f, postalCode: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>{isRTL ? "آدرس کامل" : "Full Address"}</label>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder={isRTL ? "خیابان، کوچه، پلاک و واحد" : "Street, Alley, No, Unit"}
                  value={shippingForm.address}
                  onChange={(e) => setShippingForm((f) => ({ ...f, address: e.target.value }))}
                />
              </div>
            </div>

            {/* ۲. روش ارسال */}
            <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#808080]" />
                {isRTL ? "روش ارسال" : "Shipping Method"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* پست عادی */}
                <div onClick={() => setShippingMethod("standard")} className={`cursor-pointer p-4 border rounded-xl flex items-center gap-4 transition-all ${shippingMethod === "standard" ? "border-[#808080] bg-[#808080]/5" : "border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${shippingMethod === "standard" ? "bg-[#808080] text-white" : "bg-[#faf8f5] text-[#8a8577]"}`}>
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "پست عادی" : "Standard Shipping"}</h4>
                    <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "۴ تا ۷ روز کاری" : "4-7 Business Days"}</p>
                  </div>
                  <span className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "۵۰,۰۰۰" : "50,000"}</span>
                </div>

                {/* پست پیشتاز */}
                <div onClick={() => setShippingMethod("express")} className={`cursor-pointer p-4 border rounded-xl flex items-center gap-4 transition-all ${shippingMethod === "express" ? "border-[#808080] bg-[#808080]/5" : "border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${shippingMethod === "express" ? "bg-[#808080] text-white" : "bg-[#faf8f5] text-[#8a8577]"}`}>
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
                <Wallet className="w-5 h-5 text-[#808080]" />
                {isRTL ? "روش پرداخت" : "Payment Method"}
              </h2>
              <div className="space-y-3">
                {/* پرداخت آنلاین */}
                <div onClick={() => setPaymentMethod("online")} className={`cursor-pointer p-4 border rounded-xl flex items-center gap-4 transition-all ${paymentMethod === "online" ? "border-[#808080] bg-[#808080]/5" : "border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === "online" ? "bg-[#808080] text-white" : "bg-[#faf8f5] text-[#8a8577]"}`}>
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1a1a1a]">{isRTL ? "پرداخت آنلاین" : "Online Payment"}</h4>
                    <p className="text-xs text-[#8a8577] mt-0.5">{isRTL ? "پرداخت با درگاه امن بانکی" : "Secure bank gateway"}</p>
                  </div>
                </div>

                {/* پرداخت در محل */}
                <div onClick={() => setPaymentMethod("cod")} className={`cursor-pointer p-4 border rounded-xl flex items-center gap-4 transition-all ${paymentMethod === "cod" ? "border-[#808080] bg-[#808080]/5" : "border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === "cod" ? "bg-[#808080] text-white" : "bg-[#faf8f5] text-[#8a8577]"}`}>
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
              <h2 className="text-lg font-bold mb-6 text-[#808080]">{t("checkout.orderSummary")}</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pe-2">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-xl bg-white/5 overflow-hidden flex-shrink-0">
                      <img src={getProductDisplayImage(item.product)} alt="" className="w-full h-full object-cover" />
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
                  <span className="text-xl font-bold text-[#808080]">
                    {new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(total)} <span className="text-xs font-normal">{t("common.currency")}</span>
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={items.length === 0 || isSubmitting}
                className="w-full mt-6 py-4 bg-[#808080] text-white rounded-xl font-bold hover:bg-[#666666] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CreditCard className="w-5 h-5" />
                {isSubmitting
                  ? isRTL
                    ? "در حال ثبت..."
                    : "Placing..."
                  : t("checkout.placeOrder")}
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