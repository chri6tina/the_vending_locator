import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Haines City, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Haines City, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Haines City, vending machines Haines City FL, vending operators Haines City, break room vending Haines City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/haines-city-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Haines City, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Haines City, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/haines-city-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Haines City, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Haines City, Florida business."
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

export default function HainesCityFloridaServicesPage() {
  return <PageClient />
}
