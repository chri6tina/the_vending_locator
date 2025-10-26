import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Las Cruces, NM - Get Free Installation & Service",
  description: "Get professional vending machine services for your Las Cruces, New Mexico business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Las Cruces, vending machines Las Cruces NM, vending operators Las Cruces, break room vending Las Cruces",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/las-cruces-new-mexico"
  },
  openGraph: {
    title: "Vending Machine Services in Las Cruces, NM - Get Free Installation & Service",
    description: "Get professional vending machine services for your Las Cruces, New Mexico business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/las-cruces-new-mexico",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Las Cruces, NM - Get Free Installation & Service",
    description: "Get professional vending machine services for your Las Cruces, New Mexico business."
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

export default function LasCrucesNewMexicoServicesPage() {
  return <PageClient />
}
