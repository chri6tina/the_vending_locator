import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Salem, NH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Salem, New Hampshire business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Salem, vending machines Salem NH, vending operators Salem, break room vending Salem",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/salem-new-hampshire"
  },
  openGraph: {
    title: "Vending Machine Services in Salem, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Salem, New Hampshire business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/salem-new-hampshire",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Salem, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Salem, New Hampshire business."
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

export default function SalemNewHampshireServicesPage() {
  return <PageClient />
}
