import { motion } from "framer-motion";
export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                  className="bg-white/20 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex space-x-3">
          {project.link && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
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
              className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 transition"
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
