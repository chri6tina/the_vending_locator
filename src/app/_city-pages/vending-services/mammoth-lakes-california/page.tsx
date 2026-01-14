import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Mammoth Lakes, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Mammoth Lakes, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Mammoth Lakes, vending machines Mammoth Lakes FL, vending operators Mammoth Lakes, break room vending Mammoth Lakes",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mammoth-lakes-california"
  },
  openGraph: {
    title: "Vending Machine Services in Mammoth Lakes, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mammoth Lakes, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/mammoth-lakes-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Mammoth Lakes, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mammoth Lakes, California business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MammothLakesCaliforniaServicesPage() {
  return <PageClient />
}
