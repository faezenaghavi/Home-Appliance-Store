"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { User, Package, MapPin, Settings, LogOut } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import PageHero from "@/app/components/PageHero";

type Tab = "profile" | "orders" | "addresses" | "settings";

const mockOrders = [
  { id: "WV-10234", date: "2026-07-01", status: "delivered", total: 349.99 },
  { id: "WV-10198", date: "2026-06-12", status: "shipped", total: 199.99 },
  { id: "WV-10120", date: "2026-05-03", status: "processing", total: 279.99 },
];

function AccountContent() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as Tab) || "profile";
  const [tab, setTab] = useState<Tab>(initialTab);
  const [profile, setProfile] = useState({ name: "", email: "", phone: "" });

  const tabs: { key: Tab; label: string; icon: typeof User }[] = [
    { key: "profile", label: t("account.tabs.profile") as string, icon: User },
    { key: "orders", label: t("account.tabs.orders") as string, icon: Package },
    { key: "addresses", label: t("account.tabs.addresses") as string, icon: MapPin },
    { key: "settings", label: t("account.tabs.settings") as string, icon: Settings },
  ];

  return (
    <main className="min-h-screen bg-weave-cream">
      <PageHero
        title={t("account.title") as string}
        subtitle={t("account.subtitle") as string}
        crumbLabel={t("nav.account") as string}
      />

      <section className="section-padding py-12 sm:py-16">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          <aside>
            <div className="bg-white rounded-2xl border border-weave-border/60 p-3">
              {tabs.map((tb) => (
                <button
                  key={tb.key}
                  onClick={() => setTab(tb.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    tab === tb.key ? "bg-weave-dark text-white" : "text-weave-dark hover:bg-weave-light"
                  }`}
                >
                  <tb.icon className="w-4 h-4" />
                  {tb.label}
                </button>
              ))}
              <div className="border-t border-weave-border/60 mt-2 pt-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors">
                  <LogOut className="w-4 h-4" />
                  {t("account.logoutButton")}
                </button>
              </div>
            </div>
          </aside>

          <div className="bg-white rounded-2xl border border-weave-border/60 p-6 sm:p-8">
            {tab === "profile" && (
              <div>
                <h2 className="font-display text-lg font-semibold text-weave-dark mb-6">
                  {t("account.profileTitle")}
                </h2>
                <div className="space-y-5 max-w-md">
                  <Field label={t("account.nameLabel") as string}>
                    <input
                      value={profile.name}
                      onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-weave-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-weave-accent/20"
                    />
                  </Field>
                  <Field label={t("account.emailLabel") as string}>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-weave-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-weave-accent/20"
                    />
                  </Field>
                  <Field label={t("account.phoneLabel") as string}>
                    <input
                      value={profile.phone}
                      onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-weave-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-weave-accent/20"
                    />
                  </Field>
                  <button className="px-6 py-3 bg-weave-dark text-white rounded-full text-sm font-semibold hover:bg-weave-accent transition-colors">
                    {t("account.saveButton")}
                  </button>
                </div>
              </div>
            )}

            {tab === "orders" && (
              <div>
                <h2 className="font-display text-lg font-semibold text-weave-dark mb-6">
                  {t("account.tabs.orders")}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-start text-weave-muted border-b border-weave-border/60">
                        <th className="py-3 text-start font-medium">{t("account.orderNumber")}</th>
                        <th className="py-3 text-start font-medium">{t("account.orderDate")}</th>
                        <th className="py-3 text-start font-medium">{t("account.orderStatus")}</th>
                        <th className="py-3 text-start font-medium">{t("account.orderTotal")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((o) => (
                        <tr key={o.id} className="border-b border-weave-border/40">
                          <td className="py-3 font-medium text-weave-dark">{o.id}</td>
                          <td className="py-3 text-weave-muted">{o.date}</td>
                          <td className="py-3">
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                o.status === "delivered"
                                  ? "bg-green-50 text-green-600"
                                  : o.status === "shipped"
                                  ? "bg-blue-50 text-blue-600"
                                  : "bg-amber-50 text-amber-600"
                              }`}
                            >
                              {t(`account.statusValues.${o.status}`)}
                            </span>
                          </td>
                          <td className="py-3 text-weave-dark font-medium">${o.total.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {tab === "addresses" && (
              <div>
                <h2 className="font-display text-lg font-semibold text-weave-dark mb-6">
                  {t("account.tabs.addresses")}
                </h2>
                <p className="text-weave-muted text-sm">{t("common.empty")}</p>
              </div>
            )}

            {tab === "settings" && (
              <div>
                <h2 className="font-display text-lg font-semibold text-weave-dark mb-6">
                  {t("account.tabs.settings")}
                </h2>
                <p className="text-weave-muted text-sm">{t("common.empty")}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-weave-muted mb-2">{label}</span>
      {children}
    </label>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={null}>
      <AccountContent />
    </Suspense>
  );
}
