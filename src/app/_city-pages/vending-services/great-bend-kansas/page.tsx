import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Great Bend, KS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Great Bend, Kansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Great Bend, vending machines Great Bend FL, vending operators Great Bend, break room vending Great Bend",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/great-bend-kansas"
  },
  openGraph: {
    title: "Vending Machine Services in Great Bend, KS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Great Bend, Kansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/great-bend-kansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Great Bend, KS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Great Bend, Kansas business."
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

export default function GreatBendKansasServicesPage() {
  return <PageClient />
}
