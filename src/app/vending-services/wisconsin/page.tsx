import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Wisconsin - Professional Operators & Providers",
  description: "Find professional vending machine service providers in Wisconsin. Free installation, stocking, and maintenance for your business. Connect with local operators today.",
  keywords: "vending services Wisconsin, vending machine providers Wisconsin, vending operators Wisconsin, vending machine installation Wisconsin",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/wisconsin"
  },
  openGraph: {
    title: "Vending Machine Services in Wisconsin - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Wisconsin. Free installation, stocking, and maintenance for your business.",
    url: "https://www.thevendinglocator.com/vending-services/wisconsin",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Wisconsin - Professional Operators & Providers",
    description: "Find professional vending machine service providers in Wisconsin. Free installation, stocking, and maintenance for your business."
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

export default function WisconsinServicesPage() {
  return <PageClient />
}
