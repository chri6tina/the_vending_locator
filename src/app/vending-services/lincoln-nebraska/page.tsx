import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lincoln, NE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lincoln, Nebraska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lincoln, vending machines Lincoln NE, vending operators Lincoln, break room vending Lincoln",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lincoln-nebraska"
  },
  openGraph: {
    title: "Vending Machine Services in Lincoln, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lincoln, Nebraska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lincoln-nebraska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lincoln, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lincoln, Nebraska business."
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

export default function LincolnNebraskaServicesPage() {
  return <PageClient />
}
