import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Erie, PA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Erie, Pennsylvania business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Erie, vending machines Erie PA, vending operators Erie, break room vending Erie",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/erie-pennsylvania"
  },
  openGraph: {
    title: "Vending Machine Services in Erie, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Erie, Pennsylvania business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/erie-pennsylvania",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Erie, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Erie, Pennsylvania business."
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

export default function EriePennsylvaniaServicesPage() {
  return <PageClient />
}
