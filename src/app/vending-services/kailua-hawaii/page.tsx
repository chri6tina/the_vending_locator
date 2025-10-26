import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Kailua, HI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Kailua, Hawaii business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Kailua, vending machines Kailua HI, vending operators Kailua, break room vending Kailua",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/kailua-hawaii"
  },
  openGraph: {
    title: "Vending Machine Services in Kailua, HI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kailua, Hawaii business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/kailua-hawaii",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Kailua, HI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kailua, Hawaii business."
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

export default function KailuaHawaiiServicesPage() {
  return <PageClient />
}
