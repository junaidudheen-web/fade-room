'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const imageFiles = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
  "20.jpeg",
  "21.jpeg",
  "22.jpeg",
  "23.jpeg",
  "25.jpeg",
  "26.jpeg",
  "27.jpeg",
  "28.jpeg",
  "29.jpeg",
  "30.jpeg",
  "31.jpeg",
  "32.jpeg",
  "WhatsApp Image 2026-04-22 at 3.54.50 PM.jpeg",
  "WhatsApp Image 2026-04-22 at 4.09.17 PM.jpeg",
  "WhatsApp Image 2026-04-22 at 4.09.18 PM.jpeg",
];
const portfolioImages = imageFiles.map((filename, i) => ({
  src: `/works/${filename}`,
  alt: `Fade Room Gallery ${i + 1}`,
  position: ["7.jpeg", "15.jpeg", "29.jpeg"].includes(filename) ? 'object-top' : 'object-center'
}));

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-matteBlack">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 uppercase tracking-widest">
              The Gallery
            </h2>
            <div className="w-24 h-1 bg-subtleGold" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-platinumSilver/70 max-w-md md:text-right"
          >
            A showcase of our signature cuts, styling, and full transformations.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative aspect-square w-full overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={80}
                className={`object-cover ${img.position} scale-110 group-hover:scale-100 transition-transform duration-700 ease-in-out`}
              />

            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/fade.room_by.afsal?igsh=MXFyb3RjdnZsMGpyMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtleGold border-b border-subtleGold pb-1 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors"
          >
            Follow our Instagram For More
          </motion.a>
        </div>
      </div>
    </section>
  )
}
