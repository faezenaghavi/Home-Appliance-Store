import { Inter, Playfair_Display, Vazirmatn } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
