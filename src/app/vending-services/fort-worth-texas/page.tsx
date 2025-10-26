import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fort Worth, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fort Worth, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fort Worth, vending machines Fort Worth TX, vending operators Fort Worth, break room vending Fort Worth",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fort-worth-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Fort Worth, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Worth, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fort-worth-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fort Worth, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Worth, Texas business."
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

export default function FortWorthTexasServicesPage() {
  return <PageClient />
}
