import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Michigan - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Michigan. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Michigan, vending machine providers Michigan, vending operators Michigan, vending machine installation Michigan",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Michigan - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Michigan. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Michigan - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Michigan. Free installation, stocking, and maintenance for your business."
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

export default function MichiganServicesPage() {
  return <PageClient />
}
