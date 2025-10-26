import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Wichita, KS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Wichita, Kansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Wichita, vending machines Wichita KS, vending operators Wichita, break room vending Wichita",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/wichita-kansas"
  },
  openGraph: {
    title: "Vending Machine Services in Wichita, KS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Wichita, Kansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/wichita-kansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Wichita, KS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Wichita, Kansas business."
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

export default function WichitaKansasServicesPage() {
  return <PageClient />
}
