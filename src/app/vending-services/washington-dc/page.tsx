import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Washington DC - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Washington DC. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Washington DC, vending machine providers Washington DC, vending operators Washington DC, vending machine installation Washington DC",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/washington-dc"
  },
  openGraph: {
    title: "Vending Machine Services in Washington DC - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Washington DC. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/washington-dc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Washington DC - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Washington DC. Free installation, stocking, and maintenance for your business."
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

export default function WashingtonDcServicesPage() {
  return <PageClient />
}
