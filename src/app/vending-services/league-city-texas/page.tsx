import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in League City, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your League City, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services League City, vending machines League City TX, vending operators League City, break room vending League City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/league-city-texas"
  },
  openGraph: {
    title: "Vending Machine Services in League City, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your League City, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/league-city-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in League City, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your League City, Texas business."
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

export default function LeagueCityTexasServicesPage() {
  return <PageClient />
}
