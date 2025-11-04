import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fullerton, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fullerton, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fullerton, vending machines Fullerton CA, vending operators Fullerton, break room vending Fullerton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fullerton-california"
  },
  openGraph: {
    title: "Vending Machine Services in Fullerton, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fullerton, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fullerton-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fullerton, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fullerton, California business."
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

export default function FullertonCaliforniaServicesPage() {
  return <PageClient />
}
