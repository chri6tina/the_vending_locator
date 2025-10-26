import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bridgeport, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bridgeport, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bridgeport, vending machines Bridgeport CT, vending operators Bridgeport, break room vending Bridgeport",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bridgeport-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in Bridgeport, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bridgeport, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bridgeport-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bridgeport, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bridgeport, Connecticut business."
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

export default function BridgeportConnecticutServicesPage() {
  return <PageClient />
}
