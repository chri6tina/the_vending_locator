import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lewiston, ME - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lewiston, Maine business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lewiston, vending machines Lewiston ME, vending operators Lewiston, break room vending Lewiston",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lewiston-maine"
  },
  openGraph: {
    title: "Vending Machine Services in Lewiston, ME - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lewiston, Maine business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lewiston-maine",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lewiston, ME - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lewiston, Maine business."
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

export default function LewistonMaineServicesPage() {
  return <PageClient />
}
