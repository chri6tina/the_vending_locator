import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Get Vending Machines for Your Business | Free Placement | The Vending Locator",
  description: "Get free vending machine placement for your business. Connect with professional vending operators who will install, stock, and maintain machines at no cost to you.",
  keywords: "vending machines for business, free vending machine placement, get vending machines, business vending services",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services-contact"
  },
  openGraph: {
    title: "Get Vending Machines for Your Business | Free Placement",
    description: "Get free vending machine placement for your business. Connect with professional vending operators.",
    url: "https://www.thevendinglocator.com/vending-services-contact",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Vending Machines for Your Business",
    description: "Get free vending machine placement for your business."
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

export default function VendingServicesContactPage() {
  return <PageClient />
}
