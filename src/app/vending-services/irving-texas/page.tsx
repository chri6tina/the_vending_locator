import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Irving, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Irving, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Irving, vending machines Irving TX, vending operators Irving, break room vending Irving",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/irving-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Irving, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Irving, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/irving-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Irving, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Irving, Texas business."
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

export default function IrvingTexasServicesPage() {
  return <PageClient />
}
