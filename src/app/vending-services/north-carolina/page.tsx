import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Carolina - Professional Operators & Providers",
  description: "Find professional vending machine service providers in North Carolina. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services North Carolina, vending machine providers North Carolina, vending operators North Carolina, vending machine installation North Carolina",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in North Carolina - Professional Operators & Providers",
    description: "Find professional vending machine service providers in North Carolina. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/north-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Carolina - Professional Operators & Providers",
    description: "Find professional vending machine service providers in North Carolina. Free installation, stocking, and maintenance for your business."
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

export default function NorthCarolinaServicesPage() {
  return <PageClient />
}
