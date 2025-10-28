import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Hot Leads Management - Admin Dashboard",
  description: "Create and manage hot vending machine leads for the marketplace",
  robots: {
    index: false,
    follow: false
  }
}

export default function Page() {
  return <PageClient />
}
