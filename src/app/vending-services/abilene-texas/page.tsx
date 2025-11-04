import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Abilene, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Abilene, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Abilene, vending machines Abilene TX, vending operators Abilene, break room vending Abilene",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/abilene-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Abilene, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Abilene, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/abilene-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Abilene, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Abilene, Texas business."
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

export default function AbileneTexasServicesPage() {
  return <PageClient />
}
