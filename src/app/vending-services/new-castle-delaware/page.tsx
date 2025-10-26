import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New Castle, DE - Get Free Installation & Service",
  description: "Get professional vending machine services for your New Castle, Delaware business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New Castle, vending machines New Castle DE, vending operators New Castle, break room vending New Castle",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-castle-delaware"
  },
  openGraph: {
    title: "Vending Machine Services in New Castle, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Castle, Delaware business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-castle-delaware",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New Castle, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Castle, Delaware business."
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

export default function NewCastleDelawareServicesPage() {
  return <PageClient />
}
