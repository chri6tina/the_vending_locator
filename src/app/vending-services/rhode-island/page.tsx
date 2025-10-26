import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rhode Island - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Rhode Island. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Rhode Island, vending machine providers Rhode Island, vending operators Rhode Island, vending machine installation Rhode Island",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rhode-island"
  },
  openGraph: {
    title: "Vending Machine Services in Rhode Island - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Rhode Island. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/rhode-island",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rhode Island - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Rhode Island. Free installation, stocking, and maintenance for your business."
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

export default function RhodeIslandServicesPage() {
  return <PageClient />
}
