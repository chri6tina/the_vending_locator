import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Boulder, CO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Boulder, Colorado business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Boulder, vending machines Boulder CO, vending operators Boulder, break room vending Boulder",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/boulder-colorado"
  },
  openGraph: {
    title: "Vending Machine Services in Boulder, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Boulder, Colorado business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/boulder-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Boulder, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Boulder, Colorado business."
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

export default function BoulderColoradoServicesPage() {
  return <PageClient />
}
