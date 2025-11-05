import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Arkansas - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Arkansas. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Arkansas, vending machine providers Arkansas, vending operators Arkansas, vending machine installation Arkansas",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in Arkansas - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Arkansas. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Arkansas - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Arkansas. Free installation, stocking, and maintenance for your business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ArkansasServicesPage() {
  return <PageClient />
}
