'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Scissors } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-matteBlack/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-serif font-bold text-white uppercase tracking-wider">
          <Scissors className="w-8 h-8 text-subtleGold" />
          Fade<span className="text-subtleGold">Room</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
          {['Services', 'Portfolio', 'Videos', 'About', 'Location'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-platinumSilver hover:text-subtleGold transition-colors">
              {item}
            </a>
          ))}
          <a href="#booking" className="bg-subtleGold py-3 px-6 text-matteBlack hover:bg-white transition-colors duration-300">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-darkCharcoal absolute top-full left-0 right-0 border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-center">
              {['Services', 'Portfolio', 'Videos', 'About', 'Location'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-wider text-platinumSilver py-2"
                >
                  {item}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-subtleGold py-4 text-matteBlack font-bold uppercase tracking-wider"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
