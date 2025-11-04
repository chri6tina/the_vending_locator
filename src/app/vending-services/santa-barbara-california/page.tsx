import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Santa Barbara, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Santa Barbara, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Santa Barbara, vending machines Santa Barbara CA, vending operators Santa Barbara, break room vending Santa Barbara",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/santa-barbara-california"
  },
  openGraph: {
    title: "Vending Machine Services in Santa Barbara, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Barbara, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/santa-barbara-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Santa Barbara, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Barbara, California business."
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

export default function SantaBarbaraCaliforniaServicesPage() {
  return <PageClient />
}
