import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Green Cove Springs, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Green Cove Springs, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Green Cove Springs, vending machines Green Cove Springs FL, vending operators Green Cove Springs, break room vending Green Cove Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/green-cove-springs-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Green Cove Springs, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Green Cove Springs, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/green-cove-springs-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Green Cove Springs, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Green Cove Springs, Florida business."
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

export default function GreenCoveSpringsFloridaServicesPage() {
  return <PageClient />
}
