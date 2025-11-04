import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Inglewood, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Inglewood, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Inglewood, vending machines Inglewood CA, vending operators Inglewood, break room vending Inglewood",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/inglewood-california"
  },
  openGraph: {
    title: "Vending Machine Services in Inglewood, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Inglewood, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/inglewood-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Inglewood, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Inglewood, California business."
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

export default function InglewoodCaliforniaServicesPage() {
  return <PageClient />
}
