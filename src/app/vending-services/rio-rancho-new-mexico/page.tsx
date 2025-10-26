import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rio Rancho, NM - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rio Rancho, New Mexico business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rio Rancho, vending machines Rio Rancho NM, vending operators Rio Rancho, break room vending Rio Rancho",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rio-rancho-new-mexico"
  },
  openGraph: {
    title: "Vending Machine Services in Rio Rancho, NM - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rio Rancho, New Mexico business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rio-rancho-new-mexico",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rio Rancho, NM - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rio Rancho, New Mexico business."
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

export default function RioRanchoNewMexicoServicesPage() {
  return <PageClient />
}
