import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Cocoa Beach, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Cocoa Beach, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Cocoa Beach, vending machines Cocoa Beach FL, vending operators Cocoa Beach, break room vending Cocoa Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/cocoa-beach-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Cocoa Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cocoa Beach, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/cocoa-beach-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Cocoa Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cocoa Beach, Florida business."
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

export default function CocoaBeachFloridaServicesPage() {
  return <PageClient />
}
