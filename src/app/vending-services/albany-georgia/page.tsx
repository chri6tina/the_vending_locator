import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Albany, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Albany, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Albany, vending machines Albany GA, vending operators Albany, break room vending Albany",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/albany-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Albany, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Albany, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/albany-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Albany, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Albany, Georgia business."
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

export default function AlbanyGeorgiaServicesPage() {
  return <PageClient />
}
