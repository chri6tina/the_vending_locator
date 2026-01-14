import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Jupiter Inlet Colony, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Jupiter Inlet Colony, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Jupiter Inlet Colony, vending machines Jupiter Inlet Colony FL, vending operators Jupiter Inlet Colony, break room vending Jupiter Inlet Colony",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/jupiter-inlet-colony-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Jupiter Inlet Colony, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jupiter Inlet Colony, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/jupiter-inlet-colony-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Jupiter Inlet Colony, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jupiter Inlet Colony, Florida business."
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

export default function JupiterInletColonyFloridaServicesPage() {
  return <PageClient />
}
