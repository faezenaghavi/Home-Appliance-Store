import CartContent from "./CartContent";

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function CartPage() {
  return <CartContent />;
}