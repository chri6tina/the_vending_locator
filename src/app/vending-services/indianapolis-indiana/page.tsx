import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Indianapolis, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Indianapolis, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Indianapolis, vending machines Indianapolis IN, vending operators Indianapolis, break room vending Indianapolis",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/indianapolis-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Indianapolis, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Indianapolis, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/indianapolis-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Indianapolis, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Indianapolis, Indiana business."
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

export default function IndianapolisIndianaServicesPage() {
  return <PageClient />
}
