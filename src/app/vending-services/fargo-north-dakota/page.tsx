import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fargo, ND - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fargo, North Dakota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fargo, vending machines Fargo ND, vending operators Fargo, break room vending Fargo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fargo-north-dakota"
  },
  openGraph: {
    title: "Vending Machine Services in Fargo, ND - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fargo, North Dakota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fargo-north-dakota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fargo, ND - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fargo, North Dakota business."
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

export default function FargoNorthDakotaServicesPage() {
  return <PageClient />
}
