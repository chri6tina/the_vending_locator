import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in San Antonio, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your San Antonio, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services San Antonio, vending machines San Antonio TX, vending operators San Antonio, break room vending San Antonio",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/san-antonio-texas"
  },
  openGraph: {
    title: "Vending Machine Services in San Antonio, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Antonio, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/san-antonio-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in San Antonio, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Antonio, Texas business."
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

export default function SanAntonioTexasServicesPage() {
  return <PageClient />
}
