import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Austin Vending Services - Vending Services in Austin, TX | The Vending Locator",
  description: "Austin Vending Services provides Snack Machines, Beverage Machines, Coffee Service in Austin, TX. Professional vending services for Austin area businesses, offering snack machines, beverages, and coffee service with free installation and regular restocking.",
  keywords: "Austin Vending Services, vending services Austin, vending companies Austin TX, Snack Machines, Beverage Machines, Coffee Service, Break Room Solutions, Free Installation, Regular Restocking, Machine Maintenance",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies/austin-vending-services-austin-tx"
  },
  openGraph: {
    title: "Austin Vending Services - Vending Services in Austin, TX | The Vending Locator",
    description: "Austin Vending Services provides Snack Machines, Beverage Machines, Coffee Service in Austin, TX. Professional vending services for Austin area businesses, offering snack machines, beverages, and coffee service with free installation and regular restocking.",
    url: "https://www.thevendinglocator.com/vending-companies/austin-vending-services-austin-tx",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Vending Services - Vending Services in Austin, TX | The Vending Locator",
    description: "Austin Vending Services provides Snack Machines, Beverage Machines, Coffee Service in Austin, TX. Professional vending services for Austin area businesses, offering snack machines, beverages, and coffee service with free installation and regular restocking."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function Page() {
  return <PageClient />
}
