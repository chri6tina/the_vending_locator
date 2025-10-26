import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West Virginia - Professional Operators & Providers",
  description: "Find professional vending machine service providers in West Virginia. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services West Virginia, vending machine providers West Virginia, vending operators West Virginia, vending machine installation West Virginia",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in West Virginia - Professional Operators & Providers",
    description: "Find professional vending machine service providers in West Virginia. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/west-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West Virginia - Professional Operators & Providers",
    description: "Find professional vending machine service providers in West Virginia. Free installation, stocking, and maintenance for your business."
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

export default function WestVirginiaServicesPage() {
  return <PageClient />
}
