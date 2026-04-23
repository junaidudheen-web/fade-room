'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

function Counter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: duration,
        ease: "easeOut",
      })
      
      return controls.stop
    }
  }, [isInView, target, duration, motionValue])

  // Re-render when rounded changes
  useEffect(() => {
    return rounded.onChange((latest) => {
      setCount(latest)
    })
  }, [rounded])

  return <span ref={ref}>{count}</span>
}

export default function AboutSection() {
  const storyImages = [
    '/story/19.jpeg',
    '/story/23.jpeg',
    '/story/32.jpeg',
    '/story/WhatsApp Image 2026-04-22 at 3.54.50 PM.jpeg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % storyImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-darkCharcoal overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] overflow-hidden"
          >
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={storyImages[currentImageIndex]}
                  alt="About Fade Room"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 border-8 border-subtleGold/20 m-4 z-10 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-subtleGold uppercase tracking-[0.2em] mb-4 text-sm font-semibold">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 uppercase tracking-widest leading-tight">
              More than a haircut. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-subtleGold to-white italic">
                A Transformation.
              </span>
            </h2>
            <div className="space-y-6 text-platinumSilver/80 font-light text-lg leading-relaxed">
              <p>
                Fade Room was established with one goal in mind: to elevate the standard of men&#39;s and ladies&#39; grooming. We believe that a great style is the foundation of unwavering confidence.
              </p>
              <p>
                Our master barbers and stylists combine classic techniques with modern trends to deliver precision grooming tailored to your individuality. Step into our luxury space, unwind, and let us redefine your look.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h5 className="text-3xl font-serif text-white mb-2">8+</h5>
                <p className="text-sm uppercase tracking-widest text-subtleGold">Years Experience</p>
              </div>
              <div>
                <h5 className="text-3xl font-serif text-white mb-2">
                  <Counter target={2000} />+
                </h5>
                <p className="text-sm uppercase tracking-widest text-subtleGold">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

