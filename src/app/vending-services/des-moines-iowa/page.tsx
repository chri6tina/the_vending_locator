import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Des Moines, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Des Moines, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Des Moines, vending machines Des Moines IA, vending operators Des Moines, break room vending Des Moines",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/des-moines-iowa"
  },
  openGraph: {
    title: "Vending Machine Services in Des Moines, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Des Moines, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/des-moines-iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Des Moines, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Des Moines, Iowa business."
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

export default function DesMoinesIowaServicesPage() {
  return <PageClient />
}
