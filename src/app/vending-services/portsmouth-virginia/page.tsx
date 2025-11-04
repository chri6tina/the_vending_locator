import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Portsmouth, VA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Portsmouth, Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Portsmouth, vending machines Portsmouth VA, vending operators Portsmouth, break room vending Portsmouth",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/portsmouth-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in Portsmouth, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Portsmouth, Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/portsmouth-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Portsmouth, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Portsmouth, Virginia business."
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

export default function PortsmouthVirginiaServicesPage() {
  return <PageClient />
}
