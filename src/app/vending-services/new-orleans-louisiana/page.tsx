import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New Orleans, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your New Orleans, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New Orleans, vending machines New Orleans LA, vending operators New Orleans, break room vending New Orleans",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-orleans-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in New Orleans, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Orleans, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-orleans-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New Orleans, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Orleans, Louisiana business."
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

export default function NewOrleansLouisianaServicesPage() {
  return <PageClient />
}
