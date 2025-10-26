import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Independence, MO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Independence, Missouri business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Independence, vending machines Independence MO, vending operators Independence, break room vending Independence",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/independence-missouri"
  },
  openGraph: {
    title: "Vending Machine Services in Independence, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Independence, Missouri business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/independence-missouri",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Independence, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Independence, Missouri business."
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

export default function IndependenceMissouriServicesPage() {
  return <PageClient />
}
