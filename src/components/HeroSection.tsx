'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ParticleTextEffect } from '@/components/ui/particle-text-effect'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Image
          src="/hero_bg.png"
          alt="Fade Room Luxury Studio"
          fill
          priority
          className="object-cover object-center scale-105"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-matteBlack z-10" />
        <div className="absolute inset-0 z-20">
          <ParticleTextEffect />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <div className="h-40 md:h-64" /> {/* Spacer to keep layout balance while text is removed */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#booking"
            className="group relative px-8 py-4 bg-transparent overflow-hidden border border-subtleGold flex items-center justify-center uppercase tracking-widest text-sm font-semibold text-subtleGold hover:text-matteBlack transition-colors duration-300 w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-0 bg-subtleGold transition-all duration-[250ms] ease-out group-hover:w-full -z-10" />
            Book Appointment
          </a>
          <a
            href="#services"
            className="group px-8 py-4 bg-white text-matteBlack uppercase tracking-widest text-sm font-semibold hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-all duration-300 w-full sm:w-auto"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-subtleGold to-transparent"
        />
      </motion.div>
    </section>
  )
}
