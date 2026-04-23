'use client'

import { Scissors, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-matteBlack pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-2xl font-serif font-bold text-white uppercase tracking-wider mb-6">
              <Scissors className="w-8 h-8 text-subtleGold" />
              Fade<span className="text-subtleGold">Room</span>
            </a>
            <p className="text-platinumSilver/60 font-light text-sm leading-relaxed mb-6">
              The pinnacle of luxury grooming. Elevating standard styles into masterpieces of modern fashion.
            </p>
            <div className="flex items-center gap-4 text-platinumSilver">
              <a href="https://www.instagram.com/fade.room_by.afsal?igsh=MXFyb3RjdnZsMGpyMQ==" target="_blank" rel="noopener noreferrer" className="hover:text-subtleGold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-subtleGold transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-platinumSilver/70 text-sm">
              <li><a href="#services" className="hover:text-subtleGold transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-subtleGold transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-subtleGold transition-colors">Our Story</a></li>
              <li><a href="#booking" className="hover:text-subtleGold transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Quote */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Why Fade Room</h4>
            <blockquote className="text-platinumSilver/70 text-base font-serif italic leading-loose relative px-4 border-l-2 border-subtleGold">
              &quot;Great grooming isn’t just about how you look—it’s about how you feel. At Fade Room, we don’t just cut hair; we craft confidence.&quot;
            </blockquote>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wider text-platinumSilver/40">
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Fade Room. All rights reserved.</p>
            <span className="hidden md:inline text-white/20">|</span>
            <p>Powered by <span className="text-subtleGold font-medium hover:text-white transition-colors cursor-pointer">vertex_solutions.ai</span></p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
