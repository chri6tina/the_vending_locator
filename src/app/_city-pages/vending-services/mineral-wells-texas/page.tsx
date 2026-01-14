import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Mineral Wells, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Mineral Wells, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Mineral Wells, vending machines Mineral Wells FL, vending operators Mineral Wells, break room vending Mineral Wells",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mineral-wells-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Mineral Wells, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mineral Wells, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/mineral-wells-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Mineral Wells, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mineral Wells, Texas business."
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

export default function MineralWellsTexasServicesPage() {
  return <PageClient />
}
