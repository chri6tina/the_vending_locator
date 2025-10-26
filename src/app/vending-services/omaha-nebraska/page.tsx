import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Omaha, NE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Omaha, Nebraska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Omaha, vending machines Omaha NE, vending operators Omaha, break room vending Omaha",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/omaha-nebraska"
  },
  openGraph: {
    title: "Vending Machine Services in Omaha, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Omaha, Nebraska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/omaha-nebraska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Omaha, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Omaha, Nebraska business."
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

export default function OmahaNebraskaServicesPage() {
  return <PageClient />
}
