"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const artists = [
  {
    name: "8485",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8485-profile-plague-town-gen-f-interview-2021-v7TTCe6oraD4iwxBd1HuCUkc6SpG7u.webp",
    role: "Artist",
  },
  {
    name: "brennan jones",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e839af35acd5283d893cfdf82e95d8ea-QE1wj6NoVFT54G0shP0SBhNfocbUzk.webp",
    role: "Artist",
  },
  {
    name: "tenkay",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tenkay-Shine-Back-5N4Rz4IHaNZ1nzNOfYBYz0m8cpBFaw.webp",
    role: "Artist",
  },
]

export default function Artists() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
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
          ARTISTS
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3 + index * 0.1,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative aspect-[3/4] overflow-hidden bg-muted/20 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="w-full h-full"
                >
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                animate={{
                  x: hoveredIndex === index ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2 className="text-2xl font-bold mb-1 uppercase tracking-tight">{artist.name}</h2>
                <p className="text-muted-foreground">{artist.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
