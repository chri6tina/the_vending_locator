import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sioux City, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sioux City, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sioux City, vending machines Sioux City IA, vending operators Sioux City, break room vending Sioux City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sioux-city-iowa"
  },
  openGraph: {
    title: "Vending Machine Services in Sioux City, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sioux City, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sioux-city-iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sioux City, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sioux City, Iowa business."
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

export default function SiouxCityIowaServicesPage() {
  return <PageClient />
}
