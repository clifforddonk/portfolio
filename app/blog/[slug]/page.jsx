import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";
import BlogPostClient from "@/app/components/BlogPostClient";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
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
  const slug = (await params).slug;
  await dbConnect();
  const blog = await Blog.findOne({ slug });

  if (!blog) return notFound();

  // Convert MongoDB document to plain object
  const blogData = {
    _id: blog._id.toString(),
    title: blog.title,
    content: blog.content,
    coverImage: blog.coverImage,
    createdAt: blog.createdAt.toISOString(),
    slug: blog.slug,
  };

  return <BlogPostClient blog={blogData} />;

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/blog"
          className={`inline-flex items-center transition-colors duration-300 group ${
            theme === "dark"
              ? "text-indigo-400 hover:text-indigo-300"
              : "text-indigo-600 hover:text-indigo-500"
          }`}
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-12">
        <div className="text-center mb-12">
          {/* Category Badge */}
          <span
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
              theme === "dark"
                ? "bg-indigo-900/50 text-indigo-300 border border-indigo-700"
                : "bg-indigo-100 text-indigo-700 border border-indigo-200"
            }`}
          >
            Article
          </span>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div
            className={`flex items-center justify-center flex-wrap gap-6 mb-12 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div
              className={`w-1 h-1 rounded-full ${
                theme === "dark" ? "bg-gray-600" : "bg-gray-400"
              }`}
            ></div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Clifford Donkor
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="relative overflow-hidden rounded-2xl shadow-lg mb-16">
            <img
              src={blog.coverImage}
              alt="cover"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        )}
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <article
          className={`rounded-2xl p-8 md:p-12 shadow-sm ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div
            className={`prose prose-lg max-w-none ${
              theme === "dark"
                ? `prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                   prose-h1:text-3xl prose-h1:mb-6 prose-h1:text-white
                   prose-h2:text-2xl prose-h2:mb-5 prose-h2:mt-8 prose-h2:text-white
                   prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-6 prose-h3:text-white
                   prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                   prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300 hover:prose-a:underline prose-a:font-medium
                   prose-strong:text-white prose-strong:font-semibold
                   prose-em:text-gray-300
                   prose-code:text-indigo-300 prose-code:bg-indigo-900/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-medium
                   prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-600 prose-pre:rounded-xl prose-pre:p-4
                   prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-900/20 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-300
                   prose-ul:text-gray-300 prose-ol:text-gray-300
                   prose-li:mb-2 prose-li:text-lg
                   prose-img:rounded-xl prose-img:shadow-md
                   prose-hr:border-gray-600 prose-hr:my-8`
                : `prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                   prose-h1:text-3xl prose-h1:mb-6 prose-h1:text-gray-900
                   prose-h2:text-2xl prose-h2:mb-5 prose-h2:mt-8 prose-h2:text-gray-900
                   prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-6 prose-h3:text-gray-900
                   prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                   prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:text-indigo-500 hover:prose-a:underline prose-a:font-medium
                   prose-strong:text-gray-900 prose-strong:font-semibold
                   prose-em:text-gray-700
                   prose-code:text-indigo-700 prose-code:bg-indigo-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-medium
                   prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-xl prose-pre:p-4
                   prose-blockquote:border-l-4 prose-blockquote:border-indigo-400 prose-blockquote:bg-indigo-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-700
                   prose-ul:text-gray-700 prose-ol:text-gray-700
                   prose-li:mb-2 prose-li:text-lg
                   prose-img:rounded-xl prose-img:shadow-md
                   prose-hr:border-gray-200 prose-hr:my-8`
            }`}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        {/* Share Section */}
        <div className="mt-16 text-center">
          <div
            className={`rounded-2xl p-8 inline-block max-w-md mx-auto ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Enjoyed this article?
            </h3>
            <p
              className={`mb-6 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Share it with others or connect with me
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm ${
                  theme === "dark"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Share
              </button>
              <Link
                href="/contact"
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm ${
                  theme === "dark"
                    ? "bg-gray-700 border border-gray-600 text-gray-300 hover:bg-gray-600"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                  />
                </svg>
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
