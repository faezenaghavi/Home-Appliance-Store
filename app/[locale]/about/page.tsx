import AboutContent from "./AboutContent";

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function AboutPage() {
  return <AboutContent />;
}