'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TexaRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the correct Texas page
    router.replace('/vending-leads/texas')
  }, [router])

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
        <p className="text-lg text-charcoal">Redirecting to Texas vending leads...</p>
        <p className="text-sm text-stone mt-2">
          If you're not redirected automatically,{' '}
          <a href="/vending-leads/texas" className="text-navy hover:underline">
            click here
          </a>
        </p>
      </div>
    </div>
  )
}
