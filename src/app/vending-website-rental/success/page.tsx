import { Metadata } from 'next'
import { Suspense } from 'react'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Website Rental Payment Successful | The Vending Locator",
  description: "Your website rental subscription has been successfully processed. We'll be in touch soon to get your website live.",
  robots: {
    index: false,
    follow: false,
  }
}

export default function WebsiteRentalSuccessPage() {
  return (
    <Suspense>
      <PageClient />
    </Suspense>
  )
}
