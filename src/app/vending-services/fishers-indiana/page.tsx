import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fishers, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fishers, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fishers, vending machines Fishers IN, vending operators Fishers, break room vending Fishers",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fishers-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Fishers, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fishers, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fishers-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fishers, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fishers, Indiana business."
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

export default function FishersIndianaServicesPage() {
  return <PageClient />
}
