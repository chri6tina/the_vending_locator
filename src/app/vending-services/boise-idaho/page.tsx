import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Boise, ID - Get Free Installation & Service",
  description: "Get professional vending machine services for your Boise, Idaho business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Boise, vending machines Boise ID, vending operators Boise, break room vending Boise",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/boise-idaho"
  },
  openGraph: {
    title: "Vending Machine Services in Boise, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Boise, Idaho business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/boise-idaho",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Boise, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Boise, Idaho business."
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

export default function BoiseIdahoServicesPage() {
  return <PageClient />
}
