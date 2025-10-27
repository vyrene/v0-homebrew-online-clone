"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

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

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
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
          <motion.h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tight">
            <motion.span
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: isLoaded ? 0 : "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 0.6,
                }}
              >
                THE ARTISTS
              </motion.span>
            </motion.span>

            <motion.span
              className="block overflow-hidden text-muted-foreground/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: isLoaded ? 0 : "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 0.9,
                }}
              >
                OF THE
              </motion.span>
            </motion.span>

            <motion.span
              className="block overflow-hidden text-muted-foreground/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: isLoaded ? 0 : "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 1.2,
                }}
              >
                FUTURE
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.button
            onClick={() => scrollToSection("artists")}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            style={{ opacity }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 1.5,
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="min-h-screen py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-bold mb-16 tracking-tight"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            ARTISTS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group cursor-pointer"
              >
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden bg-muted/20 mb-4 rounded-sm"
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

                  <motion.div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.div
                  animate={{
                    x: hoveredIndex === index ? 10 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-2xl font-bold mb-1 uppercase tracking-tight">{artist.name}</h3>
                  <p className="text-muted-foreground">{artist.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="mx-auto mt-16 flex items-center justify-center cursor-pointer group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-bold mb-16 tracking-tight"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            CONTACT
          </motion.h2>

          <motion.div className="space-y-8">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">General Inquiries</p>
              <a
                href="mailto:hello@homebrewed.online"
                className="text-3xl md:text-5xl font-bold hover:text-muted-foreground transition-colors duration-300"
              >
                hello@homebrewed.online
              </a>
            </motion.div>

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1,
              }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">Artist Management</p>
              <a
                href="mailto:artists@homebrewed.online"
                className="text-3xl md:text-5xl font-bold hover:text-muted-foreground transition-colors duration-300"
              >
                artists@homebrewed.online
              </a>
            </motion.div>

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">Press</p>
              <a
                href="mailto:press@homebrewed.online"
                className="text-3xl md:text-5xl font-bold hover:text-muted-foreground transition-colors duration-300"
              >
                press@homebrewed.online
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
