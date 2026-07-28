// app/[locale]/products/[id]/page.tsx
import ProductDetailContent from "./ProductDetailContent";
import { appliances } from "@/app/data/appliances";

export function generateStaticParams() {
  const locales = ["en", "fa"];
  const params = [];
  
  for (const locale of locales) {
    for (const product of appliances) {
      params.push({ locale, id: product.id });
    }
  }
  return params;
}

export default function Page({ params }: { params: { locale: string; id: string } }) {
  return <ProductDetailContent id={params.id} />;
}