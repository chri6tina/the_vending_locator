'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function YorkVendingLeadsPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the New York page
    router.replace('/vending-leads/new-york')
  }, [router])

  return (
    <>
      <Header />
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">
            Redirecting to New York...
          </h1>
          <p className="text-stone">
            If you're not redirected automatically,{' '}
            <button 
              onClick={() => router.push('/vending-leads/new-york')}
              className="text-navy hover:underline"
            >
              click here
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
