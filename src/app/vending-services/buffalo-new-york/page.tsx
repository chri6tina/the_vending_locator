import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Buffalo, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Buffalo, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Buffalo, vending machines Buffalo NY, vending operators Buffalo, break room vending Buffalo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/buffalo-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in Buffalo, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Buffalo, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/buffalo-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Buffalo, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Buffalo, New York business."
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

export default function BuffaloNewYorkServicesPage() {
  return <PageClient />
}
