import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Indiana - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Indiana. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Indiana, vending machine providers Indiana, vending operators Indiana, vending machine installation Indiana",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Indiana - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Indiana. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Indiana - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Indiana. Free installation, stocking, and maintenance for your business."
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

export default function IndianaServicesPage() {
  return <PageClient />
}
