import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Juneau, AK - Get Free Installation & Service",
  description: "Get professional vending machine services for your Juneau, Alaska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Juneau, vending machines Juneau AK, vending operators Juneau, break room vending Juneau",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/juneau-alaska"
  },
  openGraph: {
    title: "Vending Machine Services in Juneau, AK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Juneau, Alaska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/juneau-alaska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Juneau, AK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Juneau, Alaska business."
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

export default function JuneauAlaskaServicesPage() {
  return <PageClient />
}
