import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bend, OR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bend, Oregon business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bend, vending machines Bend OR, vending operators Bend, break room vending Bend",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bend-oregon"
  },
  openGraph: {
    title: "Vending Machine Services in Bend, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bend, Oregon business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bend-oregon",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bend, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bend, Oregon business."
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

export default function BendOregonServicesPage() {
  return <PageClient />
}
