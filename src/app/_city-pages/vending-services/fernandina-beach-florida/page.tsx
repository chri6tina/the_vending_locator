import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fernandina Beach, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fernandina Beach, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fernandina Beach, vending machines Fernandina Beach FL, vending operators Fernandina Beach, break room vending Fernandina Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fernandina-beach-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Fernandina Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fernandina Beach, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fernandina-beach-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fernandina Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fernandina Beach, Florida business."
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

export default function FernandinaBeachFloridaServicesPage() {
  return <PageClient />
}
