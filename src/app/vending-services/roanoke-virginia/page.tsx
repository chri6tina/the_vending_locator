import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Roanoke, VA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Roanoke, Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Roanoke, vending machines Roanoke VA, vending operators Roanoke, break room vending Roanoke",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/roanoke-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in Roanoke, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Roanoke, Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/roanoke-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Roanoke, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Roanoke, Virginia business."
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

export default function RoanokeVirginiaServicesPage() {
  return <PageClient />
}
