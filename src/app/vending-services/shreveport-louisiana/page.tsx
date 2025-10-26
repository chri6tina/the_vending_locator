import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Shreveport, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Shreveport, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Shreveport, vending machines Shreveport LA, vending operators Shreveport, break room vending Shreveport",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/shreveport-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Shreveport, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Shreveport, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/shreveport-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Shreveport, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Shreveport, Louisiana business."
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

export default function ShreveportLouisianaServicesPage() {
  return <PageClient />
}
