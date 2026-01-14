import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Eagle Lake, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Eagle Lake, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Eagle Lake, vending machines Eagle Lake FL, vending operators Eagle Lake, break room vending Eagle Lake",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/eagle-lake-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Eagle Lake, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Eagle Lake, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/eagle-lake-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Eagle Lake, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Eagle Lake, Florida business."
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

export default function EagleLakeFloridaServicesPage() {
  return <PageClient />
}
