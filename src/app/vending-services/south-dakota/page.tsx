import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in South Dakota - Professional Operators & Providers",
  description: "Find professional vending machine service providers in South Dakota. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services South Dakota, vending machine providers South Dakota, vending operators South Dakota, vending machine installation South Dakota",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/south-dakota"
  },
  openGraph: {
    title: "Vending Machine Services in South Dakota - Professional Operators & Providers",
    description: "Find professional vending machine service providers in South Dakota. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/south-dakota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in South Dakota - Professional Operators & Providers",
    description: "Find professional vending machine service providers in South Dakota. Free installation, stocking, and maintenance for your business."
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

export default function SouthDakotaServicesPage() {
  return <PageClient />
}
