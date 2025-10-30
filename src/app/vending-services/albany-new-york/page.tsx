import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Albany, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Albany, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Albany, vending machines Albany NY, vending operators Albany, break room vending Albany",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/albany-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in Albany, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Albany, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/albany-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Albany, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Albany, New York business."
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

export default function AlbanyNewYorkServicesPage() {
  return <PageClient />
}
