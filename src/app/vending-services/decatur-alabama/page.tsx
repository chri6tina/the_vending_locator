import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Decatur, AL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Decatur, Alabama business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Decatur, vending machines Decatur AL, vending operators Decatur, break room vending Decatur",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/decatur-alabama"
  },
  openGraph: {
    title: "Vending Machine Services in Decatur, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Decatur, Alabama business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/decatur-alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Decatur, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Decatur, Alabama business."
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

export default function DecaturAlabamaServicesPage() {
  return <PageClient />
}
