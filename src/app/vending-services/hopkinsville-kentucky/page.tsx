import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hopkinsville, KY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hopkinsville, Kentucky business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hopkinsville, vending machines Hopkinsville KY, vending operators Hopkinsville, break room vending Hopkinsville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hopkinsville-kentucky"
  },
  openGraph: {
    title: "Vending Machine Services in Hopkinsville, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hopkinsville, Kentucky business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hopkinsville-kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hopkinsville, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hopkinsville, Kentucky business."
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

export default function HopkinsvilleKentuckyServicesPage() {
  return <PageClient />
}
