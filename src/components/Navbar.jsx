import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navLinks } from "../data"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const touchedRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      if (atBottom) {
        setActiveSection(sections[sections.length - 1])
        return
      }
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigateTo = useCallback((href) => {
    setIsOpen(false)
    setActiveSection(href.replace("#", ""))
    const el = document.querySelector(href)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [])

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault()
    if (touchedRef.current) {
      touchedRef.current = false
      return
    }
    navigateTo(href)
  }, [navigateTo])

  const handleLinkTouch = useCallback((e, href) => {
    e.preventDefault()
    touchedRef.current = true
    navigateTo(href)
  }, [navigateTo])

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleToggleClick = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (touchedRef.current) {
      touchedRef.current = false
      return
    }
    toggleMenu()
  }, [toggleMenu])

  const handleToggleTouch = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    touchedRef.current = true
    toggleMenu()
  }, [toggleMenu])

  const touchStyle = { touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/80 backdrop-blur-xl shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          onTouchEnd={(e) => handleLinkTouch(e, "#hero")}
          className="text-xl font-bold tracking-tight cursor-pointer select-none"
          style={touchStyle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-accent-500">{"<"}</span>
          <span className="text-white">Kerem</span>
          <span className="text-accent-500">{" />"}</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-accent-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-accent-400/10 rounded-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={handleToggleClick}
          onTouchEnd={handleToggleTouch}
          className="md:hidden text-gray-400 hover:text-white transition-colors p-3 -mr-2 cursor-pointer select-none"
          style={touchStyle}
          aria-label="Menü"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  onTouchEnd={(e) => handleLinkTouch(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={touchStyle}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer select-none ${
                    activeSection === link.href.replace("#", "")
                      ? "text-accent-500 bg-accent-400/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

