import FadeInSection from "./FadeInSection";
import TypewriterEffect from "./TypewriterEffect";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <FadeInSection
      id="home"
      className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-300">Clifford Donkor</span>
            </h2>
            <TypewriterEffect
              texts={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Problem Solver",
              ]}
              className="text-2xl md:text-3xl mb-6"
            />
            <p className="text-lg mb-8 max-w-lg">
              I build exceptional digital experiences with modern technologies,
              focusing on creating intuitive and responsive applications.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white  hover:text-indigo-600 hover:bg-opacity-10 transition"
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
            <div className="w-64 h-72 rounded-full bg-white/20 backdrop-blur-sm p-2 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/passport pic.jpg"
                  alt="Clifford Donkor"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-indigo-300 rounded-full opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </FadeInSection>
  );
}
