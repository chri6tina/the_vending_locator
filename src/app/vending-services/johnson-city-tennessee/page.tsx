import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Johnson City, TN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Johnson City, Tennessee business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Johnson City, vending machines Johnson City TN, vending operators Johnson City, break room vending Johnson City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/johnson-city-tennessee"
  },
  openGraph: {
    title: "Vending Machine Services in Johnson City, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Johnson City, Tennessee business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/johnson-city-tennessee",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Johnson City, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Johnson City, Tennessee business."
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

export default function JohnsonCityTennesseeServicesPage() {
  return <PageClient />
}
