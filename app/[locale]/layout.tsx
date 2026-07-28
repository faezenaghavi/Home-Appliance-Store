// app/[locale]/layout.tsx
import { I18nProvider } from "@/app/i18n/Provider";
import { getDictionary } from "@/app/i18n/dictionary";
import { defaultLocale, Locale } from "@/app/i18n/config"; // اضافه کردن نوع Locale
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "fa" }
  ];
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // تبدیل نوع string به Locale
  const locale = (params.locale || defaultLocale) as Locale;
  
  const dictionary = await getDictionary(locale);

  return (
    // حالا locale از نوع Locale است و ارور نمی‌دهد
    <I18nProvider initialLocale={locale} initialDictionary={dictionary}>
      <Navbar cartCount={0} wishlistCount={0} />
      <main className="pt-20 sm:pt-24 min-h-screen bg-[#faf8f5]">
        {children}
      </main>
      <Footer />
    </I18nProvider>
  );
}