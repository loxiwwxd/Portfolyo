import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User, Code, Cpu } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cards = [
    {
      icon: <Code size={24} />,
      title: "Yazılım Geliştirme",
      text: "C#, Python ve Java dillerinde uygulama geliştirme deneyimim var.",
    },
    {
      icon: <Cpu size={24} />,
      title: "Donanım & Ağ",
      text: "Bilgisayar donanımı ve sunucu kurulumu konularında pratik bilgi ve deneyime sahibim.",
    },
    {
      icon: <User size={24} />,
      title: "Sürekli Öğrenme",
      text: "Yeni teknolojileri takip ediyor, projeler üreterek kendimi sürekli geliştiriyorum.",
    },
  ]

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hakkımda
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Full stack developerım.
          Backend'den frontend'e kadar geniş bir yelpazede çalışıyorum.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group relative p-8 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-accent-400/20 transition-all duration-500 hover:bg-dark-700/50"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent-400/10 text-accent-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
