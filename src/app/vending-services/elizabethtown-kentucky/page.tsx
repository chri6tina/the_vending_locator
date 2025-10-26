import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Elizabethtown, KY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Elizabethtown, Kentucky business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Elizabethtown, vending machines Elizabethtown KY, vending operators Elizabethtown, break room vending Elizabethtown",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/elizabethtown-kentucky"
  },
  openGraph: {
    title: "Vending Machine Services in Elizabethtown, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elizabethtown, Kentucky business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/elizabethtown-kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Elizabethtown, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elizabethtown, Kentucky business."
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

export default function ElizabethtownKentuckyServicesPage() {
  return <PageClient />
}
