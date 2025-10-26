import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lakewood, CO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lakewood, Colorado business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lakewood, vending machines Lakewood CO, vending operators Lakewood, break room vending Lakewood",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lakewood-colorado"
  },
  openGraph: {
    title: "Vending Machine Services in Lakewood, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lakewood, Colorado business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lakewood-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lakewood, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lakewood, Colorado business."
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

export default function LakewoodColoradoServicesPage() {
  return <PageClient />
}
