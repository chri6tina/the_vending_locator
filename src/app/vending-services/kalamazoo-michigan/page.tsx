import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Kalamazoo, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Kalamazoo, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Kalamazoo, vending machines Kalamazoo MI, vending operators Kalamazoo, break room vending Kalamazoo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/kalamazoo-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Kalamazoo, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kalamazoo, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/kalamazoo-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Kalamazoo, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kalamazoo, Michigan business."
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

export default function KalamazooMichiganServicesPage() {
  return <PageClient />
}
