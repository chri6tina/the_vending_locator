import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Germantown, MD - Get Free Installation & Service",
  description: "Get professional vending machine services for your Germantown, Maryland business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Germantown, vending machines Germantown MD, vending operators Germantown, break room vending Germantown",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/germantown-maryland"
  },
  openGraph: {
    title: "Vending Machine Services in Germantown, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Germantown, Maryland business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/germantown-maryland",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Germantown, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Germantown, Maryland business."
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

export default function GermantownMarylandServicesPage() {
  return <PageClient />
}
