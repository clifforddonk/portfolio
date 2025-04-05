import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      } 
        sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl font-bold ${
            scrolled ? "text-indigo-600" : "text-white"
          }`}
        >
          Clifford Donkor
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ y: -2 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    scrolled ? "text-gray-800" : "text-white"
                  } hover:text-indigo-600 transition-colors`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              isMenuOpen || !scrolled ? "text-white" : "text-gray-900"
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
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed inset-0 bg-indigo-900/95 flex flex-col items-center justify-center ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
          initial={{ opacity: 0 }}
          animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay:
                    0.1 *
                    ["Home", "About", "Skills", "Projects", "Contact"].indexOf(
                      item
                    ),
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-2xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
