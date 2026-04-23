'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Calendar, Clock, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { indiaStates } from '@/lib/indiaStates'

export default function BookingSection() {
  const [selectedState, setSelectedState] = useState('Kerala');
  const availableDistricts = indiaStates[selectedState] || ["Other District"];

  const [service, setService] = useState('Groom Makeover');
  const [packageLevel, setPackageLevel] = useState('Standard Package');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [district, setDistrict] = useState('Malappuram');
  const [fullName, setFullName] = useState('');
  const [place, setPlace] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const finalDistrict = district && availableDistricts.includes(district) ? district : availableDistricts[0];
    
    let formattedDate = date || 'Not specified';
    if (date && date.includes('-')) {
      const [year, month, day] = date.split('-');
      formattedDate = `${day}/${month}/${year}`;
    }

    let formattedTime = time || 'Not specified';
    if (time && time.includes(':')) {
      const [hourStr, minute] = time.split(':');
      const hour12 = parseInt(hourStr, 10) % 12 || 12;
      const ampm = parseInt(hourStr, 10) >= 12 ? 'PM' : 'AM';
      formattedTime = `${hour12 < 10 ? '0' + hour12 : hour12}:${minute} ${ampm}`;
    }

    const message = `*New Makeover Booking Request*
---------------------------
*Service:* ${service}
*Package:* ${packageLevel}
*Date:* ${formattedDate}
*Time:* ${formattedTime}

*Location:*
*State:* ${selectedState}
*District:* ${finalDistrict}
*Place / Address:* ${place || 'Not specified'}

*Client Details:*
*Name:* ${fullName || 'Not specified'}
*Phone:* ${phoneNumber || 'Not specified'}`;

    const whatsappUrl = `https://wa.me/917907585260?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-matteBlack relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-subtleGold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-subtleGold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-4xl" style={{ perspective: 1500 }}>
        <motion.div
          className="relative w-full max-w-4xl mx-auto"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative group">
            {/* Card glow effect */}
            <motion.div 
              className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 10px 2px rgba(212,175,55,0.03)",
                  "0 0 15px 5px rgba(212,175,55,0.08)",
                  "0 0 10px 2px rgba(212,175,55,0.03)"
                ],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            />

            {/* Traveling light beam effect */}
            <div className="absolute -inset-[1px] rounded-2xl overflow-hidden pointer-events-none">
                <motion.div className="absolute top-0 left-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-subtleGold to-transparent opacity-70" initial={{ filter: "blur(2px)" }} animate={{ left: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }} transition={{ left: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror" }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror" } }} />
                <motion.div className="absolute top-0 right-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-subtleGold to-transparent opacity-70" initial={{ filter: "blur(2px)" }} animate={{ top: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }} transition={{ top: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 0.6 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 0.6 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 0.6 } }} />
                <motion.div className="absolute bottom-0 right-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-subtleGold to-transparent opacity-70" initial={{ filter: "blur(2px)" }} animate={{ right: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }} transition={{ right: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 1.2 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 1.2 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.2 } }} />
                <motion.div className="absolute bottom-0 left-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-subtleGold to-transparent opacity-70" initial={{ filter: "blur(2px)" }} animate={{ bottom: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }} transition={{ bottom: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 1.8 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 1.8 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.8 } }} />
            </div>

            <div className="relative bg-darkCharcoal/90 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-subtleGold to-transparent opacity-50" />
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 uppercase tracking-widest">
              Reserve Your Makeover
            </h2>
            <p className="text-platinumSilver/60 font-light mb-4 max-w-2xl mx-auto">
              Online reservations are exclusively for our Makeover Packages. Select your package, choose a time, and let us transform your look.
            </p>
            <p className="text-subtleGold text-sm tracking-widest uppercase font-semibold">
              For all other grooming services, Visit our shop directly<br className="md:hidden" />
              
            </p>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Selection */}
              <div className="relative group">
                <label className="block text-xs uppercase tracking-widest text-subtleGold mb-2">Service</label>
                <div className="relative">
                  <select 
                    value={service} onChange={(e) => setService(e.target.value)}
                    className="w-full bg-matteBlack border border-white/10 text-white p-4 appearance-none focus:outline-none focus:border-subtleGold transition-colors cursor-pointer rounded-none"
                  >
                    <option>Groom Makeover</option>
                    <option>Bride Makeover</option>
                    <option>Groom and Bride</option>
                    <option>Groom and Bride with Family/Friends</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-platinumSilver/50 group-hover:text-subtleGold pointer-events-none" />
                </div>
              </div>

              {/* Package Selection */}
              <div className="relative group">
                <label className="block text-xs uppercase tracking-widest text-subtleGold mb-2">Package</label>
                <div className="relative">
                  <select 
                    value={packageLevel} onChange={(e) => setPackageLevel(e.target.value)}
                    className="w-full bg-matteBlack border border-white/10 text-white p-4 appearance-none focus:outline-none focus:border-subtleGold transition-colors cursor-pointer rounded-none"
                  >
                    <option>Standard Package</option>
                    <option>Premium Package</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-platinumSilver/50 group-hover:text-subtleGold pointer-events-none" />
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-subtleGold mb-2">Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    value={date} onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-matteBlack border border-white/10 text-white p-4 focus:outline-none focus:border-subtleGold transition-colors [color-scheme:dark] rounded-none"
                    required
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-subtleGold mb-2">Time</label>
                <div className="relative">
                  <input 
                    type="time" 
                    value={time} onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-matteBlack border border-white/10 text-white p-4 focus:outline-none focus:border-subtleGold transition-colors [color-scheme:dark] rounded-none"
                    required
                  />
                </div>
              </div>

              {/* State Selection */}
              <div className="relative group">
                <label className="block text-xs uppercase tracking-widest text-subtleGold mb-2">State</label>
                <div className="relative">
                  <select 
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full bg-matteBlack border border-white/10 text-white p-4 appearance-none focus:outline-none focus:border-subtleGold transition-colors cursor-pointer rounded-none"
                  >
                    {Object.keys(indiaStates).map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-platinumSilver/50 group-hover:text-subtleGold pointer-events-none" />
                </div>
              </div>

              {/* District Selection */}
              <div className="relative group">
                <label className="block text-xs uppercase tracking-widest text-subtleGold mb-2">District</label>
                <div className="relative">
                  <select 
                    value={district} onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-matteBlack border border-white/10 text-white p-4 appearance-none focus:outline-none focus:border-subtleGold transition-colors cursor-pointer rounded-none"
                  >
                    {availableDistricts.map((district) => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-platinumSilver/50 group-hover:text-subtleGold pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
               <label className="block text-xs uppercase tracking-widest text-subtleGold mb-2">Your Details</label>
               <input 
                 type="text" 
                 placeholder="Full Name"
                 value={fullName} onChange={(e) => setFullName(e.target.value)}
                 className="w-full bg-matteBlack border border-white/10 text-white p-4 mb-4 focus:outline-none focus:border-subtleGold transition-colors placeholder:text-white/20 rounded-none"
                 required
               />
               <input 
                 type="text" 
                 placeholder="Place / Address"
                 value={place} onChange={(e) => setPlace(e.target.value)}
                 className="w-full bg-matteBlack border border-white/10 text-white p-4 mb-4 focus:outline-none focus:border-subtleGold transition-colors placeholder:text-white/20 rounded-none"
                 required
               />
               <input 
                 type="tel" 
                 placeholder="Phone Number"
                 value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                 className="w-full bg-matteBlack border border-white/10 text-white p-4 focus:outline-none focus:border-subtleGold transition-colors placeholder:text-white/20 rounded-none"
                 required
               />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-subtleGold text-matteBlack font-bold uppercase tracking-widest py-5 mt-4 hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Confirm Booking
              <Calendar className="w-5 h-5" />
            </motion.button>
            <p className="text-[10px] text-platinumSilver/40 text-center mt-3 uppercase tracking-wider">
              * Travel charges may apply for locations beyond 15 km from our service area.
            </p>
          </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
