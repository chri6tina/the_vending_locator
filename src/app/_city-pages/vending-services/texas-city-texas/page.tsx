import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Texas City, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Texas City, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Texas City, vending machines Texas City FL, vending operators Texas City, break room vending Texas City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/texas-city-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Texas City, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Texas City, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/texas-city-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Texas City, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Texas City, Texas business."
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

export default function TexasCityTexasServicesPage() {
  return <PageClient />
}
