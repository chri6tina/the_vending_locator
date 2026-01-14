import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Old Orchard Beach, ME - Get Free Installation & Service",
  description: "Get professional vending machine services for your Old Orchard Beach, Maine business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Old Orchard Beach, vending machines Old Orchard Beach FL, vending operators Old Orchard Beach, break room vending Old Orchard Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/old-orchard-beach-maine"
  },
  openGraph: {
    title: "Vending Machine Services in Old Orchard Beach, ME - Get Free Installation & Service",
    description: "Get professional vending machine services for your Old Orchard Beach, Maine business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/old-orchard-beach-maine",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Old Orchard Beach, ME - Get Free Installation & Service",
    description: "Get professional vending machine services for your Old Orchard Beach, Maine business."
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

export default function OldOrchardBeachMaineServicesPage() {
  return <PageClient />
}
