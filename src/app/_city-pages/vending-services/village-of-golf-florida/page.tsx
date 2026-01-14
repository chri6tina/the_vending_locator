import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Village of Golf, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Village of Golf, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Village of Golf, vending machines Village of Golf FL, vending operators Village of Golf, break room vending Village of Golf",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/village-of-golf-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Village of Golf, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Village of Golf, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/village-of-golf-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Village of Golf, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Village of Golf, Florida business."
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

export default function VillageofGolfFloridaServicesPage() {
  return <PageClient />
}
