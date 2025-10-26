import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Stamford, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Stamford, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Stamford, vending machines Stamford CT, vending operators Stamford, break room vending Stamford",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/stamford-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in Stamford, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Stamford, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/stamford-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Stamford, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Stamford, Connecticut business."
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

export default function StamfordConnecticutServicesPage() {
  return <PageClient />
}
