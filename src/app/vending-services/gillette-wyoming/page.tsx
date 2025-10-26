import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Gillette, WY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Gillette, Wyoming business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Gillette, vending machines Gillette WY, vending operators Gillette, break room vending Gillette",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/gillette-wyoming"
  },
  openGraph: {
    title: "Vending Machine Services in Gillette, WY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gillette, Wyoming business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/gillette-wyoming",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Gillette, WY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gillette, Wyoming business."
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

export default function GilletteWyomingServicesPage() {
  return <PageClient />
}
