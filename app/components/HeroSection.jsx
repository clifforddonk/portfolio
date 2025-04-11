import FadeInSection from "./FadeInSection";
import TypewriterEffect from "./TypewriterEffect";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <FadeInSection
      id="home"
      className={`py-20 ${
        theme === "dark"
          ? "bg-gradient-to-r from-indigo-900 to-gray-900 dark:text-white"
          : "bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
              <span className={`${theme === "dark" && "text-indigo-300"}`}>
                {" "}
                Hi, I'm{" "}
              </span>
              <span
                className={`${
                  theme === "dark" ? "text-indigo-300" : "text-yellow-300"
                }`}
              >
                Clifford Donkor
              </span>
            </h2>
            <TypewriterEffect
              texts={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Problem Solver",
              ]}
              className={`text-2xl md:text-3xl mb-6 ${
                theme === "dark" ? "text-indigo-200" : "text-white"
              }`}
            />
            <p
              className={`text-lg mb-8 max-w-lg ${
                theme === "dark" ? "text-gray-300" : "text-white"
              }`}
            >
              I build exceptional digital experiences with modern technologies,
              focusing on creating intuitive and responsive applications.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  theme === "dark"
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "bg-white text-indigo-600 hover:bg-opacity-90"
                }`}
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  theme === "dark"
                    ? "border border-indigo-400 text-indigo-200 hover:bg-indigo-900/50"
                    : "border border-white text-white hover:bg-white hover:text-indigo-600 hover:bg-opacity-10"
                }`}
              >
                View Work
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className={`w-64 h-72 rounded-full p-2 shadow-xl ${
                theme === "dark"
                  ? "bg-indigo-900/30 ring-1 ring-indigo-500/20"
                  : "bg-white/20 backdrop-blur-sm"
              }`}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/passport pic.jpg"
                  alt="Clifford Donkor"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Floating decorative elements with dark mode support */}
            <div
              className={`absolute -top-4 -right-4 w-12 h-12 rounded-full ${
                theme === "dark"
                  ? "bg-indigo-400 opacity-40"
                  : "bg-yellow-300 opacity-70"
              }`}
            ></div>
            <div
              className={`absolute -bottom-6 -left-6 w-16 h-16 rounded-full ${
                theme === "dark"
                  ? "bg-purple-500 opacity-30"
                  : "bg-indigo-300 opacity-60"
              }`}
            ></div>
          </motion.div>
        </div>
      </div>
    </FadeInSection>
  );
}
