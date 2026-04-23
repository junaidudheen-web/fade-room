'use client'

import { motion } from 'framer-motion'

const videoIds = [
  'QRB3vbi_pD0',
  'JF4McVINw8Y',
  'XXzBvDsi3OY',
  'GcacJXeCq2Q',
  'S8fx7OMfXUA',
  'SSUSsO1DAjY'
]

export default function YouTubeSection() {
  return (
    <section id="videos" className="py-24 bg-darkCharcoal relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-subtleGold/5 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-subtleGold/5 rounded-full blur-[100px] translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-subtleGold uppercase tracking-[0.3em] mb-4 text-sm font-semibold"
          >
            Cinematic Grooming
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-widest"
          >
            Fade Room <span className="text-transparent bg-clip-text bg-gradient-to-r from-subtleGold to-white italic">In Motion</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-1 bg-subtleGold"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videoIds.map((id, idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-[9/16] w-full bg-matteBlack border border-white/10 group overflow-hidden shadow-2xl"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`Fade Room Shorts ${idx + 1}`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {/* Optional overlay for styling until touched */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-matteBlack to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.youtube.com/@faderoom" // Placeholder or actual channel if known
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-subtleGold border border-subtleGold/30 px-8 py-4 uppercase tracking-widest text-sm hover:bg-subtleGold hover:text-matteBlack transition-all duration-300"
          >
            Visit Our YouTube Channel
          </motion.a>
        </div>
      </div>
    </section>
  )
}
