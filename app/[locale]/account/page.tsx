import { Suspense } from "react";
import AccountContent from "./AccountContent";

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f5] flex items-center justify-center text-[#8a8577]">Loading...</div>}>
      <AccountContent />
    </Suspense>
  );
}