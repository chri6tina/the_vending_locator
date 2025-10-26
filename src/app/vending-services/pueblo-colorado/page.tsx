import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pueblo, CO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pueblo, Colorado business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pueblo, vending machines Pueblo CO, vending operators Pueblo, break room vending Pueblo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pueblo-colorado"
  },
  openGraph: {
    title: "Vending Machine Services in Pueblo, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pueblo, Colorado business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pueblo-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pueblo, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pueblo, Colorado business."
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

export default function PuebloColoradoServicesPage() {
  return <PageClient />
}
