import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Caldwell, ID - Get Free Installation & Service",
  description: "Get professional vending machine services for your Caldwell, Idaho business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Caldwell, vending machines Caldwell ID, vending operators Caldwell, break room vending Caldwell",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/caldwell-idaho"
  },
  openGraph: {
    title: "Vending Machine Services in Caldwell, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Caldwell, Idaho business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/caldwell-idaho",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Caldwell, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Caldwell, Idaho business."
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

export default function CaldwellIdahoServicesPage() {
  return <PageClient />
}
