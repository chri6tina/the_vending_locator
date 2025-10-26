import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rogers, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rogers, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rogers, vending machines Rogers AR, vending operators Rogers, break room vending Rogers",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rogers-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in Rogers, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rogers, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rogers-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rogers, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rogers, Arkansas business."
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

export default function RogersArkansasServicesPage() {
  return <PageClient />
}
