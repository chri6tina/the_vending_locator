import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Derry, NH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Derry, New Hampshire business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Derry, vending machines Derry NH, vending operators Derry, break room vending Derry",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/derry-new-hampshire"
  },
  openGraph: {
    title: "Vending Machine Services in Derry, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Derry, New Hampshire business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/derry-new-hampshire",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Derry, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Derry, New Hampshire business."
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

export default function DerryNewHampshireServicesPage() {
  return <PageClient />
}
