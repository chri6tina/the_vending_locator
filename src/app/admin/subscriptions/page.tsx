import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Hot Leads Subscriptions | Admin Dashboard",
  description: "Manage Hot Leads Premium Subscriptions",
  robots: {
    index: false,
    follow: false,
  }
}

export default function SubscriptionsAdminPage() {
  return <PageClient />
}
