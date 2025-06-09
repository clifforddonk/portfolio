"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaSearch,
  FaSpinner,
  FaBookOpen,
  FaEdit,
} from "react-icons/fa";

export default function BlogPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content?.replace(/<[^>]*>/g, "").split(" ").length || 0;
    return Math.ceil(words / wordsPerMinute);
  };

  if (!mounted) return null;

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="text-center">
          <FaSpinner
            className={`text-4xl animate-spin mb-4 mx-auto ${
              theme === "dark" ? "text-indigo-400" : "text-indigo-600"
            }`}
          />
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Loading blog posts...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto px-4 pt-16 pb-8"
      >
        <div className="text-center mb-8">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            My <span className="text-indigo-600">Blog</span>
          </h1>
          <p
            className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Thoughts and insights on web development and technology
          </p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <FaSearch
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Blog Posts Feed */}
      <div className="max-w-2xl mx-auto px-4 pb-20">
        {filteredBlogs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-16"
          >
            <div
              className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                theme === "dark" ? "bg-indigo-900/50" : "bg-indigo-100"
              }`}
            >
              <FaBookOpen
                className={`text-2xl ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {searchTerm ? "No posts found" : "No posts yet"}
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {searchTerm
                ? "Try different search terms"
                : "Check back soon for new content!"}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Clear Search
              </button>
            )}
          </motion.div>
        ) : (
          <div className="space-y-6">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${blog.slug}`} className="group block">
                  <article
                    className={`rounded-lg border p-6 transition-all duration-200 hover:shadow-lg ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                        : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    {/* Header with date and read time */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div
                        className={`flex items-center ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <FaCalendarAlt className="mr-2" />
                        {formatDate(blog.createdAt)}
                      </div>
                      <div
                        className={`flex items-center ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
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
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        Clifford Donkor
                      </div>
                    </div>

                    {/* Title */}
                    <h2
                      className={`text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors duration-200 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {blog.title}
                    </h2>

                    {/* Content Preview */}
                    <p
                      className={`mb-4 leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {blog.content?.replace(/<[^>]*>/g, "").substring(0, 200)}
                      {blog.content?.length > 200 && "..."}
                    </p>

                    {/* Cover Image */}
                    {blog.coverImage && (
                      <div className="mb-4">
                        <img
                          src={blog.coverImage}
                          alt={blog.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {/* Read More Link */}
                    <div className="flex items-center text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200">
                      <span className="font-medium">Read full post</span>
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Create Post Button */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          href="/blog/editor"
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center w-14 h-14"
        >
          <FaEdit className="text-xl" />
        </Link>
      </motion.div> */}
    </div>
  );
}
