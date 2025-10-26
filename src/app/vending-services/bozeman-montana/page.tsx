import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bozeman, MT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bozeman, Montana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bozeman, vending machines Bozeman MT, vending operators Bozeman, break room vending Bozeman",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bozeman-montana"
  },
  openGraph: {
    title: "Vending Machine Services in Bozeman, MT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bozeman, Montana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bozeman-montana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bozeman, MT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bozeman, Montana business."
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

export default function BozemanMontanaServicesPage() {
  return <PageClient />
}
