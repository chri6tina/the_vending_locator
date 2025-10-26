import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Long Beach, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Long Beach, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Long Beach, vending machines Long Beach CA, vending operators Long Beach, break room vending Long Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/long-beach-california"
  },
  openGraph: {
    title: "Vending Machine Services in Long Beach, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Long Beach, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/long-beach-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Long Beach, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Long Beach, California business."
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

export default function LongBeachCaliforniaServicesPage() {
  return <PageClient />
}
