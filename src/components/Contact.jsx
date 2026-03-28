import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./Icons"
import { socialLinks } from "../data"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch("https://formsubmit.co/ajax/keremcerrahogluxd@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      })
      setSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      alert("Mesaj gönderilemedi, lütfen tekrar deneyin.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-dark-800/30" />

      <div ref={ref} className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            İletişim
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Birlikte Çalışalım
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Bir proje fikriniz mi var? Ya da sadece merhaba demek mi istiyorsunuz?
                Formu doldurun, en kısa sürede dönüş yapacağım.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-accent-400/10 flex items-center justify-center text-accent-500">
                  <Mail size={18} />
                </div>
                <a href="mailto:keremcerrahogluxd@gmail.com" className="text-sm hover:text-accent-500 transition-colors">keremcerrahogluxd@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-accent-400/10 flex items-center justify-center text-accent-500">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Türkiye</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-dark-600/50 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-400/30 hover:bg-accent-400/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-dark-600/50 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-400/30 hover:bg-accent-400/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  İsim
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-400/40 focus:ring-1 focus:ring-accent-400/20 transition-all duration-300"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-400/40 focus:ring-1 focus:ring-accent-400/20 transition-all duration-300"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-400/40 focus:ring-1 focus:ring-accent-400/20 transition-all duration-300 resize-none"
                placeholder="Mesajınızı yazın..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-accent-400 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-400/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitted ? (
                <span>Gönderildi ✓</span>
              ) : sending ? (
                <span>Gönderiliyor...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Gönder</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
