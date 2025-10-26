import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Miami, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Miami, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Miami, vending machines Miami FL, vending operators Miami, break room vending Miami",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/miami-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Miami, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Miami, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/miami-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Miami, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Miami, Florida business."
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

export default function MiamiServicesPage() {
  return <PageClient />
}
