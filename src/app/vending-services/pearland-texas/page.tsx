import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pearland, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pearland, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pearland, vending machines Pearland TX, vending operators Pearland, break room vending Pearland",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pearland-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Pearland, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pearland, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pearland-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pearland, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pearland, Texas business."
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

export default function PearlandTexasServicesPage() {
  return <PageClient />
}
