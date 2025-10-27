"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
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
        <Link href="/">
          <motion.span
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            HOMEBREW ONLINE
          </motion.span>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/artists">
            <motion.span
              className={`text-lg font-medium transition-colors ${
                pathname === "/artists" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ARTISTS
            </motion.span>
          </Link>

          <Link href="/contact">
            <motion.span
              className={`text-lg font-medium transition-colors ${
                pathname === "/contact" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              CONTACT
            </motion.span>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
