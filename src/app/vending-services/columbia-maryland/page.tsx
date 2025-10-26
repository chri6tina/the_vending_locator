import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Columbia, MD - Get Free Installation & Service",
  description: "Get professional vending machine services for your Columbia, Maryland business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Columbia, vending machines Columbia MD, vending operators Columbia, break room vending Columbia",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/columbia-maryland"
  },
  openGraph: {
    title: "Vending Machine Services in Columbia, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Columbia, Maryland business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/columbia-maryland",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Columbia, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Columbia, Maryland business."
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

export default function ColumbiaMarylandServicesPage() {
  return <PageClient />
}
