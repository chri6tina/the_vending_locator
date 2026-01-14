import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Flagler Beach, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Flagler Beach, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Flagler Beach, vending machines Flagler Beach FL, vending operators Flagler Beach, break room vending Flagler Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/flagler-beach-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Flagler Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Flagler Beach, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/flagler-beach-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Flagler Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Flagler Beach, Florida business."
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

export default function FlaglerBeachFloridaServicesPage() {
  return <PageClient />
}
