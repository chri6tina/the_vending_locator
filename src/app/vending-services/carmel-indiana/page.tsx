import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Carmel, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Carmel, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Carmel, vending machines Carmel IN, vending operators Carmel, break room vending Carmel",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/carmel-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Carmel, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carmel, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/carmel-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Carmel, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carmel, Indiana business."
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

export default function CarmelIndianaServicesPage() {
  return <PageClient />
}
