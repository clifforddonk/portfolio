"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";
import { FaLaptopCode, FaServer, FaGlobe, FaLayerGroup } from "react-icons/fa";

const ServiceCard = ({ icon, title, description }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`rounded-lg p-6 transition-all ${
        theme === "dark"
          ? "bg-gray-800/80 hover:bg-gray-800"
          : "bg-white hover:bg-gray-50"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className={`text-3xl mb-4 inline-block ${
          theme === "dark" ? "text-cyan-400" : "text-cyan-500"
        }`}
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3
        className={`text-xl font-medium mb-2 ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h3>
      <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
        {description}
      </p>
    </motion.div>
  );
};

export default function WhatIDo() {
  const { theme } = useTheme();

  const services = [
    {
      icon: (
        <span className="flex items-center justify-center w-12 h-12 rounded-md text-indigo-500 dark:text-indigo-300">
          <FaLaptopCode className="w-8 h-8" style={{ color: "#61DBFB" }} />
        </span>
      ),
      title: "Frontend Development",
      description:
        "Building fast, responsive, and accessible web applications with attention to user experience.",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-12 h-12 rounded-md text-green-600 dark:text-green-400">
          <FaServer className="w-8 h-8" style={{ color: "#61DBFB" }} />
        </span>
      ),
      title: "Backend Development",
      description:
        "Building efficient server-side solutions with scalable architecture and reliable performance.",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-12 h-12 rounded-md text-blue-500 dark:text-blue-300">
          <FaGlobe className="w-8 h-8" style={{ color: "#61DBFB" }} />
        </span>
      ),
      title: "Web Development",
      description:
        "Creating responsive, user-friendly websites and web applications with modern technologies.",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-12 h-12 rounded-md text-purple-500 dark:text-purple-300">
          <FaLayerGroup className="w-8 h-8" style={{ color: "#61DBFB" }} />
        </span>
      ),
      title: "Full-Stack Development",
      description:
        "Building complete web applications from front-end interfaces to back-end systems and databases.",
    },
  ];

  return (
    <section
      className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            What I Do
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p
            className={`max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I specialize in creating exceptional digital experiences through
            various development disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
