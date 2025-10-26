import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lake Charles, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lake Charles, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lake Charles, vending machines Lake Charles LA, vending operators Lake Charles, break room vending Lake Charles",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lake-charles-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Lake Charles, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Charles, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lake-charles-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lake Charles, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Charles, Louisiana business."
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

export default function LakeCharlesLouisianaServicesPage() {
  return <PageClient />
}
