import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <PricingTable />
      <HotLeads />
      <Testimonials />
      <Footer />
      
      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />
    </main>
  )
}
