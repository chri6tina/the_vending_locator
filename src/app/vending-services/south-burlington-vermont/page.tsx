import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in South Burlington, VT - Get Free Installation & Service",
  description: "Get professional vending machine services for your South Burlington, Vermont business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services South Burlington, vending machines South Burlington VT, vending operators South Burlington, break room vending South Burlington",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/south-burlington-vermont"
  },
  openGraph: {
    title: "Vending Machine Services in South Burlington, VT - Get Free Installation & Service",
    description: "Get professional vending machine services for your South Burlington, Vermont business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/south-burlington-vermont",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in South Burlington, VT - Get Free Installation & Service",
    description: "Get professional vending machine services for your South Burlington, Vermont business."
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

export default function SouthBurlingtonVermontServicesPage() {
  return <PageClient />
}
