"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import PageHero from "@/app/components/PageHero";

export default function ContactPage() {
  const { t, dictionary } = useI18n();
  const subjects = dictionary.contact.subjects;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infoItems = [
    { icon: MapPin, label: t("contact.address") as string },
    { icon: Phone, label: t("contact.phone") as string },
    { icon: Mail, label: t("contact.email") as string },
    { icon: Clock, label: t("contact.hours") as string },
  ];

  return (
    <main className="min-h-screen bg-weave-cream">
      <PageHero
        eyebrow={t("contact.eyebrow") as string}
        title={t("contact.title") as string}
        subtitle={t("contact.subtitle") as string}
        crumbLabel={t("nav.support") as string}
      />

      <section className="section-padding py-16 sm:py-24">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold text-weave-dark mb-6">
              {t("contact.infoTitle")}
            </h2>
            <div className="space-y-5">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-weave-border/60">
                  <div className="w-10 h-10 rounded-xl bg-weave-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-weave-accent" />
                  </div>
                  <p className="text-sm text-weave-dark pt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-weave-border/60 p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-weave-dark mb-6">
                {t("contact.formTitle")}
              </h2>

              {submitted ? (
                <div className="text-center py-14">
                  <CheckCircle2 className="w-14 h-14 text-weave-accent mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-weave-dark mb-2">
                    {t("contact.successTitle")}
                  </h3>
                  <p className="text-weave-muted text-sm">{t("contact.successBody")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t("contact.nameLabel") as string}>
                      <input
                        required
                        value={form.name}
                        onChange={handleChange("name")}
                        placeholder={t("contact.namePlaceholder") as string}
                        className="input-base"
                      />
                    </Field>
                    <Field label={t("contact.emailLabel") as string}>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={handleChange("email")}
                        placeholder={t("contact.emailPlaceholder") as string}
                        className="input-base"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t("contact.phoneLabel") as string}>
                      <input
                        value={form.phone}
                        onChange={handleChange("phone")}
                        placeholder={t("contact.phonePlaceholder") as string}
                        className="input-base"
                      />
                    </Field>
                    <Field label={t("contact.subjectLabel") as string}>
                      <select
                        required
                        value={form.subject}
                        onChange={handleChange("subject")}
                        className="input-base"
                      >
                        <option value="" disabled>
                          {t("contact.subjectPlaceholder")}
                        </option>
                        {Array.isArray(subjects) &&
                          subjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                      </select>
                    </Field>
                  </div>

                  <Field label={t("contact.messageLabel") as string}>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder={t("contact.messagePlaceholder") as string}
                      className="input-base resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-weave-dark text-white rounded-full text-sm font-semibold hover:bg-weave-accent transition-colors"
                  >
                    {t("contact.submitButton")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .input-base {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--color-light, #f5f0eb);
          border-radius: 0.75rem;
          font-size: 0.875rem;
          color: var(--color-dark, #1a1a1a);
          outline: none;
          border: 1px solid transparent;
          transition: all 0.2s;
        }
        .input-base:focus {
          border-color: var(--color-accent, #808080);
        }
      `}</style>
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
