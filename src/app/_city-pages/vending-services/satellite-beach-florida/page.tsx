import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Satellite Beach, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Satellite Beach, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Satellite Beach, vending machines Satellite Beach FL, vending operators Satellite Beach, break room vending Satellite Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/satellite-beach-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Satellite Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Satellite Beach, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/satellite-beach-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Satellite Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Satellite Beach, Florida business."
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

export default function SatelliteBeachFloridaServicesPage() {
  return <PageClient />
}
