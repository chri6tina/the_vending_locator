import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Gulfport, MS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Gulfport, Mississippi business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Gulfport, vending machines Gulfport MS, vending operators Gulfport, break room vending Gulfport",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/gulfport-mississippi"
  },
  openGraph: {
    title: "Vending Machine Services in Gulfport, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gulfport, Mississippi business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/gulfport-mississippi",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Gulfport, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gulfport, Mississippi business."
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

export default function GulfportMississippiServicesPage() {
  return <PageClient />
}
