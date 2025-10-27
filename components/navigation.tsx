"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-background/80 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")}>
          <motion.span
            className="text-xl font-bold tracking-tight cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            HOMEBREW ONLINE
          </motion.span>
        </button>

        <div className="flex items-center gap-8">
          <button onClick={() => scrollToSection("artists")}>
            <motion.span
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ARTISTS
            </motion.span>
          </button>

          <button onClick={() => scrollToSection("contact")}>
            <motion.span
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              CONTACT
            </motion.span>
          </button>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
