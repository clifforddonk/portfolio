import FadeInSection from "./layout/FadeInSection";
import TypewriterEffect from "./layout/TypewriterEffect";
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
                "Turning Ideas Into Products",
                "Code that Grows Businesses",
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
              I build thoughtful digital solutions using modern technologies
              like Next.js and Spring Boot—focused on crafting intuitive,
              responsive, and accessible experiences that help people and
              businesses grow.
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
                Explore Projects
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
            {/* Main profile container with enhanced styling */}
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-0 w-64 h-72 rounded-full p-1 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600"
                    : "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                }`}
              />
              
              {/* Inner container */}
              <div
                className={`relative w-64 h-72 rounded-full p-2 shadow-2xl ${
                  theme === "dark"
                    ? "bg-gray-800"
                    : "bg-white/95 backdrop-blur-sm"
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src="/logo/hero.jpg"
                    alt="Clifford Donkor"
                    className="object-cover w-full h-full"
                  />
                  
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Enhanced floating decorative elements */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-6 -right-6 w-14 h-14 rounded-full shadow-lg ${
                theme === "dark"
                  ? "bg-gradient-to-r from-amber-400 to-orange-500"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500"
              }`}
            />
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute -bottom-8 -left-8 w-18 h-18 rounded-full shadow-lg ${
                theme === "dark"
                  ? "bg-gradient-to-r from-orange-500 to-red-500"
                  : "bg-gradient-to-r from-orange-500 to-pink-500"
              }`}
            />
            
            {/* Additional small floating elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-20 -left-4 w-8 h-8 rounded-full ${
                theme === "dark"
                  ? "bg-amber-300/60"
                  : "bg-yellow-300/80"
              }`}
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className={`absolute bottom-20 -right-2 w-6 h-6 rounded-full ${
                theme === "dark"
                  ? "bg-orange-400/50"
                  : "bg-orange-400/70"
              }`}
            />

            {/* Subtle glow effect */}
            <div className={`absolute inset-0 w-64 h-72 rounded-full blur-xl opacity-20 ${
              theme === "dark"
                ? "bg-gradient-to-r from-amber-400 to-orange-500"
                : "bg-gradient-to-r from-yellow-400 to-orange-500"
            }`} />
          </motion.div>
        </div>
      </div>
    </FadeInSection>
  );
}