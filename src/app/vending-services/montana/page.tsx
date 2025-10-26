import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Montana - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Montana. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Montana, vending machine providers Montana, vending operators Montana, vending machine installation Montana",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/montana"
  },
  openGraph: {
    title: "Vending Machine Services in Montana - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Montana. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/montana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Montana - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Montana. Free installation, stocking, and maintenance for your business."
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

export default function MontanaServicesPage() {
  return <PageClient />
}
