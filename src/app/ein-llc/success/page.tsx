import { Metadata } from 'next'
import { Suspense } from 'react'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "LLC Formation Successful - Your Business is Being Formed | The Vending Locator",
  description: "Thank you for using our EIN & LLC filing service. Your business formation is in progress. You'll receive confirmation documents within 1-2 business days.",
  robots: {
    index: false,
    follow: false,
  }
}

// Loading component for Suspense fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
        <p className="text-chocolate">Loading...</p>
      </div>
    </div>
  )
}

export default function EinLLCSuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PageClient />
    </Suspense>
  )
}

