"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactForm() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`container mx-auto px-4 py-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
      id="contact"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold text-center mb-12 ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        Get In Touch
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300"
                }`}
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300"
                }`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300"
                }`}
                placeholder="Your message here..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={`px-6 py-3 rounded-md font-medium transition w-full ${
                theme === "dark"
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className={`p-8 rounded-lg shadow-md h-full ${
              theme === "dark" ? "bg-gray-800 shadow-gray-900" : "bg-gray-50"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-md mr-4 ${
                    theme === "dark" ? "bg-indigo-900/50" : "bg-indigo-100"
                  }`}
                >
                  <FaEnvelope
                    className={`text-xl ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Email
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    clifforddonk@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`p-3 rounded-md mr-4 ${
                    theme === "dark" ? "bg-indigo-900/50" : "bg-indigo-100"
                  }`}
                >
                  <FaPhone
                    className={`text-xl ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Phone
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    +233 535 563 779
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`p-3 rounded-md mr-4 ${
                    theme === "dark" ? "bg-indigo-900/50" : "bg-indigo-100"
                  }`}
                >
                  <FaMapMarkerAlt
                    className={`text-xl ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Location
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3
                className={`text-xl font-semibold mb-5 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Follow Me
              </h3>
              <div className="flex space-x-5">
                <motion.a
                  href="https://linkedin.com/in/clifford-donkor-1a2b3c"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  className={`text-2xl ${
                    theme === "dark"
                      ? "text-indigo-400 hover:text-indigo-300"
                      : "text-indigo-600 hover:text-indigo-500"
                  }`}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  href="https://github.com/clifforddonk"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  className={`text-2xl ${
                    theme === "dark"
                      ? "text-indigo-400 hover:text-indigo-300"
                      : "text-indigo-600 hover:text-indigo-500"
                  }`}
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
