"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-16 tracking-tight"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
        >
          CONTACT
        </motion.h1>

        <motion.div className="space-y-8">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
            whileHover={{ x: 10 }}
            className="group"
          >
            <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">General Inquiries</p>
            <a
              href="mailto:hello@homebrewed.online"
              className="text-3xl md:text-5xl font-bold hover:text-muted-foreground transition-colors"
            >
              hello@homebrewed.online
            </a>
          </motion.div>

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
            whileHover={{ x: 10 }}
            className="group"
          >
            <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">Artist Management</p>
            <a
              href="mailto:artists@homebrewed.online"
              className="text-3xl md:text-5xl font-bold hover:text-muted-foreground transition-colors"
            >
              artists@homebrewed.online
            </a>
          </motion.div>

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ x: 10 }}
            className="group"
          >
            <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">Press</p>
            <a
              href="mailto:press@homebrewed.online"
              className="text-3xl md:text-5xl font-bold hover:text-muted-foreground transition-colors"
            >
              press@homebrewed.online
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  )
}
