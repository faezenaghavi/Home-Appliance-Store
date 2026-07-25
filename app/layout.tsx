import type { Metadata } from "next";
import "./globals.css";

import { I18nProvider } from "@/app/i18n/Provider";
import { getDictionary } from "@/app/i18n/dictionary";
import { defaultLocale } from "@/app/i18n/config";
import { ToastProvider } from "@/app/context/Toastcontext";
import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";

export const metadata: Metadata = {
  title: {
    default: "Novira | Luxury Home Appliances",
    template: "%s | Novira",
  },
  description:
    "Novira crafts premium electronic home appliances — air purifiers, humidifiers, smart-home devices and kitchen tools engineered for quiet, precise, everyday luxury.",
  metadataBase: new URL("https://novira.example.com"),
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dictionary = await getDictionary(defaultLocale);

  return (
    <html lang={defaultLocale} dir="rtl" suppressHydrationWarning>
      <body className="antialiased">
        <I18nProvider initialLocale={defaultLocale} initialDictionary={dictionary}>
          <CartProvider>
            <WishlistProvider>
              <ToastProvider>
                {children}
              </ToastProvider>
            </WishlistProvider>
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}