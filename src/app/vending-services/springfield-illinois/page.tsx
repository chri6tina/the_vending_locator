import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Springfield, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Springfield, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Springfield, vending machines Springfield IL, vending operators Springfield, break room vending Springfield",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/springfield-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Springfield, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Springfield, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/springfield-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Springfield, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Springfield, Illinois business."
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

export default function SpringfieldIllinoisServicesPage() {
  return <PageClient />
}
