import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Casper, WY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Casper, Wyoming business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Casper, vending machines Casper WY, vending operators Casper, break room vending Casper",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/casper-wyoming"
  },
  openGraph: {
    title: "Vending Machine Services in Casper, WY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Casper, Wyoming business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/casper-wyoming",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Casper, WY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Casper, Wyoming business."
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

export default function CasperWyomingServicesPage() {
  return <PageClient />
}
