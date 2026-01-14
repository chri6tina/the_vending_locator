import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in East Palo Alto, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your East Palo Alto, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services East Palo Alto, vending machines East Palo Alto FL, vending operators East Palo Alto, break room vending East Palo Alto",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/east-palo-alto-california"
  },
  openGraph: {
    title: "Vending Machine Services in East Palo Alto, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your East Palo Alto, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/east-palo-alto-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in East Palo Alto, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your East Palo Alto, California business."
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

export default function EastPaloAltoCaliforniaServicesPage() {
  return <PageClient />
}
