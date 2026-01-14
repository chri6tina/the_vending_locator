import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Santa Fe Springs, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Santa Fe Springs, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Santa Fe Springs, vending machines Santa Fe Springs FL, vending operators Santa Fe Springs, break room vending Santa Fe Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/santa-fe-springs-california"
  },
  openGraph: {
    title: "Vending Machine Services in Santa Fe Springs, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Fe Springs, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/santa-fe-springs-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Santa Fe Springs, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Fe Springs, California business."
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

export default function SantaFeSpringsCaliforniaServicesPage() {
  return <PageClient />
}
