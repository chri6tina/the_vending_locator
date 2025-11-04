import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Twin Falls, ID - Get Free Installation & Service",
  description: "Get professional vending machine services for your Twin Falls, Idaho business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Twin Falls, vending machines Twin Falls ID, vending operators Twin Falls, break room vending Twin Falls",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/twin-falls-idaho"
  },
  openGraph: {
    title: "Vending Machine Services in Twin Falls, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Twin Falls, Idaho business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/twin-falls-idaho",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Twin Falls, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Twin Falls, Idaho business."
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

export default function TwinFallsIdahoServicesPage() {
  return <PageClient />
}
