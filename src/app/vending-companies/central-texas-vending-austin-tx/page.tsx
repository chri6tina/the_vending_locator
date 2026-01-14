import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Central Texas Vending - Vending Services in Austin, TX | The Vending Locator",
  description: "Central Texas Vending provides Snack Machines, Beverage Machines, Healthy Vending Options in Austin, TX. Full-service vending solutions for Central Texas businesses, specializing in healthy vending options and smart technology.",
  keywords: "Central Texas Vending, vending services Austin, vending companies Austin TX, Snack Machines, Beverage Machines, Healthy Vending Options, Smart Vending Technology, Cashless Payment Systems, 24/7 Service",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies/central-texas-vending-austin-tx"
  },
  openGraph: {
    title: "Central Texas Vending - Vending Services in Austin, TX | The Vending Locator",
    description: "Central Texas Vending provides Snack Machines, Beverage Machines, Healthy Vending Options in Austin, TX. Full-service vending solutions for Central Texas businesses, specializing in healthy vending options and smart technology.",
    url: "https://www.thevendinglocator.com/vending-companies/central-texas-vending-austin-tx",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Texas Vending - Vending Services in Austin, TX | The Vending Locator",
    description: "Central Texas Vending provides Snack Machines, Beverage Machines, Healthy Vending Options in Austin, TX. Full-service vending solutions for Central Texas businesses, specializing in healthy vending options and smart technology."
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
