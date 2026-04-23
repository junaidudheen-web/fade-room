'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-darkCharcoal border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-widest">
            Shop <span className="text-subtleGold border-b-2 border-subtleGold pb-2 inline-block">Details</span>
          </h2>
          <p className="text-platinumSilver/60 font-light max-w-2xl mx-auto text-sm md:text-base">
            Find everything you need to know about our location, working hours, and how to reach out to us for any grooming inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-matteBlack border border-white/10 p-8 md:p-12">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="flex items-center gap-3 text-white uppercase tracking-widest text-lg mb-6">
                <MapPin className="w-6 h-6 text-subtleGold" />
                Address
              </h3>
              <address className="not-italic text-platinumSilver/80 font-light leading-loose text-lg">
                FADE ROOM<br />
                Areakode road, Kaloth first mile<br />
                Kondotty PO<br />
                Malappuram district<br />
                Kerala, India
              </address>
            </div>

            <div className="h-px bg-white/10 w-full" />

            <div>
              <h3 className="flex items-center gap-3 text-white uppercase tracking-widest text-lg mb-6">
                <Clock className="w-6 h-6 text-subtleGold" />
                Working Hours
              </h3>
              <p className="text-platinumSilver/80 font-light text-lg">
                Monday - Sunday <br />
                <span className="text-subtleGold font-medium mt-2 inline-block text-xl">9:00 AM - 10:00 PM</span>
              </p>
            </div>

            <div className="h-px bg-white/10 w-full" />

            <div>
              <h3 className="flex items-center gap-3 text-white uppercase tracking-widest text-lg mb-6">
                <Phone className="w-6 h-6 text-subtleGold" />
                Contact Info
              </h3>
              <p className="text-platinumSilver/80 font-light text-lg mb-4">
                Call us or reach out via WhatsApp for immediate inquiries:
              </p>
              <a 
                href="tel:+917907585260" 
                className="inline-block bg-subtleGold text-matteBlack font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors"
              >
                +91 7907585260
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-full min-h-[400px] border border-white/10 bg-darkCharcoal relative overflow-hidden group">
            <iframe 
              src="https://maps.google.com/maps?q=FADE%20ROOM,%20Areakode%20road,%20Kaloth%20first%20mile,%20Kondotty&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
