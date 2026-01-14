import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fort Walton Beach, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fort Walton Beach, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fort Walton Beach, vending machines Fort Walton Beach FL, vending operators Fort Walton Beach, break room vending Fort Walton Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fort-walton-beach-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Fort Walton Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Walton Beach, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fort-walton-beach-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fort Walton Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Walton Beach, Florida business."
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

export default function FortWaltonBeachFloridaServicesPage() {
  return <PageClient />
}
