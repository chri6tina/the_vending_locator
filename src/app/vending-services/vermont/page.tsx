import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Vermont - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Vermont. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Vermont, vending machine providers Vermont, vending operators Vermont, vending machine installation Vermont",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/vermont"
  },
  openGraph: {
    title: "Vending Machine Services in Vermont - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Vermont. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/vermont",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Vermont - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Vermont. Free installation, stocking, and maintenance for your business."
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

export default function VermontServicesPage() {
  return <PageClient />
}
