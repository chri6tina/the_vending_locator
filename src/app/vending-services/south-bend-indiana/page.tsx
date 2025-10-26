import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in South Bend, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your South Bend, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services South Bend, vending machines South Bend IN, vending operators South Bend, break room vending South Bend",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/south-bend-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in South Bend, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your South Bend, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/south-bend-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in South Bend, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your South Bend, Indiana business."
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

export default function SouthBendIndianaServicesPage() {
  return <PageClient />
}
