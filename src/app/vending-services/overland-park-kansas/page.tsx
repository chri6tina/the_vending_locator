import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Overland Park, KS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Overland Park, Kansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Overland Park, vending machines Overland Park KS, vending operators Overland Park, break room vending Overland Park",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/overland-park-kansas"
  },
  openGraph: {
    title: "Vending Machine Services in Overland Park, KS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Overland Park, Kansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/overland-park-kansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Overland Park, KS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Overland Park, Kansas business."
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

export default function OverlandParkKansasServicesPage() {
  return <PageClient />
}
