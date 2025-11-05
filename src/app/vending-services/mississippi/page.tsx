import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Mississippi - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Mississippi. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Mississippi, vending machine providers Mississippi, vending operators Mississippi, vending machine installation Mississippi",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mississippi"
  },
  openGraph: {
    title: "Vending Machine Services in Mississippi - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Mississippi. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/mississippi",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Mississippi - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Mississippi. Free installation, stocking, and maintenance for your business."
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

export default function MississippiServicesPage() {
  return <PageClient />
}
