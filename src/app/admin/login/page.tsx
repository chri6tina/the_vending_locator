import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Admin Login - The Vending Locator",
  description: "Admin login for The Vending Locator",
  robots: {
    index: false,
    follow: false
  }
}

export default function Page() {
  return <PageClient />
}

