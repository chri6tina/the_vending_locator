import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Charleston, WV - Get Free Installation & Service",
  description: "Get professional vending machine services for your Charleston, West Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Charleston, vending machines Charleston WV, vending operators Charleston, break room vending Charleston",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/charleston-west-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in Charleston, WV - Get Free Installation & Service",
    description: "Get professional vending machine services for your Charleston, West Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/charleston-west-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Charleston, WV - Get Free Installation & Service",
    description: "Get professional vending machine services for your Charleston, West Virginia business."
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

export default function CharlestonWestVirginiaServicesPage() {
  return <PageClient />
}
