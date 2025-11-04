import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Compton, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Compton, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Compton, vending machines Compton CA, vending operators Compton, break room vending Compton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/compton-california"
  },
  openGraph: {
    title: "Vending Machine Services in Compton, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Compton, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/compton-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Compton, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Compton, California business."
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

export default function ComptonCaliforniaServicesPage() {
  return <PageClient />
}
