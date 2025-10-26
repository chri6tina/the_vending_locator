import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pembroke Pines, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pembroke Pines, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pembroke Pines, vending machines Pembroke Pines FL, vending operators Pembroke Pines, break room vending Pembroke Pines",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pembroke-pines-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Pembroke Pines, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pembroke Pines, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pembroke-pines-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pembroke Pines, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pembroke Pines, Florida business."
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

export default function PembrokePinesServicesPage() {
  return <PageClient />
}
