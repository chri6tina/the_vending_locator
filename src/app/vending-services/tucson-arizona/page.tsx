import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Tucson, AZ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Tucson, Arizona business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Tucson, vending machines Tucson AZ, vending operators Tucson, break room vending Tucson",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/tucson-arizona"
  },
  openGraph: {
    title: "Vending Machine Services in Tucson, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Tucson, Arizona business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/tucson-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Tucson, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Tucson, Arizona business."
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

export default function TucsonArizonaServicesPage() {
  return <PageClient />
}
