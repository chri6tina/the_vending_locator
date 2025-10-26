import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Kent, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Kent, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Kent, vending machines Kent WA, vending operators Kent, break room vending Kent",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/kent-washington"
  },
  openGraph: {
    title: "Vending Machine Services in Kent, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kent, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/kent-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Kent, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kent, Washington business."
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

export default function KentWashingtonServicesPage() {
  return <PageClient />
}
