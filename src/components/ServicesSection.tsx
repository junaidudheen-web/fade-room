'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Scissors, Brush, Sparkles, UserCheck, Droplets, Shirt, Eye, Layers, Wind, Check, ChevronLeft, MapPin, PhoneCall } from 'lucide-react'

const services = [
  {
    title: 'Makeover Packages',
    description: "Experience the ultimate grooming transformation designed for both men and women. Our exclusive makeover package includes expert hair styling, precision beard grooming or hair detailing, rejuvenating skin treatments, and personalized style consultation to create a flawless look for your special moments.\n\nWhether you're preparing for your wedding, engagement, or a grand celebration, Fade Room delivers a luxury grooming experience with premium services available across India.",
    icon: <Sparkles className="w-8 h-8 text-subtleGold" />,
    price: 'Starting From : ₹ 10000',
    featured: true,
    image: '/makeover_package_hero.png'
  },
  {
    title: 'Haircut & Fade',
    description: 'Precision cutting and flawless fades tailored to your head shape and personal style.',
    icon: <Scissors className="w-8 h-8 text-subtleGold" />,
    price: 'From $45'
  },
  {
    title: 'Beard Grooming',
    description: 'Sculpting, trimming, and conditioning for a sharp, majestic beard.',
    icon: <UserCheck className="w-8 h-8 text-subtleGold" />,
    price: 'From $30'
  },
  {
    title: 'Hair Styling',
    description: 'Professional styling for both men and ladies using premium products for long-lasting hold.',
    icon: <Brush className="w-8 h-8 text-subtleGold" />,
    price: 'From $55'
  },
  {
    title: 'Skin Care',
    description: 'Revitalizing facials, hot towel shaves, and deep cleansing routines.',
    icon: <Droplets className="w-8 h-8 text-subtleGold" />,
    price: 'From $40'
  },
  {
    title: 'Costume Styling',
    description: 'Bespoke wardrobe consultation to complement your grooming and elevate your overall presence.',
    icon: <Shirt className="w-8 h-8 text-subtleGold" />,
    price: 'From $85'
  },
  {
    title: 'Nose Cleaning',
    description: 'Meticulous attention to detail for a completely refreshed and polished facial appearance.',
    icon: <Wind className="w-8 h-8 text-subtleGold" />,
    price: 'From $15'
  },
  {
    title: 'Eye Mask',
    description: 'Rejuvenating under-eye treatment to reduce fatigue and brighten your look in minutes.',
    icon: <Eye className="w-8 h-8 text-subtleGold" />,
    price: 'From $25'
  },
  {
    title: 'Hair Filling',
    description: 'Advanced density enhancement techniques for a fuller, perfectly sculpted hairline.',
    icon: <Layers className="w-8 h-8 text-subtleGold" />,
    price: 'From $65'
  }
]

export default function ServicesSection() {
  const [isFlipped, setIsFlipped] = useState(false)

  const packageInclusions = [
    { name: 'Hairstyling', description: 'Expert cuts and styling tailored to your look.' },
    { name: 'Face makeup', description: 'Flawless foundation and contouring for the cameras.' },
    { name: 'Beard styling', description: 'Precision sculpting and sharp edge detailing.' },
    { name: 'Nose cleaning', description: 'Gentle exfoliation and blackhead removal.' },
    { name: 'Eye mask', description: 'Cooling treatment to brighten under-eye areas.' },
    { name: 'Hair filling', description: 'Density enhancement for a fuller hairline.' },
    { name: 'Costume styling', description: 'Wardrobe consultation and final look adjustments.' }
  ]
  return (
    <section id="services" className="py-24 bg-darkCharcoal relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 uppercase tracking-widest"
          >
            Premium Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-subtleGold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`
                relative h-full
                ${svc.featured ? 'md:col-span-2 lg:col-span-3' : ''}
              `}
            >
              <div className={`w-full h-full ${svc.featured ? '[perspective:1500px] min-h-[380px] lg:min-h-0' : ''}`}>
                <motion.div
                  animate={svc.featured ? { rotateY: isFlipped ? 180 : 0 } : {}}
                  transition={{ duration: 0.7, type: 'spring', stiffness: 100, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative w-full h-full"
                >
                  {/* FRONT SIDE */}
                  <div 
                    className={`
                      bg-matteBlack p-8 border transition-all group relative overflow-hidden flex flex-col h-full
                      ${svc.featured 
                        ? 'border-subtleGold/30 bg-gradient-to-br from-matteBlack via-darkCharcoal to-matteBlack [backface-visibility:hidden]' 
                        : 'border-white/5 items-start hover:-translate-y-2 hover:border-subtleGold/50'
                      }
                    `}
                  >
                    {svc.featured && (
                      <div className="absolute top-0 left-0 bg-subtleGold text-matteBlack text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1 z-20">
                        Signature Service
                      </div>
                    )}
                    
                    <div className={`flex flex-col h-full z-10 relative ${svc.featured ? 'lg:flex-row lg:gap-12 lg:items-center' : ''}`}>
                      <div className={`flex flex-col flex-grow ${svc.featured ? 'lg:w-1/2' : ''}`}>
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity z-0 pointer-events-none">
                          {svc.icon}
                        </div>
                        <div className={`mb-6 p-4 rounded-full bg-darkCharcoal/80 group-hover:bg-subtleGold/10 transition-colors w-fit ${svc.featured ? 'scale-110 border border-subtleGold/20' : ''}`}>
                          {svc.icon}
                        </div>
                        <h3 className={`${svc.featured ? 'text-3xl lg:text-4xl' : 'text-2xl'} font-serif text-white mb-3 tracking-wide`}>{svc.title}</h3>
                        <p className={`text-platinumSilver/70 mb-8 font-light leading-relaxed flex-grow whitespace-pre-line ${svc.featured ? 'text-lg max-w-xl' : ''}`}>
                          {svc.description}
                        </p>
                        
                        {svc.featured ? (
                          <div className="mt-auto w-full flex flex-col gap-4 border-t border-white/10 pt-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <span className="text-subtleGold font-medium tracking-wider text-xl md:text-2xl whitespace-nowrap">{svc.price}</span>
                              <div className="flex items-center gap-4 md:gap-6 flex-wrap mt-2 md:mt-0">
                                <button 
                                  onClick={() => setIsFlipped(true)}
                                  className="text-[10px] md:text-xs uppercase tracking-widest text-subtleGold hover:text-white transition-colors border-b border-subtleGold/30 pb-1"
                                >
                                  Package Includes
                                </button>
                                <a 
                                  href="#booking"
                                  className="text-[10px] md:text-xs uppercase tracking-widest text-platinumSilver/50 group-hover:text-white transition-colors cursor-pointer"
                                >
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {svc.featured && svc.image && (
                        <div className="hidden lg:block lg:w-1/2 relative h-[350px] overflow-hidden rounded-md border border-white/10 group-hover:border-subtleGold/30 transition-colors">
                          <Image 
                            src={svc.image} 
                            alt={svc.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-matteBlack/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* BACK SIDE (Only for featured) */}
                  {svc.featured && (
                    <div 
                      className="absolute inset-0 w-full h-full bg-darkCharcoal border border-subtleGold/50 p-5 md:p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center pointer-events-auto z-30"
                    >
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <h3 className="text-xl md:text-3xl font-serif text-white tracking-wide">Included Services</h3>
                        <button 
                          onClick={() => setIsFlipped(false)}
                          className="flex items-center gap-2 text-subtleGold hover:text-white transition-colors text-[10px] md:text-xs uppercase tracking-widest shrink-0 ml-4"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span className="hidden sm:inline">Back to Details</span>
                          <span className="sm:hidden">Back</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-4 md:gap-x-8 mb-4">
                        {packageInclusions.map((item) => (
                          <div key={item.name} className="flex items-start gap-2 md:gap-3 group/item">
                            <div className="mt-0.5 p-1 bg-subtleGold/10 rounded-full group-hover/item:bg-subtleGold border border-transparent group-hover/item:border-subtleGold/50 transition-colors shrink-0">
                              <Check className="w-3 h-3 text-subtleGold group-hover/item:text-matteBlack transition-colors" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-white font-medium text-sm md:text-lg tracking-wide">{item.name}</span>
                              <span className="text-platinumSilver/60 font-light text-[10px] md:text-sm leading-tight md:leading-relaxed">{item.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-white/10 flex flex-col gap-3 md:gap-4 lg:hidden xl:flex">
                        <div className="flex flex-col gap-2 text-platinumSilver/60 font-light text-[10px] md:text-sm">
                          <h4 className="text-subtleGold font-medium text-xs md:text-base uppercase tracking-widest mb-0.5">Service Information</h4>
                          <div className="flex items-start gap-2 md:gap-3">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-subtleGold shrink-0 mt-0.5" />
                            <p className="leading-tight md:leading-relaxed">Travel charges may apply for locations beyond 15 km from our service area.</p>
                          </div>
                          <div className="flex items-start gap-2 md:gap-3">
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-subtleGold shrink-0 mt-0.5" />
                            <p className="leading-tight md:leading-relaxed">Packages can be customized based on your individual preferences and requirements.</p>
                          </div>
                          <div className="flex items-start gap-2 md:gap-3">
                            <PhoneCall className="w-3 h-3 md:w-4 md:h-4 text-subtleGold shrink-0 mt-0.5" />
                            <p className="leading-tight md:leading-relaxed">For detailed information about packages, services, and brands used, please book a package and our team will contact you.</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 md:mt-4 self-start md:self-end w-full md:w-auto">
                        <a 
                          href="#booking" 
                          className="bg-subtleGold text-matteBlack px-8 py-3 w-full block md:inline-block font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs cursor-pointer hover:bg-white transition-colors text-center"
                        >
                          Book This Package
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
