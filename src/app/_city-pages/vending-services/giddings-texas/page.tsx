import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Giddings, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Giddings, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Giddings, vending machines Giddings FL, vending operators Giddings, break room vending Giddings",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/giddings-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Giddings, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Giddings, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/giddings-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Giddings, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Giddings, Texas business."
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

export default function GiddingsTexasServicesPage() {
  return <PageClient />
}
