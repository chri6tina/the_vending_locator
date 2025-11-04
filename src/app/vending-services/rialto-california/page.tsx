import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rialto, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rialto, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rialto, vending machines Rialto CA, vending operators Rialto, break room vending Rialto",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rialto-california"
  },
  openGraph: {
    title: "Vending Machine Services in Rialto, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rialto, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rialto-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rialto, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rialto, California business."
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

export default function RialtoCaliforniaServicesPage() {
  return <PageClient />
}
