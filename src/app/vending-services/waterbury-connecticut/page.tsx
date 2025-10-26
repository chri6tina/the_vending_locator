import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Waterbury, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Waterbury, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Waterbury, vending machines Waterbury CT, vending operators Waterbury, break room vending Waterbury",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/waterbury-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in Waterbury, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Waterbury, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/waterbury-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Waterbury, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Waterbury, Connecticut business."
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

export default function WaterburyConnecticutServicesPage() {
  return <PageClient />
}
