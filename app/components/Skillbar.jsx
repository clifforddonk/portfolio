import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function SkillBar({ skills }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="bg-white p-5 rounded-lg shadow hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{skills.name}</span>
        <span className="text-sm text-gray-500">{skills.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skills.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
