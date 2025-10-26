import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Waterloo, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Waterloo, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Waterloo, vending machines Waterloo IA, vending operators Waterloo, break room vending Waterloo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/waterloo-iowa"
  },
  openGraph: {
    title: "Vending Machine Services in Waterloo, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Waterloo, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/waterloo-iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Waterloo, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Waterloo, Iowa business."
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

export default function WaterlooIowaServicesPage() {
  return <PageClient />
}
