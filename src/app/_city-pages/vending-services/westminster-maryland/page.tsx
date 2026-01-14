import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Westminster, MD - Get Free Installation & Service",
  description: "Get professional vending machine services for your Westminster, Maryland business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Westminster, vending machines Westminster FL, vending operators Westminster, break room vending Westminster",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/westminster-maryland"
  },
  openGraph: {
    title: "Vending Machine Services in Westminster, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Westminster, Maryland business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/westminster-maryland",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Westminster, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Westminster, Maryland business."
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

export default function WestminsterMarylandServicesPage() {
  return <PageClient />
}
