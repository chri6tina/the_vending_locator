import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in St. Peters, MT - Get Free Installation & Service",
  description: "Get professional vending machine services for your St. Peters, Montana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services St. Peters, vending machines St. Peters FL, vending operators St. Peters, break room vending St. Peters",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/st.-peters"
  },
  openGraph: {
    title: "Vending Machine Services in St. Peters, MT - Get Free Installation & Service",
    description: "Get professional vending machine services for your St. Peters, Montana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/st.-peters",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in St. Peters, MT - Get Free Installation & Service",
    description: "Get professional vending machine services for your St. Peters, Montana business."
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

export default function StPetersMontanaServicesPage() {
  return <PageClient />
}
