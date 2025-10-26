import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Warner Robins, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Warner Robins, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Warner Robins, vending machines Warner Robins GA, vending operators Warner Robins, break room vending Warner Robins",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/warner-robins-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Warner Robins, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Warner Robins, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/warner-robins-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Warner Robins, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Warner Robins, Georgia business."
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

export default function WarnerRobinsGeorgiaServicesPage() {
  return <PageClient />
}
