"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl w-full">
        <motion.h1
          className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.span
            className="block"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
          >
            THE ARTISTS
          </motion.span>
          <motion.span
            className="block text-muted-foreground/60"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5,
            }}
          >
            OF THE
          </motion.span>
          <motion.span
            className="block text-muted-foreground/30"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
          >
            FUTURE
          </motion.span>
        </motion.h1>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 1,
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="text-muted-foreground/50 text-sm"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
