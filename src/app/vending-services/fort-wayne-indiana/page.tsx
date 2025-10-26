import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fort Wayne, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fort Wayne, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fort Wayne, vending machines Fort Wayne IN, vending operators Fort Wayne, break room vending Fort Wayne",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fort-wayne-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Fort Wayne, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Wayne, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fort-wayne-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fort Wayne, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Wayne, Indiana business."
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

export default function FortWayneIndianaServicesPage() {
  return <PageClient />
}
