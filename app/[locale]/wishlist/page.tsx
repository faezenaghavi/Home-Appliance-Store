import WishlistContent from "./WishlistContent";

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function WishlistPage() {
  return <WishlistContent />;
}