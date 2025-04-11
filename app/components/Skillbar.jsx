"use client";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function SkillBar({ skills }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { theme } = useTheme();

  return (
    <motion.div
      ref={ref}
      className={`p-5 rounded-lg transition-shadow ${
        theme === "dark"
          ? "bg-gray-800 shadow-gray-900 hover:shadow-gray-900/70"
          : "bg-white shadow hover:shadow-md"
      }`}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between mb-2">
        <span
          className={`font-medium ${
            theme === "dark" ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {skills.name}
        </span>
        <span
          className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {skills.level}%
        </span>
      </div>
      <div
        className={`w-full rounded-full h-2.5 ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <motion.div
          className={`h-2.5 rounded-full ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-500 to-purple-600"
              : "bg-gradient-to-r from-indigo-600 to-blue-500"
          }`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skills.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
