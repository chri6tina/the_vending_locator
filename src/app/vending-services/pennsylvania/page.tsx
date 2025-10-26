import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pennsylvania - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Pennsylvania. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Pennsylvania, vending machine providers Pennsylvania, vending operators Pennsylvania, vending machine installation Pennsylvania",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pennsylvania"
  },
  openGraph: {
    title: "Vending Machine Services in Pennsylvania - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Pennsylvania. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/pennsylvania",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pennsylvania - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Pennsylvania. Free installation, stocking, and maintenance for your business."
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

export default function PennsylvaniaServicesPage() {
  return <PageClient />
}
