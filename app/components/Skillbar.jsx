"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { useTheme } from "next-themes";

export default function SkillBar({ skills }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  // Get appropriate icon based on skill name
  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes("react")) return "/react.png";
    if (name.includes("javascript")) return "/js.png";
    if (name.includes("git")) return "/git.png";
    if (name.includes("next")) return "/next.png";
    if (name.includes("rest")) return "/rest.png";
    if (name.includes("sql")) return "/sql.png";
    if (name.includes("spring")) return "/spring.png";
    if (name.includes("mongo")) return "/mongo.png";

    return "⭐"; // Default icon
  };

  // Calculate level category
  const getLevelCategory = (level) => {
    if (level < 30) return "Beginner";
    if (level < 60) return "Intermediate";
    if (level < 85) return "Advanced";
    return "Expert";
  };

  return (
    <motion.div
      ref={ref}
      className={`p-5 rounded-lg transition-all relative ${
        theme === "dark"
          ? "bg-gray-800 shadow-lg border border-gray-700"
          : "bg-white shadow-md border border-gray-100"
      }`}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300 },
      }}
      onHoverStart={() => setShowTooltip(true)}
      onHoverEnd={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          className={`absolute -top-16 left-0 right-0 mx-auto w-48 p-2 rounded-md text-center text-sm z-10 ${
            theme === "dark"
              ? "bg-gray-700 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {getLevelCategory(skills.level)} level •{" "}
          {skills.experience || "2+ years experience"}
        </motion.div>
      )}

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img
            src={getSkillIcon(skills.name)}
            className="text-xl mr-2 w-10 h-10"
          />
          <span
            className={`font-medium ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {skills.name}
          </span>
        </div>
        <span
          className={`text-sm font-mono ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {skills.level}%
        </span>
      </div>

      {/* Progress bar container */}
      <div
        className={`w-full rounded-full h-3 relative ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        {/* Marker lines for progress reference */}
        <div className="absolute inset-0 flex justify-between px-1">
          {[25, 50, 75].map((mark) => (
            <div
              key={mark}
              className={`w-px h-3 ${
                theme === "dark" ? "bg-gray-600" : "bg-gray-300"
              }`}
              style={{ left: `${mark}%` }}
            />
          ))}
        </div>

        {/* Animated progress bar */}
        <motion.div
          className={`h-3 rounded-full ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
          }`}
          initial={{ width: 0 }}
          animate={
            isInView
              ? {
                  width: `${skills.level}%`,
                  boxShadow:
                    theme === "dark"
                      ? "0 0 10px rgba(165, 105, 255, 0.5)"
                      : "0 0 10px rgba(99, 102, 241, 0.5)",
                }
              : { width: 0 }
          }
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {/* Pulse animation */}
          {skills.level > 70 && (
            <motion.div
              className={`absolute right-0 top-0 h-3 w-3 rounded-full ${
                theme === "dark" ? "bg-pink-400" : "bg-violet-400"
              }`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Skill level indicators */}
      <div className="flex justify-between mt-1 px-1">
        <span
          className={`text-xs ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Beginner
        </span>
        <span
          className={`text-xs ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Expert
        </span>
      </div>
    </motion.div>
  );
}
