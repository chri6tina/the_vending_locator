import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Orange Cove, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Orange Cove, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Orange Cove, vending machines Orange Cove FL, vending operators Orange Cove, break room vending Orange Cove",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/orange-cove-california"
  },
  openGraph: {
    title: "Vending Machine Services in Orange Cove, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Orange Cove, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/orange-cove-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Orange Cove, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Orange Cove, California business."
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

export default function OrangeCoveCaliforniaServicesPage() {
  return <PageClient />
}
