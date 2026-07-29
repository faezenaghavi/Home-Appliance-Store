import type { Metadata } from "next";
import "./globals.css";

import { I18nProvider } from "@/app/i18n/Provider";
import { getDictionary } from "@/app/i18n/dictionary";
import { defaultLocale } from "@/app/i18n/config";
import { ToastProvider } from "@/app/context/Toastcontext";
import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";
import { AccountProvider } from "@/app/context/AccountContext";
import { inter, playfair, vazirmatn } from "@/app/fonts";

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
    <html
      lang={defaultLocale}
      dir="rtl"
      suppressHydrationWarning
      className={`splash-pending ${inter.variable} ${playfair.variable} ${vazirmatn.variable}`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html.splash-pending,html.splash-pending body{background:#3a3a3a!important;overflow:hidden}html.splash-pending .splash-app-shell{visibility:hidden!important;pointer-events:none}",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('splash-pending');",
          }}
        />
      </head>
      <body className="antialiased">
        <I18nProvider initialLocale={defaultLocale} initialDictionary={dictionary}>
          <CartProvider>
            <WishlistProvider>
              <AccountProvider>
                <ToastProvider>
                  {children}
                </ToastProvider>
              </AccountProvider>
            </WishlistProvider>
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}