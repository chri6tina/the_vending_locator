import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Frankfort, KY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Frankfort, Kentucky business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Frankfort, vending machines Frankfort KY, vending operators Frankfort, break room vending Frankfort",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/frankfort-kentucky"
  },
  openGraph: {
    title: "Vending Machine Services in Frankfort, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Frankfort, Kentucky business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/frankfort-kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Frankfort, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Frankfort, Kentucky business."
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

export default function FrankfortKentuckyServicesPage() {
  return <PageClient />
}
