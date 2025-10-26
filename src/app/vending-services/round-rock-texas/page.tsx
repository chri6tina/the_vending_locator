import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Round Rock, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Round Rock, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Round Rock, vending machines Round Rock TX, vending operators Round Rock, break room vending Round Rock",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/round-rock-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Round Rock, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Round Rock, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/round-rock-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Round Rock, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Round Rock, Texas business."
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

export default function RoundRockTexasServicesPage() {
  return <PageClient />
}
