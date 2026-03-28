import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "./Icons"

export default function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-2xl bg-dark-800/50 border border-white/5 overflow-hidden hover:border-accent-400/20 transition-all duration-500"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 via-accent-500 to-electric-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-white text-xl font-bold group-hover:text-accent-500 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent-500 transition-colors duration-200"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-accent-400/8 text-accent-500 border border-accent-400/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
