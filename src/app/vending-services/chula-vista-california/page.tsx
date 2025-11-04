import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Chula Vista, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Chula Vista, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Chula Vista, vending machines Chula Vista CA, vending operators Chula Vista, break room vending Chula Vista",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/chula-vista-california"
  },
  openGraph: {
    title: "Vending Machine Services in Chula Vista, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chula Vista, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/chula-vista-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Chula Vista, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chula Vista, California business."
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

export default function ChulaVistaCaliforniaServicesPage() {
  return <PageClient />
}
