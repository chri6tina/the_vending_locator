import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Dover, NH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Dover, New Hampshire business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Dover, vending machines Dover NH, vending operators Dover, break room vending Dover",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/dover-new-hampshire"
  },
  openGraph: {
    title: "Vending Machine Services in Dover, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Dover, New Hampshire business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/dover-new-hampshire",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Dover, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Dover, New Hampshire business."
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

export default function DoverNewHampshireServicesPage() {
  return <PageClient />
}
