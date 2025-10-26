import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Chesapeake, VA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Chesapeake, Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Chesapeake, vending machines Chesapeake VA, vending operators Chesapeake, break room vending Chesapeake",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/chesapeake-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in Chesapeake, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chesapeake, Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/chesapeake-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Chesapeake, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chesapeake, Virginia business."
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

export default function ChesapeakeVirginiaServicesPage() {
  return <PageClient />
}
