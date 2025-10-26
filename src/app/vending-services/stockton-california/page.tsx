import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Stockton, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Stockton, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Stockton, vending machines Stockton CA, vending operators Stockton, break room vending Stockton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/stockton-california"
  },
  openGraph: {
    title: "Vending Machine Services in Stockton, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Stockton, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/stockton-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Stockton, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Stockton, California business."
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

export default function StocktonCaliforniaServicesPage() {
  return <PageClient />
}
