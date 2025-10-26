import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Minnesota - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Minnesota. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Minnesota, vending machine providers Minnesota, vending operators Minnesota, vending machine installation Minnesota",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Minnesota - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Minnesota. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Minnesota - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Minnesota. Free installation, stocking, and maintenance for your business."
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

export default function MinnesotaServicesPage() {
  return <PageClient />
}
