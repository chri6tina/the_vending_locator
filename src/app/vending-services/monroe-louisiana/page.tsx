import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Monroe, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Monroe, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Monroe, vending machines Monroe LA, vending operators Monroe, break room vending Monroe",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/monroe-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Monroe, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Monroe, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/monroe-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Monroe, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Monroe, Louisiana business."
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

export default function MonroeLouisianaServicesPage() {
  return <PageClient />
}
