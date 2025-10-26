import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Norwalk, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Norwalk, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Norwalk, vending machines Norwalk CT, vending operators Norwalk, break room vending Norwalk",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/norwalk-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in Norwalk, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Norwalk, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/norwalk-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Norwalk, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Norwalk, Connecticut business."
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

export default function NorwalkConnecticutServicesPage() {
  return <PageClient />
}
