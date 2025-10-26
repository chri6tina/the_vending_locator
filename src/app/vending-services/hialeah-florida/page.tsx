import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hialeah, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hialeah, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hialeah, vending machines Hialeah FL, vending operators Hialeah, break room vending Hialeah",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hialeah-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Hialeah, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hialeah, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hialeah-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hialeah, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hialeah, Florida business."
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

export default function HialeahServicesPage() {
  return <PageClient />
}
