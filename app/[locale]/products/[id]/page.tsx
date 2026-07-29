// app/[locale]/products/[id]/page.tsx
import ProductDetailContent from "./ProductDetailContent";
import { getAllCatalogProducts } from "@/app/data/catalog";

export function generateStaticParams() {
  const locales = ["en", "fa"];
  const params = [];
  
  for (const locale of locales) {
    for (const product of getAllCatalogProducts()) {
      params.push({ locale, id: product.id });
    }
  }
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <ProductDetailContent id={id} />;
}