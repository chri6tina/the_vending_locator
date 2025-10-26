import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Aurora, CO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Aurora, Colorado business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Aurora, vending machines Aurora CO, vending operators Aurora, break room vending Aurora",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/aurora-colorado"
  },
  openGraph: {
    title: "Vending Machine Services in Aurora, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Aurora, Colorado business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/aurora-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Aurora, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Aurora, Colorado business."
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

export default function AuroraColoradoServicesPage() {
  return <PageClient />
}
