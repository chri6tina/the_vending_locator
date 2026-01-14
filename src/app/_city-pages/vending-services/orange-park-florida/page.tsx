import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Orange Park, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Orange Park, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Orange Park, vending machines Orange Park FL, vending operators Orange Park, break room vending Orange Park",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/orange-park-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Orange Park, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Orange Park, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/orange-park-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Orange Park, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Orange Park, Florida business."
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

export default function OrangeParkFloridaServicesPage() {
  return <PageClient />
}
