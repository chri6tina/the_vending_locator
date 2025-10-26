import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hartford, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hartford, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hartford, vending machines Hartford CT, vending operators Hartford, break room vending Hartford",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hartford-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in Hartford, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hartford, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hartford-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hartford, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hartford, Connecticut business."
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

export default function HartfordConnecticutServicesPage() {
  return <PageClient />
}
