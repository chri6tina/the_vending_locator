import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Key West, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Key West, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Key West, vending machines Key West FL, vending operators Key West, break room vending Key West",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/key-west-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Key West, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Key West, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/key-west-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Key West, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Key West, Florida business."
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

export default function KeyWestFloridaServicesPage() {
  return <PageClient />
}
