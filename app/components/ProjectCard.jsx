import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function ProjectCard({ project }) {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white"
      }`}
    >
      <div className="h-56 overflow-hidden relative">
        <img
          src={project.image || "/project-placeholder.jpg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 rounded-full text-white ${
                    theme === "dark"
                      ? "bg-indigo-900/60 backdrop-blur-sm"
                      : "bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3
          className={`font-bold text-xl mb-2 ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mb-4 line-clamp-3 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>
        <div className="flex space-x-3">
          {project.link && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                theme === "dark"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </motion.a>
          )}
          {project.code && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.code}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                theme === "dark"
                  ? "border border-indigo-400 text-indigo-300 hover:bg-indigo-900/30"
                  : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
