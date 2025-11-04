import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Santa Fe, NM - Get Free Installation & Service",
  description: "Get professional vending machine services for your Santa Fe, New Mexico business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Santa Fe, vending machines Santa Fe NM, vending operators Santa Fe, break room vending Santa Fe",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/santa-fe-new-mexico"
  },
  openGraph: {
    title: "Vending Machine Services in Santa Fe, NM - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Fe, New Mexico business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/santa-fe-new-mexico",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Santa Fe, NM - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Fe, New Mexico business."
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

export default function SantaFeNewMexicoServicesPage() {
  return <PageClient />
}
