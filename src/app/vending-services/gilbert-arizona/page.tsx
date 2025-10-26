import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Gilbert, AZ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Gilbert, Arizona business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Gilbert, vending machines Gilbert AZ, vending operators Gilbert, break room vending Gilbert",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/gilbert-arizona"
  },
  openGraph: {
    title: "Vending Machine Services in Gilbert, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gilbert, Arizona business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/gilbert-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Gilbert, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gilbert, Arizona business."
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

export default function GilbertArizonaServicesPage() {
  return <PageClient />
}
