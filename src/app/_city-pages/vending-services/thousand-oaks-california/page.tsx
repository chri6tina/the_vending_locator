import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Thousand Oaks, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Thousand Oaks, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Thousand Oaks, vending machines Thousand Oaks CA, vending operators Thousand Oaks, break room vending Thousand Oaks",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/thousand-oaks-california"
  },
  openGraph: {
    title: "Vending Machine Services in Thousand Oaks, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Thousand Oaks, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/thousand-oaks-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Thousand Oaks, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Thousand Oaks, California business."
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

export default function ThousandOaksCaliforniaServicesPage() {
  return <PageClient />
}
