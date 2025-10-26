import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Chandler, AZ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Chandler, Arizona business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Chandler, vending machines Chandler AZ, vending operators Chandler, break room vending Chandler",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/chandler-arizona"
  },
  openGraph: {
    title: "Vending Machine Services in Chandler, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chandler, Arizona business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/chandler-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Chandler, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chandler, Arizona business."
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

export default function ChandlerArizonaServicesPage() {
  return <PageClient />
}
