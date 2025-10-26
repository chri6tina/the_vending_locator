import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fresno, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fresno, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fresno, vending machines Fresno CA, vending operators Fresno, break room vending Fresno",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fresno-california"
  },
  openGraph: {
    title: "Vending Machine Services in Fresno, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fresno, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fresno-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fresno, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fresno, California business."
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

export default function FresnoCaliforniaServicesPage() {
  return <PageClient />
}
