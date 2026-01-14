import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Bay Village, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your North Bay Village, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services North Bay Village, vending machines North Bay Village FL, vending operators North Bay Village, break room vending North Bay Village",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-bay-village-florida"
  },
  openGraph: {
    title: "Vending Machine Services in North Bay Village, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Bay Village, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/north-bay-village-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Bay Village, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Bay Village, Florida business."
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

export default function NorthBayVillageFloridaServicesPage() {
  return <PageClient />
}
