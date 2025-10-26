import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sacramento, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sacramento, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sacramento, vending machines Sacramento CA, vending operators Sacramento, break room vending Sacramento",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sacramento-california"
  },
  openGraph: {
    title: "Vending Machine Services in Sacramento, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sacramento, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sacramento-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sacramento, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sacramento, California business."
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

export default function SacramentoCaliforniaServicesPage() {
  return <PageClient />
}
