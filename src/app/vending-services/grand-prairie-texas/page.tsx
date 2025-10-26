import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Grand Prairie, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Grand Prairie, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Grand Prairie, vending machines Grand Prairie TX, vending operators Grand Prairie, break room vending Grand Prairie",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/grand-prairie-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Grand Prairie, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Grand Prairie, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/grand-prairie-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Grand Prairie, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Grand Prairie, Texas business."
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

export default function GrandPrairieTexasServicesPage() {
  return <PageClient />
}
