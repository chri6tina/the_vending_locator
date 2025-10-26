import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Yonkers, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Yonkers, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Yonkers, vending machines Yonkers NY, vending operators Yonkers, break room vending Yonkers",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/yonkers-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in Yonkers, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Yonkers, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/yonkers-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Yonkers, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Yonkers, New York business."
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

export default function YonkersNew YorkServicesPage() {
  return <PageClient />
}
