import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { skills } from "../data"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-dark-800/30" />

      <div ref={ref} className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Yetenekler
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="p-6 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-accent-400/15 transition-all duration-500"
            >
              <h3 className="text-white font-semibold text-lg mb-6 pb-3 border-b border-white/5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + gi * 0.1 + si * 0.06 }}
                    className="px-4 py-2 rounded-xl bg-accent-400/8 border border-accent-400/15 text-accent-500 text-sm font-medium hover:bg-accent-400/15 hover:border-accent-400/30 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
