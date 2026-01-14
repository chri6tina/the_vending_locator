import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hialeah Gardens, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hialeah Gardens, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hialeah Gardens, vending machines Hialeah Gardens FL, vending operators Hialeah Gardens, break room vending Hialeah Gardens",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hialeah-gardens-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Hialeah Gardens, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hialeah Gardens, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hialeah-gardens-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hialeah Gardens, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hialeah Gardens, Florida business."
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

export default function HialeahGardensFloridaServicesPage() {
  return <PageClient />
}
