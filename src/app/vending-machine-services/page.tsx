'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function VendingMachineServicesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">
            Vending Machine Services
          </h1>
          <p className="text-lg text-center mb-8">
            Find the best vending services in your city
          </p>
          <div className="text-center">
            <Link
              href="/vending-machine-services/jacksonville-florida"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            >
              Jacksonville, Florida
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
