import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";
import BlogPostClient from "@/app/components/BlogPostClient";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  await dbConnect();

  const blog = await Blog.findOne({ slug });
  return {
    title: blog?.title || "Blog Post",
    description:
      blog?.content?.replace(/<[^>]*>/g, "").substring(0, 160) ||
      "Read this blog post",
  };
}

export default async function BlogPost({ params }) {
  const slug = params.slug;
  await dbConnect();

  const blog = await Blog.findOne({ slug });
  if (!blog) return notFound();

  const blogData = {
    _id: blog._id.toString(),
    title: blog.title,
    content: blog.content,
    coverImage: blog.coverImage,
    createdAt: blog.createdAt.toISOString(),
    slug: blog.slug,
  };

  return <BlogPostClient blog={blogData} />;
}
