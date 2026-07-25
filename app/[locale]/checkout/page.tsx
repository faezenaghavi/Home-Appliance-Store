"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, CheckCircle2, CreditCard, Truck } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import { useCart } from "@/app/context/CartContext";
import PageHero from "@/app/components/PageHero";

type Step = "shipping" | "payment" | "review";

export default function CheckoutPage() {
  const { locale, t } = useI18n();
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("shipping");
  const [placed, setPlaced] = useState(false);
  const [payment, setPayment] = useState<"online" | "cod">("online");
  const [shipping, setShipping] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const shippingCost = subtotal > 100 || subtotal === 0 ? 0 : 15;
  const total = subtotal + shippingCost;

  const steps: Step[] = ["shipping", "payment", "review"];
  const stepIndex = steps.indexOf(step);

  const handlePlaceOrder = () => {
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <main className="min-h-screen bg-weave-cream flex items-center justify-center py-32">
        <div className="text-center max-w-md px-6">
          <CheckCircle2 className="w-16 h-16 text-weave-accent mx-auto mb-6" />
          <h1 className="font-display text-2xl font-bold text-weave-dark mb-3">
            {t("checkout.orderSuccessTitle")}
          </h1>
          <p className="text-weave-muted mb-8">{t("checkout.orderSuccessBody")}</p>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-weave-dark text-white rounded-full text-sm font-semibold hover:bg-weave-accent transition-colors"
          >
            {t("checkout.backToHome")}
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-weave-cream flex items-center justify-center py-32">
        <div className="text-center max-w-md px-6">
          <p className="text-weave-muted mb-6">{t("cart.emptyBody")}</p>
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-weave-dark text-white rounded-full text-sm font-semibold hover:bg-weave-accent transition-colors"
          >
            {t("cart.emptyCta")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-weave-cream">
      <PageHero title={t("checkout.title") as string} crumbLabel={t("nav.cart") as string} />

      <section className="section-padding py-12 sm:py-16">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                    i <= stepIndex ? "bg-weave-dark text-white" : "bg-weave-light text-weave-muted"
                  }`}
                >
                  {i < stepIndex ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:inline ${
                    i <= stepIndex ? "text-weave-dark" : "text-weave-muted"
                  }`}
                >
                  {t(`checkout.steps.${s}`)}
                </span>
              </div>
              {i < steps.length - 1 && <div className="w-8 sm:w-16 h-px bg-weave-border" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-weave-border/60 p-6 sm:p-8">
            {step === "shipping" && (
              <div className="space-y-5">
                <h2 className="font-display text-lg font-semibold text-weave-dark mb-2 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-weave-accent" />
                  {t("checkout.shippingTitle")}
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <TextField
                    label={t("checkout.fullName") as string}
                    value={shipping.fullName}
                    onChange={(v) => setShipping((s) => ({ ...s, fullName: v }))}
                  />
                  <TextField
                    label={t("checkout.phone") as string}
                    value={shipping.phone}
                    onChange={(v) => setShipping((s) => ({ ...s, phone: v }))}
                  />
                </div>
                <TextField
                  label={t("checkout.address") as string}
                  value={shipping.address}
                  onChange={(v) => setShipping((s) => ({ ...s, address: v }))}
                />
                <div className="grid sm:grid-cols-2 gap-5">
                  <TextField
                    label={t("checkout.city") as string}
                    value={shipping.city}
                    onChange={(v) => setShipping((s) => ({ ...s, city: v }))}
                  />
                  <TextField
                    label={t("checkout.postalCode") as string}
                    value={shipping.postalCode}
                    onChange={(v) => setShipping((s) => ({ ...s, postalCode: v }))}
                  />
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="space-y-4">
                <h2 className="font-display text-lg font-semibold text-weave-dark mb-2 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-weave-accent" />
                  {t("checkout.paymentTitle")}
                </h2>
                {(["online", "cod"] as const).map((method) => (
                  <button
                    key={method}
                    onClick={() => setPayment(method)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-start transition-colors ${
                      payment === method
                        ? "border-weave-accent bg-weave-accent/5"
                        : "border-weave-border hover:bg-weave-light"
                    }`}
                  >
                    <span className="text-sm font-medium text-weave-dark">
                      {method === "online" ? t("checkout.paymentOnline") : t("checkout.paymentCod")}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        payment === method ? "border-weave-accent" : "border-weave-border"
                      }`}
                    >
                      {payment === method && <div className="w-2.5 h-2.5 rounded-full bg-weave-accent" />}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === "review" && (
              <div className="space-y-6">
                <h2 className="font-display text-lg font-semibold text-weave-dark">
                  {t("checkout.reviewTitle")}
                </h2>
                <div className="text-sm space-y-1 text-weave-muted">
                  <p className="text-weave-dark font-medium">{shipping.fullName || "—"}</p>
                  <p>{shipping.address || "—"}</p>
                  <p>
                    {shipping.city || "—"} {shipping.postalCode}
                  </p>
                  <p>{shipping.phone || "—"}</p>
                </div>
                <div className="border-t border-weave-border/60 pt-4 space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id + item.selectedColor.name}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-weave-dark">
                        {locale === "fa" && item.product.nameFa ? item.product.nameFa : item.product.name} × {item.quantity}
                      </span>
                      <span className="text-weave-muted">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-weave-border/60">
              <button
                disabled={stepIndex === 0}
                onClick={() => setStep(steps[stepIndex - 1])}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-weave-dark border border-weave-border disabled:opacity-0 hover:bg-weave-light transition-colors"
              >
                {t("checkout.back")}
              </button>
              {step !== "review" ? (
                <button
                  onClick={() => setStep(steps[stepIndex + 1])}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-weave-dark text-white hover:bg-weave-accent transition-colors"
                >
                  {t("checkout.next")}
                </button>
              ) : (
                <button
                  onClick={handlePlaceOrder}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-weave-accent text-white hover:bg-weave-dark transition-colors"
                >
                  {t("checkout.placeOrder")}
                </button>
              )}
            </div>
          </div>

          <div>
            <div className="sticky top-28 bg-white rounded-2xl border border-weave-border/60 p-6">
              <h2 className="font-display text-lg font-semibold text-weave-dark mb-5">
                {t("cart.summaryTitle")}
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-weave-muted">
                  <span>{t("common.subtotal")}</span>
                  <span className="text-weave-dark">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-weave-muted">
                  <span>{t("common.shipping")}</span>
                  <span className="text-weave-dark">
                    {shippingCost === 0 ? t("common.free") : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between font-display text-base font-bold text-weave-dark border-t border-weave-border/60 pt-3">
                  <span>{t("common.total")}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TextField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-weave-muted mb-2">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 bg-weave-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-weave-accent/20"
      />
    </label>
  );
}
