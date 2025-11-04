import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Victorville, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Victorville, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Victorville, vending machines Victorville CA, vending operators Victorville, break room vending Victorville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/victorville-california"
  },
  openGraph: {
    title: "Vending Machine Services in Victorville, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Victorville, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/victorville-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Victorville, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Victorville, California business."
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

export default function VictorvilleCaliforniaServicesPage() {
  return <PageClient />
}
