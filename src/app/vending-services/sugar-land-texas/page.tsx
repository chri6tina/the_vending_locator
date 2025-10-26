import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sugar Land, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sugar Land, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sugar Land, vending machines Sugar Land TX, vending operators Sugar Land, break room vending Sugar Land",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sugar-land-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Sugar Land, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sugar Land, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sugar-land-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sugar Land, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sugar Land, Texas business."
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

export default function SugarLandTexasServicesPage() {
  return <PageClient />
}
