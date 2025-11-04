import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Visalia, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Visalia, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Visalia, vending machines Visalia CA, vending operators Visalia, break room vending Visalia",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/visalia-california"
  },
  openGraph: {
    title: "Vending Machine Services in Visalia, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Visalia, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/visalia-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Visalia, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Visalia, California business."
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

export default function VisaliaCaliforniaServicesPage() {
  return <PageClient />
}
