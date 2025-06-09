"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  FaImage,
  FaEye,
  FaSave,
  FaSpinner,
  FaUpload,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

export default function BlogEditor() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.secure_url) {
        setCoverImage(data.secure_url);
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      return alert("Please fill all required fields.");
    }

    const generatedSlug = title.toLowerCase().replace(/\s+/g, "-");

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug: generatedSlug,
        coverImage,
        content,
      }),
    });

    if (res.ok) {
      alert("Blog posted successfully!");
      setTitle("");
      setSlug("");
      setCoverImage("");
      setContent("");
    } else {
      alert("Failed to post blog");
    }
  };

  const removeCoverImage = () => {
    setCoverImage("");
  };

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1
            className={`text-4xl font-bold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            <FaEdit className="inline-block mr-3 text-indigo-600" />
            Create New Post
          </h1>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Share your thoughts with the world
          </p>
        </motion.div>

        {/* Toggle Preview/Edit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex space-x-2">
            <button
              onClick={() => setIsPreview(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                !isPreview
                  ? "bg-indigo-600 text-white shadow-lg"
                  : theme === "dark"
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FaEdit className="inline-block mr-2" />
              Edit
            </button>
            <button
              onClick={() => setIsPreview(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isPreview
                  ? "bg-indigo-600 text-white shadow-lg"
                  : theme === "dark"
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FaEye className="inline-block mr-2" />
              Preview
            </button>
          </div>
        </motion.div>

        {!isPreview ? (
          /* Edit Mode */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-lg shadow-lg p-8 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="space-y-8">
              {/* Title Input */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Post Title *
                </label>
                <input
                  type="text"
                  placeholder="Enter an engaging title for your post..."
                  className={`w-full px-4 py-3 text-lg rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Cover Image Upload */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Cover Image
                </label>

                {!coverImage ? (
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all hover:border-indigo-400 ${
                      theme === "dark"
                        ? "border-gray-600 bg-gray-700/50"
                        : "border-gray-300 bg-gray-50"
                    }`}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-3">
                      <div
                        className={`text-4xl ${
                          theme === "dark" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {uploading ? (
                          <FaSpinner className="animate-spin mx-auto" />
                        ) : (
                          <FaUpload className="mx-auto" />
                        )}
                      </div>
                      <div>
                        <p
                          className={`text-lg font-medium ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {uploading
                            ? "Uploading..."
                            : "Drop your image here or click to browse"}
                        </p>
                        <p
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={coverImage}
                      alt="Cover preview"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <button
                      type="button"
                      onClick={removeCoverImage}
                      className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors shadow-lg"
                    >
                      <FaTrash />
                    </button>
                  </div>
                )}
              </div>

              {/* Content Textarea */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Content *
                </label>
                <textarea
                  placeholder="Start writing your amazing content here..."
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  rows="16"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={uploading}
                className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: uploading ? 1 : 1.02 }}
                whileTap={{ scale: uploading ? 1 : 0.98 }}
              >
                {uploading ? (
                  <>
                    <FaSpinner className="animate-spin inline-block mr-2" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <FaSave className="inline-block mr-2" />
                    Publish Post
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* Preview Mode */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-lg shadow-lg p-8 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="prose prose-lg max-w-none">
              {title && (
                <h1
                  className={`text-4xl font-bold mb-6 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {title}
                </h1>
              )}

              {coverImage && (
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-full h-80 object-cover rounded-lg mb-8 shadow-md"
                />
              )}

              {content ? (
                <div
                  className={`whitespace-pre-wrap leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {content}
                </div>
              ) : (
                <p
                  className={`italic ${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Your content will appear here...
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
