import BlogContent from "./BlogContent";

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function BlogPage() {
  return <BlogContent />;
}