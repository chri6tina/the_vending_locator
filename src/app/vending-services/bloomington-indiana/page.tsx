import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bloomington, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bloomington, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bloomington, vending machines Bloomington IN, vending operators Bloomington, break room vending Bloomington",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bloomington-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Bloomington, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bloomington, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bloomington-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bloomington, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bloomington, Indiana business."
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

export default function BloomingtonIndianaServicesPage() {
  return <PageClient />
}
