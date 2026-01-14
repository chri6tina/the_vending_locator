import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Canoga Park, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Canoga Park, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Canoga Park, vending machines Canoga Park FL, vending operators Canoga Park, break room vending Canoga Park",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/canoga-park-california"
  },
  openGraph: {
    title: "Vending Machine Services in Canoga Park, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Canoga Park, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/canoga-park-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Canoga Park, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Canoga Park, California business."
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

export default function CanogaParkCaliforniaServicesPage() {
  return <PageClient />
}
