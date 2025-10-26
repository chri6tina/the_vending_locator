import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Waukegan, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Waukegan, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Waukegan, vending machines Waukegan IL, vending operators Waukegan, break room vending Waukegan",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/waukegan-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Waukegan, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Waukegan, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/waukegan-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Waukegan, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Waukegan, Illinois business."
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

export default function WaukeganIllinoisServicesPage() {
  return <PageClient />
}
