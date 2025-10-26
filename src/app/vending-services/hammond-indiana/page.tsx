import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hammond, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hammond, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hammond, vending machines Hammond IN, vending operators Hammond, break room vending Hammond",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hammond-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Hammond, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hammond, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hammond-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hammond, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hammond, Indiana business."
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

export default function HammondIndianaServicesPage() {
  return <PageClient />
}
