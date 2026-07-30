import BlogPostContent from "../BlogPostContent";
import { blogPosts } from "@/app/data/blogPosts";

export function generateStaticParams() {
  return ["fa", "en"].flatMap((locale) =>
    blogPosts.map((post) => ({ locale, id: post.id }))
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return <BlogPostContent id={id} />;
}
