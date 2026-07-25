import { notFound } from "next/navigation";
import { I18nProvider } from "@/app/i18n/Provider";
import { getDictionary } from "@/app/i18n/dictionary";
import { locales, Locale } from "@/app/i18n/config";
import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale as Locale);

  return (
    <I18nProvider initialLocale={locale as Locale} initialDictionary={dictionary}>
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          {children}
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </I18nProvider>
  );
}
