import CheckoutContent from "./CheckoutContent";

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function CheckoutPage() {
  return <CheckoutContent />;
}