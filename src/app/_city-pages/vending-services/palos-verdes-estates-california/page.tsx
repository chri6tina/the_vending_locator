import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Palos Verdes Estates, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Palos Verdes Estates, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Palos Verdes Estates, vending machines Palos Verdes Estates FL, vending operators Palos Verdes Estates, break room vending Palos Verdes Estates",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/palos-verdes-estates-california"
  },
  openGraph: {
    title: "Vending Machine Services in Palos Verdes Estates, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Palos Verdes Estates, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/palos-verdes-estates-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Palos Verdes Estates, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Palos Verdes Estates, California business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PalosVerdesEstatesCaliforniaServicesPage() {
  return <PageClient />
}
