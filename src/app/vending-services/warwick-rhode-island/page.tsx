import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Warwick, RI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Warwick, Rhode Island business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Warwick, vending machines Warwick RI, vending operators Warwick, break room vending Warwick",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/warwick-rhode-island"
  },
  openGraph: {
    title: "Vending Machine Services in Warwick, RI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Warwick, Rhode Island business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/warwick-rhode-island",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Warwick, RI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Warwick, Rhode Island business."
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

export default function WarwickRhodeIslandServicesPage() {
  return <PageClient />
}
