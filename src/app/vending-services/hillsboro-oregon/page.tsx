import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hillsboro, OR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hillsboro, Oregon business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hillsboro, vending machines Hillsboro OR, vending operators Hillsboro, break room vending Hillsboro",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hillsboro-oregon"
  },
  openGraph: {
    title: "Vending Machine Services in Hillsboro, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hillsboro, Oregon business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hillsboro-oregon",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hillsboro, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hillsboro, Oregon business."
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

export default function HillsboroOregonServicesPage() {
  return <PageClient />
}
