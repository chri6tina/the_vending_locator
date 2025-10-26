import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in McAllen, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your McAllen, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services McAllen, vending machines McAllen TX, vending operators McAllen, break room vending McAllen",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mcallen-texas"
  },
  openGraph: {
    title: "Vending Machine Services in McAllen, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your McAllen, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/mcallen-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in McAllen, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your McAllen, Texas business."
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

export default function McAllenTexasServicesPage() {
  return <PageClient />
}
