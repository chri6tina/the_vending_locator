import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in San Angelo, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your San Angelo, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services San Angelo, vending machines San Angelo FL, vending operators San Angelo, break room vending San Angelo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/san-angelo-california"
  },
  openGraph: {
    title: "Vending Machine Services in San Angelo, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Angelo, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/san-angelo-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in San Angelo, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Angelo, California business."
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

export default function SanAngeloCaliforniaServicesPage() {
  return <PageClient />
}
