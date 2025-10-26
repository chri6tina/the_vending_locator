import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Amarillo, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Amarillo, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Amarillo, vending machines Amarillo TX, vending operators Amarillo, break room vending Amarillo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/amarillo-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Amarillo, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Amarillo, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/amarillo-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Amarillo, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Amarillo, Texas business."
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

export default function AmarilloTexasServicesPage() {
  return <PageClient />
}
