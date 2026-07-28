"use client";

import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import { ShoppingBag, Trash2, Minus, Plus, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const formatPrice = (price: number, locale: string) => {
  return locale === "fa" ? new Intl.NumberFormat("fa-IR").format(price) : new Intl.NumberFormat("en-US").format(price);
};

export default function CartContent() {
  const { locale, direction, t } = useI18n();
  const isRTL = direction === "rtl";
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  return (
    <div dir={direction} className="min-h-screen bg-[#faf8f5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 flex items-center justify-center gap-3">
            <ShoppingBag className="w-8 h-8 text-[#c4a882]" />
            {t("cart.title")}
          </h1>
          <div className="w-20 h-1 bg-[#c4a882] mx-auto mt-4 rounded-full"></div>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#1a1a1a]/5">
            <ShoppingBag className="w-16 h-16 text-[#1a1a1a]/10 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1a1a1a]">{t("cart.empty")}</h3>
            <p className="text-[#8a8577] mt-2 text-sm mb-6">{t("cart.emptyDesc")}</p>
            <Link href={`/${locale}/products`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#c4a882] transition-colors">
              {t("cart.continueShopping")}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            
            <div className="flex justify-end">
              <button onClick={clearCart} className="text-sm text-[#8a8577] hover:text-red-500 transition-colors flex items-center gap-1.5">
                <Trash2 className="w-3.5 h-3.5" />
                {t("cart.remove")} {t("cart.title")}
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 divide-y divide-[#1a1a1a]/5 overflow-hidden">
              {items.map((item) => {
                const pId = item.product.id;
                const cName = item.selectedColor.name;

                return (
                  <div key={`${pId}-${cName}`} className="flex items-center gap-4 p-4 sm:p-6 hover:bg-[#faf8f5]/50 transition-colors">
                    
                    <div className="w-24 h-24 bg-[#faf8f5] rounded-xl border border-[#1a1a1a]/5 flex items-center justify-center overflow-hidden shrink-0 relative">
                      <span className="text-[#c4a882] text-2xl font-bold">{item.product.name.charAt(0)}</span>
                      <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: item.selectedColor.hex }} title={isRTL ? item.selectedColor.nameFa : item.selectedColor.name} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#1a1a1a] font-semibold truncate">{isRTL && item.product.nameFa ? item.product.nameFa : item.product.name}</h4>
                      <p className="text-xs text-[#8a8577] mt-1 flex items-center gap-2">
                        <span>{isRTL ? item.product.brandFa : item.product.brand}</span>
                        <span className="w-1 h-1 rounded-full bg-[#1a1a1a]/20" />
                        <span className="flex items-center gap-1">
                          {t("product.color")}: 
                          <span className="w-3 h-3 rounded-full inline-block border border-[#1a1a1a]/10" style={{ backgroundColor: item.selectedColor.hex }} />
                          {isRTL ? item.selectedColor.nameFa : item.selectedColor.name}
                        </span>
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[#1a1a1a] font-bold text-sm">
                          {formatPrice(item.product.price, locale)} {t("common.currency")}
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-[#8a8577] text-xs line-through">
                            {formatPrice(item.product.originalPrice, locale)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 shrink-0">
                      <div className="flex items-center border border-[#1a1a1a]/10 rounded-lg bg-[#faf8f5]">
                        <button 
                          onClick={() => updateQuantity(pId, cName, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#1a1a1a]/70 hover:text-[#c4a882] transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold border-x border-[#1a1a1a]/10">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(pId, cName, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#1a1a1a]/70 hover:text-[#c4a882] transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(pId, cName)} 
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <p className="text-[#8a8577] text-sm">{t("cart.subtotal")}</p>
                <p className="text-2xl font-bold text-[#1a1a1a] mt-1">
                  {formatPrice(subtotal, locale)} {t("common.currency")}
                </p>
              </div>
              <Link href={`/${locale}/checkout`} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#c4a882] text-white rounded-xl font-semibold hover:bg-[#1a1a1a] transition-colors shadow-lg shadow-[#c4a882]/20">
                {t("cart.checkout")}
                {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}