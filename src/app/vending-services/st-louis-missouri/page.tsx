import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in St. Louis, MO - Get Free Installation & Service",
  description: "Get professional vending machine services for your St. Louis, Missouri business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services St. Louis, vending machines St. Louis MO, vending operators St. Louis, break room vending St. Louis",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/st-louis-missouri"
  },
  openGraph: {
    title: "Vending Machine Services in St. Louis, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your St. Louis, Missouri business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/st-louis-missouri",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in St. Louis, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your St. Louis, Missouri business."
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

export default function StLouisMissouriServicesPage() {
  return <PageClient />
}
