import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in San Bruno, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your San Bruno, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services San Bruno, vending machines San Bruno FL, vending operators San Bruno, break room vending San Bruno",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/san-bruno-california"
  },
  openGraph: {
    title: "Vending Machine Services in San Bruno, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Bruno, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/san-bruno-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in San Bruno, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Bruno, California business."
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

export default function SanBrunoCaliforniaServicesPage() {
  return <PageClient />
}
