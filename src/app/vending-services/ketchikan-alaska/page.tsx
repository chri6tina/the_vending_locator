import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Ketchikan, AK - Get Free Installation & Service",
  description: "Get professional vending machine services for your Ketchikan, Alaska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Ketchikan, vending machines Ketchikan AK, vending operators Ketchikan, break room vending Ketchikan",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/ketchikan-alaska"
  },
  openGraph: {
    title: "Vending Machine Services in Ketchikan, AK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Ketchikan, Alaska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/ketchikan-alaska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Ketchikan, AK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Ketchikan, Alaska business."
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

export default function KetchikanAlaskaServicesPage() {
  return <PageClient />
}
