import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Moline, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Moline, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Moline, vending machines Moline IL, vending operators Moline, break room vending Moline",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/moline-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Moline, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Moline, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/moline-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Moline, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Moline, Illinois business."
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

export default function MolineIllinoisServicesPage() {
  return <PageClient />
}
