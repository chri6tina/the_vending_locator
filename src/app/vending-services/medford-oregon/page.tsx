import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Medford, OR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Medford, Oregon business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Medford, vending machines Medford OR, vending operators Medford, break room vending Medford",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/medford-oregon"
  },
  openGraph: {
    title: "Vending Machine Services in Medford, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Medford, Oregon business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/medford-oregon",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Medford, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Medford, Oregon business."
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

export default function MedfordOregonServicesPage() {
  return <PageClient />
}
