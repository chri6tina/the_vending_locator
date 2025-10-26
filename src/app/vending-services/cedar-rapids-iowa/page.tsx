import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Cedar Rapids, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Cedar Rapids, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Cedar Rapids, vending machines Cedar Rapids IA, vending operators Cedar Rapids, break room vending Cedar Rapids",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/cedar-rapids-iowa"
  },
  openGraph: {
    title: "Vending Machine Services in Cedar Rapids, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cedar Rapids, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/cedar-rapids-iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Cedar Rapids, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cedar Rapids, Iowa business."
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

export default function CedarRapidsIowaServicesPage() {
  return <PageClient />
}
