import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import BookingSection from '@/components/BookingSection'
import YouTubeSection from '@/components/YouTubeSection'
import LocationSection from '@/components/LocationSection'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <main className="min-h-screen bg-matteBlack text-platinumSilver selection:bg-subtleGold selection:text-matteBlack">
      <Preloader />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <YouTubeSection />
      <AboutSection />
      <BookingSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
