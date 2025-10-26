import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pocatello, ID - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pocatello, Idaho business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pocatello, vending machines Pocatello ID, vending operators Pocatello, break room vending Pocatello",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pocatello-idaho"
  },
  openGraph: {
    title: "Vending Machine Services in Pocatello, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pocatello, Idaho business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pocatello-idaho",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pocatello, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pocatello, Idaho business."
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

export default function PocatelloIdahoServicesPage() {
  return <PageClient />
}
