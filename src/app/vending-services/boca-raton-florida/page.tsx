import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Boca Raton, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Boca Raton, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Boca Raton, vending machines Boca Raton FL, vending operators Boca Raton, break room vending Boca Raton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/boca-raton-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Boca Raton, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Boca Raton, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/boca-raton-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Boca Raton, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Boca Raton, Florida business."
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

export default function BocaRatonFloridaServicesPage() {
  return <PageClient />
}
