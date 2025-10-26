import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Concord, NH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Concord, New Hampshire business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Concord, vending machines Concord NH, vending operators Concord, break room vending Concord",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/concord-new-hampshire"
  },
  openGraph: {
    title: "Vending Machine Services in Concord, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Concord, New Hampshire business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/concord-new-hampshire",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Concord, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Concord, New Hampshire business."
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

export default function ConcordNewHampshireServicesPage() {
  return <PageClient />
}
