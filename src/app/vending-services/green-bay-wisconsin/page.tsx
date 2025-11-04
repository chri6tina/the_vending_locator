import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Green Bay, WI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Green Bay, Wisconsin business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Green Bay, vending machines Green Bay WI, vending operators Green Bay, break room vending Green Bay",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/green-bay-wisconsin"
  },
  openGraph: {
    title: "Vending Machine Services in Green Bay, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Green Bay, Wisconsin business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/green-bay-wisconsin",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Green Bay, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Green Bay, Wisconsin business."
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

export default function GreenBayWisconsinServicesPage() {
  return <PageClient />
}
