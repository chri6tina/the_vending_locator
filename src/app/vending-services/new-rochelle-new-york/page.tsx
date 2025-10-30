import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New Rochelle, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your New Rochelle, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New Rochelle, vending machines New Rochelle NY, vending operators New Rochelle, break room vending New Rochelle",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-rochelle-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in New Rochelle, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Rochelle, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-rochelle-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New Rochelle, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Rochelle, New York business."
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

export default function NewRochelleNewYorkServicesPage() {
  return <PageClient />
}
