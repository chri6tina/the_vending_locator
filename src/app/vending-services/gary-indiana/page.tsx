import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Gary, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Gary, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Gary, vending machines Gary IN, vending operators Gary, break room vending Gary",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/gary-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Gary, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gary, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/gary-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Gary, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gary, Indiana business."
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

export default function GaryIndianaServicesPage() {
  return <PageClient />
}
