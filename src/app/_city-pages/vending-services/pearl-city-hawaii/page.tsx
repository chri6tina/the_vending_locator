import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pearl City, HI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pearl City, Hawaii business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pearl City, vending machines Pearl City HI, vending operators Pearl City, break room vending Pearl City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pearl-city-hawaii"
  },
  openGraph: {
    title: "Vending Machine Services in Pearl City, HI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pearl City, Hawaii business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pearl-city-hawaii",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pearl City, HI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pearl City, Hawaii business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BocaRatonHawaiiServicesPage() {
  return <PageClient />
}
