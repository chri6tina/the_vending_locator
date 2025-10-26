import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pine Bluff, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pine Bluff, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pine Bluff, vending machines Pine Bluff AR, vending operators Pine Bluff, break room vending Pine Bluff",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pine-bluff-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in Pine Bluff, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pine Bluff, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pine-bluff-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pine Bluff, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pine Bluff, Arkansas business."
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

export default function PineBluffArkansasServicesPage() {
  return <PageClient />
}
