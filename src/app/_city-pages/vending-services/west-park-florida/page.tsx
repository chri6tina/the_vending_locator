import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West Park, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your West Park, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services West Park, vending machines West Park FL, vending operators West Park, break room vending West Park",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-park-florida"
  },
  openGraph: {
    title: "Vending Machine Services in West Park, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Park, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/west-park-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West Park, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Park, Florida business."
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

export default function WestParkFloridaServicesPage() {
  return <PageClient />
}
