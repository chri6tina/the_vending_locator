import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pontiac, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pontiac, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pontiac, vending machines Pontiac MI, vending operators Pontiac, break room vending Pontiac",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pontiac-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Pontiac, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pontiac, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pontiac-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pontiac, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pontiac, Michigan business."
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

export default function PontiacMichiganServicesPage() {
  return <PageClient />
}
