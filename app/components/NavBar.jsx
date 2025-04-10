"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/95 dark:border-b dark:border-indigo-500/20 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      } sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl font-bold ${
            scrolled
              ? "text-indigo-600 dark:text-indigo-300"
              : "text-white dark:text-white"
          } transition-colors`}
        >
          Clifford Donkor
        </motion.h1>

        <nav className="hidden md:flex space-x-8 items-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className={`${
                scrolled
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-white dark:text-white"
              } hover:text-indigo-600 dark:hover:text-indigo-300 font-medium relative overflow-hidden group transition-colors`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-300 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}

          {/* Toggle Button (desktop) - FIXED */}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`ml-4 px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 flex items-center space-x-2 
              ${
                theme === "dark"
                  ? "bg-indigo-500/20 text-white border border-indigo-400/30 hover:bg-indigo-500/30"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 border border-transparent"
              }`}
          >
            {theme === "dark" ? (
              <>
                <span className="text-yellow-300 mr-2">☀️</span>
                <span className="dark:text-indigo-100">Light Mode</span>
              </>
            ) : (
              <>
                <span className="text-indigo-600 mr-2">🌙</span>
                <span className="text-gray-700">Dark Mode</span>
              </>
            )}
          </motion.button>
        </nav>

        {/* Mobile toggle buttons */}
        <div className="flex items-center md:hidden space-x-3">
          {/* Theme Toggle (mobile) - FIXED */}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-indigo-500/20 text-white border border-indigo-400/30 hover:bg-indigo-500/40"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {theme === "dark" ? (
              <span className="text-yellow-300">☀️</span>
            ) : (
              <span className="text-indigo-600">🌙</span>
            )}
          </motion.button>

          {/* Menu Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="z-50 p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                isMenuOpen || !scrolled
                  ? "text-white"
                  : "text-gray-900 dark:text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed inset-0 dark:bg-gray-900/98 bg-indigo-900/95 backdrop-blur-sm flex flex-col items-center justify-center ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
          initial={{ opacity: 0 }}
          animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 to-purple-900/20 dark:from-indigo-900/40 dark:to-gray-900/60"></div>
          <ul className="flex flex-col items-center space-y-8 relative z-10">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 * index,
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white text-2xl font-medium relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-indigo-300 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  </a>
                </motion.li>
              )
            )}
          </ul>

          {/* Mobile menu toggle button at the bottom - FIXED */}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`absolute bottom-20 px-6 py-3 rounded-full font-medium text-sm flex items-center space-x-2 backdrop-blur-sm
              ${
                theme === "dark"
                  ? "bg-indigo-500/30 text-white border border-indigo-400/30"
                  : "bg-white/20 text-white border border-white/20"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {theme === "dark" ? (
              <>
                <span className="text-yellow-300">☀️</span>
                <span className="text-white">Switch to Light Mode</span>
              </>
            ) : (
              <>
                <span className="text-white">🌙</span>
                <span className="text-white">Switch to Dark Mode</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
