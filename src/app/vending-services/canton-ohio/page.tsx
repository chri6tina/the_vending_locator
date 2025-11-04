import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Canton, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Canton, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Canton, vending machines Canton OH, vending operators Canton, break room vending Canton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/canton-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Canton, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Canton, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/canton-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Canton, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Canton, Ohio business."
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

export default function CantonOhioServicesPage() {
  return <PageClient />
}
