import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Alexandria, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Alexandria, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Alexandria, vending machines Alexandria LA, vending operators Alexandria, break room vending Alexandria",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/alexandria-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Alexandria, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Alexandria, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/alexandria-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Alexandria, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Alexandria, Louisiana business."
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

export default function AlexandriaLouisianaServicesPage() {
  return <PageClient />
}
