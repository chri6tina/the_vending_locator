import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Elgin, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Elgin, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Elgin, vending machines Elgin IL, vending operators Elgin, break room vending Elgin",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/elgin-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Elgin, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elgin, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/elgin-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Elgin, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elgin, Illinois business."
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

export default function ElginIllinoisServicesPage() {
  return <PageClient />
}
