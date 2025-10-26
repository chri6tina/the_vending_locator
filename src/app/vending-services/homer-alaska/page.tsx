import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Homer, AK - Get Free Installation & Service",
  description: "Get professional vending machine services for your Homer, Alaska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Homer, vending machines Homer AK, vending operators Homer, break room vending Homer",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/homer-alaska"
  },
  openGraph: {
    title: "Vending Machine Services in Homer, AK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Homer, Alaska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/homer-alaska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Homer, AK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Homer, Alaska business."
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

export default function HomerAlaskaServicesPage() {
  return <PageClient />
}
