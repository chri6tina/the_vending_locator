import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New York - Professional Operators & Providers",
  description: "Find professional vending machine service providers in New York. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services New York, vending machine providers New York, vending operators New York, vending machine installation New York",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-york"
  },
  openGraph: {
    title: "Vending Machine Services in New York - Professional Operators & Providers",
    description: "Find professional vending machine service providers in New York. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New York - Professional Operators & Providers",
    description: "Find professional vending machine service providers in New York. Free installation, stocking, and maintenance for your business."
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

export default function NewYorkServicesPage() {
  return <PageClient />
}
