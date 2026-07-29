// app/[locale]/layout.tsx
import { I18nProvider } from "@/app/i18n/Provider";
import { getDictionary } from "@/app/i18n/dictionary";
import { defaultLocale, Locale } from "@/app/i18n/config"; // اضافه کردن نوع Locale
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import AppLoader from "@/app/components/AppLoader";

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "fa" }
  ];
}

export const dynamicParams = true;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (localeParam || defaultLocale) as Locale;
  
  const dictionary = await getDictionary(locale);

  return (
    // حالا locale از نوع Locale است و ارور نمی‌دهد
    <I18nProvider initialLocale={locale} initialDictionary={dictionary}>
      <AppLoader>
        <Navbar />
        <main className=" min-h-screen bg-[#faf8f5]">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </AppLoader>
    </I18nProvider>
  );
}