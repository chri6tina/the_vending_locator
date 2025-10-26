import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Merrimack, NH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Merrimack, New Hampshire business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Merrimack, vending machines Merrimack NH, vending operators Merrimack, break room vending Merrimack",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/merrimack-new-hampshire"
  },
  openGraph: {
    title: "Vending Machine Services in Merrimack, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Merrimack, New Hampshire business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/merrimack-new-hampshire",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Merrimack, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Merrimack, New Hampshire business."
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

export default function MerrimackNewHampshireServicesPage() {
  return <PageClient />
}
