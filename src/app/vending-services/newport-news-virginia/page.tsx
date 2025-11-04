import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Newport News, VA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Newport News, Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Newport News, vending machines Newport News VA, vending operators Newport News, break room vending Newport News",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/newport-news-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in Newport News, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Newport News, Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/newport-news-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Newport News, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Newport News, Virginia business."
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

export default function NewportNewsVirginiaServicesPage() {
  return <PageClient />
}
