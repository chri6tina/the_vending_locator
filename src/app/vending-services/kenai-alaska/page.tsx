import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Kenai, AK - Get Free Installation & Service",
  description: "Get professional vending machine services for your Kenai, Alaska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Kenai, vending machines Kenai AK, vending operators Kenai, break room vending Kenai",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/kenai-alaska"
  },
  openGraph: {
    title: "Vending Machine Services in Kenai, AK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kenai, Alaska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/kenai-alaska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Kenai, AK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kenai, Alaska business."
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

export default function KenaiAlaskaServicesPage() {
  return <PageClient />
}
