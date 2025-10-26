import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Mesquite, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Mesquite, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Mesquite, vending machines Mesquite TX, vending operators Mesquite, break room vending Mesquite",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mesquite-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Mesquite, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mesquite, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/mesquite-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Mesquite, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mesquite, Texas business."
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

export default function MesquiteTexasServicesPage() {
  return <PageClient />
}
