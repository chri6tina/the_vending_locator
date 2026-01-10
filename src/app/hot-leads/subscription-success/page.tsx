import { Metadata } from 'next'
import { Suspense } from 'react'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Hot Leads Subscription Successful | The Vending Locator",
  description: "Your Hot Leads Premium Subscription has been successfully activated. You now have first access to premium vending leads.",
  robots: {
    index: false,
    follow: false,
  }
}

export default function HotLeadsSubscriptionSuccessPage() {
  return (
    <Suspense>
      <PageClient />
    </Suspense>
  )
}
