import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Georgetown, DC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Georgetown, Washington DC business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Georgetown, vending machines Georgetown DC, vending operators Georgetown, break room vending Georgetown",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/georgetown-washington-dc"
  },
  openGraph: {
    title: "Vending Machine Services in Georgetown, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Georgetown, Washington DC business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/georgetown-washington-dc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Georgetown, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Georgetown, Washington DC business."
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

export default function GeorgetownWashingtonDCServicesPage() {
  return <PageClient />
}
