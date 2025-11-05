import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Racine, WI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Racine, Wisconsin business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Racine, vending machines Racine WI, vending operators Racine, break room vending Racine",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/racine-wisconsin"
  },
  openGraph: {
    title: "Vending Machine Services in Racine, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Racine, Wisconsin business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/racine-wisconsin",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Racine, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Racine, Wisconsin business."
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

export default function RacineWisconsinServicesPage() {
  return <PageClient />
}
